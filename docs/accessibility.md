# Guia de Acessibilidade para Fluid React Native

Este guia fornece orientações para garantir que todos os componentes da biblioteca Fluid React Native sejam acessíveis para usuários com diferentes tipos de deficiência.

## Princípios de Acessibilidade

A biblioteca Fluid React Native segue estes princípios fundamentais de acessibilidade:

1. **Perceptível**: As informações e a interface do usuário devem ser apresentadas de forma que possam ser percebidas por todos os usuários.
2. **Operável**: Os componentes da interface do usuário devem ser operáveis por todos.
3. **Compreensível**: As informações e operações da interface devem ser compreensíveis.
4. **Robusto**: O conteúdo deve ser robusto o suficiente para funcionar com diferentes tecnologias assistivas.

## Propriedades de Acessibilidade

### Propriedades Básicas

| Propriedade | Descrição | Exemplo |
|-------------|-----------|---------|
| `accessibilityLabel` | Texto que será lido por leitores de tela | `accessibilityLabel="Botão de enviar"` |
| `accessibilityHint` | Dica sobre o resultado da ação | `accessibilityHint="Envia o formulário"` |
| `accessibilityRole` | Função do elemento na interface | `accessibilityRole="button"` |
| `accessible` | Se o elemento é acessível | `accessible={true}` |

### Estados de Acessibilidade

| Propriedade | Descrição | Exemplo |
|-------------|-----------|---------|
| `accessibilityState` | Estado atual do elemento | `accessibilityState={{ disabled: true, checked: false }}` |
| `accessibilityValue` | Valor atual para controles de intervalo | `accessibilityValue={{ min: 0, max: 100, now: 50 }}` |
| `accessibilityLiveRegion` | Como as alterações são anunciadas | `accessibilityLiveRegion="polite"` |

## Implementação por Tipo de Componente

### Botões

```tsx
<Button
  accessibilityLabel="Confirmar pedido"
  accessibilityHint="Finaliza a compra e processa o pagamento"
  accessibilityRole="button"
  accessibilityState={{ 
    disabled: isDisabled,
    busy: isLoading 
  }}
  onPress={handleConfirm}
/>
```

### Campos de Texto

```tsx
<TextInput
  accessibilityLabel="Campo de email"
  accessibilityHint="Digite seu endereço de email para contato"
  accessibilityRole="text"
  accessibilityState={{ 
    disabled: isDisabled,
    invalid: hasError
  }}
  error={emailError}
/>
```

### Toggles e Checkboxes

```tsx
<Toggle
  accessibilityLabel="Aceitar termos e condições"
  accessibilityRole="switch"
  accessibilityState={{ checked: isAccepted }}
  value={isAccepted}
  onValueChange={setIsAccepted}
/>

<Checkbox
  accessibilityLabel="Lembrar minha senha"
  accessibilityRole="checkbox"
  accessibilityState={{ checked: rememberPassword }}
  checked={rememberPassword}
  onPress={toggleRememberPassword}
/>
```

## Áreas de Toque

Todos os elementos interativos devem ter uma área de toque mínima de 44x44 pontos para facilitar o uso por pessoas com mobilidade reduzida.

```tsx
<Touchable
  hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
  onPress={handlePress}
>
  <Icon name="settings" />
</Touchable>
```

## Contraste e Cores

- A relação de contraste entre texto e fundo deve ser de pelo menos 4.5:1
- Não use apenas cor para transmitir informações importantes
- Forneça alternativas visuais para estados como erro, sucesso e alerta

```tsx
<TextInput
  error="Email inválido"
  errorIcon="warning" // Ícone complementar à cor vermelha
  status="error"
/>
```

## Feedback Tátil e Auditivo

Forneça feedback tátil e auditivo para ações importantes:

```tsx
<Button
  onPress={() => {
    ReactNativeHapticFeedback.trigger('impactMedium');
    playSuccessSound();
    handleSubmit();
  }}
/>
```

## Testes de Acessibilidade

Teste seus componentes com:

1. VoiceOver (iOS) e TalkBack (Android)
2. Navegação apenas com teclado/switch
3. Diferentes tamanhos de fonte
4. Alto contraste
5. Simuladores de daltonismo

## Recursos Adicionais

- [Documentação de Acessibilidade do React Native](https://reactnative.dev/docs/accessibility)
- [Diretrizes de Acessibilidade WCAG 2.1](https://www.w3.org/WAI/standards-guidelines/wcag/)
- [Biblioteca react-native-accessibility](https://github.com/FormidableLabs/react-native-accessibility)
- [Simulador de Daltonismo](https://www.color-blindness.com/coblis-color-blindness-simulator/)