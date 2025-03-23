---
sidebar_position: 3
---

# Instalação

Este guia fornece instruções detalhadas para instalar o Fluid e configurar seu ambiente de desenvolvimento.

## Pré-requisitos

Antes de instalar o Fluid, certifique-se de que seu projeto atenda aos seguintes requisitos:

- React Native >= 0.63.0
- React >= 16.13.1
- Node.js >= 12

## Instalação do Pacote

Instale o pacote usando npm ou yarn:

```bash
# Usando npm
npm install @platformbuilders/fluid-react-native

# Usando yarn
yarn add @platformbuilders/fluid-react-native
```

## Dependências Obrigatórias

O Fluid requer algumas dependências de pares (peer dependencies) para funcionar corretamente. Instale-as em seu projeto:

```bash
# Usando npm
npm install styled-components react-native-vector-icons react-native-svg

# Usando yarn
yarn add styled-components react-native-vector-icons react-native-svg
```

## Dependências Opcionais

Algumas funcionalidades da biblioteca dependem de pacotes adicionais. Instale-os se precisar usar esses recursos:

```bash
# Usando npm
npm install formik react-native-fast-image lottie-react-native

# Usando yarn
yarn add formik react-native-fast-image lottie-react-native
```

## Configuração de Dependências

### styled-components

Não é necessária nenhuma configuração adicional para o styled-components.

### react-native-vector-icons

#### iOS

Para iOS, adicione as seguintes linhas ao seu `ios/Podfile`:

```ruby
pod 'RNVectorIcons', :path => '../node_modules/react-native-vector-icons'
```

Em seguida, adicione as fontes que você deseja usar ao seu `Info.plist`:

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

Por fim, execute o pod install:

```bash
cd ios && pod install
```

#### Android

Para Android, adicione a seguinte linha ao seu `android/app/build.gradle`:

```gradle
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```

### react-native-svg

#### iOS

Para iOS, adicione o seguinte ao seu `ios/Podfile`:

```ruby
pod 'RNSVG', :path => '../node_modules/react-native-svg'
```

Em seguida, execute o pod install:

```bash
cd ios && pod install
```

#### Android

Não é necessária nenhuma configuração adicional para Android.

### react-native-fast-image (opcional)

#### iOS

Para iOS, adicione o seguinte ao seu `ios/Podfile`:

```ruby
pod 'RNFastImage', :path => '../node_modules/react-native-fast-image'
```

Em seguida, execute o pod install:

```bash
cd ios && pod install
```

#### Android

Adicione a seguinte dependência ao seu `android/app/build.gradle`:

```gradle
dependencies {
    // ... outras dependências
    implementation project(':react-native-fast-image')
}
```

### lottie-react-native (opcional)

#### iOS

Para iOS, adicione o seguinte ao seu `ios/Podfile`:

```ruby
pod 'lottie-react-native', :path => '../node_modules/lottie-react-native'
```

Em seguida, execute o pod install:

```bash
cd ios && pod install
```

#### Android

Adicione a seguinte dependência ao seu `android/app/build.gradle`:

```gradle
dependencies {
    // ... outras dependências
    implementation "com.airbnb.android:lottie:5.2.0"
}
```

## Configuração do Projeto

Após instalar todas as dependências necessárias, você precisa configurar o Fluid em seu projeto.

### Configuração Básica

Envolva o seu aplicativo com o `ThemeProvider` do Fluid:

```jsx
// App.js ou App.tsx
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

## Verificando a Instalação

Para verificar se a instalação foi bem-sucedida, você pode criar um componente simples:

```jsx
import React from 'react';
import { View } from 'react-native';
import { Button } from '@platformbuilders/fluid-react-native';

const TestComponent = () => {
  return (
    <View style={{ padding: 20 }}>
      <Button 
        label="Teste" 
        onPress={() => console.log('Instalação bem-sucedida!')} 
      />
    </View>
  );
};

export default TestComponent;
```

Se o botão for renderizado corretamente, a instalação foi bem-sucedida!

## Solução de Problemas

### Problemas Comuns

#### Erro: "Unable to resolve module '@platformbuilders/fluid-react-native'"

Certifique-se de que o pacote foi instalado corretamente:

```bash
yarn why @platformbuilders/fluid-react-native
```

Se não estiver instalado, reinstale-o:

```bash
yarn add @platformbuilders/fluid-react-native
```

#### Erro: "Unable to resolve module 'styled-components'"

Instale a dependência de styled-components:

```bash
yarn add styled-components
```

#### Erro ao renderizar ícones

Certifique-se de que o react-native-vector-icons está configurado corretamente para iOS e Android, conforme descrito acima.

#### Problemas com Metro Bundler

Limpe o cache do Metro Bundler:

```bash
npx react-native start --reset-cache
```

### Suporte

Se você encontrar algum problema durante a instalação, consulte a [documentação oficial](https://github.com/platformbuilders/fluid-react-native) ou abra uma issue no [GitHub](https://github.com/platformbuilders/fluid-react-native/issues). 