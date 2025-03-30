# RadioButton

O componente RadioButton oferece uma implementação consistente de botões de opção (radio buttons) para seleção entre opções mutuamente exclusivas em sua aplicação.

## Importação

```jsx
import { RadioButton } from '@platformbuilders/fluid-react-native';
```

## Uso Básico

```jsx
import React, { useState } from 'react';
import { View } from 'react-native';
import { RadioButton } from '@platformbuilders/fluid-react-native';

const BasicRadioButtonExample = () => {
  const [selected, setSelected] = useState(false);
  
  return (
    <View>
      <RadioButton
        accessibility="Selecionar opção"
        label="Opção 1"
        checked={selected}
        onPress={() => setSelected(!selected)}
      />
    </View>
  );
};
```

## Variações

### Estados: Selecionado/Não Selecionado

```jsx
// RadioButton não selecionado (padrão)
<RadioButton
  accessibility="Opção não selecionada"
  label="Opção não selecionada"
  checked={false}
  onPress={() => {}}
/>

// RadioButton selecionado
<RadioButton
  accessibility="Opção selecionada"
  label="Opção selecionada"
  checked={true}
  onPress={() => {}}
/>
```

### Estado Desabilitado

```jsx
// RadioButton desabilitado
<RadioButton
  accessibility="Opção desabilitada"
  label="Opção desabilitada"
  disabled={true}
  onPress={() => {}}
/>

// RadioButton desabilitado e selecionado
<RadioButton
  accessibility="Opção desabilitada e selecionada"
  label="Opção desabilitada e selecionada"
  checked={true}
  disabled={true}
  onPress={() => {}}
/>
```

### Personalização de Cores

```jsx
// Cor do botão (borda externa)
<RadioButton
  accessibility="Botão com cor personalizada"
  label="Cor da borda personalizada"
  radioButtonColor="#3498db"
  onPress={() => {}}
/>

// Cor do indicador de seleção (preenchimento interno)
<RadioButton
  accessibility="Indicador com cor personalizada"
  label="Cor de seleção personalizada"
  checked={true}
  checkedRadioButtonColor="#2ecc71"
  onPress={() => {}}
/>

// Cores personalizadas combinadas
<RadioButton
  accessibility="Cores totalmente personalizadas"
  label="Cores personalizadas"
  checked={true}
  radioButtonColor="#3498db"
  checkedRadioButtonColor="#2ecc71"
  onPress={() => {}}
/>
```

### Tamanho Personalizado

```jsx
// Tamanho personalizado (padrão: 20)
<RadioButton
  accessibility="Botão de tamanho personalizado"
  label="Tamanho personalizado"
  size={24}
  onPress={() => {}}
/>

// Tamanho do indicador interno personalizado (padrão: size - 7)
<RadioButton
  accessibility="Indicador interno personalizado"
  label="Indicador interno personalizado"
  checked={true}
  size={24}
  internalSize={14}
  onPress={() => {}}
/>
```

### Estilo do Label

```jsx
// Estilo de texto personalizado para o label
<RadioButton
  accessibility="Label com estilo personalizado"
  label="Label estilizado"
  labelStyle={{ 
    color: '#e74c3c', 
    fontWeight: 'bold',
    fontSize: 16
  }}
  onPress={() => {}}
/>
```

## Grupo de RadioButtons

Embora o componente `RadioButton` não tenha um grupo nativo, você pode facilmente criar um grupo funcional:

```jsx
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { RadioButton, Typography } from '@platformbuilders/fluid-react-native';

const RadioButtonGroupExample = () => {
  const [selectedOption, setSelectedOption] = useState('option1');
  
  const options = [
    { id: 'option1', label: 'Opção 1' },
    { id: 'option2', label: 'Opção 2' },
    { id: 'option3', label: 'Opção 3' },
  ];
  
  return (
    <View style={styles.container}>
      <Typography variant="subtitle" style={styles.title}>
        Selecione uma opção:
      </Typography>
      
      {options.map((option) => (
        <RadioButton
          key={option.id}
          id={option.id}
          accessibility={`Selecionar ${option.label}`}
          label={option.label}
          checked={selectedOption === option.id}
          onPress={() => setSelectedOption(option.id)}
          style={styles.radioButton}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    marginBottom: 16,
  },
  radioButton: {
    marginBottom: 12,
  },
});
```

## Manipulação de Eventos

O componente `RadioButton` possui a propriedade `onPress` para lidar com eventos de toque:

```jsx
const handleOptionSelected = () => {
  console.log('RadioButton foi pressionado');
  // Lógica adicional aqui
};

<RadioButton
  accessibility="Opção selecionável"
  label="Clique em mim"
  onPress={handleOptionSelected}
/>
```

## Acessibilidade

O componente `RadioButton` implementa automaticamente recursos de acessibilidade para melhorar a experiência de usuários com deficiências:

- A propriedade `accessibility` é utilizada para descrever o propósito do componente
- O estado de seleção (`checked`) é comunicado aos leitores de tela
- O estado desabilitado (`disabled`) é comunicado apropriadamente
- A área de toque é aumentada para facilitar a interação (`hitSlop`)

### Exemplo com Acessibilidade

```jsx
<RadioButton
  id="payment-option"
  accessibility="Selecionar cartão de crédito como método de pagamento"
  accessibilityLabel="Cartão de crédito"
  label="Cartão de crédito"
  checked={selectedPayment === 'credit'}
  onPress={() => setSelectedPayment('credit')}
/>
```

### Boas Práticas de Acessibilidade

1. **Labels descritivos**:
   - Use descrições claras que expliquem o propósito do radio button
   - Exemplo: "Selecionar entrega expressa" em vez de apenas "Expressa"

2. **Agrupamento lógico**:
   - Agrupe radio buttons relacionados visualmente e semanticamente
   - Use cabeçalhos descritivos para grupos de opções

3. **Estados claros**:
   - Certifique-se de que os estados selecionado/não selecionado são visualmente distintos
   - O contraste deve ser suficiente para usuários com baixa visão

4. **Área de toque adequada**:
   - O componente já implementa uma área de toque maior, facilitando o uso

## TestIDs

O componente `RadioButton` gera TestIDs automaticamente para facilitar testes automatizados, seguindo a hierarquia:

1. Gera um TestID no formato `radio_{id}` se a propriedade `id` estiver presente
2. Usa `radio_{accessibility}` se `id` não estiver presente, mas `accessibility` sim
3. Usa `radio_{testID}` se `testID` estiver presente mas `id` e `accessibility` não
4. Último caso: `radio_radio`

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `accessibility` | string | - | Descrição de acessibilidade do radio button (obrigatório) |
| `id` | string | - | ID único do componente (opcional) |
| `testID` | string | - | ID para testes automatizados (gerado automaticamente se não fornecido) |
| `checked` | boolean | `false` | Define se o radio button está selecionado |
| `disabled` | boolean | `false` | Define se o radio button está desabilitado |
| `onPress` | function | `() => {}` | Função chamada quando o radio button é pressionado |
| `label` | string | - | Texto a ser exibido ao lado do radio button |
| `labelStyle` | object | `{}` | Estilos personalizados para o texto do label |
| `radioButtonColor` | string | - | Cor da borda do radio button (usa a cor do tema se não especificada) |
| `checkedRadioButtonColor` | string | - | Cor do indicador interno quando selecionado (usa a cor primária do tema se não especificada) |
| `size` | number | `20` | Tamanho do radio button (diâmetro em pixels) |
| `internalSize` | number | `size - 7` | Tamanho do indicador interno quando selecionado |
| `accessibilityLabel` | string | - | Label de acessibilidade específico (usa `label` ou valores padrão se não especificado) |

## Exemplo Completo

```jsx
import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { RadioButton, Typography } from '@platformbuilders/fluid-react-native';

const RadioButtonExample = () => {
  const [gender, setGender] = useState('');
  const [notificationPreference, setNotificationPreference] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  
  return (
    <ScrollView style={styles.container}>
      <Typography variant="h3" style={styles.title}>
        Exemplos do Componente RadioButton
      </Typography>
      
      <View style={styles.section}>
        <Typography variant="subtitle" style={styles.sectionTitle}>
          Gênero
        </Typography>
        
        <RadioButton
          id="gender-male"
          accessibility="Selecionar gênero masculino"
          label="Masculino"
          checked={gender === 'male'}
          onPress={() => setGender('male')}
          style={styles.radioOption}
        />
        
        <RadioButton
          id="gender-female"
          accessibility="Selecionar gênero feminino"
          label="Feminino"
          checked={gender === 'female'}
          onPress={() => setGender('female')}
          style={styles.radioOption}
        />
        
        <RadioButton
          id="gender-other"
          accessibility="Selecionar outro gênero"
          label="Outro"
          checked={gender === 'other'}
          onPress={() => setGender('other')}
          style={styles.radioOption}
        />
      </View>
      
      <View style={styles.section}>
        <Typography variant="subtitle" style={styles.sectionTitle}>
          Preferências de Notificação
        </Typography>
        
        <RadioButton
          id="notification-all"
          accessibility="Receber todas as notificações"
          label="Todas as notificações"
          checked={notificationPreference === 'all'}
          onPress={() => setNotificationPreference('all')}
          radioButtonColor="#3498db"
          checkedRadioButtonColor="#2980b9"
          style={styles.radioOption}
        />
        
        <RadioButton
          id="notification-important"
          accessibility="Receber apenas notificações importantes"
          label="Apenas importantes"
          checked={notificationPreference === 'important'}
          onPress={() => setNotificationPreference('important')}
          radioButtonColor="#3498db"
          checkedRadioButtonColor="#2980b9"
          style={styles.radioOption}
        />
        
        <RadioButton
          id="notification-none"
          accessibility="Não receber notificações"
          label="Nenhuma notificação"
          checked={notificationPreference === 'none'}
          onPress={() => setNotificationPreference('none')}
          radioButtonColor="#3498db"
          checkedRadioButtonColor="#2980b9"
          style={styles.radioOption}
        />
      </View>
      
      <View style={styles.section}>
        <Typography variant="subtitle" style={styles.sectionTitle}>
          Método de Pagamento
        </Typography>
        
        <RadioButton
          id="payment-credit"
          accessibility="Selecionar cartão de crédito como forma de pagamento"
          label="Cartão de crédito"
          checked={paymentMethod === 'credit'}
          onPress={() => setPaymentMethod('credit')}
          size={24}
          internalSize={14}
          style={styles.radioOption}
        />
        
        <RadioButton
          id="payment-debit"
          accessibility="Selecionar cartão de débito como forma de pagamento"
          label="Cartão de débito"
          checked={paymentMethod === 'debit'}
          onPress={() => setPaymentMethod('debit')}
          size={24}
          internalSize={14}
          style={styles.radioOption}
        />
        
        <RadioButton
          id="payment-pix"
          accessibility="Selecionar PIX como forma de pagamento"
          label="PIX"
          checked={paymentMethod === 'pix'}
          onPress={() => setPaymentMethod('pix')}
          size={24}
          internalSize={14}
          style={styles.radioOption}
        />
        
        <RadioButton
          id="payment-boleto"
          accessibility="Selecionar boleto como forma de pagamento"
          label="Boleto"
          checked={paymentMethod === 'boleto'}
          onPress={() => setPaymentMethod('boleto')}
          disabled
          style={styles.radioOption}
          labelStyle={styles.disabledLabel}
        />
      </View>
      
      <View style={styles.section}>
        <Typography variant="subtitle" style={styles.sectionTitle}>
          Variações de Estilo
        </Typography>
        
        <RadioButton
          id="style-default"
          accessibility="Estilo padrão"
          label="Estilo padrão"
          checked={true}
          style={styles.radioOption}
          onPress={() => {}}
        />
        
        <RadioButton
          id="style-custom-color"
          accessibility="Cores personalizadas"
          label="Cores personalizadas"
          checked={true}
          radioButtonColor="#e74c3c"
          checkedRadioButtonColor="#c0392b"
          style={styles.radioOption}
          onPress={() => {}}
        />
        
        <RadioButton
          id="style-custom-size"
          accessibility="Tamanho personalizado"
          label="Tamanho personalizado"
          checked={true}
          size={30}
          internalSize={18}
          style={styles.radioOption}
          onPress={() => {}}
        />
        
        <RadioButton
          id="style-custom-label"
          accessibility="Label com estilo personalizado"
          label="Label com estilo personalizado"
          checked={true}
          labelStyle={styles.customLabel}
          style={styles.radioOption}
          onPress={() => {}}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  title: {
    marginBottom: 24,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    marginBottom: 16,
  },
  radioOption: {
    marginBottom: 12,
  },
  disabledLabel: {
    opacity: 0.5,
  },
  customLabel: {
    color: '#8e44ad',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default RadioButtonExample; 