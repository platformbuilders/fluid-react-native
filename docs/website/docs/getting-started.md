---
sidebar_position: 2
---

# Começando com Fluid React Native

Este guia irá ajudá-lo a começar a usar o Fluid React Native em seu projeto.

## Pré-requisitos

Antes de começar, certifique-se de que você tem:

- React Native (0.65.0 ou superior)
- React (17.0.0 ou superior)
- Node.js (14.0.0 ou superior)
- Yarn ou npm

## Instalação

Instale o pacote Fluid React Native e suas dependências:

```bash
# Usando npm
npm install @platformbuilders/fluid-react-native

# Usando yarn
yarn add @platformbuilders/fluid-react-native
```

### Dependências de Pares

O Fluid React Native tem algumas dependências de pares que você pode precisar instalar:

```bash
yarn add @platformbuilders/helpers@0.11.3 @platformbuilders/theme-toolkit@0.3.0 formik@2.4.6 lodash@4.17.21 lottie-react-native@7.1.0 react-native-camera@4.2.1 react-native-fast-image@8.6.3 react-native-svg@15.8.0 react-native-vector-icons@10.2.0 styled-components@5.3.11
```

## Configuração

### 1. Configurar o ThemeProvider

Envolva sua aplicação com o `ThemeProvider` do styled-components e passe o tema do Fluid:

```tsx
// App.tsx
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { theme } from '@platformbuilders/fluid-react-native';

const App = () => (
  <ThemeProvider theme={theme}>{/* Sua aplicação aqui */}</ThemeProvider>
);

export default App;
```

### 2. Configurar Fontes e Ícones

O Fluid React Native utiliza o react-native-vector-icons. Siga as instruções de instalação para a sua plataforma:

#### iOS

Adicione o seguinte ao seu `ios/Podfile`:

```ruby
pod 'RNVectorIcons', :path => '../node_modules/react-native-vector-icons'
```

Em seguida, execute:

```bash
cd ios && pod install
```

Adicione as fontes ao seu `Info.plist`:

```xml
<key>UIAppFonts</key>
<array>
  <string>AntDesign.ttf</string>
  <string>Entypo.ttf</string>
  <string>EvilIcons.ttf</string>
  <string>Feather.ttf</string>
  <string>FontAwesome.ttf</string>
  <string>FontAwesome5_Brands.ttf</string>
  <string>FontAwesome5_Regular.ttf</string>
  <string>FontAwesome5_Solid.ttf</string>
  <string>Foundation.ttf</string>
  <string>Ionicons.ttf</string>
  <string>MaterialIcons.ttf</string>
  <string>MaterialCommunityIcons.ttf</string>
  <string>SimpleLineIcons.ttf</string>
  <string>Octicons.ttf</string>
  <string>Zocial.ttf</string>
</array>
```

#### Android

Edite `android/app/build.gradle`:

```gradle
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```

## Uso Básico

Agora você pode começar a usar os componentes do Fluid React Native:

```tsx
import React from 'react';
import { View } from 'react-native';
import { Button, Typography } from '@platformbuilders/fluid-react-native';

const MyComponent = () => (
  <View>
    <Typography variant="h1">Olá, Fluid!</Typography>
    <Button
      title="Clique Aqui"
      variant="filled"
      colorVariant="primary"
      onPress={() => console.log('Botão clicado')}
    />
  </View>
);

export default MyComponent;
```

## Personalizando o Tema

Você pode personalizar o tema para atender às necessidades do seu projeto:

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
  },
};

const App = () => (
  <ThemeProvider theme={customTheme}>{/* Sua aplicação aqui */}</ThemeProvider>
);
```

## Próximos Passos

- Explore a [documentação de componentes](/docs/components) para ver todos os componentes disponíveis
- Aprenda mais sobre o [sistema de temas](/docs/theme) e como personalizá-lo
- Veja exemplos de [customização](/docs/guides/customization) para adaptar os componentes às suas necessidades
