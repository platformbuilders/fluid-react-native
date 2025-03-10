---
sidebar_position: 1
---

# Button

O componente `Button` é um dos elementos de interface mais fundamentais, permitindo que os usuários realizem ações com um simples toque.

## Importação

```tsx
import { Button } from '@platformbuilders/fluid-react-native';
```

## Uso Básico

```tsx
<Button
  title="Botão Primário"
  variant="filled"
  colorVariant="primary"
  onPress={() => console.log('Botão pressionado')}
/>
```

## Variantes

O componente Button suporta diferentes variantes visuais:

```tsx
// Botão preenchido (padrão)
<Button title="Botão Preenchido" variant="filled" colorVariant="primary" />

// Botão fantasma (apenas borda)
<Button title="Botão Fantasma" variant="ghost" colorVariant="primary" />

// Botão com fundo suave
<Button title="Botão Tint" variant="tint" colorVariant="primary" />

// Botão com contorno
<Button title="Botão Outline" variant="outline" colorVariant="primary" />

// Botão plano (sem elevação)
<Button title="Botão Flat" variant="flat" colorVariant="primary" />
```

## Cores

O Button suporta diferentes variantes de cor:

```tsx
<Button title="Primário" colorVariant="primary" />
<Button title="Secundário" colorVariant="secondary" />
<Button title="Destaque" colorVariant="accent" />
<Button title="Perigo" colorVariant="danger" />
<Button title="Sucesso" colorVariant="success" />
<Button title="Alerta" colorVariant="warning" />
<Button title="Informação" colorVariant="info" />
```

## Ícones

Você pode adicionar ícones à esquerda ou à direita do texto:

```tsx
// Ícone à esquerda
<Button
  title="Adicionar Usuário"
  leftIconName="user-plus"
  colorVariant="primary"
/>

// Ícone à direita
<Button
  title="Próximo"
  rightIconName="arrow-right"
  colorVariant="primary"
/>
```

## Estados

### Desabilitado

```tsx
<Button title="Botão Desabilitado" disabled colorVariant="primary" />
```

### Carregamento

```tsx
<Button title="Carregando..." loading colorVariant="primary" />
```

## Tamanhos

Você pode controlar o tamanho do botão através das propriedades `minWidth` e `maxWidth`:

```tsx
<Button
  title="Botão Pequeno"
  minWidth="100px"
  colorVariant="primary"
/>

<Button
  title="Botão Grande"
  minWidth="250px"
  colorVariant="primary"
/>
```

## Acessibilidade

O componente Button implementa as melhores práticas de acessibilidade:

```tsx
<Button
  title="Finalizar Compra"
  accessibilityLabel="Finalizar compra"
  accessibilityHint="Conclui sua compra e vai para a página de pagamento"
  onPress={handleCheckout}
  colorVariant="primary"
/>
```

## Propriedades

| Propriedade          | Tipo                                                                                               | Padrão      | Descrição                                                |
| -------------------- | -------------------------------------------------------------------------------------------------- | ----------- | -------------------------------------------------------- |
| `title`              | `string`                                                                                           | -           | Texto do botão                                           |
| `variant`            | `'filled'` \| `'ghost'` \| `'tint'` \| `'outline'` \| `'flat'`                                     | `'filled'`  | Variante visual do botão                                 |
| `colorVariant`       | `'primary'` \| `'secondary'` \| `'accent'` \| `'danger'` \| `'success'` \| `'warning'` \| `'info'` | `'primary'` | Variante de cor do botão                                 |
| `onPress`            | `() => void`                                                                                       | -           | Função chamada quando o botão é pressionado              |
| `disabled`           | `boolean`                                                                                          | `false`     | Define se o botão está desabilitado                      |
| `loading`            | `boolean`                                                                                          | `false`     | Exibe um indicador de carregamento no lugar do conteúdo  |
| `leftIconName`       | `string`                                                                                           | -           | Nome do ícone à esquerda do texto                        |
| `rightIconName`      | `string`                                                                                           | -           | Nome do ícone à direita do texto                         |
| `minWidth`           | `string` \| `number`                                                                               | -           | Largura mínima do botão                                  |
| `maxWidth`           | `string` \| `number`                                                                               | -           | Largura máxima do botão                                  |
| `rounded`            | `boolean`                                                                                          | `false`     | Define se o botão terá cantos completamente arredondados |
| `typographyVariant`  | `'xs'` \| `'sm'` \| `'md'` \| `'lg'` \| `'xl'`                                                     | `'md'`      | Tamanho do texto do botão                                |
| `accessibilityLabel` | `string`                                                                                           | -           | Rótulo de acessibilidade para leitores de tela           |
| `accessibilityHint`  | `string`                                                                                           | -           | Dica de acessibilidade sobre o resultado da ação         |

## Customização via Tema

Você pode personalizar os botões globalmente através do tema:

```tsx
const customTheme = {
  ...fluidTheme,
  button: {
    ...fluidTheme.button,
    borderRadius: '8px',
    height: '48px',
    // Outras personalizações...
  },
  // Personalizações de cores
  brand: {
    primary: {
      main: '#0066CC',
      contrast: '#FFFFFF',
    },
  },
};
```
