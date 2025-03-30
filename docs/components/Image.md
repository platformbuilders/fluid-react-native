# Image

O componente Image fornece uma maneira consistente de exibir imagens em sua aplicação, com suporte a carregamento de imagens, placeholders animados e manipulação adequada de diferentes fontes de imagem.

## Importação

```jsx
import { Image } from '@platformbuilders/fluid-react-native';
```

## Uso Básico

```jsx
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

## Variações

### Fontes de Imagem

O componente Image suporta diferentes tipos de fontes de imagem:

```jsx
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

Por padrão, o componente exibe um placeholder animado enquanto a imagem está sendo carregada:

```jsx
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

Você pode personalizar as cores da animação do placeholder:

```jsx
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

// Combinando ambas as personalizações
<Image 
  source={{ uri: 'https://exemplo.com/imagem.jpg' }}
  accessibility="Imagem totalmente personalizada"
  animationColor="#FF0000"
  animationContainerColor="#EFEFEF"
/>
```

### Modo de Redimensionamento

Você pode controlar como a imagem é redimensionada dentro de seu container:

```jsx
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

Você pode personalizar tanto o estilo do container quanto da imagem em si:

```jsx
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

## Manipulação de Eventos de Carregamento

O componente Image gerencia automaticamente os estados de carregamento:

1. Exibe um placeholder animado quando o carregamento inicia
2. Remove o placeholder quando a imagem é carregada com sucesso

Este comportamento é interno ao componente e não requer manipulação adicional.

## Acessibilidade

O componente Image implementa recursos de acessibilidade para melhorar a experiência de usuários com deficiências:

- Utiliza `accessibilityLabel` para descrever a imagem para leitores de tela
- Fornece descrições adequadas para conteúdo visual

### Exemplo com Acessibilidade

```jsx
<Image
  source={{ uri: 'https://exemplo.com/perfil.jpg' }}
  accessibility="Foto de perfil do usuário João Silva"
/>
```

### Boas Práticas de Acessibilidade

1. **Forneça descrições detalhadas**:
   - Descreva o conteúdo e o propósito da imagem, não apenas o que ela é
   - Exemplo: "Foto de perfil do usuário João Silva" em vez de "Foto de perfil"

2. **Imagens decorativas**:
   - Para imagens puramente decorativas, considere não usar o componente Image
   - Ou forneça uma descrição que indique que a imagem é decorativa

3. **Contraste**:
   - Garanta que o contraste entre a imagem e o fundo seja adequado
   - Considere adicionar bordas ou sombras para imagens com fundo transparente

## TestIDs

O componente Image gera TestIDs automaticamente seguindo a hierarquia:

1. Usa `testID` se fornecido explicitamente
2. Usa `id` se fornecido e `testID` não estiver presente

Este comportamento facilita a implementação de testes automatizados.

## Props

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

## Tipos

### ImageSource

```typescript
import { ImageSourcePropType } from 'react-native';
import { FastImageProps } from 'react-native-fast-image';

type ImageSource = FastImageProps['source'] | ImageSourcePropType;
```

### ResizeMode

```typescript
import FastImage from 'react-native-fast-image';

// Valores possíveis
FastImage.resizeMode.cover    // Equivalente a 'cover'
FastImage.resizeMode.contain  // Equivalente a 'contain'
FastImage.resizeMode.stretch  // Equivalente a 'stretch'
FastImage.resizeMode.center   // Equivalente a 'center'
```

## Exemplo Completo

```jsx
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
      
      <Typography variant="subtitle" style={styles.sectionTitle}>
        Exemplos de Estilo
      </Typography>
      
      <View style={styles.examplesRow}>
        <View style={styles.exampleItem}>
          <Image
            source={{ uri: imageUrls[0] }}
            accessibility="Imagem circular"
            style={styles.circleImage}
          />
          <Typography variant="caption">Circular</Typography>
        </View>
        
        <View style={styles.exampleItem}>
          <Image
            source={{ uri: imageUrls[1] }}
            accessibility="Imagem com borda"
            style={styles.borderedImage}
          />
          <Typography variant="caption">Com Borda</Typography>
        </View>
        
        <View style={styles.exampleItem}>
          <Image
            source={{ uri: imageUrls[2] }}
            accessibility="Imagem com sombra"
            containerStyle={styles.shadowContainer}
            style={styles.shadowImage}
          />
          <Typography variant="caption">Com Sombra</Typography>
        </View>
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
  },
  sectionTitle: {
    marginBottom: 16,
  },
  examplesRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 32,
  },
  exampleItem: {
    alignItems: 'center',
  },
  circleImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
  },
  borderedImage: {
    width: 100,
    height: 100,
    borderWidth: 3,
    borderColor: '#3498db',
    marginBottom: 8,
  },
  shadowContainer: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: '#FFF',
    borderRadius: 8,
  },
  shadowImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
});

export default ImageExample; 