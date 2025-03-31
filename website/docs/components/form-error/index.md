---
sidebar_position: 5
---

# FormError

O componente FormError é utilizado para exibir mensagens de erro em formulários. Ele é projetado para ser flexível, podendo envolver outros componentes de formulário e exibir mensagens de erro de forma consistente.

## Importação

```tsx
import { FormError } from '@platformbuilders/fluid-react-native';
```

## Exemplo Básico

```tsx
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

## Exemplos

### Como Wrapper de Componentes

O FormError pode ser usado como um wrapper para componentes de formulário, exibindo a mensagem de erro apenas quando necessário:

```tsx
import React, { useState } from 'react';
import { View } from 'react-native';
import { FormError, TextInput } from '@platformbuilders/fluid-react-native';

const FormWithValidation = () => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  
  const handleChange = (value) => {
    setUsername(value);
    if (value.length < 3) {
      setError('O nome de usuário deve ter pelo menos 3 caracteres');
    } else {
      setError('');
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
          id="username"
          accessibility="entrada-usuario"
          label="Nome de Usuário"
          value={username}
          onChangeText={handleChange}
        />
      </FormError>
    </View>
  );
};
```

### Estilos Diferentes

O FormError oferece algumas variações de estilo:

```tsx
// Erro centralizado
<FormError
  id="centered-error"
  accessibility="erro-centralizado"
  error="Este erro está centralizado"
  centered
/>

// Erro com texto maior
<FormError
  id="large-error"
  accessibility="erro-grande"
  error="Este erro tem tamanho maior"
  large
/>

// Erro com estilo personalizado
<FormError
  id="custom-error"
  accessibility="erro-personalizado"
  error="Erro personalizado"
  style={{ color: '#8B0000', fontWeight: 'bold' }}
/>
```

### Múltiplos Erros no Mesmo Formulário

```tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FormError, TextInput } from '@platformbuilders/fluid-react-native';

const MultipleErrorsForm = () => (
  <View style={styles.container}>
    <FormError
      id="email-field"
      accessibility="campo-email"
      error="E-mail inválido"
    >
      <TextInput
        id="email"
        accessibility="entrada-email"
        label="E-mail"
        value="email@invalido"
      />
    </FormError>
    
    <View style={styles.spacing} />
    
    <FormError
      id="password-field"
      accessibility="campo-senha"
      error="Senha muito curta"
    >
      <TextInput
        id="password"
        accessibility="entrada-senha"
        label="Senha"
        value="123"
        secureTextEntry
      />
    </FormError>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  spacing: {
    height: 16,
  },
});
```

### Erros de Formulário Genéricos

```tsx
// Erro geral do formulário
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

## API

### Props

| Prop           | Tipo                            | Padrão       | Descrição                                             |
|----------------|--------------------------------|--------------|-------------------------------------------------------|
| `id`           | string                         | 'form_error' | ID único para o componente                            |
| `accessibility`| string                         | -            | Identificador para acessibilidade                     |
| `error`        | string \| string[] \| boolean  | ''           | Mensagem de erro para exibir                          |
| `centered`     | boolean                        | false        | Se a mensagem de erro deve ser centralizada           |
| `large`        | boolean                        | false        | Se a mensagem de erro deve ter tamanho maior          |
| `style`        | StyleProp\<TextStyle\>         | -            | Estilos adicionais para o texto de erro               |
| `children`     | ReactNode                      | -            | Componentes filhos (normalmente campos de formulário) |

## Acessibilidade

O FormError implementa propriedades de acessibilidade automáticas:

- `testID`: Gerado como `error_${id}`, onde `id` é o ID fornecido ou o valor padrão 'form_error'
- `accessibilityLabel`: Prefixado com "Erro " seguido pelo `accessibility` ou pelo texto do erro
- O componente é projetado para ser claro e legível para leitores de tela

### Boas Práticas

1. **Mensagens claras e específicas**: Forneça mensagens de erro que expliquem claramente o problema
2. **Associe erros aos campos**: Use FormError como wrapper de campos de formulário para associar visualmente o erro ao campo
3. **Contraste adequado**: O texto de erro usa a cor de perigo (danger) do tema para máxima visibilidade
4. **Posicionamento coerente**: Mantenha um padrão consistente no posicionamento dos erros

## Notas Importantes

- Se `error` for um valor booleano `true`, um aviso será exibido no console e nenhum texto de erro será renderizado
- Quando `error` é uma string vazia, falso ou indefinido, nenhum texto de erro é exibido
- O componente é projetado para trabalhar com a hierarquia de formulários do Fluid React Native

## Exemplo Completo

```tsx
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { FormError, TextInput, Button } from '@platformbuilders/fluid-react-native';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  
  const updateField = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
    
    // Validação básica
    if (field === 'email' && value && !/\S+@\S+\.\S+/.test(value)) {
      setErrors(prev => ({ ...prev, [field]: 'E-mail inválido' }));
    } else if (value === '') {
      setErrors(prev => ({ ...prev, [field]: 'Campo obrigatório' }));
    } else {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };
  
  const handleSubmit = () => {
    const newErrors = {};
    let hasError = false;
    
    // Validar todos os campos
    Object.entries(form).forEach(([field, value]) => {
      if (field === 'email' && !/\S+@\S+\.\S+/.test(value)) {
        newErrors[field] = 'E-mail inválido';
        hasError = true;
      } else if (!value) {
        newErrors[field] = 'Campo obrigatório';
        hasError = true;
      }
    });
    
    if (hasError) {
      setErrors(newErrors);
    } else {
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
            title="Enviar mensagem"
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
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  successText: {
    fontSize: 18,
    color: '#4CAF50',
    marginBottom: 16,
    textAlign: 'center',
  },
}); 