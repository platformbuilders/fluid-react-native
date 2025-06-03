---
kanban-plugin: basic
---

## Backlog

- Investigar versões atuais de @types/react-native-vector-icons
- Analisar impacto de upgrade para React 18
- Documentar componentes com erros específicos
- Criar testes de regressão para tipos
- Implementar CI check para conflitos de tipos

## Trabalho Atual

- **CRÍTICO**: Resolver 160 erros TS2786 do yarn lint
- Analisar conflito entre @types/react versões
- Identificar padrão de erros ThemeProvider
- Mapear componentes React Native afetados

## Próximos Passos

- Atualizar resolutions no package.json para forçar @types/react unificado
- Testar build após correção de dependências
- Validar componentes ThemeProvider funcionais
- Corrigir tipos de componentes third-party (FastImage, Markdown, DatePicker)
- Executar yarn lint para validar correções

## Concluído

- ✅ Executar yarn lint e capturar todos os erros
- ✅ Identificar padrão TS2786 como problema principal
- ✅ Mapear causa raiz: conflito @types/react-native-vector-icons
- ✅ Documentar componentes sistemicamente afetados
- ✅ Criar estratégia de resolução em fases 