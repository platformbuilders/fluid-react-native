import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';
import FAB from '..';
import theme from '../../../theme';

describe('<FAB />', () => {
  it('should render fab', () => {
    const onPressEvent = jest.fn();

    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <FAB id="testing" accessibility="" onPress={onPressEvent} />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render fab with custom text color', () => {
    const onPressEvent = jest.fn();

    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <FAB
          id="testing"
          accessibility=""
          onPress={onPressEvent}
          color="#2980b9"
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render fab with custom icon', () => {
    const onPressEvent = jest.fn();

    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <FAB
          id="testing"
          accessibility=""
          onPress={onPressEvent}
          iconName="book"
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render fab with custom icon color', () => {
    const onPressEvent = jest.fn();

    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <FAB
          id="testing"
          accessibility=""
          onPress={onPressEvent}
          iconColor="#2980b9"
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render fab with custom icon size', () => {
    const onPressEvent = jest.fn();

    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <FAB
          id="testing"
          accessibility=""
          onPress={onPressEvent}
          iconSize={24}
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render fab with relative pos', () => {
    const onPressEvent = jest.fn();

    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <FAB id="testing" accessibility="" onPress={onPressEvent} relativePos />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render fab with shadow', () => {
    const onPressEvent = jest.fn();

    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <FAB id="testing" accessibility="" onPress={onPressEvent} hasShadow />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
