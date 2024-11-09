import type { Meta } from '@storybook/react';
import BottomNavigation from '.';

const meta: Meta<typeof BottomNavigation> = {
  title: 'BottomNavigation',
  component: BottomNavigation,
  argTypes: {},
  args: {
    activeFieldColor: '#fff',
    currentRoute: 'Home',
    fields: [
      {
        label: 'Home',
        iconName: 'home',
        onPress: () => console.log('Home'),
        routeName: 'Home',
      },
      {
        label: 'Login',
        iconName: 'user',
        onPress: () => console.log('Login'),
        routeName: 'Login',
      },
    ],
  },
  parameters: {
    notes: 'Este componente é utilizado para renderizar a barra de navegação.',
  },
};

export default meta;

export const Default = {};
