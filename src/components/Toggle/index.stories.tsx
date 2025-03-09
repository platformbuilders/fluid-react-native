import React, { useState } from 'react';
import { View } from 'react-native';
import type { Meta } from '@storybook/react';
import Toggle from '.';

const Render = ({ ...args }) => {
  const [value, setValue] = useState(false);
  return (
    <View>
      <Toggle {...args} value={value} onValueChange={setValue} />
    </View>
  );
};

const meta: Meta<typeof Toggle> = {
  title: 'Toggle',
  component: Render,
  args: {
    accessibility: 'Habilitar Recurso',
    id: 'toggle',
    isDisabled: false,
    onValueChange: (value: boolean) => console.log(value),
    thumbColor: {
      falseColor: '#df5409',
      trueColor: '#47dd36',
    },
    trackColor: {
      falseColor: '#c7e2f8',
      trueColor: '#c7e2f8',
    },
  },
  parameters: {
    notes: 'Este componente é utilizado para renderizar um Toggle.',
  },
};

export default meta;

export const Default = {};

export const AccessibleToggle = {
  args: {
    accessibility: 'Modo escuro',
    accessibilityLabel: 'Botão para ativar o modo escuro',
    accessibilityHint: 'Alterna o aplicativo entre o tema claro e escuro',
  },
  parameters: {
    notes: `
      ## Acessibilidade em Toggles

      Toggles precisam comunicar claramente seu propósito e estado para usuários de tecnologias assistivas:

      - **accessibilityLabel**: Descrição clara da função (ex: "Modo escuro")
      - **accessibilityRole**: "switch" para identificação correta do elemento
      - **accessibilityState**: Contém { checked: boolean } para indicar estado
      - **accessibilityHint**: Explica o resultado da alteração

      ### Exemplo de uso:

      \`\`\`jsx
      <Toggle
        value={darkMode}
        accessibilityLabel="Modo escuro"
        accessibilityHint="Alterna o aplicativo entre o tema claro e escuro"
        onValueChange={toggleDarkMode}
      />
      \`\`\`
    `,
  },
};
