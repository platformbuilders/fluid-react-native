import type { Meta } from '@storybook/react';
import LabelDivider from '.';

const meta: Meta<typeof LabelDivider> = {
  title: 'LabelDivider',
  component: LabelDivider,
  args: {
    marginBottom: 10,
    marginTop: 10,
    text: 'Texto de exemplo',
  },
  parameters: {
    notes:
      'Componente para renderização de um texto com uma linha horizontal embaixo.',
  },
};

export default meta;

export const Default = {};
