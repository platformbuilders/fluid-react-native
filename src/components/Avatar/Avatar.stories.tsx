import type { Meta } from '@storybook/react';
import Avatar from '.';

const meta: Meta<typeof Avatar> = {
  title: 'Avatar',
  component: Avatar,
  argTypes: { onPress: { action: 'clicked' } },
  args: {
    id: 'avatar-id',
    accessibility: 'Avatar',
    accessibilityLabel: 'Avatar',
    borderColor: '#355deb',
    borderWidth: 4,
    image: { uri: 'https://thispersondoesnotexist.com', cache: 'cacheOnly' },
    onPress: () => {},
    size: 220,
    testID: 'avatar-test-id',
  },
  parameters: {
    notes:
      'Esse componente tem como função auxiliar na manipulação, manutenção e padronização de avatares dentro de uma aplicação.',
  },
};

export default meta;

export const Default = {};
