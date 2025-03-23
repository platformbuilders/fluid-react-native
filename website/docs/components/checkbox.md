---
sidebar_position: 4
---

# Checkbox

O componente `Checkbox` permite aos usuários selecionar uma ou mais opções de um conjunto, sendo ideal para listas de opções múltiplas.

## Importação

```tsx
import { Checkbox } from '@platformbuilders/fluid-react-native';
```

## Exemplo Básico

```tsx
<Checkbox 
  label="Aceito os termos e condições" 
  value={isChecked}
  onValueChange={setIsChecked} 
/>
```

## Estados

### Desmarcado (Padrão)

```tsx
<Checkbox 
  label="Opção desmarcada" 
  value={false}
  onValueChange={setValue} 
/>
```

### Marcado

```tsx
<Checkbox 
  label="Opção marcada" 
  value={true}
  onValueChange={setValue} 
/>
```

### Desabilitado

```tsx
<Checkbox 
  label="Opção desabilitada desmarcada" 
  value={false}
  disabled
  onValueChange={setValue} 
/>

<Checkbox 
  label="Opção desabilitada marcada" 
  value={true}
  disabled
  onValueChange={setValue} 
/>
```

## Variações

### Tamanhos

```tsx
<Checkbox 
  label="Checkbox pequeno" 
  size="small"
  value={value}
  onValueChange={setValue} 
/>

<Checkbox 
  label="Checkbox médio (padrão)" 
  size="medium" 
  value={value}
  onValueChange={setValue} 
/>

<Checkbox 
  label="Checkbox grande" 
  size="large"
  value={value}
  onValueChange={setValue} 
/>
```

### Posição do Label

```tsx
<Checkbox 
  label="Label à direita (padrão)" 
  labelPosition="right"
  value={value}
  onValueChange={setValue} 
/>

<Checkbox 
  label="Label à esquerda" 
  labelPosition="left"
  value={value}
  onValueChange={setValue} 
/>
```

### Sem Label

```tsx
<Checkbox 
  accessibilityLabel="Aceito os termos e condições"
  value={value}
  onValueChange={setValue} 
/>
```

## Customização

### Com Tema

O componente Checkbox respeita o tema definido:

```tsx
// Em seu tema
const theme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    primary: '#FF5722',
  },
};

// Checkbox usará automaticamente as cores do tema
<Checkbox 
  label="Checkbox com tema" 
  value={value}
  onValueChange={setValue} 
/>
```

### Com Props de Estilo

Você pode customizar o estilo diretamente:

```tsx
<Checkbox 
  label="Checkbox personalizado" 
  value={value}
  onValueChange={setValue} 
  containerStyle={{ 
    marginBottom: 16,
  }}
  labelStyle={{ 
    fontWeight: 'bold',
    fontSize: 16,
  }}
  checkboxStyle={{
    borderRadius: 4,
  }}
/>
```

## Considerações de Acessibilidade

O Checkbox foi desenvolvido com acessibilidade em mente:

- Implementa `accessibilityRole="checkbox"` e `accessibilityState`
- O prop `label` é utilizado como `accessibilityLabel` por padrão
- O estado `checked` é comunicado corretamente para tecnologias assistivas
- Suporta foco e toque com contraste adequado

```tsx
<Checkbox 
  label="Aceito os termos"
  accessibilityHint="Marque esta caixa para aceitar os termos de uso"
  value={value}
  onValueChange={setValue} 
/>
```

## API de Referência

### Props

| Prop | Tipo | Padrão | Descrição |
| ---- | ---- | ------ | --------- |
| `label` | `string` | - | Texto exibido junto ao checkbox |
| `value` | `boolean` | `false` | Estado atual (marcado/desmarcado) |
| `onValueChange` | `(value: boolean) => void` | - | Função chamada quando o valor é alterado |
| `disabled` | `boolean` | `false` | Desabilita a interação com o checkbox |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Define o tamanho do checkbox |
| `labelPosition` | `'left' \| 'right'` | `'right'` | Posição do label em relação ao checkbox |
| `accessibilityLabel` | `string` | `label` | Rótulo de acessibilidade para leitores de tela |
| `accessibilityHint` | `string` | - | Dica de acessibilidade para leitores de tela |
| `containerStyle` | `StyleProp<ViewStyle>` | - | Estilo para o container do checkbox |
| `labelStyle` | `StyleProp<TextStyle>` | - | Estilo para o texto do label |
| `checkboxStyle` | `StyleProp<ViewStyle>` | - | Estilo para o elemento checkbox |
| `testID` | `string` | - | ID para testes automatizados |

## Exemplos Avançados

### Lista de Opções

```tsx
import React, { useState } from 'react';
import { View } from 'react-native';
import { Checkbox, Typography } from '@platformbuilders/fluid-react-native';

const CheckboxListExample = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    option1: false,
    option2: false,
    option3: false,
  });
  
  const handleChange = (option: string) => (value: boolean) => {
    setSelectedOptions(prev => ({
      ...prev,
      [option]: value,
    }));
  };
  
  return (
    <View style={{ padding: 16 }}>
      <Typography variant="h4" style={{ marginBottom: 16 }}>
        Selecione suas preferências
      </Typography>
      
      <Checkbox 
        label="Receber notificações por email" 
        value={selectedOptions.option1}
        onValueChange={handleChange('option1')}
        containerStyle={{ marginBottom: 12 }}
      />
      
      <Checkbox 
        label="Receber notificações por SMS" 
        value={selectedOptions.option2}
        onValueChange={handleChange('option2')}
        containerStyle={{ marginBottom: 12 }}
      />
      
      <Checkbox 
        label="Receber notificações por push" 
        value={selectedOptions.option3}
        onValueChange={handleChange('option3')}
      />
      
      <Typography variant="body1" style={{ marginTop: 16 }}>
        Opções selecionadas: {Object.values(selectedOptions).filter(Boolean).length}
      </Typography>
    </View>
  );
};

export default CheckboxListExample;
```

### Termos e Condições

```tsx
import React, { useState } from 'react';
import { View, ScrollView, Alert } from 'react-native';
import { Checkbox, Button, Typography } from '@platformbuilders/fluid-react-native';

const TermsExample = () => {
  const [accepted, setAccepted] = useState(false);
  
  const handleSubmit = () => {
    if (accepted) {
      Alert.alert('Sucesso', 'Termos aceitos com sucesso!');
    } else {
      Alert.alert('Erro', 'Você precisa aceitar os termos para continuar.');
    }
  };
  
  return (
    <View style={{ padding: 16 }}>
      <Typography variant="h4" style={{ marginBottom: 16 }}>
        Termos de Uso
      </Typography>
      
      <ScrollView 
        style={{ 
          height: 200, 
          padding: 12, 
          borderWidth: 1, 
          borderColor: '#ccc',
          marginBottom: 16,
        }}
      >
        <Typography variant="body2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, 
          nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies 
          nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, 
          nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.
          {/* Conteúdo dos termos aqui */}
        </Typography>
      </ScrollView>
      
      <Checkbox 
        label="Li e aceito os termos de uso e política de privacidade" 
        value={accepted}
        onValueChange={setAccepted}
        containerStyle={{ marginBottom: 24 }}
      />
      
      <Button 
        label="Continuar" 
        onPress={handleSubmit}
        disabled={!accepted}
      />
    </View>
  );
};

export default TermsExample;
```

## Melhores Práticas

1. **Use labels claros e diretos**: Descreva exatamente a ação que será tomada ao marcar o checkbox.

2. **Forneça estado padrão apropriado**: Em geral, checkboxes devem começar desmarcados, a menos que seja uma preferência comum.

3. **Agrupe checkboxes relacionados**: Mantenha checkboxes relacionados próximos uns aos outros, com um título descritivo.

4. **Use para seleções múltiplas**: Use checkboxes quando o usuário puder selecionar várias opções simultaneamente. Para escolha única, considere RadioButton.

5. **Inclua sempre uma label ou accessibilityLabel**: Mesmo que visualmente não haja label, forneça um accessibilityLabel para tecnologias assistivas.

6. **Evite mudanças imediatas de estado crítico**: Para ações críticas, use o checkbox para selecionar a opção, mas exija uma confirmação adicional.

7. **Mantenha consistência visual**: Use o mesmo tamanho e estilo de checkbox em toda a aplicação.

8. **Tamanho adequado para toque**: Garanta que a área tocável do checkbox seja grande o suficiente (mínimo 44x44 pontos) para facilitar o toque em dispositivos móveis.