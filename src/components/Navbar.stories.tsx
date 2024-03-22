import Navbar from '@platformbuilders/fluid-react-native/dist/components/Navbar';
import type { Meta } from '@storybook/react';

const meta: Meta<typeof Navbar> = {
  title: 'Navbar',
  component: Navbar,
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
