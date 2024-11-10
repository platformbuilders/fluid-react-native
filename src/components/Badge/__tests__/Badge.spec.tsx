import React from 'react';
import { fireEvent, render } from 'react-native-testing-library';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';
import Badge from '..';
import theme from '../../../theme';
import Typography from '../../Typography';

describe('<Badge />', () => {
  it('should render Badge', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Badge id="testing" accessibility="" />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Badge when rounded', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Badge id="testing" accessibility="" rounded />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Badge with loading', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Badge id="testing" accessibility="" loading />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should fire onPress from Badge', () => {
    const onPressEvent = jest.fn();

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Badge id="testing" accessibility="" onPress={onPressEvent} />
      </ThemeProvider>,
    );

    const component = getByTestId('testing');

    expect(component).not.toBe(null);

    fireEvent.press(component);

    expect(onPressEvent).toHaveBeenCalled();
  });

  it('should render Badge with children', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Badge id="testing" accessibility="">
          <Typography>Test</Typography>
        </Badge>
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Badge with custom accessibility label', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Badge id="testing" accessibility="" accessibilityLabel="testing" />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Badge with test id', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Badge id="testing" accessibility="" testID="test" />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Badge with custom style', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Badge
          id="testing"
          accessibility=""
          style={{ backgroundColor: '#2980b9' }}
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Badge with custom text style', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Badge id="testing" accessibility="" textStyle={{ color: '#2980b9' }} />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Badge with disabled', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Badge id="testing" accessibility="" disabled />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Badge with contrast', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Badge id="testing" accessibility="" contrast />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Badge with variant', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Badge id="testing" accessibility="" variant="secondary" />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
