import React from 'react';
import { Text } from 'react-native';
import type { Meta } from '@storybook/react';
import Shadow from '.';

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
