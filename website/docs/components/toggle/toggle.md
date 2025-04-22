---
id: toggle
title: Toggle
sidebar_label: Toggle
---

import useBaseUrl from '@docusaurus/useBaseUrl';

O componente `Toggle` fornece um interruptor acessível (switch) para ativar/desativar opções em sua aplicação. É ideal para configurações binárias do tipo "ligado/desligado" ou "sim/não".

## Importação

```tsx
import { Toggle } from '@platformbuilders/fluid-react-native';
```

## Exemplo Básico

```tsx
import React, { useState } from 'react';
import { View } from 'react-native';
import { Toggle } from '@platformbuilders/fluid-react-native';

const BasicToggleExample = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <View>
      <Toggle
        accessibility="Ativar notificações"
        value={isEnabled}
        onValueChange={setIsEnabled}
      />
    </View>
  );
};
```

## Exemplos

### Estados

O componente pode estar ativado, desativado ou desabilitado.

```tsx
<View style={{ flexDirection: 'column', gap: 10 }}>
  <Toggle 
    accessibility="Ativado"
    value={true}
    onValueChange={() => {}}
  />
  <Toggle 
    accessibility="Desativado"
    value={false}
    onValueChange={() => {}}
  />
  <Toggle 
    accessibility="Desabilitado"
    value={true} // O valor ainda pode ser controlado, mas a interação está desabilitada
    isDisabled={true}
    onValueChange={() => {}}
  />
</View>
```

### Cores Personalizadas

Personalize a cor do botão (thumb) e da trilha (track) para cada estado.

```tsx
<Toggle
  accessibility="Cores customizadas"
  value={true}
  onValueChange={() => {}}
  thumbColor={{
    trueColor: '#FFFFFF',  // Cor do botão quando ativado
    falseColor: '#f4f3f4'   // Cor do botão quando desativado
  }}
  trackColor={{
    trueColor: '#81b0ff',  // Cor da trilha quando ativado
    falseColor: '#767577'  // Cor da trilha quando desativado
  }}
/>
```

### Com Identificadores

Use `id` e `testID` para facilitar testes e identificação.

```tsx
<Toggle 
  id="dark-mode-switch"
  testID="settings-dark-mode-toggle" // testID final será "toggle_settings-dark-mode-toggle"
  value={isDarkMode}
  onValueChange={setIsDarkMode}
  accessibility="Alternar modo escuro"
/>
```

## API

### Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `value` | `boolean` | - | **Obrigatório.** Estado atual do toggle (`true` para ativado, `false` para desativado). |
| `onValueChange` | `(value: boolean) => void` | - | **Obrigatório.** Função chamada quando o estado do toggle muda. Recebe o novo valor booleano. |
| `accessibility` | `string` | - | Descrição concisa da função do toggle para acessibilidade. Usado para gerar `testID` se `id` não for fornecido. |
| `id` | `string` | - | ID único do componente (usado para gerar `testID`). |
| `isDisabled` | `boolean` | `false` | Desabilita a interação com o toggle. |
| `accessibilityLabel` | `string` | (Gerado automaticamente) | Label detalhado para leitores de tela. Padrão: "Alternar. Estado atual: [ativado/desativado]". |
| `testID` | `string` | - | ID para testes automatizados (será prefixado com `toggle_`). |
| `thumbColor` | `{ trueColor: string, falseColor: string }` | (Cores do tema) | Cores para o botão deslizante (thumb). |
| `trackColor` | `{ trueColor: string, falseColor: string }` | (Cores do tema) | Cores para a trilha (track). |

## Acessibilidade

- **Role**: `switch` (identifica o componente como um interruptor).
- **State**: Comunica os estados `checked` (equivalente a `value`) e `disabled`.
- **Label**: `accessibilityLabel` descreve a função e o estado atual.
- **Hint**: `accessibilityHint` informa como interagir ("Toque duas vezes para alternar").

O componente gera automaticamente um `accessibilityLabel` útil baseado no estado (`value`), mas é recomendado fornecer um `accessibility` descritivo para melhor contexto.

### Boas Práticas

1.  **Contexto Claro**: Posicione o `Toggle` próximo ao item que ele controla (ex: ao lado de um label "Notificações").
2.  **Feedback Visual**: As cores padrão ou personalizadas devem indicar claramente o estado (ligado/desligado).
3.  **Labels Descritivos**: Use `accessibility` para indicar a *ação* ou *configuração* que o toggle controla (ex: "Ativar modo de economia de energia"). 