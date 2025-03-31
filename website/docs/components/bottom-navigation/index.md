---
sidebar_position: 4
---

# BottomNavigation

O componente BottomNavigation implementa um menu de navegação inferior, fornecendo acesso rápido às principais áreas do aplicativo. É projetado para seguir as diretrizes de Material Design e oferece suporte para ícones e rótulos.

## Importação

```tsx
import { BottomNavigation } from '@platformbuilders/fluid-react-native';
```

## Exemplo Básico

```tsx
import React, { useState } from 'react';
import { BottomNavigation } from '@platformbuilders/fluid-react-native';

const HomeScreen = () => {
  const [currentRoute, setCurrentRoute] = useState('Home');

  const navigationItems = [
    {
      routeName: 'Home',
      onPress: () => setCurrentRoute('Home'),
      iconName: 'home',
      label: 'Início',
    },
    {
      routeName: 'Search',
      onPress: () => setCurrentRoute('Search'),
      iconName: 'search',
      label: 'Buscar',
    },
    {
      routeName: 'Favorites',
      onPress: () => setCurrentRoute('Favorites'),
      iconName: 'star',
      label: 'Favoritos',
    },
    {
      routeName: 'Profile',
      onPress: () => setCurrentRoute('Profile'),
      iconName: 'user',
      label: 'Perfil',
    },
  ];

  return (
    <BottomNavigation 
      fields={navigationItems} 
      currentRoute={currentRoute} 
    />
  );
};
```

## Exemplos

### Com Cor Personalizada

Você pode personalizar a cor dos elementos ativos usando a propriedade `activeFieldColor`:

```tsx
<BottomNavigation 
  fields={navigationItems} 
  currentRoute={currentRoute} 
  activeFieldColor="#FF5722"
/>
```

### Integrando com React Navigation

O componente pode ser facilmente integrado com bibliotecas de navegação como o React Navigation:

```tsx
import { useNavigation, useRoute } from '@react-navigation/native';
import { BottomNavigation } from '@platformbuilders/fluid-react-native';

const AppBottomNavigation = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const currentRouteName = route.name;

  const navigationItems = [
    {
      routeName: 'HomeScreen',
      onPress: () => navigation.navigate('HomeScreen'),
      iconName: 'home',
      label: 'Início',
    },
    {
      routeName: 'SearchScreen',
      onPress: () => navigation.navigate('SearchScreen'),
      iconName: 'search',
      label: 'Buscar',
    },
    {
      routeName: 'FavoritesScreen',
      onPress: () => navigation.navigate('FavoritesScreen'),
      iconName: 'star',
      label: 'Favoritos',
    },
    {
      routeName: 'ProfileScreen',
      onPress: () => navigation.navigate('ProfileScreen'),
      iconName: 'user',
      label: 'Perfil',
    },
  ];

  return (
    <BottomNavigation 
      fields={navigationItems} 
      currentRoute={currentRouteName} 
    />
  );
};
```

## API

### Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `fields` | Array | Obrigatório | Array de objetos com as propriedades: `routeName`, `onPress`, `iconName` e `label` |
| `currentRoute` | string | Obrigatório | Nome da rota atual, deve corresponder a um dos `routeName` em `fields` |
| `activeFieldColor` | string | Cor primária do tema | Cor a ser usada para os itens ativos na navegação |

### Tipo Item de Navegação

```tsx
type NavigationField = {
  routeName: string;    // Identificador único da rota
  onPress(): void;      // Função a ser chamada quando o item é pressionado
  iconName: string;     // Nome do ícone (compatível com o componente Icon)
  label: string;        // Texto exibido abaixo do ícone
};
```

## Acessibilidade

O componente BottomNavigation implementa as seguintes propriedades de acessibilidade:

- `accessibilityLabel`: Cada item de navegação recebe o label definido na propriedade `label`
- `accessibilityRole`: Definido como "button" para cada item de navegação
- `accessibilityHint`: Informa qual tela será acessada ao tocar no item, com indicação adicional quando o item está selecionado
- `importantForAccessibility`: Os ícones e labels são marcados como "no" para evitar duplicação na leitura

### Boas Práticas de Acessibilidade

1. **Labels claros e concisos**:
   - Use termos diretos e familiares para os usuários
   - Evite abreviações que podem ser ambíguas quando lidas por leitores de tela

2. **Limitação de itens**:
   - Mantenha entre 3-5 itens de navegação para evitar sobrecarga visual e cognitiva
   - Priorize as funcionalidades mais importantes e frequentemente utilizadas

3. **Indicação visual clara**:
   - O estado ativo deve ser óbvio através de cor, opacidade e outros indicadores visuais
   - As diferenças de estado devem ser perceptíveis mesmo para usuários com visão reduzida ou daltonismo

## Comportamento em Diferentes Plataformas

O componente BottomNavigation se adapta automaticamente a diferentes plataformas:

- **iOS**: Respeita a área segura inferior (notch/home indicator) usando `useSpacingsWithSafeArea` do `@platformbuilders/helpers/native`
- **Android**: Mantém o comportamento padrão com elegante sombreamento (elevation)

## Exemplo Completo

```tsx
import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { BottomNavigation, Typography } from '@platformbuilders/fluid-react-native';

const MainScreen = () => {
  const [currentRoute, setCurrentRoute] = useState('Home');
  
  const navigationItems = [
    {
      routeName: 'Home',
      onPress: () => setCurrentRoute('Home'),
      iconName: 'home',
      label: 'Início',
    },
    {
      routeName: 'Search',
      onPress: () => setCurrentRoute('Search'),
      iconName: 'search',
      label: 'Buscar',
    },
    {
      routeName: 'Cart',
      onPress: () => setCurrentRoute('Cart'),
      iconName: 'shopping-cart',
      label: 'Carrinho',
    },
    {
      routeName: 'Profile',
      onPress: () => setCurrentRoute('Profile'),
      iconName: 'user',
      label: 'Perfil',
    },
  ];
  
  const renderContent = () => {
    switch (currentRoute) {
      case 'Home':
        return <Typography variant="h2">Tela Inicial</Typography>;
      case 'Search':
        return <Typography variant="h2">Busca</Typography>;
      case 'Cart':
        return <Typography variant="h2">Carrinho</Typography>;
      case 'Profile':
        return <Typography variant="h2">Perfil</Typography>;
      default:
        return null;
    }
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {renderContent()}
      </View>
      <BottomNavigation 
        fields={navigationItems} 
        currentRoute={currentRoute} 
        activeFieldColor="#2196F3" 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});

export default MainScreen;
``` 