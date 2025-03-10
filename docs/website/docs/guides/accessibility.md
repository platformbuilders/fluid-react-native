---
sidebar_position: 4
---

# Acessibilidade

O Fluid React Native foi projetado com acessibilidade em mente, garantindo que suas aplicações sejam utilizáveis por pessoas com diferentes habilidades e necessidades.

## Importância da Acessibilidade

Criar aplicações acessíveis é importante por várias razões:

1. **Inclusão**: Permite que pessoas com deficiências utilizem sua aplicação
2. **Alcance**: Amplia o público que pode usar seu produto
3. **Conformidade**: Atende a requisitos legais e regulatórios
4. **Experiência do Usuário**: Melhora a experiência para todos os usuários

## Recursos de Acessibilidade no Fluid React Native

O Fluid React Native implementa várias práticas de acessibilidade em seus componentes:

### Propriedades de Acessibilidade

Todos os componentes interativos suportam as seguintes propriedades de acessibilidade:

- `accessibilityLabel`: Descrição lida por leitores de tela
- `accessibilityHint`: Dica sobre o resultado da interação
- `accessibilityRole`: Papel do elemento na interface
- `accessibilityState`: Estado atual do elemento (ex: disabled, selected)

### Exemplo de Uso

```tsx
<Button
  title="Finalizar Compra"
  accessibilityLabel="Finalizar compra"
  accessibilityHint="Conclui sua compra e vai para a página de pagamento"
  onPress={handleCheckout}
  colorVariant="primary"
/>
```

## Contraste e Cores

O sistema de cores do Fluid React Native foi projetado para garantir um bom contraste entre texto e fundo, seguindo as diretrizes WCAG (Web Content Accessibility Guidelines).

Cada conjunto de cores inclui uma cor de contraste apropriada:

```typescript
primary: {
  main: '#0066FF',
  light: '#4D94FF',
  dark: '#0047B3',
  contrast: '#FFFFFF',  // Cor de contraste para texto
},
```

## Estados Visuais e Feedback

Os componentes do Fluid React Native fornecem feedback visual claro para diferentes estados:

- **Hover**: Mudança visual quando o mouse está sobre o elemento
- **Focus**: Indicação visual quando o elemento está em foco
- **Pressed**: Feedback visual quando o elemento é pressionado
- **Disabled**: Aparência distinta para elementos desabilitados
- **Loading**: Indicadores de carregamento claros

## Tamanho dos Alvos de Toque

Os componentes interativos do Fluid React Native seguem as diretrizes de tamanho mínimo para alvos de toque, garantindo que sejam fáceis de acionar:

- Botões e outros controles têm um tamanho mínimo de 44x44 pontos
- Espaçamento adequado entre elementos interativos para evitar toques acidentais

## Suporte a Leitores de Tela

O Fluid React Native foi testado com os principais leitores de tela:

- **iOS**: VoiceOver
- **Android**: TalkBack

Todos os componentes são anunciados corretamente pelos leitores de tela, com descrições apropriadas.

## Navegação por Teclado

Para usuários que utilizam teclados externos com dispositivos móveis, o Fluid React Native suporta navegação por teclado:

- Ordem de foco lógica
- Indicadores visuais de foco
- Suporte a atalhos de teclado comuns

## Personalização para Acessibilidade

Você pode personalizar o tema do Fluid React Native para melhorar ainda mais a acessibilidade:

```tsx
const accessibleTheme = {
  ...fluidTheme,
  // Aumentar tamanho de fonte padrão
  typography: {
    ...fluidTheme.typography,
    fontSize: {
      ...fluidTheme.typography.fontSize,
      md: '18px', // Tamanho maior para melhor legibilidade
    },
  },
  // Aumentar contraste
  brand: {
    ...fluidTheme.brand,
    primary: {
      main: '#0052CC', // Azul mais escuro para melhor contraste
      light: '#4D94FF',
      dark: '#003580',
      contrast: '#FFFFFF',
    },
  },
  // Aumentar tamanho dos controles
  button: {
    ...fluidTheme.button,
    height: '56px', // Botões maiores para alvos de toque maiores
  },
};
```

## Melhores Práticas

Ao usar o Fluid React Native, siga estas melhores práticas de acessibilidade:

1. **Sempre forneça labels de acessibilidade**: Use `accessibilityLabel` para todos os elementos interativos
2. **Descreva o resultado das ações**: Use `accessibilityHint` para explicar o que acontecerá após a interação
3. **Indique estados**: Use `accessibilityState` para comunicar estados como disabled, selected, checked, etc.
4. **Teste com leitores de tela**: Verifique regularmente sua aplicação com VoiceOver e TalkBack
5. **Considere diferentes necessidades**: Lembre-se de usuários com deficiências visuais, motoras, auditivas e cognitivas

## Testando Acessibilidade

Para testar a acessibilidade da sua aplicação:

### iOS (VoiceOver)

1. Vá para Configurações > Acessibilidade > VoiceOver
2. Ative o VoiceOver
3. Navegue pela sua aplicação usando gestos do VoiceOver:
   - Deslize para a direita/esquerda: Mover para o próximo/anterior elemento
   - Toque duplo: Ativar o elemento selecionado
   - Toque triplo: Ativar o elemento com duplo toque

### Android (TalkBack)

1. Vá para Configurações > Acessibilidade > TalkBack
2. Ative o TalkBack
3. Navegue pela sua aplicação usando gestos do TalkBack:
   - Deslize para a direita/esquerda: Mover para o próximo/anterior elemento
   - Toque duplo: Ativar o elemento selecionado
   - Deslize para cima e para baixo: Rolar a tela

## Recursos Adicionais

Para aprender mais sobre acessibilidade em React Native:

- [Documentação de Acessibilidade do React Native](https://reactnative.dev/docs/accessibility)
- [Diretrizes WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/)
- [Testes de Acessibilidade em React Native](https://reactnative.dev/docs/accessibility-testing)
