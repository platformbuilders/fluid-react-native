# Toggle

O componente Toggle fornece um interruptor acessível para ativar/desativar opções em sua aplicação. É ideal para configurações binárias de tipo "ligado/desligado" ou "sim/não".

## Importação

```jsx
import { Toggle } from '@platformbuilders/fluid-react-native';
```

## Uso Básico

```jsx
import React, { useState } from 'react';
import { View } from 'react-native';
import { Toggle } from '@platformbuilders/fluid-react-native';

const BasicToggleExample = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  
  return (
    <View>
      <Toggle 
        value={isEnabled}
        onValueChange={setIsEnabled}
        accessibility="modo-noturno"
      />
    </View>
  );
};
```

## Variações

### Estados

```jsx
// Ativado
<Toggle 
  value={true}
  onValueChange={handleChange}
  accessibility="notificacoes"
/>

// Desativado
<Toggle 
  value={false}
  onValueChange={handleChange}
  accessibility="notificacoes"
/>

// Desabilitado
<Toggle 
  value={true}
  onValueChange={handleChange}
  isDisabled={true}
  accessibility="configuracao-bloqueada"
/>
```

### Cores Personalizadas

Você pode personalizar tanto a cor do botão deslizante (thumb) quanto da trilha (track):

```jsx
// Personalização completa
<Toggle 
  value={isEnabled}
  onValueChange={setIsEnabled}
  accessibility="tema-escuro"
  thumbColor={{
    trueColor: '#FFFFFF',  // Cor do botão quando ativado
    falseColor: '#CCCCCC'  // Cor do botão quando desativado
  }}
  trackColor={{
    trueColor: '#007AFF',  // Cor da trilha quando ativado
    falseColor: '#E5E5E5'  // Cor da trilha quando desativado
  }}
/>

// Apenas personalização do botão
<Toggle 
  value={isEnabled}
  onValueChange={setIsEnabled}
  accessibility="modo-economico"
  thumbColor={{
    trueColor: '#4CD964',  // Verde para ativado
    falseColor: '#D1D1D6'  // Cinza para desativado
  }}
/>

// Apenas personalização da trilha
<Toggle 
  value={isEnabled}
  onValueChange={setIsEnabled}
  accessibility="notificacoes-push"
  trackColor={{
    trueColor: '#34C759',  // Verde claro para ativado
    falseColor: '#F2F2F7'  // Cinza claro para desativado
  }}
/>
```

### Com Identificadores Específicos

Usando propriedades `id` e `testID` para automação de testes e rastreamento:

```jsx
<Toggle 
  id="darkmode-toggle"
  testID="settings-darkmode"
  value={isDarkMode}
  onValueChange={toggleDarkMode}
  accessibility="modo-escuro"
/>
```

## Manipulação de Eventos

O componente Toggle aceita a propriedade `onValueChange` para responder a mudanças de estado:

```jsx
const handleToggleChange = (newValue) => {
  console.log(`Toggle foi ${newValue ? 'ativado' : 'desativado'}`);
  // Lógica adicional aqui
  setIsEnabled(newValue);
};

<Toggle 
  value={isEnabled}
  onValueChange={handleToggleChange}
  accessibility="notificacoes"
/>
```

## Acessibilidade

O componente Toggle implementa automaticamente recursos de acessibilidade para melhorar a experiência de usuários com deficiências:

- `accessibilityLabel`: Descrição do toggle para leitores de tela (gerado automaticamente ou personalizado)
- `accessibilityRole`: Definido como "switch" para identificação correta do tipo de controle
- `accessibilityState`: Informa os estados "checked" e "disabled" para leitores de tela
- `accessibilityHint`: Informa ao usuário que o toggle alterna ao ser pressionado

### Estado padrão

Por padrão, o leitor de tela anunciará:
- Quando ativado: "Alternar. Estado atual: ativado. Toque duas vezes para alternar."
- Quando desativado: "Alternar. Estado atual: desativado. Toque duas vezes para alternar."

### Exemplo com Acessibilidade Personalizada

```jsx
<Toggle 
  value={darkMode}
  onValueChange={toggleDarkMode}
  accessibility="modo-escuro"
  accessibilityLabel={`Modo escuro: ${darkMode ? 'ativado' : 'desativado'}`}
/>
```

### Boas Práticas de Acessibilidade

1. **Labels descritivos**:
   - Use labels claros e específicos
   - Descreva o estado atual (ativado/desativado)
   - Inclua o propósito do toggle (ex: "Modo escuro: ativado")

2. **Estados visíveis**:
   - Garanta alto contraste entre os estados ativado/desativado
   - Forneça indicação clara do estado atual visualmente
   - Use cores semanticamente associadas quando possível (ex: verde para ativado)

3. **Agrupamento**:
   - Quando usar múltiplos toggles, agrupe-os logicamente
   - Forneça cabeçalhos ou descrições para cada grupo
   - Mantenha relacionados próximos visualmente

4. **Feedback imediato**:
   - Forneça feedback visível e audível quando o estado mudar
   - Informe claramente as consequências da mudança (ex: "Ativar notificações permitirá que você receba alertas")

## TestIDs

O componente Toggle gera TestIDs automaticamente para facilitar testes automatizados, seguindo a hierarquia:

1. Gera um TestID no formato `toggle_{id}` se a propriedade `id` estiver presente
2. Usa `toggle_{accessibility}` se `id` não estiver presente, mas `accessibility` sim
3. Usa `toggle_{testID}` se `testID` estiver presente mas `id` e `accessibility` não
4. Último caso: `toggle_toggle`

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `id` | string | - | ID único do componente (opcional) |
| `accessibility` | string | - | ID para acessibilidade (recomendado) |
| `accessibilityLabel` | string | Status gerado automaticamente | Descrição do toggle para leitores de tela |
| `testID` | string | - | ID para testes automatizados |
| `value` | boolean | Obrigatório | Estado atual do toggle (true/false) |
| `onValueChange` | function | Obrigatório | Função chamada ao alternar o valor |
| `isDisabled` | boolean | false | Se o toggle está desabilitado |
| `thumbColor` | { trueColor: string, falseColor: string } | - | Cores customizadas para o botão deslizante do toggle |
| `trackColor` | { trueColor: string, falseColor: string } | - | Cores customizadas para a trilha do toggle |

## Exemplo Completo

```jsx
import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Toggle, Typography } from '@platformbuilders/fluid-react-native';

const ToggleExample = () => {
  const [notifications, setNotifications] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [biometric, setBiometric] = useState(false);
  const [autoSync, setAutoSync] = useState(true);
  const [locationServices, setLocationServices] = useState(false);
  
  return (
    <ScrollView style={styles.container}>
      <Typography variant="h3" style={styles.title}>
        Exemplos do Componente Toggle
      </Typography>
      
      <View style={styles.section}>
        <Typography variant="subtitle" style={styles.sectionTitle}>
          Configurações Gerais
        </Typography>
        
        <View style={styles.row}>
          <Typography variant="body" style={styles.label}>
            Modo Escuro
          </Typography>
          <Toggle
            id="darkmode"
            accessibility="modo-escuro"
            value={darkMode}
            onValueChange={setDarkMode}
            accessibilityLabel={`Modo escuro: ${darkMode ? 'ativado' : 'desativado'}`}
          />
        </View>
        
        <View style={styles.row}>
          <Typography variant="body" style={styles.label}>
            Notificações
          </Typography>
          <Toggle
            id="notifications"
            accessibility="notificacoes"
            value={notifications}
            onValueChange={setNotifications}
          />
        </View>
        
        <View style={styles.row}>
          <Typography variant="body" style={styles.label}>
            Autenticação Biométrica
          </Typography>
          <Toggle
            id="biometric"
            accessibility="autenticacao-biometrica"
            value={biometric}
            onValueChange={setBiometric}
          />
        </View>
      </View>
      
      <View style={styles.section}>
        <Typography variant="subtitle" style={styles.sectionTitle}>
          Sincronização e Dados
        </Typography>
        
        <View style={styles.row}>
          <Typography variant="body" style={styles.label}>
            Sincronização Automática
          </Typography>
          <Toggle
            id="autosync"
            accessibility="sincronizacao-automatica"
            value={autoSync}
            onValueChange={setAutoSync}
          />
        </View>
        
        <View style={styles.row}>
          <Typography variant="body" style={styles.label}>
            Serviços de Localização
          </Typography>
          <Toggle
            id="location"
            accessibility="servicos-localizacao"
            value={locationServices}
            onValueChange={setLocationServices}
          />
        </View>
      </View>
      
      <View style={styles.section}>
        <Typography variant="subtitle" style={styles.sectionTitle}>
          Variações de Estilo
        </Typography>
        
        <View style={styles.row}>
          <Typography variant="body" style={styles.label}>
            Padrão
          </Typography>
          <Toggle
            id="default-style"
            accessibility="toggle-padrao"
            value={true}
            onValueChange={() => {}}
          />
        </View>
        
        <View style={styles.row}>
          <Typography variant="body" style={styles.label}>
            Cores Personalizadas
          </Typography>
          <Toggle
            id="custom-colors"
            accessibility="cores-personalizadas"
            value={true}
            onValueChange={() => {}}
            thumbColor={{
              trueColor: '#4CD964',
              falseColor: '#D1D1D6'
            }}
            trackColor={{
              trueColor: '#4CD96430',
              falseColor: '#D1D1D630'
            }}
          />
        </View>
        
        <View style={styles.row}>
          <Typography variant="body" style={styles.label}>
            Desabilitado - Ativado
          </Typography>
          <Toggle
            id="disabled-on"
            accessibility="desabilitado-ativado"
            value={true}
            onValueChange={() => {}}
            isDisabled={true}
          />
        </View>
        
        <View style={styles.row}>
          <Typography variant="body" style={styles.label}>
            Desabilitado - Desativado
          </Typography>
          <Toggle
            id="disabled-off"
            accessibility="desabilitado-desativado"
            value={false}
            onValueChange={() => {}}
            isDisabled={true}
          />
        </View>
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  label: {
    flex: 1,
  },
});

export default ToggleExample; 