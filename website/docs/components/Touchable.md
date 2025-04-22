# Touchable

O componente `Touchable` é uma abstração do `TouchableOpacity` do React Native com suporte a feedback háptico e facilitando a implementação de acessibilidade.

## Importação

```tsx
import { Touchable } from '@platformbuilders/fluid-react-native';
```

## Exemplo Básico

```tsx
<Touchable 
  accessibility="botao-salvar"
  onPress={() => console.log('Pressionado')}
>
  <Text>Pressione aqui</Text>
</Touchable>
```

## Exemplos

### Com feedback háptico personalizado

```tsx
<Touchable 
  accessibility="botao-compartilhar"
  haptic="impactHeavy"
  onPress={() => console.log('Compartilhar')}
>
  <Icon name="share" />
  <Text>Compartilhar</Text>
</Touchable>
```

### Desabilitado

```tsx
<Touchable 
  accessibility="botao-enviar"
  disabled
  onPress={() => console.log('Enviar')}
>
  <Text>Enviar</Text>
</Touchable>
```

### Com ID para teste

```tsx
<Touchable 
  accessibility="botao-cancelar"
  id="botao-cancelar"
  testID="cancelar-teste-id"
  onPress={() => console.log('Cancelar')}
>
  <Text>Cancelar</Text>
</Touchable>
```

### Com estilo personalizado

```tsx
<Touchable 
  accessibility="botao-acao"
  onPress={() => console.log('Ação')}
  style={{ 
    backgroundColor: '#3366ff', 
    padding: 16, 
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  }}
>
  <Text style={{ color: '#fff' }}>Executar Ação</Text>
</Touchable>
```

## API

### Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `accessibility` | `string` | - | Identificador de acessibilidade (obrigatório) |
| `id` | `string` | - | ID opcional para o componente |
| `testID` | `string` | - | ID para testes automatizados |
| `accessibilityLabel` | `string` | - | Rótulo de acessibilidade (usa `accessibility` quando não definido) |
| `onPress` | `(event: GestureResponderEvent) => void` | `() => {}` | Callback chamado quando pressionado |
| `haptic` | `HapticFeedbackTypes` | `'impactLight'` | Tipo do feedback háptico |
| `disabled` | `boolean` | `false` | Define se o componente está desabilitado |
| `style` | `StyleProp<ViewStyle>` | - | Estilo do componente |
| `children` | `ReactNode` | - | Conteúdo do componente |

## Notas de uso

- O componente `Touchable` é a base para todos os elementos interativos da biblioteca
- Utiliza `react-native-haptic-feedback` para fornecer feedback tátil
- Implementa automaticamente acessibilidade básica
- Deve ser preferido em relação ao `TouchableOpacity` nativo para consistência
- Valores válidos para `haptic` incluem: `'impactLight'`, `'impactMedium'`, `'impactHeavy'`, `'notificationSuccess'`, `'notificationWarning'`, `'notificationError'`
- O testID é gerado a partir da propriedade `testID`, `id` ou `accessibility`, nessa ordem de prioridade 