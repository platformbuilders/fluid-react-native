import React from 'react';
import { Text } from 'react-native';
import If from '@platformbuilders/fluid-react-native/dist/components/If';
import type { Meta } from '@storybook/react';

const meta: Meta<typeof If> = {
  title: 'If',
  component: If,
  argTypes: {
    condition: { control: { type: 'boolean' } },
  },
  args: {
    condition: true,
    children: <Text>Texto de exemplo</Text>,
  },
  parameters: {
    notes: 'Componente para renderização condicional de elementos.',
  },
};

export default meta;

export const Default = {};
