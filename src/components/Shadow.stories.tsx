import React from 'react';
import { Text } from 'react-native';
import Shadow from '@platformbuilders/fluid-react-native/dist/components/Shadow';
import type { Meta } from '@storybook/react';

const meta: Meta<typeof Shadow> = {
  title: 'Shadow',
  component: Shadow,
  args: {
    hasShadow: true,
    children: <Text>Shadow</Text>,
  },
  parameters: {
    notes: 'Este componente é utilizado para renderizar um shadow.',
  },
};

export default meta;

export const Default = {};
