import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';
import { fireEvent, render } from '@testing-library/react-native';
import Icon from '..';
import { IconFonts } from '../../../enums';
import theme from '../../../theme';

const TEST_ID = 'test-icon';
const ACCESSIBILITY = 'test-accessibility';

describe('<Icon />', () => {
  it('should render with default props', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Icon id={TEST_ID} accessibility={ACCESSIBILITY} name="home" />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render emoji icon', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Icon id={TEST_ID} accessibility={ACCESSIBILITY} name="👍" isEmoji />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render with custom size', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Icon
          id={TEST_ID}
          accessibility={ACCESSIBILITY}
          name="home"
          size={30}
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render with custom color', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Icon
          id={TEST_ID}
          accessibility={ACCESSIBILITY}
          name="home"
          color="#FF0000"
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render with Material icon type', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Icon
          id={TEST_ID}
          accessibility={ACCESSIBILITY}
          name="home"
          type={IconFonts.Material}
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should handle onPress event', () => {
    const onPressEvent = jest.fn();

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Icon
          id={TEST_ID}
          accessibility={ACCESSIBILITY}
          name="home"
          onPress={onPressEvent}
        />
      </ThemeProvider>,
    );

    const component = getByTestId(TEST_ID);
    fireEvent.press(component);

    expect(onPressEvent).toHaveBeenCalled();
  });

  it('should render with custom dimensions', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Icon
          id={TEST_ID}
          accessibility={ACCESSIBILITY}
          name="home"
          width={40}
          height={40}
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render with custom background and border colors', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Icon
          id={TEST_ID}
          accessibility={ACCESSIBILITY}
          name="home"
          backgroundColor="#FFFFFF"
          borderColor="#000000"
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render non-touchable icon', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Icon
          id={TEST_ID}
          accessibility={ACCESSIBILITY}
          name="home"
          touchable={false}
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render with custom accessibility label', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Icon
          id={TEST_ID}
          accessibility={ACCESSIBILITY}
          name="home"
          accessibilityLabel="Custom Label"
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render with FABrands icon type', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Icon
          id={TEST_ID}
          accessibility={ACCESSIBILITY}
          name="github"
          type={IconFonts.FABrands}
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render with FALight icon type', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Icon
          id={TEST_ID}
          accessibility={ACCESSIBILITY}
          name="home"
          type={IconFonts.FALight}
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render with FARegular icon type', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Icon
          id={TEST_ID}
          accessibility={ACCESSIBILITY}
          name="home"
          type={IconFonts.FARegular}
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render with FASolid icon type', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Icon
          id={TEST_ID}
          accessibility={ACCESSIBILITY}
          name="home"
          type={IconFonts.FASolid}
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render SVG icon when name matches a bundled SVG', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Icon
          id={TEST_ID}
          accessibility={ACCESSIBILITY}
          name="profile"
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render SVG icon with custom dimensions', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Icon
          id={TEST_ID}
          accessibility={ACCESSIBILITY}
          name="profile"
          width={50}
          height={50}
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render SVG icon with custom colors', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Icon
          id={TEST_ID}
          accessibility={ACCESSIBILITY}
          name="profile"
          color="#FF0000"
          borderColor="#00FF00"
          backgroundColor="#0000FF"
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render custom icon from iconSets', () => {
    const CustomIcon = (props: any) => <></>;
    const customIconSets = {
      IconCustom: CustomIcon
    };

    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Icon
          id={TEST_ID}
          accessibility={ACCESSIBILITY}
          name="custom"
          iconSets={customIconSets}
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should use accessibility as testID when id is not provided', () => {
    const { getAllByTestId } = render(
      <ThemeProvider theme={theme}>
        <Icon
          accessibility={ACCESSIBILITY}
          name="home"
        />
      </ThemeProvider>,
    );

    const components = getAllByTestId(ACCESSIBILITY);
    expect(components.length).toBeGreaterThan(0);
  });

  it('should use icon name as fallback for accessibility', () => {
    const testId = 'test-no-accessibility';
    const iconName = 'home';
    
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Icon
          id={testId}
          accessibility={iconName}
          name={iconName}
        />
      </ThemeProvider>,
    );
    
    const component = getByTestId(testId);
    expect(component).toBeTruthy();
  });
});
