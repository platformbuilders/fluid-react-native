# Diretrizes de Acessibilidade - Fluid React Native

Este documento fornece diretrizes e melhores práticas para garantir que todos os componentes da biblioteca Fluid React Native sejam acessíveis para usuários com diferentes necessidades.

## Princípios Fundamentais

### 1. Perceptível
- Forneça alternativas textuais para conteúdo não textual
- Crie conteúdo que possa ser apresentado de diferentes maneiras
- Torne mais fácil para os usuários ver e ouvir o conteúdo

### 2. Operável
- Torne todas as funcionalidades disponíveis a partir do teclado/gestos assistivos
- Dê aos usuários tempo suficiente para ler e usar o conteúdo
- Não projete conteúdo que possa causar convulsões ou reações físicas
- Ajude os usuários a navegar e encontrar conteúdo

### 3. Compreensível
- Torne o texto legível e compreensível
- Faça com que as páginas funcionem de maneira previsível
- Ajude os usuários a evitar e corrigir erros

### 4. Robusto
- Maximize a compatibilidade com ferramentas de assistência atuais e futuras

## Implementação nos Componentes

### Propriedades de Acessibilidade

Todos os componentes interativos devem implementar as seguintes propriedades:

1. **accessibilityLabel**
   - Descrição clara e concisa do componente
   - Deve ser significativa no contexto em que o componente é usado
   - Evite redundância com o tipo do componente (ex: "Botão de enviar" em vez de apenas "Enviar")

2. **accessibilityRole**
   - Especifica o tipo de elemento UI para leitores de tela
   - Exemplos: button, header, link, checkbox, radio, etc.

3. **accessibilityState**
   - Comunica o estado atual do componente para leitores de tela
   - Estados comuns: disabled, selected, checked, busy, expanded

4. **accessibilityHint**
   - Fornece uma dica sobre o resultado da interação com o elemento
   - Deve ser complementar ao accessibilityLabel, não redundante

5. **accessibilityValue** (quando aplicável)
   - Para componentes com valor alterável (ex: sliders, progress bars)
   - Comunica o valor atual, mínimo, máximo e texto

### Áreas de Toque

- Componentes interativos devem ter área de toque mínima de 44x44 dp
- Use `hitSlop` para aumentar a área de toque sem alterar o tamanho visual
- Mantenha espaçamento adequado entre elementos interativos

### Contraste e Cores

- Mantenha razão de contraste mínima de 4.5:1 para texto normal
- Mantenha razão de contraste mínima de 3:1 para texto grande (18pt ou 14pt bold)
- Nunca transmita informações apenas por cor
- Suporte temas claro e escuro

### Feedback e Orientação

- Forneça feedback visual claro para estados (focus, hover, active)
- Adicione feedback tátil (haptic) para ações importantes quando apropriado
- Certifique-se de que mensagens de erro sejam claras e forneçam orientação para correção

## Utilização do Utilitário de Acessibilidade

Utilize o utilitário de acessibilidade da biblioteca para implementar consistentemente as propriedades:

```tsx
import { generateAccessibilityProps, generateTestID } from '../../utils/accessibility';

const Button = ({ 
  id, 
  accessibility, 
  accessibilityLabel, 
  disabled,
  busy,
  ...props 
}) => {
  const accessibilityProps = generateAccessibilityProps(
    { id, accessibility, accessibilityLabel, disabled, busy },
    'button',
    'Botão',
    'Ativa ao pressionar'
  );
  
  const testID = generateTestID({ id, accessibility, testID: props.testID }, 'button');
  
  return (
    <TouchableComponent
      {...accessibilityProps}
      testID={testID}
      {...props}
    />
  );
};
```

## Teste de Acessibilidade

Todos os componentes devem ser testados para acessibilidade:

1. **Teste com VoiceOver (iOS)**
   - Verifique se todos os elementos interativos são anunciados corretamente
   - Verifique se estados (selecionado, desabilitado) são anunciados
   - Verifique se a ordem de navegação é lógica

2. **Teste com TalkBack (Android)**
   - Mesmas verificações que VoiceOver
   - Verifique comportamentos específicos da plataforma

3. **Teste de Contraste**
   - Use ferramentas como Contrast Checker para verificar razões de contraste
   - Teste em temas claro e escuro

4. **Teste de Navegação por Teclado/Gestos**
   - Verifique se todos os elementos podem ser acessados e operados
   - Verifique se a ordem de foco é lógica

## Recursos Adicionais

- [React Native Accessibility API](https://reactnative.dev/docs/accessibility)
- [WCAG 2.1 Guidelines](https://www.w3.org/TR/WCAG21/)
- [Mobile Accessibility Guidelines](https://www.w3.org/TR/mobile-accessibility-mapping/)
- [Android Accessibility Guidelines](https://developer.android.com/guide/topics/ui/accessibility)
- [iOS Accessibility Guidelines](https://developer.apple.com/design/human-interface-guidelines/accessibility)

## Checklist de Acessibilidade

Use esta checklist ao desenvolver ou atualizar componentes:

- [ ] Componente tem `accessibilityLabel` adequado
- [ ] Componente tem `accessibilityRole` correto
- [ ] Estados do componente são comunicados via `accessibilityState`
- [ ] Componente tem `accessibilityHint` quando necessário
- [ ] Área de toque mínima de 44x44 dp é respeitada
- [ ] Contraste de cores é adequado
- [ ] Componente funciona corretamente com leitores de tela
- [ ] Componente pode ser operado por gestos assistivos/teclado
- [ ] Feedback visual e tátil é fornecido quando apropriado 