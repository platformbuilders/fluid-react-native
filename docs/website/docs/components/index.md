---
sidebar_position: 1
---

# Componentes

O Fluid React Native oferece uma ampla gama de componentes UI prontos para uso, organizados por categorias para facilitar a navegação.

## Formulários

Componentes para entrada e manipulação de dados:

- [Button](./button) - Botões customizáveis com diferentes variantes
- [Checkbox](./checkbox) - Caixas de seleção customizáveis
- [TextInput](./text-input) - Inputs de texto com máscaras e validação
- [PasswordInput](./password-input) - Input específico para senhas com opção de visibilidade
- [RadioButton](./radio-button) - Botões de opção
- [Toggle](./toggle) - Botões de alternância
- [PinInput](./pin-input) - Input para códigos de verificação
- [DatePicker](./date-picker) - Seletor de datas
- [SearchInput](./search-input) - Campo de busca

## Navegação e Layout

Componentes para estruturar a navegação e o layout da aplicação:

- [Header](./header) - Cabeçalhos personalizáveis
- [BottomNavigation](./bottom-navigation) - Navegação inferior
- [Accordion](./accordion) - Painéis expansíveis/colapsáveis
- [Separator](./separator) - Linhas separadoras

## Feedback e Status

Componentes para fornecer feedback ao usuário:

- [LoadingIndicator](./loading-indicator) - Indicadores de carregamento animados
- [Badge](./badge) - Marcadores para notificações
- [FormError](./form-error) - Exibição de erros de formulário

## Conteúdo e Mídia

Componentes para exibição de conteúdo e mídia:

- [Typography](./typography) - Sistema avançado de tipografia
- [Icon](./icon) - Sistema de ícones usando FontAwesome
- [Avatar](./avatar) - Exibição de imagens de perfil
- [Image](./image) - Componente avançado para imagens
- [UploadPhoto](./upload-photo) - Interface para upload de fotos
- [Markdown](./markdown) - Renderização de conteúdo markdown

## Interação

Componentes para interação do usuário:

- [Touchable](./touchable) - Área tocável com feedback
- [Link](./link) - Links estilizáveis

## Importação

Você pode importar componentes individualmente:

```tsx
import { Button, Typography } from '@platformbuilders/fluid-react-native';
```

Ou importar um componente específico:

```tsx
import Button from '@platformbuilders/fluid-react-native/dist/components/Button';
```

## Acessibilidade

Todos os componentes do Fluid React Native são projetados com foco em acessibilidade, seguindo as melhores práticas para garantir que sua aplicação seja utilizável por todos os usuários.

Cada componente implementa propriedades de acessibilidade apropriadas, como:

- `accessibilityLabel` - Descrição lida por leitores de tela
- `accessibilityHint` - Dica sobre o resultado da interação
- `accessibilityRole` - Papel do elemento na interface
- `accessibilityState` - Estado atual do elemento (ex: disabled, selected)

## Personalização

Todos os componentes podem ser personalizados através do sistema de temas ou props específicas. Consulte a documentação de cada componente para ver as opções de personalização disponíveis.
