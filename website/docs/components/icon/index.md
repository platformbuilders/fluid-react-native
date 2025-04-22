---
sidebar_position: 5
---

# Icon

O componente Icon fornece uma maneira fácil de utilizar ícones em sua aplicação, oferecendo suporte a várias bibliotecas de ícones, incluindo FontAwesome e Material, além de ícones SVG customizados e emojis.

## Importação

```tsx
import { Icon, IconFonts } from '@platformbuilders/fluid-react-native';
```

## Exemplo Básico

```tsx
import React from 'react';
import { View } from 'react-native';
import { Icon } from '@platformbuilders/fluid-react-native';

const BasicIconExample = () => (
  <View>
    <Icon 
      name="home" 
      accessibility="Ícone de casa"
    />
  </View>
);
```

## Exemplos

### Tipos de Ícones

O componente suporta diferentes tipos de fontes de ícones:

```tsx
import { Icon, IconFonts } from '@platformbuilders/fluid-react-native';

// FontAwesome (padrão)
<Icon 
  name="home" 
  accessibility="Ícone de casa"
/>

// Material Icons
<Icon 
  name="home" 
  accessibility="Ícone de casa"
  type={IconFonts.Material} 
/>

// FontAwesome Brands
<Icon 
  name="github" 
  accessibility="Ícone do GitHub"
  type={IconFonts.FABrands} 
/>

// FontAwesome Light
<Icon 
  name="user" 
  accessibility="Ícone de usuário"
  type={IconFonts.FALight} 
/>

// FontAwesome Regular
<Icon 
  name="bell" 
  accessibility="Ícone de notificação"
  type={IconFonts.FARegular} 
/>

// FontAwesome Solid
<Icon 
  name="star" 
  accessibility="Ícone de estrela"
  type={IconFonts.FASolid} 
/>
```

### Tamanho e Cor

```tsx
// Tamanho personalizado
<Icon 
  name="home" 
  accessibility="Ícone de casa"
  size={30} 
/>

// Cor personalizada
<Icon 
  name="heart" 
  accessibility="Ícone de coração"
  color="#FF0000" 
/>
```

### Emoji como Ícone

```tsx
<Icon 
  name="👍" 
  accessibility="Polegar para cima"
  isEmoji
  size={24}
/>
```

### Ícones Não Tocáveis

Por padrão, todos os ícones são interativos. Para criar um ícone apenas visual:

```tsx
<Icon 
  name="info-circle" 
  accessibility="Informação"
  touchable={false} 
/>
```

### Dimensões Personalizadas (para SVGs)

```tsx
<Icon 
  name="Profile" // Nome do ícone SVG (primeira letra maiúscula)
  accessibility="Perfil de usuário"
  width={40}
  height={40}
/>
```

### Cores de Fundo e Borda

```tsx
<Icon 
  name="check" 
  accessibility="Ícone de confirmação"
  backgroundColor="#E0F7FA"
  borderColor="#00BCD4"
  size={24}
/>
```

### Manipulação de Eventos

```tsx
const IconButtonExample = () => {
  const handleIconPress = () => {
    console.log('Ícone foi pressionado');
    // Ou navegação, feedback tátil, etc.
  };
  
  return (
    <Icon
      name="arrow-right"
      accessibility="Avançar"
      onPress={handleIconPress}
      size={24}
      color="#007AFF"
    />
  );
};
```

### Ícones SVG Customizados

```tsx
// Os ícones SVG devem ser importados em assets/svg
// O formato deve ser IconNome.tsx (primeira letra maiúscula)

<Icon
  name="Profile" // Corresponde a assets/svg/IconProfile.tsx
  accessibility="Perfil do usuário"
  size={24}
/>

// Para usar conjuntos de ícones SVG personalizados de outros locais:
import * as CustomIcons from './path/to/custom-icons';

<Icon
  name="CustomIcon"
  accessibility="Ícone personalizado"
  iconSets={CustomIcons}
/>
```

## API

### Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `accessibility` | string | - | Descrição de acessibilidade do ícone (obrigatório). |
| `name` | string | '' | Nome do ícone a ser renderizado (seja fonte, SVG ou Emoji). |
| `id` | string | `accessibility` | ID único do componente (opcional). |
| `accessibilityLabel` | string | `accessibility` | Label de acessibilidade explícito. |
| `testID` | string | `id` ou `accessibility` | ID para testes automatizados. |
| `touchable` | boolean | true | Se `false`, desativa a interação (`onPress`) com o ícone. |
| `isEmoji` | boolean | false | Indica que o `name` fornecido é um caractere Emoji. |
| `size` | number | 20 | Tamanho do ícone em pixels (afeta `fontSize` para fontes/Emoji e `width`/`height` padrão para SVG). |
| `color` | string | `theme.text.main` | Cor do ícone (para fontes, Emoji ou `fill` do SVG). |
| `style` | `StyleProp<ViewStyle>` | `{}` | Estilos aplicados ao container `Animated.View` externo. |
| `borderColor` | string | 'transparent' | Cor da borda do container (útil com `backgroundColor`). |
| `backgroundColor` | string | 'transparent' | Cor de fundo do container do ícone. |
| `type` | IconFonts | IconFonts.FontAwesome | Tipo da fonte de ícones a ser usada (veja Enum abaixo). |
| `onPress` | `() => void` | `() => {}` | Função chamada quando o ícone é pressionado (se `touchable={true}`). |
| `iconSets` | object | - | Objeto contendo um conjunto personalizado de componentes SVG. |
| `width` | number | `size` | Largura explícita do ícone (sobrescreve `size` para SVGs). |
| `height` | number | `size` | Altura explícita do ícone (sobrescreve `size` para SVGs). |
| `disabled` | boolean | false | Desativa a interação (`onPress`) com o ícone (passado para `Touchable`). |

### Enums

```tsx
enum IconFonts {
  FontAwesome = 'font-awesome',
  Material = 'material',
  FABrands = 'fa-brands',
  FALight = 'fa-light',
  FARegular = 'fa-regular',
  FASolid = 'fa-solid',
}
```

## Acessibilidade

O componente Icon implementa automaticamente recursos de acessibilidade:

- Os ícones são tratados como botões para leitores de tela (quando `touchable={true}`)
- Utiliza propriedades de acessibilidade específicas para descrição do ícone
- Fornece área de toque adequada para facilitar interações

### Exemplo com Acessibilidade

```tsx
<Icon
  id="notifications"
  accessibility="Visualizar notificações" 
  accessibilityLabel="Toque para abrir suas notificações"
  name="bell"
  onPress={() => navigation.navigate('Notifications')}
/>
```

### Boas Práticas

1. **Labels descritivos**:
   - Use verbos de ação que descrevam o que o ícone faz quando pressionado
   - Exemplo: "Voltar para a tela anterior" em vez de "Seta para esquerda"

2. **Tamanho adequado**:
   - Use ícones com tamanho suficiente para fácil toque (recomendado 44x44 dp)
   - O tamanho mínimo recomendado é de 24x24 dp

3. **Contraste**:
   - Garanta que a cor do ícone tenha contraste adequado com o fundo
   - Considere usar cores do tema para manter a consistência visual

## TestIDs

O componente Icon gera TestIDs automaticamente seguindo a hierarquia:

1. Usa `testID` se fornecido explicitamente
2. Usa `id` se fornecido e `testID` não estiver presente
3. Usa `accessibility` como fallback final

## Exemplo Completo

```tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon, Typography, IconFonts } from '@platformbuilders/fluid-react-native';

const IconsShowcase = () => {
  const handlePress = (iconName) => {
    console.log(`${iconName} foi pressionado!`);
  };

  return (
    <View style={styles.container}>
      <Typography variant="h3" style={styles.title}>
        Exemplos de Ícones
      </Typography>
      
      <View style={styles.section}>
        <Typography variant="subtitle" style={styles.sectionTitle}>
          FontAwesome (Padrão)
        </Typography>
        <View style={styles.iconsRow}>
          <View style={styles.iconContainer}>
            <Icon
              name="home"
              accessibility="Ir para página inicial"
              size={30}
              onPress={() => handlePress('home')}
            />
            <Typography style={styles.iconLabel}>Home</Typography>
          </View>
          
          <View style={styles.iconContainer}>
            <Icon
              name="user"
              accessibility="Ver perfil"
              size={30}
              onPress={() => handlePress('user')}
            />
            <Typography style={styles.iconLabel}>User</Typography>
          </View>
          
          <View style={styles.iconContainer}>
            <Icon
              name="cog"
              accessibility="Abrir configurações"
              size={30}
              onPress={() => handlePress('cog')}
            />
            <Typography style={styles.iconLabel}>Settings</Typography>
          </View>
        </View>
      </View>
      
      <View style={styles.section}>
        <Typography variant="subtitle" style={styles.sectionTitle}>
          Emojis como Ícones
        </Typography>
        <View style={styles.iconsRow}>
          <View style={styles.iconContainer}>
            <Icon
              name="👍"
              accessibility="Curtir"
              size={30}
              isEmoji
              onPress={() => handlePress('thumbs-up')}
            />
            <Typography style={styles.iconLabel}>Like</Typography>
          </View>
          
          <View style={styles.iconContainer}>
            <Icon
              name="❤️"
              accessibility="Favoritar"
              size={30}
              isEmoji
              onPress={() => handlePress('heart')}
            />
            <Typography style={styles.iconLabel}>Favorite</Typography>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  title: {
    marginBottom: 24,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    marginBottom: 12,
  },
  iconsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  iconContainer: {
    alignItems: 'center',
    margin: 8,
    width: 80,
  },
  iconLabel: {
    marginTop: 8,
    textAlign: 'center',
  },
});
``` 