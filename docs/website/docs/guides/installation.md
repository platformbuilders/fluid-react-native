---
sidebar_position: 1
---

# Instalação

Este guia irá ajudá-lo a instalar e configurar o Fluid React Native em seu projeto.

## Pré-requisitos

Antes de começar, certifique-se de que você tem:

- React Native (0.65.0 ou superior)
- React (17.0.0 ou superior)
- Node.js (14.0.0 ou superior)
- Yarn ou npm

## Instalação do Pacote

Instale o pacote Fluid React Native usando npm ou yarn:

```bash
# Usando npm
npm install @platformbuilders/fluid-react-native

# Usando yarn
yarn add @platformbuilders/fluid-react-native
```

## Dependências de Pares

O Fluid React Native tem algumas dependências de pares que você precisa instalar:

```bash
# Usando npm
npm install @platformbuilders/helpers@0.11.3 @platformbuilders/theme-toolkit@0.3.0 formik@2.4.6 lodash@4.17.21 lottie-react-native@7.1.0 react-native-camera@4.2.1 react-native-fast-image@8.6.3 react-native-svg@15.8.0 react-native-vector-icons@10.2.0 styled-components@5.3.11

# Usando yarn
yarn add @platformbuilders/helpers@0.11.3 @platformbuilders/theme-toolkit@0.3.0 formik@2.4.6 lodash@4.17.21 lottie-react-native@7.1.0 react-native-camera@4.2.1 react-native-fast-image@8.6.3 react-native-svg@15.8.0 react-native-vector-icons@10.2.0 styled-components@5.3.11
```

## Configuração do Vector Icons

O Fluid React Native utiliza o react-native-vector-icons para ícones. Você precisa configurá-lo para cada plataforma:

### iOS

1. Adicione o seguinte ao seu `ios/Podfile`:

```ruby
pod 'RNVectorIcons', :path => '../node_modules/react-native-vector-icons'
```

2. Execute o comando para instalar os pods:

```bash
cd ios && pod install
```

3. Adicione as fontes ao seu `Info.plist`:

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

### Android

1. Edite `android/app/build.gradle`:

```gradle
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```

## Configuração do Fast Image

O Fluid React Native utiliza o react-native-fast-image para carregamento eficiente de imagens. Você precisa configurá-lo:

### iOS

Não é necessária nenhuma configuração adicional para iOS.

### Android

1. Adicione o seguinte ao seu `android/app/src/main/AndroidManifest.xml` dentro da tag `<application>`:

```xml
<meta-data android:name="com.bumptech.glide.integration.okhttp3.OkHttpGlideModule"
           android:value="GlideModule" />
```

## Configuração do Lottie

O Fluid React Native utiliza o lottie-react-native para animações. Você precisa configurá-lo:

### iOS

Não é necessária nenhuma configuração adicional para iOS.

### Android

Não é necessária nenhuma configuração adicional para Android.

## Configuração do ThemeProvider

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

## Verificação da Instalação

Para verificar se a instalação foi bem-sucedida, crie um componente simples usando o Fluid React Native:

```tsx
import React from 'react';
import { View } from 'react-native';
import { Button, Typography } from '@platformbuilders/fluid-react-native';

const TestComponent = () => (
  <View style={{ padding: 20 }}>
    <Typography variant="h1">Olá, Fluid!</Typography>
    <Button
      title="Clique Aqui"
      variant="filled"
      colorVariant="primary"
      onPress={() => console.log('Botão clicado')}
    />
  </View>
);

export default TestComponent;
```

Se o componente for renderizado corretamente, a instalação foi bem-sucedida.

## Solução de Problemas

### Erro de Fontes no iOS

Se você estiver tendo problemas com as fontes no iOS, verifique se:

1. Você adicionou corretamente as fontes ao `Info.plist`
2. Você executou `pod install` após adicionar as fontes
3. Você limpou o cache do projeto:

```bash
cd ios && pod install
cd .. && npx react-native start --reset-cache
```

### Erro de Fontes no Android

Se você estiver tendo problemas com as fontes no Android, verifique se:

1. Você adicionou corretamente a linha `apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"` ao `android/app/build.gradle`
2. Você limpou o cache do projeto:

```bash
cd android && ./gradlew clean
cd .. && npx react-native start --reset-cache
```

### Erro de Dependências

Se você estiver tendo problemas com dependências, verifique se:

1. Você instalou todas as dependências de pares
2. As versões das dependências são compatíveis
3. Você limpou o cache do projeto:

```bash
yarn cache clean
npx react-native start --reset-cache
```

## Próximos Passos

Agora que você instalou e configurou o Fluid React Native, você pode:

- Explorar os [componentes disponíveis](/docs/components)
- Aprender sobre o [sistema de temas](/docs/theme)
- Personalizar o tema para atender às necessidades do seu projeto
