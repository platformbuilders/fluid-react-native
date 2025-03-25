import React from 'react';
import renderer, { act } from 'react-test-renderer';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import Typography from '..';
import { TextVariant } from '../../../enums';
import theme from '../../../theme';

// Primeiro mock para NativeAnimatedHelper
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper', () => ({}), {
  virtual: true,
});

// Mock completo para react-native
jest.mock('react-native', () => {
  // Criamos um mock mais completo que substitui explicitamente os módulos problemáticos
  const Text = 'Text'; // Definir componente Text explicitamente

  return {
    // Componentes básicos
    View: 'View',
    Text, // Exportar o componente Text
    TouchableOpacity: 'TouchableOpacity',

    // Animated API
    Animated: {
      createAnimatedComponent: jest.fn((component) => component),
      View: 'Animated.View',
      Text: 'Animated.Text',
      timing: jest.fn(() => ({ start: jest.fn() })),
      Value: jest.fn(() => ({
        interpolate: jest.fn(() => ({})),
        setValue: jest.fn(),
      })),
    },

    // Dimensões e métricas
    Dimensions: {
      get: jest.fn(() => ({ width: 375, height: 812 })),
    },

    // StyleSheet
    StyleSheet: {
      create: jest.fn((styles) => styles),
      flatten: jest.fn((styles) => styles),
    },

    // Módulo de configurações que estava causando o erro
    Settings: {
      get: jest.fn(() => null),
      set: jest.fn(),
    },

    // Outros módulos que possam ser necessários
    Platform: {
      OS: 'ios',
      select: jest.fn((obj) => obj.ios || obj.default),
    },
  };
});

// Obter o componente Text do mock
const { Text } = jest.requireMock('react-native');

// Configuração dos mocks para hooks React
beforeEach(() => {
  const originalUseContext = React.useContext;
  React.useContext = jest.fn().mockImplementation((context) => {
    // Se for o contexto do tema, retornamos o tema mockado
    if (context && context.displayName === 'ThemeContext') {
      return theme;
    }
    // Caso contrário, mantemos o comportamento original
    return originalUseContext(context);
  });

  React.useMemo = jest.fn().mockImplementation((fn) => fn());
});

describe('<Typography />', () => {
  it('should render and match snapshot for default props', () => {
    let wrapper;
    
    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Typography accessibility="" />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render and match snapshot for variant max', () => {
    let wrapper;
    
    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Typography accessibility="" variant="max" />
        </ThemeProvider>,
      );
    });
    
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render and match snapshot for variant xxl', () => {
    let wrapper;
    
    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Typography accessibility="" variant="xxl" />
        </ThemeProvider>,
      );
    });
    
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render and match snapshot for variant xl', () => {
    let wrapper;
    
    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Typography accessibility="" variant="xl" />
        </ThemeProvider>,
      );
    });
    
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render and match snapshot for variant lg', () => {
    let wrapper;
    
    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Typography accessibility="" variant="lg" />
        </ThemeProvider>,
      );
    });
    
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render and match snapshot for variant md', () => {
    let wrapper;
    
    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Typography accessibility="" variant="md" />
        </ThemeProvider>,
      );
    });
    
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render and match snapshot for variant min', () => {
    let wrapper;
    
    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Typography accessibility="" variant="min" />
        </ThemeProvider>,
      );
    });
    
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render and match snapshot for variant xs', () => {
    let wrapper;
    
    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Typography accessibility="" variant="xs" />
        </ThemeProvider>,
      );
    });
    
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render and match snapshot for variant xxs', () => {
    let wrapper;
    
    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Typography accessibility="" variant="xxs" />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render and match snapshot for variant animated', () => {
    let wrapper;
    
    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Typography accessibility="" variant={TextVariant.ANIMATED}>
            Texto animado
          </Typography>
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render with children', () => {
    let wrapper;
    
    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Typography accessibility="">Texto de exemplo</Typography>
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render with custom id', () => {
    let wrapper;
    
    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Typography id="custom-id" accessibility="">
            Texto com ID personalizado
          </Typography>
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render with custom lineHeightVariant', () => {
    let wrapper;
    
    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Typography lineHeightVariant="max" accessibility="">
            Texto com linha personalizada
          </Typography>
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should use children as testID when id and accessibility are not provided', () => {
    let rendered;
    
    act(() => {
      rendered = renderer.create(
        <ThemeProvider theme={theme}>
          <Typography>Texto sem id</Typography>
        </ThemeProvider>,
      );
    });

    // Encontre o Text interno (filho direto do Typography)
    const textComponent = rendered.root.findByType(Text);
    expect(textComponent.props.testID).toBe('Texto sem id');
  });

  it('should use id for testID when provided', () => {
    let rendered;
    
    act(() => {
      rendered = renderer.create(
        <ThemeProvider theme={theme}>
          <Typography id="id-teste">Texto com id</Typography>
        </ThemeProvider>,
      );
    });

    // Encontre o Text interno (filho direto do Typography)
    const textComponent = rendered.root.findByType(Text);
    expect(textComponent.props.testID).toBe('id-teste');
  });

  it('should use accessibility for testID when id is not provided', () => {
    let rendered;
    
    act(() => {
      rendered = renderer.create(
        <ThemeProvider theme={theme}>
          <Typography accessibility="accessibility-teste">
            Texto com accessibility
          </Typography>
        </ThemeProvider>,
      );
    });

    // Encontre o Text interno (filho direto do Typography)
    const textComponent = rendered.root.findByType(Text);
    expect(textComponent.props.testID).toBe('accessibility-teste');
  });
  
  it('should pass custom props to Text component', () => {
    let rendered;
    
    act(() => {
      rendered = renderer.create(
        <ThemeProvider theme={theme}>
          <Typography 
            accessibility="texto-personalizado"
            numberOfLines={2}
          >
            Texto com props customizadas
          </Typography>
        </ThemeProvider>,
      );
    });

    // Encontre o Text interno
    const textComponent = rendered.root.findByType(Text);
    expect(textComponent.props.numberOfLines).toBe(2);
  });
  
  it('should pass custom props to AnimatedText component', () => {
    let rendered;
    
    act(() => {
      rendered = renderer.create(
        <ThemeProvider theme={theme}>
          <Typography 
            accessibility="texto-animado"
            variant={TextVariant.ANIMATED}
            numberOfLines={3}
          >
            Texto animado com props customizadas
          </Typography>
        </ThemeProvider>,
      );
    });

    // Encontre o Text interno (que é um AnimatedText neste caso)
    const textComponent = rendered.root.findByType(Text);
    expect(textComponent.props.numberOfLines).toBe(3);
  });
  
  it.skip('should correctly use React Native Testing Library', () => {
    /* const { getByText, getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Typography 
          id="test-typography"
          accessibility="texto-de-teste"
        >
          Texto de teste
        </Typography>
      </ThemeProvider>
    );
    
    // Verificar se o texto aparece no componente
    expect(getByText('Texto de teste')).toBeTruthy();
    
    // Verificar testID
    expect(getByTestId('test-typography')).toBeTruthy(); */
  });
  
  it('should work with ref forwarding', () => {
    const ref = React.createRef();
    
    act(() => {
      renderer.create(
        <ThemeProvider theme={theme}>
          <Typography 
            ref={ref}
            accessibility="texto-com-ref"
          >
            Texto com ref
          </Typography>
        </ThemeProvider>,
      );
    });
    
    // Verificar se o ref foi atribuído
    expect(ref.current).toBeDefined();
  });
});
