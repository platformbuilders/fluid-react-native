---
sidebar_position: 1
---

# Button

O componente `Button` é um elemento de interface interativo que permite aos usuários realizar ações através de toques ou cliques.

## Importação

```tsx
import { Button } from '@platformbuilders/fluid-react-native';
```

## Exemplo Básico

```tsx
<Button 
  label="Clique Aqui" 
  onPress={() => console.log('Botão clicado')} 
/>
```

## Variantes

O Button possui diferentes variantes para diferentes contextos de uso:

### Primário (Padrão)

```tsx
<Button 
  label="Botão Primário" 
  variant="primary"
  onPress={() => {}} 
/>
```

### Secundário

```tsx
<Button 
  label="Botão Secundário" 
  variant="secondary"
  onPress={() => {}} 
/>
```

### Terciário

```tsx
<Button 
  label="Botão Terciário" 
  variant="tertiary"
  onPress={() => {}} 
/>
```

### Outline

```tsx
<Button 
  label="Botão Outline" 
  variant="outline"
  onPress={() => {}} 
/>
```

### Ghost

```tsx
<Button 
  label="Botão Ghost" 
  variant="ghost"
  onPress={() => {}} 
/>
```

### Tamanhos

O Button suporta diferentes tamanhos:

```tsx
<Button 
  label="Botão Pequeno" 
  size="small"
  onPress={() => {}} 
/>

<Button 
  label="Botão Médio" 
  size="medium" // Padrão
  onPress={() => {}} 
/>

<Button 
  label="Botão Grande" 
  size="large"
  onPress={() => {}} 
/>
```

## Estados

### Desabilitado

```tsx
<Button 
  label="Botão Desabilitado" 
  disabled
  onPress={() => {}} 
/>
```

### Carregando

```tsx
<Button 
  label="Carregando" 
  loading
  onPress={() => {}} 
/>
```

## Com Ícone

Você pode adicionar ícones ao botão:

```tsx
<Button 
  label="Continuar" 
  icon="arrow-right"
  iconPosition="right" // "left" (padrão) ou "right"
  onPress={() => {}} 
/>
```

## Botão de Ícone

Para botões que contêm apenas um ícone:

```tsx
<Button 
  icon="star"
  iconOnly
  accessibilityLabel="Favoritar" // Importante para acessibilidade
  onPress={() => {}} 
/>
```

## Customização

### Com Tema

O componente Button respeita o tema definido:

```tsx
// Em seu tema
const theme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    primary: '#FF5722',
    secondary: '#2196F3',
  },
};

// Botão usará automaticamente as cores do tema
<Button 
  label="Botão com Tema" 
  onPress={() => {}} 
/>
```

### Com Props de Estilo

Você pode customizar o estilo do botão diretamente:

```tsx
<Button 
  label="Botão Personalizado" 
  onPress={() => {}} 
  containerStyle={{ 
    borderRadius: 8,
    marginBottom: 16,
  }}
  labelStyle={{ 
    fontWeight: 'bold',
  }}
/>
```

## Considerações de Acessibilidade

O Button foi desenvolvido com acessibilidade em mente:

- Automaticamente implementa `accessibilityRole="button"`
- O prop `label` é utilizado como `accessibilityLabel` por padrão
- Suporta o prop `accessibilityHint` para fornecer dicas adicionais
- Estados como `disabled` e `loading` são comunicados corretamente para tecnologias assistivas

```tsx
<Button 
  label="Enviar Formulário" 
  accessibilityHint="Toque duas vezes para enviar o formulário"
  onPress={() => {}} 
/>
```

## API de Referência

### Props

| Prop | Tipo | Padrão | Descrição |
| ---- | ---- | ------ | --------- |
| `label` | `string` | - | O texto exibido no botão |
| `onPress` | `() => void` | - | Função chamada quando o botão é pressionado |
| `variant` | `'primary' \| 'secondary' \| 'tertiary' \| 'outline' \| 'ghost'` | `'primary'` | Define o estilo visual do botão |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Define o tamanho do botão |
| `disabled` | `boolean` | `false` | Desabilita a interação com o botão |
| `loading` | `boolean` | `false` | Exibe um indicador de carregamento no botão |
| `icon` | `string` | - | Nome do ícone para exibir |
| `iconPosition` | `'left' \| 'right'` | `'left'` | Posição do ícone em relação ao texto |
| `iconOnly` | `boolean` | `false` | Define o botão para mostrar apenas o ícone |
| `onLongPress` | `() => void` | - | Função chamada em um pressionamento longo |
| `accessibilityLabel` | `string` | `label` | Rótulo de acessibilidade para leitores de tela |
| `accessibilityHint` | `string` | - | Dica de acessibilidade para leitores de tela |
| `containerStyle` | `StyleProp<ViewStyle>` | - | Estilo para o container do botão |
| `labelStyle` | `StyleProp<TextStyle>` | - | Estilo para o texto do botão |
| `iconStyle` | `StyleProp<ViewStyle>` | - | Estilo para o ícone do botão |
| `activeOpacity` | `number` | `0.7` | Opacidade quando pressionado (se não for ripple) |
| `testID` | `string` | - | ID para testes automatizados |

## Exemplos Avançados

### Formulário com Botão de Envio

```tsx
import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, TextInput, Text } from '@platformbuilders/fluid-react-native';

const FormExample = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = () => {
    setLoading(true);
    // Simular envio
    setTimeout(() => {
      setLoading(false);
      alert(`Formulário enviado: ${name}, ${email}`);
    }, 2000);
  };
  
  const isFormValid = name.trim() !== '' && email.trim() !== '';
  
  return (
    <View style={{ padding: 16 }}>
      <Text variant="heading" style={{ marginBottom: 16 }}>
        Formulário de Contato
      </Text>
      
      <TextInput
        label="Nome"
        value={name}
        onChangeText={setName}
        style={{ marginBottom: 12 }}
      />
      
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        style={{ marginBottom: 20 }}
      />
      
      <Button 
        label="Enviar" 
        icon="send"
        loading={loading}
        disabled={!isFormValid || loading}
        onPress={handleSubmit}
      />
    </View>
  );
};

export default FormExample;
```

### Grupo de Botões

```tsx
import React, { useState } from 'react';
import { View } from 'react-native';
import { Button } from '@platformbuilders/fluid-react-native';

const ButtonGroup = () => {
  const [selectedTab, setSelectedTab] = useState('home');
  
  return (
    <View style={{ 
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      padding: 16 
    }}>
      <Button 
        label="Home" 
        variant={selectedTab === 'home' ? 'primary' : 'ghost'}
        onPress={() => setSelectedTab('home')}
        containerStyle={{ flex: 1, marginRight: 8 }}
      />
      
      <Button 
        label="Perfil" 
        variant={selectedTab === 'profile' ? 'primary' : 'ghost'}
        onPress={() => setSelectedTab('profile')}
        containerStyle={{ flex: 1, marginRight: 8 }}
      />
      
      <Button 
        label="Configurações" 
        variant={selectedTab === 'settings' ? 'primary' : 'ghost'}
        onPress={() => setSelectedTab('settings')}
        containerStyle={{ flex: 1 }}
      />
    </View>
  );
};

export default ButtonGroup;
```

## Melhores Práticas

1. **Sempre forneça um label claro**: Use textos específicos que indicam a ação (ex: "Salvar" em vez de "OK").

2. **Cuide da acessibilidade**: Sempre defina `accessibilityLabel` para botões de ícone.

3. **Feedback de carregamento**: Use o prop `loading` para operações assíncronas.

4. **Consistência**: Use variantes de forma consistente em toda a aplicação:
   - `primary`: para ações principais ou de maior destaque
   - `secondary`: para ações secundárias 
   - `tertiary`: para ações de menor importância
   - `outline`: para ações alternativas que precisam de visibilidade
   - `ghost`: para ações menos intrusivas

5. **Tamanho adequado**: Use botões grandes o suficiente para serem tocáveis confortavelmente em dispositivos móveis (mínimo 44x44 pontos). 