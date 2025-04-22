---
sidebar_position: 4
---

# DatePicker

O componente DatePicker oferece uma interface para seleção de datas em aplicativos React Native. Ele inclui um campo de entrada com comportamento de label flutuante e integração com o componente nativo de seleção de data.

## Importação

```tsx
import { DatePicker } from '@platformbuilders/fluid-react-native';
```

## Exemplo Básico

```tsx
import React, { useState } from 'react';
import { View } from 'react-native';
import { DatePicker } from '@platformbuilders/fluid-react-native';

const ExampleDatePicker = () => {
  const [date, setDate] = useState('');

  return (
    <View>
      <DatePicker
        id="birth-date"
        accessibility="data-nascimento"
        label="Data de Nascimento"
        onDateChange={setDate}
        value={date}
      />
    </View>
  );
};
```

## Exemplos

### Com Formato Personalizado

Você pode personalizar o formato de exibição da data:

```tsx
<DatePicker
  id="date-picker-custom"
  accessibility="selecao-data-ano-mes"
  label="Selecione o mês e ano"
  format="MM/YYYY"
  mode="date"
  onDateChange={(date) => console.log(date)}
/>
```

### Com Data Máxima

Defina uma data limite máxima para seleção:

```tsx
<DatePicker
  id="date-picker-max"
  accessibility="selecao-data-limite"
  label="Data (até hoje)"
  maxDate={new Date().toISOString().split('T')[0]}
  onDateChange={(date) => console.log(date)}
/>
```

### Modos Diferentes

O componente suporta diferentes modos de seleção:

```tsx
// Seleção de data (padrão)
<DatePicker
  id="date-picker"
  accessibility="selecao-data"
  label="Selecione uma data"
  mode="date"
  onDateChange={(date) => console.log(date)}
/>

// Seleção de hora
<DatePicker
  id="time-picker"
  accessibility="selecao-hora"
  label="Selecione um horário"
  mode="time"
  format="HH:mm"
  onDateChange={(time) => console.log(time)}
/>

// Seleção de data e hora
<DatePicker
  id="datetime-picker"
  accessibility="selecao-data-hora"
  label="Selecione data e hora"
  mode="datetime"
  format="DD/MM/YYYY HH:mm"
  onDateChange={(datetime) => console.log(datetime)}
/>
```

### Estilo Escuro

Para interfaces com tema escuro:

```tsx
<DatePicker
  id="date-picker-dark"
  accessibility="selecao-data-escuro"
  label="Data (modo escuro)"
  dark
  onDateChange={(date) => console.log(date)}
/>
```

### Com Mensagem de Erro

Exiba mensagens de erro para validação:

```tsx
<DatePicker
  id="date-picker-error"
  accessibility="selecao-data-erro"
  label="Data de Nascimento"
  error="Por favor, selecione uma data válida"
  onDateChange={(date) => console.log(date)}
/>
```

### Desabilitado

Para campos somente leitura:

```tsx
<DatePicker
  id="date-picker-disabled"
  accessibility="selecao-data-desabilitado"
  label="Data (desabilitado)"
  editable={false}
  value="31/12/2021"
  onDateChange={(date) => console.log(date)}
/>
```

## Uso em Formulários

O DatePicker integra-se facilmente com bibliotecas de formulários como Formik:

```tsx
import React from 'react';
import { View } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { DatePicker, Button } from '@platformbuilders/fluid-react-native';

// Schema de validação
const ValidationSchema = Yup.object().shape({
  birthDate: Yup.string().required('Data de nascimento é obrigatória'),
});

const FormWithDatePicker = () => (
  <Formik
    initialValues={{ birthDate: '' }}
    validationSchema={ValidationSchema}
    onSubmit={(values) => console.log(values)}
  >
    {({ handleSubmit, setFieldValue, values, errors, touched }) => (
      <View>
        <DatePicker
          id="birth-date"
          accessibility="data-nascimento"
          label="Data de Nascimento"
          value={values.birthDate}
          error={touched.birthDate && errors.birthDate}
          onDateChange={(date) => setFieldValue('birthDate', date)}
        />
        
        <Button
          id="submit-form"
          accessibility="enviar-formulario"
          onPress={handleSubmit}
          title="Enviar"
        />
      </View>
    )}
  </Formik>
);
```

## API

### Props

| Prop               | Tipo                       | Padrão        | Descrição                                             |
|--------------------|----------------------------|---------------|-------------------------------------------------------|
| `accessibility`    | string                     | -             | Identificador para acessibilidade (**Obrigatório**).    |
| `id`               | string                     | `accessibility` | ID único para o componente.                           |
| `testID`           | string                     | `accessibility` | ID para testes automatizados.                         |
| `accessibilityLabel` | string                   | -             | Label descritivo para leitores de tela.                |
| `label`            | string                     | ''            | Texto de label flutuante.                             |
| `value`            | string                     | ''            | Valor da data selecionada (controlado).              |
| `error`            | string                     | ''            | Mensagem de erro a ser exibida abaixo do campo.       |
| `mode`             | 'date' \| 'time' \| 'datetime' | 'date'   | Modo de seleção do picker (data, hora ou ambos).       |
| `androidMode`      | 'spinner' \| 'calendar'    | 'spinner'     | Estilo do picker nativo no Android.                   |
| `format`           | string                     | 'DD/MM/YYYY'  | Formato de exibição da data/hora no campo.            |
| `locale`           | string                     | 'pt-BR'       | Localização para formatação e textos do picker.       |
| `maxDate`          | string                     | -             | Data máxima selecionável (formato `YYYY-MM-DD`).        |
| `editable`         | boolean                    | true          | Se `false`, desabilita a interação com o campo.        |
| `dark`             | boolean                    | false         | Se `true`, aplica estilos adequados para tema escuro. |
| `status`           | string                     | -             | (Não utilizado diretamente) Status do input.          |
| `cancelBtnText`    | string                     | 'Cancelar'    | Texto do botão de cancelar no picker.                |
| `confirmBtnText`   | string                     | 'Confirmar'   | Texto do botão de confirmar no picker.               |
| `onDateChange`     | `(date: string) => void`   | `() => {}`    | Callback chamada quando a data/hora é alterada.        |

## Acessibilidade

O DatePicker implementa as seguintes propriedades de acessibilidade:

- `accessibilityLabel`: Fornece uma descrição para leitores de tela (recomendado definir explicitamente).
- `testID`: Gerado automaticamente usando o valor de `accessibility` ou definido via prop `testID`.
- O estado `disabled` é comunicado quando `editable={false}`.

### Boas Práticas

1. **Labels Descritivos**: Sempre forneça um `accessibilityLabel` claro.
2. **Identificação Consistente**: Use valores consistentes para `id` e `accessibility`.
3. **Feedback de Erro**: Forneça mensagens de erro claras usando a prop `error`.
4. **Indicação de Campos Obrigatórios**: Indique campos obrigatórios no `label` (ex: "Data de Nascimento *").
5. **Contraste Adequado**: Use a prop `dark` conforme necessário para garantir contraste.

## Exemplo Completo

```tsx
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { DatePicker, Button, Typography } from '@platformbuilders/fluid-react-native';

const DatePickerExample = () => {
  const [birthDate, setBirthDate] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const [hasError, setHasError] = useState(false);

  const handleSubmit = () => {
    if (!birthDate) { // Apenas verificando data de nascimento como exemplo
      setHasError(true);
    } else {
      setHasError(false);
      console.log('Data Nascimento:', birthDate);
      console.log('Data Consulta:', appointmentDate);
      console.log('Hora Consulta:', appointmentTime);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Typography variant="h3" style={styles.title}>Exemplo DatePicker</Typography>
      
      <DatePicker
        id="birth-date"
        accessibility="data-nascimento-exemplo"
        label="Data de Nascimento"
        value={birthDate}
        onDateChange={setBirthDate}
        error={hasError && !birthDate ? 'Campo obrigatório' : ''}
        maxDate={new Date().toISOString().split('T')[0]} // Não permite data futura
      />
      
      <DatePicker
        id="appointment-date"
        accessibility="data-consulta-exemplo"
        label="Data da Consulta"
        value={appointmentDate}
        onDateChange={setAppointmentDate}
        format="DD/MM/YYYY" // Formato data
        mode="date"
      />
      
      <DatePicker
        id="appointment-time"
        accessibility="hora-consulta-exemplo"
        label="Hora da Consulta"
        value={appointmentTime}
        onDateChange={setAppointmentTime}
        format="HH:mm" // Formato hora
        mode="time" // Modo hora
      />

      <Button 
        accessibility="submit-datepicker-example"
        onPress={handleSubmit}
        style={styles.button}
      >
        Enviar
      </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    marginBottom: 24,
  },
  button: {
    marginTop: 32,
  }
});

export default DatePickerExample; 