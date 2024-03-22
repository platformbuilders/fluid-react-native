import Accordion from '@platformbuilders/fluid-react-native/dist/components/Accordion';
import type { Meta } from '@storybook/react';

const accordionObject = [
  {
    title: 'Alimentos',
    content: 'Alface',
  },
  {
    title: 'Bebidas',
    content: 'Cerveja',
  },
  {
    title: 'Eletrônicos',
    content: 'Televisão',
  },
  {
    title: 'Material de limpeza',
    content: '***Alvejante***',
  },
];

const meta: Meta<typeof Accordion> = {
  title: 'Accordion',
  component: Accordion,
  args: {
    data: accordionObject,
    activeIconColor: '#355deb',
    hasIcon: true,
    iconDownName: 'chevron-down',
    iconUpName: 'chevron-up',
    inactiveIconColor: '#000',
    isMarkdown: true,
    onChange: () => {},
  },
  parameters: {
    notes:
      'Esse componente tem como função auxiliar na manipulação, manutenção e padronização de acordeões dentro de uma aplicação.',
  },
};

export default meta;

export const Default = {};
