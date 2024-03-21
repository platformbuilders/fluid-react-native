import type { Meta } from '@storybook/react';
import { IconsFonts } from '../../enums/size.enum';
import Icon from '.';

const meta: Meta<typeof Icon> = {
  title: 'Icon',
  component: Icon,
  argTypes: {
    iconSets: { control: { type: 'select' }, options: IconsFonts },
  },
  args: {
    name: 'arrow-left',
    iconSets: 'font-awesome',
    size: 24,
    color: '#984383',
    isEmoji: false,
    accessibility: 'Ícone',
    accessibilityLabel: 'Ícone de voltar',
    onPress: () => {},
    backgroundColor: '#fff',
    borderColor: '#fff',
    id: 'icon',
    style: {},
    testID: 'icon',
    touchable: true,
  },
  parameters: {
    notes:
      'Todos os icones disponíveis podem ser encontrados em: https://oblador.github.io/react-native-vector-icons/',
  },
};

export default meta;

export const Default = {};
