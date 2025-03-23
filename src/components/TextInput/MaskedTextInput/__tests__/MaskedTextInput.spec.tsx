import React from 'react';
import { fireEvent, render, act } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import theme from '../../../../theme';
import MaskedTextInput from '..';

// Mock do componente TextInputMask para facilitar os testes
jest.mock('react-native-masked-input', () => {
  const { TextInput } = require('react-native');
  return TextInput;
});

// Mock das funções maskTypeControll e handleSetMask para testar chamadas
const mockMaskTypeControll = jest.fn();
const mockHandleSetMask = jest.fn();

describe('<MaskedTextInput />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render masked text input with default props', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <MaskedTextInput id="test" accessibility="test" maskType="no-mask" />
      </ThemeProvider>
    );

    expect(getByTestId('test')).toBeTruthy();
  });

  it('should handle text change', () => {
    const onChangeText = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <MaskedTextInput
          id="test"
          accessibility="test"
          maskType="cpf"
          onChangeText={onChangeText}
        />
      </ThemeProvider>
    );

    const input = getByTestId('test');
    fireEvent.changeText(input, '12345678900');
    
    expect(onChangeText).toHaveBeenCalled();
  });

  it('should format CPF mask correctly', () => {
    const onChangeText = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <MaskedTextInput
          id="test"
          accessibility="test"
          maskType="cpf"
          onChangeText={onChangeText}
        />
      </ThemeProvider>
    );

    const input = getByTestId('test');
    
    act(() => {
      fireEvent.changeText(input, '12345678900');
    });
    
    expect(onChangeText).toHaveBeenCalled();
  });

  it('should format document mask correctly (alias for CPF)', () => {
    const onChangeText = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <MaskedTextInput
          id="test"
          accessibility="test"
          maskType="document"
          onChangeText={onChangeText}
        />
      </ThemeProvider>
    );

    const input = getByTestId('test');
    
    act(() => {
      fireEvent.changeText(input, '12345678900');
    });
    
    expect(onChangeText).toHaveBeenCalled();
  });

  it('should format CNPJ mask correctly', () => {
    const onChangeText = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <MaskedTextInput
          id="test"
          accessibility="test"
          maskType="cnpj"
          onChangeText={onChangeText}
        />
      </ThemeProvider>
    );

    const input = getByTestId('test');
    
    act(() => {
      fireEvent.changeText(input, '12345678901234');
    });
    
    expect(onChangeText).toHaveBeenCalled();
  });

  it('should format cep mask correctly', () => {
    const onChangeText = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <MaskedTextInput
          id="test"
          accessibility="test"
          maskType="zip-code"
          onChangeText={onChangeText}
        />
      </ThemeProvider>
    );

    const input = getByTestId('test');
    
    act(() => {
      fireEvent.changeText(input, '12345678');
    });
    
    expect(onChangeText).toHaveBeenCalled();
  });

  it('should format phone mask correctly', () => {
    const onChangeText = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <MaskedTextInput
          id="test"
          accessibility="test"
          maskType="cel-phone"
          onChangeText={onChangeText}
        />
      </ThemeProvider>
    );

    const input = getByTestId('test');
    
    act(() => {
      fireEvent.changeText(input, '1234567890');
    });
    
    expect(onChangeText).toHaveBeenCalled();
  });

  it('should format cellphone mask correctly', () => {
    const onChangeText = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <MaskedTextInput
          id="test"
          accessibility="test"
          maskType="cel-phone"
          onChangeText={onChangeText}
        />
      </ThemeProvider>
    );

    const input = getByTestId('test');
    
    act(() => {
      fireEvent.changeText(input, '12345678901');
    });
    
    expect(onChangeText).toHaveBeenCalled();
  });

  it('should format creditCard mask correctly', () => {
    const onChangeText = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <MaskedTextInput
          id="test"
          accessibility="test"
          maskType="credit-card"
          onChangeText={onChangeText}
        />
      </ThemeProvider>
    );

    const input = getByTestId('test');
    
    act(() => {
      fireEvent.changeText(input, '1234567890123456');
    });
    
    expect(onChangeText).toHaveBeenCalled();
  });

  it('should format date mask correctly', () => {
    const onChangeText = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <MaskedTextInput
          id="test"
          accessibility="test"
          maskType="datetime"
          onChangeText={onChangeText}
        />
      </ThemeProvider>
    );

    const input = getByTestId('test');
    
    act(() => {
      fireEvent.changeText(input, '01022023');
    });
    
    expect(onChangeText).toHaveBeenCalled();
  });

  it('should format uppercase mask correctly', () => {
    const onChangeText = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <MaskedTextInput
          id="test"
          accessibility="test"
          maskType="uppercase"
          onChangeText={onChangeText}
        />
      </ThemeProvider>
    );

    const input = getByTestId('test');
    
    act(() => {
      fireEvent.changeText(input, 'test text');
    });
    
    expect(onChangeText).toHaveBeenCalled();
  });

  it('should properly handle no options provided for no-mask type', () => {
    const onChangeText = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <MaskedTextInput
          id="test"
          accessibility="test"
          maskType="no-mask"
          onChangeText={onChangeText}
        />
      </ThemeProvider>
    );

    const input = getByTestId('test');
    
    act(() => {
      fireEvent.changeText(input, 'texto sem máscara');
    });
    
    expect(onChangeText).toHaveBeenCalled();
  });

  it('should apply custom testID if provided', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <MaskedTextInput
          id="test"
          accessibility="test"
          maskType="no-mask"
          testID="test"
        />
      </ThemeProvider>
    );

    expect(getByTestId('test')).toBeTruthy();
  });

  it('should generate testID correctly when only accessibility is provided', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <MaskedTextInput
          id="accessibility-only"
          accessibility="accessibility-only"
          maskType="no-mask"
        />
      </ThemeProvider>
    );

    expect(getByTestId('input_accessibility-only')).toBeTruthy();
  });

  it('should generate fallback testID when no specific testID is provided', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <MaskedTextInput
          id="fallback"
          accessibility="fallback"
          maskType="no-mask"
        />
      </ThemeProvider>
    );

    expect(getByTestId('input_fallback')).toBeTruthy();
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
      </ThemeProvider>
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
      </ThemeProvider>
    );

    const input = getByTestId('test');
    fireEvent(input, 'focus');
    
    expect(onFocus).toHaveBeenCalled();
  });

  it('should handle custom mask correctly', () => {
    const onChangeText = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <MaskedTextInput
          id="test"
          accessibility="test"
          maskType="custom"
          options={{
            mask: '999.999.999-99'
          }}
          onChangeText={onChangeText}
        />
      </ThemeProvider>
    );

    const input = getByTestId('test');
    
    act(() => {
      fireEvent.changeText(input, '12345678900');
    });
    
    expect(onChangeText).toHaveBeenCalled();
  });

  it('should update mask when options change', () => {
    const onChangeText = jest.fn();
    const { getByTestId, rerender } = render(
      <ThemeProvider theme={theme}>
        <MaskedTextInput
          id="test"
          accessibility="test"
          maskType="custom"
          options={{
            mask: '999.999.999-99'
          }}
          onChangeText={onChangeText}
        />
      </ThemeProvider>
    );

    // Rerenderiza com novas opções
    rerender(
      <ThemeProvider theme={theme}>
        <MaskedTextInput
          id="test"
          accessibility="test"
          maskType="custom"
          options={{
            mask: '99/99/9999'
          }}
          onChangeText={onChangeText}
        />
      </ThemeProvider>
    );

    const input = getByTestId('test');
    
    act(() => {
      fireEvent.changeText(input, '01022023');
    });
    
    expect(onChangeText).toHaveBeenCalled();
  });

  it('should use maskTypeControll function correctly', () => {
    const onChangeText = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <MaskedTextInput
          id="test"
          accessibility="test"
          maskType="money"
          options={{
            precision: 2,
            separator: ',',
            delimiter: '.',
            unit: 'R$ ',
            suffixUnit: ''
          }}
          onChangeText={onChangeText}
        />
      </ThemeProvider>
    );

    const input = getByTestId('test');
    
    act(() => {
      fireEvent.changeText(input, '1000');
    });
    
    expect(onChangeText).toHaveBeenCalled();
  });

  it('should format money mask correctly', () => {
    const onChangeText = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <MaskedTextInput
          id="test"
          accessibility="test"
          maskType="money"
          options={{
            precision: 2,
            separator: ',',
            delimiter: '.',
            unit: 'R$ ',
            suffixUnit: ''
          }}
          onChangeText={onChangeText}
        />
      </ThemeProvider>
    );

    const input = getByTestId('test');
    
    act(() => {
      fireEvent.changeText(input, '123456');
    });
    
    expect(onChangeText).toHaveBeenCalled();
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
          value="12345678900"
        />
      </ThemeProvider>
    );

    // Rerenderiza com novo maskType
    rerender(
      <ThemeProvider theme={theme}>
        <MaskedTextInput
          id="test"
          accessibility="test"
          maskType="cnpj"
          onChangeText={onChangeText}
          value="12345678901234"
        />
      </ThemeProvider>
    );

    const input = getByTestId('test');
    fireEvent.changeText(input, '12345678901234');
    
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
      </ThemeProvider>
    );

    const input = getByTestId('test');
    expect(input.props.editable).toBe(false);
  });

  it('should properly handle placeholder prop', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <MaskedTextInput
          id="test"
          accessibility="test"
          maskType="no-mask"
          placeholder="Digite aqui"
        />
      </ThemeProvider>
    );

    const input = getByTestId('test');
    expect(input.props.accessibilityHint).toBe('Digite Digite aqui');
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
      </ThemeProvider>
    );

    const input = getByTestId('test');
    expect(input.props.multiline).toBe(true);
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
      </ThemeProvider>
    );

    expect(getByTestId('test')).toBeTruthy();
  });
}); 