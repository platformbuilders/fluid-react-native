import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';
import { fireEvent, render } from '@testing-library/react-native';
import theme from '../../../theme';
import ToggleButton from '../index';

describe('<ToggleButton />', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should render toggle component', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <ToggleButton value={true} onValueChange={() => {}} />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should trigger onValueChange function when toggle is pressed', () => {
    const onValueChange = jest.fn();
    const testId = 'toggle_button';
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <ToggleButton
          testID={testId}
          onValueChange={onValueChange}
          value={false}
        />
      </ThemeProvider>,
    );

    const component = getByTestId('toggle_' + testId);

    fireEvent(component, 'onValueChange', true);

    expect(onValueChange).toHaveBeenCalledWith(true);
  });

  it('should render component with custom thumb color', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <ToggleButton
          value={true}
          onValueChange={() => {}}
          thumbColor={{ trueColor: 'red', falseColor: 'blue' }}
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render component with custom track color', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <ToggleButton
          value={true}
          onValueChange={() => {}}
          trackColor={{ trueColor: 'red', falseColor: 'blue' }}
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render component disabled if disable prop is passed', () => {
    const testId = 'toggle_button';
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <ToggleButton
          testID={testId}
          isDisabled
          value={false}
          onValueChange={() => {}}
        />
      </ThemeProvider>,
    );

    const component = getByTestId('toggle_' + testId);

    expect(component).toHaveProperty(
      ['_fiber', 'memoizedProps', 'disabled'],
      true,
    );
  });
});
