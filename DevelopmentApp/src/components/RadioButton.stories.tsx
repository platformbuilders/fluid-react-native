import React from 'react';
import type {Meta} from '@storybook/react';
import RadioButton from '@platformbuilders/fluid-react-native/dist/components/RadioButton';
import {useState} from 'react';

const RenderRadioButton = ({...args}) => {
  const [value, setValue] = useState(false);
  return (
    <RadioButton
      {...args}
      accessibility="Habilitar Recurso"
      checked={value}
      onPress={() => setValue(!value)}
    />
  );
};

const meta: Meta<typeof RadioButton> = {
  title: 'RadioButton',
  component: RenderRadioButton,
  args: {
    accessibility: 'Habilitar Recurso',
    checkedRadioButtonColor: '#06a244',
    internalSize: 20,
    label: 'Habilitar Recurso',
    id: 'radio',
    labelStyle: {color: '#193f5e'},
    radioButtonColor: '#193f5e',
    size: 25,
  },
  parameters: {
    notes:
      'Este componente é utilizado para renderizar um input de radio button.',
  },
};

export default meta;

export const Default = {};
