import React from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import TextInputFloating from '.';

const spacing = { marginTop: 16 };

const Render = ({ ...args }) => {
  return (
    <View style={{ width: 320 }}>
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

const meta: Meta<typeof TextInputFloating> = {
  title: 'TextInputFloating',
  component: Render,
  args: {
    id: 'textInput',
    label: 'Input value here',
    value: '',
    iconName: 'flag',
  },
  parameters: {
    notes: 'Este componente é utilizado para renderizar um TextInputFloating.',
  },
};

export default meta;
type Story = StoryObj<typeof TextInputFloating>;

export const Default: Story = {
  args: {
    suppressAnimation: false,
  },
};
