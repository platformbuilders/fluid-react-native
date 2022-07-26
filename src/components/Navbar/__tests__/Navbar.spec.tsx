import React from 'react';
import { fireEvent, render } from 'react-native-testing-library';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';
import Navbar from '..';
import { theme } from '../../../test/helpers';

const onPressEvent = jest.fn();

const fields = [
  {
    routeName: 'Home',
    onPress: onPressEvent,
    iconName: 'flag',
    label: 'Home',
  },
];

describe('<Navbar />', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should render navbar component', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Navbar currentRoute="Home" fields={fields} />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should trigger onPress function when nav field is pressed', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Navbar currentRoute="Home" fields={fields} />
      </ThemeProvider>,
    );

    const component = getByTestId('Home');

    fireEvent.press(component);

    expect(onPressEvent).toHaveBeenCalled();
  });

  it('should render navbar component with custom color', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Navbar
          currentRoute="Home"
          fields={fields}
          activeFieldColor={'#000000'}
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render navbar component with safe bottom area', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Navbar currentRoute="Home" fields={fields} activateSafeBottomArea />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
