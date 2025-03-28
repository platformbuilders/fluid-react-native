import React from 'react';
import renderer, { act } from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';
import { render } from '@testing-library/react-native';
import Separator from '..';
import theme from '../../../theme';

describe('<Separator />', () => {
  it('should render with required props', () => {
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Separator text="ou" />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render with custom margins', () => {
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Separator text="ou" marginTop={20} marginBottom={10} />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render with only marginTop', () => {
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Separator text="ou" marginTop={20} />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render with only marginBottom', () => {
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Separator text="ou" marginBottom={10} />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render with long text', () => {
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Separator text="texto longo para teste" />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  // Testes adicionais para aumentar a cobertura

  it('should render the correct text content', () => {
    const testText = 'texto de teste';

    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Separator text={testText} />
      </ThemeProvider>,
    );

    const textElement = getByText(testText);
    expect(textElement).toBeTruthy();
    expect(textElement.props.children).toBe(testText);
  });

  it('should apply custom margins correctly', () => {
    const marginTop = 30;
    const marginBottom = 15;

    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Separator
            text="custom margins"
            marginTop={marginTop}
            marginBottom={marginBottom}
          />
        </ThemeProvider>,
      );
    });

    const json = wrapper.toJSON();
    const containerStyles = json.props.style;

    // Verificar que os estilos de margem foram aplicados corretamente
    expect(containerStyles).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          marginTop,
          marginBottom,
        }),
      ]),
    );
  });
});
