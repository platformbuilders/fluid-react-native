import React from 'react';
import { Animated } from 'react-native';
import renderer, { act } from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';
import DatePicker from '..';
import theme from '../../../theme';

jest.useFakeTimers().setSystemTime(new Date('2020-01-01').getTime());

/* eslint-disable sonarjs/no-duplicate-string */
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
        start: jest.fn(),
      })),
      parallel: jest.fn(() => ({
        start: jest.fn(),
      })),
    },
  };
});

describe('<DatePicker />', () => {
  // Definindo constantes para reutilização
  const TEST_ID = 'testing';
  const TEST_VALUE = 'test';
  const TEST_LABEL = 'test';
  const TEST_ERROR = 'test';
  const TEST_BTN_TEXT = 'test';

  it('should render datepicker', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <DatePicker id={TEST_ID} accessibility="" />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render datepicker with value', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <DatePicker id={TEST_ID} accessibility="" value={TEST_VALUE} />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render datepicker with label', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <DatePicker id={TEST_ID} accessibility="" label={TEST_LABEL} />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render datepicker with error', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <DatePicker id={TEST_ID} accessibility="" error={TEST_ERROR} />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render datepicker with button cancel text', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <DatePicker
          id={TEST_ID}
          accessibility=""
          cancelBtnText={TEST_BTN_TEXT}
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render datepicker with test id', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <DatePicker id={TEST_ID} accessibility="" testID={TEST_VALUE} />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render datepicker with accessibility label', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <DatePicker id={TEST_ID} accessibility="" accessibilityLabel="test" />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render datepicker with confirm button text', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <DatePicker id={TEST_ID} accessibility="" confirmBtnText="test" />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render datepicker with custom mode', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <DatePicker id={TEST_ID} accessibility="" mode="date" />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render datepicker with custom mode android', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <DatePicker id={TEST_ID} accessibility="" androidMode="calendar" />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render datepicker with editable', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <DatePicker id={TEST_ID} accessibility="" editable={false} />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render datepicker with custom locale', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <DatePicker id={TEST_ID} accessibility="" locale="en" />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render datepicker with format', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <DatePicker id={TEST_ID} accessibility="" format="yyyy-MM-dd" />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render datepicker with no dark', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <DatePicker id={TEST_ID} accessibility="" dark={false} />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render datepicker with status', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <DatePicker id={TEST_ID} accessibility="" status="disabled" />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should call onDateChange when date is changed', () => {
    const onDateChangeMock = jest.fn();
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <DatePicker
          id={TEST_ID}
          accessibility=""
          onDateChange={onDateChangeMock}
        />
      </ThemeProvider>,
    );

    const datePicker = wrapper.root.findByProps({ testID: TEST_ID });
    act(() => {
      datePicker.props.onDateChange('2021-01-01');
    });

    expect(onDateChangeMock).toHaveBeenCalledWith('2021-01-01');
  });

  it('should animate label when date is changed', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <DatePicker id={TEST_ID} accessibility="" />
      </ThemeProvider>,
    );

    const datePicker = wrapper.root.findByProps({ testID: TEST_ID });
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
        <DatePicker id={TEST_ID} accessibility="" value="2021-01-01" />
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
        <DatePicker id={TEST_ID} accessibility="" dark error="Error message" />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render datepicker with maxDate', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <DatePicker id={TEST_ID} accessibility="" maxDate="2021-12-31" />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should handle animation when date is changed', () => {
    // Espiona o método Animated.parallel
    const parallelSpy = jest.spyOn(Animated, 'parallel');

    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <DatePicker id={TEST_ID} accessibility="" />
      </ThemeProvider>,
    );

    const datePicker = wrapper.root.findByProps({ testID: TEST_ID });

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
        <DatePicker id={TEST_ID} accessibility="" mode="time" format="HH:mm" />
      </ThemeProvider>,
    );

    const datePicker = wrapper.root.findByProps({ testID: TEST_ID });

    act(() => {
      datePicker.props.onDateChange('14:30');
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should handle datetime mode', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <DatePicker
          id={TEST_ID}
          accessibility=""
          mode="datetime"
          format="YYYY-MM-DD HH:mm"
        />
      </ThemeProvider>,
    );

    const datePicker = wrapper.root.findByProps({ testID: TEST_ID });

    act(() => {
      datePicker.props.onDateChange('2021-01-01 14:30');
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should not call onDateChange if not provided', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <DatePicker id={TEST_ID} accessibility="" />
      </ThemeProvider>,
    );

    const datePicker = wrapper.root.findByProps({ testID: TEST_ID });

    // Não deve lançar erro mesmo sem onDateChange definido
    act(() => {
      datePicker.props.onDateChange('2021-01-01');
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should handle animation when already has value', () => {
    // Renderiza o componente e verifica se a animação foi executada
    renderer.create(
      <ThemeProvider theme={theme}>
        <DatePicker id={TEST_ID} accessibility="" value="2021-01-01" />
      </ThemeProvider>,
    );

    // Verifica se a animação foi executada durante a montagem
    expect(Animated.parallel).toHaveBeenCalled();
  });
});
