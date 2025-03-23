import React from 'react';
import { fireEvent, render } from 'react-native-testing-library';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';
import RadioButton from '..';
import { generateTestID } from '../../../utils/accessibility';
import theme from '../../../theme';

describe('<RadioButton />', () => {
  it('should render radio button component', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <RadioButton
          id="testing_radio_btn"
          accessibility="Select information"
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should trigger onPress function', () => {
    const onPressEvent = jest.fn();

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <RadioButton
          id="testing_radio_btn"
          accessibility="checkbox"
          onPress={onPressEvent}
        />
      </ThemeProvider>,
    );

    const component = getByTestId('radio_testing_radio_btn');

    fireEvent.press(component);

    expect(onPressEvent).toHaveBeenCalled();
  });

  it('should render radio button component with custom radio button color', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <RadioButton
          id="testing_radio_btn"
          accessibility="Select information"
          radioButtonColor="#3498db"
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render radio button component with custom checked radio button color', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <RadioButton
          id="testing_radio_btn"
          accessibility="Select information"
          checkedRadioButtonColor="#2ecc71"
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render radio button component with custom size', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <RadioButton
          id="testing_radio_btn"
          accessibility="Select information"
          size={24}
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render radio button component with custom internal size', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <RadioButton
          id="testing_radio_btn"
          accessibility="Select information"
          internalSize={24}
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render radio button component with custom checked', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <RadioButton
          id="testing_radio_btn"
          accessibility="Select information"
          checked
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render checked radio button component with label', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <RadioButton
          id="testing_radio_btn"
          accessibility="Select information"
          label="Select information"
          checked
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render unchecked radio button component with label', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <RadioButton
          id="testing_radio_btn"
          accessibility="Select information"
          label="Select information"
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render radio button component with proper testID when ID is provided', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <RadioButton
          id="custom-radio"
          accessibility="Select information"
        />
      </ThemeProvider>,
    );

    expect(getByTestId(generateTestID('radio', 'custom-radio'))).toBeTruthy();
  });

  it('should render radio button component with proper testID when only accessibility is provided', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <RadioButton
          accessibility="accessibility-radio"
        />
      </ThemeProvider>,
    );

    expect(getByTestId(generateTestID('radio', 'accessibility-radio'))).toBeTruthy();
  });

  it('should render radio button component with proper testID when only testID is provided', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <RadioButton
          testID="test-radio"
          accessibility="test"
        />
      </ThemeProvider>,
    );

    expect(getByTestId('radio_test')).toBeTruthy();
  });

  it('should render radio button component with default testID when no id is provided', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <RadioButton accessibility="test" />
      </ThemeProvider>,
    );

    expect(getByTestId(generateTestID('radio', 'test'))).toBeTruthy();
  });

  it('should handle accessibility correctly when checked is true', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <RadioButton
          id="test-radio"
          accessibility="accessibility test"
          checked
        />
      </ThemeProvider>,
    );

    const radioButton = getByTestId('radio_test-radio');
    expect(radioButton.props.accessibilityState.checked).toBe(true);
  });

  it('should handle accessibility correctly when disabled is true', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <RadioButton
          id="test-radio"
          accessibility="accessibility test"
          disabled
        />
      </ThemeProvider>,
    );

    const radioButton = getByTestId('radio_test-radio');
    expect(radioButton.props.accessibilityState.disabled).toBe(true);
  });

  it('should use custom accessibilityLabel when provided', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <RadioButton
          id="test-radio"
          accessibility="accessibility test"
          accessibilityLabel="Custom Label"
        />
      </ThemeProvider>,
    );

    const radioButton = getByTestId('radio_test-radio');
    expect(radioButton.props.accessibilityLabel).toBe('Custom Label');
  });

  it('should not trigger onPress when disabled is true', () => {
    const onPressEvent = jest.fn();

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <RadioButton
          id="testing_radio_btn"
          accessibility="checkbox"
          onPress={onPressEvent}
          disabled
        />
      </ThemeProvider>,
    );

    const component = getByTestId('radio_testing_radio_btn');
    fireEvent.press(component);

    expect(onPressEvent).not.toHaveBeenCalled();
  });

  it('should render correctly with custom labelStyle', () => {
    const customLabelStyle = { color: 'red', fontSize: 18 };
    
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <RadioButton
          id="test-radio"
          accessibility="accessibility test"
          label="Custom Label Style"
          labelStyle={customLabelStyle}
        />
      </ThemeProvider>,
    );

    const label = getByText('Custom Label Style');
    expect(label.props.style[2]).toEqual(customLabelStyle);
  });

  it('should apply different accessibilityHint when label is provided', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <RadioButton
          id="test-radio"
          accessibility="accessibility test"
          label="Test Label"
        />
      </ThemeProvider>,
    );

    const radioButton = getByTestId('radio_test-radio');
    expect(radioButton.props.accessibilityHint).toBe('Test Label pode ser selecionado com um toque');
  });

  it('should apply default accessibilityHint when label is not provided', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <RadioButton
          id="test-radio"
          accessibility="accessibility test"
        />
      </ThemeProvider>,
    );

    const radioButton = getByTestId('radio_test-radio');
    expect(radioButton.props.accessibilityHint).toBe('Esta opção pode ser selecionada com um toque');
  });

  it('should use label as default accessibilityLabel when accessibilityLabel is not provided', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <RadioButton
          id="test-radio"
          accessibility="accessibility test"
          label="Test Label"
        />
      </ThemeProvider>,
    );

    const radioButton = getByTestId('radio_test-radio');
    expect(radioButton.props.accessibilityLabel).toBe('Test Label');
  });

  it('should use "Botão de opção" as default accessibilityLabel when neither label nor accessibilityLabel are provided', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <RadioButton
          id="test-radio"
          accessibility="accessibility test"
        />
      </ThemeProvider>,
    );

    const radioButton = getByTestId('radio_test-radio');
    expect(radioButton.props.accessibilityLabel).toBe('Botão de opção');
  });

  it('should apply hitSlop for better touch area', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <RadioButton
          id="test-radio"
          accessibility="accessibility test"
        />
      </ThemeProvider>,
    );

    const radioButton = getByTestId('radio_test-radio');
    expect(radioButton.props.hitSlop).toEqual({ top: 10, bottom: 10, left: 10, right: 10 });
  });

  it('should render radio button component with both custom size and internal size', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <RadioButton
          id="testing_radio_btn"
          accessibility="Select information"
          size={30}
          internalSize={15}
          checked
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should handle various combinations of props for testID generation', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <RadioButton
          accessibility="default-accessibility"
          // Nenhum ID explícito, deve usar o fallback
        />
      </ThemeProvider>,
    );

    expect(getByTestId('radio_default-accessibility')).toBeTruthy();
  });

  it('should render correctly with both custom radio color and checked radio color', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <RadioButton
          id="testing_radio_btn"
          accessibility="Select information"
          radioButtonColor="#3498db"
          checkedRadioButtonColor="#e74c3c"
          checked
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should pass through additional props to Wrapper component', () => {
    const additionalProps = { style: { margin: 10 } };
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <RadioButton
          id="test-radio"
          accessibility="accessibility test"
          {...additionalProps}
        />
      </ThemeProvider>,
    );

    const radioButton = getByTestId('radio_test-radio');
    expect(radioButton.props.style).toMatchObject(expect.objectContaining({ margin: 10 }));
  });
});
