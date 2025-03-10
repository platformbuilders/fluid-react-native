---
sidebar_position: 1
---

# Introdução ao Fluid React Native

O **Fluid React Native** é uma biblioteca de componentes UI implementando o Design System Fluid, desenvolvido pela Platform Builders. A biblioteca foi projetada para oferecer componentes reutilizáveis, personalizáveis e consistentes para aplicações React Native.

## O que é o Fluid Design System?

O Fluid Design System é um conjunto de padrões, componentes e diretrizes de design criados para garantir consistência visual e experiência do usuário em todos os produtos desenvolvidos pela Platform Builders e seus clientes.

## Principais Características

- **Design Tokens**: Sistema completo de tokens para cores, tipografia, espaçamento, bordas e sombras
- **Suporte a variantes**: Todos os componentes suportam múltiplas variantes de estilo
- **Temas dinâmicos**: Suporte para temas claros e escuros
- **Extensibilidade**: Possibilidade de estender o tema para atender necessidades específicas
- **Acessibilidade**: Componentes projetados com foco em acessibilidade
- **Tipagem forte**: Tipagem completa com TypeScript para melhor experiência de desenvolvimento

## Instalação

```bash
# Usando npm
npm install @platformbuilders/fluid-react-native

# Usando yarn
yarn add @platformbuilders/fluid-react-native
```

## Uso Básico

```tsx
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { Button, theme } from '@platformbuilders/fluid-react-native';

const App = () => (
  <ThemeProvider theme={theme}>
    <Button
      title="Botão Primário"
      variant="filled"
      colorVariant="primary"
      onPress={() => console.log('Botão pressionado')}
    />
  </ThemeProvider>
);

export default App;
```

## Próximos Passos

- Explore a [Arquitetura](/docs/architecture) do Fluid React Native
- Aprenda como [Começar](/docs/getting-started) a usar a biblioteca
- Conheça os [Componentes](/docs/components) disponíveis
- Entenda como funciona o [Sistema de Temas](/docs/theme)
