# Contexto Técnico

## Tecnologias Utilizadas

### Core
- **React Native**: ^0.76.1
- **TypeScript**: ^5.3.3
- **Styled Components**: ^5.3.11

### Dependências Principais
- **@platformbuilders/helpers**: ^0.11.3
- **@platformbuilders/theme-toolkit**: ^0.3.0
- **react-native-vector-icons**: ^10.2.0
- **react-native-svg**: ^15.8.0
- **react-native-fast-image**: ^8.6.3
- **formik**: ^2.4.6
- **lodash**: ^4.17.21

### Desenvolvimento e Testes
- **Jest**: ^29.7.0
- **React Testing Library**: ^12.8.1
- **Storybook React Native**: ^8.4.2
- **ESLint**: ^8.57.1
- **Prettier**: ^3.3.3

### Documentação
- **rspress**: ^0.1.0
- **@rspress/plugin-api-docgen**: ^0.1.0

## Configuração de Desenvolvimento

### Requisitos
- Node.js >= 18
- Yarn ou NPM
- Ambiente React Native configurado para iOS e Android

### Scripts Principais
- `yarn build`: Compila o código para distribuição
- `yarn test`: Executa testes com Jest
- `yarn lint`: Verifica o código com ESLint
- `yarn docs:dev`: Inicia o servidor de documentação local
- `yarn storybook:generate`: Gera histórias para o Storybook

### Desenvolvimento Local
Para desenvolvimento local e testes em projetos que utilizam a biblioteca:
1. Utilize `yalc` para publicar localmente
2. Link a biblioteca no projeto de teste

## Testabilidade e Qualidade de Código

### TestIDs e Seletores para Testes
- Cada componente possui testIDs predefinidos seguindo o padrão `{componentType}_{id}`
- Os testIDs são utilizados para seleção em testes e automação
- Documentação específica para testIDs está disponível para facilitar a criação de testes

### Ferramentas de Qualidade de Código
- **TypeScript**: Verificação estática de tipos com `tsc`
- **ESLint**: Análise de código e garantia de padrões
- **Jest**: Testes unitários e cobertura de código
- **Semgrep**: Análise estática de segurança e padrões de código
- **React Testing Library**: Testes focados no comportamento do usuário

### Thresholds de Qualidade
- Cobertura geral de código: 90%+
- Cobertura de funções: 84%+
- Zero erros de linting
- Zero erros de TypeScript
- Todos os testes devem passar antes do merge
- Thresholds personalizados para componentes complexos, configurados caso a caso

### Validação Contínua
As seguintes verificações devem ser executadas regularmente durante o desenvolvimento:
```bash
# Verificação de tipos
npm run tsc

# Verificação de linting
npm run lint

# Análise de segurança (quando disponível)
npx semgrep --config=auto .

# Testes unitários e cobertura
npm test

# Testes com thresholds personalizados (exemplo para MaskedTextInput)
npx jest --config=jest.config.js --coverage --collectCoverageFrom="src/components/TextInput/MaskedTextInput/index.tsx" src/components/TextInput/__tests__/MaskedTextInput.spec.tsx --coverageThreshold='{"./src/components/TextInput/MaskedTextInput/index.tsx":{"branches":70,"functions":70,"lines":70,"statements":70}}'
```

## Restrições Técnicas

### Compatibilidade
- Suporte a React Native >= 0.63.0
- Compatibilidade com iOS >= 12 e Android >= 7
- Suporte a TypeScript >= 4.1

### Performance
- Componentes otimizados para renderização eficiente
- Evitar re-renderizações desnecessárias
- Lazy loading quando apropriado

### Acessibilidade
- Todos os componentes devem seguir as diretrizes de acessibilidade
- Suporte a leitores de tela
- Contraste adequado de cores

## Dependências

### Dependências Obrigatórias
Bibliotecas que devem ser instaladas junto com o Fluid:
- styled-components
- react-native-vector-icons
- react-native-svg

### Dependências Opcionais
Bibliotecas que são recomendadas mas não obrigatórias:
- formik (para formulários)
- react-native-fast-image (para imagens otimizadas)
- lottie-react-native (para animações)

### Integração com Outros Sistemas
- Compatível com navegação via React Navigation
- Pode ser utilizado em conjunto com Redux ou outros gerenciadores de estado
- Compatível com bibliotecas de formulários como Formik ou React Hook Form 

## Documentação Técnica

### Docusaurus para Documentação

A documentação do Fluid React Native está sendo implementada usando o Docusaurus 2, um gerador de sites estáticos moderno otimizado para documentação técnica.

#### Estrutura da Documentação

```
website/
├── blog/                # Posts do blog (futuro)
├── docs/                # Arquivos de documentação em Markdown
│   ├── intro.md         # Página de introdução
│   ├── getting-started.md # Guia de primeiros passos
│   ├── installation.md  # Guia de instalação
│   ├── theming.md       # Personalização de temas
│   ├── accessibility.md # Guia de acessibilidade
│   ├── components/      # Documentação de componentes
│   │   ├── button.md    # Documentação do Button
│   │   ├── card.md      # Documentação do Card
│   │   └── ...          # Outros componentes
│   └── guides/          # Guias avançados
│       └── best-practices.md # Melhores práticas
├── src/
│   ├── components/      # Componentes React personalizados
│   ├── css/             # Estilos CSS
│   │   └── custom.css   # CSS personalizado
│   └── pages/           # Páginas personalizadas
│       └── index.tsx    # Página inicial
├── static/
│   └── img/             # Imagens estáticas
│       ├── logo.svg     # Logo do projeto
│       └── ...          # Outras imagens
├── docusaurus.config.js # Configuração do Docusaurus
├── sidebars.js          # Configuração da barra lateral
└── package.json         # Dependências e scripts
```

#### Recursos Implementados

1. **Página Inicial Personalizada**
   - Header com logo e chamadas para ação
   - Seção de demonstração de código
   - Showcase de componentes 
   - Seção de destaques da biblioteca

2. **Estilização Personalizada**
   - CSS customizado para identidade visual
   - Variáveis de cores para temas claro e escuro
   - Tipografia personalizada

3. **Sidebar Organizada**
   - Dividida em categorias lógicas
   - Duas barras laterais: uma para tutoriais e outra para componentes

4. **Documentação Estruturada**
   - Páginas introdutórias sobre a biblioteca
   - Guias de instalação e configuração
   - Documentação de componentes com exemplos
   - Guias de melhores práticas

#### Configuração do Docusaurus

O arquivo `docusaurus.config.js` contém as configurações principais:

```javascript
module.exports = {
  title: 'Fluid React Native',
  tagline: 'Biblioteca de componentes UI para React Native',
  // URL do site
  url: 'https://platformbuilders.github.io',
  baseUrl: '/fluid-react-native/',
  
  // Configurações de temas, plugins e customizações
  
  // Links da navbar
  navbar: {
    title: 'Fluid React Native',
    logo: {
      alt: 'Fluid Logo',
      src: 'img/logo.svg',
    },
    items: [
      // Links de navegação
    ],
  },
  
  // Configuração das barras laterais
  plugins: [
    // Plugins adicionais
  ],
  
  // Configuração de temas
  themes: [
    // Temas adicionais
  ],
};
```

#### Manutenção da Documentação

A documentação segue estas diretrizes técnicas:

1. **Versionamento**: O Docusaurus permite versionar a documentação para diferentes versões da biblioteca (a ser implementado)

2. **Markdown e MDX**: Toda a documentação é escrita em Markdown com suporte a componentes MDX para exemplos interativos

3. **Exemplos de Código**: Os exemplos de código são formatados com sintaxe TypeScript/JSX e incluem props essenciais

4. **Acessibilidade**: A documentação segue práticas de acessibilidade web

5. **Buscabilidade**: Implementação futura de busca integrada para facilitar a navegação

#### Recursos Planejados

- Playground interativo para experimentar componentes
- Versioning para documentar diferentes versões da biblioteca
- Integração com Algolia DocSearch para busca avançada
- Suporte a PWA para experiência offline

#### Ferramentas de Desenvolvimento

- **Node.js**: Ambiente de execução
- **npm/yarn**: Gerenciamento de pacotes
- **React**: Framework para componentes personalizados
- **TypeScript**: Tipagem estática para os exemplos
- **CSS Modules**: Para estilização modular 