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

export const Bordered: Story = {
  args: {
    borderedHeight: 56,
    label: 'Label',
    suppressAnimation: false,
    borderedRadius: 4,
    borderedWidth: 2,
    borderedColor: '#D3D7D9',
    withBottomline: false,
    fixedLabelVariant: 'animated',
    focusBorderedColor: '#0068FF',
    textStyle: {
      fontSize: 16,
    },
    labelStyle: {
      color: '#101416',
      fontWeight: 600,
      lineHeight: 24,
    },
    iconName: 'flag',
    iconColor: '#101416',
    iconHitSlop: {
      left: 25,
      right: 25,
      top: 25,
      bottom: 25,
    },
    animationValues: {
      upper: {
        top: 6,
        fontSize: 12,
      },
      lower: {
        top: 15,
        fontSize: 16,
      },
    },
  },
};
