import type { Meta } from '@storybook/react';
import Image from '.';

const meta: Meta<typeof Image> = {
  title: 'Image',
  component: Image,
  args: {
    source: { uri: 'https://thispersondoesnotexist.com', cache: 'cacheOnly' },
    accessibility: 'Image',
    animationColor: '#355deb',
    animationContainerColor: '#355deb',
    containerStyle: { width: 220, height: 220 },
    displayPlaceholder: true,
    id: 'image-id',
    resizeMode: 'cover',
    style: { width: 220, height: 220 },
    testID: 'image-test-id',
  },
  parameters: {
    notes:
      'Esse componente tem como função auxiliar na manipulação, manutenção e padronização de imagens dentro de uma aplicação.',
  },
};

export default meta;

export const Default = {};
