import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { fireEvent, render } from '@testing-library/react-native';
import theme from '../../../theme';
import MaskedTextInput from '../MaskedTextInput';

describe('<MaskedTextInput />', () => {
  it('should apply document mask for CPF', () => {
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

    expect(onChangeText).toHaveBeenCalledWith('222.222.222-22', '22222222222');
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

    expect(onChangeText).toHaveBeenCalledWith(
      '12.345.678/0001-95',
      '12345678000195',
    );
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

    expect(onChangeText).toHaveBeenCalledWith('12345678900', '12345678900');
  });

  it('should apply uppercase mask', () => {
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

    fireEvent.changeText(component, 'test');

    expect(onChangeText).toHaveBeenCalledWith('test', 'test');
  });
});
