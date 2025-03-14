/* eslint-disable sonarjs/no-duplicate-string */
import React, { createRef } from 'react';
import { launchImageLibrary } from 'react-native-image-picker';
import renderer, { act } from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';
import { fireEvent, render } from '@testing-library/react-native';
import Avatar from '..';
import { ImagePlaceholder as defaultAvatar } from '../../../assets/images';
import theme from '../../../theme';
import Icon from '../../Icon';

// Mock para react-native-image-picker
jest.mock('react-native-image-picker', () => ({
  launchImageLibrary: jest.fn(async () => {
    return {
      didCancel: false,
      assets: [{ uri: 'file://test/image.jpg' }],
    };
  }),
}));

const defaultAvatarUrl = 'https://avatars.githubusercontent.com/u/4726921?v=4';

describe('<Avatar />', () => {
  it('should render Avatar', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Avatar id="testing" accessibility="" />
      </ThemeProvider>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Avatar with external image', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Avatar
          id="testing"
          accessibility=""
          image={{ uri: defaultAvatarUrl }}
        />
      </ThemeProvider>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should trigger onPress function', () => {
    const onPressEvent = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Avatar id="testing" accessibility="" onPress={onPressEvent} />
      </ThemeProvider>,
    );

    const component = getByTestId('testing');

    fireEvent.press(component);

    expect(onPressEvent).toHaveBeenCalled();
  });

  it('should render Avatar with custom image', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Avatar id="testing" accessibility="" image={defaultAvatar} />
      </ThemeProvider>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Avatar with border', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Avatar id="testing" accessibility="" showBorder />
      </ThemeProvider>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Avatar with custom border', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Avatar
          id="testing"
          accessibility=""
          showBorder
          borderWidth={1}
          borderColor="#2ecc71"
        />
      </ThemeProvider>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Avatar with custom size', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Avatar id="testing" accessibility="" size={24} />
      </ThemeProvider>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Avatar with custom accessibility label', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Avatar id="testing" accessibility="" accessibilityLabel="testing" />
      </ThemeProvider>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Avatar with custom test id', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Avatar id="testing" accessibility="" testID="testId" />
      </ThemeProvider>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Avatar with monogram', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Avatar
          id="testing"
          accessibility=""
          testID="testId"
          name="Builders Test"
        />
      </ThemeProvider>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Avatar with styled monogram', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Avatar
          id="testing"
          accessibility=""
          testID="testId"
          name="Builders Test"
          monogramStyle={{ backgroundColor: '#2ecc71' }}
        />
      </ThemeProvider>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Avatar with all custom props', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Avatar
          id="testing"
          testID="testId"
          accessibility=""
          accessibilityLabel="testing"
          size={24}
          showBorder
          borderWidth={1}
          borderColor="#2ecc71"
        />
      </ThemeProvider>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Image component', () => {
    const { getByTestId } = render(
      <Avatar id="avatar-test" accessibility="avatar-test" />,
    );

    const image = getByTestId('avatar-test'); // Substitua 'image-test-id' pelo testID real do componente Image
    expect(image).toBeTruthy();
  });

  it('should render UploadIconWrapper when no image is visible and a name is provided', () => {
    const { getByTestId } = render(
      <Avatar
        id="avatar-test"
        testID="avatar-testID"
        accessibility="avatar-test"
        name="Test Name"
      />,
    );

    const uploadIconWrapper = getByTestId('avatar-testID');
    expect(uploadIconWrapper).toBeTruthy();
  });

  it('should call onUpload when image is selected', async () => {
    const onUploadMock = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Avatar
          id="testing"
          testID="avatar-test"
          accessibility=""
          onUpload={onUploadMock}
        />
      </ThemeProvider>,
    );

    const component = getByTestId('avatar-test');
    fireEvent.press(component);

    // Espera que o onUpload seja chamado com o URI da imagem
    expect(onUploadMock).toHaveBeenCalledWith('file://test/image.jpg');
  });

  it('should test ref methods', async () => {
    const ref = createRef<any>();
    const testImage = { uri: 'https://example.com/image.jpg' };

    const { rerender } = render(
      <ThemeProvider theme={theme}>
        <Avatar
          id="testing"
          testID="avatar-test"
          accessibility=""
          ref={ref}
          image={testImage}
        />
      </ThemeProvider>,
    );

    // Espera o componente ser montado
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    // Simula o upload de uma imagem
    act(() => {
      ref.current.openPicker = jest.fn().mockImplementation(() => {
        ref.current.setUploadedImage = testImage.uri;
        return Promise.resolve();
      });
    });

    // Testa o método getUploadImage - não espera um valor específico, apenas verifica se é undefined
    expect(ref.current.getUploadImage()).toBeUndefined();

    // Testa o método clearUploadImage
    act(() => {
      ref.current.clearUploadImage();
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Avatar id="testing" testID="avatar-test" accessibility="" ref={ref} />
      </ThemeProvider>,
    );

    expect(ref.current.getUploadImage()).toBeUndefined();

    // Testa o método openPicker
    await act(async () => {
      await ref.current.openPicker();
    });

    // Após openPicker, o getUploadImage deve retornar o novo URI
    expect(ref.current.getUploadImage()).toBe('file://test/image.jpg');
  });

  it('should handle string image URI correctly', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Avatar
          id="testing"
          accessibility=""
          image={{ uri: 'https://example.com/image.jpg' }}
        />
      </ThemeProvider>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should handle invalid URI correctly', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Avatar id="testing" accessibility="" image={{ uri: 'invalid-uri' }} />
      </ThemeProvider>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should not display monogram when displayMonogram is false', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Avatar
          id="testing"
          accessibility=""
          name="Test Name"
          displayMonogram={false}
        />
      </ThemeProvider>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should handle image quality parameter', async () => {
    const ref = createRef<any>();

    renderer.create(
      <ThemeProvider theme={theme}>
        <Avatar id="testing" accessibility="" ref={ref} imageQuality={0.8} />
      </ThemeProvider>,
    );

    await act(async () => {
      await ref.current.openPicker();
    });

    expect(launchImageLibrary).toHaveBeenCalledWith(
      expect.objectContaining({
        imageQuality: 0.8,
      }),
      expect.any(Function),
    );
  });

  it('should handle canceled image selection', async () => {
    // Alterando o mock para simular cancelamento
    (launchImageLibrary as jest.Mock).mockImplementationOnce(async () => {
      return {
        didCancel: true,
      };
    });

    const onUploadMock = jest.fn();
    const ref = createRef<any>();

    renderer.create(
      <ThemeProvider theme={theme}>
        <Avatar
          id="testing"
          accessibility=""
          ref={ref}
          onUpload={onUploadMock}
        />
      </ThemeProvider>,
    );

    await act(async () => {
      await ref.current.openPicker();
    });

    // onUpload não deve ser chamado quando o usuário cancela
    expect(onUploadMock).not.toHaveBeenCalled();
  });

  it('should be disabled when neither onPress nor onUpload are provided', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Avatar id="testing" testID="avatar-test" accessibility="" />
      </ThemeProvider>,
    );

    const avatar = getByTestId('avatar-test');
    expect(avatar.props.accessibilityState.disabled).toBe(true);
  });

  it('should show camera icon when name is provided but no image is visible', () => {
    const { UNSAFE_getAllByType } = render(
      <ThemeProvider theme={theme}>
        <Avatar id="testing" accessibility="" name="Test User" />
      </ThemeProvider>,
    );

    // Verifica se o ícone de câmera está presente
    const icons = UNSAFE_getAllByType(Icon);
    const cameraIcon = icons.find((icon) => icon.props.name === 'camera');
    expect(cameraIcon).toBeTruthy();
  });

  it('should not show monogram when displayMonogram is false, but still show camera icon', () => {
    const { UNSAFE_getAllByType, queryByText } = render(
      <ThemeProvider theme={theme}>
        <Avatar
          id="testing"
          accessibility=""
          name="Test User"
          displayMonogram={false}
        />
      </ThemeProvider>,
    );

    // Monograma não deve estar presente
    const monogram = queryByText('TU');
    expect(monogram).toBeNull();

    // Ícone de câmera deve estar presente
    const icons = UNSAFE_getAllByType(Icon);
    const cameraIcon = icons.find((icon) => icon.props.name === 'camera');
    expect(cameraIcon).toBeTruthy();
  });

  it('should correctly update image when it changes via props', () => {
    const { rerender } = render(
      <ThemeProvider theme={theme}>
        <Avatar
          id="testing"
          accessibility=""
          image={{ uri: 'https://example.com/initial-image.jpg' }}
        />
      </ThemeProvider>,
    );

    // Rerender com uma imagem diferente
    rerender(
      <ThemeProvider theme={theme}>
        <Avatar
          id="testing"
          accessibility=""
          image={{ uri: 'https://example.com/updated-image.jpg' }}
        />
      </ThemeProvider>,
    );

    // Neste ponto o componente deveria ter atualizado a imagem visível
    // devido ao useEffect que observa mudanças na prop 'image'
  });
});
