---
sidebar_position: 2
---

# Tokens de Design

Os tokens de design são a base do sistema de design Fluid, fornecendo valores consistentes para propriedades visuais em toda a aplicação.

## Cores

### Cores da Marca

```typescript
brand: {
  primary: {
    main: '#0066FF',      // Cor principal
    light: '#4D94FF',     // Versão mais clara
    dark: '#0047B3',      // Versão mais escura
    contrast: '#FFFFFF',  // Cor de contraste (para texto)
  },
  secondary: {
    main: '#FF6600',
    light: '#FF944D',
    dark: '#B34700',
    contrast: '#FFFFFF',
  },
  accent: {
    main: '#00CC99',
    light: '#4DDBBA',
    dark: '#008F6B',
    contrast: '#FFFFFF',
  },
}
```

### Cores Semânticas

```typescript
brand: {
  // ...cores da marca
  success: {
    main: '#00CC66',
    light: '#4DDBAA',
    dark: '#008F47',
    contrast: '#FFFFFF',
  },
  warning: {
    main: '#FFCC00',
    light: '#FFDB4D',
    dark: '#B38F00',
    contrast: '#000000',
  },
  danger: {
    main: '#FF3333',
    light: '#FF7373',
    dark: '#B32424',
    contrast: '#FFFFFF',
  },
  info: {
    main: '#0099FF',
    light: '#4DBAFF',
    dark: '#006BB3',
    contrast: '#FFFFFF',
  },
}
```

### Cores Neutras

```typescript
neutral: {
  black: '#000000',
  white: '#FFFFFF',
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  },
}
```

## Tipografia

### Famílias de Fontes

```typescript
typography: {
  fontFamily: {
    regular: 'System',
    medium: 'System-Medium',
    semiBold: 'System-SemiBold',
    bold: 'System-Bold',
    light: 'System-Light',
    thin: 'System-Thin',
  },
}
```

### Tamanhos de Fonte

```typescript
typography: {
  // ...fontFamily
  fontSize: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '30px',
    '4xl': '36px',
    '5xl': '48px',
    '6xl': '60px',
  },
}
```

### Pesos de Fonte

```typescript
typography: {
  // ...fontFamily, fontSize
  fontWeight: {
    thin: '100',
    extraLight: '200',
    light: '300',
    regular: '400',
    medium: '500',
    semiBold: '600',
    bold: '700',
    extraBold: '800',
    black: '900',
  },
}
```

### Alturas de Linha

```typescript
typography: {
  // ...fontFamily, fontSize, fontWeight
  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },
}
```

## Espaçamento

```typescript
spacing: {
  none: '0',
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '48px',
  '3xl': '64px',
  '4xl': '96px',
  '5xl': '128px',
}
```

## Bordas

### Raios de Borda

```typescript
borderRadius: {
  none: '0',
  xs: '2px',
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  '2xl': '24px',
  full: '9999px',
}
```

### Larguras de Borda

```typescript
borderWidth: {
  none: '0',
  thin: '1px',
  thick: '2px',
  heavy: '4px',
}
```

## Sombras

```typescript
shadow: {
  none: 'none',
  xs: '0 1px 2px rgba(0, 0, 0, 0.05)',
  sm: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px rgba(0, 0, 0, 0.25)',
}
```

## Opacidade

```typescript
opacity: {
  0: '0',
  25: '0.25',
  50: '0.5',
  75: '0.75',
  100: '1',
}
```

## Tokens Específicos de Componentes

Além dos tokens globais, o Fluid React Native também define tokens específicos para componentes, que são usados para estilizar componentes individuais.

### Button

```typescript
button: {
  height: '48px',
  borderRadius: '8px',
  paddingHorizontal: '16px',
  fontSize: '16px',
  fontWeight: '600',
  // Variantes
  filled: {
    backgroundColor: 'brand.primary.main',
    textColor: 'brand.primary.contrast',
  },
  ghost: {
    backgroundColor: 'transparent',
    textColor: 'brand.primary.main',
    borderColor: 'brand.primary.main',
    borderWidth: '1px',
  },
  // ... outras variantes
}
```

### Input

```typescript
input: {
  height: '48px',
  borderRadius: '8px',
  paddingHorizontal: '16px',
  fontSize: '16px',
  backgroundColor: 'neutral.white',
  borderColor: 'neutral.gray.300',
  borderWidth: '1px',
  placeholderColor: 'neutral.gray.400',
  textColor: 'neutral.gray.900',
  // Estados
  focus: {
    borderColor: 'brand.primary.main',
    backgroundColor: 'neutral.white',
  },
  error: {
    borderColor: 'brand.danger.main',
    backgroundColor: 'brand.danger.light',
  },
  disabled: {
    backgroundColor: 'neutral.gray.100',
    borderColor: 'neutral.gray.200',
    textColor: 'neutral.gray.400',
  },
}
```

## Uso dos Tokens

Os tokens de design podem ser acessados em componentes estilizados usando a função `getTheme`:

```tsx
import styled from 'styled-components/native';
import { getTheme } from '@platformbuilders/fluid-react-native';

const Card = styled.View`
  background-color: ${getTheme('neutral.white')};
  border-radius: ${getTheme('borderRadius.md')};
  padding: ${getTheme('spacing.md')};
  margin-bottom: ${getTheme('spacing.sm')};
  shadow: ${getTheme('shadow.md')};
`;

const Title = styled.Text`
  font-family: ${getTheme('typography.fontFamily.bold')};
  font-size: ${getTheme('typography.fontSize.xl')};
  color: ${getTheme('neutral.gray.900')};
  margin-bottom: ${getTheme('spacing.xs')};
`;

const Description = styled.Text`
  font-family: ${getTheme('typography.fontFamily.regular')};
  font-size: ${getTheme('typography.fontSize.md')};
  color: ${getTheme('neutral.gray.600')};
  line-height: ${getTheme('typography.lineHeight.relaxed')};
`;
```

## Personalizando Tokens

Você pode personalizar os tokens de design para atender às necessidades específicas do seu projeto:

```tsx
import { ThemeProvider } from 'styled-components/native';
import { theme as fluidTheme } from '@platformbuilders/fluid-react-native';

const customTheme = {
  ...fluidTheme,
  // Personalize os tokens de cor
  brand: {
    ...fluidTheme.brand,
    primary: {
      main: '#0066CC',
      light: '#4D94CC',
      dark: '#004C99',
      contrast: '#FFFFFF',
    },
  },
  // Personalize os tokens de tipografia
  typography: {
    ...fluidTheme.typography,
    fontFamily: {
      ...fluidTheme.typography.fontFamily,
      regular: 'Roboto-Regular',
      bold: 'Roboto-Bold',
    },
  },
  // Personalize os tokens de espaçamento
  spacing: {
    ...fluidTheme.spacing,
    md: '20px', // Aumentando o espaçamento médio
  },
};

const App = () => (
  <ThemeProvider theme={customTheme}>{/* Sua aplicação aqui */}</ThemeProvider>
);
```
