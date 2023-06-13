import React from 'react';
import { fireEvent, render } from 'react-native-testing-library';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';
import theme from '../../../theme';
import ToggleButton from '../index';

const onPressEvent = jest.fn();

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
    const testId = 'toggle_button';
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <ToggleButton id={testId} value={false} onValueChange={onPressEvent} />
      </ThemeProvider>,
    );

    const component = getByTestId(testId);

    fireEvent(component, 'onValueChange', true);

    expect(onPressEvent).toHaveBeenCalledTimes(1);
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
          id={testId}
          value={true}
          onValueChange={() => {}}
          isDisabled
        />
      </ThemeProvider>,
    );

    const component = getByTestId(testId);

    expect(component).toHaveProperty(
      ['_fiber', 'memoizedProps', 'disabled'],
      true,
    );
  });
});
