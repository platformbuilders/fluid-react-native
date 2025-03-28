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

### Padrões de Testes e TestIDs
- **Estrutura de TestIDs**: Cada componente deve seguir um padrão consistente para testIDs
  - Formato recomendado: `{componentType}_{id}` (ex: `button_submit`, `input_email`)
  - Caso não haja `id`, usar `{componentType}_{accessibility}` como fallback
  - Em último caso, usar um valor padrão `{componentType}_{componentName}`
- **Testes de Componentes**:
  - Testes de renderização básica
  - Testes de interação (cliques, entrada de texto)
  - Testes de acessibilidade
  - Testes de estados (disabled, loading, error)
- **Thresholds de Testes**:
  - Threshold global: 84% para funções, statements e branches
  - Para componentes complexos com lógica intrincada, são configurados thresholds personalizados:
    - Exemplo do MaskedTextInput: threshold personalizado de 70% para branches, functions, lines e statements
    - A decisão de usar thresholds personalizados deve ser documentada e justificada
    - Comando para execução:
      ```
      npx jest --config=jest.config.js --coverage --collectCoverageFrom="path/to/component" path/to/test --coverageThreshold='{"./path/to/component":{"branches":70,"functions":70,"lines":70,"statements":70}}'
      ```
- **Melhores Práticas**:
  - Evitar casos especiais e condicionais complexas para testIDs
  - Documentar qualquer caso especial quando necessário
  - Manter consistência entre componentes relacionados (ex: TextInput e SearchInput)
  - Para componentes complexos, considerar thresholds personalizados em vez de adicionar testes desnecessários ou artificiais
- **Lições Aprendidas**:
  - A inconsistência na geração de testIDs entre componentes dificulta testes
  - Casos especiais de tratamento de IDs (como no componente SearchInput) devem ser evitados
  - Testes que dependem de IDs específicos são frágeis e difíceis de manter
  - Para componentes como MaskedTextInput com lógica de mascaramento complexa, é mais prático definir thresholds realistas do que tentar cobrir 100% do código

## Relações entre Componentes
- **Composição**: Componentes complexos são compostos de componentes mais simples
- **Injeção de Tema**: Todos os componentes acessam o tema via Context API
- **Prop Drilling**: Evitado quando possível, preferindo composição ou Context
- **Componentes Controlados vs. Não-controlados**: Suporte a ambos os padrões para flexibilidade 