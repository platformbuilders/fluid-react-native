# Componentes

Este diretório contém a documentação de todos os componentes disponíveis na biblioteca Fluid React Native.

## Componentes já documentados

- [Avatar](./avatar.mdx) - Componente para exibição de imagens de perfil e monogramas
- [Button](./button.mdx) - Componente para ações e interações principais
- [Checkbox](./checkbox.mdx) - Componente para seleção de múltiplas opções
- [TextInput](./textinput.mdx) - Componente para entrada de texto

## Componentes pendentes de documentação

- Accordion
- Badge
- BottomNavigation
- DatePicker
- FormError
- Header
- Icon
- Image
- Link
- LoadingIndicator
- Markdown
- PinInput
- RadioButton
- SearchInput
- Separator
- Toggle
- Touchable
- Typography
- UploadPhoto

## Como contribuir com a documentação

Para criar a documentação de um novo componente:

1. Crie um arquivo `[nome-do-componente].mdx` neste diretório
2. Siga a estrutura padrão dos componentes já documentados:
   - Título e descrição
   - Importação
   - Uso básico
   - Variantes/estados (se aplicável)
   - Propriedades (tabela)
   - Exemplos de uso
3. Atualize esta lista para mover o componente para a seção "já documentados"

## Estrutura básica de documentação

````mdx
# Nome do Componente

Breve descrição do componente e sua finalidade.

## Importação

```tsx
import { ComponentName } from '@platformbuilders/fluid-react-native';
```
````

## Uso Básico

```tsx
<ComponentName propA="valor" propB={123} />
```

## Propriedades

| Propriedade | Tipo   | Padrão | Descrição         |
| ----------- | ------ | ------ | ----------------- |
| `propA`     | string | ''     | Descrição da prop |
| `propB`     | number | 0      | Descrição da prop |

## Exemplos

### Exemplo 1

```tsx
<ComponentName propA="exemplo" propB={42} />
```
