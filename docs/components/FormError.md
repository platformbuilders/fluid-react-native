# FormError

O componente FormError é utilizado para exibir mensagens de erro em formulários. Ele é projetado para ser flexível, podendo envolver outros componentes de formulário e exibir mensagens de erro de forma consistente.

## Importação

```jsx
import { FormError } from '@platformbuilders/fluid-react-native';
```

## Uso Básico

```jsx
import React from 'react';
import { View } from 'react-native';
import { FormError } from '@platformbuilders/fluid-react-native';

const BasicFormErrorExample = () => (
  <View>
    <FormError
      id="username-error"
      accessibility="nome-usuario"
      error="O nome de usuário é obrigatório"
    />
  </View>
);
```

## Utilizando como Wrapper

O FormError pode ser usado como um wrapper para componentes de formulário, exibindo a mensagem de erro apenas quando necessário:

```jsx
import React, { useState } from 'react';
import { View } from 'react-native';
import { FormError, TextInput, Button } from '@platformbuilders/fluid-react-native';

const FormWithErrorExample = () => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  
  const validateUsername = () => {
    if (!username) {
      setError('O nome de usuário é obrigatório');
      return false;
    }
    setError('');
    return true;
  };
  
  const handleSubmit = () => {
    if (validateUsername()) {
      console.log('Form submitted with:', username);
    }
  };
  
  return (
    <View>
      <FormError
        id="username-field"
        accessibility="campo-usuario"
        error={error}
      >
        <TextInput
          id="username-input"
          accessibility="entrada-usuario"
          label="Nome de Usuário"
          value={username}
          onChangeText={setUsername}
          onBlur={validateUsername}
        />
      </FormError>
      
      <Button
        id="submit-button"
        accessibility="botao-enviar"
        title="Enviar"
        onPress={handleSubmit}
      />
    </View>
  );
};
```

## Variações

### Tamanho Grande

Utilize a prop `large` para exibir o texto de erro em um tamanho maior:

```jsx
<FormError
  id="large-error"
  accessibility="erro-grande"
  error="Este é um erro com texto maior"
  large
/>
```

### Centralizado

A prop `centered` permite centralizar o texto de erro:

```jsx
<FormError
  id="centered-error"
  accessibility="erro-centralizado"
  error="Este erro está centralizado"
  centered
/>
```

### Com Estilo Personalizado

Você pode passar estilos personalizados para o texto de erro:

```jsx
<FormError
  id="styled-error"
  accessibility="erro-estilizado"
  error="Erro com estilo personalizado"
  style={{ marginTop: 16, fontStyle: 'italic' }}
/>
```

## Integração com Formik

O FormError pode ser facilmente integrado com Formik para validação de formulários:

```jsx
import React from 'react';
import { View } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { FormError, TextInput, Button } from '@platformbuilders/fluid-react-native';

// Schema de validação
const ValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('E-mail inválido')
    .required('E-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'A senha deve ter pelo menos 6 caracteres')
    .required('Senha é obrigatória'),
});

const FormikExample = () => (
  <Formik
    initialValues={{ email: '', password: '' }}
    validationSchema={ValidationSchema}
    onSubmit={(values) => console.log(values)}
  >
    {({ handleSubmit, handleChange, handleBlur, values, errors, touched }) => (
      <View>
        <FormError
          id="email-field"
          accessibility="campo-email"
          error={touched.email && errors.email}
        >
          <TextInput
            id="email-input"
            accessibility="entrada-email"
            label="E-mail"
            value={values.email}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </FormError>
        
        <FormError
          id="password-field"
          accessibility="campo-senha"
          error={touched.password && errors.password}
        >
          <TextInput
            id="password-input"
            accessibility="entrada-senha"
            label="Senha"
            value={values.password}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            secureTextEntry
          />
        </FormError>
        
        <Button
          id="login-button"
          accessibility="botao-entrar"
          title="Entrar"
          onPress={handleSubmit}
        />
      </View>
    )}
  </Formik>
);
```

## Acessibilidade

O FormError foi projetado com acessibilidade em mente:

```jsx
<FormError
  id="login-error"
  accessibility="erro-login"
  error="Credenciais inválidas"
/>
```

Para garantir melhor acessibilidade:

1. Sempre forneça um `id` descritivo
2. Use a prop `accessibility` para identificar o contexto do erro
3. O componente automaticamente configura `accessibilityLabel` baseado no erro ou na prop `accessibility`

## TestIDs

O componente FormError gera automaticamente testIDs para automação de testes. O testID para a mensagem de erro é gerado seguindo o padrão: `error_{id}`:

```jsx
// Vai gerar um testID: "error_login_error"
<FormError
  id="login_error"
  accessibility="erro-login"
  error="Credenciais inválidas"
/>

// Usando o id padrão "form_error", vai gerar testID: "error_form_error"
<FormError
  error="Erro no formulário"
/>
```

## Props

| Prop           | Tipo                            | Padrão      | Descrição                                              |
|----------------|--------------------------------|-------------|--------------------------------------------------------|
| id             | string                         | 'form_error' | ID único para o componente                             |
| accessibility  | string                         | -           | Identificador para acessibilidade                      |
| error          | string \| string[] \| boolean | ''          | Mensagem de erro para exibir                           |
| centered       | boolean                        | false       | Se a mensagem de erro deve ser centralizada            |
| large          | boolean                        | false       | Se a mensagem de erro deve ter tamanho maior           |
| style          | StyleProp\<TextStyle\>         | -           | Estilos adicionais para o texto de erro                |
| children       | ReactNode                      | -           | Componentes filhos (normalmente campos de formulário)  |

## Notas Adicionais

- Se `error` for um valor booleano `true`, um aviso será exibido no console e nenhum texto de erro será renderizado.
- Quando `error` é uma string vazia, falso ou indefinido, nenhum texto de erro é exibido.
- Se nenhum `accessibilityLabel` for fornecido, o texto do erro ou o valor `accessibility` será usado.

## Exemplo Completo

```jsx
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { FormError, TextInput, Button } from '@platformbuilders/fluid-react-native';

const FormExample = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const updateField = (field, value) => {
    setForm({ ...form, [field]: value });
    // Limpar erro ao digitar
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!form.name) {
      newErrors.name = 'Nome é obrigatório';
    }
    
    if (!form.email) {
      newErrors.email = 'E-mail é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'E-mail inválido';
    }
    
    if (!form.message) {
      newErrors.message = 'Mensagem é obrigatória';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // Simulação de envio
      console.log('Formulário enviado:', form);
      setSubmitted(true);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Formulário de Contato</Text>
      
      {submitted ? (
        <View style={styles.successContainer}>
          <Text style={styles.successText}>
            Mensagem enviada com sucesso!
          </Text>
          <Button
            id="new-message"
            accessibility="nova-mensagem"
            title="Enviar nova mensagem"
            onPress={() => {
              setForm({ name: '', email: '', message: '' });
              setErrors({});
              setSubmitted(false);
            }}
          />
        </View>
      ) : (
        <View style={styles.form}>
          <FormError
            id="name-field"
            accessibility="campo-nome"
            error={errors.name}
          >
            <TextInput
              id="name-input"
              accessibility="entrada-nome"
              label="Nome Completo"
              value={form.name}
              onChangeText={(value) => updateField('name', value)}
            />
          </FormError>
          
          <View style={styles.spacing} />
          
          <FormError
            id="email-field"
            accessibility="campo-email"
            error={errors.email}
          >
            <TextInput
              id="email-input"
              accessibility="entrada-email"
              label="E-mail"
              value={form.email}
              onChangeText={(value) => updateField('email', value)}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </FormError>
          
          <View style={styles.spacing} />
          
          <FormError
            id="message-field"
            accessibility="campo-mensagem"
            error={errors.message}
          >
            <TextInput
              id="message-input"
              accessibility="entrada-mensagem"
              label="Mensagem"
              value={form.message}
              onChangeText={(value) => updateField('message', value)}
              multiline
              numberOfLines={4}
            />
          </FormError>
          
          <View style={styles.spacing} />
          
          <Button
            id="submit"
            accessibility="enviar-formulario"
            title="Enviar Mensagem"
            onPress={handleSubmit}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  form: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  spacing: {
    height: 16,
  },
  successContainer: {
    backgroundColor: '#e6f7e6',
    padding: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  successText: {
    fontSize: 18,
    color: '#2e7d32',
    marginBottom: 16,
    textAlign: 'center',
  },
});

export default FormExample; 