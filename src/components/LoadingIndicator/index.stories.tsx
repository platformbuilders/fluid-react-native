import type { Meta } from '@storybook/react';
import { VARIANT_TYPE } from '../../enums/size.enum';
import LoadingIndicator from '.';

const meta: Meta<typeof LoadingIndicator> = {
  title: 'LoadingIndicator',
  component: LoadingIndicator,
  argTypes: {
    variant: { control: { type: 'select' }, options: VARIANT_TYPE },
  },
  args: {
    accessibility: 'LoadingIndicator',
    contrast: false,
    large: false,
    variant: 'linear',
  },
  parameters: {
    notes:
      'Esse componente tem como função auxiliar na manipulação, manutenção e padronização de indicadores de carregamento dentro de uma aplicação.',
  },
};

export default meta;

export const Default = {};
