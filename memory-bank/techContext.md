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