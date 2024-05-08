import React from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import PasswordInput from '.';

const Render = ({ ...args }) => {
  return (
    <View style={{ width: 320 }}>
      <PasswordInput
        {...args}
        id="Password"
        accessibility="Este componente PasswordInput"
      />
    </View>
  );
};

const meta: Meta<typeof PasswordInput> = {
  title: 'PasswordInput',
  component: Render,
  args: {
    id: 'PasswordInput',
    label: 'Default',
    value: '',
  },
  parameters: {
    notes: 'Este componente é utilizado para renderizar um PasswordInput.',
  },
};

export default meta;
type Story = StoryObj<typeof PasswordInput>;

export const Default: Story = {
  args: {
    suppressAnimation: false,
  },
};

export const Floating: Story = {
  args: {
    isFloating: true,
  },
};
