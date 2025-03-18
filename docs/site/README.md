# Documentação do Fluid React Native

Este diretório contém a documentação do Fluid React Native, construída utilizando o [Rspress](https://rspress.dev).

## Estrutura do Projeto

```
docs/rspress/
├── docs/              # Conteúdo da documentação em MDX
│   ├── components/    # Documentação de componentes
│   ├── guides/        # Guias de uso
│   ├── theme/         # Documentação sobre o sistema de temas
│   ├── architecture.mdx
│   ├── backlog.mdx
│   ├── components.mdx
│   ├── getting-started.mdx
│   ├── intro.mdx
│   └── theme.mdx
├── public/            # Arquivos estáticos
│   ├── favicon.svg
│   └── logo.svg
├── src/               # Componentes e personalização do tema
│   ├── components/
│   └── theme/
├── tsconfig.json      # Configuração do TypeScript
├── package.json       # Dependências e scripts
└── rspress.config.ts  # Configuração do Rspress
```

## Executando a Documentação

Para iniciar o servidor de desenvolvimento:

```bash
# Instalar dependências (se for a primeira vez)
npm install

# Iniciar o servidor de desenvolvimento
npm run dev
```

O servidor estará disponível em http://localhost:3000 por padrão.

## Comandos Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento
- `npm run build`: Gera a versão de produção da documentação em `dist/`
- `npm run preview`: Visualiza a versão de produção localmente

## Adicionando Novos Conteúdos

### Adicionando um Novo Componente

1. Crie um arquivo `.mdx` em `docs/components/`
2. Adicione a entrada no arquivo de configuração em `rspress.config.ts`

### Adicionando um Novo Guia

1. Crie um arquivo `.mdx` em `docs/guides/`
2. Adicione a entrada no arquivo de configuração em `rspress.config.ts`

### Adicionando Recursos Estáticos

Coloque arquivos estáticos (imagens, ícones, etc.) na pasta `public/`.
