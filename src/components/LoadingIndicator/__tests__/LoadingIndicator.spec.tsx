import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';
import Loading from '..';
import theme from '../../../theme';

describe('<LoadingIndicator />', () => {
  it('should render with default props', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Loading />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render with large size', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Loading large />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render with contrast', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Loading contrast />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render with custom accessibility label', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Loading accessibility="Carregando..." />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render with linear variant', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Loading variant="linear" />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render with all props combined', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Loading
          large
          contrast
          variant="linear"
          accessibility="Carregando..."
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
