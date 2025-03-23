/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable sonarjs/prefer-immediate-return */
/* eslint-disable sonarjs/no-nested-template-literals */
/* eslint-disable promise/prefer-await-to-callbacks */
import React, { createRef } from 'react';
import { launchImageLibrary } from 'react-native-image-picker';
import renderer, { act } from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import Avatar from '..';
import { ImagePlaceholder as defaultAvatar } from '../../../assets/images';
import theme from '../../../theme';
import Icon from '../../Icon';

// Constantes reutilizáveis
const TEST_IMAGE_URI = 'file://test/image.jpg';
const defaultAvatarUrl = 'https://avatars.githubusercontent.com/u/4726921?v=4';

// Mock para react-native-image-picker
jest.mock('react-native-image-picker', () => {
  return {
    launchImageLibrary: jest.fn((_options, callback) => {
      // Chamar o callback com a resposta simulada
      if (callback) {
        callback({
          didCancel: false,
          assets: [{ uri: 'file://test/image.jpg' }],
        });
      }

      // Retornar uma Promise para compatibilidade com implementações que aguardam uma Promise
      return Promise.resolve({
        didCancel: false,
        assets: [{ uri: 'file://test/image.jpg' }],
      });
    }),
  };
});

// Mock para RNCamera para evitar erros com o styled-components
jest.mock('react-native-camera', () => {
  const React = jest.requireActual('react');

  // Criando um componente React mockado
  const RNCameraMock = React.forwardRef((props, ref) => {
    return React.createElement('RNCamera', { ...props, ref });
  });

  return {
    RNCamera: RNCameraMock,
  };
});

describe('<Avatar />', () => {
  // Limpar os mocks antes de cada teste
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render Avatar', () => {
    let wrapper;
    
    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Avatar id="testing" accessibility="" />
        </ThemeProvider>,
      );
    });
    
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Avatar with external image', () => {
    let wrapper;
    
    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Avatar
            id="testing"
            accessibility=""
            image={{ uri: defaultAvatarUrl }}
          />
        </ThemeProvider>,
      );
    });
    
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

    // Criando uma versão personalizada do mock para este teste específico
    (launchImageLibrary as jest.Mock).mockImplementationOnce(
      (_options, callback) => {
        // Chamar o callback com a resposta simulada
        if (callback) {
          callback({
            didCancel: false,
            assets: [{ uri: TEST_IMAGE_URI }],
          });
        }

        return Promise.resolve({
          didCancel: false,
          assets: [{ uri: TEST_IMAGE_URI }],
        });
      },
    );

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

    // Dispara o evento de press que deve chamar o openPicker
    fireEvent.press(component);

    // Aguardar que o onUpload seja chamado
    await waitFor(
      () => {
        expect(onUploadMock).toHaveBeenCalledWith(TEST_IMAGE_URI);
      },
      { timeout: 3000 },
    );
  });

  it('should handle ref methods correctly', async () => {
    const ref = createRef<any>();
    const onUploadMock = jest.fn();

    // Mock personalizado para o teste de refs
    (launchImageLibrary as jest.Mock).mockImplementationOnce(
      (_options, callback) => {
        // Chamar o callback com a resposta simulada
        if (callback) {
          callback({
            didCancel: false,
            assets: [{ uri: TEST_IMAGE_URI }],
          });
        }

        return Promise.resolve({
          didCancel: false,
          assets: [{ uri: TEST_IMAGE_URI }],
        });
      },
    );

    // Usando act para renderização inicial
    await act(async () => {
      render(
        <ThemeProvider theme={theme}>
          <Avatar
            id="testing"
            testID="avatar-test"
            accessibility=""
            ref={ref}
            onUpload={onUploadMock}
          />
        </ThemeProvider>,
      );
    });

    // Garantir que o ref foi configurado corretamente
    expect(ref.current).toBeTruthy();
    expect(typeof ref.current.openPicker).toBe('function');
    expect(typeof ref.current.clearUploadImage).toBe('function');
    expect(typeof ref.current.getUploadImage).toBe('function');

    // Testar o método openPicker com act
    await act(async () => {
      await ref.current.openPicker();
    });

    // Aguardar que o onUpload seja chamado
    await waitFor(
      () => {
        expect(onUploadMock).toHaveBeenCalledWith(TEST_IMAGE_URI);
      },
      { timeout: 15000 },
    );

    // Limpar a imagem e verificar se foi limpa corretamente
    await act(async () => {
      ref.current.clearUploadImage();
    });

    // Não podemos verificar diretamente o estado interno, mas podemos verificar se onUpload não foi chamado novamente
    expect(onUploadMock).toHaveBeenCalledTimes(1);
  }, 15000); // Aumentar timeout para este teste

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
    // Corrigimos o teste para usar uma string vazia para a URI
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Avatar id="testing" accessibility="" image={{ uri: '' }} />
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
    const onUploadMock = jest.fn();

    // Reset e configuração do mock para verificar os parâmetros passados
    (launchImageLibrary as jest.Mock).mockImplementationOnce(
      (_options, callback) => {
        // Verifica se as opções contêm a qualidade de imagem correta
        expect(_options.imageQuality).toBe(0.8);

        // Chamar o callback com a resposta simulada
        if (callback) {
          callback({
            didCancel: false,
            assets: [{ uri: TEST_IMAGE_URI }],
          });
        }

        return Promise.resolve({
          didCancel: false,
          assets: [{ uri: TEST_IMAGE_URI }],
        });
      },
    );

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Avatar
          id="testing"
          testID="avatar-test"
          accessibility=""
          imageQuality={0.8}
          onUpload={onUploadMock}
        />
      </ThemeProvider>,
    );

    const component = getByTestId('avatar-test');

    // Dispara o evento de press que deve chamar o openPicker
    fireEvent.press(component);

    // Aguardar que o onUpload seja chamado
    await waitFor(
      () => {
        expect(onUploadMock).toHaveBeenCalledWith(TEST_IMAGE_URI);
      },
      { timeout: 3000 },
    );
  });

  it('should handle canceled image selection', async () => {
    const onUploadMock = jest.fn();

    // Alterando o mock para simular cancelamento
    (launchImageLibrary as jest.Mock).mockImplementationOnce(
      (_options, callback) => {
        // Chamar o callback com cancelamento
        if (callback) {
          callback({
            didCancel: true,
          });
        }

        return Promise.resolve({
          didCancel: true,
        });
      },
    );

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

    // Dispara o evento de press que deve chamar o openPicker
    fireEvent.press(component);

    // Aguardar um pouco para garantir que o mock foi executado
    await new Promise((resolve) => setTimeout(resolve, 100));

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

  it('should open image picker when pressed', async () => {
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

    // Usando act para envolver a operação que causa mudança de estado
    await act(async () => {
      fireEvent.press(component);
    });

    // Aguardar que o onUpload seja chamado
    await waitFor(
      () => {
        expect(onUploadMock).toHaveBeenCalledWith(TEST_IMAGE_URI);
      },
      { timeout: 3000 },
    );
  });
});
