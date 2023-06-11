import React from 'react';
import 'jest-styled-components';
import { fireEvent, render } from 'react-native-testing-library';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';
import Button from '..';
import theme from '../../../theme';
import Typography from '../../Typography';

describe('<Button />', () => {
  it('should render button', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Button id="testing" accessibility="" />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render button when rounded', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Button id="testing" accessibility="" rounded />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render button with loading', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Button id="testing" accessibility="" loading />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should fire onPress from Button', () => {
    const onPressEvent = jest.fn();

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Button id="testing" accessibility="" onPress={onPressEvent} />
      </ThemeProvider>,
    );

    const component = getByTestId('testing');

    expect(component).not.toBe(null);

    fireEvent.press(component);

    expect(onPressEvent).toHaveBeenCalled();
  });

  it('should render button with children', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Button id="testing" accessibility="">
          <Typography>Test</Typography>
        </Button>
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render button with custom accessibility label', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Button id="testing" accessibility="" accessibilityLabel="testing" />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render button with test id', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Button id="testing" accessibility="" testID="test" />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render button with custom style', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Button
          id="testing"
          accessibility=""
          style={{ backgroundColor: '#2980b9' }}
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render button with custom text style', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Button
          id="testing"
          accessibility=""
          textStyle={{ color: '#2980b9' }}
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render button with disabled', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Button id="testing" accessibility="" disabled />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render button with contrast', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Button id="testing" accessibility="" contrast />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render button with variant', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Button id="testing" accessibility="" variant="secondary" />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render button with typography variant', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Button id="testing" accessibility="" typographyVariant="lg" />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
