# Contexto Técnico

## Tecnologias Principais
- **React Native**: Framework de base para todos os componentes
- **TypeScript**: Utilizado para tipagem estática em todo o projeto
- **Styled Components**: Sistema de estilização principal
- **Jest**: Framework de testes
- **React Native Testing Library**: Ferramenta para testar componentes React Native

## Dependências Principais
- react
- react-native
- styled-components/native
- react-native-svg (para componentes de ícones)

## Configuração de Testes
- Jest configurado para testar componentes React Native
- Thresholds de cobertura globais:
  - Statements: 95%
  - Branches: 95%
  - Functions: 84%
  - Lines: 95%
- Thresholds personalizados para componentes complexos:
  - TextInput: 80% para functions
  - MaskedTextInput: 70% para statements, branches, functions e lines

## Convenções de Código
- Componentes funcionais com hooks
- Props tipadas com interfaces TypeScript
- Estilização com styled-components e tema
- Funções arrow para componentes
- Documentação com Storybook
- Testes seguindo padrão AAA (Arrange, Act, Assert)

## Estrutura de Diretórios
```
src/
├── components/           # Componentes da biblioteca
│   ├── ComponentName/    # Diretório para cada componente
│   │   ├── index.tsx     # Implementação principal
│   │   ├── styles.ts     # Estilos com styled-components
│   │   ├── ComponentName.stories.tsx  # Documentação Storybook
│   │   └── __tests__/    # Testes unitários
├── enums/                # Enumerações compartilhadas
├── theme/                # Sistema de temas
└── utils/                # Utilitários compartilhados
```

## Padrões de TestID
- Formato: `{componentType}_{id}` (ex: `button_submit`, `input_email`)
- Fallback 1: `{componentType}_{accessibility}` quando não há `id`
- Fallback 2: `{componentType}_{componentType}` para casos restantes

## Ambientes de Execução
- iOS 11+
- Android API 21+
- React Native 0.62+

## Ferramentas de CI/CD
- GitHub Actions para execução de testes automatizados
- Threshold de cobertura configurado no Jest

## Restrições Técnicas
- Compatibilidade com diferentes versões do React Native
- Minimização do tamanho do bundle
- Evitar dependências externas quando possível
- Manter compatibilidade com iOS e Android 