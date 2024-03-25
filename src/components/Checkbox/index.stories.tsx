import React, { useState } from 'react';
import type { Meta } from '@storybook/react';
import Checkbox from '.';

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
    label: 'Habilitar Recurso',
    labelStyle: { color: '#37ABA2' },
  },
  parameters: {
    notes:
      'Esse componente tem como função auxiliar na manipulação, manutenção e padronização de caixas de seleção dentro de uma aplicação.',
  },
};

export default meta;

export const Default = {};

export const Errors = {
  args: {
    ...meta.args,
    error: 'Não marque esta opção!',
  },
};
