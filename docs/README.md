# Documentação do Fluid React Native

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