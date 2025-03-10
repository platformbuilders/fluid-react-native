# Documentação do Fluid React Native

Este diretório contém a documentação do Fluid React Native, construída com [Docusaurus](https://docusaurus.io/).

## Estrutura da Documentação

A documentação está organizada da seguinte forma:

- **Introdução**: Visão geral do Fluid React Native
- **Começando**: Guia de início rápido
- **Arquitetura**: Detalhes sobre a arquitetura do projeto
- **Componentes**: Documentação de cada componente
- **Tema**: Documentação do sistema de temas
- **Guias**: Guias detalhados sobre tópicos específicos
- **Backlog**: Lista de melhorias e evoluções planejadas

## Executando Localmente

Para executar a documentação localmente:

```bash
# Na raiz do projeto
yarn docs:start

# Ou diretamente na pasta da documentação
cd docs/website
yarn start
```

A documentação estará disponível em http://localhost:3000/fluid-react-native/

## Construindo para Produção

Para construir a documentação para produção:

```bash
# Na raiz do projeto
yarn docs:build

# Ou diretamente na pasta da documentação
cd docs/website
yarn build
```

Os arquivos de build serão gerados na pasta `build`.

## Servindo a Versão de Produção

Para servir a versão de produção localmente:

```bash
# Na raiz do projeto
yarn docs:serve

# Ou diretamente na pasta da documentação
cd docs/website
yarn serve
```

## Adicionando Documentação

### Adicionando um Novo Componente

Para adicionar a documentação de um novo componente:

1. Crie um arquivo Markdown na pasta `docs/components/`
2. Siga o padrão de documentação existente (veja `button.md` como exemplo)
3. Adicione o componente ao sidebar em `sidebars.ts`

### Adicionando um Novo Guia

Para adicionar um novo guia:

1. Crie um arquivo Markdown na pasta `docs/guides/`
2. Siga o padrão de documentação existente
3. Adicione o guia ao sidebar em `sidebars.ts`

## Contribuindo

Contribuições para a documentação são bem-vindas! Por favor, siga estas diretrizes:

1. Mantenha um estilo de escrita consistente
2. Inclua exemplos de código para ilustrar conceitos
3. Teste todos os exemplos de código para garantir que funcionem
4. Atualize o sidebar quando adicionar novas páginas

## Próximos Passos

- Documentar mais componentes
- Adicionar mais exemplos de código
- Melhorar a integração com o Storybook
- Adicionar suporte para múltiplas versões
- Adicionar suporte para múltiplos idiomas
