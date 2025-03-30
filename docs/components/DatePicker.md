# DatePicker

O componente DatePicker oferece uma interface de usuário para seleção de datas em aplicativos React Native. Ele inclui um campo de entrada com comportamento de label flutuante (float label) e integração com o componente nativo de seleção de data.

## Importação

```jsx
import { DatePicker } from '@platformbuilders/fluid-react-native';
```

## Uso Básico

```jsx
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

## Variações

### Básico (Data)

```jsx
<DatePicker
  id="date-picker"
  accessibility="selecao-data"
  label="Selecione uma data"
  onDateChange={(date) => console.log(date)}
/>
```

### Com Formato Personalizado

```jsx
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

```jsx
<DatePicker
  id="date-picker-max"
  accessibility="selecao-data-limite"
  label="Data (até hoje)"
  maxDate={new Date().toISOString().split('T')[0]}
  onDateChange={(date) => console.log(date)}
/>
```

### Com Modo Específico para Android

```jsx
<DatePicker
  id="date-picker-android"
  accessibility="selecao-data-calendario"
  label="Data (modo calendário)"
  androidMode="calendar" // spinner (padrão) ou calendar
  onDateChange={(date) => console.log(date)}
/>
```

### Com Estilo Escuro

```jsx
<DatePicker
  id="date-picker-dark"
  accessibility="selecao-data-escuro"
  label="Data (modo escuro)"
  dark
  onDateChange={(date) => console.log(date)}
/>
```

### Com Mensagem de Erro

```jsx
<DatePicker
  id="date-picker-error"
  accessibility="selecao-data-erro"
  label="Data de Nascimento"
  error="Por favor, selecione uma data válida"
  onDateChange={(date) => console.log(date)}
/>
```

### Desabilitado

```jsx
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

O DatePicker pode ser facilmente integrado com bibliotecas de formulários como Formik:

```jsx
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

## Acessibilidade

O DatePicker inclui suporte para recursos de acessibilidade:

```jsx
<DatePicker
  id="birth-date"
  accessibility="data-nascimento"
  accessibilityLabel="Selecione sua data de nascimento"
  label="Data de Nascimento"
  onDateChange={(date) => console.log(date)}
/>
```

Para garantir melhor acessibilidade:

1. Sempre forneça um `accessibilityLabel` descritivo
2. Use o atributo `id` e `accessibility` para identificação adequada
3. Forneça um `label` claro e compreensível
4. Se o campo for obrigatório, indique isso no label (ex: "Data de Nascimento *")

## TestIDs

O componente DatePicker gera automaticamente testIDs para automação de testes. Você pode:

1. Definir explicitamente usando a prop `testID`
2. Ou usar o valor de `accessibility` como fallback

```jsx
// testID explícito
<DatePicker
  id="birth-date"
  accessibility="data-nascimento"
  testID="date-picker-birth-date"
  label="Data de Nascimento"
/>

// testID gerado automaticamente usando accessibility
<DatePicker
  id="birth-date"
  accessibility="data-nascimento"
  label="Data de Nascimento"
/>
```

## Props

| Prop               | Tipo                       | Padrão        | Descrição                                             |
|--------------------|----------------------------|---------------|-------------------------------------------------------|
| accessibility      | string                     | -             | Identificador para acessibilidade (**obrigatório**)   |
| id                 | string                     | -             | ID único para o componente                            |
| testID             | string                     | accessibility | ID para testes automatizados                          |
| accessibilityLabel | string                     | -             | Label para leitores de tela                           |
| label              | string                     | ''            | Texto de label flutuante                              |
| value              | string                     | ''            | Valor da data selecionada                             |
| error              | string                     | ''            | Mensagem de erro                                      |
| mode               | 'date' \| 'time' \| 'datetime' | 'date'       | Modo de seleção do picker                             |
| androidMode        | 'spinner' \| 'calendar'    | 'spinner'     | Estilo do picker em dispositivos Android              |
| format             | string                     | 'DD/MM/YYYY'  | Formato de exibição da data                           |
| locale             | string                     | 'pt-BR'       | Localização para tradução                             |
| maxDate            | string                     | -             | Data máxima selecionável                              |
| editable           | boolean                    | true          | Se o componente pode ser editado                      |
| dark               | boolean                    | false         | Se deve usar o tema escuro                            |
| status             | string                     | -             | Status do input (para estilização condicional)        |
| cancelBtnText      | string                     | 'Cancelar'    | Texto do botão de cancelar                            |
| confirmBtnText     | string                     | 'Confirmar'   | Texto do botão de confirmar                           |
| onDateChange       | function                   | () => {}      | Callback chamada quando a data é alterada             |

## Exemplo Completo

```jsx
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { DatePicker, Button } from '@platformbuilders/fluid-react-native';

const DatePickerExample = () => {
  const [birthDate, setBirthDate] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const [hasError, setHasError] = useState(false);

  const handleSubmit = () => {
    if (!birthDate || !appointmentDate || !appointmentTime) {
      setHasError(true);
    } else {
      setHasError(false);
      console.log({
        birthDate,
        appointmentDate,
        appointmentTime,
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Agendamento de Consulta</Text>
      
      <View style={styles.form}>
        <DatePicker
          id="birth-date"
          accessibility="data-nascimento"
          label="Data de Nascimento"
          value={birthDate}
          error={hasError && !birthDate ? 'Campo obrigatório' : ''}
          onDateChange={setBirthDate}
          maxDate={new Date().toISOString().split('T')[0]}
        />
        
        <View style={styles.spacing} />
        
        <DatePicker
          id="appointment-date"
          accessibility="data-consulta"
          label="Data da Consulta"
          value={appointmentDate}
          error={hasError && !appointmentDate ? 'Campo obrigatório' : ''}
          onDateChange={setAppointmentDate}
          format="DD/MM/YYYY"
          androidMode="calendar"
        />
        
        <View style={styles.spacing} />
        
        <DatePicker
          id="appointment-time"
          accessibility="horario-consulta"
          label="Horário da Consulta"
          value={appointmentTime}
          error={hasError && !appointmentTime ? 'Campo obrigatório' : ''}
          onDateChange={setAppointmentTime}
          mode="time"
          format="HH:mm"
        />
        
        <View style={styles.spacing} />
        
        <Button
          id="submit"
          accessibility="enviar-formulario"
          title="Agendar Consulta"
          onPress={handleSubmit}
        />
      </View>
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
});

export default DatePickerExample; 