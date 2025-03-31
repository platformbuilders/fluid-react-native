---
sidebar_position: 1
---

# Accordion

O componente Accordion permite exibir conteúdo em seções expansíveis, otimizando o espaço na tela e organizando informações em categorias. É ideal para FAQs, instruções em etapas ou qualquer conteúdo que precise ser dividido em seções colapsáveis.

## Importação

```tsx
import { Accordion } from '@platformbuilders/fluid-react-native';
```

## Exemplo Básico

```tsx
const data = [
  {
    title: 'Seção 1',
    content: 'Conteúdo da primeira seção',
  },
  {
    title: 'Seção 2',
    content: 'Conteúdo da segunda seção',
  },
];

<Accordion data={data} />
```

## Exemplos

### Com Ícones

```tsx
<Accordion 
  data={data} 
  hasIcon 
  iconUpName="chevron-up"
  iconDownName="chevron-down"
  activeIconColor="#e74c3c" 
  inactiveIconColor="#95a5a6"
/>
```

### Com Conteúdo Markdown

O Accordion pode renderizar o conteúdo como Markdown, permitindo formatação rica:

```tsx
const markdownData = [
  {
    title: 'Instruções',
    content: '# Etapa 1\n\nSiga estas etapas:\n\n- Item 1\n- Item 2\n\n**Importante**: não pule etapas.',
  },
];

<Accordion 
  data={markdownData} 
  isMarkdown
/>
```

### Com Componentes Customizados

O Accordion permite personalizar os componentes de título, conteúdo, cabeçalho e corpo:

```tsx
// Título personalizado com ícone
const CustomTitle = ({ children, isActive }) => (
  <Typography 
    variant={isActive ? 'h3' : 'body'} 
    color={isActive ? 'brand.primary.main' : 'text.main'}
  >
    {children}
  </Typography>
);

// Conteúdo personalizado com estilo
const CustomContent = ({ children }) => (
  <View style={{ 
    backgroundColor: '#f5f5f5', 
    padding: 16, 
    borderRadius: 8 
  }}>
    {children}
  </View>
);

<Accordion 
  data={data} 
  StyledTitle={CustomTitle}
  StyledContent={CustomContent}
/>
```

## Controlando o Estado

Você pode controlar o evento de mudança de estado utilizando a prop `onChange`:

```tsx
const handleSectionChange = (title) => {
  console.log(`Seção "${title}" foi ativada`);
  // Realizar ações adicionais quando uma seção é expandida
};

<Accordion 
  data={data} 
  onChange={handleSectionChange}
/>
```

## API

### Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `data` | AccordionType[] | Obrigatório | Array de objetos com `title` e `content` para cada seção |
| `StyledTitle` | Component | Text | Componente para renderizar o título de cada seção |
| `StyledBody` | Component | Text | Componente para renderizar o corpo de texto quando não é markdown |
| `StyledHeader` | Component | View | Componente para renderizar o cabeçalho de cada seção |
| `StyledContent` | Component | View | Componente para renderizar o container do conteúdo |
| `hasIcon` | boolean | false | Se deve mostrar ícones de expansão/retração |
| `iconUpName` | string | 'chevron-up' | Nome do ícone para seção expandida |
| `iconDownName` | string | 'chevron-down' | Nome do ícone para seção retraída |
| `activeIconColor` | string | - | Cor do ícone quando a seção está ativa |
| `inactiveIconColor` | string | - | Cor do ícone quando a seção está inativa |
| `isMarkdown` | boolean | false | Se o conteúdo deve ser renderizado como markdown |
| `onChange` | (title: string) => void | - | Função chamada quando uma seção é aberta, recebe o título da seção |

### Tipo AccordionType

```tsx
type AccordionType = {
  title: string;  // Título da seção
  content: string; // Conteúdo da seção (texto ou markdown)
};
```

## Acessibilidade

O componente Accordion implementa as seguintes propriedades de acessibilidade:

- `accessibilityLabel`: Descreve cada seção para leitores de tela
- `accessibilityRole`: Definido como "button" para cada cabeçalho de seção
- `accessibilityHint`: Informa se tocar o cabeçalho vai expandir ou recolher o conteúdo

### Boas Práticas de Acessibilidade

1. **Títulos claros e descritivos**:
   - Use títulos informativos que claramente indicam o conteúdo da seção
   - Evite textos muito longos ou muito curtos para os títulos

2. **Contraste adequado**:
   - Garanta que o contraste entre o texto e o fundo seja suficiente
   - Use cores distintas para estados ativos e inativos

3. **Feedback visual claro**:
   - Inclua ícones para indicar claramente se uma seção está expandida ou recolhida
   - Forneça alguma mudança visual (cor, estilo) para indicar o estado ativo

## Exemplo Completo

```tsx
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Accordion, Typography } from '@platformbuilders/fluid-react-native';

const FAQScreen = () => {
  const [activeSection, setActiveSection] = useState('');
  
  const faqData = [
    {
      title: 'Como criar uma conta?',
      content: 'Para criar uma conta, acesse a tela inicial e toque em "Cadastrar". Preencha seus dados e siga as instruções na tela.',
    },
    {
      title: 'Como recuperar minha senha?',
      content: 'Na tela de login, toque em "Esqueci minha senha" e siga as instruções enviadas para seu e-mail.',
    },
    {
      title: 'Quais são os métodos de pagamento aceitos?',
      content: 'Aceitamos cartões de crédito das bandeiras Visa, Mastercard, American Express, além de boleto bancário e PIX.',
    },
  ];
  
  const handleSectionChange = (title) => {
    setActiveSection(title);
  };
  
  return (
    <View style={styles.container}>
      <Typography variant="h2">Perguntas Frequentes</Typography>
      <Accordion 
        data={faqData} 
        hasIcon
        activeIconColor="#2196F3"
        inactiveIconColor="#757575"
        onChange={handleSectionChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

export default FAQScreen;
``` 