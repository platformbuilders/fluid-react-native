# Migração do Docusaurus para o Rspress

Este documento descreve o processo de migração da documentação do Fluid React Native do Docusaurus para o Rspress.

## O que é o Rspress?

[Rspress](https://rspress.dev) é um gerador de sites estáticos baseado em React e MDX, focado em desempenho e simplicidade. Ele foi criado para documentação técnica e é mantido pela equipe da ByteDance.

## Diferenças entre Docusaurus e Rspress

- **Desempenho**: Rspress utiliza Rspack, que oferece melhor desempenho de compilação que webpack
- **Simplicidade**: Configuração mais simples e menos verbosa
- **React Native**: Melhor suporte para componentes React Native

## Processo de Migração

### 1. Configuração Inicial

1. Criamos uma nova pasta `docs/rspress` para a nova documentação
2. Inicializamos um projeto NPM e instalamos as dependências:
   ```bash
   npm install rspress @rspress/core -D
   ```
3. Configuramos os scripts no `package.json`:
   ```json
   "scripts": {
     "dev": "rspress dev",
     "build": "rspress build",
     "preview": "rspress preview"
   }
   ```
4. Criamos o arquivo de configuração `rspress.config.ts`

### 2. Migração de Conteúdo

1. Convertemos os arquivos Markdown (`.md`) para MDX (`.mdx`)
2. Ajustamos a estrutura de diretórios para seguir as convenções do Rspress
3. Migramos os componentes personalizados para a pasta `src/components`
4. Criamos a estrutura de navegação no arquivo de configuração

### 3. Correções e Ajustes

1. Ajustamos os links internos (removendo o prefixo `/docs/`)
2. Criamos arquivos SVG para logo e favicon
3. Ajustamos os estilos e temas conforme necessário

### 4. Testes e Validação

1. Executamos o servidor local para testar a documentação
2. Verificamos a navegação e a renderização de todos os componentes
3. Garantimos que o conteúdo está sendo exibido corretamente

## Estrutura Final

```
docs/rspress/
├── docs/              # Conteúdo da documentação em MDX
├── public/            # Arquivos estáticos
├── src/               # Componentes e personalização do tema
├── tsconfig.json
├── package.json
└── rspress.config.ts
```

## Melhorias Futuras

1. Adicionar mais componentes e exemplos
2. Implementar temas claro/escuro personalizados
3. Integrar com o Storybook
4. Adicionar busca avançada
5. Implementar versões de documentação para diferentes versões da biblioteca
