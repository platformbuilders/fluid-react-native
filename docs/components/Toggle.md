# Toggle

O componente Toggle fornece um interruptor acessível para ativar/desativar opções.

## Importação

```jsx
import { Toggle } from '@platformbuilders/fluid-react-native';
```

## Uso Básico

```jsx
const [isEnabled, setIsEnabled] = useState(false);

<Toggle 
  value={isEnabled}
  onValueChange={setIsEnabled}
  accessibility="modo-noturno"
/>
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

```jsx
<Toggle 
  value={isEnabled}
  onValueChange={setIsEnabled}
  accessibility="tema-escuro"
  thumbColor={{
    trueColor: '#FFFFFF',
    falseColor: '#CCCCCC'
  }}
  trackColor={{
    trueColor: '#007AFF',
    falseColor: '#E5E5E5'
  }}
/>
```

## Acessibilidade

O componente Toggle implementa as seguintes propriedades de acessibilidade:

- `accessibilityLabel`: Descrição do toggle para leitores de tela
- `accessibilityRole`: Definido como "switch"
- `accessibilityState`: Informa os estados "checked" e "disabled"
- `accessibilityHint`: Informa que o botão alterna ao ser pressionado

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

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `id` | string | - | ID do componente |
| `accessibility` | string | - | ID para acessibilidade |
| `accessibilityLabel` | string | Status gerado automaticamente | Descrição do toggle para leitores de tela |
| `testID` | string | - | ID para testes |
| `value` | boolean | Obrigatório | Estado atual do toggle (true/false) |
| `onValueChange` | function | Obrigatório | Função chamada ao alternar o valor |
| `isDisabled` | boolean | false | Se o toggle está desabilitado |
| `thumbColor` | { trueColor: string, falseColor: string } | - | Cores customizadas para o botão do toggle |
| `trackColor` | { trueColor: string, falseColor: string } | - | Cores customizadas para a trilha do toggle | 