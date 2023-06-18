import React, { FC, useState } from 'react';
import { fireEvent, render } from 'react-native-testing-library';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';
import TextInput from '..';
import theme from '../../../theme';

describe('<TextInput />', () => {
  it('should render textinput', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <TextInput id="test" accessibility="" />
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
          <TextInput
            id="testing_textInput"
            accessibility=""
            value={value}
            onChangeText={setValue}
            onBlur={onBlurFN}
            onFocus={onFocusFN}
            iconName="book"
          />
        </ThemeProvider>
      );
    };

    const { getByTestId } = render(<Component />);

    const component = getByTestId('testing_textInput');

    fireEvent.changeText(component, 'Value changed');
    fireEvent(component, 'blur');
    fireEvent(component, 'focus');

    expect(onBlurFN).toHaveBeenCalled();
    expect(onFocusFN).toHaveBeenCalled();
    expect(component.props.value).toBe('Value changed');
  });

  it('should render with bottom line', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <TextInput id="test" accessibility="" withBottomline />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render without bottom line', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <TextInput id="test" accessibility="" withBottomline={false} />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render with icon and handle icon press', () => {
    const onPressIcon = jest.fn();
    const wrapper = render(
      <ThemeProvider theme={theme}>
        <TextInput
          id="test"
          accessibility=""
          iconName="book"
          onPressIcon={onPressIcon}
        />
      </ThemeProvider>,
    );

    // Simulate icon press
    fireEvent.press(wrapper.getByTestId('id_book'));

    expect(onPressIcon).toHaveBeenCalled();
  });
});
