import React from 'react';
import renderer, { act } from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';
import DatePicker from '..';
import theme from '../../../theme';

// Mock para o módulo react-native-datepicker usado pelo componente
jest.mock('react-native-datepicker', () => 'DatePicker');

// Mock para módulo Animated
jest.mock('react-native', () => {
  const rn = jest.requireActual('react-native');
  rn.Animated = {
    Value: jest.fn(() => ({
      setValue: jest.fn(),
      interpolate: jest.fn(),
    })),
    timing: jest.fn(() => ({
      start: jest.fn(),
    })),
    parallel: jest.fn(() => ({
      start: jest.fn(),
    })),
    createAnimatedComponent: jest.fn((comp) => comp),
  };
  return rn;
});

jest.useFakeTimers();

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

  it('should render datepicker with custom props', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <DatePicker
          id={TEST_ID}
          accessibility=""
          testID={TEST_VALUE}
          accessibilityLabel="test"
          confirmBtnText="test"
          mode="date"
          androidMode="calendar"
          editable={false}
          locale="en"
          format="yyyy-MM-dd"
          dark={false}
          status="disabled"
          maxDate="2021-12-31"
        />
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

    // O testID no componente é atribuído como accessibility ou o valor de testID
    const datePicker = wrapper.root.findByProps({ testID: '' });

    // Simular mudança de data usando act() para envolver atualizações de estado
    act(() => {
      datePicker.props.onDateChange('2021-01-01');
    });

    // Avançar timers para completar animações
    act(() => {
      jest.advanceTimersByTime(300);
    });

    expect(onDateChangeMock).toHaveBeenCalledWith('2021-01-01');
  });
});
