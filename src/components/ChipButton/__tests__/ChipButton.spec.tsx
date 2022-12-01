import React from 'react';
import { fireEvent, render } from 'react-native-testing-library';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';
import ChipButton from '..';
import { theme } from '../../../test/helpers';
import Typography from '../../Typography';

describe('<ChipButton />', () => {
  it('should render Chipbutton', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <ChipButton id="testing" accessibility="" />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Chipbutton when rounded', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <ChipButton id="testing" accessibility="" rounded />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Chipbutton with loading', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <ChipButton id="testing" accessibility="" loading />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should fire onPress from ChipButton', () => {
    const onPressEvent = jest.fn();

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <ChipButton id="testing" accessibility="" onPress={onPressEvent} />
      </ThemeProvider>,
    );

    const component = getByTestId('testing');

    expect(component).not.toBe(null);

    fireEvent.press(component);

    expect(onPressEvent).toHaveBeenCalled();
  });

  it('should render Chipbutton with children', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <ChipButton id="testing" accessibility="">
          <Typography>Test</Typography>
        </ChipButton>
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Chipbutton with custom accessibility label', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <ChipButton
          id="testing"
          accessibility=""
          accessibilityLabel="testing"
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Chipbutton with test id', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <ChipButton id="testing" accessibility="" testID="test" />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Chipbutton with custom style', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <ChipButton
          id="testing"
          accessibility=""
          style={{ backgroundColor: '#2980b9' }}
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Chipbutton with custom text style', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <ChipButton
          id="testing"
          accessibility=""
          textStyle={{ color: '#2980b9' }}
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Chipbutton with disabled', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <ChipButton id="testing" accessibility="" disabled />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Chipbutton with contrast', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <ChipButton id="testing" accessibility="" contrast />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Chipbutton with variant', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <ChipButton id="testing" accessibility="" variant="secondary" />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
