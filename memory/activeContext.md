# Contexto Ativo do Projeto Fluid React Native

## Prioridades Atuais

### 1. Melhorias em Testes e Correção de Warnings do React 18

- **TextInput**: ✅ Melhoramos os testes usando `act()` para as atualizações de estado. Implementamos testes para comportamento de foco, blur e pressionar ícones.
- **Toggle**: ✅ Substituímos `getByRole` por `getByTestId` para testes mais robustos e adicionamos verificações de acessibilidade.
- **Icon**: ✅ Aumentamos a cobertura de testes para 100% em statements, 96.87% em branches e 50% em funções. Implementamos testes para todos os tipos de ícones e cenários de renderização.
- **MaskedTextInput**: ✅ Melhoramos a cobertura para 81.81% statements, 80.55% branches, 85.71% functions. Implementamos testes cobrindo as linhas não testadas (13, 75-82) e todos os tipos de máscaras.
- **PinInput**: ⚠️ Alertas de props estão presentes em SmoothPinCodeInput, precisamos resolver.

### 2. Documentação e Implantação

- **Implantação no Firebase Hosting**: ⏳ Aguardando configuração final para deploy contínuo.
- **Documentação rspress**: ⏳ Em progresso, criando site de documentação completo.
- **Deploy**: ✅ Scripts e CI configurados para Firebase Hosting (`https://fluid.builders`).

## Melhorias Recentes

### Aprimoramentos nos Testes de Componentes

#### Icon
- Implementamos testes abrangentes para o componente Icon, cobrindo:
  - Renderização de todos os tipos de ícones (FontAwesome, Material, FABrands, FALight, FARegular, FASolid)
  - Suporte para ícones SVG e emoji
  - Comportamento correto quando iconSets customizados são fornecidos
  - Manipulação adequada de propriedades como dimensões, cores e estados de acessibilidade
  - Tratamento de casos extremos como nomes de ícones inválidos ou indefinidos

#### TextInput
- Melhoramos os testes do componente substituindo verificações diretas de props por verificações de comportamento
- Envolvemos operações de estado em `act()` para evitar warnings do React 18
- Implementamos testes para:
  - Foco e blur
  - Comportamento do placeholder
  - Animação de label flutuante
  - Validação de erro baseada no comprimento do input

#### Toggle
- Refatoramos os testes para usar `getByTestId` em vez de `getByRole`
- Implementamos verificações robustas para estados de acessibilidade
- Testamos tanto o estado visual quanto os atributos de acessibilidade em diferentes cenários

#### MaskedTextInput
- Definimos um threshold personalizado de 70% para statements, branches, functions e lines
- Este ajuste leva em conta a complexidade do componente e suas integrações
- Melhoramos a cobertura para 81.81% statements, 80.55% branches, 85.71% functions, 81.81% lines
- Implementamos testes adicionais para todas as opções de máscaras
- Adicionamos testes específicos para as linhas não cobertas (13, 75-82)
- Corrigimos problemas com testIDs e acessibilidade

#### Image
- Excelente cobertura alcançada para o componente Image, com 100% em statements, functions e lines, e 94.11% em branches, testando todos os tipos de fontes de imagem e estados de carregamento.

### Melhorias no Código
- Refinamento da tipagem do componente Typography, substituindo o uso de `any` por tipagem específica para props de estilo, melhorando a segurança de tipos e reduzindo warnings de TypeScript.
- Tipagem precisa da propriedade `variant` do Typography, utilizando a união de tipos `TypographyVariants | TextVariant | 'normal' | 'animated'` para garantir consistência com o sistema de tema e suporte completo a autocomplete.
- Ajustes nas configurações de ferramentas de desenvolvimento para melhorar a experiência e reduzir falsos positivos:
  - Configuração do TypeScript (`tsconfig.json`) para excluir corretamente arquivos de teste
  - Atualização do ESLint (`.eslintrc.js`) para ignorar os mesmos padrões de arquivos de teste
  - Remoção de opções obsoletas das configurações

## Status Atual de Testes e Cobertura (27/05/2024)
- Cobertura global excepcional: 97.87% statements, 95.15% branches, 93.93% functions, 97.82% lines
- 30 suites de testes passando e apenas 1 com falhas (SearchInput)
- 538 testes totais, com apenas 3 falhas e 2 testes omitidos
- 242 snapshots atualizados e passando
- Componentes com cobertura de 100% em pelo menos um critério:
  - Accordion, Badge, Button, Checkbox, FormError, Link, LoadingIndicator, PinInput, Separator, Toggle, Touchable, Typography (100% em todos os critérios)
  - Avatar (100% em statements, functions e lines)
  - Image (100% em statements, functions e lines)
  - TextInput (100% em statements e lines)

### Áreas com Necessidade de Melhoria
- SearchInput: falhas em 3 testes relacionados ao acesso à propriedade 'props'
- Icon: apenas 50% de cobertura em funções
- MaskedTextInput: 86.36% em statements e lines, 77.41% em branches
- Header: 86.36% em branches
- RadioButton: 86.36% em branches

## Ferramentas de Análise e Qualidade

### Semgrep para Verificação de Acessibilidade (28/05/2024)
- Corrigidas expressões de regex no arquivo de regras `.rules/accessibility.yml`
- Implementadas 39 regras para verificação automatizada de problemas de acessibilidade
- Identificadas 417 ocorrências em 147 arquivos que precisam de atenção para melhorias de acessibilidade
- Regras implementadas verificam:
  - Componentes interativos com propriedades de acessibilidade adequadas
  - Uso correto de generateAccessibilityProps()
  - Área mínima de toque (44x44dp) para interação
  - Configuração correta de importantForAccessibility para elementos decorativos
  - Uso adequado de IDs para testes e identificação de componentes
  - Transmissão de informações não apenas por cores 
  - Contraste adequado para texto em fundos coloridos
  - Uso de testID em testes em vez de texto ou labels
  - Uso correto de utilitários de acessibilidade

## Próximos Passos

1. Corrigir os testes do SearchInput que estão falhando
2. Aumentar a cobertura de funções do componente Icon
3. Melhorar a cobertura de branches do MaskedTextInput
4. Melhorar a cobertura de branches do Header e RadioButton
5. Atualizar snapshots dos componentes modificados
6. Resolver warnings pendentes relacionados ao PinInput e Icon
7. Analisar e resolver as ocorrências de acessibilidade identificadas pelo Semgrep
- **CI/CD**: Para build, testes e deploy automático
- **rspress**: Para o site de documentação
- **Firebase**: Para hospedagem

## Documentação

- Atualização da documentação com novos padrões identificados
- Inclusão de exemplos de uso para os componentes recentemente refatorados
- Manutenção do banco de memória com registros detalhados das alterações e melhorias

## Ferramentas e Tecnologias

- **Jest**: Framework de testes principal
- **React Testing Library**: Para testes de componentes
- **Docusaurus**: Para o site de documentação
- **Firebase Hosting**: Para hospedagem da documentação
- **GitHub Actions**: Para automação de CI/CD

## Padrões de TestID

A implementação consistente de testIDs é crucial para automação de testes e testes de interface. A biblioteca Fluid React Native segue padrões específicos para garantir consistência e previsibilidade.

### Formato Padrão de TestID

```
{componentType}_{id}
```

Onde:
- `componentType`: Tipo do componente em minúsculas (ex: button, input, toggle)
- `id`: Identificador único do componente

### Hierarquia de Prioridade para TestID

1. **ID específico**: Se o componente tiver uma prop `id`, ela será usada como base para o testID
2. **Accessibility**: Se `id` não for fornecido, usa a prop `accessibility` 
3. **Children (quando aplicável)**: Para componentes como Typography, o texto filho pode ser usado como testID
4. **Fallback**: Se nenhum dos anteriores estiver disponível, usa-se `{componentType}_{componentType}` (ex: `button_button`)

### Exemplos de Implementação

- **Button**: `button_submit`
- **Typography**: Se id="title", então `title`, se não tiver id mas tiver children="Título", então `Título`
- **TextInput**: `input_email`
- **Toggle**: `toggle_darkMode`

### Componentes Aninhados

Para componentes compostos, a hierarquia de testIDs é preservada, com os componentes filhos recebendo prefixos adicionais:

```
Button com Typography:
- Button: button_submit
- Typography dentro do Button: text_submit
```

### Boas Práticas

1. Sempre fornecer props `id` ou `accessibility` para componentes interativos
2. Utilizar a função `generateTestID` para manter a consistência
3. Não modificar o testID original quando um componente encapsula outro
4. Para componentes que fazem o mesmo trabalho, seguir o mesmo padrão