import React, { useState } from 'react';
import { View } from 'react-native';
import Toggle from '@platformbuilders/fluid-react-native/dist/components/Toggle';
import type { Meta } from '@storybook/react';

const Render = ({ ...args }) => {
  const [value, setValue] = useState(false);
  return (
    <View>
      <Toggle {...args} value={value} onValueChange={setValue} />
    </View>
  );
};

const meta: Meta<typeof Toggle> = {
  title: 'Toggle',
  component: Render,
  args: {
    accessibility: 'Habilitar Recurso',
    id: 'toggle',
    isDisabled: false,
    onValueChange: (value: boolean) => console.log(value),
    thumbColor: {
      falseColor: '#df5409',
      trueColor: '#47dd36',
    },
    trackColor: {
      falseColor: '#c7e2f8',
      trueColor: '#c7e2f8',
    },
  },
  parameters: {
    notes: 'Este componente é utilizado para renderizar um Toggle.',
  },
};

export default meta;

export const Default = {};
