# Documentação do Fluid React Native

## Visão Geral
Fluid React Native é uma biblioteca de componentes para React Native que adota práticas modernas e padrões de design para criar aplicações móveis eficientes. Este documento serve como guia para instalação, desenvolvimento e solução de problemas do projeto.

## Instalação
1. Clone o repositório.
2. Execute `npm install` ou `yarn install` para instalar todas as dependências.
3. Garanta que seu ambiente esteja corretamente configurado para React Native (Xcode para iOS e Android Studio para Android).

## Comandos de Desenvolvimento
- Para iniciar o servidor de desenvolvimento:
  `npm start` ou `npx react-native start`
- Para rodar a aplicação no iOS:
  `npx react-native run-ios`
- Para rodar a aplicação no Android:
  `npx react-native run-android`
- Para executar os testes:
  `npm test`

## Dicas e Solução de Problemas
- Se um comando de desenvolvimento não funcionar, verifique se todas as dependências estão instaladas corretamente.
- Confirme que a versão do Node e do React Native são compatíveis com o projeto.
- Caso haja problemas específicos, consulte os seguintes documentos para maior detalhe:
  - [Arquitetura do Projeto](arquitetura.md)
  - [Funcionalidades e Recursos](features.md)
  - [Diretrizes de Acessibilidade](accessibility-guidelines.md)
  - [Testes e Depuração](testing.md)

## Observações
- Este documento será atualizado periodicamente para refletir as mudanças no fluxo de desenvolvimento e comandos de dev.

Este diretório contém a documentação do Fluid React Native, usando [Rspress](https://rspress.dev) como framework de documentação.

## Estrutura

```
docs/
├── rspress/              # Configuração do Rspress
│   ├── docs/             # Arquivos MDX de documentação
│   ├── src/              # Componentes personalizados 
│   ├── public/           # Arquivos estáticos
│   ├── rspress.config.ts # Configuração do Rspress
│   └── package.json      # Dependências da documentação
├── accessibility.md      # Documentação sobre acessibilidade
├── arquitetura.md        # Documentação sobre arquitetura
├── backlog.md            # Backlog de desenvolvimento
└── features.md           # Descrição das funcionalidades
```

## Desenvolvendo a documentação

Para desenvolver a documentação, você tem duas opções:

### Usando scripts do package.json principal:

```bash
# Instalar dependências da documentação
yarn docs:install

# Iniciar servidor de desenvolvimento
yarn docs:dev

# Gerar build de produção
yarn docs:build

# Visualizar build de produção
yarn docs:preview
```

### Diretamente na pasta docs/rspress:

```bash
# Entrar no diretório da documentação
cd docs/rspress

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Gerar build de produção
npm run build

# Visualizar build de produção
npm run preview
```

## Adicionando conteúdo

Para adicionar novo conteúdo à documentação:

1. Crie arquivos MDX em `docs/rspress/docs/`
2. Atualize o menu de navegação em `docs/rspress/rspress.config.ts`

## Deploy

A documentação é automaticamente buildada e publicada através do GitHub Actions quando há mudanças nos arquivos de documentação ou quando acontece um merge para a branch principal.

### Deploy Manual

Para fazer o deploy manual da documentação, utilize o comando:

```bash
yarn docs:build
firebase deploy --only hosting:docs
```

A documentação estará disponível em: [https://fluid-ds-docs.web.app](https://fluid-ds-docs.web.app)

### Problemas Conhecidos

Se ocorrerem erros durante o build da documentação, verifique:

1. Se o arquivo `rspress.config.ts` está presente e corretamente configurado
2. Se todos os diretórios necessários existem (docs/guide, docs/components)
3. Se as dependências do rspress estão instaladas e atualizadas

Para resolver problemas com o deploy no Firebase:
1. Verifique se os targets estão corretamente configurados:
   ```bash
   firebase target:list
   ```
2. Certifique-se de que o site foi criado no Firebase Hosting:
   ```bash
   firebase hosting:sites:create fluid-ds-docs
   ```
3. Aplique o target:
   ```bash
   firebase target:apply hosting docs fluid-ds-docs
   ``` 