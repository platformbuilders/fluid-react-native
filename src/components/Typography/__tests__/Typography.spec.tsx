import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';
import { Animated, Text } from 'react-native';
import Typography from '..';
import theme from '../../../theme';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

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
        <Typography accessibility="" variant="animated">
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
});
