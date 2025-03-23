import React, { FC, useState } from 'react';
import { fireEvent, render } from 'react-native-testing-library';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';
import theme from '../../../theme';
import PasswordInput from '../PasswordInput';

describe('<PasswordInput />', () => {
  it('should render PasswordInput', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <PasswordInput id="test" accessibility="test" />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render input and trigger state change, blur, focus and onPressIcon', () => {
    const onBlurFN = jest.fn();
    const onFocusFN = jest.fn();
    const Component: FC = (): JSX.Element => {
      const [value, setValue] = useState('');

      return (
        <ThemeProvider theme={theme}>
          <PasswordInput
            id="testing_passwordInput"
            accessibility=""
            value={value}
            onChangeText={setValue}
            onBlur={onBlurFN}
            onFocus={onFocusFN}
          />
        </ThemeProvider>
      );
    };

    const { getByTestId } = render(<Component />);

    const component = getByTestId('input_testing_passwordInput');

    fireEvent.changeText(component, 'Value changed');
    fireEvent(component, 'blur');
    fireEvent(component, 'focus');

    expect(onBlurFN).toHaveBeenCalled();
    expect(onFocusFN).toHaveBeenCalled();
    expect(component.props.value).toBe('Value changed');
  });

  it('should toggle password visibility when icon is pressed', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <PasswordInput id="password" accessibility="password-input" />
      </ThemeProvider>,
    );

    // Inicialmente o ícone é 'eye' quando a senha está escondida
    const eyeIcon = getByTestId('icon_eye');
    expect(eyeIcon.props.accessibilityLabel).toBe('Eye');

    // Pressiona o ícone para mostrar a senha
    fireEvent.press(eyeIcon);

    // Agora o ícone deve ser 'eye-slash'
    const eyeSlashIcon = getByTestId('icon_eye-slash');
    expect(eyeSlashIcon.props.accessibilityLabel).toBe('Eye-slash');
  });
});
