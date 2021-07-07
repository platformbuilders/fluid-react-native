import 'jest';
import React from 'react';
import { fireEvent, render } from 'react-native-testing-library';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';
import RadioButton from '..';
import { theme } from '../../../test/helpers';

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

    const component = getByTestId('testing_radio_btn');

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
});
