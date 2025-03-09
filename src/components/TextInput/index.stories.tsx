import React from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import TextInputFloating from './Floating.style';
import TextInput from '.';

const spacing = { marginTop: 16 };

const Render = ({ ...args }) => {
  return (
    <View style={{ width: 320 }}>
      <TextInputFloating
        {...args}
        id="textInput"
        accessibility="Este componente TextInputFloating"
        style={spacing}
      />
      <TextInputFloating
        {...args}
        id="textInput"
        accessibility="Este componente TextInputFloating"
        style={spacing}
      />
      <TextInputFloating
        {...args}
        id="textInput"
        accessibility="Este componente TextInputFloating"
        style={spacing}
        status="error"
      />
      <TextInputFloating
        {...args}
        id="textInput"
        accessibility="Este componente TextInputFloating"
        style={spacing}
        status="success"
      />
      <TextInputFloating
        {...args}
        id="textInput"
        accessibility="Este componente TextInputFloating"
        style={spacing}
        status="selected"
      />
      <TextInputFloating
        {...args}
        id="textInput"
        accessibility="Este componente TextInputFloating"
        style={spacing}
        status="focus"
      />
    </View>
  );
};

const meta: Meta<typeof TextInput> = {
  title: 'TextInput',
  component: Render,
  args: {
    id: 'textInput',
    label: 'Default',
    value: '',
  },
  parameters: {
    notes: 'Este componente é utilizado para renderizar um TextInput.',
  },
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Floating: Story = {
  args: {
    id: 'textInput',
    label: 'Input value here',
    iconName: 'flag',
    isFloating: true,
  },
  parameters: {
    notes: 'Este componente é utilizado para renderizar um TextInputFloating.',
  },
};

export const AccessibleTextInput: Story = {
  args: {
    id: 'email-input',
    label: 'Email',
    placeholder: 'Digite seu email',
    accessibilityLabel: 'Campo de entrada para email',
    accessibilityHint: 'Digite seu endereço de email para contato',
    keyboardType: 'email-address',
    autoCapitalize: 'none',
  },
  parameters: {
    notes: `
      ## Acessibilidade em TextInputs

      TextInputs precisam de cuidados especiais para acessibilidade:

      - **accessibilityLabel**: Descrição clara do campo (não apenas repetir o label)
      - **accessibilityHint**: Instrução ou contexto adicional para o usuário
      - **accessibilityRole**: "text" para indicar que é um campo de texto
      - **errorMessageAccessibilityLabel**: Mensagem de erro para leitores de tela
      - **keyboardType**: Apropriado para o tipo de entrada (email, number, etc.)
      
      ### Estados de erro acessíveis:
      
      \`\`\`jsx
      <TextInput
        label="Email"
        error="Email inválido"
        accessibilityLabel="Campo de email com erro"
        accessibilityState={{ invalid: true }}
      />
      \`\`\`
    `,
  },
};

export const AccessibleWithError: Story = {
  args: {
    id: 'password-input',
    label: 'Senha',
    placeholder: 'Digite sua senha',
    accessibilityLabel: 'Campo de senha com erro',
    accessibilityHint: 'A senha deve ter no mínimo 8 caracteres',
    error: 'Senha muito curta',
    status: 'error',
    secureTextEntry: true,
  },
  parameters: {
    notes: `
      Os campos com erro devem:
      
      1. Usar status="error" para estilização visual
      2. Fornecer uma mensagem de erro clara
      3. Definir accessibilityState={{ invalid: true }}
      4. Certificar-se que a mensagem de erro tem um bom contraste
    `,
  },
};
