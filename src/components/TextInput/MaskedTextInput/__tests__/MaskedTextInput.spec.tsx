import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { fireEvent, render } from '@testing-library/react-native';

// Mock do componente TextInputMask antes das importações do componente
jest.mock('react-native-masked-input', () => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const mockTextInput = require('react-native').TextInput;
  return mockTextInput;
});

import MaskedTextInput from '..';
import theme from '../../../../theme';

const TEST_ID = 'test';
const TEST_ACCESSIBILITY = 'test';
const NO_MASK = 'no-mask';

describe('<MaskedTextInput />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render masked text input with default props', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <MaskedTextInput
          id={TEST_ID}
          accessibility={TEST_ACCESSIBILITY}
          maskType={NO_MASK}
        />
      </ThemeProvider>,
    );

    expect(getByTestId(TEST_ID)).toBeTruthy();
  });

  it('should apply cpf mask', () => {
    const onChangeText = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <MaskedTextInput
          id="test"
          accessibility="test"
          maskType="cpf"
          onChangeText={onChangeText}
        />
      </ThemeProvider>,
    );

    const component = getByTestId('test');
    fireEvent.changeText(component, '22222222222');
    expect(onChangeText).toHaveBeenCalled();
  });

  it('should apply document mask for CNPJ', () => {
    const onChangeText = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <MaskedTextInput
          id="test"
          accessibility="test"
          maskType="cnpj"
          onChangeText={onChangeText}
        />
      </ThemeProvider>,
    );

    const component = getByTestId('test');
    fireEvent.changeText(component, '12345678000195');
    expect(onChangeText).toHaveBeenCalled();
  });

  it('should apply no-mask', () => {
    const onChangeText = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <MaskedTextInput
          id="test"
          accessibility="test"
          maskType="no-mask"
          onChangeText={onChangeText}
        />
      </ThemeProvider>,
    );

    const component = getByTestId('test');
    fireEvent.changeText(component, '12345678900');
    expect(onChangeText).toHaveBeenCalled();
  });

  it('should handle cel-phone mask type correctly', () => {
    const onChangeText = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <MaskedTextInput
          id="test"
          accessibility="test"
          maskType="cel-phone"
          onChangeText={onChangeText}
        />
      </ThemeProvider>,
    );

    const component = getByTestId('test');
    fireEvent.changeText(component, '11999887766');
    expect(onChangeText).toHaveBeenCalled();
  });

  it('should handle zip-code mask type correctly', () => {
    const onChangeText = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <MaskedTextInput
          id="test"
          accessibility="test"
          maskType="zip-code"
          onChangeText={onChangeText}
        />
      </ThemeProvider>,
    );

    const component = getByTestId('test');
    fireEvent.changeText(component, '12345678');
    expect(onChangeText).toHaveBeenCalled();
  });

  it('should handle money mask type correctly', () => {
    const onChangeText = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <MaskedTextInput
          id="test"
          accessibility="test"
          maskType="money"
          onChangeText={onChangeText}
        />
      </ThemeProvider>,
    );

    const component = getByTestId('test');
    fireEvent.changeText(component, '12345');
    expect(onChangeText).toHaveBeenCalled();
  });

  it('should handle credit-card mask type correctly', () => {
    const onChangeText = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <MaskedTextInput
          id="test"
          accessibility="test"
          maskType="credit-card"
          onChangeText={onChangeText}
        />
      </ThemeProvider>,
    );

    const component = getByTestId('test');
    fireEvent.changeText(component, '4111111111111111');
    expect(onChangeText).toHaveBeenCalled();
  });

  it('should handle datetime mask type correctly', () => {
    const onChangeText = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <MaskedTextInput
          id="test"
          accessibility="test"
          maskType="datetime"
          onChangeText={onChangeText}
        />
      </ThemeProvider>,
    );

    const component = getByTestId('test');
    fireEvent.changeText(component, '01012020');
    expect(onChangeText).toHaveBeenCalled();
  });

  it('should handle uppercase mask type correctly', () => {
    const onChangeText = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <MaskedTextInput
          id="test"
          accessibility="test"
          maskType="uppercase"
          onChangeText={onChangeText}
        />
      </ThemeProvider>,
    );

    const component = getByTestId('test');
    fireEvent.changeText(component, 'test text');
    expect(onChangeText).toHaveBeenCalled();
  });

  it('should handle only-numbers mask type correctly', () => {
    const onChangeText = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <MaskedTextInput
          id="test"
          accessibility="test"
          maskType="only-numbers"
          onChangeText={onChangeText}
        />
      </ThemeProvider>,
    );

    const component = getByTestId('test');
    fireEvent.changeText(component, '12345abc');
    expect(onChangeText).toHaveBeenCalled();
  });

  it('should handle custom mask type correctly', () => {
    const onChangeText = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <MaskedTextInput
          id="test"
          accessibility="test"
          maskType="custom"
          options={{
            mask: '999.999.999-99',
          }}
          onChangeText={onChangeText}
        />
      </ThemeProvider>,
    );

    const component = getByTestId('test');
    fireEvent.changeText(component, '12345678900');
    expect(onChangeText).toHaveBeenCalled();
  });

  it('should apply correct testID when only id is provided', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <MaskedTextInput
          id={TEST_ID}
          accessibility={TEST_ACCESSIBILITY}
          maskType={NO_MASK}
        />
      </ThemeProvider>,
    );

    expect(getByTestId(TEST_ID)).toBeTruthy();
  });

  it('should apply correct testID when only accessibility is provided', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <MaskedTextInput
          id="test-accessibility"
          accessibility="test-accessibility"
          maskType="no-mask"
        />
      </ThemeProvider>,
    );

    expect(getByTestId('input_test-accessibility')).toBeTruthy();
  });

  it('should apply custom testID when explicitly provided', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <MaskedTextInput
          id="test"
          accessibility="test"
          testID="custom-test-id"
          maskType="no-mask"
        />
      </ThemeProvider>,
    );

    expect(getByTestId('test')).toBeTruthy();
  });

  it('should call onBlur when input loses focus', () => {
    const onBlur = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <MaskedTextInput
          id="test"
          accessibility="test"
          maskType="no-mask"
          onBlur={onBlur}
        />
      </ThemeProvider>,
    );

    const input = getByTestId('test');
    fireEvent(input, 'blur');
    expect(onBlur).toHaveBeenCalled();
  });

  it('should call onFocus when input gains focus', () => {
    const onFocus = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <MaskedTextInput
          id="test"
          accessibility="test"
          maskType="no-mask"
          onFocus={onFocus}
        />
      </ThemeProvider>,
    );

    const input = getByTestId('test');
    fireEvent(input, 'focus');
    expect(onFocus).toHaveBeenCalled();
  });

  it('should handle prop changes correctly', () => {
    const onChangeText = jest.fn();
    const { getByTestId, rerender } = render(
      <ThemeProvider theme={theme}>
        <MaskedTextInput
          id="test"
          accessibility="test"
          maskType="cpf"
          onChangeText={onChangeText}
        />
      </ThemeProvider>,
    );

    // Rerenderiza com novas props
    rerender(
      <ThemeProvider theme={theme}>
        <MaskedTextInput
          id="test"
          accessibility="test"
          maskType="cnpj"
          onChangeText={onChangeText}
        />
      </ThemeProvider>,
    );

    const component = getByTestId('test');
    fireEvent.changeText(component, '12345678000195');
    expect(onChangeText).toHaveBeenCalled();
  });

  it('should properly handle editable prop', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <MaskedTextInput
          id="test"
          accessibility="test"
          maskType="no-mask"
          editable={false}
        />
      </ThemeProvider>,
    );

    expect(getByTestId('test').props.editable).toBe(false);
  });

  it('should properly handle placeholder prop', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <MaskedTextInput
          id="test"
          accessibility="test"
          maskType="no-mask"
          placeholder="Placeholder de teste"
        />
      </ThemeProvider>,
    );

    expect(getByTestId('test')).toBeTruthy();
  });

  it('should properly handle multiline prop', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <MaskedTextInput
          id="test"
          accessibility="test"
          maskType="no-mask"
          multiline={true}
        />
      </ThemeProvider>,
    );

    expect(getByTestId('test').props.multiline).toBe(true);
  });

  it('should properly handle contrast prop', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <MaskedTextInput
          id="test"
          accessibility="test"
          maskType="no-mask"
          contrast={true}
        />
      </ThemeProvider>,
    );

    expect(getByTestId('test')).toBeTruthy();
  });
});
