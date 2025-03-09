# Arquitetura do Fluid React Native

## Visão Geral

O Fluid React Native é uma biblioteca de componentes UI implementando o Design System Fluid, desenvolvido pela Platform Builders. A arquitetura foi projetada para oferecer componentes reutilizáveis, personalizáveis e consistentes para aplicações React Native.

## Estrutura do Projeto

```
fluid-react-native/
├── src/
│   ├── assets/         # Recursos estáticos (imagens, fontes, SVGs, animações)
│   ├── components/     # Componentes UI reutilizáveis
│   ├── enums/          # Enumerações e constantes
│   ├── theme/          # Sistema de temas
│   ├── types/          # Definições de tipos TypeScript
│   └── utils/          # Utilitários e helpers
```

## Sistema de Componentes

Cada componente segue uma estrutura consistente:

```
ComponentName/
├── index.tsx           # Implementação principal do componente
├── styles.ts           # Estilos usando styled-components
├── ComponentName.stories.tsx  # Documentação Storybook
└── __tests__/          # Testes unitários e snapshots
```

## Sistema de Temas

O sistema de temas é o coração da biblioteca, permitindo personalização consistente em toda a aplicação.

### Diagrama de Sequência de Injeção do Tema

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
       │                         │                           │                        │
       │                         │                           │                        │ Acesso ao tema
       │                         │                           │                        │ via styled-components
       │                         │                           │                        │ getTheme()
       │                         │                           │                        │
```

## Principais Dependências

- **React Native (0.76.1)**: Framework base
- **TypeScript**: Para tipagem estática
- **styled-components**: Sistema de estilização
- **@platformbuilders/theme-toolkit**: Utilitários para processamento de temas
- **@platformbuilders/helpers**: Funções helpers compartilhadas
- **react-native-vector-icons**: Sistema de ícones
- **lottie-react-native**: Animações
- **formik**: Manipulação de formulários

## Padrões de Implementação

### Exemplo de Componente Button

```tsx
// Definição do Componente
const Button: React.FC<ButtonProps> = ({
  title,
  loading,
  disabled,
  variant = 'filled',
  colorVariant = 'primary',
  iconPosition = 'left',
  icon,
  ...rest
}) => {
  const isDisabled = disabled || loading;
  
  return (
    <Container 
      variant={variant} 
      colorVariant={colorVariant} 
      disabled={isDisabled} 
      {...rest}
    >
      {loading ? (
        <LoadingIndicator size="small" colorVariant={colorVariant} />
      ) : (
        <>
          {icon && iconPosition === 'left' && <Icon name={icon} />}
          <ButtonText variant={variant} colorVariant={colorVariant}>
            {title}
          </ButtonText>
          {icon && iconPosition === 'right' && <Icon name={icon} />}
        </>
      )}
    </Container>
  );
};

// Estilização com Tema
const Container = styled(Touchable)<ContainerProps>`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: ${getTheme('borderRadius.md')};
  padding: ${getTheme('spacing.xs')} ${getTheme('spacing.md')};
  background-color: ${({ variant, colorVariant, disabled, theme }) => 
    getButtonBackgroundColor({ variant, colorVariant, disabled, theme })};
  /* outros estilos... */
`;
```

### Processamento de Temas

```typescript
// Em src/theme/index.ts
import { formatTheme } from '@platformbuilders/theme-toolkit';
import themeJson from './theme.json';
import animations from './animations';

const theme = formatTheme(themeJson);

export default {
  ...theme,
  animations,
};
```

## Estratégia de Testes

- **Testes Unitários**: Verificam funcionalidades isoladas
- **Testes de Snapshot**: Garantem consistência visual
- **Mock de Dependências**: Isolam os componentes durante os testes

A biblioteca utiliza Jest e React Native Testing Library para testes completos de funcionalidade e interação.