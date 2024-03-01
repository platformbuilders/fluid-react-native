import type {Meta} from '@storybook/react';
import Button from '@platformbuilders/fluid-react-native/dist/components/Button';
import {VARIANT_SIZE} from '../utils/enums/size.enum';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  argTypes: {
    onPress: {action: 'clicked'},
    typographyVariant: {control: {type: 'select'}, options: VARIANT_SIZE},
  },
  args: {
    accessibility: 'Button',
    accessibilityLabel: 'Button',
    disabled: false,
    onPress: () => {},
    testID: 'button-test-id',
    children: 'Ver Usuário',
    flat: false,
    hasBorder: false,
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
