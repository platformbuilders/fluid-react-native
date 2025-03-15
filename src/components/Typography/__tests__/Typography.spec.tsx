import React from 'react';
import renderer from 'react-test-renderer';
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
  return {
    // Componentes básicos
    View: 'View',
    Text: 'Text',
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
    const render = renderer.create(
      <ThemeProvider theme={theme}>
        <Typography accessibility="" />
      </ThemeProvider>,
    );

    expect(render.toJSON()).toMatchSnapshot();
  });

  it('should render and match snapshot for variant max', () => {
    const render = renderer.create(
      <ThemeProvider theme={theme}>
        <Typography accessibility="" variant="max" />
      </ThemeProvider>,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });

  it('should render and match snapshot for variant xxl', () => {
    const render = renderer.create(
      <ThemeProvider theme={theme}>
        <Typography accessibility="" variant="xxl" />
      </ThemeProvider>,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });

  it('should render and match snapshot for variant xl', () => {
    const render = renderer.create(
      <ThemeProvider theme={theme}>
        <Typography accessibility="" variant="xl" />
      </ThemeProvider>,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });

  it('should render and match snapshot for variant lg', () => {
    const render = renderer.create(
      <ThemeProvider theme={theme}>
        <Typography accessibility="" variant="lg" />
      </ThemeProvider>,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });

  it('should render and match snapshot for variant md', () => {
    const render = renderer.create(
      <ThemeProvider theme={theme}>
        <Typography accessibility="" variant="md" />
      </ThemeProvider>,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });

  it('should render and match snapshot for variant min', () => {
    const render = renderer.create(
      <ThemeProvider theme={theme}>
        <Typography accessibility="" variant="min" />
      </ThemeProvider>,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });

  it('should render and match snapshot for variant xs', () => {
    const render = renderer.create(
      <ThemeProvider theme={theme}>
        <Typography accessibility="" variant="xs" />
      </ThemeProvider>,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });

  it('should render and match snapshot for variant xxs', () => {
    const render = renderer.create(
      <ThemeProvider theme={theme}>
        <Typography accessibility="" variant="xxs" />
      </ThemeProvider>,
    );

    expect(render.toJSON()).toMatchSnapshot();
  });

  it('should render and match snapshot for variant animated', () => {
    const render = renderer.create(
      <ThemeProvider theme={theme}>
        <Typography accessibility="" variant={TextVariant.ANIMATED}>
          Texto animado
        </Typography>
      </ThemeProvider>,
    );

    expect(render.toJSON()).toMatchSnapshot();
  });

  it('should render with children', () => {
    const render = renderer.create(
      <ThemeProvider theme={theme}>
        <Typography accessibility="">Texto de exemplo</Typography>
      </ThemeProvider>,
    );

    expect(render.toJSON()).toMatchSnapshot();
  });

  it('should render with custom id', () => {
    const render = renderer.create(
      <ThemeProvider theme={theme}>
        <Typography id="custom-id" accessibility="">
          Texto com ID personalizado
        </Typography>
      </ThemeProvider>,
    );

    expect(render.toJSON()).toMatchSnapshot();
  });

  it('should render with custom lineHeightVariant', () => {
    const render = renderer.create(
      <ThemeProvider theme={theme}>
        <Typography lineHeightVariant="max" accessibility="">
          Texto com linha personalizada
        </Typography>
      </ThemeProvider>,
    );

    expect(render.toJSON()).toMatchSnapshot();
  });

  it('should use children as testID when id and accessibility are not provided', () => {
    const rendered = renderer.create(
      <ThemeProvider theme={theme}>
        <Typography>Texto sem id</Typography>
      </ThemeProvider>,
    );

    // Encontre o Text interno (filho direto do Typography)
    const textComponent = rendered.root.findByType('Text');
    expect(textComponent.props.testID).toBe('Texto sem id');
  });

  it('should use id for testID when provided', () => {
    const rendered = renderer.create(
      <ThemeProvider theme={theme}>
        <Typography id="id-teste">Texto com id</Typography>
      </ThemeProvider>,
    );

    // Encontre o Text interno (filho direto do Typography)
    const textComponent = rendered.root.findByType('Text');
    expect(textComponent.props.testID).toBe('id-teste');
  });

  it('should use accessibility for testID when id is not provided', () => {
    const rendered = renderer.create(
      <ThemeProvider theme={theme}>
        <Typography accessibility="accessibility-teste">
          Texto com accessibility
        </Typography>
      </ThemeProvider>,
    );

    // Encontre o Text interno (filho direto do Typography)
    const textComponent = rendered.root.findByType('Text');
    expect(textComponent.props.testID).toBe('accessibility-teste');
  });
});
