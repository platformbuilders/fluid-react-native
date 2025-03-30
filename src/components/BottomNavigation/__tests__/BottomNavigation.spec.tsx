import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';
import BottomNavigation from '..';
import theme from '../../../theme';
import { render, fireEvent } from '@testing-library/react-native';

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

  it('should render BottomNavigation component with an inactive route', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <BottomNavigation currentRoute="OtherRoute" fields={fields} />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should call onPress when an item is pressed', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <BottomNavigation currentRoute="Home" fields={fields} />
      </ThemeProvider>,
    );

    const navField = getByTestId('bottom_nav_item_Home');
    fireEvent.press(navField);

    expect(onPressEvent).toHaveBeenCalledTimes(1);
  });

  it('should generate correct accessibility props for active and inactive items', () => {
    const fieldsWithMultipleItems = [
      {
        routeName: 'Home',
        onPress: jest.fn(),
        iconName: 'home',
        label: 'Início',
      },
      {
        routeName: 'Profile',
        onPress: jest.fn(),
        iconName: 'user',
        label: 'Perfil',
      },
    ];

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <BottomNavigation
          currentRoute="Home"
          fields={fieldsWithMultipleItems}
        />
      </ThemeProvider>,
    );

    const homeItem = getByTestId('bottom_nav_item_Home');
    const profileItem = getByTestId('bottom_nav_item_Profile');

    // Verificar acessibilidade do item ativo (Home)
    expect(homeItem.props.accessibilityLabel).toBe('Início');
    expect(homeItem.props.accessibilityHint).toBe('Ir para Início, item selecionado');

    // Verificar acessibilidade do item inativo (Profile)
    expect(profileItem.props.accessibilityLabel).toBe('Perfil');
    expect(profileItem.props.accessibilityHint).toBe('Ir para Perfil');
  });
});
