---
sidebar_position: 3
---

# Customização do Tema

O Fluid React Native foi projetado para ser altamente personalizável, permitindo que você adapte a aparência visual da sua aplicação às necessidades específicas do seu projeto ou marca.

## Estratégias de Customização

Existem várias estratégias para personalizar o tema do Fluid React Native:

1. **Extensão do tema base**: Estender o tema base com suas próprias personalizações
2. **Substituição de tokens específicos**: Substituir apenas os tokens que você deseja alterar
3. **Criação de temas múltiplos**: Criar diferentes temas para diferentes partes da aplicação ou para suportar temas claros e escuros

## Extensão do Tema Base

A maneira mais comum de personalizar o tema é estender o tema base:

```tsx
import { ThemeProvider } from 'styled-components/native';
import { theme as fluidTheme } from '@platformbuilders/fluid-react-native';

// Estenda o tema base
const customTheme = {
  ...fluidTheme,
  // Suas personalizações aqui
};

const App = () => (
  <ThemeProvider theme={customTheme}>{/* Sua aplicação aqui */}</ThemeProvider>
);
```

## Substituição de Tokens Específicos

Você pode substituir apenas os tokens específicos que deseja alterar, mantendo o restante do tema intacto:

```tsx
import { ThemeProvider } from 'styled-components/native';
import { theme as fluidTheme } from '@platformbuilders/fluid-react-native';

// Substitua apenas os tokens específicos
const customTheme = {
  ...fluidTheme,
  brand: {
    ...fluidTheme.brand,
    primary: {
      main: '#0066CC',
      light: '#4D94CC',
      dark: '#004C99',
      contrast: '#FFFFFF',
    },
  },
};

const App = () => (
  <ThemeProvider theme={customTheme}>{/* Sua aplicação aqui */}</ThemeProvider>
);
```

## Personalização de Cores

A personalização das cores é uma das alterações mais comuns:

```tsx
import { ThemeProvider } from 'styled-components/native';
import { theme as fluidTheme } from '@platformbuilders/fluid-react-native';

const customTheme = {
  ...fluidTheme,
  brand: {
    ...fluidTheme.brand,
    // Cores primárias
    primary: {
      main: '#0066CC', // Azul corporativo
      light: '#4D94CC',
      dark: '#004C99',
      contrast: '#FFFFFF',
    },
    // Cores secundárias
    secondary: {
      main: '#FF9900', // Laranja
      light: '#FFAD33',
      dark: '#CC7A00',
      contrast: '#000000',
    },
    // Cores de destaque
    accent: {
      main: '#9900CC', // Roxo
      light: '#B84DE6',
      dark: '#6B0099',
      contrast: '#FFFFFF',
    },
    // Cores semânticas
    success: {
      main: '#00CC66',
      light: '#4DDBAA',
      dark: '#008F47',
      contrast: '#FFFFFF',
    },
    // ... outras cores
  },
};
```

## Personalização de Tipografia

Você pode personalizar a tipografia para usar fontes personalizadas:

```tsx
import { ThemeProvider } from 'styled-components/native';
import { theme as fluidTheme } from '@platformbuilders/fluid-react-native';

const customTheme = {
  ...fluidTheme,
  typography: {
    ...fluidTheme.typography,
    // Famílias de fontes personalizadas
    fontFamily: {
      regular: 'Montserrat-Regular',
      medium: 'Montserrat-Medium',
      semiBold: 'Montserrat-SemiBold',
      bold: 'Montserrat-Bold',
      light: 'Montserrat-Light',
      thin: 'Montserrat-Thin',
    },
    // Tamanhos de fonte personalizados
    fontSize: {
      ...fluidTheme.typography.fontSize,
      md: '18px', // Aumentando o tamanho médio
      lg: '20px',
    },
    // Pesos de fonte personalizados
    fontWeight: {
      ...fluidTheme.typography.fontWeight,
      regular: '400',
      bold: '700',
    },
  },
};
```

:::note Importante
Lembre-se de que, ao personalizar as fontes, você também precisa garantir que essas fontes estejam disponíveis no seu projeto. Consulte a documentação do React Native sobre como [adicionar fontes personalizadas](https://reactnative.dev/docs/text#limited-style-inheritance).
:::

## Personalização de Espaçamento

Você pode personalizar o sistema de espaçamento:

```tsx
import { ThemeProvider } from 'styled-components/native';
import { theme as fluidTheme } from '@platformbuilders/fluid-react-native';

const customTheme = {
  ...fluidTheme,
  spacing: {
    ...fluidTheme.spacing,
    xs: '6px', // Aumentando o espaçamento extra pequeno
    sm: '12px', // Aumentando o espaçamento pequeno
    md: '20px', // Aumentando o espaçamento médio
    lg: '28px', // Aumentando o espaçamento grande
  },
};
```

## Personalização de Componentes Específicos

Você também pode personalizar tokens específicos de componentes:

```tsx
import { ThemeProvider } from 'styled-components/native';
import { theme as fluidTheme } from '@platformbuilders/fluid-react-native';

const customTheme = {
  ...fluidTheme,
  // Personalização do componente Button
  button: {
    ...fluidTheme.button,
    height: '56px', // Botões mais altos
    borderRadius: '28px', // Botões mais arredondados
    paddingHorizontal: '24px', // Mais padding horizontal
    fontSize: '18px', // Texto maior
  },
  // Personalização do componente Input
  input: {
    ...fluidTheme.input,
    height: '56px', // Inputs mais altos
    borderRadius: '8px', // Bordas menos arredondadas
    borderWidth: '2px', // Bordas mais grossas
  },
};
```

## Criação de Temas Múltiplos

Você pode criar diferentes temas para diferentes partes da aplicação ou para suportar temas claros e escuros:

```tsx
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { theme as lightThemeBase } from '@platformbuilders/fluid-react-native';

// Tema claro personalizado
const lightTheme = {
  ...lightThemeBase,
  brand: {
    ...lightThemeBase.brand,
    primary: {
      main: '#0066CC',
      light: '#4D94CC',
      dark: '#004C99',
      contrast: '#FFFFFF',
    },
  },
};

// Tema escuro personalizado
const darkTheme = {
  ...lightThemeBase,
  brand: {
    ...lightThemeBase.brand,
    primary: {
      main: '#4D94CC',
      light: '#7FB5D9',
      dark: '#004C99',
      contrast: '#000000',
    },
  },
  neutral: {
    black: '#FFFFFF',
    white: '#121212',
    gray: {
      50: '#1E1E1E',
      100: '#2A2A2A',
      200: '#3A3A3A',
      300: '#4A4A4A',
      400: '#6A6A6A',
      500: '#8A8A8A',
      600: '#AAAAAA',
      700: '#CCCCCC',
      800: '#E0E0E0',
      900: '#F0F0F0',
    },
  },
};

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

## Temas Específicos para Projetos

Se você estiver trabalhando em vários projetos que compartilham o Fluid React Native, pode ser útil criar um tema base específico para cada projeto:

```tsx
// themes/corporate-theme.ts
import { theme as fluidTheme } from '@platformbuilders/fluid-react-native';

export const corporateTheme = {
  ...fluidTheme,
  brand: {
    ...fluidTheme.brand,
    primary: {
      main: '#0066CC', // Azul corporativo
      light: '#4D94CC',
      dark: '#004C99',
      contrast: '#FFFFFF',
    },
    secondary: {
      main: '#FF9900', // Laranja corporativo
      light: '#FFAD33',
      dark: '#CC7A00',
      contrast: '#000000',
    },
  },
  typography: {
    ...fluidTheme.typography,
    fontFamily: {
      regular: 'CorporateFont-Regular',
      medium: 'CorporateFont-Medium',
      semiBold: 'CorporateFont-SemiBold',
      bold: 'CorporateFont-Bold',
    },
  },
};
```

Depois, você pode usar esse tema em todos os projetos da sua empresa:

```tsx
import { ThemeProvider } from 'styled-components/native';
import { corporateTheme } from './themes/corporate-theme';

const App = () => (
  <ThemeProvider theme={corporateTheme}>
    {/* Sua aplicação aqui */}
  </ThemeProvider>
);
```

## Melhores Práticas

Ao personalizar o tema do Fluid React Native, siga estas melhores práticas:

1. **Mantenha a consistência**: Certifique-se de que suas personalizações sejam consistentes em toda a aplicação.
2. **Use o sistema de tokens**: Evite valores hardcoded e use sempre o sistema de tokens.
3. **Documente suas personalizações**: Mantenha uma documentação clara das personalizações feitas.
4. **Teste em diferentes dispositivos**: Certifique-se de que suas personalizações funcionem bem em diferentes tamanhos de tela e densidades de pixel.
5. **Considere a acessibilidade**: Certifique-se de que suas personalizações mantenham bons contrastes e legibilidade.

## Exemplo Completo

Aqui está um exemplo completo de personalização do tema:

```tsx
import { ThemeProvider } from 'styled-components/native';
import { theme as fluidTheme } from '@platformbuilders/fluid-react-native';

const customTheme = {
  ...fluidTheme,
  // Cores personalizadas
  brand: {
    ...fluidTheme.brand,
    primary: {
      main: '#0066CC',
      light: '#4D94CC',
      dark: '#004C99',
      contrast: '#FFFFFF',
    },
    secondary: {
      main: '#FF9900',
      light: '#FFAD33',
      dark: '#CC7A00',
      contrast: '#000000',
    },
  },
  // Tipografia personalizada
  typography: {
    ...fluidTheme.typography,
    fontFamily: {
      regular: 'Montserrat-Regular',
      medium: 'Montserrat-Medium',
      semiBold: 'Montserrat-SemiBold',
      bold: 'Montserrat-Bold',
    },
    fontSize: {
      ...fluidTheme.typography.fontSize,
      md: '18px',
    },
  },
  // Espaçamento personalizado
  spacing: {
    ...fluidTheme.spacing,
    md: '20px',
  },
  // Bordas personalizadas
  borderRadius: {
    ...fluidTheme.borderRadius,
    md: '10px',
  },
  // Componentes personalizados
  button: {
    ...fluidTheme.button,
    height: '56px',
    borderRadius: '28px',
  },
  input: {
    ...fluidTheme.input,
    height: '56px',
    borderRadius: '8px',
  },
};

const App = () => (
  <ThemeProvider theme={customTheme}>{/* Sua aplicação aqui */}</ThemeProvider>
);
```
