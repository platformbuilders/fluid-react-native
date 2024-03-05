import type {Meta} from '@storybook/react';
import FAB from '@platformbuilders/fluid-react-native/dist/components/FAB';

const meta: Meta<typeof FAB> = {
  title: 'FAB',
  component: FAB,
  args: {
    accessibility: 'Botão de ação flutuante',
    color: '#362',
    hasShadow: true,
    iconColor: '#fff',
    iconName: 'plus',
    iconSize: 24,
    id: 'fab-id',
    onPress: () => {},
    size: 56,
    title: 'Add',
  },
  parameters: {
    notes:
      'Esse componente tem como função auxiliar na padronização de botões circulares com icones',
  },
};

export default meta;

export const Default = {};
