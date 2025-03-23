# Padrões de Sistema

## Arquitetura de Componentes

### Padrão de Composição
Os componentes da biblioteca Fluid React Native seguem um padrão de composição, onde componentes complexos são construídos a partir de componentes mais simples e reutilizáveis. Esse padrão facilita a manutenção, teste e extensibilidade.

```jsx
// Exemplo de composição
const Button = ({ children, ...props }) => (
  <Touchable {...props}>
    <ButtonContent>
      {leftIcon && <Icon name={leftIcon} />}
      <Typography variant="button">{children}</Typography>
      {rightIcon && <Icon name={rightIcon} />}
    </ButtonContent>
  </Touchable>
);
```

### Padrão de Props
Todos os componentes seguem um padrão consistente de props, incluindo:
- `id`: Identificador único do componente
- `accessibility`: Label de acessibilidade 
- `testID`: ID para testes automatizados (gerado automaticamente se não fornecido)
- Props específicas para o componente
- Props de estilo
- Props nativas do React Native via spread operator

## Padrões de Design

### Sistema de Temas
A biblioteca utiliza um sistema de temas baseado no styled-components para garantir consistência visual e facilitar a personalização. O tema define:

- Paleta de cores
- Espaçamentos
- Tipografia
- Bordas e raios
- Sombras
- Transições
- Media queries

```tsx
// Exemplo de uso do tema
const Button = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;
```

### Responsividade
Os componentes são projetados para serem responsivos em diferentes tamanhos de tela e orientações:

- Uso de unidades flexíveis em vez de valores fixos
- Media queries para adaptação em diferentes dispositivos
- Layouts flexíveis com flexbox

### Acessibilidade
Todos os componentes seguem boas práticas de acessibilidade:

- Suporte completo para leitores de tela via `accessibilityLabel` e `accessibilityHint`
- Contrast ratio adequado para textos
- Tamanhos de toque adequados para interação
- Estados de foco visíveis

## Padrões de Teste

### Estrutura dos Testes
Os testes seguem uma estrutura consistente:

1. **Snapshot Tests**: Para garantir consistência visual
2. **Rendering Tests**: Para verificar renderização adequada
3. **Interactive Tests**: Para testar interações de usuário
4. **Edge Cases**: Para testar casos limites e comportamentos específicos
5. **Accessibility Tests**: Para verificar propriedades de acessibilidade

### Convenções de Testes
- Um arquivo de teste por componente
- Uso do padrão AAA (Arrange, Act, Assert)
- Mocks para dependências externas
- Testes para diferentes props e estados
- Cobertura completa de branches

```tsx
// Exemplo de padrão de teste
it('should handle press event', () => {
  // Arrange
  const onPressMock = jest.fn();
  const { getByTestId } = render(<Button id="test" onPress={onPressMock} />);
  const button = getByTestId('button_test');
  
  // Act
  fireEvent.press(button);
  
  // Assert
  expect(onPressMock).toHaveBeenCalled();
});
```

## Padrões de Estilização

### Componentes Estilizados
Os componentes são estilizados usando styled-components, seguindo algumas convenções:

- Componentes de estilo em arquivos separados (`styles.ts`)
- Estilos baseados em props para variações
- Uso consistente do sistema de temas
- Propriedades CSS em ordem alfabética

```tsx
// Exemplo de estilização
const ButtonContainer = styled.TouchableOpacity<ButtonProps>`
  align-items: center;
  background-color: ${({ variant, theme }) => 
    variant === 'primary' ? theme.colors.primary : theme.colors.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  flex-direction: row;
  justify-content: center;
  padding: ${({ size, theme }) => 
    size === 'large' ? theme.spacing.lg : theme.spacing.md};
`;
```

### Variantes de Componentes
Componentes podem ter variantes que alteram sua aparência ou comportamento, controladas por props:

- `variant`: Altera o estilo visual (ex: 'primary', 'secondary')
- `size`: Controla o tamanho (ex: 'sm', 'md', 'lg')
- `status`: Define estados como 'error', 'success', 'warning' 