---
sidebar_position: 3
---

# TextInput

O componente `TextInput` é um campo de entrada de texto que permite aos usuários inserir e editar texto em formulários.

## Importação

```tsx
import { TextInput } from '@platformbuilders/fluid-react-native';
```

## Exemplo Básico

```tsx
<TextInput 
  label="Nome"
  placeholder="Digite seu nome" 
  value={value}
  onChangeText={setValue} 
/>
```

## Variantes

O TextInput possui diferentes variantes para diferentes contextos de uso:

### Padrão

```tsx
<TextInput 
  label="Campo padrão" 
  value={value}
  onChangeText={setValue} 
/>
```

### Outline

```tsx
<TextInput 
  label="Campo outline" 
  variant="outline"
  value={value}
  onChangeText={setValue} 
/>
```

### Underline

```tsx
<TextInput 
  label="Campo underline" 
  variant="underline"
  value={value}
  onChangeText={setValue} 
/>
```

## Estados

### Com Valor

```tsx
<TextInput 
  label="Campo com valor" 
  value="John Doe"
  onChangeText={setValue} 
/>
```

### Desabilitado

```tsx
<TextInput 
  label="Campo desabilitado" 
  value="John Doe"
  disabled
  onChangeText={setValue} 
/>
```

### Com Erro

```tsx
<TextInput 
  label="Campo com erro" 
  value={value}
  error="Este campo é obrigatório"
  onChangeText={setValue} 
/>
```

### Somente Leitura

```tsx
<TextInput 
  label="Campo somente leitura" 
  value="Valor não editável"
  editable={false}
  onChangeText={setValue} 
/>
```

## Tipo de Teclado

```tsx
<TextInput 
  label="Email" 
  placeholder="Digite seu email"
  keyboardType="email-address"
  autoCapitalize="none"
  value={value}
  onChangeText={setValue} 
/>

<TextInput 
  label="Telefone" 
  placeholder="Digite seu telefone"
  keyboardType="phone-pad"
  value={value}
  onChangeText={setValue} 
/>

<TextInput 
  label="Número" 
  placeholder="Digite um número"
  keyboardType="numeric"
  value={value}
  onChangeText={setValue} 
/>
```

## Com Ícone

Você pode adicionar ícones ao campo:

```tsx
<TextInput 
  label="Buscar" 
  placeholder="Digite para buscar"
  icon="search"
  iconPosition="left" // "left" (padrão) ou "right"
  value={value}
  onChangeText={setValue} 
/>
```

## Componentes Especializados

### PasswordInput

Para senhas com alternância de visibilidade:

```tsx
import { PasswordInput } from '@platformbuilders/fluid-react-native';

<PasswordInput 
  label="Senha" 
  placeholder="Digite sua senha"
  value={value}
  onChangeText={setValue} 
/>
```

### MaskedTextInput

Para entradas com máscara (CPF, telefone, etc.):

```tsx
import { MaskedTextInput } from '@platformbuilders/fluid-react-native';

<MaskedTextInput 
  label="CPF" 
  placeholder="Digite seu CPF"
  mask="999.999.999-99"
  value={value}
  onChangeText={setValue} 
/>
```

### SearchInput

Para campos de busca com ícone e limpar:

```tsx
import { SearchInput } from '@platformbuilders/fluid-react-native';

<SearchInput 
  placeholder="Buscar..."
  value={value}
  onChangeText={setValue}
  onClear={() => setValue('')} 
/>
```

## Área de Texto Multilihas

```tsx
<TextInput 
  label="Descrição" 
  placeholder="Digite uma descrição detalhada"
  multiline
  numberOfLines={4}
  value={value}
  onChangeText={setValue} 
/>
```

## Customização

### Com Tema

O componente TextInput respeita o tema definido:

```tsx
// Em seu tema
const theme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    primary: '#FF5722',
    error: '#FF0000',
  },
};

// TextInput usará automaticamente as cores do tema
<TextInput 
  label="Campo com tema" 
  value={value}
  onChangeText={setValue} 
/>
```

### Com Props de Estilo

Você pode customizar o estilo diretamente:

```tsx
<TextInput 
  label="Campo personalizado" 
  value={value}
  onChangeText={setValue} 
  containerStyle={{ 
    marginBottom: 16,
  }}
  inputStyle={{ 
    fontWeight: 'bold',
  }}
  labelStyle={{
    fontSize: 16,
  }}
/>
```

## Considerações de Acessibilidade

O TextInput foi desenvolvido com acessibilidade em mente:

- Implementa `accessibilityRole="none"` e `accessibilityState`
- O prop `label` é utilizado como `accessibilityLabel` por padrão
- Suporta foco e navegação por tecnologias assistivas
- Estados como `disabled` e `error` são comunicados adequadamente

```tsx
<TextInput 
  label="Nome" 
  accessibilityLabel="Campo de entrada para nome completo"
  accessibilityHint="Digite seu nome completo aqui"
  value={value}
  onChangeText={setValue} 
/>
```

## API de Referência

### Props

| Prop | Tipo | Padrão | Descrição |
| ---- | ---- | ------ | --------- |
| `label` | `string` | - | O texto do rótulo do campo |
| `value` | `string` | - | O valor do campo |
| `onChangeText` | `(text: string) => void` | - | Função chamada quando o texto é alterado |
| `placeholder` | `string` | - | Texto de espaço reservado quando o campo está vazio |
| `variant` | `'default' \| 'outline' \| 'underline'` | `'default'` | Define o estilo visual do campo |
| `disabled` | `boolean` | `false` | Desabilita a interação com o campo |
| `error` | `string` | - | Mensagem de erro para exibir |
| `icon` | `string` | - | Nome do ícone para exibir |
| `iconPosition` | `'left' \| 'right'` | `'left'` | Posição do ícone em relação ao texto |
| `multiline` | `boolean` | `false` | Permite entrada de múltiplas linhas |
| `numberOfLines` | `number` | `1` | Número de linhas para campos multiline |
| `keyboardType` | `'default' \| 'numeric' \| 'email-address' \| ...` | `'default'` | Tipo de teclado a ser exibido |
| `autoCapitalize` | `'none' \| 'sentences' \| 'words' \| 'characters'` | `'sentences'` | Controla a capitalização automática |
| `secureTextEntry` | `boolean` | `false` | Define o campo como entrada segura (senha) |
| `maxLength` | `number` | - | Número máximo de caracteres |
| `editable` | `boolean` | `true` | Define se o texto é editável |
| `returnKeyType` | `'done' \| 'go' \| 'next' \| 'search' \| ...` | - | Tipo de botão de retorno no teclado |
| `onSubmitEditing` | `() => void` | - | Função chamada ao pressionar o botão de retorno |
| `onFocus` | `() => void` | - | Função chamada quando o campo recebe foco |
| `onBlur` | `() => void` | - | Função chamada quando o campo perde foco |
| `containerStyle` | `StyleProp<ViewStyle>` | - | Estilo para o container do campo |
| `inputStyle` | `StyleProp<TextStyle>` | - | Estilo para o input de texto |
| `labelStyle` | `StyleProp<TextStyle>` | - | Estilo para o rótulo |
| `errorStyle` | `StyleProp<TextStyle>` | - | Estilo para a mensagem de erro |
| `testID` | `string` | - | ID para testes automatizados |

## Exemplos Avançados

### Formulário com Validação

```tsx
import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button, Typography } from '@platformbuilders/fluid-react-native';

const FormExample = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  
  const validateEmail = (text: string) => {
    setEmail(text);
    if (!text.includes('@')) {
      setEmailError('Email inválido');
    } else {
      setEmailError('');
    }
  };
  
  const validatePassword = (text: string) => {
    setPassword(text);
    if (text.length < 6) {
      setPasswordError('A senha deve ter pelo menos 6 caracteres');
    } else {
      setPasswordError('');
    }
  };
  
  const handleSubmit = () => {
    if (!emailError && !passwordError && email && password) {
      alert('Formulário válido!');
    } else {
      alert('Preencha o formulário corretamente');
    }
  };
  
  return (
    <View style={{ padding: 16 }}>
      <Typography variant="h4" style={{ marginBottom: 16 }}>
        Login
      </Typography>
      
      <TextInput
        label="Email"
        value={email}
        onChangeText={validateEmail}
        error={emailError}
        keyboardType="email-address"
        autoCapitalize="none"
        style={{ marginBottom: 12 }}
      />
      
      <TextInput
        label="Senha"
        value={password}
        onChangeText={validatePassword}
        error={passwordError}
        secureTextEntry
        style={{ marginBottom: 20 }}
      />
      
      <Button 
        label="Entrar" 
        onPress={handleSubmit}
      />
    </View>
  );
};

export default FormExample;
```

### Integração com Formik

```tsx
import React from 'react';
import { View } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { TextInput, Button } from '@platformbuilders/fluid-react-native';

// Esquema de validação com Yup
const validationSchema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  email: Yup.string().email('Email inválido').required('Email é obrigatório'),
});

const FormikExample = () => {
  return (
    <View style={{ padding: 16 }}>
      <Formik
        initialValues={{ name: '', email: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => alert(JSON.stringify(values))}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <>
            <TextInput
              label="Nome"
              value={values.name}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              error={touched.name && errors.name}
              style={{ marginBottom: 12 }}
            />
            
            <TextInput
              label="Email"
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              error={touched.email && errors.email}
              keyboardType="email-address"
              autoCapitalize="none"
              style={{ marginBottom: 20 }}
            />
            
            <Button 
              label="Enviar" 
              onPress={handleSubmit}
            />
          </>
        )}
      </Formik>
    </View>
  );
};

export default FormikExample;
```

## Melhores Práticas

1. **Sempre forneça um label claro**: Use rótulos descritivos para informar o que deve ser inserido no campo.

2. **Use placeholders apropriados**: Placeholders devem fornecer um exemplo do formato esperado, não repetir o label.

3. **Forneça feedback de erro**: Exiba mensagens de erro claras e específicas para guiar o usuário.

4. **Escolha o keyboardType adequado**: Use o tipo de teclado apropriado para facilitar a entrada de dados específicos.

5. **Valide a entrada dos usuários**: Valide os dados conforme o usuário digita ou ao submeter o formulário.

6. **Agrupe campos relacionados**: Organize campos relacionados próximos uns aos outros para melhor experiência do usuário.

7. **Cuide da acessibilidade**: Certifique-se de que todos os campos são acessíveis, com labels e estados adequados.

8. **Use componentes especializados**: Utilize MaskedTextInput para formatos específicos como telefone, CPF, etc. 