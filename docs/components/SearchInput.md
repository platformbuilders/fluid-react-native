# SearchInput

O componente `SearchInput` é um campo de pesquisa especializado que facilita a implementação de funcionalidades de busca em aplicações mobile.

## Importação

```tsx
import { SearchInput } from '@platformbuilders/fluid-react-native';
```

## Exemplo Básico

```tsx
<SearchInput
  accessibility="campo-pesquisa"
  placeholder="Pesquisar..."
  onChange={(value) => console.log('Pesquisando por:', value)}
/>
```

## Exemplos

### Com ícones personalizados

```tsx
<SearchInput
  accessibility="campo-pesquisa"
  leftIconName="search"
  rightIconName="times"
  onChange={(value) => console.log('Pesquisando por:', value)}
  onRightIconPress={() => console.log('Limpar pesquisa')}
/>
```

### Com foco automático

```tsx
<SearchInput
  accessibility="campo-pesquisa"
  autoFocus
  onChange={(value) => console.log('Pesquisando por:', value)}
/>
```

### Com estilo personalizado

```tsx
<SearchInput
  accessibility="campo-pesquisa"
  containerStyle={{ backgroundColor: '#f0f0f0', borderRadius: 8 }}
  textStyle={{ color: '#333' }}
  inputStyle={{ fontSize: 16 }}
  onChange={(value) => console.log('Pesquisando por:', value)}
/>
```

### Com sombra

```tsx
<SearchInput
  accessibility="campo-pesquisa"
  hasShadow
  onChange={(value) => console.log('Pesquisando por:', value)}
/>
```

## API

### Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `accessibility` | `string` | - | Identificador de acessibilidade (obrigatório) |
| `id` | `string` | - | ID opcional para o componente |
| `onChange` | `(value: string) => void` | - | Callback chamado quando o texto é alterado |
| `onClear` | `() => void` | `() => null` | Callback chamado quando o campo é limpo |
| `onFocus` | `() => void` | `() => null` | Callback chamado quando o campo recebe foco |
| `onBlur` | `() => void` | `() => null` | Callback chamado quando o campo perde foco |
| `onSubmit` | `() => void` | `() => null` | Callback chamado ao submeter a pesquisa |
| `onIconPress` | `() => void` | - | Callback chamado ao pressionar o ícone principal |
| `onRightIconPress` | `() => void` | - | Callback chamado ao pressionar o ícone direito |
| `placeholder` | `string` | 'Pesquise aqui' | Texto de placeholder |
| `iconColor` | `string` | - | Cor do ícone |
| `wrapperHeight` | `number` | 56 | Altura do componente |
| `inputPadding` | `number` | - | Padding interno do input |
| `iconSize` | `number` | 26 | Tamanho do ícone |
| `hasShadow` | `boolean` | `false` | Se deve apresentar sombra |
| `textStyle` | `StyleProp<TextStyle>` | - | Estilo para o texto |
| `inputStyle` | `StyleProp<TextStyle>` | - | Estilo para o input |
| `containerStyle` | `StyleProp<ViewStyle>` | - | Estilo para o container |
| `placeholderTextColor` | `string` | - | Cor do texto de placeholder |
| `autoFocus` | `boolean` | `false` | Se o campo deve receber foco automaticamente |
| `rightIconName` | `string` | - | Nome do ícone direito |
| `leftIconName` | `string` | - | Nome do ícone esquerdo |
| `inputRef` | `RefObject<TextInput>` | - | Ref para acessar o componente input |

## Notas de uso

- O componente `SearchInput` é construído sobre o componente `TextInput`, herdando suas propriedades básicas
- A presença de ícones é controlada pelas props `leftIconName` e `rightIconName`
- O comportamento de limpar o campo é implementado automaticamente 