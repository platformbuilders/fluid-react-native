import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';
import { fireEvent, render } from '@testing-library/react-native';
import Icon from '..';
import { IconFonts } from '../../../enums';
import theme from '../../../theme';

const TEST_ID = 'test-icon';
const ACCESSIBILITY = 'test-accessibility';

describe('<Icon />', () => {
  it('should render with default props', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Icon id={TEST_ID} accessibility={ACCESSIBILITY} name="home" />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render emoji icon', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Icon id={TEST_ID} accessibility={ACCESSIBILITY} name="👍" isEmoji />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render with custom size', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Icon
          id={TEST_ID}
          accessibility={ACCESSIBILITY}
          name="home"
          size={30}
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render with custom color', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Icon
          id={TEST_ID}
          accessibility={ACCESSIBILITY}
          name="home"
          color="#FF0000"
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render with Material icon type', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Icon
          id={TEST_ID}
          accessibility={ACCESSIBILITY}
          name="home"
          type={IconFonts.Material}
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should handle onPress event', () => {
    const onPressEvent = jest.fn();

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Icon
          id={TEST_ID}
          accessibility={ACCESSIBILITY}
          name="home"
          onPress={onPressEvent}
        />
      </ThemeProvider>,
    );

    const component = getByTestId(TEST_ID);
    fireEvent.press(component);

    expect(onPressEvent).toHaveBeenCalled();
  });

  it('should render with custom dimensions', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Icon
          id={TEST_ID}
          accessibility={ACCESSIBILITY}
          name="home"
          width={40}
          height={40}
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render with custom background and border colors', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Icon
          id={TEST_ID}
          accessibility={ACCESSIBILITY}
          name="home"
          backgroundColor="#FFFFFF"
          borderColor="#000000"
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render non-touchable icon', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Icon
          id={TEST_ID}
          accessibility={ACCESSIBILITY}
          name="home"
          touchable={false}
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render with custom accessibility label', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Icon
          id={TEST_ID}
          accessibility={ACCESSIBILITY}
          name="home"
          accessibilityLabel="Custom Label"
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
