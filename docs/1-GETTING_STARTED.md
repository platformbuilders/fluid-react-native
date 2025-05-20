# Guia de Início Rápido

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- Node.js (versão especificada no arquivo `.nvmrc`)
- Yarn (gerenciador de pacotes)
- Xcode (para desenvolvimento iOS)
- Android Studio (para desenvolvimento Android)
- Watchman
- CocoaPods (para iOS)

## Configuração do Ambiente

1. **Clone o repositório**

```bash
git clone [URL_DO_REPOSITÓRIO]
cd [NOME_DO_PROJETO]
```

2. **Instale as dependências**

```bash
yarn install
```

3. **iOS: Instale os pods**

```bash
cd ios
pod install
cd ..
```

## Executando o Projeto

### Desenvolvimento

1. **Android**

```bash
yarn android
```

2. **iOS**

```bash
yarn ios
```

3. **Metro Bundler**

```bash
yarn start