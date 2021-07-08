import 'jest';
import React from 'react';
import { fireEvent, render } from 'react-native-testing-library';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';
import Avatar from '..';
import { ImageAvatarPlaceholder as defaultAvatar } from '../../../assets/images';
import { theme } from '../../../test/helpers';

describe('<Avatar />', () => {
  it('should render Avatar', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Avatar id="testing" accessibility="" />
      </ThemeProvider>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Avatar with camera', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Avatar id="testing" accessibility="" displayCamera />
      </ThemeProvider>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should trigger onPress function', () => {
    const onPressEvent = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Avatar id="testing" accessibility="" onPress={onPressEvent} />
      </ThemeProvider>,
    );

    const component = getByTestId('testing');

    fireEvent.press(component);

    expect(onPressEvent).toHaveBeenCalled();
  });

  it('should render Avatar with custom image', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Avatar id="testing" accessibility="" image={defaultAvatar} />
      </ThemeProvider>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Avatar with border', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Avatar id="testing" accessibility="" showBorder />
      </ThemeProvider>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Avatar with custom border', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Avatar
          id="testing"
          accessibility=""
          showBorder
          borderWidth={1}
          borderColor="#2ecc71"
        />
      </ThemeProvider>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Avatar with custom size', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Avatar id="testing" accessibility="" size={24} />
      </ThemeProvider>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Avatar with custom accessibility label', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Avatar id="testing" accessibility="" accessibilityLabel="testing" />
      </ThemeProvider>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Avatar with custom test id', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Avatar id="testing" accessibility="" testID="testId" />
      </ThemeProvider>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Avatar with all custom props', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Avatar
          id="testing"
          testID="testId"
          accessibility=""
          accessibilityLabel="testing"
          displayCamera
          size={24}
          showBorder
          borderWidth={1}
          borderColor="#2ecc71"
        />
      </ThemeProvider>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
