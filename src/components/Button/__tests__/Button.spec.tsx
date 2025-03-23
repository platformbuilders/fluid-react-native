import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';
import { fireEvent, render } from '@testing-library/react-native';
import Button from '..';
import theme from '../../../theme';
import Typography from '../../Typography';

// Constantes para evitar duplicação de literais
const TEST_ID = 'testing';
const ACCESSIBILITY = '';

describe('<Button />', () => {
  it('should render button', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Button id={TEST_ID} accessibility={ACCESSIBILITY} />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render button when rounded', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Button id={TEST_ID} accessibility={ACCESSIBILITY} rounded />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render button with loading', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Button id={TEST_ID} accessibility={ACCESSIBILITY} loading />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should fire onPress from Button', () => {
    const onPressEvent = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Button
          testID={TEST_ID}
          accessibility={ACCESSIBILITY}
          onPress={onPressEvent}
        />
      </ThemeProvider>,
    );

    const component = getByTestId('button_' + TEST_ID);

    expect(component).not.toBe(null);
    fireEvent.press(component);
    expect(onPressEvent).toHaveBeenCalledTimes(1);
  });

  it('should render button with children', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Button id={TEST_ID} accessibility={ACCESSIBILITY}>
          <Typography>Test</Typography>
        </Button>
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render button with custom accessibility label', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Button
          id={TEST_ID}
          accessibility={ACCESSIBILITY}
          accessibilityLabel="testing"
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render button with test id', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Button id={TEST_ID} accessibility={ACCESSIBILITY} testID="test" />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render button with custom style', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Button
          id={TEST_ID}
          accessibility={ACCESSIBILITY}
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
          id={TEST_ID}
          accessibility={ACCESSIBILITY}
          textStyle={{ color: '#2980b9' }}
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render button with disabled', () => {
    const onPressEvent = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Button
          testID={TEST_ID}
          accessibility={ACCESSIBILITY}
          onPress={onPressEvent}
          disabled
        />
      </ThemeProvider>,
    );

    const component = getByTestId('button_' + TEST_ID);
    fireEvent.press(component);

    expect(onPressEvent).not.toHaveBeenCalled();
  });

  it('should render button with contrast', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Button id={TEST_ID} accessibility={ACCESSIBILITY} contrast />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render button with variant', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Button
          id={TEST_ID}
          accessibility={ACCESSIBILITY}
          variant="filled"
          colorVariant="primary"
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render button with typography variant', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Button
          id={TEST_ID}
          accessibility={ACCESSIBILITY}
          typographyVariant="lg"
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  // Novos testes para aumentar a cobertura
  it('should render button with left icon', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Button
          id={TEST_ID}
          accessibility={ACCESSIBILITY}
          leftIconName="check"
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render button with right icon', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Button
          id={TEST_ID}
          accessibility={ACCESSIBILITY}
          rightIconName="check"
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render button with both left and right icons', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Button
          id={TEST_ID}
          accessibility={ACCESSIBILITY}
          leftIconName="arrow-left"
          rightIconName="arrow-right"
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render button with left icon not touchable', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Button
          id={TEST_ID}
          accessibility={ACCESSIBILITY}
          leftIconName="check"
          leftIconTouchable={false}
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render button with right icon not touchable', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Button
          id={TEST_ID}
          accessibility={ACCESSIBILITY}
          rightIconName="check"
          rightIconTouchable={false}
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render button with flat style', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Button id={TEST_ID} accessibility={ACCESSIBILITY} flat />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render button with outline variant', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Button id={TEST_ID} accessibility={ACCESSIBILITY} variant="outline" />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render button with secondary color variant', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Button
          id={TEST_ID}
          accessibility={ACCESSIBILITY}
          colorVariant="secondary"
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render button with min width', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Button id={TEST_ID} accessibility={ACCESSIBILITY} minWidth="200px" />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render button with max width', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Button id={TEST_ID} accessibility={ACCESSIBILITY} maxWidth="300px" />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should not fire onPress when disabled', () => {
    const onPressEvent = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Button
          testID={TEST_ID}
          accessibility={ACCESSIBILITY}
          onPress={onPressEvent}
          disabled
        />
      </ThemeProvider>,
    );

    const component = getByTestId('button_' + TEST_ID);
    fireEvent.press(component);

    expect(onPressEvent).not.toHaveBeenCalled();
  });

  it('should not fire onPress when loading', () => {
    const onPressEvent = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Button
          testID={TEST_ID}
          accessibility={ACCESSIBILITY}
          onPress={onPressEvent}
          loading
        />
      </ThemeProvider>,
    );

    const component = getByTestId('button_' + TEST_ID);
    fireEvent.press(component);

    expect(onPressEvent).not.toHaveBeenCalled();
  });

  it('should use default accessibility when not provided', () => {
    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <Button id={TEST_ID} accessibility="" />
      </ThemeProvider>,
    );

    const button = getByRole('button');
    expect(button.props.accessibilityLabel).toBe('Button');
  });

  it('should use default testID when not provided', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Button accessibility="test-button" />
      </ThemeProvider>,
    );

    const button = getByTestId('button_test-button');
    expect(button).toBeDefined();
  });
});
