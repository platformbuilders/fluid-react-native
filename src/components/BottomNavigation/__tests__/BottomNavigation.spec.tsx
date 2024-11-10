import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';
import BottomNavigation from '..';
import theme from '../../../theme';

const onPressEvent = jest.fn();

const fields = [
  {
    routeName: 'Home',
    onPress: onPressEvent,
    iconName: 'flag',
    label: 'Home',
  },
];

describe('<BottomNavigation />', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should render BottomNavigation component', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <BottomNavigation currentRoute="Home" fields={fields} />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render BottomNavigation component with custom color', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <BottomNavigation
          currentRoute="Home"
          fields={fields}
          activeFieldColor={'#000000'}
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
