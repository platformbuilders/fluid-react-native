---
sidebar_position: 8
---

# Typography

O componente `Typography` é utilizado para renderizar texto com estilos consistentes em toda a aplicação, seguindo o design system.

## Importação

```tsx
import { Typography } from '@platformbuilders/fluid-react-native';
```

## Exemplo Básico

```tsx
<Typography>Texto de exemplo</Typography>
```

## Exemplos

### Variantes de tamanho

```tsx
<Typography variant="min">Texto muito pequeno</Typography>
<Typography variant="xs">Texto extra pequeno</Typography>
<Typography variant="sm">Texto pequeno</Typography>
<Typography variant="md">Texto médio (padrão)</Typography>
<Typography variant="lg">Texto grande</Typography>
<Typography variant="xl">Texto extra grande</Typography>
<Typography variant="max">Texto muito grande</Typography>
```

### Com linha limitada de altura

```tsx
<Typography
  variant="md"
  lineHeightVariant="min"
>
  Texto com altura de linha mínima
</Typography>
```

### Número de linhas limitado

```tsx
<Typography
  numberOfLines={2}
>
  Este texto será truncado se exceder duas linhas. Exemplo de texto longo para demonstrar a truncagem quando o conteúdo não cabe completamente no espaço reservado.
</Typography>
```

### Texto animado

```tsx
<Typography
  variant="animated"
>
  Este texto pode ser animado
</Typography>
```

### Com estilo personalizado

```tsx
<Typography
  style={{ 
    color: '#3366ff',
    fontWeight: 'bold',
    textAlign: 'center'
  }}
>
  Texto estilizado
</Typography>
```

## API

### Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `variant` | `TypographyVariants \| TextVariant \| 'normal' \| 'animated'` | `'md'` | Variante de tamanho do texto |
| `lineHeightVariant` | `TypographyVariants` | `'min'` | Variante de altura de linha |
| `children` | `string \| string[] \| ReactNode` | - | Conteúdo do texto |
| `id` | `string` | - | ID para o componente |
| `accessibility` | `string` | - | Identificador de acessibilidade |
| `numberOfLines` | `number` | - | Limita o número de linhas |
| `animated` | `boolean` | `false` | Se o texto deve ser animado (depreciado, use variant="animated") |
| `style` | `StyleProp<TextStyle>` | - | Estilo personalizado |

## Variantes Disponíveis

O componente suporta as seguintes variantes de tamanho:
- `min`: Tamanho mínimo (10px)
- `xs`: Extra pequeno (12px)
- `sm`: Pequeno (13px)
- `md`: Médio (15px, padrão)
- `lg`: Grande (17px)
- `xl`: Extra grande (24px)
- `max`: Tamanho máximo (32px)
- `animated`: Para textos com animação

## Notas de uso

- O componente aplica automaticamente as cores e tamanhos definidos no tema
- Para texto animado, use `variant="animated"` em vez da prop `animated`
- A altura da linha é controlada pela prop `lineHeightVariant`, independente do tamanho do texto
- O componente pode receber qualquer outra propriedade válida do componente Text nativo
- O testID é gerado a partir de `id`, `accessibility` ou do próprio conteúdo textual, nessa ordem de prioridade 