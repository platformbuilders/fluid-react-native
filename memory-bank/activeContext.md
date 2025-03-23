# Contexto Ativo

## Foco Atual

### Deploy da Documentação no Firebase Hosting

Recentemente, implementamos o processo de deploy da documentação do Fluid React Native no Firebase Hosting. Alteramos a abordagem de multi-site para um deploy único e simplificado, consolidando toda a documentação em um único site.

### Website de Documentação para Fluid React Native

Estamos construindo um website de documentação completo para a biblioteca Fluid React Native utilizando o Docusaurus. O objetivo é criar uma documentação clara, acessível e útil tanto para novos usuários quanto para desenvolvedores experientes.

## Progresso Recente

- Configuramos o Firebase Hosting para deploy simplificado da documentação
- Criamos scripts de deploy e teste para facilitar o processo
- Configuramos o GitHub Actions para deploy automatizado
- Resolvemos problemas de links quebrados na documentação
- Atualizamos a configuração do Docusaurus para melhorar os warnings
- Configuramos a estrutura básica do Docusaurus
- Personalizamos o visual com CSS customizado
- Criamos uma homepage atraente com:
  - Seção de hero com logo e chamada para ação
  - Exemplo de código
  - Showcase de componentes
  - Seção de destaques
- Configuramos a sidebar com categorias lógicas
- Criamos documentação inicial:
  - Página de introdução
  - Guia de instalação
  - Documentação de temas
  - Guia de acessibilidade
  - Melhores práticas
- Documentamos os componentes Button e Card
- Criamos assets visuais (logo, imagens)
- Atualizamos o README do projeto

## Próximas Tarefas

### Prioridades Imediatas

1. **Otimizações do Firebase Hosting**:
   - Configurar cache e headers adequados
   - Configurar regras de redirecionamento para URLs antigas
   - Implementar monitoramento de performance

2. **Documentação de mais componentes**:
   - TextInput (incluindo MaskedTextInput)
   - Checkbox
   - RadioButton
   - Avatar
   - Icon

3. **Página de tipografia**:
   - Documentar Text, Title, Subtitle
   - Explicar o sistema tipográfico
   - Mostrar a hierarquia visual

4. **Playground interativo**:
   - Implementar um ambiente para testar componentes
   - Permitir personalização de props em tempo real

### Médio Prazo

- Configurar versioning para a documentação
- Implementar busca
- Adicionar mais exemplos práticos
- Criar guias avançados de integração

## Considerações Importantes

- **URL do Site**: A documentação está disponível em https://fluid-ds.web.app
- **Processo de Deploy**: Utilizar `yarn deploy` ou `./deploy.sh` para fazer o deploy manual
- **Automação**: Pushes para main/master disparam deploy automático via GitHub Actions
- **Foco em exemplos**: Priorizar exemplos práticos e de uso real
- **Acessibilidade**: Garantir que a documentação e exemplos promovam boas práticas de acessibilidade
- **Consistência**: Manter uma estrutura consistente em todas as páginas de documentação de componentes
- **Simplicidade**: Começar com exemplos simples e progressivamente mostrar usos mais complexos

## Ferramentas e Tecnologias

- **Docusaurus**: Framework de documentação
- **Firebase Hosting**: Hospedagem do site
- **GitHub Actions**: Automação de deploy
- **React**: Para componentes personalizados no site
- **MDX**: Para páginas de documentação interativas
- **CSS Modules**: Para estilização de componentes do site

## Recursos

- Fluid React Native (código-fonte): https://github.com/platformbuilders/fluid-react-native
- Documentação do Docusaurus: https://docusaurus.io/docs
- Site da documentação: https://fluid-ds.web.app
- Exemplos de documentação bem estruturada:
  - MUI: https://mui.com/material-ui/
  - Chakra UI: https://chakra-ui.com/docs/
  - React Native Paper: https://callstack.github.io/react-native-paper/ 