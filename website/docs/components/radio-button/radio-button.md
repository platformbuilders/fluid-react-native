---
id: radio-button
title: RadioButton
sidebar_label: RadioButton
---

import useBaseUrl from '@docusaurus/useBaseUrl';

O componente `RadioButton` permite aos usuários selecionar uma única opção de um conjunto mutuamente exclusivo.

## Importação

```tsx
import { RadioButton } from '@platformbuilders/fluid-react-native';
```

## Exemplo Básico

```tsx
import React, { useState } from 'react';
import { View } from 'react-native';
import { RadioButton } from '@platformbuilders/fluid-react-native';

const BasicRadioButtonExample = () => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <View>
      <RadioButton
        accessibility="Selecionar esta opção"
        label="Opção Selecionável"
        checked={isSelected}
        onPress={() => setIsSelected(!isSelected)}
      />
    </View>
  );
};
```

## Exemplos

### Estados

O componente pode estar selecionado, não selecionado ou desabilitado.

```tsx
<View style={{ flexDirection: 'column', gap: 10 }}>
  <RadioButton
    accessibility="Opção padrão, não selecionada"
    label="Não Selecionado"
    checked={false}
    onPress={() => {}}
  />
  <RadioButton
    accessibility="Opção selecionada"
    label="Selecionado"
    checked={true}
    onPress={() => {}}
  />
  <RadioButton
    accessibility="Opção desabilitada"
    label="Desabilitado"
    disabled={true}
    onPress={() => {}}
  />
  <RadioButton
    accessibility="Opção desabilitada e selecionada"
    label="Desabilitado e Selecionado"
    checked={true}
    disabled={true}
    onPress={() => {}}
  />
</View>
```

### Grupo de RadioButtons

Para criar um grupo onde apenas uma opção pode ser selecionada, gerencie o estado no componente pai.

```tsx
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { RadioButton, Typography } from '@platformbuilders/fluid-react-native';

const RadioButtonGroupExample = () => {
  const [selectedOption, setSelectedOption] = useState('option1');

  const options = [
    { id: 'option1', label: 'Opção A' },
    { id: 'option2', label: 'Opção B' },
    { id: 'option3', label: 'Opção C' },
  ];

  return (
    <View style={styles.container}>
      <Typography variant="subtitle" style={styles.title}>
        Escolha uma opção:
      </Typography>
      {options.map((option) => (
        <RadioButton
          key={option.id}
          id={option.id}
          accessibility={`Selecionar ${option.label}`}
          label={option.label}
          checked={selectedOption === option.id}
          onPress={() => setSelectedOption(option.id)}
          style={styles.radioButton}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { marginBottom: 16 },
  radioButton: { marginBottom: 12 },
});
```

### Personalização de Cores

Altere a cor da borda e do preenchimento.

```tsx
<RadioButton
  accessibility="Cores personalizadas"
  label="Verde e Azul"
  checked={true}
  radioButtonColor="#2980b9"      // Cor da borda
  checkedRadioButtonColor="#2ecc71" // Cor do preenchimento quando checado
  onPress={() => {}}
/>
```

### Tamanho Personalizado

Ajuste o tamanho total e o tamanho do círculo interno.

```tsx
<RadioButton
  accessibility="Tamanho grande"
  label="Tamanho 30, Interno 20"
  checked={true}
  size={30}          // Diâmetro externo
  internalSize={20}  // Diâmetro interno
  onPress={() => {}}
/>
```

### Estilo do Label

Personalize a aparência do texto do label.

```tsx
<RadioButton
  accessibility="Label vermelho e negrito"
  label="Label Personalizado"
  labelStyle={{ 
    color: '#e74c3c', 
    fontWeight: 'bold'
  }}
  onPress={() => {}}
/>
```

## API

### Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `accessibility` | `string` | - | **Obrigatório.** Descrição de acessibilidade. |
| `checked` | `boolean` | `false` | Estado de seleção. |
| `onPress` | `() => void` | `() => {}` | Função chamada ao pressionar. |
| `id` | `string` | - | ID único (usado para gerar `testID`). |
| `testID` | `string` | - | ID para testes (gerado automaticamente se não fornecido). |
| `disabled` | `boolean` | `false` | Desabilita o componente. |
| `label` | `string` | - | Texto exibido ao lado do botão. |
| `labelStyle` | `StyleProp<TextStyle>` | `{}` | Estilo para o `label`. |
| `radioButtonColor` | `string` | (Cor do tema) | Cor da borda do botão. |
| `checkedRadioButtonColor` | `string` | (Cor primária do tema) | Cor do círculo interno quando selecionado. |
| `size` | `number` | `20` | Diâmetro externo do botão. |
| `internalSize` | `number` | `size - 7` | Diâmetro do círculo interno quando selecionado. |
| `accessibilityLabel` | `string` | (Gerado) | Label de acessibilidade específico. |

## Acessibilidade

- O componente define `accessibilityRole="radio"`.
- O estado (`checked`, `disabled`) é comunicado aos leitores de tela.
- A prop `accessibility` é essencial para descrever a ação.
- A área de toque (`hitSlop`) é aumentada para facilitar a interação.

### Boas Práticas

1.  **Labels Descritivos**: Use `accessibility` e `label` claros (ex: "Selecionar opção de pagamento PIX").
2.  **Agrupamento**: Para grupos, use um título descritivo (com `<Typography>`) antes do conjunto de `RadioButton`s.
3.  **Contraste**: Garanta contraste suficiente entre as cores do botão, do texto e do fundo. 