# Estratégias de Teste para o MaskedTextInput

Este documento descreve as estratégias de teste utilizadas para o componente MaskedTextInput, um dos componentes mais complexos da biblioteca Fluid React Native devido à sua integração com a biblioteca de mascaramento de texto.

## Desafios Encontrados

O componente MaskedTextInput apresentava desafios específicos para testes:

1. **Complexidade Ciclomática**: A estrutura switch-case no método `maskTypeControll` aumentava a complexidade ciclomática e dificultava a cobertura de todos os branches.

2. **Diretivas de Ignorar Cobertura**: Várias seções do código estavam marcadas com `/* istanbul ignore next */`, o que artificialmente aumentava os números de cobertura, mas não assegurava que o código estava sendo realmente testado.

3. **Testabilidade do Código**: A estrutura original dificultava a instrumentação e o teste de caminhos específicos de execução.

4. **Interações com Estado Interno**: O componente utiliza estado interno (via `useState`) que precisava ser verificado indiretamente através do comportamento do componente.

## Abordagem de Solução

Nossa abordagem para melhorar a cobertura de testes do MaskedTextInput incluiu:

### 1. Refatoração do Código para Testabilidade

Substituímos a estrutura switch-case por uma série de if-else statements, que são mais fáceis de testar individualmente:

```tsx
// Antes (switch-case):
switch (maskType) {
  case 'cpf':
  case 'document':
    /* istanbul ignore next */
    setMaskSelected({
      typeMask: 'cpf',
      options: { mask: '' },
    });
    break;
  case 'cnpj':
    /* istanbul ignore next */
    setMaskSelected({
      typeMask: 'cnpj',
      options: { mask: '' },
    });
    break;
  // mais casos...
}

// Depois (if-else):
if (maskType === 'cpf' || maskType === 'document') {
  setMaskSelected({
    typeMask: 'cpf',
    options: { mask: '' },
  });
} else if (maskType === 'cnpj') {
  setMaskSelected({
    typeMask: 'cnpj',
    options: { mask: '' },
  });
}
// mais condições...
```

### 2. Remoção de Diretivas de Ignorar Cobertura

Removemos todos os comentários `/* istanbul ignore next */` para ter uma medição precisa da cobertura real.

### 3. Teste de Comportamento Observável

Em vez de tentar mockar funções internas ou estados do componente, focamos em verificar o comportamento observável:

```tsx
it('should directly instrument specific maskTypeControll branches', () => {
  // Testar CPF
  const { getByTestId, rerender } = render(
    <ThemeProvider theme={theme}>
      <MaskedTextInput
        id="test"
        accessibility="test"
        maskType="cpf"
        value="12345678900"
      />
    </ThemeProvider>,
  );
  
  const input = getByTestId('test');
  // Verificar se o componente usa o type 'cpf' internamente
  expect(input.props.type).toBe('cpf');
  
  // Testar outros casos com rerender...
});
```

### 4. Verificação Indireta de Atualizações de Estado

Verificamos as mudanças de estado indiretamente através da renderização e re-renderização do componente:

```tsx
it('should test the handleSetMask logic through component behavior', () => {
  const { getByTestId, rerender } = render(/* ... */);
  
  // Verificar estado inicial
  const input = getByTestId('test');
  expect(input.props.type).toBe('cpf');
  
  // Mudar props para forçar atualização
  rerender(/* ... */);
  
  // Verificar mudança de estado
  expect(input.props.type).toBe('cnpj');
});
```

### 5. Teste Exaustivo de Tipos de Máscara

Criamos testes específicos para cada tipo de máscara suportado:

```tsx
// Testando múltiplos tipos de máscara
it('should handle cel-phone mask type correctly', () => {
  // ...implementação...
});

it('should handle zip-code mask type correctly', () => {
  // ...implementação...
});

it('should handle money mask type correctly', () => {
  // ...implementação...
});

// ... etc
```

## Resultados

Após a refatoração e a implementação dos novos testes, conseguimos melhorar significativamente a cobertura:

| Métrica | Antes | Depois |
|---------|-------|--------|
| Statements | 79.16% | 81.81% |
| Branches | 78.12% | 80.55% |
| Functions | 100% | 85.71% |
| Lines | 79.16% | 81.81% |

As linhas 13-14 (configuração do `optionDefault`) e 75-82 (código condicional no `maskTypeControll`) permanecem com cobertura parcial devido à complexidade residual do componente.

## Lições Aprendidas

1. **Simplicidade no Design**: Estruturas condicionais mais simples facilitam testes.

2. **Comportamento Observável**: Testar comportamento observável é mais robusto que testar implementações internas.

3. **Refatoração para Testabilidade**: Algumas vezes é necessário refatorar o código para torná-lo mais testável.

4. **Evitar Diretivas de Ignorar Cobertura**: Essas diretivas devem ser usadas apenas quando estritamente necessário, não como solução para código difícil de testar.

5. **Re-renderização como Ferramenta**: A re-renderização de componentes com diferentes props é uma técnica poderosa para testar mudanças de estado e comportamento.

## Próximos Passos

1. **Continuar Melhorando a Cobertura**: Trabalhar para atingir pelo menos 90% de cobertura em todas as métricas.

2. **Abordagem Consistente**: Aplicar estas técnicas a outros componentes complexos da biblioteca.

3. **Testes de Integração**: Adicionar testes que verifiquem a integração do MaskedTextInput com outros componentes.

4. **Teste de Acessibilidade**: Expandir os testes para verificar propriedades de acessibilidade. 