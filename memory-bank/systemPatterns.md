# Padrões do Sistema

## Arquitetura do Sistema
O Fluid React Native segue uma arquitetura modular baseada em componentes, com clara separação de responsabilidades:

```
fluid-react-native/
├── src/
│   ├── components/     # Componentes reutilizáveis
│   │   ├── ComponentName/
│   │   │   ├── index.tsx           # Implementação do componente
│   │   │   ├── styles.ts           # Estilos com styled-components
│   │   │   ├── ComponentName.stories.tsx  # Documentação Storybook
│   │   │   └── __tests__/          # Testes unitários
│   │   └── ...
│   ├── theme/          # Sistema de temas
│   │   ├── index.ts    # Exportações do tema
│   │   └── theme.json  # Definição dos tokens de design
│   ├── utils/          # Utilitários compartilhados
│   ├── types/          # Definições de tipos TypeScript
│   └── enums/          # Enumerações
├── docs/               # Documentação
└── dist/               # Código compilado para distribuição
```

## Decisões Técnicas-chave
1. **TypeScript**: Utilizado para garantir tipagem forte e melhor experiência de desenvolvimento
2. **Styled Components**: Escolhido para estilização devido à sua flexibilidade e suporte a temas
3. **Jest e React Testing Library**: Para testes unitários e de integração
4. **Storybook**: Para documentação interativa dos componentes
5. **Rspress**: Para documentação técnica do projeto

## Padrões de Design em Uso

### Padrão de Componentes
Cada componente segue uma estrutura consistente:
- **Componentes Funcionais**: Utilizando React Hooks
- **Props Tipadas**: Interface clara das propriedades aceitas
- **Estilização Isolada**: Estilos definidos em arquivo separado
- **Testes Unitários**: Cobertura mínima de 95%
- **Documentação**: Exemplos de uso no Storybook

### Sistema de Temas
O tema é implementado usando o Context API do React:
- **ThemeProvider**: Provedor de contexto que disponibiliza o tema para toda a aplicação
- **useTheme**: Hook para acessar o tema em qualquer componente
- **Tokens de Design**: Valores padronizados para cores, tipografia, espaçamento, etc.
- **Customização**: Possibilidade de sobrescrever o tema padrão

### Padrões de Estilização
- **Responsividade**: Adaptação a diferentes tamanhos de tela
- **Tokens de Design**: Uso consistente de valores predefinidos
- **Styled Components**: Estilos baseados em props e tema

## Relações entre Componentes
- **Composição**: Componentes complexos são compostos de componentes mais simples
- **Injeção de Tema**: Todos os componentes acessam o tema via Context API
- **Prop Drilling**: Evitado quando possível, preferindo composição ou Context
- **Componentes Controlados vs. Não-controlados**: Suporte a ambos os padrões para flexibilidade 