# @platformbuilders/fluid-react-native

[![Build Status][check-badge]][workflows]
[![Coverage][coverage-badge]][codecov]
[![npm][npm-badge]][npm]
[![MIT][license-badge]][license]

[npm-badge]: https://img.shields.io/npm/v/@platformbuilders/fluid-react-native.svg
[npm]: https://www.npmjs.com/package/@platformbuilders/fluid-react-native
[license-badge]: https://img.shields.io/dub/l/vibe-d.svg
[license]: https://raw.githubusercontent.com/platformbuilders/fluid-react-native/master/LICENSE.md
[workflows]: https://github.com/platformbuilders/fluid-react-native/actions
[check-badge]: https://github.com/platformbuilders/fluid-react-native/workflows/check/badge.svg
[coverage-badge]: https://codecov.io/gh/platformbuilders/fluid-react-native/branch/master/graph/badge.svg
[codecov]: https://codecov.io/gh/platformbuilders/fluid-react-native

# Fluid React Native

<p align="center">
  <img src="src/assets/images/logo-full-black.png" alt="Fluid React Native" width="400"/>
</p>

<p align="center">
  <a href="https://github.com/platformbuilders/fluid-react-native/actions">
    <img src="https://github.com/platformbuilders/fluid-react-native/workflows/check/badge.svg" alt="Build Status" />
  </a>
  <a href="https://www.npmjs.com/package/@platformbuilders/fluid-react-native">
    <img src="https://img.shields.io/npm/v/@platformbuilders/fluid-react-native.svg" alt="npm version" />
  </a>
  <a href="https://www.npmjs.com/package/@platformbuilders/fluid-react-native">
    <img src="https://img.shields.io/npm/dm/@platformbuilders/fluid-react-native.svg" alt="npm downloads" />
  </a>
  <a href="https://fluid-ds.web.app">
    <img src="https://img.shields.io/badge/docs-website-green" alt="documentation" />
  </a>
  <a href="https://github.com/platformbuilders/fluid-react-native/blob/main/LICENSE.md">
    <img src="https://img.shields.io/github/license/platformbuilders/fluid-react-native" alt="license" />
  </a>
</p>

## 📖 Sobre

O Fluid React Native é uma biblioteca de componentes UI que implementa o Design System Fluid, desenvolvido pela Platform Builders. Projetada para acelerar o desenvolvimento de aplicações React Native, oferecendo componentes reutilizáveis, personalizáveis e consistentes.

### 🌟 Características

- 🎨 **Design System Consistente**: Implementação fiel do Fluid Design System
- 🔧 **Altamente Personalizável**: Sistema de temas poderoso e flexível
- 📱 **Multiplataforma**: Suporte nativo para iOS e Android
- 🎯 **Tipagem Forte**: TypeScript por padrão
- ♿ **Acessível**: Componentes projetados com acessibilidade em mente
- 🧪 **Bem Testado**: Cobertura de testes abrangente

## 🚀 Começando

### Instalação

```bash
# Usando npm
npm install @platformbuilders/fluid-react-native

# Usando yarn
yarn add @platformbuilders/fluid-react-native
```

### Configuração Básica

```tsx
import React from 'react';
import { ThemeProvider } from '@platformbuilders/fluid-react-native';

const App = () => {
  return (
    <ThemeProvider>
      {/* Seu app aqui */}
    </ThemeProvider>
  );
};

export default App;
```

## 🎨 Sistema de Temas

O Fluid React Native utiliza um sistema de temas poderoso que permite personalização completa da aparência dos componentes.

### Diagrama de Injeção de Temas

```
┌─────────────┐          ┌───────────────┐          ┌────────────────┐          ┌────────────┐
│  theme.json │          │   theme/index │          │ ThemeProvider  │          │ Components │
└──────┬──────┘          └───────┬───────┘          └────────┬───────┘          └─────┬──────┘
       │                         │                           │                        │
       │ Definição de tokens     │                           │                        │
       ├────────────────────────►│                           │                        │
       │                         │                           │                        │
       │                         │ Processamento com         │                        │
       │                         │ theme-toolkit             │                        │
       │                         ├──────────────────────────►│                        │
       │                         │                           │                        │
       │                         │                           │ Injeção via            │
       │                         │                           │ Context API            │
       │                         │                           ├───────────────────────►│
```

### Personalizando o Tema

```tsx
import { ThemeProvider, DefaultTheme } from '@platformbuilders/fluid-react-native';

const customTheme: DefaultTheme = {
  colors: {
    primary: '#FF0000',
    // ... outros tokens de cor
  },
  // ... outros tokens
};

const App = () => (
  <ThemeProvider theme={customTheme}>
    {/* Seu app aqui */}
  </ThemeProvider>
);
```

## 📚 Documentação

Visite nossa [documentação completa](https://fluid-ds.web.app) para:
- Guias detalhados
- Catálogo de componentes
- Exemplos de código
- Melhores práticas
- Storybook interativo

### 🚀 Deploy da Documentação

Para fazer o deploy da documentação, siga estas etapas:

1. Instale o Firebase CLI (se ainda não tiver):
   ```bash
   npm install -g firebase-tools
   ```

2. Faça login no Firebase:
   ```bash
   firebase login
   ```

3. Configure o alvo do Firebase Hosting:
   ```bash
   ./firebase-setup.sh
   ```

4. Para fazer o deploy:
   ```bash
   yarn deploy
   ```
   ou
   ```bash
   ./deploy.sh
   ```

5. Para testar o build sem fazer deploy:
   ```bash
   ./test-deploy.sh
   ```

A documentação estará disponível em [https://fluid-ds.web.app](https://fluid-ds.web.app).

## 🧪 Desenvolvimento Local

### Usando Yalc

1. Instale o Yalc globalmente:
```bash
npm install -g yalc
```

2. No diretório do Fluid:
```bash
yalc publish
```

3. No seu projeto:
```bash
yalc add @platformbuilders/fluid-react-native
```

4. Para atualizar após mudanças:
```bash
yalc publish --push
```

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor, leia nosso [guia de contribuição](CONTRIBUTING.md) para detalhes sobre nosso código de conduta e processo de submissão de Pull Requests.

### Criando um Novo Componente

1. Crie o componente seguindo nossa estrutura padrão:
```
ComponentName/
├── index.tsx           # Implementação principal
├── styles.ts          # Estilos (styled-components)
├── ComponentName.stories.tsx  # Documentação
└── __tests__/         # Testes
```

2. Exporte o componente em `src/components/index.ts`:
```typescript
export { default as ComponentName } from './ComponentName';
```

3. Adicione testes:
```typescript
import { render } from '@testing-library/react-native';
import ComponentName from '../index';

describe('ComponentName', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<ComponentName />);
    expect(getByTestId('component-name')).toBeTruthy();
  });
});
```

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE.md](LICENSE.md) para detalhes.

## 🙏 Agradecimentos

- Time Platform Builders
- Contribuidores
- Comunidade React Native
