# Avatar

O componente Avatar exibe uma imagem de perfil do usuário, com suporte para carregamento de imagens da galeria, monograma quando não há imagem, e várias opções de personalização.

## Importação

```jsx
import { Avatar } from '@platformbuilders/fluid-react-native';
```

## Uso Básico

```jsx
<Avatar 
  accessibility="foto-perfil"
  size={80}
  name="João Silva"
/>
```

## Variações

### Com Imagem

```jsx
// Imagem externa
<Avatar 
  accessibility="avatar-usuario" 
  image={{ uri: 'https://example.com/avatar.jpg' }}
  size={60}
/>

// Imagem local
<Avatar 
  accessibility="avatar-usuario" 
  image={require('./assets/avatar.png')}
  size={60}
/>
```

### Com Monograma (Iniciais)

Quando não há imagem definida, o Avatar pode exibir um monograma com as iniciais do nome:

```jsx
<Avatar 
  accessibility="avatar-iniciais"
  name="Maria Oliveira"
  size={80}
/>
```

### Com Upload de Imagem

```jsx
const handleUpload = (imageUri) => {
  console.log('Imagem carregada:', imageUri);
  // Salvar a imagem ou enviar para o servidor
};

<Avatar 
  accessibility="avatar-upload"
  name="Pedro Santos"
  size={100}
  onUpload={handleUpload}
/>
```

### Customizações Visuais

```jsx
// Personalização de borda
<Avatar 
  accessibility="avatar-customizado"
  name="Ana Souza"
  size={70}
  showBorder={true}
  borderWidth={3}
  borderColor="#FF5722"
/>

// Personalização do monograma
<Avatar 
  accessibility="avatar-monograma-customizado"
  name="Carlos Ferreira"
  size={80}
  monogramStyle={{ 
    backgroundColor: '#4CAF50',
    color: '#FFFFFF'
  }}
/>
```

## Métodos e Referências

O componente Avatar suporta o uso de referências (ref) para acessar métodos internos:

```jsx
import React, { useRef } from 'react';
import { Button, Avatar } from '@platformbuilders/fluid-react-native';

const ProfileScreen = () => {
  const avatarRef = useRef(null);
  
  const handleUploadPress = () => {
    // Abre o seletor de imagens
    avatarRef.current.openPicker();
  };
  
  const handleClearPress = () => {
    // Limpa a imagem carregada
    avatarRef.current.clearUploadImage();
  };
  
  return (
    <>
      <Avatar 
        ref={avatarRef}
        accessibility="foto-perfil"
        size={100}
        name="José Silva"
        onUpload={(uri) => console.log(uri)}
      />
      
      <Button onPress={handleUploadPress}>
        Selecionar Imagem
      </Button>
      
      <Button onPress={handleClearPress}>
        Limpar Imagem
      </Button>
    </>
  );
};
```

### Métodos Disponíveis via Ref

- `openPicker()`: Abre o seletor de imagens da galeria
- `getUploadImage()`: Retorna a URI da imagem atualmente carregada
- `clearUploadImage()`: Limpa a imagem carregada
- `takePicture()`: Se configurado com uma câmera, captura uma foto

## Acessibilidade

O componente Avatar implementa as seguintes propriedades de acessibilidade:

- `accessibilityLabel`: Descrição do avatar para leitores de tela
- `accessibilityRole`: Definido automaticamente como "image" ou "button" (quando interativo)
- `accessibilityState`: Informa o estado "disabled" quando apropriado

### Exemplo com Acessibilidade Personalizada

```jsx
<Avatar 
  accessibility="avatar-perfil"
  accessibilityLabel="Foto de perfil de João Silva"
  name="João Silva"
  size={80}
/>
```

### Boas Práticas de Acessibilidade

1. **Labels descritivos**:
   - Use descrições claras e específicas
   - Inclua o nome da pessoa quando relevante

2. **Área de toque adequada**:
   - Use um tamanho mínimo de 44x44dp para avatares interativos
   - Considere tamanhos maiores para melhor usabilidade

## Configuração de Testes

O componente Avatar tem um threshold personalizado de cobertura de testes devido à sua complexidade e interações com APIs nativas:

- Threshold: 80% para statements, branches, functions e 80% para lines
- Linhas complexas: interações com a câmera e a galeria de imagens

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `id` | string | - | ID do componente |
| `accessibility` | string | 'Upload de Avatar' | ID para acessibilidade |
| `accessibilityLabel` | string | valor de `accessibility` | Descrição do avatar para leitores de tela |
| `image` | ImageSourcePropType | - | Fonte da imagem (URI ou recurso local) |
| `animatedLoading` | boolean | true | Se deve mostrar animação de carregamento |
| `size` | number | 50 | Tamanho do avatar em pixels |
| `imageQuality` | number | 0.5 | Qualidade da imagem ao fazer upload (0-1) |
| `borderWidth` | number | 2 | Largura da borda |
| `showBorder` | boolean | true | Se deve mostrar borda |
| `borderColor` | string | - | Cor da borda (usa a cor primária do tema se não especificada) |
| `onPress` | function | - | Função chamada ao pressionar o avatar |
| `onUpload` | function | - | Função chamada quando uma imagem é carregada pelo seletor |
| `displayMonogram` | boolean | true | Se deve mostrar o monograma quando não há imagem |
| `name` | string | - | Nome usado para gerar o monograma |
| `monogramStyle` | StyleProp<TextStyle> | - | Estilo personalizado para o monograma |

## Exemplo Completo

```jsx
import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Avatar, Typography } from '@platformbuilders/fluid-react-native';

const ProfileScreen = () => {
  const [profileImage, setProfileImage] = useState(null);

  const handleImageUpload = (imageUri) => {
    setProfileImage({ uri: imageUri });
    // Salvar no backend ou estado global
  };

  return (
    <View style={styles.container}>
      <Typography variant="h1">Perfil</Typography>
      
      <Avatar 
        accessibility="avatar-perfil"
        accessibilityLabel="Sua foto de perfil"
        image={profileImage}
        size={120}
        name="Seu Nome"
        onUpload={handleImageUpload}
        showBorder={true}
        borderWidth={3}
        borderColor="#2196F3"
      />
      
      <Typography variant="body">
        Toque no avatar para selecionar uma imagem
      </Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});

export default ProfileScreen;
``` 