---
sidebar_position: 1
---

# Button

O componente Button fornece um botão acessível para ações do usuário.

## Importação

```jsx
import { Button } from '@platformbuilders/fluid-react-native';
```

## Uso Básico

```jsx
<Button 
  onPress={() => console.log('Botão pressionado')}
  accessibility="botao-salvar"
>
  Salvar
</Button>
```

## Variações

### Variantes de Estilo (`variant`)

Controla a aparência geral do botão.

```jsx
// Preenchido (padrão)
<Button 
  onPress={handlePress}
  accessibility="botao-primario"
  variant="filled" // Valor padrão
  colorVariant="primary"
>
  Botão Preenchido
</Button>

// Delineado
<Button 
  onPress={handlePress}
  accessibility="botao-secundario"
  variant="outline"
  colorVariant="secondary"
>
  Botão Delineado
</Button>

// Texto plano
<Button 
  onPress={handlePress}
  accessibility="botao-texto"
  variant="text"
  colorVariant="primary" // Cor do texto pode variar
>
  Botão Texto
</Button>
```

### Variantes de Cor (`colorVariant`)

Aplica a paleta de cores do tema ao botão (afeta fundo, borda e texto dependendo do `variant`).

```jsx
<Button 
  onPress={handlePress}
  accessibility="botao-sucesso"
  variant="filled"
  colorVariant="success"
>
  Sucesso
</Button>

<Button 
  onPress={handlePress}
  accessibility="botao-perigo"
  variant="outline"
  colorVariant="danger"
>
  Perigo
</Button>

<Button 
  onPress={handlePress}
  accessibility="botao-aviso"
  variant="text"
  colorVariant="warning"
>
  Aviso
</Button>
```

### Estados

```jsx
// Desabilitado
<Button 
  onPress={handlePress}
  accessibility="botao-desabilitado"
  disabled
>
  Botão Desabilitado
</Button>

// Carregando
<Button 
  onPress={handlePress}
  accessibility="botao-carregando"
  loading
>
  Salvando...
</Button>
```

### Com Ícones (`leftIconName`, `rightIconName`)

```jsx
// Ícone à esquerda
<Button 
  onPress={handlePress}
  accessibility="botao-adicionar"
  leftIconName="plus"
>
  Adicionar
</Button>

// Ícone à direita
<Button 
  onPress={handlePress}
  accessibility="botao-proximo"
  rightIconName="arrow-right"
>
  Próximo
</Button>
```

### Outras Customizações

```jsx
// Contraste (para fundos escuros)
<View style={{ backgroundColor: '#333', padding: 10 }}>
  <Button 
    onPress={handlePress}
    accessibility="botao-contraste"
    contrast
  >
    Alto Contraste
  </Button>
</View>

// Arredondado
<Button 
  onPress={handlePress}
  accessibility="botao-arredondado"
  rounded
>
  Arredondado
</Button>

// Plano (sem sombra)
<Button 
  onPress={handlePress}
  accessibility="botao-plano"
  flat
>
  Plano
</Button>
```

## Acessibilidade

O componente Button implementa automaticamente propriedades de acessibilidade essenciais:

- `accessibilityRole`: Definido como `"button"`.
- `accessibilityLabel`: Usa o `children` do botão como padrão, mas pode ser sobrescrito pela prop `accessibilityLabel` para maior clareza.
- `accessibilityState`: Informa os estados `{ disabled: true }` ou `{ busy: true }` quando `disabled` ou `loading` são `true`.
- `accessibilityHint`: Fornece uma dica padrão ("Ativa ao pressionar"), que pode ser personalizada.

### Exemplo com Acessibilidade Personalizada

```jsx
<Button 
  onPress={handlePress}
  accessibility="botao-concluir-compra" // ID claro
  accessibilityLabel="Finalizar Compra" // Label explícito
  accessibilityHint="Tocar duas vezes para ir para o pagamento" // Dica customizada
>
  Finalizar Compra
</Button>
```

### Boas Práticas de Acessibilidade

1. **Labels Descritivos**: Use `children` ou `accessibilityLabel` claros e específicos. Evite termos genéricos como "Clique aqui" ou "OK".
2. **Estados Visíveis**: Garanta que os estados `disabled` e `loading` sejam visualmente distintos.
3. **Área de Toque Adequada**: O componente `Touchable` interno garante uma área de toque mínima adequada.

## API

### Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `accessibility` | `string` | **Obrigatório** | Identificador único para acessibilidade e testes. |
| `id` | `string` | `accessibility` | ID opcional para o componente. |
| `children` | `ReactNode` | - | O conteúdo textual (ou outro) do botão. Usado como `accessibilityLabel` padrão. |
| `onPress` | `(event: GestureResponderEvent) => void` | - | Função chamada quando o botão é pressionado. |
| `disabled` | `boolean` | `false` | Se `true`, desabilita o botão visualmente e para interação. Comunica o estado `disabled` para acessibilidade. |
| `loading` | `boolean` | `false` | Se `true`, exibe um indicador de carregamento no lugar do conteúdo e desabilita o botão. Comunica o estado `busy` para acessibilidade. |
| `variant` | `'filled' \| 'outline' \| 'text'` | `'filled'` | Variante visual do botão (preenchido, contornado ou apenas texto). |
| `colorVariant` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info'` | `'primary'` | Variante de cor do tema a ser aplicada (afeta fundo, borda, texto). |
| `typographyVariant` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Variante de tamanho da tipografia interna do botão. |
| `leftIconName` | `string` | - | Nome do ícone (da biblioteca de ícones configurada) a ser exibido à esquerda do texto. |
| `rightIconName` | `string` | - | Nome do ícone a ser exibido à direita do texto. |
| `leftIconTouchable` | `boolean` | `true` | (Avançado) Define se o ícone esquerdo é considerado parte da área tocável para acessibilidade. |
| `rightIconTouchable` | `boolean` | `true` | (Avançado) Define se o ícone direito é considerado parte da área tocável para acessibilidade. |
| `contrast` | `boolean` | `false` | Se `true`, ajusta as cores para melhor contraste em fundos escuros (geralmente torna o texto/ícone mais claro). |
| `rounded` | `boolean` | `false` | Se `true`, aplica um `borderRadius` maior para um visual arredondado. |
| `flat` | `boolean` | `false` | Se `true`, remove a sombra/elevação padrão do botão (efeito mais "plano"). |
| `minWidth` | `number \| string` | - | Largura mínima do botão. |
| `maxWidth` | `number \| string` | - | Largura máxima do botão. |
| `style` | `StyleProp<ViewStyle>` | `{}` | Estilos personalizados aplicados ao container `ButtonWrapper` (interno). |
| `textStyle` | `StyleProp<TextStyle>` | `{}` | Estilos personalizados aplicados ao componente `TextButton` interno. |
| `accessibilityLabel` | `string` | `children` | Sobrescreve o `accessibilityLabel` padrão (que usa `children`). |
| `accessibilityHint` | `string` | "Ativa ao pressionar" | Sobrescreve a dica de acessibilidade padrão. |
| `testID` | `string` | Gerado (`button_{id/acc/testID/button}`) | ID específico para uso em testes automatizados. Se não fornecido, um será gerado. |

```tsx
<Button 
  label="Enviar Formulário" 
  accessibilityHint="Toque duas vezes para enviar o formulário"
  onPress={() => {}} 
/>
```

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