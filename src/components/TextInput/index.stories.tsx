import React from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import TextInputFloating from './Floating.style';
import TextInput from '.';

const spacing = { marginTop: 16 };

const Render = ({ ...args }) => {
  return (
    <View style={{ width: 420 }}>
      <TextInputFloating
        {...args}
        id="textInput"
        accessibility="Este componente TextInputFloating"
        style={spacing}
      />
      <TextInputFloating
        {...args}
        id="textInput"
        accessibility="Este componente TextInputFloating"
        style={spacing}
      />
      <TextInputFloating
        {...args}
        id="textInput"
        accessibility="Este componente TextInputFloating"
        style={spacing}
        status="error"
      />
      <TextInputFloating
        {...args}
        id="textInput"
        accessibility="Este componente TextInputFloating"
        style={spacing}
        status="success"
      />
      <TextInputFloating
        {...args}
        id="textInput"
        accessibility="Este componente TextInputFloating"
        style={spacing}
        status="selected"
      />
      <TextInputFloating
        {...args}
        id="textInput"
        accessibility="Este componente TextInputFloating"
        style={spacing}
        status="focus"
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

export const Floating: Story = {
  args: {
    id: 'textInput',
    label: 'Input value here',
    iconName: 'flag',
    isFloating: true,
  },
  parameters: {
    notes: 'Este componente é utilizado para renderizar um TextInputFloating.',
  },
};
