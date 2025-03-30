# Icon

O componente Icon fornece uma maneira fácil de utilizar ícones em sua aplicação, oferecendo suporte a várias bibliotecas de ícones, incluindo FontAwesome e Material, além de ícones SVG customizados e emojis.

## Importação

```jsx
import { Icon } from '@platformbuilders/fluid-react-native';
```

## Uso Básico

```jsx
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

## Variações

### Tipos de Ícones

O componente Icon suporta diferentes tipos de fontes de ícones, que podem ser definidos usando a propriedade `type`:

```jsx
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

### Tamanho Personalizado

```jsx
<Icon 
  name="home" 
  accessibility="Ícone de casa"
  size={30} 
/>
```

### Cor Personalizada

```jsx
<Icon 
  name="heart" 
  accessibility="Ícone de coração"
  color="#FF0000" 
/>
```

### Emoji como Ícone

```jsx
<Icon 
  name="👍" 
  accessibility="Polegar para cima"
  isEmoji
  size={24}
/>
```

### Ícones Touchable ou Não Touchable

Por padrão, todos os ícones são touchable (podem ser pressionados). Para criar um ícone apenas visual:

```jsx
<Icon 
  name="info-circle" 
  accessibility="Informação"
  touchable={false} 
/>
```

### Dimensões Personalizadas (para SVGs)

```jsx
<Icon 
  name="Profile" // Nome do ícone SVG (primeira letra maiúscula)
  accessibility="Perfil de usuário"
  width={40}
  height={40}
/>
```

### Cores de Fundo e Borda

```jsx
<Icon 
  name="check" 
  accessibility="Ícone de confirmação"
  backgroundColor="#E0F7FA"
  borderColor="#00BCD4"
  size={24}
/>
```

## Manipulação de Eventos

O Icon permite definir uma função para tratar o evento de clique:

```jsx
const IconButtonExample = () => {
  const handleIconPress = () => {
    // Ação quando o ícone for pressionado
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

## Acessibilidade

O componente Icon implementa automaticamente recursos de acessibilidade, como:

- Os ícones são tratados como botões para leitores de tela (quando `touchable={true}`)
- Utiliza propriedades de acessibilidade específicas para descrição do ícone
- Fornece área de toque adequada para facilitar interações

### Exemplo com Acessibilidade

```jsx
<Icon
  id="notifications"
  accessibility="Visualizar notificações" 
  accessibilityLabel="Toque para abrir suas notificações"
  name="bell"
  onPress={() => navigation.navigate('Notifications')}
/>
```

### Boas Práticas de Acessibilidade

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

Este comportamento facilita a implementação de testes automatizados.

### Exemplo de uso de TestIDs

```jsx
// Explícito (prioridade mais alta)
<Icon
  testID="icon_notification"
  name="bell"
  accessibility="Notificações"
/>

// Usando ID (segunda prioridade)
<Icon
  id="notification"
  name="bell"
  accessibility="Notificações"
/>

// Usando accessibility como fallback (terceira prioridade)
<Icon
  name="bell"
  accessibility="Notificações"
/>
```

## Ícones SVG Customizados

O componente Icon também suporta ícones SVG personalizados:

```jsx
// Os ícones SVG devem ser importados em assets/svg
// O formato deve ser IconNome.tsx (primeira letra maiúscula)

<Icon
  name="Profile" // Corresponde a assets/svg/IconProfile.tsx
  accessibility="Perfil do usuário"
  size={24}
/>
```

Para usar conjuntos de ícones SVG personalizados de outros locais:

```jsx
import * as CustomIcons from './path/to/custom-icons';

<Icon
  name="CustomIcon"
  accessibility="Ícone personalizado"
  iconSets={CustomIcons}
/>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `accessibility` | string | - | Descrição de acessibilidade do ícone (obrigatório) |
| `name` | string | '' | Nome do ícone a ser renderizado |
| `id` | string | - | ID único do componente (opcional) |
| `accessibilityLabel` | string | `accessibility` | Label de acessibilidade (se diferente de `accessibility`) |
| `testID` | string | `id` ou `accessibility` | ID para testes automatizados |
| `touchable` | boolean | true | Se o ícone pode ser pressionado |
| `isEmoji` | boolean | false | Se o ícone é um emoji Unicode |
| `size` | number | 20 | Tamanho do ícone em pixels |
| `color` | string | undefined | Cor do ícone (usa a cor do tema se não especificado) |
| `style` | object/array | [{}] | Estilos personalizados para o container do ícone |
| `borderColor` | string | 'transparent' | Cor da borda (relevante para alguns ícones SVG) |
| `backgroundColor` | string | 'transparent' | Cor de fundo do ícone |
| `type` | IconFonts | IconFonts.FontAwesome | Tipo da fonte de ícones |
| `onPress` | function | () => {} | Função chamada quando o ícone é pressionado |
| `haptic` | HapticFeedbackTypes | - | Tipo de feedback tátil ao pressionar (se suportado) |
| `iconSets` | object | - | Conjunto personalizado de ícones SVG |
| `width` | number | `size` | Largura do ícone (principalmente para SVGs) |
| `height` | number | `size` | Altura do ícone (principalmente para SVGs) |
| `disabled` | boolean | false | Desativa a interação com o ícone |

## Enums

### IconFonts

```typescript
enum IconFonts {
  FontAwesome = 'font-awesome',
  Material = 'material',
  FABrands = 'fa-brands',
  FALight = 'fa-light',
  FARegular = 'fa-regular',
  FASolid = 'fa-solid',
}
```

## Exemplo Completo

```jsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon, Typography, IconFonts } from '@platformbuilders/fluid-react-native';

const IconsShowcase = () => {
  const handlePress = (iconName) => {
    console.log(`${iconName} foi pressionado!`);
    // Ou navegação, feedback tátil, etc.
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
          Material Icons
        </Typography>
        <View style={styles.iconsRow}>
          <View style={styles.iconContainer}>
            <Icon
              name="home"
              accessibility="Ir para página inicial"
              size={30}
              type={IconFonts.Material}
              onPress={() => handlePress('home-material')}
            />
            <Typography style={styles.iconLabel}>Home</Typography>
          </View>
          
          <View style={styles.iconContainer}>
            <Icon
              name="account"
              accessibility="Ver perfil"
              size={30}
              type={IconFonts.Material}
              onPress={() => handlePress('account-material')}
            />
            <Typography style={styles.iconLabel}>Account</Typography>
          </View>
          
          <View style={styles.iconContainer}>
            <Icon
              name="cog"
              accessibility="Abrir configurações"
              size={30}
              type={IconFonts.Material}
              onPress={() => handlePress('cog-material')}
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
          
          <View style={styles.iconContainer}>
            <Icon
              name="🔍"
              accessibility="Pesquisar"
              size={30}
              isEmoji
              onPress={() => handlePress('search')}
            />
            <Typography style={styles.iconLabel}>Search</Typography>
          </View>
        </View>
      </View>
      
      <View style={styles.section}>
        <Typography variant="subtitle" style={styles.sectionTitle}>
          Ícones com Cores Personalizadas
        </Typography>
        <View style={styles.iconsRow}>
          <View style={styles.iconContainer}>
            <Icon
              name="heart"
              accessibility="Favoritar"
              size={30}
              color="#E91E63"
              onPress={() => handlePress('heart-color')}
            />
            <Typography style={styles.iconLabel}>Red</Typography>
          </View>
          
          <View style={styles.iconContainer}>
            <Icon
              name="star"
              accessibility="Adicionar aos favoritos"
              size={30}
              color="#FFC107"
              onPress={() => handlePress('star-color')}
            />
            <Typography style={styles.iconLabel}>Yellow</Typography>
          </View>
          
          <View style={styles.iconContainer}>
            <Icon
              name="check-circle"
              accessibility="Confirmar"
              size={30}
              color="#4CAF50"
              onPress={() => handlePress('check-color')}
            />
            <Typography style={styles.iconLabel}>Green</Typography>
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

export default IconsShowcase; 