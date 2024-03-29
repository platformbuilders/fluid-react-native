import React from 'react';
import { fireEvent, render } from 'react-native-testing-library';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';
import UploadPhoto from '..';
import theme from '../../../theme';

describe('<UploadPhoto />', () => {
  it('should render UploadPhoto', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <UploadPhoto id="testing" accessibility="" />
      </ThemeProvider>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  xit('should render UploadPhoto with camera', () => {
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

  xit('should render UploadPhoto with all custom props', () => {
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

  it('should call onUpload when an image is selected', () => {
    const onClearUpload = jest.fn();
    const onUpload = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <UploadPhoto
          id="testing"
          accessibility=""
          onUpload={onUpload}
          onClearUpload={onClearUpload}
        />
      </ThemeProvider>,
    );

    const component = getByTestId('testing');
    fireEvent(component, 'onUpload', {
      didCancel: false,
      assets: [{ uri: 'image_uri' }],
    });

    expect(onUpload).toHaveBeenCalledWith({
      didCancel: false,
      assets: [{ uri: 'image_uri' }],
    });

    fireEvent(component, 'onClearUpload');

    expect(onClearUpload).toHaveBeenCalled();
  });
});
