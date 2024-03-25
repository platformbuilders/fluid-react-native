import React from 'react';
import { Text } from 'react-native';
import Header from '@platformbuilders/fluid-react-native/dist/components/Header';
import type { Meta } from '@storybook/react';

const meta: Meta<typeof Header> = {
  title: 'Header',
  component: Header,
  args: {
    children: <Text> Conteúdo </Text>,
  },
};

export default meta;

export const Default = {
  args: {
    showLeftIcon: false,
    showRightIcon: false,
  },
};

export const HeaderLeft = {
  args: {
    ...meta.args,
    accessibilityLeftIcon: 'Ícone de voltar',
    onPressLeftIcon: () => {},
    showLeftIcon: true,
    showRightIcon: false,
    leftIconName: 'arrow-left',
  },
};

export const HeaderRight = {
  args: {
    ...meta.args,
    accessibilityRightIcon: 'Ícone de avançar',
    onPressRightIcon: () => {},
    showRightIcon: true,
    showLeftIcon: false,
    rightIconName: 'arrow-right',
  },
};
