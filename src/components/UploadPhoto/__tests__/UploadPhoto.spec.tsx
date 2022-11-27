import React from 'react';
import { fireEvent, render } from 'react-native-testing-library';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';
import UploadPhoto from '..';
import { ImageAvatarPlaceholder as defaultImage } from '../../../assets/images';
import { theme } from '../../../test/helpers';

describe('<UploadPhoto />', () => {
  it('should render UploadPhoto', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <UploadPhoto id="testing" accessibility="" />
      </ThemeProvider>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render UploadPhoto with camera', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <UploadPhoto id="testing" accessibility="" displayCamera />
      </ThemeProvider>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should trigger onPress function', () => {
    const onPressEvent = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <UploadPhoto id="testing" accessibility="" onPress={onPressEvent} />
      </ThemeProvider>,
    );

    const component = getByTestId('testing');

    fireEvent.press(component);

    expect(onPressEvent).toHaveBeenCalled();
  });

  it('should render UploadPhoto with custom image', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <UploadPhoto id="testing" accessibility="" image={defaultImage} />
      </ThemeProvider>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render UploadPhoto with custom accessibility label', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <UploadPhoto
          id="testing"
          accessibility=""
          accessibilityLabel="testing"
        />
      </ThemeProvider>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render UploadPhoto with custom test id', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <UploadPhoto id="testing" accessibility="" testID="testId" />
      </ThemeProvider>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render UploadPhoto with all custom props', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <UploadPhoto
          id="testing"
          testID="testId"
          accessibility=""
          accessibilityLabel="testing"
          displayCamera
        />
      </ThemeProvider>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});