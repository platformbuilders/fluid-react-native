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

export const AccessibleButton = {
  args: {
    ...meta.args,
    children: 'Botão Acessível',
    accessibilityLabel: 'Botão com recursos completos de acessibilidade',
    accessibilityHint: 'Ativa a funcionalidade principal',
    variant: 'filled',
    colorVariant: 'primary',
  },
  parameters: {
    notes: `
      ## Acessibilidade
      
      Este botão implementa as seguintes características de acessibilidade:
      
      - **accessibilityLabel**: Descrição que será lida por leitores de tela
      - **accessibilityRole**: Define o papel como "button" para leitores de tela
      - **accessibilityState**: Informa estados como disabled e busy (quando loading)
      - **accessibilityHint**: Explica o que acontecerá ao ativar o botão
      - **hitSlop**: Área de toque aumentada para facilitar o uso
      
      ### Exemplo de uso:
      
      \`\`\`jsx
      <Button
        accessibilityLabel="Finalizar compra"
        accessibilityHint="Conclui sua compra e vai para a página de pagamento"
        onPress={handleCheckout}
      >
        Finalizar Compra
      </Button>
      \`\`\`
    `,
  },
};

export const DisabledWithAccessibility = {
  args: {
    ...meta.args,
    children: 'Botão Desabilitado',
    accessibilityLabel: 'Botão desabilitado até preencher o formulário',
    disabled: true,
  },
  parameters: {
    notes: `
      É importante fornecer informações claras para usuários com deficiência sobre por que um botão 
      está desabilitado e o que é necessário fazer para habilitá-lo.
    `,
  },
};

export const LoadingWithAccessibility = {
  args: {
    ...meta.args,
    children: 'Carregando...',
    loading: true,
    accessibilityState: { busy: true },
    accessibilityLabel: 'Botão em estado de carregamento',
  },
  parameters: {
    notes: `
      O estado de loading é informado aos leitores de tela através da propriedade
      accessibilityState={{ busy: true }}, o que ajuda usuários com deficiência visual a 
      entender que uma ação está em andamento.
    `,
  },
};
