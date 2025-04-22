---
sidebar_position: 5
---

# Image

O componente Image fornece uma maneira consistente de exibir imagens em sua aplicação, com suporte a carregamento de imagens, placeholders animados e manipulação adequada de diferentes fontes de imagem.

## Importação

```tsx
import { Image } from '@platformbuilders/fluid-react-native';
```

## Exemplo Básico

```tsx
import React from 'react';
import { View } from 'react-native';
import { Image } from '@platformbuilders/fluid-react-native';

const BasicImageExample = () => (
  <View>
    <Image 
      source={{ uri: 'https://exemplo.com/imagem.jpg' }}
      accessibility="Imagem de exemplo"
    />
  </View>
);
```

## Exemplos

### Fontes de Imagem

O componente suporta diferentes tipos de fontes de imagem:

```tsx
// Imagem remota (URI)
<Image 
  source={{ uri: 'https://exemplo.com/imagem.jpg' }}
  accessibility="Imagem remota"
/>

// Imagem local (require)
<Image 
  source={require('../assets/imagem.png')}
  accessibility="Imagem local"
/>

// Imagem do módulo de assets
import { ImageLogo } from '@/assets/images';

<Image 
  source={ImageLogo}
  accessibility="Logo da aplicação"
/>
```

### Placeholder de Carregamento

Por padrão, o componente exibe um placeholder animado durante o carregamento:

```tsx
// Com placeholder (padrão)
<Image 
  source={{ uri: 'https://exemplo.com/imagem.jpg' }}
  accessibility="Imagem com placeholder"
/>

// Sem placeholder
<Image 
  source={{ uri: 'https://exemplo.com/imagem.jpg' }}
  accessibility="Imagem sem placeholder"
  displayPlaceholder={false}
/>
```

### Personalização do Placeholder

```tsx
// Cor da animação personalizada
<Image 
  source={{ uri: 'https://exemplo.com/imagem.jpg' }}
  accessibility="Imagem com animação personalizada"
  animationColor="#FF0000"
/>

// Cor do container da animação personalizada
<Image 
  source={{ uri: 'https://exemplo.com/imagem.jpg' }}
  accessibility="Imagem com container personalizado"
  animationContainerColor="#EFEFEF"
/>
```

### Modo de Redimensionamento

```tsx
import FastImage from 'react-native-fast-image';

// Cobrir o container (padrão)
<Image 
  source={{ uri: 'https://exemplo.com/imagem.jpg' }}
  accessibility="Imagem modo cover"
  resizeMode={FastImage.resizeMode.cover}
/>

// Conter dentro do container
<Image 
  source={{ uri: 'https://exemplo.com/imagem.jpg' }}
  accessibility="Imagem modo contain"
  resizeMode={FastImage.resizeMode.contain}
/>

// Esticar para preencher o container
<Image 
  source={{ uri: 'https://exemplo.com/imagem.jpg' }}
  accessibility="Imagem modo stretch"
  resizeMode={FastImage.resizeMode.stretch}
/>

// Tamanho original da imagem
<Image 
  source={{ uri: 'https://exemplo.com/imagem.jpg' }}
  accessibility="Imagem modo center"
  resizeMode={FastImage.resizeMode.center}
/>
```

### Personalização de Estilo

```tsx
// Estilo do container
<Image 
  source={{ uri: 'https://exemplo.com/imagem.jpg' }}
  accessibility="Imagem com container personalizado"
  containerStyle={{ 
    padding: 10, 
    backgroundColor: '#F5F5F5',
    borderRadius: 8
  }}
/>

// Estilo da imagem
<Image 
  source={{ uri: 'https://exemplo.com/imagem.jpg' }}
  accessibility="Imagem com estilo personalizado"
  style={{ 
    width: 200, 
    height: 200, 
    borderRadius: 100 
  }}
/>
```

## API

### Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `id` | string | - | ID único do componente (opcional) |
| `testID` | string | `id` | ID para testes automatizados |
| `accessibility` | string | - | Descrição de acessibilidade da imagem |
| `source` | ImageSource | - | Fonte da imagem (objeto URI, string ou número) |
| `displayPlaceholder` | boolean | `true` | Define se o placeholder deve ser exibido durante o carregamento |
| `animationColor` | string | - | Cor da animação do placeholder (usa a cor do tema se não especificada) |
| `animationContainerColor` | string | - | Cor de fundo da animação do placeholder (usa a cor do tema se não especificada) |
| `containerStyle` | object/array | - | Estilos personalizados para o container da imagem |
| `style` | object/array | - | Estilos personalizados para a imagem |
| `resizeMode` | ResizeMode | - | Modo de redimensionamento da imagem (cover, contain, stretch, center) |

### Tipos

```tsx
import { ImageSourcePropType } from 'react-native';
import { FastImageProps } from 'react-native-fast-image';

type ImageSource = FastImageProps['source'] | ImageSourcePropType;
```

## Acessibilidade

O componente Image implementa recursos de acessibilidade para melhorar a experiência de usuários com deficiências:

- Utiliza `accessibilityLabel` para descrever a imagem para leitores de tela
- Fornece descrições adequadas para conteúdo visual

### Exemplo com Acessibilidade

```tsx
<Image
  source={{ uri: 'https://exemplo.com/perfil.jpg' }}
  accessibility="Foto de perfil do usuário João Silva"
/>
```

### Boas Práticas

1. **Descrições detalhadas**:
   - Descreva o conteúdo e o propósito da imagem, não apenas o que ela é
   - Exemplo: "Foto de perfil do usuário João Silva" em vez de "Foto de perfil"

2. **Imagens decorativas**:
   - Para imagens puramente decorativas, considere não usar o componente Image
   - Ou forneça uma descrição que indique que a imagem é decorativa

3. **Contraste**:
   - Garanta que o contraste entre a imagem e o fundo seja adequado
   - Considere adicionar bordas ou sombras para imagens com fundo transparente

## Exemplo Completo

```tsx
import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Image, Typography, Button } from '@platformbuilders/fluid-react-native';
import FastImage from 'react-native-fast-image';

const ImageExample = () => {
  // URLs de exemplo para demonstração
  const imageUrls = [
    'https://images.unsplash.com/photo-1508138221679-760a23a2285b?w=500',
    'https://images.unsplash.com/photo-1485550409059-9afb054cada4?w=500',
    'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=500'
  ];
  
  const [currentImage, setCurrentImage] = useState(0);
  const [resizeMode, setResizeMode] = useState(FastImage.resizeMode.cover);
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  
  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % imageUrls.length);
  };
  
  const changeResizeMode = () => {
    const modes = [
      FastImage.resizeMode.cover,
      FastImage.resizeMode.contain,
      FastImage.resizeMode.stretch,
      FastImage.resizeMode.center
    ];
    
    const currentIndex = modes.indexOf(resizeMode);
    const nextIndex = (currentIndex + 1) % modes.length;
    setResizeMode(modes[nextIndex]);
  };
  
  const getResizeModeName = () => {
    switch (resizeMode) {
      case FastImage.resizeMode.cover:
        return 'cover';
      case FastImage.resizeMode.contain:
        return 'contain';
      case FastImage.resizeMode.stretch:
        return 'stretch';
      case FastImage.resizeMode.center:
        return 'center';
      default:
        return 'desconhecido';
    }
  };
  
  const togglePlaceholder = () => {
    setShowPlaceholder((prev) => !prev);
  };
  
  return (
    <ScrollView style={styles.container}>
      <Typography variant="h3" style={styles.title}>
        Exemplos do Componente Image
      </Typography>
      
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: imageUrls[currentImage] }}
          accessibility={`Imagem de paisagem ${currentImage + 1}`}
          style={styles.mainImage}
          resizeMode={resizeMode}
          displayPlaceholder={showPlaceholder}
          containerStyle={styles.imageWrapper}
        />
      </View>
      
      <View style={styles.controls}>
        <Button 
          title="Próxima Imagem" 
          onPress={nextImage}
          containerStyle={styles.button}
        />
        
        <Button 
          title={`Modo: ${getResizeModeName()}`} 
          onPress={changeResizeMode}
          containerStyle={styles.button}
        />
        
        <Button 
          title={showPlaceholder ? 'Ocultar Placeholder' : 'Mostrar Placeholder'} 
          onPress={togglePlaceholder}
          containerStyle={styles.button}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  title: {
    marginBottom: 24,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  imageWrapper: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  mainImage: {
    width: 300,
    height: 200,
  },
  controls: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 32,
  },
  button: {
    margin: 4,
  }
}); 