---
sidebar_position: 3
---

# TextInput

O componente `TextInput` é um campo de entrada de texto que permite aos usuários inserir e editar texto em formulários.
Ele inclui suporte integrado para máscaras (via `MaskedTextInput` interno) e diversas opções de estilo e comportamento.

## Importação

```tsx
import { TextInput } from '@platformbuilders/fluid-react-native';
```

## Exemplo Básico

```tsx
<TextInput 
  label="Nome"
  placeholder="Digite seu nome" 
  value={value}
  onChangeText={setValue} 
/>
```

## Variantes

O TextInput possui diferentes variantes para diferentes contextos de uso:

### Padrão

```tsx
<TextInput 
  label="Campo padrão" 
  value={value}
  onChangeText={setValue} 
/>
```

### Outline

```tsx
<TextInput 
  label="Campo outline" 
  variant="outline"
  value={value}
  onChangeText={setValue} 
/>
```

### Underline

```tsx
<TextInput 
  label="Campo underline" 
  variant="underline"
  value={value}
  onChangeText={setValue} 
/>
```

## Estados

### Com Valor

```tsx
<TextInput 
  label="Campo com valor" 
  value="John Doe"
  onChangeText={setValue} 
/>
```

### Desabilitado

```tsx
<TextInput 
  label="Campo desabilitado" 
  value="John Doe"
  disabled
  onChangeText={setValue} 
/>
```

### Com Erro

```tsx
<TextInput 
  label="Campo com erro" 
  value={value}
  error="Este campo é obrigatório"
  onChangeText={setValue} 
/>
```

### Somente Leitura

```tsx
<TextInput 
  label="Campo somente leitura" 
  value="Valor não editável"
  editable={false}
  onChangeText={setValue} 
/>
```

## Tipo de Teclado

```tsx
<TextInput 
  label="Email" 
  placeholder="Digite seu email"
  keyboardType="email-address"
  autoCapitalize="none"
  value={value}
  onChangeText={setValue} 
/>

<TextInput 
  label="Telefone" 
  placeholder="Digite seu telefone"
  keyboardType="phone-pad"
  value={value}
  onChangeText={setValue} 
/>

<TextInput 
  label="Número" 
  placeholder="Digite um número"
  keyboardType="numeric"
  value={value}
  onChangeText={setValue} 
/>
```

## Com Ícone

Você pode adicionar ícones ao campo:

```tsx
<TextInput 
  label="Buscar" 
  placeholder="Digite para buscar"
  icon="search"
  iconPosition="left" // "left" (padrão) ou "right"
  value={value}
  onChangeText={setValue} 
/>
```

## Componentes Especializados

### PasswordInput

Para senhas com alternância de visibilidade:

```tsx
import { PasswordInput } from '@platformbuilders/fluid-react-native';

<PasswordInput 
  label="Senha" 
  placeholder="Digite sua senha"
  value={value}
  onChangeText={setValue} 
/>
```

### MaskedTextInput

O componente `TextInput` lida automaticamente com máscaras quando a prop `maskType` é fornecida (ex: 'cpf', 'cnpj', 'phone'). Ele utiliza o componente `MaskedTextInput` internamente para essa funcionalidade. Para opções de máscara mais avançadas ou personalizadas, consulte a prop `options` na tabela de API ou a documentação específica do `MaskedTextInput` (se disponível).

```tsx
// Exemplo usando maskType diretamente no TextInput
<TextInput 
  label="CPF" 
  placeholder="Digite seu CPF"
  maskType="cpf"
  value={value}
  onChangeText={setValue} 
/>

// Para máscaras customizadas, você pode usar a prop options
// (Consulte a documentação de react-native-masked-input para detalhes)
```

### SearchInput

Para campos de busca com ícone e limpar:

```tsx
import { SearchInput } from '@platformbuilders/fluid-react-native';

<SearchInput 
  placeholder="Buscar..."
  value={value}
  onChangeText={setValue}
  onClear={() => setValue('')} 
/>
```

## Área de Texto Multilihas

```tsx
<TextInput 
  label="Descrição" 
  placeholder="Digite uma descrição detalhada"
  multiline
  numberOfLines={4}
  value={value}
  onChangeText={setValue} 
/>
```

## Outros Exemplos

### Estados Visuais (Status)

Controle a aparência com a prop `status`.

```tsx
<TextInput 
  label="Campo Sucesso" 
  value="Valor válido"
  status="success"
  onChangeText={setValue} 
/>
<TextInput 
  label="Campo Perigo" 
  value="Algo deu errado"
  status="danger" // Equivalente a usar a prop 'error'
  onChangeText={setValue} 
/>
<TextInput 
  label="Campo Desabilitado (via status)" 
  value="Não editável"
  status="disabled"
  onChangeText={setValue} 
/>
```

### Contraste

Para fundos escuros.

```tsx
<View style={{ backgroundColor: '#333', padding: 10 }}>
  <TextInput 
    label="Campo com contraste" 
    contrast
    value={value}
    onChangeText={setValue} 
  />
</View>
```

### Tamanho Grande

```tsx
<TextInput 
  label="Campo Grande" 
  large
  value={value}
  onChangeText={setValue} 
/>
```

### Texto Centralizado

```tsx
<TextInput 
  label="Código" 
  placeholder="0000"
  centered
  maxLength={4}
  keyboardType="numeric"
  value={value}
  onChangeText={setValue} 
/>
```

### Sem Linha Inferior

```tsx
<TextInput 
  label="Sem linha" 
  withBottomline={false}
  value={value}
  onChangeText={setValue} 
/>
```

## API

### Props

| Prop                   | Tipo                         | Padrão                   | Descrição                                                                 |
|------------------------|------------------------------|--------------------------|---------------------------------------------------------------------------|
| `id`                   | `string`                     | -                        | ID do componente (influencia testID).                                      |
| `accessibility`        | `string`                     | -                        | Identificador principal de acessibilidade.                               |
| `accessibilityLabel`   | `string`                     | (Gerado)                 | Rótulo de acessibilidade específico.                                      |
| `testID`               | `string`                     | (Gerado)                 | ID para testes automatizados.                                             |
| `label`                | `string`                     | `''`                     | Texto de rótulo exibido acima ou dentro do campo.                          |
| `placeholder`          | `string`                     | `''`                     | Texto exibido quando o campo está vazio.                                  |
| `value`                | `string`                     | `''`                     | Valor atual do campo.                                                     |
| `error`                | `string \| boolean`          | `''`                     | Mensagem de erro a ser exibida ou `true` para indicar estado de erro.      |
| `onChangeText`         | `(text: string) => void`     | -                        | Função chamada quando o valor do texto muda.                             |
| `onBlur`               | `(event: any) => void`       | `() => {}`               | Função chamada quando o campo perde o foco.                               |
| `onFocus`              | `(event: any) => void`       | `() => {}`               | Função chamada quando o campo ganha foco.                                |
| `leftIconName`         | `string`                     | -                        | Nome do ícone FontAwesome a ser exibido à esquerda.                       |
| `rightIconName`        | `string`                     | -                        | Nome do ícone FontAwesome a ser exibido à direita.                        |
| `onPressIcon`          | `() => void`                 | -                        | Função chamada ao pressionar o ícone esquerdo.                             |
| `onRightIconPress`     | `() => void`                 | -                        | Função chamada ao pressionar o ícone direito.                             |
| `iconColor`            | `string`                     | (Cor do tema)            | Cor para ambos os ícones (se `leftIconColor` não for definido).            |
| `leftIconColor`        | `string`                     | `iconColor`              | Cor específica para o ícone esquerdo.                                     |
| `iconSize`             | `number`                     | (Tamanho do tema)        | Tamanho para ambos os ícones.                                             |
| `iconType`             | `IconFonts`                  | `IconFonts.FontAwesome`  | Tipo de fonte de ícones (se usando ícones de outras libs).                |
| `iconHitSlop`          | `object`                     | `{}`                     | Área de toque adicional para os ícones.                                   |
| `large`                | `boolean`                    | `false`                  | Aplica estilo de tamanho grande ao texto do input.                        |
| `contrast`             | `boolean`                    | `false`                  | Aplica estilo de alto contraste (útil em fundos escuros).                |
| `centered`             | `boolean`                    | `false`                  | Centraliza o texto dentro do input.                                       |
| `withBottomline`       | `boolean`                    | `true`                   | Exibe a linha inferior padrão (variante `underline`).                       |
| `multiline`            | `boolean`                    | `false`                  | Permite que o input tenha múltiplas linhas.                             |
| `numberOfLines`        | `number`                     | -                        | Número de linhas a serem exibidas (requer `multiline={true}`).             |
| `autoFocus`            | `boolean`                    | `false`                  | Foca automaticamente o campo ao montar.                                    |
| `keyboardType`         | `KeyboardTypeOptions`        | `'default'`              | Tipo de teclado a ser exibido (numeric, email-address, etc.).             |
| `maskType`             | `string \| null`             | `null`                   | Tipo de máscara a ser aplicada (ex: 'cpf', 'cnpj', 'phone', 'uppercase'). |
| `options`              | `TextInputMaskOptionProp`    | (Padrão interno)         | Opções avançadas para máscaras customizadas (ver `react-native-masked-input`). |
| `status`               | `InputStatus`                | `InputStatus.Default`    | Controla o estado visual (Default, Danger, Success, Disabled).            |
| `editable`             | `boolean`                    | `true`                   | Define se o campo pode ser editado.                                        |
| `borderedHeight`       | `number`                     | -                        | Ativa a variante com borda e define sua altura.                           |
| `borderedColor`        | `string`                     | (Cor do tema)            | Cor da borda (quando `borderedHeight` está definido).                     |
| `focusBorderedColor`   | `string`                     | (Cor primária do tema)   | Cor da borda quando em foco (com `borderedHeight`).                       |
| `borderedWidth`        | `number`                     | `1`                      | Largura da borda (com `borderedHeight`).                                  |
| `borderedRadius`       | `number`                     | `0`                      | Raio da borda (com `borderedHeight`).                                     |
| `borderedLabel`        | `string`                     | `''`                     | Texto do rótulo posicionado acima da borda (com `borderedHeight`).        |
| `borderedBackgroundColor`| `string`                   | (Cor do tema)            | Cor de fundo para a variante com borda.                                |
| `showBorderErrored`    | `boolean`                    | `true`                   | Se a borda deve ficar vermelha em estado de erro (com `borderedHeight`). |
| `fixedLabelVariant`    | `TypographyVariants`         | `'xs'`                   | Variante de tipografia para o `borderedLabel` ou label fixo superior.     |
| `inputPadding`         | `number`                     | (Calculado)              | Padding interno horizontal do campo de texto.                             |
| `inputLeftPadding`     | `number`                     | -                        | Padding interno esquerdo específico.                                      |
| `inputRightPadding`    | `number`                     | -                        | Padding interno direito específico.                                       |
| `allowFontScaling`     | `boolean`                    | `false`                  | Permite que a fonte do input seja escalada pelas configurações do OS.       |
| `suppressAnimation`    | `boolean`                    | `true`                   | Desabilita a animação do label flutuante.                               |
| `hidePlaceholderOnFocus`| `boolean`                   | `false`                  | Oculta o placeholder quando o campo está focado.                           |
| `isFloating`           | `boolean`                    | (Determinado)            | Indica se o label está no modo flutuante (não configurável diretamente).   |
| `animationValues`      | `object`                     | (Padrão interno)         | Valores de estilo (top, fontSize, opacity) para animação do label.       |
| `style`                | `StyleProp<ViewStyle>`       | `{}`                     | Estilo aplicado ao container do input e label (sem borda).                |
| `errorStyle`           | `StyleProp<TextStyle>`       | `{}`                     | Estilo aplicado ao texto de erro.                                         |
| `textStyle`            | `StyleProp<TextStyle>`       | `{}`                     | Estilo aplicado diretamente ao texto dentro do input.                     |
| `rootStyle`            | `StyleProp<ViewStyle>`       | `{}`                     | Estilo aplicado ao container raiz do componente.                          |
| `labelStyle`           | `StyleProp<TextStyle>`       | `{}`                     | Estilo aplicado ao texto do label.                                        |
| `inputRef`             | `Ref<TextInput>`             | -                        | Ref para acessar o componente `TextInput` interno.                      |
| `...rest`              | `TextInputProps`             | -                        | Outras props do `TextInput` do React Native são passadas.                 |

## Customização

### Com Tema

O componente TextInput respeita o tema definido:

```tsx
// Em seu tema
const theme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    primary: '#FF5722',
    error: '#FF0000',
  },
};

// TextInput usará automaticamente as cores do tema
<TextInput 
  label="Campo com tema" 
  value={value}
  onChangeText={setValue} 
/>
```

### Com Props de Estilo

Você pode customizar o estilo diretamente:

```tsx
<TextInput 
  label="Campo personalizado" 
  value={value}
  onChangeText={setValue} 
  containerStyle={{ 
    marginBottom: 16,
  }}
  inputStyle={{ 
    fontWeight: 'bold',
  }}
  labelStyle={{
    fontSize: 16,
  }}
/>
```

## Considerações de Acessibilidade

O TextInput foi desenvolvido com acessibilidade em mente:

- Implementa `accessibilityRole="none"` e `accessibilityState`
- O prop `label` é utilizado como `accessibilityLabel` por padrão
- Suporta foco e navegação por tecnologias assistivas
- Estados como `disabled` e `error` são comunicados adequadamente

```tsx
<TextInput 
  label="Nome" 
  accessibilityLabel="Campo de entrada para nome completo"
  accessibilityHint="Digite seu nome completo aqui"
  value={value}
  onChangeText={setValue} 
/>
```

## API de Referência

### Props

| Prop | Tipo | Padrão | Descrição |
| ---- | ---- | ------ | --------- |
| `label` | `string` | - | O texto do rótulo do campo |
| `value` | `string` | - | O valor do campo |
| `onChangeText` | `(text: string) => void` | - | Função chamada quando o texto é alterado |
| `placeholder` | `string` | - | Texto de espaço reservado quando o campo está vazio |
| `variant` | `'default' \| 'outline' \| 'underline'` | `'default'` | Define o estilo visual do campo |
| `disabled` | `boolean` | `false` | Desabilita a interação com o campo |
| `error` | `string` | - | Mensagem de erro para exibir |
| `icon` | `string` | - | Nome do ícone para exibir |
| `iconPosition` | `'left' \| 'right'` | `'left'` | Posição do ícone em relação ao texto |
| `multiline` | `boolean` | `false` | Permite entrada de múltiplas linhas |
| `numberOfLines` | `number` | `1` | Número de linhas para campos multiline |
| `keyboardType` | `'default' \| 'numeric' \| 'email-address' \| ...` | `'default'` | Tipo de teclado a ser exibido |
| `autoCapitalize` | `'none' \| 'sentences' \| 'words' \| 'characters'` | `'sentences'` | Controla a capitalização automática |
| `secureTextEntry` | `boolean` | `false` | Define o campo como entrada segura (senha) |
| `maxLength` | `number` | - | Número máximo de caracteres |
| `editable` | `boolean` | `true` | Define se o texto é editável |
| `returnKeyType` | `'done' \| 'go' \| 'next' \| 'search' \| ...` | - | Tipo de botão de retorno no teclado |
| `onSubmitEditing` | `() => void` | - | Função chamada ao pressionar o botão de retorno |
| `onFocus` | `() => void` | - | Função chamada quando o campo recebe foco |
| `onBlur` | `() => void` | - | Função chamada quando o campo perde foco |
| `containerStyle` | `StyleProp<ViewStyle>` | - | Estilo para o container do campo |
| `inputStyle`