---
sidebar_position: 1
---

# Sistema de Temas

O sistema de temas é um dos pilares fundamentais do Fluid React Native, permitindo a personalização consistente de todos os componentes da biblioteca.

## Conceitos Básicos

O sistema de temas do Fluid React Native é baseado em tokens de design, que são valores reutilizáveis que representam as propriedades visuais da interface do usuário, como cores, tipografia, espaçamento, etc.

### Design Tokens

Os tokens de design são organizados em categorias:

- **Cores**: Paleta de cores primárias, secundárias, neutras e semânticas
- **Tipografia**: Famílias de fontes, tamanhos, pesos e estilos
- **Espaçamento**: Sistema de espaçamento consistente
- **Bordas**: Raios de borda e estilos
- **Sombras**: Elevações e sombras
- **Opacidade**: Valores de transparência

## Estrutura do Tema

O tema do Fluid React Native é estruturado da seguinte forma:

```typescript
type FluidTheme = {
  // Cores da marca
  brand: {
    primary: ColorSet;
    secondary: ColorSet;
    accent: ColorSet;
    // Cores semânticas
    success: ColorSet;
    warning: ColorSet;
    danger: ColorSet;
    info: ColorSet;
  };
  // Sistema de tipografia
  typography: {
    fontFamily: FontFamilySet;
    fontSize: FontSizeSet;
    fontWeight: FontWeightSet;
    lineHeight: LineHeightSet;
  };
  // Sistema de espaçamento
  spacing: SpacingSet;
  // Bordas
  borderRadius: BorderRadiusSet;
  // Sombras
  shadow: ShadowSet;
  // Opacidade
  opacity: OpacitySet;
  // Configurações específicas de componentes
  button: ButtonTheme;
  input: InputTheme;
  // ... outros componentes
};
```

## Uso do Tema

### Configuração Básica

Para usar o tema do Fluid React Native, você precisa envolver sua aplicação com o `ThemeProvider` do styled-components:

```tsx
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { theme } from '@platformbuilders/fluid-react-native';

const App = () => (
  <ThemeProvider theme={theme}>{/* Sua aplicação aqui */}</ThemeProvider>
);

export default App;
```

### Acessando o Tema em Componentes

Você pode acessar o tema em seus componentes de várias maneiras:

#### Em Componentes Estilizados

```tsx
import styled from 'styled-components/native';
import { getTheme } from '@platformbuilders/fluid-react-native';

const StyledText = styled.Text`
  font-family: ${getTheme('typography.fontFamily.regular')};
  font-size: ${getTheme('typography.fontSize.md')};
  color: ${getTheme('brand.primary.main')};
  margin: ${getTheme('spacing.md')};
`;
```

#### Usando o Hook useTheme

```tsx
import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from 'styled-components/native';

const MyComponent = () => {
  const theme = useTheme();

  return (
    <View style={{ padding: theme.spacing.md }}>
      <Text style={{ color: theme.brand.primary.main }}>
        Texto com cor primária
      </Text>
    </View>
  );
};
```

## Personalizando o Tema

Você pode personalizar o tema para atender às necessidades específicas do seu projeto:

```tsx
import { ThemeProvider } from 'styled-components/native';
import { theme as fluidTheme } from '@platformbuilders/fluid-react-native';

// Personalize o tema
const customTheme = {
  ...fluidTheme,
  brand: {
    ...fluidTheme.brand,
    primary: {
      main: '#0066CC',
      contrast: '#FFFFFF',
    },
    secondary: {
      main: '#FF9900',
      contrast: '#000000',
    },
  },
  typography: {
    ...fluidTheme.typography,
    fontFamily: {
      ...fluidTheme.typography.fontFamily,
      regular: 'Roboto-Regular',
      bold: 'Roboto-Bold',
    },
  },
  // Outras personalizações...
};

const App = () => (
  <ThemeProvider theme={customTheme}>{/* Sua aplicação aqui */}</ThemeProvider>
);
```

## Temas Claros e Escuros

O Fluid React Native suporta temas claros e escuros. Você pode alternar entre eles da seguinte forma:

```tsx
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components/native';
import {
  theme as lightTheme,
  darkTheme,
} from '@platformbuilders/fluid-react-native';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = isDarkMode ? darkTheme : lightTheme;

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <ThemeProvider theme={theme}>
      {/* Sua aplicação aqui */}
      <Button title="Alternar Tema" onPress={toggleTheme} />
    </ThemeProvider>
  );
};
```

## Próximos Passos

- Explore os [Tokens de Design](/docs/theme/tokens) disponíveis
- Aprenda como [Personalizar o Tema](/docs/theme/customization) para seu projeto
