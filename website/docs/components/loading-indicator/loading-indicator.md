---
id: loading-indicator
title: LoadingIndicator
sidebar_label: LoadingIndicator
---

import useBaseUrl from '@docusaurus/useBaseUrl';

O componente LoadingIndicator fornece uma maneira consistente de exibir indicadores de carregamento em sua aplicação, com suporte a diferentes variantes, tamanhos e cores.

## Importação

```jsx
import { LoadingIndicator } from '@platformbuilders/fluid-react-native';
```

## Uso Básico

```jsx
import React from 'react';
import { View } from 'react-native';
import { LoadingIndicator } from '@platformbuilders/fluid-react-native';

const BasicLoadingExample = () => (
  <View>
    <LoadingIndicator />
  </View>
);
```

## Variações

### Tamanhos

O componente oferece dois tamanhos principais que podem ser definidos através da propriedade `large`:

```jsx
// Tamanho padrão (pequeno)
<LoadingIndicator />

// Tamanho grande
<LoadingIndicator large />
```

### Variantes

O componente suporta diferentes variantes de animação de carregamento:

```jsx
// Circular (padrão)
<LoadingIndicator variant="circular" />

// Linear
<LoadingIndicator variant="linear" />

// Button (útil dentro de botões)
<LoadingIndicator variant="button" />
```

### Contraste

Para melhor visualização em fundos escuros, você pode usar a propriedade `contrast`:

```jsx
// Versão padrão
<LoadingIndicator />

// Versão com contraste para fundos escuros
<LoadingIndicator contrast />
```

### Combinando Propriedades

Você pode combinar diferentes propriedades para personalizar o indicador de carregamento de acordo com suas necessidades:

```jsx
<LoadingIndicator
  large
  contrast
  variant="linear"
  accessibility="Carregando dados"
/>
```

## Uso em Componentes

### Dentro de Botões

```jsx
import React, { useState } from 'react';
import { Button, LoadingIndicator } from '@platformbuilders/fluid-react-native';

const LoadingButtonExample = () => {
  const [isLoading, setIsLoading] = useState(false);
  
  const handlePress = () => {
    setIsLoading(true);
    // Simula uma operação assíncrona
    setTimeout(() => setIsLoading(false), 2000);
  };
  
  return (
    <Button
      title={isLoading ? '' : 'Salvar'}
      onPress={handlePress}
      disabled={isLoading}
    >
      {isLoading && <LoadingIndicator variant="button" />}
    </Button>
  );
};
```

### Carregamento de Tela Inteira

```jsx
import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { LoadingIndicator, Typography } from '@platformbuilders/fluid-react-native';

const FullScreenLoadingExample = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simula carregamento de dados
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);
  
  if (isLoading) {
    return (
      <View style={styles.container}>
        <LoadingIndicator large />
        <Typography variant="h4" style={styles.text}>
          Carregando conteúdo...
        </Typography>
      </View>
    );
  }
  
  return (
    <View style={styles.container}>
      <Typography variant="h3">Conteúdo Carregado!</Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 16,
  },
});
```

## Acessibilidade

O componente LoadingIndicator implementa recursos de acessibilidade para melhorar a experiência de usuários com deficiências:

- Utiliza `accessibilityLabel` para descrever o propósito do indicador de carregamento
- Por padrão, utiliza "Aguarde" como rótulo de acessibilidade se nenhum for fornecido

### Exemplo com Acessibilidade Personalizada

```jsx
<LoadingIndicator 
  accessibility="Carregando dados do perfil"
  large
/>
```

### Boas Práticas de Acessibilidade

1. **Forneça contexto específico**:
   - Use labels que indiquem o que está sendo carregado (ex: "Carregando lista de produtos")
   - Evite descrições genéricas como "Carregando" ou "Aguarde"

2. **Combine com feedback textual**:
   - Quando possível, adicione texto explicativo junto ao indicador de carregamento
   - Isso ajuda usuários a entender o que está acontecendo, independente de poderem ver o indicador visual

3. **Tempo de carregamento**:
   - Se possível, forneça uma estimativa de tempo ou progresso para operações longas
   - Considere usar um indicador de progresso determinado para operações de longa duração

## API

### Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `large` | boolean | `false` | Define se o indicador de carregamento deve ser exibido em tamanho grande |
| `contrast` | boolean | `false` | Define se o indicador deve usar cores de contraste (útil para fundos escuros) |
| `variant` | 'circular' \| 'button' \| 'linear' | `'circular'` | Define o tipo de animação de carregamento |
| `accessibility` | string | `'Aguarde'` | Texto para acessibilidade, lido por leitores de tela |

## Exemplo Completo

```jsx
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { LoadingIndicator, Button, Typography } from '@platformbuilders/fluid-react-native';

const LoadingExample = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [variant, setVariant] = useState('circular');
  const [large, setLarge] = useState(false);
  const [contrast, setContrast] = useState(false);
  
  const toggleLoading = () => {
    setIsLoading(current => !current);
  };
  
  const toggleSize = () => {
    setLarge(current => !current);
  };
  
  const toggleContrast = () => {
    setContrast(current => !current);
  };
  
  const cycleVariant = () => {
    const variants = ['circular', 'button', 'linear'];
    const currentIndex = variants.indexOf(variant);
    const nextIndex = (currentIndex + 1) % variants.length;
    setVariant(variants[nextIndex]);
  };
  
  return (
    <View style={styles.container}>
      <View style={[styles.preview, contrast && styles.darkContainer]}>
        {isLoading && (
          <LoadingIndicator
            large={large}
            contrast={contrast}
            variant={variant}
            accessibility={`Carregando com variante ${variant}`}
          />
        )}
      </View>
      
      <View style={styles.controls}>
        <Button title={isLoading ? 'Parar' : 'Iniciar'} onPress={toggleLoading} />
        <Button title={large ? 'Tamanho Normal' : 'Tamanho Grande'} onPress={toggleSize} />
        <Button title={`Variante: ${variant}`} onPress={cycleVariant} />
        <Button title={contrast ? 'Sem Contraste' : 'Com Contraste'} onPress={toggleContrast} />
      </View>
      
      <Typography variant="p" style={styles.text}>
        {`Configuração atual: ${large ? 'Grande' : 'Normal'}, ${variant}, ${contrast ? 'Com contraste' : 'Sem contraste'}`}
      </Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  preview: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 10,
  },
  darkContainer: {
    backgroundColor: '#333',
  },
  controls: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  text: {
    textAlign: 'center',
  },
});

export default LoadingExample;
``` 