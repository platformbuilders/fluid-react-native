---
id: pin-input
title: PinInput
sidebar_label: PinInput
---

import useBaseUrl from '@docusaurus/useBaseUrl';

O componente `PinInput` facilita a entrada de códigos PIN, senhas de uso único (OTPs) ou códigos de verificação, oferecendo uma interface com células individuais para cada dígito.
Ele encapsula a biblioteca `react-native-smooth-pincode-input`, expondo suas funcionalidades e adicionando recursos como label, caption e tratamento de erro integrados.

## Importação

```tsx
import { PinInput } from '@platformbuilders/fluid-react-native';
```

## Exemplo Básico

```tsx
import React, { useState } from 'react';
import { View } from 'react-native';
import { PinInput } from '@platformbuilders/fluid-react-native';

const BasicPinInputExample = () => {
  const [code, setCode] = useState('');

  return (
    <View>
      <PinInput
        accessibility="Entrada de código PIN"
        value={code}
        onChangeText={setCode}
        onFulfill={(filledCode) => console.log('Código preenchido:', filledCode)}
      />
    </View>
  );
};
```

## Exemplos

### Comprimento do Código

Defina o número de dígitos esperados com a prop `codeLength`.

```tsx
// Código de 6 dígitos
<PinInput 
  codeLength={6}
  accessibility="PIN de 6 dígitos"
  value={code6}
  onChangeText={setCode6}
/>
```

### Mascaramento (Senha)

Para campos de senha, use a prop `password`. O caractere de máscara pode ser personalizado com `mask`.

```tsx
<PinInput 
  password
  accessibility="Entrada de senha"
  value={password}
  onChangeText={setPassword}
  mask="*" // Opcional, padrão é '•'
/>
```

### Estilização Personalizada

Personalize a aparência das células e do texto com `cellStyle`, `textStyle` e suas variantes focadas (`cellStyleFocused`, `textStyleFocused`).

```tsx
<PinInput
  accessibility="PIN com estilo personalizado"
  value={styledCode}
  onChangeText={setStyledCode}
  cellSize={45}
  cellSpacing={8}
  cellStyle={{
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#bdc3c7',
    backgroundColor: '#ecf0f1',
  }}
  cellStyleFocused={{
    borderColor: '#3498db',
    backgroundColor: '#ffffff',
  }}
  textStyle={{
    fontSize: 20,
    color: '#2c3e50',
  }}
  textStyleFocused={{
    color: '#3498db',
  }}
/>
```

### Com Label e Caption

Adicione contexto com `borderedLabel` (label acima da borda) e `caption` (texto abaixo).

```tsx
<PinInput 
  accessibility="PIN com label e caption"
  value={contextCode}
  onChangeText={setContextCode}
  borderedLabel="Código de Verificação"
  caption="Enviamos um código para seu e-mail."
/>
```

### Tratamento de Erros

Exiba mensagens de erro com a prop `error`.

```tsx
<PinInput 
  accessibility="PIN com erro"
  value={errorCode}
  onChangeText={setErrorCode}
  error="Código inválido. Tente novamente."
/>
```

### Autofoco

Foque automaticamente o input ao montar o componente com `autoFocus`.

```tsx
<PinInput 
  accessibility="PIN com autofoco"
  value={autoFocusCode}
  onChangeText={setAutoFocusCode}
  autoFocus
/>
```

## API

### Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `onChangeText` | `(text: string) => void` | - | **Obrigatório.** Função chamada a cada mudança no texto. |
| `value` | `string` | - | Valor atual do input. |
| `codeLength` | `number` | `4` | Número de células/dígitos. |
| `onFulfill` | `(text: string) => void` | `() => {}` | Função chamada quando todas as células são preenchidas. |
| `password` | `boolean` | `false` | Se o input deve mascarar os caracteres (para senhas). |
| `mask` | `string \| JSX.Element` | `'•'` | Caractere ou componente usado para mascarar (quando `password={true}`). |
| `caption` | `string` | - | Texto exibido abaixo do input. |
| `error` | `string \| boolean` | - | Exibe uma mensagem de erro e aplica estilo de erro. |
| `accessibility` | `string` | - | Label principal de acessibilidade para o componente. |
| `id` | `string` | - | ID do componente. |
| `autoFocus` | `boolean` | `false` | Foca o input automaticamente ao montar. |
| `editable` | `boolean` | `true` | Se o input pode ser editado. |
| `centered` | `boolean` | `false` | Centraliza o componente e o `caption`. |
| `restrictToNumbers` | `boolean` | `false` | Permite apenas a entrada de números. |
| `keyboardType` | `KeyboardTypeOptions` | `'numeric'` | Tipo de teclado a ser exibido. |
| `keyboardAppearance` | `'default' \| 'light' \| 'dark'` | `'default'` | Tema do teclado (iOS). |
| `contrast` | `boolean` | `false` | Aplica estilo de contraste ao ícone de visibilidade (quando `password={true}`), útil em fundos escuros. |
| `cellSize` | `number` | `56` | Tamanho (largura e altura) de cada célula. |
| `cellSpacing` | `number` | `6` | Espaçamento entre as células. |
| `animated` | `boolean` | `false` | Ativa animações de foco/preenchimento (dependente da lib interna). |
| `cellStyle` | `StyleProp<ViewStyle>` | (Estilo padrão) | Estilo para as células. |
| `cellStyleFocused` | `StyleProp<ViewStyle>` | (Estilo padrão) | Estilo adicional para a célula focada. |
| `textStyle` | `StyleProp<TextStyle>` | (Estilo padrão) | Estilo para o texto dentro das células. |
| `textStyleFocused` | `StyleProp<TextStyle>` | (Estilo padrão) | Estilo adicional para o texto na célula focada. |
| `wrapperStyle` | `StyleProp<ViewStyle>` | - | Estilo para o container principal do input. |
| `borderedLabel` | `string` | - | Texto do label posicionado acima da borda do input. |
| `labelStyle` | `StyleProp<TextStyle>` | - | Estilo para o `borderedLabel`. |
| `fixedLabelVariant` | `TypographyVariants` | `'sm'` | Variante de tamanho para o `borderedLabel`. |
| `useIndexedAccessibilityLabel` | `string` | `'Insira o PIN'` | Prefixo para `accessibilityLabel` de cada célula (adiciona índice). |
| `useIndexedTestID` | `string` | `'Insira o PIN'` | Prefixo para `testID` de cada célula (adiciona índice, útil para testes no iOS). |
| `onBackspace` | `() => void` | - | Função chamada quando a tecla backspace é pressionada em uma célula vazia. |
| `placeholder` | `string \| JSX.Element` | - | Placeholder exibido em células vazias. |
| `maskDelay` | `number` | `200` | Tempo em milissegundos para aplicar a máscara após digitar (quando `password={true}`). |
| `iconSize` | `number` | `24` | Tamanho do ícone de olho (quando `password={true}`). |
| `inputProps` | `TextInputProps` | - | Props adicionais passadas diretamente para o componente `TextInput` interno. |

## Acessibilidade

- O `accessibility` principal é aplicado ao container.
- Cada célula recebe um `accessibilityLabel` e `testID` indexado, configurável via `useIndexedAccessibilityLabel` e `useIndexedTestID`, facilitando a automação de testes e a navegação por leitores de tela.
- O ícone de olho (para senhas) possui um `accessibilityLabel` que indica sua função (Exibir/Ocultar).

### Boas Práticas

1.  **Labels Claros**: Use `accessibility` descritivo para o propósito geral (ex: "PIN de acesso", "Código de verificação de e-mail").
2.  **Confirmação Audível**: Para senhas, considere um feedback sonoro sutil ao digitar, se apropriado para a plataforma.
3.  **Mensagens de Erro**: Forneça mensagens de erro claras e concisas através da prop `error`. 