# Tratando Warnings de act() no React 18

## Problema

Após a atualização para o React 18, muitos testes começaram a exibir o seguinte aviso:

```
Warning: An update to [Component] inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser.
```

Este aviso ocorre quando o React detecta atualizações de estado que não estão envolvidas pela função `act()`, o que pode levar a comportamentos imprevisíveis nos testes.

## Causas Comuns

1. **Eventos que Atualizam Estado**: Quando acionamos eventos como `onChange`, `onPress`, etc., que atualizam o estado do componente.
2. **Efeitos Assíncronos**: Quando o componente possui `useEffect` ou outras operações assíncronas que atualizam o estado.
3. **Renderização Inicial**: Componentes que atualizam seu estado durante a montagem.
4. **Timers e Promises**: Operações assíncronas que eventualmente atualizam o estado.

## Solução

### 1. Envolver a Renderização do Componente com act()

```tsx
// Antes
const wrapper = renderer.create(
  <ThemeProvider theme={theme}>
    <Component prop={value} />
  </ThemeProvider>
);

// Depois
let wrapper;
renderer.act(() => {
  wrapper = renderer.create(
    <ThemeProvider theme={theme}>
      <Component prop={value} />
    </ThemeProvider>
  );
});
```

### 2. Envolver Eventos com act()

```tsx
// Antes
fireEvent.changeText(input, 'novo valor');
expect(input.props.value).toBe('novo valor');

// Depois
renderer.act(() => {
  fireEvent.changeText(input, 'novo valor');
});
expect(input.props.value).toBe('novo valor');
```

### 3. Lidar com Eventos Assíncronos

Para operações assíncronas, use a versão assíncrona de act():

```tsx
// Para timers, promises e outros eventos assíncronos
await renderer.act(async () => {
  fireEvent.press(button);
  // Esperar por qualquer assincronicidade
  await new Promise(resolve => setTimeout(resolve, 0));
});
```

### 4. Usando act() com Testing Library

Quando estiver usando a React Native Testing Library, a maioria das funções de evento já está envolvida por act() internamente, mas às vezes você ainda precisa envolver manualmente:

```tsx
import { render, fireEvent, act } from 'react-native-testing-library';

it('should handle async updates', async () => {
  const { getByTestId } = render(<MyComponent />);
  
  await act(async () => {
    fireEvent.press(getByTestId('button'));
    // Esperar pela resolução de qualquer assincronicidade
  });
  
  // Fazer asserções
});
```

## Exemplo Prático: Corrigindo Testes do SearchInput

O componente SearchInput tem vários estados internos que são atualizados em resposta a eventos do usuário. Aqui está como corrigi os warnings act():

### Antes:

```tsx
it('should test onPressIcon with a custom onIconPress function', () => {
  const onChange = jest.fn();
  const onIconPress = jest.fn();
  const onClear = jest.fn();

  const { getByTestId } = render(
    <ThemeProvider theme={theme}>
      <Search
        id="testing_icon"
        accessibility=""
        onChange={onChange}
        onIconPress={onIconPress}
        onClear={onClear}
      />
    </ThemeProvider>
  );

  const input = getByTestId('input_testing_icon');
  fireEvent.changeText(input, 'test value');
  
  const component = getByTestId('search_testing_icon');
  const onPressIconMock = component.props.children.props.onPressIcon;
  onPressIconMock();
  
  expect(onIconPress).toHaveBeenCalled();
});
```

### Depois:

```tsx
it('should test onPressIcon with a custom onIconPress function', async () => {
  const onChange = jest.fn();
  const onIconPress = jest.fn();
  const onClear = jest.fn();

  const { getByTestId } = render(
    <ThemeProvider theme={theme}>
      <Search
        id="testing_icon"
        accessibility=""
        onChange={onChange}
        onIconPress={onIconPress}
        onClear={onClear}
      />
    </ThemeProvider>
  );

  const input = getByTestId('input_testing_icon');
  
  await act(async () => {
    fireEvent.changeText(input, 'test value');
  });
  
  expect(input.props.value).toBe('test value');
  
  const component = getByTestId('search_testing_icon');
  const onPressIconMock = component.props.children.props.onPressIcon;
  
  await act(async () => {
    onPressIconMock();
  });
  
  expect(onIconPress).toHaveBeenCalled();
  expect(onClear).toHaveBeenCalled();
});
```

## Dicas para Evitar Warnings de act()

1. **Use render e fireEvent da Testing Library**: Essas funções já usam act() internamente.
2. **Envolva manualmente as atualizações de estado**: Quando usar métodos diretos do componente ou quando simular eventos não suportados pela Testing Library.
3. **Seja paciente com operações assíncronas**: Use a versão assíncrona de act() quando necessário.
4. **Verifique por que o estado está mudando**: Às vezes, o warning indica um problema real no comportamento do componente.
5. **Considere usar waitFor para verificações assíncronas**: Se o estado muda depois de um tempo, use `waitFor` para verificar depois que a mudança ocorrer.

## Conclusão

Os warnings de act() são mecanismos de proteção importantes que garantem que seus testes reflitam com precisão o comportamento real dos seus componentes. Corrigir esses warnings não só melhora a qualidade dos testes, mas também ajuda a identificar bugs potenciais no código do componente.

A regra de ouro é: sempre que um componente atualiza seu estado em resposta a uma ação, essa ação deve estar envolvida por act(). 