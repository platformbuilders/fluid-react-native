---
sidebar_position: 3
---

# Customização de Componentes

O Fluid React Native foi projetado para ser altamente personalizável, permitindo que você adapte os componentes às necessidades específicas do seu projeto.

## Estratégias de Customização

Existem várias estratégias para personalizar os componentes do Fluid React Native:

1. **Uso de props**: Personalização através das propriedades disponíveis
2. **Customização via tema**: Personalização global através do sistema de temas
3. **Extensão de componentes**: Criação de componentes personalizados baseados nos componentes do Fluid
4. **Estilização direta**: Aplicação de estilos diretamente aos componentes

## Customização via Props

A maneira mais simples de personalizar um componente é através de suas props:

```tsx
<Button
  title="Botão Personalizado"
  variant="filled"
  colorVariant="primary"
  minWidth="200px"
  rounded
  typographyVariant="lg"
  leftIconName="star"
/>
```

Cada componente do Fluid React Native oferece um conjunto de props para personalização. Consulte a documentação de cada componente para ver as opções disponíveis.

## Customização via Tema

Para personalizar todos os componentes de um determinado tipo, você pode usar o sistema de temas:

```tsx
import { ThemeProvider } from 'styled-components/native';
import { theme as fluidTheme } from '@platformbuilders/fluid-react-native';

// Personalize o tema
const customTheme = {
  ...fluidTheme,
  // Personalize todos os botões
  button: {
    ...fluidTheme.button,
    height: '56px',
    borderRadius: '28px',
    paddingHorizontal: '24px',
  },
  // Personalize todos os inputs
  input: {
    ...fluidTheme.input,
    height: '56px',
    borderRadius: '8px',
    borderWidth: '2px',
  },
};

const App = () => (
  <ThemeProvider theme={customTheme}>{/* Sua aplicação aqui */}</ThemeProvider>
);
```

Esta abordagem é ideal para aplicar um estilo consistente em toda a aplicação.

## Extensão de Componentes

Você pode criar componentes personalizados estendendo os componentes do Fluid React Native:

```tsx
import React from 'react';
import { Button, ButtonProps } from '@platformbuilders/fluid-react-native';

// Botão personalizado com valores padrão específicos
export const PrimaryActionButton: React.FC<
  Omit<ButtonProps, 'variant' | 'colorVariant'>
> = (props) => (
  <Button
    variant="filled"
    colorVariant="primary"
    minWidth="200px"
    rounded
    {...props}
  />
);

// Uso
<PrimaryActionButton title="Salvar" onPress={handleSave} />;
```

Esta abordagem é útil para criar componentes reutilizáveis com estilos específicos para seu projeto.

## Estilização Direta

Você pode aplicar estilos diretamente aos componentes usando a prop `style`:

```tsx
<Button
  title="Botão Personalizado"
  variant="filled"
  colorVariant="primary"
  style={{
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }}
/>
```

:::caution Atenção
Use a estilização direta com moderação, pois ela pode quebrar a consistência do design. Prefira a customização via tema sempre que possível.
:::

## Exemplos de Customização

### Botão com Estilo Personalizado

```tsx
// Customização via props
<Button
  title="Botão Arredondado"
  variant="filled"
  colorVariant="primary"
  rounded
  minWidth="200px"
  typographyVariant="lg"
/>;

// Customização via tema
const customTheme = {
  ...fluidTheme,
  button: {
    ...fluidTheme.button,
    borderRadius: '28px',
    height: '56px',
  },
};

// Componente personalizado
const RoundedButton: React.FC<Omit<ButtonProps, 'rounded'>> = (props) => (
  <Button rounded {...props} />
);
```

### Input com Estilo Personalizado

```tsx
// Customização via props
<TextInput
  label="Nome"
  placeholder="Digite seu nome"
  borderColor="#0066CC"
  backgroundColor="#F5F8FF"
  placeholderColor="#AAAAAA"
/>;

// Customização via tema
const customTheme = {
  ...fluidTheme,
  input: {
    ...fluidTheme.input,
    borderRadius: '8px',
    borderWidth: '2px',
    height: '56px',
  },
};

// Componente personalizado
const FormInput: React.FC<TextInputProps> = (props) => (
  <TextInput borderColor="#0066CC" backgroundColor="#F5F8FF" {...props} />
);
```

### Typography com Estilo Personalizado

```tsx
// Customização via props
<Typography variant="h1" color="#0066CC" fontWeight="bold" textAlign="center">
  Título Personalizado
</Typography>;

// Customização via tema
const customTheme = {
  ...fluidTheme,
  typography: {
    ...fluidTheme.typography,
    fontSize: {
      ...fluidTheme.typography.fontSize,
      h1: '32px',
      h2: '28px',
    },
    fontFamily: {
      ...fluidTheme.typography.fontFamily,
      bold: 'Montserrat-Bold',
    },
  },
};

// Componente personalizado
const Heading: React.FC<TypographyProps> = (props) => (
  <Typography variant="h1" color="#0066CC" fontWeight="bold" {...props} />
);
```

## Melhores Práticas

Ao personalizar componentes do Fluid React Native, siga estas melhores práticas:

1. **Mantenha a consistência**: Use o sistema de temas para aplicar estilos consistentes em toda a aplicação.
2. **Crie componentes reutilizáveis**: Estenda os componentes do Fluid para criar componentes personalizados reutilizáveis.
3. **Evite estilização direta**: Use a prop `style` apenas quando necessário.
4. **Documente suas personalizações**: Mantenha uma documentação clara das personalizações feitas.
5. **Teste em diferentes dispositivos**: Certifique-se de que suas personalizações funcionem bem em diferentes tamanhos de tela.

## Exemplo Completo

Aqui está um exemplo completo de personalização de componentes:

```tsx
import React from 'react';
import { View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import {
  theme as fluidTheme,
  Button,
  TextInput,
  Typography,
} from '@platformbuilders/fluid-react-native';

// Tema personalizado
const customTheme = {
  ...fluidTheme,
  brand: {
    ...fluidTheme.brand,
    primary: {
      main: '#0066CC',
      light: '#4D94CC',
      dark: '#004C99',
      contrast: '#FFFFFF',
    },
  },
  button: {
    ...fluidTheme.button,
    borderRadius: '28px',
    height: '56px',
  },
  input: {
    ...fluidTheme.input,
    borderRadius: '8px',
    borderWidth: '2px',
  },
};

// Componentes personalizados
const PrimaryButton = (props) => (
  <Button variant="filled" colorVariant="primary" {...props} />
);

const FormInput = (props) => (
  <TextInput borderColor="#0066CC" backgroundColor="#F5F8FF" {...props} />
);

// Aplicação
const App = () => (
  <ThemeProvider theme={customTheme}>
    <View style={{ padding: 20 }}>
      <Typography
        variant="h1"
        color="#0066CC"
        textAlign="center"
        marginBottom="20px"
      >
        Formulário de Contato
      </Typography>

      <FormInput
        label="Nome"
        placeholder="Digite seu nome"
        marginBottom="16px"
      />

      <FormInput
        label="Email"
        placeholder="Digite seu email"
        marginBottom="16px"
      />

      <PrimaryButton title="Enviar" onPress={() => console.log('Enviado')} />
    </View>
  </ThemeProvider>
);

export default App;
```
