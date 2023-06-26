/* eslint-disable sonarjs/no-duplicate-string */
import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';
import { fireEvent, render } from '@testing-library/react-native';
import Avatar from '..';
import { ImagePlaceholder as defaultAvatar } from '../../../assets/images';
import theme from '../../../theme';

const defaultAvatarUrl = 'https://avatars.githubusercontent.com/u/4726921?v=4';

describe('<Avatar />', () => {
  it('should render Avatar', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Avatar id="testing" accessibility="" />
      </ThemeProvider>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Avatar with external image', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Avatar
          id="testing"
          accessibility=""
          image={{ uri: defaultAvatarUrl }}
        />
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

  it('should render Avatar with monogram', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Avatar
          id="testing"
          accessibility=""
          testID="testId"
          name="Builders Test"
        />
      </ThemeProvider>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Avatar with styled monogram', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Avatar
          id="testing"
          accessibility=""
          testID="testId"
          name="Builders Test"
          monogramStyle={{ backgroundColor: '#2ecc71' }}
        />
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
          size={24}
          showBorder
          borderWidth={1}
          borderColor="#2ecc71"
        />
      </ThemeProvider>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Image component', () => {
    const { getByTestId } = render(
      <Avatar id="avatar-test" accessibility="avatar-test" />,
    );

    const image = getByTestId('avatar-test'); // Substitua 'image-test-id' pelo testID real do componente Image
    expect(image).toBeTruthy();
  });

  it('should render UploadIconWrapper when no image is visible and a name is provided', () => {
    const { getByTestId } = render(
      <Avatar
        id="avatar-test"
        testID="avatar-testID"
        accessibility="avatar-test"
        name="Test Name"
      />,
    );

    const uploadIconWrapper = getByTestId('avatar-testID');
    expect(uploadIconWrapper).toBeTruthy();
  });
});
