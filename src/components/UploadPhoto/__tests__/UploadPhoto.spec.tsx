import React, { createRef } from 'react';
import { fireEvent, render } from 'react-native-testing-library';
import renderer, { act } from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';
import UploadPhoto from '..';
import theme from '../../../theme';
import { IconFonts } from '../../../types';

// Mock para react-native-image-picker
jest.mock('react-native-image-picker', () => ({
  launchImageLibrary: jest.fn((options, callback) => {
    callback({
      didCancel: false,
      assets: [{ uri: 'file://test/image.jpg' }],
    });
  }),
}));

// Mock para react-native-camera
jest.mock('react-native-camera', () => {
  const mockTakePictureAsync = jest.fn().mockResolvedValue({
    uri: 'file://test/camera_image.jpg',
  });

  return {
    RNCamera: {
      Constants: {
        Type: {
          front: 'front',
          back: 'back',
        },
        FlashMode: {
          auto: 'auto',
          on: 'on',
          off: 'off',
        },
      },
    },
  };
});

// Mock para react-native-fast-image
jest.mock('react-native-fast-image', () => {
  const React = require('react');
  const mockComponent = jest
    .fn()
    .mockImplementation(({ children, style, source }) => {
      return React.createElement('FastImage', { style, source }, children);
    });

  mockComponent.resizeMode = {
    cover: 'cover',
    contain: 'contain',
    stretch: 'stretch',
    center: 'center',
  };

  return mockComponent;
});

describe('<UploadPhoto />', () => {
  it('should render UploadPhoto', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <UploadPhoto id="testing" accessibility="" />
      </ThemeProvider>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render UploadPhoto with camera', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <UploadPhoto id="testing" accessibility="" displayCamera />
      </ThemeProvider>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should trigger onPress function', () => {
    const onPressEvent = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <UploadPhoto id="testing" accessibility="" onPress={onPressEvent} />
      </ThemeProvider>,
    );

    const component = getByTestId('testing');

    fireEvent.press(component);

    expect(onPressEvent).toHaveBeenCalled();
  });

  it('should render UploadPhoto with custom accessibility label', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <UploadPhoto
          id="testing"
          accessibility=""
          accessibilityLabel="testing"
        />
      </ThemeProvider>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render UploadPhoto with custom test id', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <UploadPhoto id="testing" accessibility="" testID="testId" />
      </ThemeProvider>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render UploadPhoto with all custom props', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <UploadPhoto
          id="testing"
          testID="testId"
          accessibility=""
          accessibilityLabel="testing"
          displayCamera
        />
      </ThemeProvider>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should call onUpload when an image is selected', () => {
    const onClearUpload = jest.fn();
    const onUpload = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <UploadPhoto
          id="testing"
          accessibility=""
          onUpload={onUpload}
          onClearUpload={onClearUpload}
        />
      </ThemeProvider>,
    );

    const component = getByTestId('testing');
    fireEvent(component, 'onUpload', {
      didCancel: false,
      assets: [{ uri: 'image_uri' }],
    });

    expect(onUpload).toHaveBeenCalledWith({
      didCancel: false,
      assets: [{ uri: 'image_uri' }],
    });

    fireEvent(component, 'onClearUpload');

    expect(onClearUpload).toHaveBeenCalled();
  });

  it('should test ref methods', async () => {
    const ref = createRef<any>();

    renderer.create(
      <ThemeProvider theme={theme}>
        <UploadPhoto
          id="testing"
          testID="upload-test"
          accessibility=""
          ref={ref}
          image="https://example.com/image.jpg"
        />
      </ThemeProvider>,
    );

    // Testa o método getUploadImage
    expect(ref.current.getUploadImage()).toBe('https://example.com/image.jpg');

    // Testa o método clearUploadImage
    act(() => {
      ref.current.clearUploadImage();
    });

    expect(ref.current.getUploadImage()).toBe('');

    // Testa o método openPicker
    await act(async () => {
      await ref.current.openPicker();
    });

    // Após openPicker, o getUploadImage deve retornar o novo URI
    expect(ref.current.getUploadImage()).toBe('file://test/image.jpg');
  });

  it('should render with custom upload text and icon', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <UploadPhoto
          id="testing"
          accessibility=""
          uploadText="Custom Upload Text"
          uploadIcon="camera"
          uploadIconSize={48}
        />
      </ThemeProvider>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render with custom delete icon', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <UploadPhoto
          id="testing"
          accessibility=""
          deleteIcon="close"
          image="https://example.com/image.jpg"
        />
      </ThemeProvider>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should call onClearUpload when delete icon is pressed', () => {
    const onClearUpload = jest.fn();
    const { getByA11yLabel } = render(
      <ThemeProvider theme={theme}>
        <UploadPhoto
          id="testing"
          accessibility=""
          onClearUpload={onClearUpload}
          image="https://example.com/image.jpg"
        />
      </ThemeProvider>,
    );

    const deleteButton = getByA11yLabel('Remover imagem');
    fireEvent.press(deleteButton);

    expect(onClearUpload).toHaveBeenCalled();
  });

  it('should handle image quality parameter', async () => {
    const { launchImageLibrary } = require('react-native-image-picker');
    const ref = createRef<any>();

    renderer.create(
      <ThemeProvider theme={theme}>
        <UploadPhoto
          id="testing"
          accessibility=""
          ref={ref}
          imageQuality={0.8}
        />
      </ThemeProvider>,
    );

    await act(async () => {
      await ref.current.openPicker();
    });

    expect(launchImageLibrary).toHaveBeenCalledWith(
      expect.objectContaining({
        quality: 0.8,
      }),
      expect.any(Function),
    );
  });

  it('should handle takePicture method', async () => {
    const ref = createRef<any>();

    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <UploadPhoto id="testing" accessibility="" ref={ref} displayCamera />
      </ThemeProvider>,
    );

    // Mock da referência da câmera
    const mockTakePictureAsync = jest.fn().mockResolvedValue({
      uri: 'file://test/camera_image.jpg',
    });

    // Atribuir o mock à referência da câmera
    ref.current.cameraRef = {
      current: { takePictureAsync: mockTakePictureAsync },
    };

    // Chamar o método takePicture
    await act(async () => {
      await ref.current.takePicture();
    });

    // Verificar se a imagem foi atualizada
    expect(ref.current.getUploadImage()).toBe({
      uri: 'file://test/camera_image.jpg',
    });
  });

  it('should handle different icon types', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <UploadPhoto
          id="testing"
          accessibility=""
          iconType={IconFonts.MaterialIcons}
        />
      </ThemeProvider>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should handle image cancellation in picker', async () => {
    // Sobrescrever o mock para simular cancelamento
    const { launchImageLibrary } = require('react-native-image-picker');
    launchImageLibrary.mockImplementationOnce((options, callback) => {
      callback({
        didCancel: true,
      });
    });

    const onUpload = jest.fn();
    const ref = createRef<any>();

    renderer.create(
      <ThemeProvider theme={theme}>
        <UploadPhoto
          id="testing"
          accessibility=""
          ref={ref}
          onUpload={onUpload}
        />
      </ThemeProvider>,
    );

    await act(async () => {
      await ref.current.openPicker();
    });

    // onUpload não deve ser chamado quando o usuário cancela
    expect(onUpload).not.toHaveBeenCalled();
  });

  it('should handle disabled state when no onPress or onUpload is provided', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <UploadPhoto id="testing" accessibility="" />
      </ThemeProvider>,
    );

    const component = getByTestId('testing');
    expect(component.props.disabled).toBe(true);
  });
});
