import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';
import { fireEvent, render } from '@testing-library/react-native';
import Badge from '..';
import theme from '../../../theme';
import Typography from '../../Typography';

// Constantes para evitar duplicação de literais
const TEST_ID = 'testing';
const ACCESSIBILITY = '';

describe('<Badge />', () => {
  it('should render Badge', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Badge id={TEST_ID} accessibility={ACCESSIBILITY} />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Badge when rounded', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Badge id={TEST_ID} accessibility={ACCESSIBILITY} rounded />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Badge with loading', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Badge id={TEST_ID} accessibility={ACCESSIBILITY} loading />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should fire onPress from Badge', () => {
    const onPressEvent = jest.fn();

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Badge
          id={TEST_ID}
          accessibility={ACCESSIBILITY}
          onPress={onPressEvent}
        />
      </ThemeProvider>,
    );

    const component = getByTestId(TEST_ID);

    expect(component).not.toBe(null);

    fireEvent.press(component);

    expect(onPressEvent).toHaveBeenCalled();
  });

  it('should render Badge with children', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Badge id={TEST_ID} accessibility={ACCESSIBILITY}>
          <Typography>Test</Typography>
        </Badge>
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Badge with custom accessibility label', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Badge
          id={TEST_ID}
          accessibility={ACCESSIBILITY}
          accessibilityLabel="testing"
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Badge with test id', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Badge id={TEST_ID} accessibility={ACCESSIBILITY} testID="test" />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Badge with custom style', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Badge
          id={TEST_ID}
          accessibility={ACCESSIBILITY}
          style={{ backgroundColor: '#2980b9' }}
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Badge with custom text style', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Badge
          id={TEST_ID}
          accessibility={ACCESSIBILITY}
          textStyle={{ color: '#2980b9' }}
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Badge with disabled', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Badge id={TEST_ID} accessibility={ACCESSIBILITY} disabled />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Badge with contrast', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Badge id={TEST_ID} accessibility={ACCESSIBILITY} contrast />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Badge with variant', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Badge id={TEST_ID} accessibility={ACCESSIBILITY} variant="secondary" />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  // Novos testes para aumentar a cobertura
  it('should render Badge with left icon', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Badge
          id={TEST_ID}
          accessibility={ACCESSIBILITY}
          leftIconName="check"
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Badge with right icon', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Badge
          id={TEST_ID}
          accessibility={ACCESSIBILITY}
          rightIconName="check"
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Badge with both left and right icons', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Badge
          id={TEST_ID}
          accessibility={ACCESSIBILITY}
          leftIconName="arrow-left"
          rightIconName="arrow-right"
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Badge with custom icon style', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Badge
          id={TEST_ID}
          accessibility={ACCESSIBILITY}
          leftIconName="check"
          iconStyle={{ color: '#e74c3c' }}
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Badge with emoji icon', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Badge
          id={TEST_ID}
          accessibility={ACCESSIBILITY}
          leftIconName="👍"
          isEmoji
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Badge with touchable icon', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Badge
          id={TEST_ID}
          accessibility={ACCESSIBILITY}
          leftIconName="check"
          iconTouchable
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Badge with border', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Badge id={TEST_ID} accessibility={ACCESSIBILITY} hasBorder />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Badge with flat style', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Badge id={TEST_ID} accessibility={ACCESSIBILITY} flat />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Badge with custom typography variant', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Badge
          id={TEST_ID}
          accessibility={ACCESSIBILITY}
          typographyVariant="sm"
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should not fire onPress when disabled', () => {
    const onPressEvent = jest.fn();

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Badge
          id={TEST_ID}
          accessibility={ACCESSIBILITY}
          onPress={onPressEvent}
          disabled
        />
      </ThemeProvider>,
    );

    const component = getByTestId(TEST_ID);
    fireEvent.press(component);

    expect(onPressEvent).not.toHaveBeenCalled();
  });

  it('should not fire onPress when loading', () => {
    const onPressEvent = jest.fn();

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Badge
          id={TEST_ID}
          accessibility={ACCESSIBILITY}
          onPress={onPressEvent}
          loading
        />
      </ThemeProvider>,
    );

    const component = getByTestId(TEST_ID);
    fireEvent.press(component);

    expect(onPressEvent).not.toHaveBeenCalled();
  });
});
