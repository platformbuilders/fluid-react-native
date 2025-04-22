---
sidebar_position: 2
---

# Avatar

O componente `Avatar` é utilizado para exibir imagens de perfil de usuários, com suporte para iniciais (monograma) quando não há imagem disponível e funcionalidade de upload de imagem.

## Importação

```tsx
import { Avatar } from '@platformbuilders/fluid-react-native';
```

## Exemplo Básico

```tsx
<Avatar 
  accessibility="avatar-usuario"
  name="Usuário Anônimo"
  size={50}
/>
```

## Exemplos

### Com Imagem (URL)

```tsx
<Avatar 
  accessibility="avatar-usuario"
  image={{ uri: 'https://exemplo.com/avatar.jpg' }}
  size={60}
/>
```

### Com Imagem (Local)

```tsx
// Certifique-se que o asset está disponível
// import userImage from './path/to/user.png'; 
<Avatar 
  accessibility="avatar-local"
  image={require('./path/to/user.png')}
  size={60}
/>
```

### Com Monograma (Iniciais)

Quando não há imagem definida, o Avatar exibirá as iniciais do `name` fornecido:

```tsx
<Avatar 
  accessibility="avatar-iniciais"
  name="John Doe"
  size={60}
  displayMonogram
/>
```

### Com Upload de Imagem

Fornecer a função `onUpload` habilita a seleção de imagem ao tocar no Avatar (a menos que `onPress` também seja fornecido).

```tsx
const handleImageUpload = (uri) => {
  console.log('Imagem carregada:', uri);
  // Salvar a URI da imagem no estado ou enviar para o servidor
};

<Avatar 
  accessibility="avatar-upload"
  name="Jane Doe"
  size={80}
  onUpload={handleImageUpload} 
/>
```

### Com Ação de Clique (`onPress`)

Se `onPress` for fornecido, ele terá prioridade sobre o `onUpload` para a ação de toque.

```tsx
const handleAvatarPress = () => {
  console.log('Avatar Pressionado!');
  // Navegar para o perfil, por exemplo
};

<Avatar 
  accessibility="avatar-clicavel"
  name="Peter Jones"
  image={{ uri: 'https://exemplo.com/peter.jpg' }}
  size={80}
  onPress={handleAvatarPress}
/>
```

### Com Estilo Personalizado

```tsx
<Avatar 
  accessibility="avatar-customizado"
  name="Estilizado"
  size={70}
  showBorder
  borderWidth={3}
  borderColor="#2ecc71"
  style={{ marginBottom: 16 }}
  monogramStyle={{ color: '#ffffff', fontWeight: 'bold' }}
/>
```

### Com Referência para Controle

Use `ref` para chamar métodos que controlam o componente programaticamente.

```tsx
import React, { useRef } from 'react';
import { Button, View } from 'react-native';
import { Avatar, AvatarRef } from '@platformbuilders/fluid-react-native';

const ProfileScreen = () => {
  const avatarRef = useRef<AvatarRef>(null);

  const handleSelectImage = () => {
    avatarRef.current?.openPicker();
  };

  const handleClearImage = () => {
    avatarRef.current?.clearUploadImage();
  };
  
  const handleGetImage = () => {
    const imageUri = avatarRef.current?.getUploadImage();
    console.log('URI da imagem atual:', imageUri);
  };

  return (
    <View>
      <Avatar 
        ref={avatarRef}
        accessibility="perfil-avatar"
        name="Controlado"
        size={100}
        onUpload={(uri) => console.log('Imagem carregada via Upload:', uri)}
      />
      
      <Button title="Selecionar imagem" onPress={handleSelectImage} />
      <Button title="Remover imagem (Upload)" onPress={handleClearImage} />
      <Button title="Obter URI Imagem (Upload)" onPress={handleGetImage} />
    </View>
  );
};
```

## API

### Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `accessibility` | `string` | `'Upload de Avatar'` | Identificador de acessibilidade (usado como fallback para `accessibilityLabel` e `id`). |
| `id` | `string` | `accessibility` | ID opcional para o componente. |
| `accessibilityLabel` | `string` | `accessibility` | Rótulo de acessibilidade descritivo. |
| `image` | `ImageSourcePropType` | - | Fonte da imagem (ex: `{ uri: '...' }` ou `require(...)`). Se definido, tem prioridade sobre o monograma. |
| `name` | `string` | - | Nome do usuário, usado para gerar o monograma se não houver `image` e `displayMonogram=true`. |
| `size` | `number` | `50` | Tamanho do avatar (largura e altura em pixels). |
| `showBorder` | `boolean` | `true` | Se deve exibir a borda ao redor do avatar. |
| `borderWidth` | `number` | `2` | Largura da borda (usado apenas se `showBorder` for `true`). |
| `borderColor` | `string` | `theme.brand.primary.main` | Cor da borda (usado apenas se `showBorder` for `true`). |
| `displayMonogram` | `boolean` | `true` | Se deve exibir as iniciais (`name`) quando não há `image`. |
| `monogramStyle` | `StyleProp<TextStyle>` | - | Estilo personalizado para o texto do monograma. |
| `animatedLoading` | `boolean` | `true` | Se deve mostrar animação de placeholder ao carregar imagem via `image` prop. |
| `imageQuality` | `number` | `0.5` | Qualidade da imagem ao fazer upload via `onUpload` (0 a 1). |
| `onPress` | `(event: GestureResponderEvent) => void` | - | Callback chamado quando o avatar é pressionado. Se definido, tem prioridade sobre a ação de `onUpload`. |
| `onUpload` | `(uri: string) => void` | - | Callback chamado com a URI local quando uma imagem é selecionada pelo usuário. Habilita a funcionalidade de upload ao tocar (se `onPress` não estiver definido). |
| `style` | `StyleProp<ViewStyle>` | - | Estilo aplicado ao container `Touchable` externo. |

### Métodos (via Ref)

Para usar os métodos, obtenha uma referência ao componente `Avatar` e utilize a tipagem `AvatarRef`.

```typescript
import { useRef } from 'react';
import { Avatar, AvatarRef } from '@platformbuilders/fluid-react-native';

const avatarRef = useRef<AvatarRef>(null);

// Chamar métodos:
// avatarRef.current?.openPicker(); 
```

| Método | Descrição |
|--------|-----------|
| `openPicker()` | Abre o seletor de imagens da galeria nativa para o usuário escolher uma foto. |
| `getUploadImage()` | Retorna a URI da imagem que foi selecionada pelo usuário através do `openPicker()`. Retorna `undefined` se nenhuma imagem foi selecionada ou se foi limpa. |
| `clearUploadImage()` | Limpa a referência interna à imagem selecionada pelo usuário via `openPicker()`. O componente voltará a exibir a `image` (prop) ou o monograma. |
| `takePicture()` | (Não implementado internamente no código atual) Tira uma foto usando a câmera. Este método pode existir na ref mas depende de configuração adicional não presente no componente base. |

## Notas de uso

- **Prioridade de Exibição:** O componente exibe a imagem na seguinte ordem: 1. Imagem selecionada via upload (`openPicker`). 2. Imagem fornecida via prop `image`. 3. Monograma (se `name` e `displayMonogram=true`). 4. Avatar padrão (se nenhuma das anteriores).
- **Interatividade:** O componente se torna clicável se `onPress` ou `onUpload` forem definidos. `onPress` tem prioridade sobre `onUpload` para a ação de toque.
- **Monograma:** Gerado automaticamente a partir do `name` usando `@platformbuilders/helpers/formatToMonogram`.
- **Upload:** Utiliza `react-native-image-picker` para selecionar imagens da galeria.
- **Ref:** Use `AvatarRef` para tipar sua referência ao acessar métodos.
- **Imagem Padrão:** Uma imagem placeholder é usada internamente se nenhuma outra fonte for aplicável.
- **Estilo:** A prop `style` afeta o container `Touchable`, enquanto `monogramStyle` afeta apenas o texto do monograma. 