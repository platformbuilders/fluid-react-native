import React, { useState } from 'react';
import type { Meta } from '@storybook/react';
import PinInput from '.';

const RenderPinInput = ({ ...args }) => {
  const [value, setValue] = useState('');

  const onChangeText = (text: string) => {
    setValue(text);
  };
  return <PinInput {...args} value={value} onChangeText={onChangeText} />;
};

const meta: Meta<typeof PinInput> = {
  title: 'PinInput',
  component: RenderPinInput,
  args: {
    accessibility: 'Digite seu pin',
    animated: true,
    autoFocus: true,
    borderedLabel: 'Label fica aqui',
    caption: 'Caption fica aqui',
    cellSize: 40,
    cellSpacing: 10,
    cellStyle: { backgroundColor: '#193f5e', borderRadius: 10 },
    cellStyleFocused: { backgroundColor: '#dbd6f3', borderRadius: 10 },
    centered: true,
    codeLength: 4,
    contrast: true,
    editable: true,
    error: 'Mensagem de erro aqui.',
    fixedLabelVariant: 'md',
    id: 'pin',
    inputProps: { keyboardType: 'numeric' },
    keyboardAppearance: 'dark',
    keyboardType: 'numeric',
    labelStyle: { color: '#193f5e' },
    onBackspace: () => console.log('Backspace'),
    onFulfill: (code: string) => console.log(code),
    placeholder: '0',
  },
  parameters: {
    notes: 'Este componente é utilizado para renderizar um input de pin.',
  },
};

export default meta;

export const Default = {};

export const Password: Meta<typeof PinInput> = {
  args: {
    ...meta.args,
    inputProps: { keyboardType: 'numeric' },
    keyboardType: 'numeric',
    password: true,
    iconSize: 24,
  },
};
