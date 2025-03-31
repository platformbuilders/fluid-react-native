---
id: link
title: Link
sidebar_label: Link
---

import useBaseUrl from '@docusaurus/useBaseUrl';

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

## API

### Props

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

## Exemplo Completo

```jsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Link, Typography } from '@platformbuilders/fluid-react-native';
import { useNavigation } from '@react-navigation/native';

const LinksExample = () => {
  const navigation = useNavigation();
  
  const handleNavigateToHelp = () => {
    navigation.navigate('Help');
  };
  
  const handleNavigateToTerms = () => {
    navigation.navigate('Terms');
  };
  
  return (
    <View style={styles.container}>
      <Typography variant="h6">Links de Navegação</Typography>
      
      <View style={styles.linkContainer}>
        <Link 
          id="help-link"
          accessibility="Navegar para ajuda"
          variant="md"
          onPress={handleNavigateToHelp}
        >
          Precisa de ajuda?
        </Link>
      </View>
      
      <View style={styles.linkContainer}>
        <Link 
          id="terms-link"
          accessibility="Navegar para termos"
          variant="sm"
          style={{ color: '#007AFF' }}
          onPress={handleNavigateToTerms}
        >
          Termos e condições
        </Link>
      </View>
      
      <View style={styles.linkContainer}>
        <Link 
          id="disabled-link"
          accessibility="Link desabilitado"
          disabled
          onPress={() => console.log('Esta função não será chamada')}
        >
          Link desabilitado
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  linkContainer: {
    marginVertical: 8,
  },
});

export default LinksExample;
``` 