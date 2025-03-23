---
sidebar_position: 1
---

# Melhores Práticas

Este guia apresenta as melhores práticas para trabalhar com o Fluid, ajudando você a construir aplicativos de alta qualidade, acessíveis e fáceis de manter.

## Estrutura do Projeto

### Organização de Componentes

Recomendamos organizar seus componentes em uma estrutura clara:

```
src/
├── components/         # Componentes reutilizáveis
├── screens/            # Telas do aplicativo
├── navigation/         # Configuração de navegação
├── hooks/              # Hooks personalizados
├── utils/              # Funções utilitárias
├── services/           # Serviços e APIs
├── context/            # Providers de contexto
└── theme/              # Configurações de tema
```

### Componentes Compostos

Para componentes complexos, crie subcomponentes para partes específicas:

```tsx
// Componente principal
const Form = ({ children, ...props }) => { 
  return <View {...props}>{children}</View>; 
};

// Subcomponentes
Form.Header = ({ title }) => <Text>{title}</Text>;
Form.Input = ({ label, ...props }) => <TextInput label={label} {...props} />;
Form.Button = ({ label, ...props }) => <Button label={label} {...props} />;

// Uso
<Form>
  <Form.Header title="Registro" />
  <Form.Input label="Nome" />
  <Form.Input label="Email" />
  <Form.Button label="Enviar" />
</Form>
```

## Uso de Temas

### Crie Variáveis de Tema

Em vez de hardcoded values, sempre use o sistema de temas:

```tsx
// ❌ Evite
<View style={{ 
  backgroundColor: '#FFFFFF',
  padding: 16,
  borderRadius: 8,
}}>
  <Text style={{ color: '#333333', fontSize: 16 }}>
    Conteúdo
  </Text>
</View>

// ✅ Recomendado
<View style={{ 
  backgroundColor: theme.colors.background.primary,
  padding: theme.spacing.md,
  borderRadius: theme.borders.radius.md,
}}>
  <Text style={{ 
    color: theme.colors.text.primary, 
    fontSize: theme.typography.fontSize.md 
  }}>
    Conteúdo
  </Text>
</View>
```

### Crie Hooks Personalizados para Estilos

Para estilos complexos ou repetitivos, crie hooks:

```tsx
// hooks/useStyles.js
import { useTheme } from '@platformbuilders/fluid-react-native';

export const useCardStyles = () => {
  const theme = useTheme();
  
  return {
    container: {
      backgroundColor: theme.colors.background.primary,
      padding: theme.spacing.md,
      borderRadius: theme.borders.radius.md,
      ...theme.elevations.md,
    },
    title: {
      color: theme.colors.text.primary,
      fontSize: theme.typography.fontSize.lg,
      fontFamily: theme.typography.fontFamily.bold,
      marginBottom: theme.spacing.sm,
    },
    content: {
      color: theme.colors.text.secondary,
      fontSize: theme.typography.fontSize.md,
      fontFamily: theme.typography.fontFamily.regular,
    },
  };
};

// Uso
const MyComponent = () => {
  const styles = useCardStyles();
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Título</Text>
      <Text style={styles.content}>Conteúdo</Text>
    </View>
  );
};
```

## Performance

### Memoização

Use `React.memo` para componentes que renderizam frequentemente com as mesmas props:

```tsx
import React from 'react';
import { Text } from '@platformbuilders/fluid-react-native';

const ExpensiveComponent = ({ value }) => {
  console.log('Rendering ExpensiveComponent');
  // Operação custosa
  return <Text>{value}</Text>;
};

// Memoizado - só rerenderiza se as props mudarem
export default React.memo(ExpensiveComponent);
```

### Otimizando Listas

Para listas longas, use `FlatList` com otimizações:

```tsx
import React, { useCallback } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from '@platformbuilders/fluid-react-native';

const OptimizedList = ({ data }) => {
  // Função memoizada para evitar recriações
  const renderItem = useCallback(({ item }) => (
    <ListItem 
      title={item.title}
      subtitle={item.subtitle}
    />
  ), []);
  
  // Extrator de chave memoizado
  const keyExtractor = useCallback((item) => item.id, []);
  
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      // Otimizações de desempenho
      initialNumToRender={10}
      maxToRenderPerBatch={10}
      windowSize={5}
      removeClippedSubviews={true}
    />
  );
};

export default OptimizedList;
```

### Evite Renderizações Aninhadas

Prefira componentes planos em vez de aninhamentos profundos:

```tsx
// ❌ Evite aninhamentos profundos
<View>
  <View>
    <View>
      <View>
        <Text>Conteúdo muito aninhado</Text>
      </View>
    </View>
  </View>
</View>

// ✅ Prefira estruturas mais planas
<View style={containerStyle}>
  <Text>Conteúdo com menos aninhamento</Text>
</View>
```

## Acessibilidade

### Labels Descritivos

Sempre forneça labels de acessibilidade claros:

```tsx
// ❌ Evite
<TouchableOpacity onPress={onShare}>
  <Icon name="share" />
</TouchableOpacity>

// ✅ Recomendado
<TouchableOpacity 
  onPress={onShare}
  accessibilityLabel="Compartilhar publicação"
  accessibilityRole="button"
>
  <Icon name="share" />
</TouchableOpacity>
```

### Teste com Leitores de Tela

Teste regularmente sua aplicação com VoiceOver (iOS) e TalkBack (Android).

### Agrupe Elementos Relacionados

Agrupe elementos relacionados para leitores de tela:

```tsx
<View
  accessible={true}
  accessibilityLabel="Pontuação: 4.5 estrelas de 5"
>
  <StarRating rating={4.5} />
  <Text>4.5/5</Text>
</View>
```

## Testabilidade

### Use TestIDs

Adicione testIDs para facilitar testes automatizados:

```tsx
<Button 
  label="Enviar" 
  onPress={handleSubmit}
  testID="submit_button"
/>
```

### Componentes Puros

Mantenha seus componentes puros e previsíveis:

```tsx
// ❌ Evite efeitos colaterais imprevisíveis
const ImpureComponent = ({ data }) => {
  // Não faça isso dentro do componente
  fetch('https://api.example.com')
    .then(response => response.json())
    .then(result => console.log(result));
  
  return <Text>{data}</Text>;
};

// ✅ Recomendado - componente puro, previsível
const PureComponent = ({ data, onFetch }) => {
  useEffect(() => {
    if (onFetch) {
      onFetch();
    }
  }, [onFetch]);
  
  return <Text>{data}</Text>;
};
```

### Testes Unitários

Escreva testes unitários para componentes e lógica:

```tsx
// Button.test.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Button } from '@platformbuilders/fluid-react-native';

describe('Button', () => {
  it('renders correctly with label', () => {
    const { getByText } = render(
      <Button label="Teste" onPress={() => {}} />
    );
    expect(getByText('Teste')).toBeTruthy();
  });
  
  it('calls onPress when pressed', () => {
    const onPress = jest.fn();
    const { getByText } = render(
      <Button label="Teste" onPress={onPress} />
    );
    
    fireEvent.press(getByText('Teste'));
    expect(onPress).toHaveBeenCalledTimes(1);
  });
  
  it('displays loading indicator when loading', () => {
    const { getByTestId, queryByText } = render(
      <Button label="Teste" onPress={() => {}} loading />
    );
    
    expect(getByTestId('loading_indicator')).toBeTruthy();
    expect(queryByText('Teste')).toBeNull();
  });
});
```

## Reutilização de Código

### Hooks Personalizados

Crie hooks para lógica reutilizável:

```tsx
// hooks/useForm.js
import { useState, useCallback } from 'react';

export const useForm = (initialValues = {}) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  
  const handleChange = useCallback((field, value) => {
    setValues(prev => ({ ...prev, [field]: value }));
    // Limpar erro quando o campo é alterado
    setErrors(prev => ({ ...prev, [field]: undefined }));
  }, []);
  
  const validate = useCallback((validationRules) => {
    const newErrors = {};
    let isValid = true;
    
    Object.keys(validationRules).forEach(field => {
      const value = values[field];
      const error = validationRules[field](value, values);
      
      if (error) {
        newErrors[field] = error;
        isValid = false;
      }
    });
    
    setErrors(newErrors);
    return isValid;
  }, [values]);
  
  return {
    values,
    errors,
    handleChange,
    validate,
    reset: () => setValues(initialValues),
  };
};

// Uso
const LoginScreen = () => {
  const { values, errors, handleChange, validate } = useForm({
    email: '',
    password: '',
  });
  
  const handleSubmit = () => {
    const isValid = validate({
      email: value => !value ? 'Email é obrigatório' : null,
      password: value => !value ? 'Senha é obrigatória' : null,
    });
    
    if (isValid) {
      // Lógica de login
    }
  };
  
  return (
    <View>
      <TextInput
        label="Email"
        value={values.email}
        error={errors.email}
        onChangeText={(text) => handleChange('email', text)}
      />
      <TextInput
        label="Senha"
        value={values.password}
        error={errors.password}
        secureTextEntry
        onChangeText={(text) => handleChange('password', text)}
      />
      <Button label="Entrar" onPress={handleSubmit} />
    </View>
  );
};
```

### Higher-Order Components (HOCs)

Use HOCs para adicionar funcionalidades a componentes existentes:

```tsx
// withLoading.tsx
import React from 'react';
import { View, ActivityIndicator } from 'react-native';

export const withLoading = (Component) => {
  return ({ isLoading, ...props }) => {
    if (isLoading) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }
    
    return <Component {...props} />;
  };
};

// Uso
const UserProfile = ({ user }) => (
  <View>
    <Text>{user.name}</Text>
    <Text>{user.email}</Text>
  </View>
);

const UserProfileWithLoading = withLoading(UserProfile);

// Na tela
<UserProfileWithLoading 
  isLoading={loading}
  user={userData}
/>
```

## Estilização Consistente

### Use o Sistema de Espaçamento

Mantenha margens e paddings consistentes usando o sistema de espaçamento:

```tsx
// ❌ Evite valores arbitrários
<View style={{ margin: 17, padding: 23 }}>
  <Text>Conteúdo</Text>
</View>

// ✅ Use o sistema de espaçamento
<View style={{ 
  margin: theme.spacing.md, 
  padding: theme.spacing.lg 
}}>
  <Text>Conteúdo</Text>
</View>
```

### Adapte-se a Diferentes Tamanhos de Tela

Use estilos responsivos:

```tsx
import { useWindowDimensions } from 'react-native';
import { useTheme } from '@platformbuilders/fluid-react-native';

const ResponsiveLayout = ({ children }) => {
  const { width } = useWindowDimensions();
  const theme = useTheme();
  
  // Determine o layout baseado na largura
  const isTablet = width >= theme.breakpoints.tablet;
  
  return (
    <View style={{ 
      flexDirection: isTablet ? 'row' : 'column',
      padding: isTablet ? theme.spacing.lg : theme.spacing.md,
    }}>
      {children}
    </View>
  );
};
```

## Integração com Outras Bibliotecas

### Formik

Integrando com Formik para gerenciamento de formulários:

```tsx
import React from 'react';
import { View } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { TextInput, Button } from '@platformbuilders/fluid-react-native';

// Schema de validação com Yup
const validationSchema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  email: Yup.string()
    .email('Email inválido')
    .required('Email é obrigatório'),
  password: Yup.string()
    .min(6, 'Senha deve ter pelo menos 6 caracteres')
    .required('Senha é obrigatória'),
});

const SignupForm = () => {
  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log(values)}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        isSubmitting,
      }) => (
        <View>
          <TextInput
            label="Nome"
            value={values.name}
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            error={touched.name && errors.name}
          />
          
          <TextInput
            label="Email"
            value={values.email}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            error={touched.email && errors.email}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          
          <TextInput
            label="Senha"
            value={values.password}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            error={touched.password && errors.password}
            secureTextEntry
          />
          
          <Button
            label="Cadastrar"
            onPress={handleSubmit}
            loading={isSubmitting}
          />
        </View>
      )}
    </Formik>
  );
};

export default SignupForm;
```

### Redux/Context API

Integrando com gerenciamento de estado:

```tsx
import React, { createContext, useContext, useReducer } from 'react';

// Criando contexto
const AppContext = createContext();

// Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'LOGOUT':
      return { ...state, user: null };
    default:
      return state;
  }
};

// Provider
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    user: null,
  });
  
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

// Hook personalizado para usar o contexto
export const useApp = () => {
  const context = useContext(AppContext);
  
  if (!context) {
    throw new Error('useApp deve ser usado dentro de um AppProvider');
  }
  
  return context;
};

// Uso com componentes Fluid
import { Button, Text } from '@platformbuilders/fluid-react-native';

const ProfileScreen = () => {
  const { state, dispatch } = useApp();
  
  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };
  
  return (
    <View>
      {state.user ? (
        <>
          <Text>Olá, {state.user.name}</Text>
          <Button label="Logout" onPress={handleLogout} />
        </>
      ) : (
        <Text>Faça login para continuar</Text>
      )}
    </View>
  );
};
```

## Gerenciamento de Dependências

### Mantenha Dependências Atualizadas

Atualize regularmente suas dependências para obter correções de bugs e melhorias:

```bash
# Verificar dependências desatualizadas
npm outdated

# Atualizar dependências
npm update

# Para atualizações de versão principal
npx npm-check-updates -u
npm install
```

### Minimize o Número de Dependências

Avalie cuidadosamente cada dependência antes de adicioná-la:

- O Fluid já fornece muitos componentes comuns
- Para funcionalidades simples, considere implementá-las você mesmo
- Verifique o tamanho e a manutenção de cada dependência

## Conclusão

Seguindo estas melhores práticas, você poderá construir aplicativos React Native mais eficientes, acessíveis e fáceis de manter usando o Fluid. Lembre-se de que essas diretrizes devem ser adaptadas ao contexto específico do seu projeto. 