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

    const component = getByTestId('testing_passwordInput');

    fireEvent.changeText(component, 'Value changed');
    fireEvent(component, 'blur');
    fireEvent(component, 'focus');

    expect(onBlurFN).toHaveBeenCalled();
    expect(onFocusFN).toHaveBeenCalled();
    expect(component.props.value).toBe('Value changed');
  });

  it('should toggle password visibility when icon is pressed', () => {
    const { getByTestId, rerender } = render(
      <ThemeProvider theme={theme}>
        <PasswordInput id="eye" accessibility="eye" />
      </ThemeProvider>,
    );

    let icon = getByTestId('icon_eye');

    expect(icon.props.accessibilityLabel).toBe('eye icon');
    fireEvent.press(icon);

    rerender(
      <ThemeProvider theme={theme}>
        <PasswordInput id="eye-slash" accessibility="eye-slash" />
      </ThemeProvider>,
    );

    icon = getByTestId('eye-slash');

    expect(icon.props.accessibilityLabel).toBe('eye-slash');
  });
});
