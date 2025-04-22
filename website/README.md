# Fluid - Documentação

Este repositório contém o website de documentação para o [Fluid](https://github.com/platformbuilders/fluid-react-native), uma biblioteca de componentes UI para React Native desenvolvida pela Platform Builders.

## 🚀 Visão Geral

A documentação foi construída usando [Docusaurus 2](https://docusaurus.io/), um gerador de sites de documentação moderno e de fácil manutenção.

## 🛠️ Pré-requisitos

- Node.js >= 14.x
- npm ou yarn

## 📦 Instalação

Clone o repositório e instale as dependências:

```bash
# Clonar o repositório
git clone https://github.com/platformbuilders/fluid-react-native-docs.git
cd fluid-react-native-docs

# Instalar dependências
npm install
# ou
yarn install
```

## 🏃‍♂️ Desenvolvimento Local

Para iniciar o servidor de desenvolvimento:

```bash
npm run start
# ou
yarn start
```

Isso iniciará um servidor local e abrirá uma janela do navegador. A maioria das mudanças são refletidas ao vivo sem precisar reiniciar o servidor.

## 🏗️ Build

Para gerar uma versão estática do site:

```bash
npm run build
# ou
yarn build
```

Isso gerará o conteúdo estático no diretório `build`, que pode ser servido usando qualquer hospedagem de conteúdo estático.

## 📱 Estrutura do Projeto

```
website/
├── blog/                # Posts do blog
├── docs/                # Arquivos de documentação em Markdown
├── src/
│   ├── components/      # Componentes React
│   ├── css/             # Estilos CSS
│   └── pages/           # Páginas personalizadas
├── static/
│   └── img/             # Imagens estáticas
├── docusaurus.config.js # Configuração do Docusaurus
├── sidebars.js          # Configuração da barra lateral
└── package.json         # Dependências e scripts
```

## 🧩 Adicionando Conteúdo

### Documentação

Adicione ou edite arquivos na pasta `docs/`. Os arquivos são escritos em Markdown com frontmatter e recursos adicionais do MDX.

Exemplo:

```md
---
sidebar_position: 1
---

# Título da Página

Conteúdo da página em Markdown.

## Subtítulo

Mais conteúdo...
```

### Barra Lateral

Configure as categorias e itens da barra lateral em `sidebars.js`:

```js
module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Introdução',
      items: ['intro', 'getting-started'],
    },
    // ... outras categorias
  ],
};
```

### Páginas Personalizadas

Adicione páginas personalizadas em `src/pages/`. Essas páginas usam React e podem importar componentes.

## 📚 Adicionando Exemplos de Componentes

Para documentar componentes do Fluid:

1. Crie um arquivo Markdown na pasta `docs/components/`.
2. Use código JSX para demonstrar o uso.
3. Adicione exemplos, variantes, props e considerações de uso.

## 🌐 Implantação

A documentação é automaticamente implantada no GitHub Pages quando alterações são feitas na branch principal.

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do repositório
2. Crie uma branch para suas mudanças (`git checkout -b feature/nova-documentacao`)
3. Faça commit das mudanças (`git commit -am 'Adiciona documentação para X'`)
4. Faça push para a branch (`git push origin feature/nova-documentacao`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.
