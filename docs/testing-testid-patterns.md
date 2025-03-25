# Padrões de TestID no Fluid React Native

## Visão Geral

TestIDs são identificadores únicos atribuídos a componentes React Native para facilitar sua localização e interação durante testes automatizados. No Fluid React Native, seguimos um conjunto de padrões consistentes para implementação de testIDs, garantindo que os componentes sejam facilmente testáveis e identificáveis.

## Por que TestIDs são importantes?

1. **Automação de testes**: Permitem localizar elementos específicos na interface
2. **Testes e2e**: Essenciais para testes end-to-end com ferramentas como Detox
3. **Estabilidade**: Fornecem identificadores estáveis que não mudam com alterações visuais
4. **Consistência**: Garantem uma abordagem uniforme em toda a aplicação

## Padrão de Nomenclatura

### Formato Base

```
{componentType}_{id}
```

Onde:
- `componentType`: O tipo do componente em minúsculas (ex: button, input, toggle)
- `id`: Um identificador único para a instância do componente

### Exemplos

```jsx
<Button id="submit" />           // testID: "button_submit"
<TextInput id="email" />         // testID: "input_email"
<Toggle id="notifications" />    // testID: "toggle_notifications"
```

## Hierarquia de Prioridades

Quando várias opções de identificação estão disponíveis, seguimos a seguinte ordem de prioridade:

1. **Prop `id`**: Tem prioridade máxima, se fornecida
2. **Prop `accessibility`**: Usada quando `id` não está disponível
3. **Prop `testID`**: Usado como entrada direta, combinado com o tipo do componente
4. **Children como string** (em alguns componentes): Para componentes como Typography, se nenhum ID estiver disponível
5. **Fallback**: `{componentType}_{componentType}` como último recurso

### Exemplos de Prioridade

```jsx
// Prioridade 1: id está disponível
<Button id="submit" accessibility="enviar" />
// Resultado: testID="button_submit"

// Prioridade 2: id não está disponível, mas accessibility sim
<Button accessibility="submit-form" />
// Resultado: testID="button_submit-form"

// Prioridade 3: testID fornecido diretamente 
<Button testID="custom-id" />
// Resultado: testID="button_custom-id"

// Prioridade 4: Para Typography, children como string
<Typography>Título da Página</Typography>
// Resultado: testID="Título da Página"

// Prioridade 5: Fallback quando nada está disponível
<Button />
// Resultado: testID="button_button"
```

## Implementação Técnica

A biblioteca Fluid React Native fornece uma função utilitária para gerar testIDs consistentes:

```typescript
// Em src/utils/accessibility.ts
export const generateTestID = (prefix: string, id?: string): string => {
  return id ? `${prefix}_${id}` : prefix;
};
```

Esta função deve ser usada em todos os componentes para garantir consistência.

### Exemplo de Implementação em um Componente

```typescript
// Exemplo de implementação em um componente Button
const Button = ({
  id,
  accessibility,
  testID,
  ...props
}: ButtonProps) => {
  const buttonTestID = id 
    ? generateTestID('button', id)
    : accessibility
      ? generateTestID('button', accessibility)
      : testID
        ? generateTestID('button', testID)
        : 'button_button';
        
  return (
    <TouchableOpacity
      testID={buttonTestID}
      accessibilityLabel={accessibility}
      {...props}
    />
  );
};
```

## Componentes Aninhados e Compostos

Para componentes que contêm outros componentes, cada elemento deve ter seu próprio testID consistente com a hierarquia:

### Estrutura de Componentes Aninhados

```jsx
<Button id="submit">
  <Typography>Enviar</Typography>
  <Icon name="arrow-right" />
</Button>
```

### TestIDs Gerados

```
Button: "button_submit"
Typography dentro do Button: "text_submit"
Icon dentro do Button: "icon_submit"
```

## Testando com TestIDs

### React Native Testing Library

```typescript
import { render } from '@testing-library/react-native';

it('should handle button press', () => {
  const onPress = jest.fn();
  const { getByTestId } = render(
    <Button id="submit" onPress={onPress}>Enviar</Button>
  );
  
  const button = getByTestId('button_submit');
  fireEvent.press(button);
  
  expect(onPress).toHaveBeenCalled();
});
```

### Detox (Testes e2e)

```javascript
describe('Form submission', () => {
  it('should submit the form successfully', async () => {
    await element(by.id('input_email')).typeText('teste@example.com');
    await element(by.id('input_password')).typeText('senha123');
    await element(by.id('button_submit')).tap();
    
    await expect(element(by.id('text_success'))).toBeVisible();
  });
});
```

## Melhores Práticas

1. **Sempre forneça um ID**: Sempre que possível, forneça props `id` para componentes interativos
2. **Use a função de utilitário**: Utilize `generateTestID` para garantir consistência
3. **Testes abrangentes**: Verifique se seus testes cobrem a lógica de geração de testID
4. **IDs significativos**: Use identificadores que descrevam a função do componente
5. **Evite dinamismo**: Evite gerar testIDs dinâmicos baseados em dados que mudam frequentemente
6. **Consistência entre componentes semelhantes**: Componentes que fazem o mesmo tipo de trabalho devem seguir o mesmo padrão
7. **Documente exceções**: Se um componente não seguir o padrão padrão, documente o motivo

## Verificação de Conformidade

Como parte do processo de revisão de código, certifique-se de verificar se:

1. Todos os componentes interativos têm testIDs apropriados
2. Os testIDs seguem o padrão de nomenclatura estabelecido
3. Os testIDs são verificados em testes unitários
4. Componentes similares seguem padrões similares

## Casos Especiais

### Componentes com Estados Múltiplos

Para componentes que mudam de estado (como Accordion), é recomendável manter o mesmo testID base e adicionar sufixos para estados específicos:

```jsx
<Accordion id="faq">
  <AccordionItem testID="faq_header_1">Título 1</AccordionItem>
  <AccordionItem testID="faq_content_1">Conteúdo 1</AccordionItem>
</Accordion>
```

### Listas e Itens Dinâmicos

Para listas de itens, prefira combinar um ID base com um índice ou identificador único:

```jsx
{items.map((item, index) => (
  <ListItem
    key={item.id}
    testID={`list-item_${item.id}`}
    title={item.title}
  />
))}
```

## Conclusão

Seguir estes padrões de testID garantirá que todos os componentes no Fluid React Native sejam facilmente testáveis, identificáveis e sigam uma convenção consistente. Isto facilita tanto os testes automatizados quanto a manutenção do código a longo prazo.

## Implementação de Referência

Abaixo está um exemplo completo de implementação correta de testID em um componente Button:

```typescript
import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { ButtonType } from '../../types';
import { generateTestID, generateAccessibilityProps } from '../../utils';
import Typography from '../Typography';
import Icon from '../Icon';

/**
 * Componente Button que segue todos os padrões de testID recomendados.
 */
const Button: FC<ButtonType> = ({
  id,
  accessibility,
  testID,
  accessibilityLabel,
  children,
  onPress,
  leftIcon,
  rightIcon,
  disabled = false,
  loading = false,
  ...rest
}) => {
  // Determina o valor final de testID, seguindo a hierarquia de prioridade
  const componentType = 'button';
  
  // Obtém o testID usando a função utilitária
  const buttonTestID = generateTestID(
    componentType,
    id || accessibility || testID || componentType
  );

  // Para componentes filhos, derivamos o testID do ID do pai
  const textTestID = generateTestID('text', id || accessibility || testID || componentType);
  const leftIconTestID = leftIcon ? generateTestID('icon_left', id || accessibility || testID || componentType) : undefined;
  const rightIconTestID = rightIcon ? generateTestID('icon_right', id || accessibility || testID || componentType) : undefined;

  // Gera propriedades de acessibilidade padronizadas
  const accessibilityProps = generateAccessibilityProps(
    {
      id,
      accessibility,
      accessibilityLabel,
      disabled,
      busy: loading,
    },
    'button',
    typeof children === 'string' ? children : undefined
  );

  return (
    <TouchableOpacity
      testID={buttonTestID}
      onPress={onPress}
      disabled={disabled || loading}
      {...accessibilityProps}
      {...rest}
    >
      {leftIcon && (
        <Icon
          name={leftIcon}
          testID={leftIconTestID}
        />
      )}
      
      {typeof children === 'string' ? (
        <Typography
          testID={textTestID}
          accessibility={accessibility}
        >
          {children}
        </Typography>
      ) : (
        children
      )}
      
      {rightIcon && (
        <Icon
          name={rightIcon}
          testID={rightIconTestID}
        />
      )}
      
      {loading && (
        <Icon
          name="spinner"
          testID={generateTestID('loading', id || accessibility || testID || componentType)}
        />
      )}
    </TouchableOpacity>
  );
};

export default Button;
```

### Testes Correspondentes

Os testes para este componente verificariam a implementação de testID:

```typescript
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { generateTestID } from '../../utils';
import Button from '../Button';

describe('<Button />', () => {
  it('should use correct testID hierarchy', () => {
    const { getByTestId } = render(
      <Button id="submit" onPress={() => {}}>
        Enviar
      </Button>
    );
    
    // Verifica se o botão usa o ID fornecido
    expect(getByTestId('button_submit')).toBeTruthy();
    
    // Verifica se o texto dentro do botão tem o testID derivado
    expect(getByTestId('text_submit')).toBeTruthy();
  });
  
  it('should fall back to accessibility when id is not provided', () => {
    const { getByTestId } = render(
      <Button accessibility="submit-form" onPress={() => {}}>
        Enviar
      </Button>
    );
    
    expect(getByTestId('button_submit-form')).toBeTruthy();
  });
  
  it('should handle icons with correct testIDs', () => {
    const { getByTestId } = render(
      <Button 
        id="login" 
        leftIcon="user" 
        rightIcon="arrow-right"
        onPress={() => {}}
      >
        Login
      </Button>
    );
    
    expect(getByTestId('button_login')).toBeTruthy();
    expect(getByTestId('icon_left_login')).toBeTruthy();
    expect(getByTestId('icon_right_login')).toBeTruthy();
  });
  
  it('should use fallback testID when no identifier is provided', () => {
    const { getByTestId } = render(
      <Button onPress={() => {}}>
        Submit
      </Button>
    );
    
    expect(getByTestId('button_button')).toBeTruthy();
  });
});
```

Esta implementação de referência demonstra:

1. Como usar a função `generateTestID` de maneira consistente
2. A hierarquia de prioridade para as props de identificação
3. Como implementar testIDs para componentes aninhados
4. Como lidar com diferentes tipos de conteúdo (string vs. componentes)
5. Como testar adequadamente a implementação de testID 