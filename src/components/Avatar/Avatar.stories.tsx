import { action } from '@storybook/addon-actions';
import type { Meta } from '@storybook/react';
import Avatar from '.';

const meta: Meta<typeof Avatar> = {
  title: 'Avatar',
  component: Avatar,
  argTypes: {
    image: { control: 'text' },
    name: { control: 'text' },
    onPress: { action: 'clicked' },
    size: { control: 'number' },
    showBorder: { control: 'boolean' },
    onUpload: { action: 'onUpload' },
  },
  args: {
    id: 'avatar-id',
    accessibility: 'Avatar',
    accessibilityLabel: 'Avatar',
    borderColor: '#355deb',
    borderWidth: 4,
    image: { uri: 'https://thispersondoesnotexist.com', cache: 'cacheOnly' },
    onPress: () => {},
    size: 220,
  },
  parameters: {
    notes:
      'Esse componente tem como função auxiliar na manipulação, manutenção e padronização de avatares dentro de uma aplicação.',
  },
} satisfies Meta<typeof Avatar>;

export default meta;

export const Default = {};

export const WithImage = {
  args: {
    image: 'https://example.com/avatar.jpg',
  },
};

export const Uploadable = {
  args: {
    name: 'Jane Doe',
    onUpload: action('onUpload'),
  },
};

export const Pressable = {
  args: {
    name: 'Peter Jones',
    onPress: action('onPress'),
  },
};

export const WithoutBorder = {
  args: {
    name: 'No Border',
    showBorder: false,
  },
};

export const CustomSize = {
  args: {
    name: 'Big Avatar',
    size: 100,
  },
};
