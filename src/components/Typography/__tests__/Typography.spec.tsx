import React from 'react';
import { Animated, Text } from 'react-native';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';
import Typography from '..';
import { TextVariant } from '../../../enums';
import theme from '../../../theme';

// Mock do NativeAnimatedHelper
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper', () => ({}), {
  virtual: true,
});

beforeEach(() => {
  React.useContext = jest.fn();
  React.useMemo = jest.fn();
  jest
    .spyOn(Animated, 'Text')
    .mockImplementation(({ children, style }: any) => (
      <Text style={style}>{children}</Text>
    ));
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
    const { root } = renderer.create(
      <ThemeProvider theme={theme}>
        <Typography>Texto sem id</Typography>
      </ThemeProvider>,
    );

    const textProps = root.findByProps({ children: 'Texto sem id' }).props;
    expect(textProps.testID).toBe('Texto sem id');
  });

  it('should use id for testID when provided', () => {
    const { root } = renderer.create(
      <ThemeProvider theme={theme}>
        <Typography id="id-teste">Texto com id</Typography>
      </ThemeProvider>,
    );

    const textProps = root.findByProps({ children: 'Texto com id' }).props;
    expect(textProps.testID).toBe('id-teste');
  });

  it('should use accessibility for testID when id is not provided', () => {
    const { root } = renderer.create(
      <ThemeProvider theme={theme}>
        <Typography accessibility="accessibility-teste">
          Texto com accessibility
        </Typography>
      </ThemeProvider>,
    );

    const textProps = root.findByProps({
      children: 'Texto com accessibility',
    }).props;
    expect(textProps.testID).toBe('accessibility-teste');
  });
});
