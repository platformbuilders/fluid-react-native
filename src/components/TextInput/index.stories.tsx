import React from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import TextInput from '.';

const Render = ({ ...args }) => {
  return (
    <View style={{ width: 320 }}>
      <TextInput
        {...args}
        id="textInput"
        accessibility="Este componente TextInput"
      />
    </View>
  );
};

const meta: Meta<typeof TextInput> = {
  title: 'TextInput',
  component: Render,
  args: {
    id: 'textInput',
    label: 'Default',
    value: '',
  },
  parameters: {
    notes: 'Este componente é utilizado para renderizar um TextInput.',
  },
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  args: {
    suppressAnimation: false,
  },
};
