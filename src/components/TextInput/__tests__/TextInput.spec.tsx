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
    fireEvent.press(wrapper.getByTestId('icon_book'));

    expect(onPressIcon).toHaveBeenCalled();
  });
  it('should render with props', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <TextInput
          id="test"
          accessibility=""
          label="Name"
          placeholder="Enter your name"
          large
          multiline
          contrast
          centered
          autoFocus
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render textinput with error', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <TextInput id="test" accessibility="" error="Some error occurred" />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should handle right icon press', () => {
    const onRightIconPress = jest.fn();
    const wrapper = render(
      <ThemeProvider theme={theme}>
        <TextInput
          id="test"
          accessibility=""
          rightIconName="right-icon"
          onRightIconPress={onRightIconPress}
        />
      </ThemeProvider>,
    );

    fireEvent.press(wrapper.getByTestId('icon_right-icon'));

    expect(onRightIconPress).toHaveBeenCalled();
  });
  it('should handle focus and blur animations', () => {
    const { getByTestId, rerender } = render(
      <ThemeProvider theme={theme}>
        <TextInput
          id="testing_textInput"
          accessibility=""
          label="Test"
          suppressAnimation={false}
          hidePlaceholderOnFocus={false}
        />
      </ThemeProvider>,
    );

    const component = getByTestId('testing_textInput');

    fireEvent(component, 'focus');
    rerender(
      <ThemeProvider theme={theme}>
        <TextInput
          id="testing_textInput"
          accessibility=""
          label="Test"
          value="test"
          suppressAnimation={false}
          hidePlaceholderOnFocus={false}
        />
      </ThemeProvider>,
    );
    fireEvent(component, 'blur');

    expect(component.props.isPlaceholder).toBe(false);
  });
  it('should handle when label is empty', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <TextInput id="testing_textInput" accessibility="" label="" />
      </ThemeProvider>,
    );

    const component = getByTestId('testing_textInput');

    fireEvent(component, 'blur');

    expect(component.props.isPlaceholder).toBe(false);
  });
});
