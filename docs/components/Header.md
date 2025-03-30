# Header

O componente Header implementa um cabeçalho de página/tela com suporte para título, subtítulo e ícones de navegação. Ele é altamente personalizável e se adapta automaticamente às diferenças entre plataformas iOS e Android.

## Importação

```jsx
import { Header } from '@platformbuilders/fluid-react-native';
```

## Uso Básico

```jsx
import React from 'react';
import { View } from 'react-native';
import { Header } from '@platformbuilders/fluid-react-native';

const BasicHeaderExample = () => (
  <View>
    <Header
      title="Página Inicial"
      subtitle="Bem-vindo ao aplicativo"
    />
  </View>
);
```

## Variações

### Tema Primário (Padrão)

O tema primário usa a cor primária da marca como fundo do cabeçalho:

```jsx
import { HeaderTheme } from '@platformbuilders/fluid-react-native';

<Header
  title="Minha Conta"
  theme={HeaderTheme.PRIMARY}
/>
```

### Tema Secundário

O tema secundário usa uma cor de fundo alternativa (geralmente mais clara) para o cabeçalho:

```jsx
import { HeaderTheme } from '@platformbuilders/fluid-react-native';

<Header
  title="Configurações"
  theme={HeaderTheme.SECONDARY}
/>
```

### Com Subtítulo

```jsx
<Header
  title="Extrato"
  subtitle="Últimas 30 transações"
/>
```

### Personalização de Ícones

Por padrão, o Header exibe um ícone de seta para voltar à esquerda e um ícone de "X" (fechar) à direita. Você pode personalizar esses ícones:

```jsx
<Header
  title="Detalhes do Produto"
  leftIconName="chevron-left"
  rightIconName="heart"
  onPressLeftIcon={() => navigation.goBack()}
  onPressRightIcon={() => addToFavorites()}
/>
```

### Ocultar Ícones

Você pode ocultar completamente os ícones do cabeçalho:

```jsx
<Header
  title="Termos de Uso"
  showLeftIcon={false}
  showRightIcon={false}
/>
```

### Com Conteúdo Customizado

Em vez de usar título e subtítulo, você pode renderizar componentes personalizados:

```jsx
import { Typography, Avatar } from '@platformbuilders/fluid-react-native';

<Header>
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <Avatar
      size={36}
      uri="https://exemplo.com/foto-perfil.jpg"
    />
    <View style={{ marginLeft: 12 }}>
      <Typography variant="subtitle">Olá,</Typography>
      <Typography variant="h6">Maria Silva</Typography>
    </View>
  </View>
</Header>
```

## Manipulação de Eventos

O Header permite definir funções para tratar eventos de clique nos ícones:

```jsx
const ProfileHeader = () => {
  const navigation = useNavigation();
  
  const handleBack = () => {
    navigation.goBack();
  };
  
  const handleSettings = () => {
    navigation.navigate('Settings');
  };
  
  return (
    <Header
      title="Perfil"
      leftIconName="arrow-left"
      rightIconName="cog"
      onPressLeftIcon={handleBack}
      onPressRightIcon={handleSettings}
    />
  );
};
```

## Acessibilidade

O componente Header implementa as seguintes propriedades de acessibilidade:

- Os ícones recebem `accessibilityLabel` baseado nas props `accessibilityLeftIcon` e `accessibilityRightIcon`
- Se essas props não forem fornecidas, os nomes dos ícones são usados como fallback
- Os ícones são automaticamente tratados como botões para leitores de tela

### Exemplo com Acessibilidade

```jsx
<Header
  title="Perfil"
  accessibilityLeftIcon="Voltar para página inicial"
  accessibilityRightIcon="Abrir configurações"
  onPressLeftIcon={() => navigation.navigate('Home')}
  onPressRightIcon={() => navigation.navigate('Settings')}
/>
```

### Boas Práticas de Acessibilidade

1. **Labels descritivos para ícones**:
   - Forneça descrições claras usando `accessibilityLeftIcon` e `accessibilityRightIcon`
   - Use verbos de ação que descrevam o que o botão faz (ex: "Voltar" em vez de "Seta")

2. **Contraste adequado**:
   - Garanta que o texto do título e subtítulo tenha contraste suficiente com o fundo
   - Teste os dois temas (PRIMARY e SECONDARY) para verificar a legibilidade

3. **Tamanho de toque adequado**:
   - Os ícones do cabeçalho têm uma área de toque suficiente para interação fácil
   - A altura padrão de 64px segue as diretrizes de Material Design para alvos de toque

## Comportamento em Diferentes Plataformas

O componente Header se adapta automaticamente a diferenças entre plataformas:

- **iOS**: Implementa `overflow: hidden` e adiciona padding inferior para melhor aparência
- **Android**: Utiliza elevação para criar efeito de sombra característico da plataforma

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `title` | string | - | Título principal do cabeçalho (obrigatório se `children` não for fornecido) |
| `subtitle` | string | '' | Texto secundário exibido abaixo do título |
| `theme` | HeaderTheme | HeaderTheme.PRIMARY | Tema visual do cabeçalho (PRIMARY ou SECONDARY) |
| `children` | ReactNode | - | Componentes filhos para renderização personalizada (alternativa ao título/subtítulo) |
| `showLeftIcon` | boolean | true | Se deve exibir o ícone à esquerda |
| `showRightIcon` | boolean | true | Se deve exibir o ícone à direita |
| `leftIconName` | string | 'arrow-left' | Nome do ícone à esquerda |
| `rightIconName` | string | 'times' | Nome do ícone à direita |
| `accessibilityLeftIcon` | string | '' | Label de acessibilidade para o ícone à esquerda |
| `accessibilityRightIcon` | string | '' | Label de acessibilidade para o ícone à direita |
| `onPressLeftIcon` | () => void | - | Função chamada ao pressionar o ícone à esquerda |
| `onPressRightIcon` | () => void | - | Função chamada ao pressionar o ícone à direita |

## Enums

### HeaderTheme

```typescript
enum HeaderTheme {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
}
```

### IconFonts (para referência)

Por padrão, o Header usa ícones do tipo FontAwesome. Os tipos disponíveis são:

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
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { Header, Typography, Button, HeaderTheme } from '@platformbuilders/fluid-react-native';
import { useNavigation } from '@react-navigation/native';

const HeaderExample = () => {
  const navigation = useNavigation();
  
  const navigateBack = () => {
    // Navegar de volta
    navigation.goBack();
  };
  
  const openMenu = () => {
    // Abrir menu
    navigation.openDrawer();
  };
  
  return (
    <SafeAreaView style={styles.container}>
      {/* Header Primário com título e subtítulo */}
      <Header
        title="Minha Conta"
        subtitle="Gerencie seus dados pessoais"
        theme={HeaderTheme.PRIMARY}
        leftIconName="arrow-left"
        rightIconName="bars"
        accessibilityLeftIcon="Voltar para a tela anterior"
        accessibilityRightIcon="Abrir menu principal"
        onPressLeftIcon={navigateBack}
        onPressRightIcon={openMenu}
      />
      
      <View style={styles.content}>
        <Typography variant="h3" style={styles.sectionTitle}>
          Exemplo de Cabeçalho Primário
        </Typography>
        <Typography>
          Este é um exemplo de cabeçalho com tema primário, exibindo título e subtítulo.
          Os ícones à esquerda e direita executam ações de navegação.
        </Typography>
      </View>
      
      {/* Header Secundário sem subtítulo */}
      <Header
        title="Configurações"
        theme={HeaderTheme.SECONDARY}
        leftIconName="arrow-left"
        showRightIcon={false}
        onPressLeftIcon={navigateBack}
      />
      
      <View style={styles.content}>
        <Typography variant="h3" style={styles.sectionTitle}>
          Exemplo de Cabeçalho Secundário
        </Typography>
        <Typography>
          Este é um exemplo de cabeçalho com tema secundário, sem subtítulo e sem ícone à direita.
        </Typography>
      </View>
      
      {/* Header com conteúdo personalizado */}
      <Header
        theme={HeaderTheme.PRIMARY}
        leftIconName="arrow-left"
        rightIconName="bell"
        onPressLeftIcon={navigateBack}
      >
        <View style={styles.customHeaderContent}>
          <Typography variant="h3" style={styles.customTitle}>
            Exemplo Personalizado
          </Typography>
          <Button
            small
            title="Ação"
            onPress={() => console.log('Ação executada')}
          />
        </View>
      </Header>
      
      <View style={styles.content}>
        <Typography variant="h3" style={styles.sectionTitle}>
          Exemplo de Cabeçalho Personalizado
        </Typography>
        <Typography>
          Este é um exemplo de cabeçalho com conteúdo personalizado, incluindo um botão de ação.
        </Typography>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  content: {
    padding: 16,
    marginBottom: 24,
  },
  sectionTitle: {
    marginBottom: 8,
  },
  customHeaderContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  customTitle: {
    color: '#FFFFFF',
  },
});

export default HeaderExample; 