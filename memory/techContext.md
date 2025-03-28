# Contexto Técnico

## Tecnologias Utilizadas

### Core
- **React Native**: ^0.76.1
- **TypeScript**: ^5.3.3
- **Styled Components**: ^5.3.11

### Dependências Principais
- **@platformbuilders/helpers**: ^0.11.3
- **@platformbuilders/theme-toolkit**: ^0.3.0
- **react-native-vector-icons**: ^10.2.0
- **react-native-svg**: ^15.8.0
- **react-native-fast-image**: ^8.6.3
- **formik**: ^2.4.6
- **lodash**: ^4.17.21

### Desenvolvimento e Testes
- **Jest**: ^29.7.0
- **React Testing Library**: ^12.8.1
- **Storybook React Native**: ^8.4.2
- **ESLint**: ^8.57.1
- **Prettier**: ^3.3.3

### Documentação
- **rspress**: ^0.1.0
- **@rspress/plugin-api-docgen**: ^0.1.0

## Configuração de Desenvolvimento

### Requisitos
- Node.js >= 18
- Yarn ou NPM
- Ambiente React Native configurado para iOS e Android

### Scripts Principais
- `yarn build`: Compila o código para distribuição
- `yarn test`: Executa testes com Jest
- `yarn lint`: Verifica o código com ESLint
- `yarn docs:dev`: Inicia o servidor de documentação local
- `yarn storybook:generate`: Gera histórias para o Storybook

### Desenvolvimento Local
Para desenvolvimento local e testes em projetos que utilizam a biblioteca:
1. Utilize `yalc` para publicar localmente
2. Link a biblioteca no projeto de teste

## Testabilidade e Qualidade de Código

### TestIDs e Seletores para Testes
- Cada componente possui testIDs predefinidos seguindo o padrão `{componentType}_{id}`
- Os testIDs são utilizados para seleção em testes e automação
- Documentação específica para testIDs está disponível para facilitar a criação de testes

### Ferramentas de Qualidade de Código
- **TypeScript**: Verificação estática de tipos com `tsc`
- **ESLint**: Análise de código e garantia de padrões
- **Jest**: Testes unitários e cobertura de código
- **Semgrep**: Análise estática de segurança e padrões de código
- **React Testing Library**: Testes focados no comportamento do usuário

### Thresholds de Qualidade
- Cobertura geral de código: 90%+
- Cobertura de funções: 84%+
- Zero erros de linting
- Zero erros de TypeScript
- Todos os testes devem passar antes do merge
- Thresholds personalizados para componentes complexos, configurados caso a caso

### Validação Contínua
As seguintes verificações devem ser executadas regularmente durante o desenvolvimento:
```bash
# Verificação de tipos
npm run tsc

# Verificação de linting
npm run lint

# Análise de segurança (quando disponível)
npx semgrep --config=auto .

# Testes unitários e cobertura
npm test

# Testes com thresholds personalizados (exemplo para MaskedTextInput)
npx jest --config=jest.config.js --coverage --collectCoverageFrom="src/components/TextInput/MaskedTextInput/index.tsx" src/components/TextInput/__tests__/MaskedTextInput.spec.tsx --coverageThreshold='{"./src/components/TextInput/MaskedTextInput/index.tsx":{"branches":70,"functions":70,"lines":70,"statements":70}}'
```

## Restrições Técnicas

### Compatibilidade
- Suporte a React Native >= 0.63.0
- Compatibilidade com iOS >= 12 e Android >= 7
- Suporte a TypeScript >= 4.1

### Performance
- Componentes otimizados para renderização eficiente
- Evitar re-renderizações desnecessárias
- Lazy loading quando apropriado

### Acessibilidade
- Todos os componentes devem seguir as diretrizes de acessibilidade
- Suporte a leitores de tela
- Contraste adequado de cores

## Dependências

### Dependências Obrigatórias
Bibliotecas que devem ser instaladas junto com o Fluid:
- styled-components
- react-native-vector-icons
- react-native-svg

### Dependências Opcionais
Bibliotecas que são recomendadas mas não obrigatórias:
- formik (para formulários)
- react-native-fast-image (para imagens otimizadas)
- lottie-react-native (para animações)

### Integração com Outros Sistemas
- Compatível com navegação via React Navigation
- Pode ser utilizado em conjunto com Redux ou outros gerenciadores de estado
- Compatível com bibliotecas de formulários como Formik ou React Hook Form 

## Documentação Técnica

### Docusaurus para Documentação

A documentação do Fluid React Native está sendo implementada usando o Docusaurus 2, um gerador de sites estáticos moderno otimizado para documentação técnica.

#### Estrutura da Documentação

```
website/
├── blog/                # Posts do blog (futuro)
├── docs/                # Arquivos de documentação em Markdown
│   ├── intro.md         # Página de introdução
│   ├── getting-started.md # Guia de primeiros passos
│   ├── installation.md  # Guia de instalação
│   ├── theming.md       # Personalização de temas
│   ├── accessibility.md # Guia de acessibilidade
│   ├── components/      # Documentação de componentes
│   │   ├── button.md    # Documentação do Button
│   │   ├── card.md      # Documentação do Card
│   │   └── ...          # Outros componentes
│   └── guides/          # Guias avançados
│       └── best-practices.md # Melhores práticas
├── src/
│   ├── components/      # Componentes React personalizados
│   ├── css/             # Estilos CSS
│   │   └── custom.css   # CSS personalizado
│   └── pages/           # Páginas personalizadas
│       └── index.tsx    # Página inicial
├── static/
│   └── img/             # Imagens estáticas
│       ├── logo.svg     # Logo do projeto
│       └── ...          # Outras imagens
├── docusaurus.config.js # Configuração do Docusaurus
├── sidebars.js          # Configuração da barra lateral
└── package.json         # Dependências e scripts
```

#### Recursos Implementados

1. **Página Inicial Personalizada**
   - Header com logo e chamadas para ação
   - Seção de demonstração de código
   - Showcase de componentes 
   - Seção de destaques da biblioteca

2. **Estilização Personalizada**
   - CSS customizado para identidade visual
   - Variáveis de cores para temas claro e escuro
   - Tipografia personalizada

3. **Sidebar Organizada**
   - Dividida em categorias lógicas
   - Duas barras laterais: uma para tutoriais e outra para componentes

4. **Documentação Estruturada**
   - Páginas introdutórias sobre a biblioteca
   - Guias de instalação e configuração
   - Documentação de componentes com exemplos
   - Guias de melhores práticas

#### Configuração do Docusaurus

O arquivo `docusaurus.config.js` contém as configurações principais:

```javascript
module.exports = {
  title: 'Fluid React Native',
  tagline: 'Biblioteca de componentes UI para React Native',
  // URL do site
  url: 'https://fluid-ds.web.app',
  baseUrl: '/',
  
  // Configurações de temas, plugins e customizações
  
  // Links da navbar
  navbar: {
    title: 'Fluid React Native',
    logo: {
      alt: 'Fluid Logo',
      src: 'img/logo.svg',
    },
    items: [
      // Links de navegação
    ],
  },
  
  // Configuração das barras laterais
  plugins: [
    // Plugins adicionais
  ],
  
  // Configuração de temas
  themes: [
    // Temas adicionais
  ],
};
```

### Deploy e Hospedagem

A documentação do Fluid React Native é hospedada no Firebase Hosting, utilizando uma configuração simplificada para deploy único do site Docusaurus.

#### Configuração do Firebase

1. **firebase.json**
   ```json
   {
     "hosting": {
       "public": "website/build",
       "ignore": [
         "firebase.json",
         "**/.*",
         "**/node_modules/**"
       ],
       "rewrites": [
         {
           "source": "**",
           "destination": "/index.html"
         }
       ],
       "target": "fluid-ds"
     }
   }
   ```

2. **.firebaserc**
   ```json
   {
     "projects": {
       "default": "fluid-ds"
     }
   }
   ```

#### Scripts de Deploy

1. **firebase-setup.sh**: Configura o alvo de hospedagem no Firebase
   ```bash
   #!/bin/bash
   
   # Script para configurar o alvo de hosting no Firebase
   
   echo "Configurando alvo 'fluid-ds' para o projeto Firebase..."
   firebase target:apply hosting fluid-ds fluid-ds
   
   echo "Configuração de alvos concluída!"
   echo "Agora você pode executar './deploy.sh' para fazer o deploy do site."
   ```

2. **deploy.sh**: Script para fazer o deploy completo
   ```bash
   #!/bin/bash
   
   # Script para fazer deploy local do site para o Firebase Hosting
   
   echo "Instalando dependências..."
   yarn install
   yarn website:install
   
   echo "Construindo o site Docusaurus..."
   yarn website:build
   
   echo "Fazendo deploy do site único..."
   firebase deploy --only hosting
   
   echo "Deploy concluído!"
   echo "Site disponível em: https://fluid-ds.web.app"
   ```

3. **test-deploy.sh**: Script para testar o processo de build sem deploy
   ```bash
   #!/bin/bash
   
   # Script para testar os estágios de build da pipeline sem fazer deploy
   
   set -e  # Sai do script se qualquer comando falhar
   
   echo "===== Simulando pipeline de build e deploy ====="
   
   echo ""
   echo "1. Instalando dependências..."
   # Instalando apenas as dependências necessárias para a documentação
   echo "Pulando yarn install principal (apenas para teste)"
   yarn website:install
   
   echo ""
   echo "2. Construindo site Docusaurus..."
   yarn website:build
   
   echo ""
   echo "3. Verificando artefatos gerados..."
   echo "Site Docusaurus:"
   if [ -d "website/build" ]; then
     echo "✅ Build do Docusaurus gerado com sucesso em website/build"
     ls -la website/build | head -n 10
     echo "(mostrando apenas 10 primeiros arquivos)"
   else
     echo "❌ ERRO: Diretório website/build não foi criado"
     exit 1
   fi
   
   echo ""
   echo "===== Teste de pipeline concluído com sucesso! ====="
   echo "Para fazer o deploy para o Firebase, execute ./deploy.sh"
   ```

#### GitHub Actions

O projeto utiliza GitHub Actions para automatizar o deploy da documentação sempre que ocorrem alterações nas branches principais:

```yaml
name: Deploy to Firebase Hosting on merge
'on':
  push:
    branches:
      - main
      - master

jobs:
  build_and_deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
          cache: 'yarn'
          
      - name: Install Dependencies
        run: |
          yarn install --frozen-lockfile
          yarn website:install
          
      - name: Build Documentation (Docusaurus)
        run: |
          yarn website:build
          
      - name: Deploy to Firebase
        uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT }}'
          channelId: live
          projectId: '${{ secrets.FIREBASE_PROJECT_ID }}'
```

#### Requisitos para Deploy

1. **Conta Firebase**: Acesso a uma conta Firebase com o projeto configurado
2. **Firebase CLI**: Instalado e autenticado localmente
3. **Secrets configurados**:
   - `FIREBASE_SERVICE_ACCOUNT`: Credenciais da conta de serviço do Firebase
   - `FIREBASE_PROJECT_ID`: ID do projeto Firebase

#### Fluxo de Trabalho para Deploy

1. **Deploy Manual**:
   - Executar `./firebase-setup.sh` para configuração inicial (apenas uma vez)
   - Executar `yarn deploy` ou `./deploy.sh`
   
2. **Deploy Automático**:
   - Qualquer push para as branches main ou master dispara o workflow do GitHub Actions
   - O workflow constrói e implanta automaticamente a documentação

#### Manutenção da Documentação

A documentação segue estas diretrizes técnicas:

1. **Versionamento**: O Docusaurus permite versionar a documentação para diferentes versões da biblioteca (a ser implementado)

2. **Markdown e MDX**: Toda a documentação é escrita em Markdown com suporte a componentes MDX para exemplos interativos

3. **Exemplos de Código**: Os exemplos de código são formatados com sintaxe TypeScript/JSX e incluem props essenciais

4. **Acessibilidade**: A documentação segue práticas de acessibilidade web

5. **Buscabilidade**: Implementação futura de busca integrada para facilitar a navegação

#### Recursos Planejados

- Playground interativo para experimentar componentes
- Versioning para documentar diferentes versões da biblioteca
- Integração com Algolia DocSearch para busca avançada
- Suporte a PWA para experiência offline

#### Ferramentas de Desenvolvimento

- **Node.js**: Ambiente de execução
- **npm/yarn**: Gerenciamento de pacotes
- **React**: Framework para componentes personalizados
- **TypeScript**: Tipagem estática para os exemplos
- **CSS Modules**: Para estilização modular 