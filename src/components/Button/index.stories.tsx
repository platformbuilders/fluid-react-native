import type { Meta } from '@storybook/react';
import { VARIANT_SIZE } from '../../enums/size.enum';
import Button from '.';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  argTypes: {
    onPress: { action: 'clicked' },
    typographyVariant: { control: { type: 'select' }, options: VARIANT_SIZE },
    variant: {
      control: { type: 'select' },
      options: ['filled', 'ghost', 'tint', 'outline', 'flat'],
    },
    colorVariant: {
      control: { type: 'select' },
      options: [
        'primary',
        'secondary',
        'accent',
        'danger',
        'success',
        'warning',
        'info',
      ],
    },
  },
  args: {
    variant: 'filled',
    colorVariant: 'primary',
    accessibility: 'Button',
    accessibilityLabel: 'Button',
    disabled: false,
    onPress: () => {},
    testID: 'button-test-id',
    children: 'Ver Usuário',
    flat: false,
    id: 'button-id',
    loading: false,
    maxWidth: '250px',
    minWidth: '250px',
    rounded: false,
    leftIconName: '',
    rightIconName: '',
    typographyVariant: 'lg',
  },
  parameters: {
    notes:
      'Esse componente tem como função auxiliar na manipulação, manutenção e padronização de botões dentro de uma aplicação.',
  },
};

export default meta;

export const Default = {};

export const IconRight = {
  args: {
    ...meta.args,
    children: 'Adicionar Usuário',
    rightIconName: 'user-plus',
  },
};

export const IconLeft = {
  args: {
    ...meta.args,
    children: 'Remover Usuário',
    leftIconName: 'user-times',
  },
};
