import React from 'react';
import { render } from 'react-native-testing-library';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import PinInput from '..';
import theme from '../../../theme';
import { defaultStyling } from '../styles';

describe('<PinInput />', () => {
  it('should render textinput', () => {
    const onChangeText = jest.fn();
    const defaultStyle = defaultStyling(theme);
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <PinInput
          id="test"
          accessibility=""
          onChangeText={onChangeText}
          {...defaultStyle}
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render textinput with password', () => {
    const onChangeText = jest.fn();
    const defaultStyle = defaultStyling(theme);
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <PinInput
          id="test"
          accessibility=""
          onChangeText={onChangeText}
          password
          {...defaultStyle}
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render textinput with animated', () => {
    const onChangeText = jest.fn();
    const defaultStyle = defaultStyling(theme);
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <PinInput
          id="test"
          accessibility=""
          onChangeText={onChangeText}
          animated
          {...defaultStyle}
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render textinput with centered', () => {
    const onChangeText = jest.fn();
    const defaultStyle = defaultStyling(theme);
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <PinInput
          id="test"
          accessibility=""
          onChangeText={onChangeText}
          centered
          {...defaultStyle}
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render textinput with contrast', () => {
    const onChangeText = jest.fn();
    const defaultStyle = defaultStyling(theme);
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <PinInput
          id="test"
          accessibility=""
          onChangeText={onChangeText}
          contrast
          {...defaultStyle}
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render textinput with custom mask', () => {
    const onChangeText = jest.fn();
    const defaultStyle = defaultStyling(theme);
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <PinInput
          id="test"
          accessibility=""
          onChangeText={onChangeText}
          mask="(**) *****-****"
          {...defaultStyle}
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render textinput with custom ful fill', () => {
    const defaultStyle = defaultStyling(theme);
    const onChange = jest.fn();
    const onChangeText = jest.fn();

    const wrapper = render(
      <ThemeProvider theme={theme}>
        <PinInput
          id="test"
          accessibility=""
          onChangeText={onChangeText}
          onFulfill={onChange}
          {...defaultStyle}
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render textinput with custom code length', () => {
    const defaultStyle = defaultStyling(theme);
    const onChangeText = jest.fn();

    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <PinInput
          id="test"
          accessibility=""
          onChangeText={onChangeText}
          codeLength={6}
          {...defaultStyle}
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render textinput with custom caption', () => {
    const defaultStyle = defaultStyling(theme);
    const onChangeText = jest.fn();

    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <PinInput
          id="test"
          accessibility=""
          onChangeText={onChangeText}
          caption="test"
          {...defaultStyle}
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render textinput with custom error message', () => {
    const defaultStyle = defaultStyling(theme);
    const onChangeText = jest.fn();

    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <PinInput
          id="test"
          accessibility=""
          onChangeText={onChangeText}
          error="testError"
          {...defaultStyle}
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render textinput with error', () => {
    const defaultStyle = defaultStyling(theme);
    const onChangeText = jest.fn();

    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <PinInput
          id="test"
          accessibility=""
          onChangeText={onChangeText}
          error
          {...defaultStyle}
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render textinput with value', () => {
    const defaultStyle = defaultStyling(theme);
    const onChangeText = jest.fn();

    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <PinInput
          id="test"
          accessibility=""
          onChangeText={onChangeText}
          value="testing"
          {...defaultStyle}
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
