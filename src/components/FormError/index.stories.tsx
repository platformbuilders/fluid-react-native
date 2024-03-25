import type { Meta } from '@storybook/react';
import FormError from '.';

const meta: Meta<typeof FormError> = {
  title: 'FormError',
  component: FormError,
  args: {
    accessibility: 'Texto de erro',
    centered: false,
    id: 'form-error-id',
    error: 'Mensagem de erro',
    large: false,
    style: {},
  },
  parameters: {
    notes:
      'Esse componente tem como função auxiliar na padronização de exibição de erros.',
  },
};

export default meta;

export const Default = {};
