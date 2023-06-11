import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';
import DatePicker from '..';
import theme from '../../../theme';

jest.useFakeTimers().setSystemTime(new Date('2020-01-01').getTime());

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
});
