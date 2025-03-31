---
sidebar_position: 3
---

# Badge

O componente Badge é uma variação do botão projetada para exibir etiquetas, marcadores e indicadores de status. É ideal para mostrar notificações, tags, categorias ou para destacar informações importantes de forma compacta.

## Importação

```tsx
import { Badge } from '@platformbuilders/fluid-react-native';
```

## Exemplo Básico

```tsx
<Badge 
  accessibility="notificacao"
  variant="primary"
>
  Novo
</Badge>
```

## Exemplos

### Variantes de Cores

O Badge suporta várias variantes de cores que seguem o sistema de cores do tema:

```tsx
// Primária (padrão)
<Badge variant="primary">Novo</Badge>

// Secundária
<Badge variant="secondary">Em andamento</Badge>

// Terciária
<Badge variant="tertiary">Destacado</Badge>

// Accent
<Badge variant="accent">Promoção</Badge>

// Informação
<Badge variant="info">Informação</Badge>

// Alerta
<Badge variant="warning">Atenção</Badge>

// Perigo
<Badge variant="danger">Erro</Badge>

// Invertido
<Badge variant="invert">Alternativo</Badge>

// Flat (transparente)
<Badge variant="flat">Normal</Badge>
```

### Com Ícones

```tsx
// Ícone à esquerda
<Badge 
  leftIconName="star" 
  variant="primary"
>
  Favorito
</Badge>

// Ícone à direita
<Badge 
  rightIconName="chevron-right" 
  variant="secondary"
>
  Mais
</Badge>

// Ambos os ícones
<Badge 
  leftIconName="check-circle" 
  rightIconName="arrow-right"
  variant="success"
>
  Concluído
</Badge>

// Emoji como ícone
<Badge 
  leftIconName="🔥" 
  isEmoji 
  variant="warning"
>
  Destaque
</Badge>
```

### Estados

```tsx
// Desabilitado
<Badge 
  variant="primary" 
  disabled
>
  Indisponível
</Badge>

// Carregando
<Badge 
  variant="primary" 
  loading
>
  Processando
</Badge>
```

### Estilos Personalizados

```tsx
// Com borda
<Badge 
  variant="primary" 
  hasBorder
>
  Com Borda
</Badge>

// Flat (sem preenchimento)
<Badge 
  variant="primary" 
  flat
>
  Flat
</Badge>

// Estilo personalizado
<Badge 
  variant="primary"
  style={{ 
    backgroundColor: '#E3F2FD',
    paddingHorizontal: 12 
  }}
  textStyle={{ 
    color: '#1976D2',
    fontWeight: 'bold'
  }}
>
  Personalizado
</Badge>
```

## API

### Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `id` | string | - | ID do componente |
| `accessibility` | string | Texto do badge ou 'badge' | ID para acessibilidade |
| `accessibilityLabel` | string | Texto do badge | Descrição para leitores de tela |
| `children` | ReactNode | - | Conteúdo do badge |
| `onPress` | function | - | Função chamada ao pressionar o badge |
| `disabled` | boolean | false | Se o badge está desabilitado |
| `loading` | boolean | false | Se o badge está em estado de carregamento |
| `contrast` | boolean | false | Aumentar contraste do indicador de loading |
| `flat` | boolean | false | Se o badge deve ser plano (sem preenchimento) |
| `hasBorder` | boolean | false | Se o badge deve ter borda |
| `variant` | 'primary' \| 'secondary' \| 'tertiary' \| 'accent' \| 'info' \| 'warning' \| 'danger' \| 'invert' \| 'flat' | 'primary' | Variante de cor |
| `typographyVariant` | TypographyVariants | 'md' | Variante do texto |
| `leftIconName` | string | - | Nome do ícone à esquerda |
| `rightIconName` | string | - | Nome do ícone à direita |
| `isEmoji` | boolean | false | Se o ícone é um emoji |
| `iconTouchable` | boolean | false | Se o ícone é tocável independentemente |
| `style` | StyleProp\<ViewStyle\> | {} | Estilo do container do badge |
| `textStyle` | StyleProp\<TextStyle\> | {} | Estilo do texto do badge |
| `iconStyle` | StyleProp\<TextStyle\> | {} | Estilo dos ícones |

## Acessibilidade

O Badge implementa as seguintes propriedades de acessibilidade:

- `accessibilityLabel`: Descrição do badge para leitores de tela
- `accessibilityRole`: Definido como "button" quando tem onPress, ou "text" quando é apenas visual
- `accessibilityState`: Informa os estados "disabled" e "busy" (quando loading=true)
- `accessibilityHint`: Informa que ao tocar no badge, haverá interação (quando onPress está definido)

### Boas Práticas de Acessibilidade

1. **Labels descritivos**:
   - Use textos claros e específicos
   - Forneça contexto suficiente sobre o que o badge representa

2. **Contraste adequado**:
   - Garanta que o contraste entre o texto e o fundo do badge seja suficiente
   - Todos os estados (disabled, loading) devem manter contraste adequado

3. **Iconografia clara**:
   - Ícones devem complementar o texto, não substituí-lo
   - Marque ícones como `importantForAccessibility="no"` para evitar redundância

## Exemplo Completo

```tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Badge, Typography } from '@platformbuilders/fluid-react-native';

const NotificationsScreen = () => {
  return (
    <View style={styles.container}>
      <Typography variant="h2">Notificações</Typography>
      
      <View style={styles.row}>
        <Badge 
          variant="primary"
          accessibility="novas-mensagens"
          accessibilityLabel="Você tem 5 novas mensagens"
          onPress={() => console.log('Navegando para mensagens')}
          style={styles.badge}
        >
          5
        </Badge>
        
        <Badge 
          variant="warning"
          leftIconName="bell"
          accessibility="alertas-sistema"
          accessibilityLabel="3 alertas do sistema"
          style={styles.badge}
        >
          3
        </Badge>
        
        <Badge 
          variant="info"
          hasBorder
          accessibility="atualizacoes"
          accessibilityLabel="Novas atualizações disponíveis"
          rightIconName="arrow-right"
          style={styles.badge}
        >
          Atualizar
        </Badge>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    marginTop: 16,
  },
  badge: {
    marginRight: 8,
  }
});

export default NotificationsScreen;
``` 