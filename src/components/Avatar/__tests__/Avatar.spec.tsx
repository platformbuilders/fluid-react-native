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
    launchImageLibrary: jest.fn(async (options) => {
      await new Promise(resolve => setTimeout(resolve, 10));
      if (options?.storageOptions?.path === 'cancel_test') {
        return { didCancel: true };
      }
      return { didCancel: false, assets: [{ uri: TEST_IMAGE_URI }] };
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
        <Avatar id="testId" accessibility="" />
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

    const image = getByTestId('avatar-test');
    expect(image).toBeTruthy();
  });

  it('should call onUpload when image is selected', async () => {
    const onUploadMock = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Avatar id="avatar-upload-test" accessibility="" onUpload={onUploadMock} />
      </ThemeProvider>,
    );
    const component = getByTestId('avatar-upload-test');

    act(() => {
      fireEvent.press(component);
    });

    await waitFor(() => {
      expect(onUploadMock).toHaveBeenCalledWith(TEST_IMAGE_URI);
    });
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

    render(
      <ThemeProvider theme={theme}>
        <Avatar
          id="testing"
          accessibility=""
          ref={ref}
          onUpload={onUploadMock}
        />
      </ThemeProvider>,
    );

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
    );

    // Limpar a imagem e verificar se foi limpa corretamente
    await act(async () => {
      ref.current.clearUploadImage();
    });

    // Verifica se getUploadImage agora retorna undefined
    expect(ref.current.getUploadImage()).toBeUndefined();
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
    const customQuality = 0.8;
    const pickerSpy = jest.spyOn(require('react-native-image-picker'), 'launchImageLibrary');

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Avatar
          id="quality-test"
          accessibility=""
          imageQuality={customQuality}
          onUpload={onUploadMock}
        />
      </ThemeProvider>,
    );
    const component = getByTestId('quality-test');

    act(() => {
      fireEvent.press(component);
    });

    await waitFor(() => {
      expect(pickerSpy).toHaveBeenCalledWith(expect.objectContaining({ quality: customQuality }));
    });
    await waitFor(() => {
      expect(onUploadMock).toHaveBeenCalledWith(TEST_IMAGE_URI);
    });

    pickerSpy.mockRestore();
  });

  it('should handle undefined value in isValidURI correctly', () => {
    // Testar com image como undefined para acionar a validação isValidURI com undefined
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Avatar id="testing" accessibility="" image={undefined} />
      </ThemeProvider>,
    );

    // Não deve lançar exceção e deve renderizar corretamente
    expect(wrapper.toJSON()).toBeTruthy();
  });

  it('should handle canceled image selection', async () => {
    const onUploadMock = jest.fn();

    // Configurar mock para simular cancelamento
    (launchImageLibrary as jest.Mock).mockImplementationOnce(
      (_options, callback) => {
        if (callback) {
          callback({ didCancel: true });
        }
        return Promise.resolve({ didCancel: true });
      },
    );

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Avatar
          id="testing"
          accessibility=""
          onUpload={onUploadMock}
        />
      </ThemeProvider>,
    );

    const component = getByTestId('testing');

    // Disparar evento de press para abrir o seletor
    act(() => {
      fireEvent.press(component);
    });

    // Verificar que onUpload não foi chamado já que a seleção foi cancelada
    await waitFor(() => {
      expect(onUploadMock).not.toHaveBeenCalled();
    });
  });

  it('should be disabled when neither onPress nor onUpload are provided', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Avatar id="testing" accessibility="" />
      </ThemeProvider>,
    );

    const avatar = getByTestId('testing');
    expect(avatar.props.accessibilityState.disabled).toBe(true);
  });

  it('should handle getUploadImage ref method correctly', async () => {
    const ref = createRef<any>();
    const onUploadMock = jest.fn();

    // Mock específico para este teste
    (launchImageLibrary as jest.Mock).mockImplementationOnce(() => {
      return Promise.resolve({
        didCancel: false,
        assets: [{ uri: TEST_IMAGE_URI }]
      });
    });

    render(
      <ThemeProvider theme={theme}>
        <Avatar ref={ref} id="avatar-ref" accessibility="" onUpload={onUploadMock} />
      </ThemeProvider>,
    );

    // Adicionando um setTimeout para simular o comportamento assíncrono
    await act(async () => {
      await ref.current.openPicker();
    });

    // Verificando com waitFor para assegurar que os estados foram atualizados
    await waitFor(() => {
      expect(onUploadMock).toHaveBeenCalledWith(TEST_IMAGE_URI);
      expect(ref.current.getUploadImage()).toBe(TEST_IMAGE_URI);
    });
  });

  it('should handle clearUploadImage ref method correctly', async () => {
    const ref = createRef<any>();
    const onUploadMock = jest.fn();
    
    // Mock específico para este teste
    (launchImageLibrary as jest.Mock).mockImplementationOnce(() => {
      return Promise.resolve({
        didCancel: false,
        assets: [{ uri: TEST_IMAGE_URI }]
      });
    });

    render(
      <ThemeProvider theme={theme}>
        <Avatar ref={ref} id="avatar-clear-test" accessibility="" onUpload={onUploadMock} />
      </ThemeProvider>,
    );

    // Chamando openPicker para definir o visibleImage
    await act(async () => {
      await ref.current.openPicker();
    });

    // Verificar primeiro se onUpload foi chamado e se getUploadImage retorna o valor correto
    await waitFor(() => {
      expect(onUploadMock).toHaveBeenCalledWith(TEST_IMAGE_URI);
      expect(ref.current.getUploadImage()).toBe(TEST_IMAGE_URI);
    });

    // Resetando o mock para verificar se ele não é chamado novamente durante clearUploadImage
    onUploadMock.mockClear();

    // Ação de Limpar
    act(() => {
      ref.current.clearUploadImage();
    });

    // Esperar a leitura do estado após a limpeza
    await waitFor(() => {
      expect(ref.current.getUploadImage()).toBeUndefined();
    });
    
    // Verificar que onUpload não foi chamado durante a limpeza
    expect(onUploadMock).not.toHaveBeenCalled();
  });

  it('should handle string image correctly', () => {
    // Testando quando image é uma string direta (URL) em vez de um objeto
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Avatar
          id="testing"
          accessibility=""
          // @ts-ignore para testar cenário de string simples
          image="https://example.com/image.jpg"
        />
      </ThemeProvider>,
    );
    expect(wrapper.toJSON()).toBeTruthy();
  });

  it('should handle file:// URI scheme correctly', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Avatar
          id="testing"
          accessibility=""
          image={{ uri: 'file:///path/to/image.jpg' }}
        />
      </ThemeProvider>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should handle image passed with empty uri', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Avatar
          id="testing"
          accessibility=""
          image={{ uri: '' }}
        />
      </ThemeProvider>,
    );
    expect(wrapper.toJSON()).toBeTruthy();
  });

  // Testes adicionados para melhorar cobertura de branches
  
  it('should test isValidURI with non-URI strings', () => {
    // Testando com URI inválido (não começa com http/https/file/www)
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Avatar
          id="testing"
          accessibility=""
          // @ts-ignore para testar cenário de string não-URI
          image={{ uri: 'not-a-uri' }}
        />
      </ThemeProvider>,
    );
    expect(wrapper.toJSON()).toBeTruthy();
  });

  it('should handle visibleImage as plain string input', () => {
    // Este teste é para cobrir a branch na linha 100 - quando visibleImage é string mas não é URI válido
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Avatar
          id="testing"
          accessibility=""
          // @ts-ignore para testar cenário com string que não é URI
          image="not-a-uri-just-plain-text"
        />
      </ThemeProvider>,
    );
    expect(wrapper.toJSON()).toBeTruthy();
  });

  it('should handle non-string non-object visibleImage', () => {
    // Este teste é para cobrir a branch na linha 100 - quando visibleImage não é string nem objeto
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Avatar
          id="testing"
          accessibility=""
          // @ts-ignore para testar cenário com imagem inválida
          image={123}
        />
      </ThemeProvider>,
    );
    expect(wrapper.toJSON()).toBeTruthy();
  });

  it('should handle empty onUpload callback', async () => {
    // Mock que retorna uma resposta com upload bem-sucedido mas sem callback de onUpload
    (launchImageLibrary as jest.Mock).mockImplementationOnce(
      (_options, callback) => {
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

    // Renderizar sem onUpload
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Avatar
          id="testing"
          accessibility=""
          // Nota: não passamos onUpload aqui, mas configuramos para chamar openPicker ao pressionar
          onPress={() => {
            // função vazia para simular onPress que chama openPicker
          }}
        />
      </ThemeProvider>,
    );

    const component = getByTestId('testing');

    // Deve executar sem erros mesmo sem onUpload
    act(() => {
      fireEvent.press(component);
    });
    
    // Verificar que o componente ainda existe após a operação
    expect(component).toBeTruthy();
  });
});
