import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';
import { fireEvent, render } from '@testing-library/react-native';
import ToggleButton from '..';
import theme from '../../../theme';

const onPressEvent = jest.fn();

jest.mock('styled-components/native', () => ({
  ...jest.requireActual('styled-components/native'),
  Switch: {
    default: jest.fn().mockImplementation(() => jest.fn()),
    attrs: () => jest.fn(),
  },
}));

jest.mock('react-native', () => ({
  Switch: {
    default: jest.fn().mockImplementation(() => jest.fn()),
    attrs: () => jest.fn(),
  },
}));

describe.skip('<ToggleButton />', () => {
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
