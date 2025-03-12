import React, { FC, useState, useRef } from 'react';
import { fireEvent, render, act } from 'react-native-testing-library';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';
import TextInput from '..';
import { IconFonts, InputStatus } from '../../../enums';
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

    const icon = wrapper.getByTestId('icon_book');
    fireEvent.press(icon);

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
          rightIconName="close"
          onRightIconPress={onRightIconPress}
        />
      </ThemeProvider>,
    );

    const rightIcon = wrapper.getByTestId('icon_close');
    fireEvent.press(rightIcon);

    expect(onRightIconPress).toHaveBeenCalled();
  });

  it('should handle left icon press', () => {
    const onPressIcon = jest.fn();
    const wrapper = render(
      <ThemeProvider theme={theme}>
        <TextInput
          id="test"
          accessibility=""
          leftIconName="search"
          onPressIcon={onPressIcon}
        />
      </ThemeProvider>,
    );

    const leftIcon = wrapper.getByTestId('icon_search');
    fireEvent.press(leftIcon);

    expect(onPressIcon).toHaveBeenCalled();
  });

  it('should render with bordered style', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <TextInput
          id="test"
          accessibility=""
          borderedLabel="Label"
          borderedColor="#ccc"
          borderedRadius={8}
          borderedWidth={2}
          borderedHeight={50}
          borderedBackgroundColor="#f5f5f5"
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render with error state', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <TextInput
          id="test"
          accessibility=""
          error="Este campo é obrigatório"
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render with fixed label', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <TextInput id="test" accessibility="" label="Nome" isFloating={false} />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render with floating label', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <TextInput id="test" accessibility="" label="Nome" isFloating={true} />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render with multiline', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <TextInput
          id="test"
          accessibility=""
          multiline={true}
          numberOfLines={3}
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should handle animation when value changes', () => {
    const Component: FC = (): JSX.Element => {
      const [value, setValue] = useState('');

      return (
        <ThemeProvider theme={theme}>
          <TextInput
            id="test_animation"
            accessibility=""
            label="Label"
            value={value}
            onChangeText={setValue}
            suppressAnimation={false}
          />
        </ThemeProvider>
      );
    };

    const { getByTestId } = render(<Component />);
    const input = getByTestId('test_animation');

    act(() => {
      fireEvent.changeText(input, 'Novo valor');
    });

    act(() => {
      fireEvent(input, 'focus');
    });

    act(() => {
      fireEvent(input, 'blur');
    });

    act(() => {
      fireEvent.changeText(input, '');
    });

    act(() => {
      fireEvent(input, 'blur');
    });
  });

  it('should handle focus and blur with hidePlaceholderOnFocus', () => {
    const Component: FC = (): JSX.Element => {
      const [value, setValue] = useState('');

      return (
        <ThemeProvider theme={theme}>
          <TextInput
            id="test_placeholder"
            accessibility=""
            label="Label"
            value={value}
            onChangeText={setValue}
            suppressAnimation={false}
            hidePlaceholderOnFocus={true}
          />
        </ThemeProvider>
      );
    };

    const { getByTestId } = render(<Component />);
    const input = getByTestId('test_placeholder');

    act(() => {
      fireEvent(input, 'focus');
    });

    act(() => {
      fireEvent(input, 'blur');
    });
  });

  it('should handle focus with bordered height', () => {
    const Component: FC = (): JSX.Element => {
      const [value, setValue] = useState('');

      return (
        <ThemeProvider theme={theme}>
          <TextInput
            id="test_bordered"
            accessibility=""
            value={value}
            onChangeText={setValue}
            borderedHeight={50}
            borderedColor="#ccc"
            focusBorderedColor="#000"
          />
        </ThemeProvider>
      );
    };

    const { getByTestId } = render(<Component />);
    const input = getByTestId('test_bordered');

    act(() => {
      fireEvent(input, 'focus');
    });

    act(() => {
      fireEvent(input, 'blur');
    });
  });

  it('should render with custom icon type', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <TextInput
          id="test"
          accessibility=""
          iconName="book"
          iconType={IconFonts.Material}
          iconSets={{ Material: 'material-icons' }}
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render with iconNameBordered', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <TextInput
          id="test"
          accessibility=""
          iconNameBordered="search"
          borderedHeight={50}
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render with both label and borderedLabel', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <TextInput
          id="test"
          accessibility=""
          label="Label"
          borderedLabel="Bordered Label"
          borderedHeight={50}
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should handle input ref', () => {
    const Component: FC = (): JSX.Element => {
      const inputRef = useRef(null);

      return (
        <ThemeProvider theme={theme}>
          <TextInput id="test_ref" accessibility="" inputRef={inputRef} />
        </ThemeProvider>
      );
    };

    render(<Component />);
  });

  it('should render with different status', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <TextInput id="test" accessibility="" status={InputStatus.Success} />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render with iconTouchableEnabled', () => {
    const onPressIcon = jest.fn();
    const wrapper = render(
      <ThemeProvider theme={theme}>
        <TextInput
          id="test"
          accessibility=""
          iconName="book"
          iconTouchableEnabled={true}
          onPressIcon={onPressIcon}
        />
      </ThemeProvider>,
    );

    const icon = wrapper.getByTestId('icon_book');
    fireEvent.press(icon);

    expect(onPressIcon).toHaveBeenCalled();
  });

  it('should render with custom inputPadding', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <TextInput id="test" accessibility="" inputPadding={20} />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render with custom inputLeftPadding and inputRightPadding', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <TextInput
          id="test"
          accessibility=""
          inputLeftPadding={15}
          inputRightPadding={15}
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
