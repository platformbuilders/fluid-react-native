/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';
import { fireEvent, render } from '@testing-library/react-native';
import Link from '..';
import theme from '../../../theme';

const TEST_ID = 'test-link';
const ACCESSIBILITY = 'test-accessibility';

describe('<Link />', () => {
  it('should render with default props', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Link id={TEST_ID} accessibility={ACCESSIBILITY}>
          Test Link
        </Link>
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render with custom variant', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Link id={TEST_ID} accessibility={ACCESSIBILITY} variant="lg">
          Test Link
        </Link>
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render with custom accessibility label', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Link
          id={TEST_ID}
          accessibility={ACCESSIBILITY}
          accessibilityLabel="Custom Label"
        >
          Test Link
        </Link>
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render with custom test ID', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Link
          id={TEST_ID}
          accessibility={ACCESSIBILITY}
          testID="custom-test-id"
        >
          Test Link
        </Link>
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should handle onPress event', () => {
    const onPressEvent = jest.fn();

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Link id={TEST_ID} accessibility={ACCESSIBILITY} onPress={onPressEvent}>
          Test Link
        </Link>
      </ThemeProvider>,
    );

    const component = getByTestId(TEST_ID);
    fireEvent.press(component);

    expect(onPressEvent).toHaveBeenCalled();
  });

  it('should render with custom style', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Link
          id={TEST_ID}
          accessibility={ACCESSIBILITY}
          style={{ marginTop: 10 }}
        >
          Test Link
        </Link>
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render without id but with accessibility', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Link accessibility={ACCESSIBILITY}>Test Link</Link>
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
