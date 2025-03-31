---
id: markdown
title: Markdown
sidebar_label: Markdown
---

import useBaseUrl from '@docusaurus/useBaseUrl';

O componente `Markdown` renderiza texto formatado em Markdown, utilizando a biblioteca `react-native-markdown-display`.

## Importação

```tsx
import { Markdown } from '@platformbuilders/fluid-react-native';
```

## Exemplo Básico

```tsx
import React from 'react';
import { View } from 'react-native';
import { Markdown } from '@platformbuilders/fluid-react-native';

const BasicMarkdownExample = () => (
  <View>
    <Markdown>
      {
        `# Título\n\nEste é um **exemplo** de *texto* formatado em Markdown.\n\n- Item 1\n- Item 2\n\n[Visite o site](https://example.com)`
      }
    </Markdown>
  </View>
);
```

## Exemplos

### Com Estilo de Texto Personalizado

Você pode aplicar estilos personalizados ao corpo do texto Markdown usando a prop `textStyle`.

```tsx
<Markdown
  textStyle={{ 
    color: '#3498db', 
    fontSize: 16,
    lineHeight: 24
  }}
>
  {
    `## Subtítulo\n\nEste texto terá um estilo diferente aplicado ao corpo do conteúdo Markdown.`
  }
</Markdown>
```

### Uso com Componente Accordion

O componente `Markdown` é frequentemente utilizado dentro de outros componentes, como o `Accordion`, para exibir conteúdo rico.

```tsx
const markdownData = [
  {
    title: 'Instruções Detalhadas',
    content: '# Etapa 1\n\nSiga estas etapas:\n\n- **Item 1**: Faça a primeira coisa.\n- *Item 2*: Faça a segunda coisa com ênfase.\n\n> **Nota**: Não pule etapas importantes.\n\nPara mais informações, consulte a [documentação completa](#).',
  },
];

<Accordion 
  data={markdownData} 
  isMarkdown // Indica ao Accordion para usar o componente Markdown
/>
```

## API

### Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `children` | string | - | O conteúdo Markdown a ser renderizado |
| `textStyle` | `TextStyle` (da `react-native`) | `{}` | Objeto de estilo para ser aplicado ao corpo (tag `<body>`) do conteúdo Markdown |

## Notas de Uso

- O componente `Markdown` encapsula a biblioteca `react-native-markdown-display`. Para opções de estilização mais avançadas (como estilizar cabeçalhos, listas, links, etc.), consulte a [documentação da biblioteca `react-native-markdown-display`](https://github.com/iamacup/react-native-markdown-display#syntax-and-customisation).
- Este componente é ideal para exibir conteúdo estático formatado, como descrições, guias ou termos de uso. 