---
sidebar_position: 4
---

# Checkbox

O componente Checkbox permite que o usuário selecione uma ou mais opções de um conjunto. É um controle de estado binário (marcado/desmarcado) que é usado em formulários ou para ativar e desativar funcionalidades.

## Importação

```jsx
import { Checkbox } from '@platformbuilders/fluid-react-native';
```

## Uso Básico

```jsx
const [isChecked, setIsChecked] = useState(false);

<Checkbox 
  accessibility="termos-condicoes"
  label="Aceito os termos e condições"
  checked={isChecked} // Controla o estado marcado/desmarcado
  onPress={() => setIsChecked(!isChecked)} // Função para alterar o estado
/>
```

## Variações

### Estados

```jsx
// Desmarcado (padrão)
<Checkbox 
  accessibility="opcao1"
  label="Opção 1" 
  checked={false}
  onPress={() => {}}
/>

// Marcado
<Checkbox 
  accessibility="opcao2"
  label="Opção 2" 
  checked={true}
  onPress={() => {}}
/>

// Desabilitado
<Checkbox 
  accessibility="opcao3"
  label="Opção 3" 
  checked={false} // Estado checked ainda é relevante visualmente
  disabled={true}
  onPress={() => {}} // onPress não será chamado
/>
```

### Com Mensagem de Erro

O componente `Checkbox` é envolvido por `FormError`, permitindo exibir mensagens de erro associadas.

```jsx
<Checkbox 
  accessibility="opcao-obrigatoria"
  label="Esta opção é obrigatória" 
  checked={false}
  onPress={() => {}}
  error="Este campo é obrigatório" // Prop 'error' do FormError
/>
```

### Estilo Personalizado do Label

```jsx
<Checkbox 
  accessibility="opcao-destaque"
  label="Opção com Destaque" 
  checked={false}
  onPress={() => {}}
  labelStyle={{ 
    color: '#FF5722', 
    fontWeight: 'bold' 
  }}
/>
```

## Uso em Formulários

O Checkbox é comumente usado em formulários, especialmente com bibliotecas como Formik ou React Hook Form:

```jsx
import { Formik } from 'formik';
import * as Yup from 'yup';
import { View } from 'react-native';
import { Checkbox, Button } from '@platformbuilders/fluid-react-native';

const validationSchema = Yup.object().shape({
  aceitaTermos: Yup.boolean().oneOf([true], 'Você deve aceitar os termos'),
  receberEmails: Yup.boolean(),
});

const FormularioExample = () => (
  <Formik
    initialValues={{ aceitaTermos: false, receberEmails: false }}
    validationSchema={validationSchema}
    onSubmit={values => console.log(values)}
  >
    {({ values, errors, touched, handleSubmit, setFieldValue }) => (
      <View>
        <Checkbox 
          accessibility="aceita-termos"
          label="Aceito os termos e condições" 
          checked={values.aceitaTermos}
          onPress={() => setFieldValue('aceitaTermos', !values.aceitaTermos)} // Atualiza o valor no Formik
          error={touched.aceitaTermos && errors.aceitaTermos} // Exibe erro de validação
        />
        
        <Checkbox 
          accessibility="receber-emails"
          label="Desejo receber emails promocionais" 
          checked={values.receberEmails}
          onPress={() => setFieldValue('receberEmails', !values.receberEmails)}
        />
        
        <Button accessibility="form-submit" onPress={handleSubmit}>
          Enviar
        </Button>
      </View>
    )}
  </Formik>
);
```

## Acessibilidade

O componente Checkbox implementa automaticamente propriedades de acessibilidade essenciais:

- `accessibilityRole`: Definido como `"checkbox"`.
- `accessibilityLabel`: Usa uma descrição padrão ("checkbox de [label]") ou a prop `accessibilityLabel`.
- `accessibilityState`: Informa os estados `{ checked: ... }` e `{ disabled: ... }`.
- `accessibilityHint`: Fornece uma dica padrão ("Marcar ou desmarcar [label]"), que pode ser personalizada.

### Exemplo com Acessibilidade Personalizada

```jsx
<Checkbox 
  accessibility="notificacoes-push" // ID claro
  label="Ativar notificações push" 
  checked={notificationsEnabled}
  onPress={() => toggleNotifications()}
  accessibilityLabel="Ativar ou desativar notificações push" // Label explícito
  accessibilityHint="Toque para alterar a configuração de notificações push" // Dica customizada
/>
```

### Boas Práticas de Acessibilidade

1. **Labels Descritivos**: Use a prop `label` ou `accessibilityLabel` para descrever claramente o propósito do checkbox.
2. **Agrupamento Lógico**: Use cabeçalhos (`Typography`) para agrupar checkboxes relacionados.
3. **Feedback Claro**: Garanta que o estado marcado/desmarcado seja visualmente óbvio e que a área de toque seja adequada.

## API

### Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `accessibility` | `string` | - | Identificador único para acessibilidade e testes. |
| `id` | `string` | `accessibility` | ID opcional para o componente. |
| `checked` | `boolean` | `false` | Define se o checkbox está marcado ou desmarcado. |
| `onPress` | `() => void` | `() => {}` | Função chamada quando o checkbox (ou seu label) é pressionado. É responsável por atualizar o estado `checked`. |
| `label` | `ReactNode \| string` | `''` | Texto ou componente a ser exibido ao lado do checkbox. |
| `disabled` | `boolean` | `false` | Se `true`, desabilita o checkbox visualmente e para interação. Comunica o estado `disabled`. |
| `error` | `string` | `''` | Mensagem de erro a ser exibida abaixo do checkbox (via `FormError`). |
| `labelStyle` | `StyleProp<TextStyle>` | `{}` | Estilos personalizados aplicados ao componente `Label` interno. |
| `accessibilityLabel` | `string` | Gerado ("checkbox de [label]") | Sobrescreve o `accessibilityLabel` padrão. |
| `accessibilityHint` | `string` | Gerado ("Marcar ou desmarcar [label]") | Sobrescreve a dica de acessibilidade padrão. |
| `testID` | `string` | Gerado (`checkbox_{id/acc/testID/checkbox}`) | ID específico para uso em testes automatizados. Se não fornecido, um será gerado. |