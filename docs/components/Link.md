# Link

O componente Link oferece uma maneira consistente de criar elementos de navegação ou ações clicáveis em texto com estilo de link, incluindo sublinhado e cores adequadas.

## Importação

```jsx
import { Link } from '@platformbuilders/fluid-react-native';
```

## Uso Básico

```jsx
import React from 'react';
import { View } from 'react-native';
import { Link } from '@platformbuilders/fluid-react-native';

const BasicLinkExample = () => (
  <View>
    <Link 
      accessibility="Ir para página de ajuda"
      onPress={() => console.log('Link pressionado')}
    >
      Precisa de ajuda?
    </Link>
  </View>
);
```

## Variações

### Tamanhos do Texto

O componente Link suporta diferentes variações de tamanho de texto através da propriedade `variant`:

```jsx
// Tamanho padrão (md)
<Link 
  accessibility="Tamanho padrão"
  onPress={() => {}}
>
  Link com tamanho padrão
</Link>

// Tamanho pequeno
<Link 
  accessibility="Tamanho pequeno"
  variant="sm"
  onPress={() => {}}
>
  Link com tamanho pequeno
</Link>

// Tamanho grande
<Link 
  accessibility="Tamanho grande"
  variant="lg"
  onPress={() => {}}
>
  Link com tamanho grande
</Link>

// Tamanho título
<Link 
  accessibility="Tamanho de título"
  variant="h6"
  onPress={() => {}}
>
  Link com tamanho de título
</Link>
```

### Personalização de Estilo

Você pode personalizar o estilo do Link:

```jsx
<Link 
  accessibility="Link estilizado"
  style={{ 
    fontWeight: 'bold',
    marginVertical: 8,
    color: '#007AFF'
  }}
  onPress={() => {}}
>
  Link com estilo personalizado
</Link>
```

### Desabilitado

O componente Link pode ser desabilitado quando necessário:

```jsx
<Link 
  accessibility="Link desabilitado"
  disabled
  onPress={() => console.log('Esta função não será chamada')}
>
  Link desabilitado
</Link>
```

## Manipulação de Eventos

O Link permite definir uma função para tratar o evento de clique:

```jsx
import React from 'react';
import { View } from 'react-native';
import { Link } from '@platformbuilders/fluid-react-native';
import { useNavigation } from '@react-navigation/native';

const LinkEventExample = () => {
  const navigation = useNavigation();
  
  const handlePress = () => {
    // Navegar para outra tela
    navigation.navigate('HelpScreen');
  };
  
  return (
    <View>
      <Link 
        accessibility="Navegar para ajuda"
        onPress={handlePress}
      >
        Precisa de ajuda?
      </Link>
    </View>
  );
};
```

### Com Feedback Tátil

O componente Link suporta feedback tátil (haptic feedback) quando pressionado:

```jsx
<Link 
  accessibility="Link com feedback tátil"
  haptic="impactLight"
  onPress={() => {}}
>
  Link com feedback tátil
</Link>
```

## Acessibilidade

O componente Link implementa automaticamente recursos de acessibilidade, como:

- Identificação como elemento interativo para leitores de tela
- Labels de acessibilidade configuráveis
- Feedback tátil opcional

### Exemplo com Acessibilidade

```jsx
<Link
  id="help-link"
  accessibility="Abrir página de ajuda"
  accessibilityLabel="Toque para abrir a página de ajuda e suporte"
  onPress={() => navigation.navigate('Help')}
>
  Precisa de ajuda?
</Link>
```

### Boas Práticas de Acessibilidade

1. **Labels descritivos**:
   - Use verbos de ação para descrever o que acontece quando o link é ativado
   - Exemplo: "Abrir página de ajuda" em vez de apenas "Ajuda"

2. **Tamanho adequado**:
   - Certifique-se de que o texto do link tenha um tamanho adequado para leitura
   - Use variantes de texto maiores quando necessário para melhorar a legibilidade

3. **Contraste**:
   - Garanta que o texto do link tenha contraste adequado com o fundo
   - Não confie apenas na cor para indicar que o texto é clicável (o sublinhado ajuda nesse aspecto)

4. **Área de toque**:
   - O componente Link é implementado usando o componente Touchable, que fornece uma área de toque adequada
   - Adicione padding ao Link quando necessário para aumentar a área de toque

## TestIDs

O componente Link gera TestIDs automaticamente seguindo a hierarquia:

1. Usa `testID` se fornecido explicitamente
2. Usa `id` se fornecido e `testID` não estiver presente
3. Usa `accessibility` como fallback final

O texto dentro do Link recebe um testID no formato `text_{id}`.

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `accessibility` | string | - | Descrição de acessibilidade do link (obrigatório) |
| `id` | string | - | ID único do componente (opcional) |
| `testID` | string | `id` ou `accessibility` | ID para testes automatizados |
| `onPress` | function | - | Função chamada quando o link é pressionado |
| `children` | ReactNode | - | Conteúdo de texto do link |
| `accessibilityLabel` | string | `accessibility` | Label de acessibilidade (se diferente de `accessibility`) |
| `variant` | TypographyVariants | 'md' | Variante de tamanho do texto |
| `style` | object/array | - | Estilos personalizados para o texto do link |
| `disabled` | boolean | false | Define se o link está desabilitado |
| `haptic` | HapticFeedbackTypes | - | Tipo de feedback tátil ao pressionar (se suportado) |

## Tipos

### TypographyVariants

O componente Link usa as mesmas variantes de texto que o componente Typography:

```typescript
type TypographyVariants =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle'
  | 'subtitle2'
  | 'body'
  | 'body2'
  | 'caption'
  | 'button'
  | 'overline'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl'
  | 'p';
```

### HapticFeedbackTypes

```typescript
type HapticFeedbackTypes =
  | 'impactLight'
  | 'impactMedium'
  | 'impactHeavy'
  | 'notificationSuccess'
  | 'notificationWarning'
  | 'notificationError'
  | 'selection';
```

## Exemplo Completo

```jsx
import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Link, Typography } from '@platformbuilders/fluid-react-native';

const LinkExample = () => {
  const [clicked, setClicked] = useState({});
  
  const handlePress = (id) => {
    setClicked(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
  
  return (
    <ScrollView style={styles.container}>
      <Typography variant="h3" style={styles.title}>
        Exemplos do Componente Link
      </Typography>
      
      <View style={styles.section}>
        <Typography variant="subtitle" style={styles.sectionTitle}>
          Variações de Tamanho
        </Typography>
        
        <Link
          id="link-small"
          accessibility="Link pequeno"
          variant="sm"
          onPress={() => handlePress('small')}
          style={styles.linkItem}
        >
          Link Pequeno {clicked.small ? '(Clicado)' : ''}
        </Link>
        
        <Link
          id="link-medium"
          accessibility="Link médio"
          variant="md"
          onPress={() => handlePress('medium')}
          style={styles.linkItem}
        >
          Link Médio (Padrão) {clicked.medium ? '(Clicado)' : ''}
        </Link>
        
        <Link
          id="link-large"
          accessibility="Link grande"
          variant="lg"
          onPress={() => handlePress('large')}
          style={styles.linkItem}
        >
          Link Grande {clicked.large ? '(Clicado)' : ''}
        </Link>
        
        <Link
          id="link-heading"
          accessibility="Link título"
          variant="h6"
          onPress={() => handlePress('heading')}
          style={styles.linkItem}
        >
          Link Título {clicked.heading ? '(Clicado)' : ''}
        </Link>
      </View>
      
      <View style={styles.section}>
        <Typography variant="subtitle" style={styles.sectionTitle}>
          Estilos Personalizados
        </Typography>
        
        <Link
          id="link-bold"
          accessibility="Link em negrito"
          onPress={() => handlePress('bold')}
          style={[styles.linkItem, styles.boldLink]}
        >
          Link em Negrito {clicked.bold ? '(Clicado)' : ''}
        </Link>
        
        <Link
          id="link-custom-color"
          accessibility="Link com cor personalizada"
          onPress={() => handlePress('color')}
          style={[styles.linkItem, styles.coloredLink]}
        >
          Link Colorido {clicked.color ? '(Clicado)' : ''}
        </Link>
        
        <Link
          id="link-spaced"
          accessibility="Link com espaçamento"
          onPress={() => handlePress('spaced')}
          style={[styles.linkItem, styles.spacedLink]}
        >
          Link com Espaçamento {clicked.spaced ? '(Clicado)' : ''}
        </Link>
      </View>
      
      <View style={styles.section}>
        <Typography variant="subtitle" style={styles.sectionTitle}>
          Estados Interativos
        </Typography>
        
        <Link
          id="link-disabled"
          accessibility="Link desabilitado"
          disabled
          onPress={() => handlePress('disabled')}
          style={styles.linkItem}
        >
          Link Desabilitado
        </Link>
        
        <Link
          id="link-haptic"
          accessibility="Link com feedback tátil"
          haptic="impactLight"
          onPress={() => handlePress('haptic')}
          style={styles.linkItem}
        >
          Link com Feedback Tátil {clicked.haptic ? '(Clicado)' : ''}
        </Link>
      </View>
      
      <View style={styles.section}>
        <Typography variant="subtitle" style={styles.sectionTitle}>
          Uso em Contexto
        </Typography>
        
        <Typography variant="body" style={styles.paragraph}>
          Este é um exemplo de texto com um {' '}
          <Link
            id="link-inline"
            accessibility="Link em texto"
            onPress={() => handlePress('inline')}
          >
            link embutido
          </Link>
          {' '} no meio de um parágrafo maior. Os links podem ser usados dentro de blocos de texto para criar referências a outras partes do aplicativo ou para ações específicas.
        </Typography>
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
  linkItem: {
    marginBottom: 12,
  },
  boldLink: {
    fontWeight: 'bold',
  },
  coloredLink: {
    color: '#9C27B0',
  },
  spacedLink: {
    letterSpacing: 1.5,
  },
  paragraph: {
    lineHeight: 24,
  },
});

export default LinkExample; 