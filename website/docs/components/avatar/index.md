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
  size={50}
/>
```

## Exemplos

### Com Imagem

```tsx
<Avatar 
  accessibility="avatar-usuario"
  image="https://exemplo.com/avatar.jpg"
  size={60}
/>
```

### Com Monograma (Iniciais)

Quando não há imagem disponível, o Avatar pode exibir as iniciais do nome do usuário:

```tsx
<Avatar 
  accessibility="avatar-usuario"
  name="John Doe"
  size={60}
  displayMonogram
/>
```

### Com Upload de Imagem

```tsx
<Avatar 
  accessibility="avatar-usuario"
  size={80}
  onUpload={(uri) => {
    console.log('Imagem carregada:', uri);
    // Salvar a URI da imagem no estado ou enviar para o servidor
  }}
/>
```

### Com Estilo Personalizado

```tsx
<Avatar 
  accessibility="avatar-usuario"
  size={70}
  showBorder
  borderWidth={3}
  borderColor="#2ecc71"
  style={{ marginBottom: 16 }}
  monogramStyle={{ color: '#ffffff', fontWeight: 'bold' }}
/>
```

### Com Referência para Controle

```tsx
import React, { useRef } from 'react';
import { Button, View } from 'react-native';
import { Avatar } from '@platformbuilders/fluid-react-native';

const ProfileScreen = () => {
  const avatarRef = useRef(null);

  const handleSelectImage = () => {
    // Abre o seletor de imagens
    avatarRef.current.openPicker();
  };

  const handleClearImage = () => {
    // Limpa a imagem atual
    avatarRef.current.clearUploadImage();
  };

  return (
    <View>
      <Avatar 
        ref={avatarRef}
        accessibility="perfil-avatar"
        size={100}
        onUpload={(uri) => console.log('Imagem carregada:', uri)}
      />
      
      <Button title="Selecionar imagem" onPress={handleSelectImage} />
      <Button title="Remover imagem" onPress={handleClearImage} />
    </View>
  );
};
```

## API

### Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `accessibility` | `string` | `'Upload de Avatar'` | Identificador de acessibilidade (obrigatório) |
| `id` | `string` | - | ID opcional para o componente |
| `accessibilityLabel` | `string` | - | Rótulo de acessibilidade |
| `image` | `ImageSource` | - | Fonte da imagem para o avatar |
| `name` | `string` | - | Nome do usuário (usado para gerar monograma) |
| `size` | `number` | `50` | Tamanho do avatar (largura e altura) |
| `showBorder` | `boolean` | `true` | Se deve exibir borda ao redor do avatar |
| `borderWidth` | `number` | `2` | Largura da borda |
| `borderColor` | `string` | - | Cor da borda (usa a cor primária do tema se não especificado) |
| `displayMonogram` | `boolean` | `true` | Se deve exibir as iniciais quando não há imagem |
| `monogramStyle` | `StyleProp<TextStyle>` | - | Estilo personalizado para o monograma |
| `animatedLoading` | `boolean` | `true` | Se deve mostrar animação de carregamento |
| `imageQuality` | `PhotoQuality` | `0.5` | Qualidade da imagem ao fazer upload (0 a 1) |
| `onPress` | `() => void` | - | Callback para quando o avatar é pressionado |
| `onUpload` | `(uri: string) => any` | - | Callback para quando uma imagem é carregada |
| `style` | `StyleProp<ViewStyle>` | - | Estilo do componente |

### Métodos (via Ref)

| Método | Descrição |
|--------|-----------|
| `getUploadImage()` | Retorna a URI da imagem atualmente carregada |
| `clearUploadImage()` | Limpa a imagem atual |
| `takePicture()` | Tira uma foto usando a câmera (quando disponível) |
| `openPicker()` | Abre o seletor de imagens nativo |

## Notas de uso

- Quando `name` e `displayMonogram` são fornecidos, o componente exibirá as iniciais do nome se não houver imagem
- O monograma é gerado automaticamente a partir do nome usando a função `formatToMonogram`
- O componente usa `react-native-image-picker` para a funcionalidade de upload
- Quando `onUpload` é fornecido, tocar no avatar abrirá o seletor de imagens
- Para controle programático, use uma referência (ref) para acessar os métodos do componente 