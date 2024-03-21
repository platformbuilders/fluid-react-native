import type { Meta } from '@storybook/react';
import DisplayVersion from '.';

const meta: Meta<typeof DisplayVersion> = {
  title: 'DisplayVersion',
  component: DisplayVersion,
  args: {
    appVersion: '1.4.5',
    buildVersion: '9090',
  },
  parameters: {
    notes:
      'Esse componente tem como função auxiliar na padronização de exibição da versão do aplicativo.',
  },
};

export default meta;

export const Default = {};
