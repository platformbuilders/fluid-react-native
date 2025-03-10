import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';
import { fireEvent, render } from '@testing-library/react-native';
import CheckBox from '..';
import theme from '../../../theme';

// Constantes para evitar duplicação de literais
const TEST_ID = 'testing';
const ACCESSIBILITY = 'checkbox';
const LABEL = 'Jest Checkbox';

describe('<CheckBox />', () => {
  it('should render checkbox component', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <CheckBox id={TEST_ID} accessibility={ACCESSIBILITY} />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should trigger onPress function', () => {
    const onPressEvent = jest.fn();

    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <CheckBox
          label={LABEL}
          id={TEST_ID}
          accessibility={ACCESSIBILITY}
          onPress={onPressEvent}
        />
      </ThemeProvider>,
    );

    const component = getByText(LABEL);

    fireEvent.press(component);

    expect(onPressEvent).toHaveBeenCalled();
  });

  // Novos testes para aumentar a cobertura
  it('should render checkbox with label', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <CheckBox id={TEST_ID} accessibility={ACCESSIBILITY} label={LABEL} />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render checkbox with error message', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <CheckBox
          id={TEST_ID}
          accessibility={ACCESSIBILITY}
          error="This field is required"
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render checkbox in checked state', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <CheckBox id={TEST_ID} accessibility={ACCESSIBILITY} checked />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render checkbox with custom label style', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <CheckBox
          id={TEST_ID}
          accessibility={ACCESSIBILITY}
          label={LABEL}
          labelStyle={{ color: '#e74c3c' }}
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should trigger onClick function when checkbox is clicked', () => {
    const onPressEvent = jest.fn();

    const { getByLabelText } = render(
      <ThemeProvider theme={theme}>
        <CheckBox
          id={TEST_ID}
          accessibility={ACCESSIBILITY}
          onPress={onPressEvent}
        />
      </ThemeProvider>,
    );

    const checkbox = getByLabelText(`checbox de `);
    fireEvent.press(checkbox);

    expect(onPressEvent).toHaveBeenCalled();
  });

  it('should use default onPress function when not provided', () => {
    const { getByLabelText } = render(
      <ThemeProvider theme={theme}>
        <CheckBox id={TEST_ID} accessibility={ACCESSIBILITY} />
      </ThemeProvider>,
    );

    const checkbox = getByLabelText(`checbox de `);

    // Não deve lançar erro ao pressionar
    expect(() => {
      fireEvent.press(checkbox);
    }).not.toThrow();
  });

  it('should use id from accessibility when id is not provided', () => {
    const { getByLabelText } = render(
      <ThemeProvider theme={theme}>
        <CheckBox accessibility={ACCESSIBILITY} />
      </ThemeProvider>,
    );

    const checkbox = getByLabelText(`checbox de `);
    expect(checkbox).toBeDefined();
  });
});
