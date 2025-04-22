---
id: password-input
title: PasswordInput
sidebar_label: PasswordInput
---

import useBaseUrl from '@docusaurus/useBaseUrl';

O componente `PasswordInput` é uma variação especializada do `TextInput`, pré-configurada para a entrada segura de senhas, incluindo um botão para alternar a visibilidade do texto.

## Importação

```tsx
import { PasswordInput } from '@platformbuilders/fluid-react-native';
```

## Exemplo Básico

```tsx
import React, { useState } from 'react';
import { View } from 'react-native';
import { PasswordInput } from '@platformbuilders/fluid-react-native';

const BasicPasswordInputExample = () => {
  const [password, setPassword] = useState('');

  return (
    <View style={{ width: '90%' }}>
      <PasswordInput
        id="senha-basica"
        accessibility="Campo de senha"
        label="Senha"
        placeholder="Digite sua senha"
        value={password}
        onChangeText={setPassword}
      />
    </View>
  );
};
```

## Exemplos

### Com Label Flutuante

Assim como o `TextInput`, o `PasswordInput` suporta a variante com label flutuante.

```tsx
<PasswordInput
  id="senha-flutuante"
  accessibility="Campo de senha com label flutuante"
  label="Senha"
  value={passwordFloating}
  onChangeText={setPasswordFloating}
  isFloating // Ativa o modo flutuante
/>
```

### Com Mensagem de Erro

Exiba erros de validação como em um `TextInput` normal.

```tsx
<PasswordInput
  id="senha-erro"
  accessibility="Campo de senha com erro"
  label="Confirmar Senha"
  value={confirmPassword}
  onChangeText={setConfirmPassword}
  error={password !== confirmPassword ? 'As senhas não coincidem' : ''}
/>
```

### Com Estilo Borda (Bordered)

Também é possível usar o estilo com bordas.

```tsx
<PasswordInput
  id="senha-borda"
  accessibility="Campo de senha com borda"
  label="Senha"
  value={passwordBordered}
  onChangeText={setPasswordBordered}
  borderedHeight={56}
  borderedRadius={8}
/>
```

## Funcionalidade Principal

-   **Entrada Segura**: O texto digitado é automaticamente mascarado (`secureTextEntry={true}`).
-   **Alternar Visibilidade**: Um ícone de olho (👁️) é exibido à direita. Tocar neste ícone alterna entre mostrar e ocultar os caracteres digitados.
-   **Tipo de Conteúdo**: `textContentType` é definido como `'password'` para integração com gerenciadores de senha do sistema.

## API

O `PasswordInput` aceita **todas as props** do componente `TextInput` e `TextInputFloating`. As props `secureTextEntry`, `rightIconName`, `iconTouchableEnabled`, `onPressIcon`, `onRightIconPress`, `iconHitSlop` e `textContentType` são gerenciadas internamente para fornecer a funcionalidade de senha.

Consulte a documentação do [**TextInput**](../text-input) para a lista completa de props disponíveis.

**Props Específicas (ou Gerenciadas Internamente):**

-   **`secureTextEntry`**: Sempre `true` inicialmente, mas seu estado interno muda ao tocar no ícone.
-   **`rightIconName`**: Alterna entre `'eye'` e `'eye-slash'`.
-   **`iconTouchableEnabled`**: Sempre `true`.
-   **`onPressIcon` / `onRightIconPress`**: Usadas para alternar a visibilidade da senha.
-   **`textContentType`**: Definido como `'password'`.

## Acessibilidade

-   Herda as boas práticas e funcionalidades de acessibilidade do `TextInput`.
-   O ícone de olho possui um `accessibilityLabel` que descreve sua ação (Exibir/Ocultar), embora idealmente o estado da entrada (se está mascarada ou não) devesse ser comunicado de forma mais direta por leitores de tela (uma limitação potencial a ser considerada).

### Boas Práticas

1.  **Label Claro**: Use a prop `label` (ou `borderedLabel`) para indicar claramente que o campo é para uma senha.
2.  **Mensagens de Erro**: Forneça feedback claro sobre requisitos de senha (comprimento, caracteres especiais) ou erros de confirmação usando a prop `error`.
3.  **Não Desabilite o Ícone**: Evite desabilitar o toque no ícone de olho, pois é uma funcionalidade esperada pelos usuários. 