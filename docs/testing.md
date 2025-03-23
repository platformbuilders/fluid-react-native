# Estratégias de Teste no Fluid React Native

Este documento descreve as estratégias de teste utilizadas no projeto Fluid React Native, incluindo abordagens para garantir alta cobertura de código e testar comportamentos complexos.

## Visão Geral

Na biblioteca Fluid React Native, utilizamos uma combinação de:

- Testes unitários para componentes individuais
- Testes de snapshot para garantir consistência visual
- Testes de interação para verificar comportamentos
- Testes de acessibilidade para garantir que os componentes são acessíveis

## Thresholds de Cobertura

Estabelecemos os seguintes thresholds mínimos de cobertura:

- **Statements**: 90%
- **Branches**: 84%
- **Functions**: 84%
- **Lines**: 90%

Para componentes com lógica particularmente complexa, definimos thresholds personalizados, como é o caso do `MaskedTextInput` (70% para branches, functions, statements e lines).

## Abordagem de Testagem

### Estudo de Caso: RadioButton

O componente `RadioButton` ilustra nossa abordagem para melhorar a cobertura de testes:

#### Problema Inicial

O componente tinha 66.66% de cobertura de funções, mesmo com 100% de cobertura para statements e lines. Analisando o código, identificamos que a função `handlePress` não estava sendo testada em todos os caminhos possíveis.

#### Solução Implementada

Adicionamos testes específicos para:

1. **Cenário com `disabled={true}`**: Verificar que `onPress` não é chamado quando o botão está desabilitado
2. **Cenário sem `onPress` definido**: Verificar que não ocorre erro quando `onPress` não é fornecido
3. **Cenário padrão**: Testar o caminho feliz quando `onPress` é chamado corretamente

#### Código de Teste

```tsx
// Teste para quando onPress é chamado (não desabilitado)
it('should call onPress when radio button is pressed and not disabled', () => {
  const onPressMock = jest.fn();
  const { getByTestId } = render(
    <ThemeProvider theme={theme}>
      <RadioButton
        id="test-radio"
        accessibility="accessibility test"
        onPress={onPressMock}
        checked={false}
      />
    </ThemeProvider>,
  );

  const radioButton = getByTestId('radio_test-radio');
  fireEvent.press(radioButton);
  
  expect(onPressMock).toHaveBeenCalledTimes(1);
});

// Teste para quando disabled=true impede o onPress
it('should not call onPress when radio button is pressed and disabled', () => {
  const onPressMock = jest.fn();
  const { getByTestId } = render(
    <ThemeProvider theme={theme}>
      <RadioButton
        id="test-radio"
        accessibility="accessibility test"
        onPress={onPressMock}
        disabled={true}
        checked={false}
      />
    </ThemeProvider>,
  );

  const radioButton = getByTestId('radio_test-radio');
  fireEvent.press(radioButton);
  
  expect(onPressMock).not.toHaveBeenCalled();
});

// Teste para quando onPress não é fornecido
it('should render correctly when onPress is not provided', () => {
  const { getByTestId } = render(
    <ThemeProvider theme={theme}>
      <RadioButton
        id="test-radio"
        accessibility="accessibility test"
        // onPress não é fornecido intencionalmente
      />
    </ThemeProvider>,
  );

  const radioButton = getByTestId('radio_test-radio');
  
  // Verifica se não ocorre erro ao pressionar sem onPress
  expect(() => {
    fireEvent.press(radioButton);
  }).not.toThrow();
});
```

#### Resultado

Com esses testes adicionais, conseguimos:

- Aumentar a cobertura de funções de 66.66% para 100%
- Manter a cobertura de branches em 90.9% (faltando apenas um cenário muito específico)
- Garantir que todos os caminhos de código importantes são testados

## Melhores Práticas

Ao implementar testes para novos componentes ou melhorar a cobertura de componentes existentes, recomendamos:

1. **Identificar todos os caminhos condicionais** no código e criar testes específicos para cada um
2. **Usar mocks para isolar comportamento** de dependências externas
3. **Testar tanto casos de sucesso quanto de erro**
4. **Verificar estados de acessibilidade** para garantir usabilidade
5. **Usar snapshots com moderação** para capturar a representação visual dos componentes
6. **Testar interações do usuário** usando `fireEvent` ou `userEvent`

## Ferramentas

Utilizamos as seguintes ferramentas para testes:

- **Jest**: Framework de teste
- **React Native Testing Library**: Para renderizar e interagir com componentes
- **jest-styled-components**: Para testar estilos baseados em props
- **@testing-library/jest-native**: Para assertions específicas de React Native

## Executando Testes

Para executar testes com cobertura:

```bash
# Testar todos os componentes
yarn test --coverage

# Testar um componente específico
yarn test src/components/RadioButton/__tests__/RadioButton.spec.tsx --coverage

# Testar com thresholds personalizados
npx jest --config=jest.config.js --coverage --collectCoverageFrom="path/to/component" path/to/test --coverageThreshold='{"./path/to/component":{"branches":70,"functions":70,"lines":70,"statements":70}}'
``` 