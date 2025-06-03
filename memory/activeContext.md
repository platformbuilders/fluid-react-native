---
context: "Yarn Lint Analysis"
date: "2024"
priority: "Critical"
next_steps: ["Fix Type Dependencies", "Update Resolutions", "Test Components"]
tags: ["typescript", "lint", "dependencies", "react-types"]
related: ["[[projectbrief]]", "[[techContext]]"]
---

# Contexto Ativo: Análise Yarn Lint

## Status Atual
🔴 **CRÍTICO**: 160 erros TypeScript impedem build do projeto

## Descobertas da Análise

### Padrão Principal: TS2786
```typescript
error TS2786: 'ThemeProvider' cannot be used as a JSX component.
Its instance type 'Component<ThemeProviderProps<any, any>, any, any>' is not a valid JSX element.
```

### Causa Raiz Identificada
**Conflito de tipos React** entre:
- `@types/react: ^17.0.43` (resolução forçada)
- `@types/react-native-vector-icons: 6.4.5` (contém tipos React internos)

### Componentes Sistemicamente Afetados

#### 1. ThemeProvider (Styled Components)
- **Localização**: Todos os `__tests__/*.spec.tsx`
- **Erro**: Não reconhecido como componente JSX válido
- **Count**: ~120 erros

#### 2. React Native Core Components
- **View**: `src/components/Icon/index.tsx`, `src/components/Shadow/index.tsx`
- **Text**: `src/components/If/__tests__/*.tsx`
- **TouchableOpacity**: `src/components/Touchable/index.tsx`

#### 3. Third-party Components
- **FastImage**: `src/components/Avatar/index.tsx`
- **Markdown**: `src/components/Accordion/index.tsx`, `src/components/Markdown/index.tsx`
- **DatePicker**: `src/components/DatePicker/styles.ts`

## Mensagem de Erro Típica
```
Type 'React.ReactNode' is not assignable to type 'import("/Volumes/git/builders/fluid-react-native/node_modules/@types/react-native-vector-icons/node_modules/@types/react/index").ReactNode'
```

## Próximos Passos Identificados

### 1. Atualizar Resoluções
```json
{
  "resolutions": {
    "@types/react": "^17.0.43",
    "@types/react-native-vector-icons/@types/react": "^17.0.43"
  }
}
```

### 2. Verificar Compatibilidade
- Atualizar `@types/react-native-vector-icons` para versão compatível
- Validar styled-components compatibilidade com React 17

### 3. Estratégia de Correção
1. 🎯 **Fase 1**: Resolver conflito de dependências
2. 🧪 **Fase 2**: Testar componentes individualmente  
3. 📋 **Fase 3**: Validar toda a suíte de testes

## Impacto no Desenvolvimento
- ❌ Builds falham
- ❌ Testes não executam
- ❌ CI/CD bloqueado
- ❌ Deploy impedido 