import React, { useState } from 'react';
import Checkbox from '@platformbuilders/fluid-react-native/dist/components/Checkbox';
import type { Meta } from '@storybook/react';

const RenderChecked = ({ ...args }) => {
  const [checked, setChecked] = useState<boolean>();
  return (
    <Checkbox
      {...args}
      checked={checked}
      onPress={() => setChecked(!checked)}
    />
  );
};

const meta: Meta<typeof Checkbox> = {
  title: 'Checkbox',
  component: RenderChecked,
  argTypes: {
    onPress: { action: 'clicked' },
  },
  args: {
    accessibility: 'Caixa de seleção',
    id: 'checkbox-id',
    label: 'label',
    labelBefore: 'Habilitar Recurso',
    labelStyle: { color: '#362' },
    error: 'Não marque esta opção!',
  },
  parameters: {
    notes:
      'Esse componente tem como função auxiliar na manipulação, manutenção e padronização de caixas de seleção dentro de uma aplicação.',
  },
};

export default meta;

export const Default = {};
