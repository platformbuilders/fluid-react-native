---
sidebar_position: 2
---

# Card

O componente `Card` é um container visual que agrupa informações relacionadas e ações em um único elemento.

## Importação

```tsx
import { Card } from '@platformbuilders/fluid-react-native';
```

## Exemplo Básico

```tsx
<Card>
  <Text>Conteúdo do Card</Text>
</Card>
```

## Variantes

O Card possui diferentes variantes para diferentes contextos de uso:

### Padrão (Elevado)

```tsx
<Card variant="elevated">
  <Text>Card com sombra</Text>
</Card>
```

### Outlined

```tsx
<Card variant="outlined">
  <Text>Card com borda</Text>
</Card>
```

### Flat

```tsx
<Card variant="flat">
  <Text>Card plano</Text>
</Card>
```

## Card com Título

```tsx
<Card
  title="Título do Card"
>
  <Text>Conteúdo do Card</Text>
</Card>
```

## Card com Título e Subtítulo

```tsx
<Card
  title="Título do Card"
  subtitle="Subtítulo com informações adicionais"
>
  <Text>Conteúdo do Card</Text>
</Card>
```

## Card Tocável

Você pode tornar o card inteiro tocável:

```tsx
<Card
  title="Card Tocável"
  onPress={() => console.log('Card pressionado')}
>
  <Text>Toque em qualquer lugar do card</Text>
</Card>
```

## Card com Ícone

```tsx
<Card
  title="Card com Ícone"
  icon="star"
>
  <Text>Card com um ícone no cabeçalho</Text>
</Card>
```

## Card com Ações

```tsx
<Card
  title="Card com Ações"
  actions={[
    { 
      label: 'Confirmar', 
      onPress: () => console.log('Confirmado') 
    },
    { 
      label: 'Cancelar', 
      onPress: () => console.log('Cancelado'),
      variant: 'outline'
    }
  ]}
>
  <Text>Este card possui botões de ação</Text>
</Card>
```

## Card com Imagem

```tsx
<Card
  title="Card com Imagem"
  image={{ uri: 'https://example.com/image.jpg' }}
>
  <Text>Card com uma imagem no topo</Text>
</Card>
```

## Card com Imagem de Capa

```tsx
<Card
  title="Card com Imagem de Capa"
  coverImage={{ uri: 'https://example.com/cover.jpg' }}
>
  <Text>Card com uma imagem de capa</Text>
</Card>
```

## Customização

### Com Tema

O componente Card respeita o tema definido:

```tsx
// Em seu tema
const theme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    background: {
      ...defaultTheme.colors.background,
      card: '#F9F9F9',
    },
  },
  borders: {
    ...defaultTheme.borders,
    radius: {
      ...defaultTheme.borders.radius,
      card: 12,
    },
  },
};

// Card usará automaticamente as configurações do tema
<Card 
  title="Card com Tema" 
>
  <Text>Este card usa as configurações do tema</Text>
</Card>
```

### Com Props de Estilo

Você pode customizar o estilo do card diretamente:

```tsx
<Card 
  title="Card Personalizado" 
  containerStyle={{ 
    borderRadius: 16,
    marginBottom: 24,
  }}
  contentStyle={{
    padding: 20,
  }}
  titleStyle={{
    fontSize: 18,
    color: '#1976D2',
  }}
>
  <Text>Card com estilos personalizados</Text>
</Card>
```

## Considerações de Acessibilidade

O Card foi desenvolvido com acessibilidade em mente:

- Para cards tocáveis, automaticamente implementa `accessibilityRole="button"`
- O prop `title` é utilizado como parte do `accessibilityLabel` por padrão
- Suporta o prop `accessibilityHint` para fornecer dicas adicionais
- Para cards não tocáveis, implementa `accessibilityRole="none"`

```tsx
<Card 
  title="Informações Importantes" 
  onPress={() => {}}
  accessibilityHint="Toque duas vezes para ver detalhes"
>
  <Text>Conteúdo acessível</Text>
</Card>
```

## API de Referência

### Props

| Prop | Tipo | Padrão | Descrição |
| ---- | ---- | ------ | --------- |
| `children` | `ReactNode` | - | Conteúdo do card |
| `title` | `string` | - | Título exibido no cabeçalho do card |
| `subtitle` | `string` | - | Subtítulo exibido no cabeçalho do card |
| `variant` | `'elevated' \| 'outlined' \| 'flat'` | `'elevated'` | Define o estilo visual do card |
| `onPress` | `() => void` | - | Função chamada quando o card é pressionado |
| `icon` | `string` | - | Nome do ícone para exibir no cabeçalho |
| `image` | `ImageSourcePropType` | - | Imagem para exibir no topo do card |
| `coverImage` | `ImageSourcePropType` | - | Imagem de capa para o card (abaixo do título) |
| `actions` | `Array<{ label: string, onPress: () => void, variant?: ButtonVariant }>` | - | Botões de ação a serem exibidos no rodapé |
| `accessibilityLabel` | `string` | - | Rótulo de acessibilidade para leitores de tela |
| `accessibilityHint` | `string` | - | Dica de acessibilidade para leitores de tela |
| `containerStyle` | `StyleProp<ViewStyle>` | - | Estilo para o container do card |
| `contentStyle` | `StyleProp<ViewStyle>` | - | Estilo para o conteúdo do card |
| `titleStyle` | `StyleProp<TextStyle>` | - | Estilo para o título do card |
| `subtitleStyle` | `StyleProp<TextStyle>` | - | Estilo para o subtítulo do card |
| `headerStyle` | `StyleProp<ViewStyle>` | - | Estilo para o cabeçalho do card |
| `footerStyle` | `StyleProp<ViewStyle>` | - | Estilo para o rodapé do card |
| `testID` | `string` | - | ID para testes automatizados |

## Exemplos Avançados

### Card de Produto

```tsx
import React from 'react';
import { View } from 'react-native';
import { Card, Text, Badge, Divider } from '@platformbuilders/fluid-react-native';

const ProductCard = ({ product }) => {
  return (
    <Card
      title={product.name}
      subtitle={`R$ ${product.price.toFixed(2)}`}
      image={{ uri: product.imageUrl }}
      actions={[
        { 
          label: 'Comprar', 
          onPress: () => console.log('Comprar:', product.id),
          variant: 'primary'
        },
        { 
          label: 'Adicionar ao Carrinho', 
          onPress: () => console.log('Adicionar ao carrinho:', product.id),
          variant: 'outline'
        }
      ]}
      containerStyle={{ marginBottom: 16 }}
    >
      <View style={{ flexDirection: 'row', marginBottom: 8 }}>
        {product.isNew && (
          <Badge label="Novo" variant="success" style={{ marginRight: 8 }} />
        )}
        {product.discount > 0 && (
          <Badge label={`-${product.discount}%`} variant="warning" />
        )}
      </View>
      
      <Text numberOfLines={3} style={{ marginBottom: 12 }}>
        {product.description}
      </Text>
      
      <Divider style={{ marginVertical: 12 }} />
      
      <Text variant="caption" style={{ color: '#666' }}>
        {product.stockCount > 0 
          ? `${product.stockCount} unidades em estoque` 
          : 'Fora de estoque'}
      </Text>
    </Card>
  );
};

// Uso
const ExampleScreen = () => {
  const product = {
    id: '123',
    name: 'Smartphone Galaxy S21',
    price: 3999.99,
    imageUrl: 'https://example.com/s21.jpg',
    description: 'Smartphone Samsung Galaxy S21 com 128GB, tela AMOLED de 6.2" e câmera tripla.',
    isNew: true,
    discount: 10,
    stockCount: 15
  };
  
  return (
    <View style={{ padding: 16 }}>
      <ProductCard product={product} />
    </View>
  );
};

export default ExampleScreen;
```

### Card de Perfil

```tsx
import React from 'react';
import { View } from 'react-native';
import { Card, Avatar, Text, Icon, Divider } from '@platformbuilders/fluid-react-native';

const ProfileCard = ({ user }) => {
  return (
    <Card
      variant="outlined"
      containerStyle={{ marginBottom: 16 }}
    >
      <View style={{ 
        flexDirection: 'row', 
        alignItems: 'center',
        marginBottom: 16
      }}>
        <Avatar 
          source={{ uri: user.avatarUrl }} 
          size="large"
          style={{ marginRight: 16 }}
        />
        
        <View>
          <Text variant="heading" style={{ marginBottom: 4 }}>
            {user.name}
          </Text>
          <Text variant="caption" style={{ color: '#666' }}>
            {user.role}
          </Text>
        </View>
      </View>
      
      <Divider style={{ marginVertical: 12 }} />
      
      <View style={{ marginBottom: 16 }}>
        <View style={{ 
          flexDirection: 'row', 
          alignItems: 'center',
          marginBottom: 8 
        }}>
          <Icon name="email" size={18} style={{ marginRight: 8 }} />
          <Text>{user.email}</Text>
        </View>
        
        <View style={{ 
          flexDirection: 'row', 
          alignItems: 'center',
          marginBottom: 8
        }}>
          <Icon name="phone" size={18} style={{ marginRight: 8 }} />
          <Text>{user.phone}</Text>
        </View>
        
        <View style={{ 
          flexDirection: 'row', 
          alignItems: 'center' 
        }}>
          <Icon name="location-on" size={18} style={{ marginRight: 8 }} />
          <Text>{user.location}</Text>
        </View>
      </View>
      
      <Card.Actions>
        <Button 
          label="Editar Perfil" 
          variant="outline"
          onPress={() => console.log('Editar perfil:', user.id)}
        />
        <Button 
          label="Ver Detalhes" 
          variant="primary"
          onPress={() => console.log('Ver detalhes:', user.id)}
        />
      </Card.Actions>
    </Card>
  );
};

// Uso
const ExampleScreen = () => {
  const user = {
    id: '456',
    name: 'Ana Silva',
    role: 'Desenvolvedora Senior',
    email: 'ana.silva@example.com',
    phone: '(11) 98765-4321',
    location: 'São Paulo, SP',
    avatarUrl: 'https://example.com/avatar.jpg'
  };
  
  return (
    <View style={{ padding: 16 }}>
      <ProfileCard user={user} />
    </View>
  );
};

export default ExampleScreen;
```

## Melhores Práticas

1. **Use cards para agrupar informações relacionadas**: Cards são ideais para apresentar conjuntos de informações que pertencem logicamente juntas.

2. **Mantenha a hierarquia visual**: Use o título e subtítulo para estabelecer uma hierarquia clara de informações.

3. **Considere a densidade de informações**: Não sobrecarregue um card com muitas informações ou ações.

4. **Seja consistente**: Mantenha o mesmo estilo de cards em toda a aplicação para elementos similares.

5. **Use cards interativos com moderação**: Quando tornar um card tocável, certifique-se de que a interação seja clara para o usuário. 