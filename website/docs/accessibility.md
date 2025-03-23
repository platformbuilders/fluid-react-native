---
sidebar_position: 5
---

# Acessibilidade

O Fluid foi projetado com acessibilidade em mente. Seguimos as melhores práticas para garantir que aplicativos construídos com nossa biblioteca sejam utilizáveis por todos, incluindo pessoas com deficiências.

## Princípios de Acessibilidade

A acessibilidade no Fluid é guiada pelos seguintes princípios:

1. **Perceptível**: A informação e os componentes da interface devem ser apresentáveis aos usuários de maneiras que eles possam perceber.
2. **Operável**: Os componentes da interface e a navegação devem ser operáveis.
3. **Compreensível**: A informação e a operação da interface devem ser compreensíveis.
4. **Robusto**: O conteúdo deve ser robusto o suficiente para ser interpretado por uma ampla variedade de agentes de usuário, incluindo tecnologias assistivas.

## Recursos de Acessibilidade Nativos

O Fluid utiliza os recursos de acessibilidade nativos fornecidos pelo React Native:

### iOS (VoiceOver)

VoiceOver é o leitor de tela integrado do iOS que permite que usuários cegos ou com deficiência visual naveguem pelo aplicativo.

### Android (TalkBack)

TalkBack é o leitor de tela do Google para dispositivos Android, permitindo feedback audível para usuários com deficiência visual.

## Propriedades de Acessibilidade Suportadas

Todos os componentes do Fluid suportam as seguintes propriedades de acessibilidade:

### `accessible`

Indica se o elemento deve ser considerado um elemento de acessibilidade.

```tsx
<Button 
  label="Enviar" 
  accessible={true}
  onPress={() => {}} 
/>
```

### `accessibilityLabel`

Uma string descritiva que é lida pelo leitor de tela quando o usuário interage com o elemento.

```tsx
<Button 
  label="Enviar" 
  accessibilityLabel="Botão para enviar o formulário"
  onPress={() => {}} 
/>
```

### `accessibilityHint`

Uma dica para ajudar usuários a entender o que acontecerá quando eles interagirem com o elemento.

```tsx
<Button 
  label="Enviar" 
  accessibilityHint="Toque duas vezes para enviar o formulário"
  onPress={() => {}} 
/>
```

### `accessibilityRole`

Define o papel do elemento para tecnologias assistivas. Os papéis disponíveis incluem:

- `button`
- `link`
- `header`
- `search`
- `image`
- `text`
- `none`
- ... e outros

```tsx
<TouchableOpacity 
  accessibilityRole="button"
  onPress={() => {}}
>
  <Text>Exemplo</Text>
</TouchableOpacity>
```

### `accessibilityState`

Descreve o estado atual do componente para tecnologias assistivas, como:

- `disabled`: indica se o componente está desabilitado
- `selected`: indica se o componente está selecionado
- `checked`: indica se o componente está marcado (para checkboxes)
- `busy`: indica se o componente está ocupado
- `expanded`: indica se o componente está expandido

```tsx
<Button 
  label="Enviar" 
  accessibilityState={{ disabled: isDisabled, busy: isLoading }}
  onPress={() => {}} 
/>
```

## Implementação em Componentes Fluid

### Botões

Todos os botões no Fluid são automaticamente configurados com:

- `accessibilityRole="button"`
- `accessible={true}`
- `accessibilityLabel` derivado do prop `label`

```tsx
<Button 
  label="Enviar" 
  // Já configurado automaticamente para acessibilidade
  onPress={() => {}} 
/>
```

### Campos de Entrada

Os campos de entrada são configurados com:

- `accessibilityRole="none"` (para o container)
- Rótulos associados corretamente 
- Estados acessíveis (erro, desabilitado)

```tsx
<TextInput
  label="Email"
  error={emailError}
  // Estados de acessibilidade são gerenciados automaticamente
/>
```

### Ícones

Ícones que são interativos têm:

- `accessibilityRole="button"`
- Necessitam de um `accessibilityLabel` explícito

```tsx
<Icon 
  name="star" 
  accessibilityLabel="Adicionar aos favoritos"
  onPress={() => {}} 
/>
```

### Navegação por Teclado (Principalmente para Web)

Para aplicativos web, suportamos navegação por teclado:

- `tabIndex` para controlar a ordem de foco
- Feedback visual para o estado de foco em todos os elementos interativos
- Suporte a teclas de atalho onde apropriado

## Testes de Acessibilidade

É importante testar seu aplicativo com recursos de acessibilidade ativados:

### Teste Manual

1. Ative VoiceOver (iOS) ou TalkBack (Android)
2. Navegue pelo seu aplicativo usando gestos de acessibilidade
3. Verifique se todos os elementos são anunciados corretamente
4. Verifique se a ordem de navegação faz sentido

### Ferramentas de Teste Automatizado

Ao usar Detox ou outras ferramentas de teste, você pode testar acessibilidade automaticamente:

```javascript
it('should have correct accessibility labels', async () => {
  await expect(element(by.label('Botão para enviar o formulário'))).toBeVisible();
});
```

## Melhores Práticas

### Contraste de Cores

Certifique-se de que as cores em seu aplicativo tenham contraste suficiente:

- Texto regular: relação de contraste mínima de 4.5:1
- Texto grande ou elementos de interface: relação de contraste mínima de 3:1

O Fluid fornece utilitários para verificar relações de contraste:

```tsx
import { isAccessibleColor } from '@platformbuilders/fluid-react-native';

// Verifica se o contraste entre duas cores é acessível
const isAccessible = isAccessibleColor('#000000', '#FFFFFF'); // true
```

### Tamanho de Texto

Permita que os usuários redimensionem o texto. O Fluid suporta:

- Respeitar as configurações de tamanho de texto do sistema
- Unidades de texto responsivas

```tsx
<Text 
  allowFontScaling={true} 
  style={{ fontSize: theme.typography.fontSize.md }}
>
  Texto escalável
</Text>
```

### Áreas de Toque

Certifique-se de que elementos tocáveis tenham uma área de toque adequada:

- Mínimo de 44x44 pontos para elementos interativos
- Espaçamento adequado entre elementos tocáveis

```tsx
<TouchableOpacity 
  style={{ 
    minWidth: 44, 
    minHeight: 44,
    margin: theme.spacing.sm  // Espaçamento adequado
  }}
  onPress={() => {}}
>
  <Text>Toque Aqui</Text>
</TouchableOpacity>
```

### Feedback para Ações

Forneça feedback para as ações do usuário:

- Feedback visual
- Feedback tátil (quando disponível)
- Feedback auditivo (quando apropriado)

### Gestos Simples

Evite gestos complexos que seriam difíceis para pessoas com deficiências motoras:

- Prefira toques simples em vez de gestos complexos
- Quando necessário, ofereça alternativas para gestos complexos

## Exemplos Práticos

### Formulário Acessível

Exemplo de um formulário com considerações de acessibilidade:

```tsx
import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button, Text } from '@platformbuilders/fluid-react-native';

const AccessibleForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    <View 
      accessibilityRole="form"
      accessibilityLabel="Formulário de login"
      style={{ padding: 16 }}
    >
      <Text 
        variant="heading" 
        accessibilityRole="header"
        style={{ marginBottom: 16 }}
      >
        Login
      </Text>
      
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        accessibilityHint="Digite seu endereço de email"
        style={{ marginBottom: 12 }}
      />
      
      <TextInput
        label="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        accessibilityHint="Digite sua senha"
        style={{ marginBottom: 20 }}
      />
      
      <Button 
        label="Entrar" 
        onPress={() => {}}
        accessibilityHint="Toque duas vezes para fazer login"
      />
    </View>
  );
};

export default AccessibleForm;
```

### Lista Acessível

Exemplo de lista com itens acessíveis:

```tsx
import React from 'react';
import { FlatList, View } from 'react-native';
import { Text, TouchableRipple } from '@platformbuilders/fluid-react-native';

const data = [
  { id: '1', title: 'Item 1', description: 'Descrição do item 1' },
  { id: '2', title: 'Item 2', description: 'Descrição do item 2' },
  { id: '3', title: 'Item 3', description: 'Descrição do item 3' },
];

const AccessibleList = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <TouchableRipple
          onPress={() => {}}
          accessibilityRole="button"
          accessibilityLabel={item.title}
          accessibilityHint={`Toque duas vezes para abrir ${item.title}`}
        >
          <View style={{ padding: 16 }}>
            <Text
              variant="subtitle"
              accessibilityRole="header"
            >
              {item.title}
            </Text>
            <Text
              variant="body"
              accessibilityRole="text"
            >
              {item.description}
            </Text>
          </View>
        </TouchableRipple>
      )}
      accessibilityLabel="Lista de itens"
    />
  );
};

export default AccessibleList;
```

## Checklist de Acessibilidade

Use esta checklist para verificar a acessibilidade do seu aplicativo:

- [ ] Todos os elementos interativos têm `accessibilityLabel` descritivo
- [ ] Estados dos componentes são comunicados corretamente (`accessibilityState`)
- [ ] O contraste de cores está adequado para todos os textos e elementos da interface
- [ ] O aplicativo pode ser navegado completamente usando VoiceOver/TalkBack
- [ ] Áreas tocáveis têm tamanho adequado (mínimo 44x44 pontos)
- [ ] Texto pode ser redimensionado de acordo com as preferências do usuário
- [ ] Gestos complexos têm alternativas simples
- [ ] Formulários e campos de entrada têm rótulos e instruções claras
- [ ] Feedback é fornecido para as ações do usuário
- [ ] Ordem de foco de navegação é lógica e intuitiva

## Recursos e Referências

- [Documentação de Acessibilidade do React Native](https://reactnative.dev/docs/accessibility)
- [Diretrizes de Acessibilidade para iOS](https://developer.apple.com/design/human-interface-guidelines/accessibility)
- [Diretrizes de Acessibilidade para Android](https://developer.android.com/guide/topics/ui/accessibility)
- [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/TR/WCAG21/) 