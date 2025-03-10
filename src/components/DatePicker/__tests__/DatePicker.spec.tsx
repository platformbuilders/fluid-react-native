import React from 'react';
import { Animated } from 'react-native';
import renderer, { act } from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';
import DatePicker from '..';
import theme from '../../../theme';

jest.useFakeTimers().setSystemTime(new Date('2020-01-01').getTime());

// Mock para Animated
jest.mock('react-native', () => {
  const reactNative = jest.requireActual('react-native');

  return {
    ...reactNative,
    Animated: {
      ...reactNative.Animated,
      Value: jest.fn((x) => ({
        x,
        setValue: jest.fn(),
        interpolate: jest.fn(),
        _startingValue: x,
      })),
      timing: jest.fn(() => ({
        start: jest.fn((callback) => callback && callback()),
      })),
      parallel: jest.fn((animations) => ({
        start: jest.fn((callback) => callback && callback()),
      })),
    },
  };
});

describe('<DatePicker />', () => {
  it('should render datepicker', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <DatePicker id="testing" accessibility="" />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render datepicker with value', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <DatePicker id="testing" accessibility="" value="test" />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render datepicker with label', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <DatePicker id="testing" accessibility="" label="test" />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render datepicker with error', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <DatePicker id="testing" accessibility="" error="test" />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render datepicker with button cancel text', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <DatePicker id="testing" accessibility="" cancelBtnText="test" />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render datepicker with test id', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <DatePicker id="testing" accessibility="" testID="test" />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render datepicker with accessibility label', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <DatePicker id="testing" accessibility="" accessibilityLabel="test" />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render datepicker with confirm button text', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <DatePicker id="testing" accessibility="" confirmBtnText="test" />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render datepicker with custom mode', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <DatePicker id="testing" accessibility="" mode="date" />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render datepicker with custom mode android', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <DatePicker id="testing" accessibility="" androidMode="calendar" />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render datepicker with editable', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <DatePicker id="testing" accessibility="" editable={false} />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render datepicker with custom locale', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <DatePicker id="testing" accessibility="" locale="en" />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render datepicker with format', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <DatePicker id="testing" accessibility="" format="yyyy-MM-dd" />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render datepicker with no dark', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <DatePicker id="testing" accessibility="" dark={false} />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render datepicker with status', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <DatePicker id="testing" accessibility="" status="disabled" />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should call onDateChange when date is changed', () => {
    const onDateChangeMock = jest.fn();
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <DatePicker
          id="testing"
          accessibility=""
          onDateChange={onDateChangeMock}
        />
      </ThemeProvider>,
    );

    const datePicker = wrapper.root.findByProps({ testID: 'testing' });
    act(() => {
      datePicker.props.onDateChange('2021-01-01');
    });

    expect(onDateChangeMock).toHaveBeenCalledWith('2021-01-01');
  });

  it('should animate label when date is changed', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <DatePicker id="testing" accessibility="" />
      </ThemeProvider>,
    );

    const datePicker = wrapper.root.findByProps({ testID: 'testing' });
    act(() => {
      datePicker.props.onDateChange('2021-01-01');
    });

    // Avança os timers para completar a animação
    act(() => {
      jest.advanceTimersByTime(200);
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should animate label when value is provided', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <DatePicker id="testing" accessibility="" value="2021-01-01" />
      </ThemeProvider>,
    );

    // Avança os timers para completar a animação
    act(() => {
      jest.advanceTimersByTime(200);
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render datepicker with dark mode and error', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <DatePicker id="testing" accessibility="" dark error="Error message" />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render datepicker with maxDate', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <DatePicker id="testing" accessibility="" maxDate="2021-12-31" />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should handle animation when date is changed', () => {
    // Espiona o método Animated.parallel
    const parallelSpy = jest.spyOn(Animated, 'parallel');

    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <DatePicker id="testing" accessibility="" />
      </ThemeProvider>,
    );

    const datePicker = wrapper.root.findByProps({ testID: 'testing' });

    act(() => {
      datePicker.props.onDateChange('2021-01-01');
    });

    expect(parallelSpy).toHaveBeenCalled();

    // Restaura o spy
    parallelSpy.mockRestore();
  });

  it('should handle time mode', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <DatePicker id="testing" accessibility="" mode="time" format="HH:mm" />
      </ThemeProvider>,
    );

    const datePicker = wrapper.root.findByProps({ testID: 'testing' });

    act(() => {
      datePicker.props.onDateChange('14:30');
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should handle datetime mode', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <DatePicker
          id="testing"
          accessibility=""
          mode="datetime"
          format="YYYY-MM-DD HH:mm"
        />
      </ThemeProvider>,
    );

    const datePicker = wrapper.root.findByProps({ testID: 'testing' });

    act(() => {
      datePicker.props.onDateChange('2021-01-01 14:30');
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should not call onDateChange if not provided', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <DatePicker id="testing" accessibility="" />
      </ThemeProvider>,
    );

    const datePicker = wrapper.root.findByProps({ testID: 'testing' });

    // Não deve lançar erro mesmo sem onDateChange definido
    act(() => {
      datePicker.props.onDateChange('2021-01-01');
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should handle animation when already has value', () => {
    // Espiona o método execAnimation
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <DatePicker id="testing" accessibility="" value="2021-01-01" />
      </ThemeProvider>,
    );

    // Verifica se a animação foi executada durante a montagem
    expect(Animated.parallel).toHaveBeenCalled();
  });
});
