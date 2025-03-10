---
sidebar_position: 2
---

# Theming

O sistema de temas é um dos recursos mais poderosos do Fluid React Native, permitindo que você personalize a aparência visual de toda a sua aplicação de forma consistente.

## Conceitos Básicos

O sistema de temas do Fluid React Native é baseado em tokens de design, que são valores reutilizáveis que representam as propriedades visuais da interface do usuário.

### Design Tokens

Os tokens de design são organizados em categorias:

- **Cores**: Paleta de cores primárias, secundárias, neutras e semânticas
- **Tipografia**: Famílias de fontes, tamanhos, pesos e estilos
- **Espaçamento**: Sistema de espaçamento consistente
- **Bordas**: Raios de borda e estilos
- **Sombras**: Elevações e sombras
- **Opacidade**: Valores de transparência

## Configuração Básica

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

## Temas Claros e Escuros

O Fluid React Native suporta temas claros e escuros. Você pode alternar entre eles da seguinte forma:

```tsx
import React, { useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import {
  theme as lightTheme,
  darkTheme,
} from '@platformbuilders/fluid-react-native';

const App = () => {
  // Detecta o tema do sistema
  const colorScheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(colorScheme === 'dark');

  // Atualiza o tema quando o tema do sistema muda
  useEffect(() => {
    setIsDarkMode(colorScheme === 'dark');
  }, [colorScheme]);

  // Permite alternar o tema manualmente
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  // Seleciona o tema apropriado
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      {/* Sua aplicação aqui */}
      <Button title="Alternar Tema" onPress={toggleTheme} />
    </ThemeProvider>
  );
};
```

## Acessando o Tema em Componentes

Você pode acessar o tema em seus componentes de várias maneiras:

### Em Componentes Estilizados

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

### Usando o Hook useTheme

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

## Criando Temas Personalizados

Você pode criar temas personalizados para diferentes partes da sua aplicação ou para diferentes marcas:

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
};

// themes/product-theme.ts
import { theme as fluidTheme } from '@platformbuilders/fluid-react-native';

export const productTheme = {
  ...fluidTheme,
  brand: {
    ...fluidTheme.brand,
    primary: {
      main: '#00CC66', // Verde do produto
      light: '#4DDBAA',
      dark: '#008F47',
      contrast: '#FFFFFF',
    },
    secondary: {
      main: '#9900CC', // Roxo do produto
      light: '#B84DE6',
      dark: '#6B0099',
      contrast: '#FFFFFF',
    },
  },
};
```

## Temas Dinâmicos

Você pode implementar temas dinâmicos que podem ser alterados pelo usuário:

```tsx
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { theme as defaultTheme } from '@platformbuilders/fluid-react-native';
import { blueTheme, greenTheme, purpleTheme } from './themes';

const THEME_STORAGE_KEY = '@app_theme';

const App = () => {
  const [currentTheme, setCurrentTheme] = useState(defaultTheme);

  // Carrega o tema salvo
  useEffect(() => {
    const loadTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem(THEME_STORAGE_KEY);
        if (savedTheme) {
          switch (savedTheme) {
            case 'blue':
              setCurrentTheme(blueTheme);
              break;
            case 'green':
              setCurrentTheme(greenTheme);
              break;
            case 'purple':
              setCurrentTheme(purpleTheme);
              break;
            default:
              setCurrentTheme(defaultTheme);
          }
        }
      } catch (error) {
        console.error('Erro ao carregar tema:', error);
      }
    };

    loadTheme();
  }, []);

  // Altera o tema
  const changeTheme = async (themeName) => {
    try {
      await AsyncStorage.setItem(THEME_STORAGE_KEY, themeName);

      switch (themeName) {
        case 'blue':
          setCurrentTheme(blueTheme);
          break;
        case 'green':
          setCurrentTheme(greenTheme);
          break;
        case 'purple':
          setCurrentTheme(purpleTheme);
          break;
        default:
          setCurrentTheme(defaultTheme);
      }
    } catch (error) {
      console.error('Erro ao salvar tema:', error);
    }
  };

  return (
    <ThemeProvider theme={currentTheme}>
      {/* Sua aplicação aqui */}
      <ThemeSelector onSelectTheme={changeTheme} />
    </ThemeProvider>
  );
};

// Componente seletor de tema
const ThemeSelector = ({ onSelectTheme }) => (
  <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
    <Button title="Azul" onPress={() => onSelectTheme('blue')} />
    <Button title="Verde" onPress={() => onSelectTheme('green')} />
    <Button title="Roxo" onPress={() => onSelectTheme('purple')} />
    <Button title="Padrão" onPress={() => onSelectTheme('default')} />
  </View>
);
```

## Melhores Práticas

Ao trabalhar com temas no Fluid React Native, siga estas melhores práticas:

1. **Use tokens de design**: Evite valores hardcoded e use sempre os tokens de design.
2. **Mantenha a consistência**: Certifique-se de que suas personalizações sejam consistentes em toda a aplicação.
3. **Considere a acessibilidade**: Certifique-se de que suas cores tenham contraste suficiente para usuários com deficiência visual.
4. **Teste em diferentes dispositivos**: Verifique se seu tema funciona bem em diferentes tamanhos de tela e densidades de pixel.
5. **Documente seu tema**: Mantenha uma documentação clara das personalizações feitas no tema.

## Exemplo Completo

Aqui está um exemplo completo de implementação de temas:

```tsx
import React, { useState, useEffect } from 'react';
import { View, StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  theme as defaultTheme,
  Button,
  Typography,
} from '@platformbuilders/fluid-react-native';

// Temas personalizados
const blueTheme = {
  ...defaultTheme,
  brand: {
    ...defaultTheme.brand,
    primary: {
      main: '#0066CC',
      light: '#4D94CC',
      dark: '#004C99',
      contrast: '#FFFFFF',
    },
  },
};

const greenTheme = {
  ...defaultTheme,
  brand: {
    ...defaultTheme.brand,
    primary: {
      main: '#00CC66',
      light: '#4DDBAA',
      dark: '#008F47',
      contrast: '#FFFFFF',
    },
  },
};

const THEME_STORAGE_KEY = '@app_theme';

const App = () => {
  const [currentTheme, setCurrentTheme] = useState(defaultTheme);

  // Carrega o tema salvo
  useEffect(() => {
    const loadTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem(THEME_STORAGE_KEY);
        if (savedTheme === 'green') {
          setCurrentTheme(greenTheme);
        } else if (savedTheme === 'blue') {
          setCurrentTheme(blueTheme);
        }
      } catch (error) {
        console.error('Erro ao carregar tema:', error);
      }
    };

    loadTheme();
  }, []);

  // Altera o tema
  const changeTheme = async (themeName) => {
    try {
      await AsyncStorage.setItem(THEME_STORAGE_KEY, themeName);

      if (themeName === 'green') {
        setCurrentTheme(greenTheme);
      } else if (themeName === 'blue') {
        setCurrentTheme(blueTheme);
      } else {
        setCurrentTheme(defaultTheme);
      }
    } catch (error) {
      console.error('Erro ao salvar tema:', error);
    }
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <StatusBar
        backgroundColor={currentTheme.brand.primary.main}
        barStyle="light-content"
      />
      <View style={{ flex: 1, padding: 20 }}>
        <Typography
          variant="h1"
          color={currentTheme.brand.primary.main}
          textAlign="center"
          marginBottom="20px"
        >
          Seletor de Tema
        </Typography>

        <Button
          title="Tema Azul"
          variant="filled"
          colorVariant="primary"
          onPress={() => changeTheme('blue')}
          marginBottom="10px"
        />

        <Button
          title="Tema Verde"
          variant="filled"
          colorVariant="primary"
          onPress={() => changeTheme('green')}
          marginBottom="10px"
        />

        <Button
          title="Tema Padrão"
          variant="filled"
          colorVariant="primary"
          onPress={() => changeTheme('default')}
        />
      </View>
    </ThemeProvider>
  );
};

export default App;
```
