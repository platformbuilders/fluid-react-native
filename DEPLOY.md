# Deploy para Firebase Hosting

Este projeto está configurado para deploy em duas instâncias do Firebase Hosting:

1. **docs** - Documentação técnica da API (RSPress)
2. **website** - Site de documentação do usuário (rspress)

## Pré-requisitos

- Conta no Firebase e acesso ao projeto
- Firebase CLI instalado localmente
- Permissões para configurar hosting no projeto Firebase

## Configuração Inicial

Para configurar os alvos do Firebase Hosting, execute o script de configuração:

```bash
./firebase-setup.sh
```

**Importante:** Você precisa primeiro criar os dois sites no console do Firebase:
- Um site principal com ID do projeto (para a documentação da API)
- Um site secundário com ID do projeto + "-storybook" (para o Storybook)

## Deploy Manual

Para fazer o deploy manual de ambos os sites:

```bash
# Instalar dependências
yarn install
yarn website:install

# Construir ambos os sites
yarn docs:build
yarn website:build

# Deploy para o Firebase
firebase deploy --only hosting:docs
firebase deploy --only hosting:website
```

## Deploy Automático

O projeto está configurado com GitHub Actions para fazer o deploy automático quando houver push para as branches `main` ou `master`.

### Configuração do GitHub Actions

Os seguintes segredos devem estar configurados no repositório:

- `FIREBASE_SERVICE_ACCOUNT` - Conta de serviço do Firebase (JSON)
- `FIREBASE_PROJECT_ID` - ID do projeto Firebase

## Estrutura dos Sites

### Documentação API (RSPress)
- Código fonte: `docs/rspress/`
- Build: `docs/rspress/dist/`
- URL: `https://[PROJECT_ID].web.app`

### Site rspress

1.  **Diretório Fonte:** `website/`
2.  **Comando Build:** `yarn website:build` (gera o conteúdo em `website/build`)
3.  **Diretório Público (Firebase):** `website/build`
4.  **Projeto Firebase:** `fluid-docs` (ID configurado)
5.  **Target Firebase:** `fluid-docs` (Nome do target configurado)

## Solução de Problemas

Se você encontrar problemas durante o deploy:

1. Verifique se os alvos do Firebase estão configurados corretamente:
   ```bash
   firebase target:list
   ```

2. Certifique-se de que os builds estão sendo gerados nos diretórios corretos:
   ```bash
   ls -la docs/rspress/dist
   ls -la website/build
   ```

3. Para problemas com o GitHub Actions, verifique os logs de execução no GitHub. 