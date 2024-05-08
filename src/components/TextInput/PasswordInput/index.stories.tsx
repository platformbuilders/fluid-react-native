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

export const Bordered: Story = {
  args: {
    status: 'success',
    borderedHeight: 56,
    label: 'Input value here',
    suppressAnimation: false,
    borderedRadius: 6,
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
      fontWeight: 400,
      lineHeight: 24,
    },
    animationValues: {
      upper: {
        top: 4,
        fontSize: 12,
      },
      lower: {
        top: 15,
        fontSize: 16,
      },
    },
  },
};
