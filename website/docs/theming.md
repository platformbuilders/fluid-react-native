---
sidebar_position: 4
---

# Personalização de Temas

O Fluid oferece um sistema de temas robusto e flexível que permite customizar a aparência de todos os componentes. Este guia mostra como personalizar o tema de acordo com o seu design.

## Sistema de Temas

O sistema de temas do Fluid é baseado em styled-components e fornece um mecanismo para definir valores padrão para cores, espaçamentos, tipografia e muito mais.

### Tema Padrão

O tema padrão inclui diversas categorias de configurações:

- **Cores**: paleta principal, cores de feedback, cores de superfície
- **Tipografia**: famílias de fontes, tamanhos, pesos
- **Espaçamentos**: valores para margens, paddings
- **Elevações**: configurações para sombras
- **Bordas**: raios de borda, larguras
- **Opacidade**: valores predefinidos
- **Transições**: durações e easing functions
- **Breakpoints**: pontos de quebra para layouts responsivos

## Customização do Tema

Você pode personalizar o tema sobreescrevendo parcial ou totalmente o tema padrão.

### Sobreescrita Completa do Tema

Para substituir completamente o tema padrão:

```tsx
import React from 'react';
import { ThemeProvider } from '@platformbuilders/fluid-react-native';

// Seu tema personalizado
const customTheme = {
  colors: {
    primary: '#FF5722',
    secondary: '#2196F3',
    // ... outras cores
  },
  typography: {
    fontFamily: {
      regular: 'Roboto-Regular',
      bold: 'Roboto-Bold',
      // ... outras variantes
    },
    // ... outras configurações de tipografia
  },
  // ... outras categorias
};

const App = () => {
  return (
    <ThemeProvider theme={customTheme}>
      {/* Seu aplicativo aqui */}
    </ThemeProvider>
  );
};

export default App;
```

### Sobreescrita Parcial do Tema

Para modificar apenas partes específicas do tema:

```tsx
import React from 'react';
import { ThemeProvider, defaultTheme } from '@platformbuilders/fluid-react-native';

// Mescla o tema padrão com suas customizações
const customTheme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    primary: '#FF5722',
    secondary: '#2196F3',
  },
};

const App = () => {
  return (
    <ThemeProvider theme={customTheme}>
      {/* Seu aplicativo aqui */}
    </ThemeProvider>
  );
};

export default App;
```

## Estrutura do Tema

O tema do Fluid é baseado na seguinte estrutura:

```tsx
export interface FluidTheme {
  colors: ColorTheme;
  typography: TypographyTheme;
  spacing: SpacingTheme;
  borders: BorderTheme;
  elevations: ElevationTheme;
  opacities: OpacityTheme;
  transitions: TransitionTheme;
  breakpoints: BreakpointTheme;
}
```

### Personalizando Cores

As cores são uma parte fundamental do tema:

```tsx
const customColorTheme = {
  ...defaultTheme.colors,
  // Cores principais
  primary: '#FF5722',
  secondary: '#2196F3',
  tertiary: '#4CAF50',
  
  // Cores de background
  background: {
    primary: '#FFFFFF',
    secondary: '#F5F5F5',
    tertiary: '#E0E0E0',
  },
  
  // Cores de texto
  text: {
    primary: '#212121',
    secondary: '#757575',
    tertiary: '#9E9E9E',
    inverse: '#FFFFFF',
  },
  
  // Cores de feedback
  feedback: {
    success: '#4CAF50',
    warning: '#FFC107',
    error: '#F44336',
    info: '#2196F3',
  },
};
```

### Personalizando Tipografia

Para customizar a tipografia:

```tsx
const customTypographyTheme = {
  ...defaultTheme.typography,
  fontFamily: {
    regular: 'Roboto-Regular',
    bold: 'Roboto-Bold',
    light: 'Roboto-Light',
    medium: 'Roboto-Medium',
  },
  fontSize: {
    xxs: 10,
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
    xxxl: 32,
  },
  lineHeight: {
    xs: 16,
    sm: 20,
    md: 24,
    lg: 28,
    xl: 32,
    xxl: 36,
    xxxl: 40,
  },
};
```

### Personalizando Espaçamentos

Para customizar os espaçamentos:

```tsx
const customSpacingTheme = {
  ...defaultTheme.spacing,
  xxxs: 2,
  xxs: 4,
  xs: 8,
  sm: 12,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 40,
  xxxl: 56,
};
```

### Personalizando Bordas

Para customizar as bordas:

```tsx
const customBorderTheme = {
  ...defaultTheme.borders,
  radius: {
    none: 0,
    xs: 2,
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    pill: 500,
    circular: '50%',
  },
  width: {
    none: 0,
    xs: 1,
    sm: 2,
    md: 3,
    lg: 4,
  },
};
```

### Personalizando Elevações (Sombras)

Para customizar as elevações:

```tsx
const customElevationTheme = {
  ...defaultTheme.elevations,
  none: {
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  xs: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.18,
    shadowRadius: 1,
    elevation: 1,
  },
  // ... outras elevações
};
```

## Usando o Tema em Componentes

### Componentes da Biblioteca

Todos os componentes da biblioteca Fluid usam automaticamente o tema definido.

### Componentes Personalizados

Para usar o tema em seus próprios componentes:

```tsx
import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { useTheme } from '@platformbuilders/fluid-react-native';

// Usando styled-components
const CustomButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.md}px;
  border-radius: ${({ theme }) => theme.borders.radius.md}px;
`;

const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.text.inverse};
  font-family: ${({ theme }) => theme.typography.fontFamily.bold};
  font-size: ${({ theme }) => theme.typography.fontSize.md}px;
`;

// Usando o hook useTheme
const CustomComponent = () => {
  const theme = useTheme();
  
  return (
    <View style={{ 
      backgroundColor: theme.colors.background.primary,
      padding: theme.spacing.md,
      borderRadius: theme.borders.radius.md,
    }}>
      <Text style={{ 
        color: theme.colors.text.primary,
        fontFamily: theme.typography.fontFamily.regular,
        fontSize: theme.typography.fontSize.md,
      }}>
        Texto com tema aplicado
      </Text>
    </View>
  );
};

// Exemplo de uso
const MyScreen = () => {
  return (
    <View>
      <CustomButton>
        <ButtonText>Botão Personalizado</ButtonText>
      </CustomButton>
      <CustomComponent />
    </View>
  );
};

export default MyScreen;
```

## Temas Múltiplos

Para suportar múltiplos temas, como modo claro/escuro:

```tsx
import React, { useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { ThemeProvider, defaultTheme } from '@platformbuilders/fluid-react-native';

// Tema claro (baseado no tema padrão)
const lightTheme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    background: {
      primary: '#FFFFFF',
      secondary: '#F5F5F5',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
    },
  },
};

// Tema escuro
const darkTheme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    background: {
      primary: '#121212',
      secondary: '#1E1E1E',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B0B0B0',
    },
  },
};

const App = () => {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = useState(colorScheme === 'dark' ? darkTheme : lightTheme);
  
  useEffect(() => {
    setTheme(colorScheme === 'dark' ? darkTheme : lightTheme);
  }, [colorScheme]);
  
  return (
    <ThemeProvider theme={theme}>
      {/* Seu aplicativo aqui */}
    </ThemeProvider>
  );
};

export default App;
```

## Melhores Práticas

1. **Mantenha a consistência**: Use os valores do tema para manter a consistência visual em todo o aplicativo.
2. **Evite valores hardcoded**: Sempre use valores do tema em vez de hardcoded para estilos.
3. **Crie abstrações**: Para componentes muito customizados, crie abstrações que ainda utilizem o tema.
4. **Documente personalização**: Mantenha a documentação de suas personalizações para facilitar a manutenção.
5. **Teste temas diferentes**: Certifique-se de testar seu aplicativo com diferentes temas (claro/escuro).

## Dicas Avançadas

### Criar Utilitários para o Tema

Você pode criar utilitários para facilitar o uso do tema:

```tsx
import { useTheme } from '@platformbuilders/fluid-react-native';

export const useStyles = () => {
  const theme = useTheme();
  
  // Retorna um objeto com estilos comuns
  return {
    container: {
      backgroundColor: theme.colors.background.primary,
      padding: theme.spacing.md,
    },
    title: {
      color: theme.colors.text.primary,
      fontFamily: theme.typography.fontFamily.bold,
      fontSize: theme.typography.fontSize.xl,
      marginBottom: theme.spacing.sm,
    },
    // ... outros estilos reutilizáveis
  };
};
```

## Exemplo Completo

Aqui está um exemplo completo de customização de tema:

```tsx
import React from 'react';
import { ThemeProvider, defaultTheme } from '@platformbuilders/fluid-react-native';

// Tema personalizado
const customTheme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    primary: '#6200EE',
    secondary: '#03DAC6',
    background: {
      ...defaultTheme.colors.background,
      primary: '#FFFFFF',
      secondary: '#F5F5F5',
    },
    text: {
      ...defaultTheme.colors.text,
      primary: '#212121',
      secondary: '#757575',
    },
  },
  typography: {
    ...defaultTheme.typography,
    fontFamily: {
      regular: 'Poppins-Regular',
      bold: 'Poppins-Bold',
      light: 'Poppins-Light',
      medium: 'Poppins-Medium',
    },
  },
  spacing: {
    ...defaultTheme.spacing,
    xs: 8,
    sm: 12,
    md: 16,
    lg: 24,
  },
  borders: {
    ...defaultTheme.borders,
    radius: {
      ...defaultTheme.borders.radius,
      sm: 4,
      md: 8,
      lg: 12,
    },
  },
};

const App = () => {
  return (
    <ThemeProvider theme={customTheme}>
      {/* Seu aplicativo aqui */}
    </ThemeProvider>
  );
};

export default App;
```

## Referência Completa do Tema

Consulte a [Documentação de Componentes](/docs/components/button) para obter informações detalhadas sobre como cada componente utiliza o tema. 