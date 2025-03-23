---
sidebar_position: 2
---

# Começando

Este guia vai te ajudar a começar a usar o Fluid em seu projeto React Native.

## Instalação

Primeiro, instale o pacote usando npm ou yarn:

```bash
# Usando npm
npm install @platformbuilders/fluid-react-native

# Usando yarn
yarn add @platformbuilders/fluid-react-native
```

### Dependências

O Fluid tem algumas dependências de pares (peer dependencies) que você precisará instalar em seu projeto:

```bash
# Usando npm
npm install styled-components react-native-vector-icons react-native-svg

# Usando yarn
yarn add styled-components react-native-vector-icons react-native-svg
```

### Configuração do react-native-vector-icons

Você precisará configurar o react-native-vector-icons em seu projeto. Siga o [guia de instalação oficial](https://github.com/oblador/react-native-vector-icons#installation) para mais detalhes.

#### iOS

Para iOS, você precisará adicionar as seguintes linhas ao seu `ios/Podfile`:

```ruby
pod 'RNVectorIcons', :path => '../node_modules/react-native-vector-icons'
```

Em seguida, execute:

```bash
cd ios && pod install
```

#### Android

Para Android, você precisará adicionar a seguinte linha ao seu `android/app/build.gradle`:

```gradle
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```

## Configuração Básica

Para começar a usar o Fluid, você precisa envolver seu aplicativo com o `ThemeProvider`:

```jsx
import React from 'react';
import { ThemeProvider } from '@platformbuilders/fluid-react-native';

const App = () => {
  return (
    <ThemeProvider>
      {/* Seu aplicativo aqui */}
    </ThemeProvider>
  );
};

export default App;
```

## Exemplo Básico

Aqui está um exemplo simples de como usar alguns componentes do Fluid:

```jsx
import React from 'react';
import { View } from 'react-native';
import { 
  ThemeProvider, 
  Typography, 
  Button, 
  TextInput 
} from '@platformbuilders/fluid-react-native';

const App = () => {
  return (
    <ThemeProvider>
      <View style={{ padding: 20 }}>
        <Typography variant="h1">
          Olá, Fluid!
        </Typography>
        
        <Typography variant="body1" style={{ marginTop: 10 }}>
          Este é um exemplo básico de uso do Fluid.
        </Typography>
        
        <TextInput
          label="Nome"
          placeholder="Digite seu nome"
          style={{ marginTop: 20 }}
        />
        
        <Button
          label="Clique Aqui"
          onPress={() => alert('Botão clicado!')}
          style={{ marginTop: 20 }}
        />
      </View>
    </ThemeProvider>
  );
};

export default App;
```

## Personalizando o Tema

O Fluid permite que você personalize o tema para atender às necessidades do seu projeto. Aqui está um exemplo de como você pode fazer isso:

```jsx
import React from 'react';
import { ThemeProvider, DefaultTheme } from '@platformbuilders/fluid-react-native';

const customTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FF0000', // Vermelho
    secondary: '#00FF00', // Verde
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

## Próximos Passos

Agora que você configurou o Fluid em seu projeto, você pode:

1. Explorar a documentação de componentes disponíveis:
   - [Button](/docs/components/button)
   - [Card](/docs/components/card)
   - [TextInput](/docs/components/text-input)
   - [Checkbox](/docs/components/checkbox)
2. Aprender como [personalizar o tema](/docs/theming) para atender às necessidades do seu projeto
3. Verificar as [melhores práticas](/docs/guides/best-practices) para desenvolver com o Fluid

---

Se você tiver alguma dúvida ou problema, sinta-se à vontade para abrir uma issue no [GitHub](https://github.com/platformbuilders/fluid-react-native/issues). 