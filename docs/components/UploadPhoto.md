# UploadPhoto

O componente `UploadPhoto` é utilizado para permitir que usuários façam upload de imagens de perfil, documentos ou outros tipos de fotos, com opção de tirar foto com a câmera ou escolher da galeria.

## Importação

```tsx
import { UploadPhoto } from '@platformbuilders/fluid-react-native';
```

## Exemplo Básico

```tsx
<UploadPhoto
  accessibility="upload-foto-perfil"
  onUpload={(response) => console.log(response)}
/>
```

## Exemplos

### Com imagem pré-carregada

```tsx
<UploadPhoto
  accessibility="foto-perfil"
  image="https://exemplo.com/imagem.jpg"
  onUpload={(response) => console.log(response)}
/>
```

### Com acesso à câmera

```tsx
<UploadPhoto
  accessibility="foto-documento"
  displayCamera
  onUpload={(response) => console.log(response)}
/>
```

### Com textos e ícones personalizados

```tsx
<UploadPhoto
  accessibility="foto-produto"
  uploadText="Adicionar foto do produto"
  uploadIcon="camera"
  deleteIcon="times-circle"
  onUpload={(response) => console.log(response)}
  onClearUpload={() => console.log('Foto removida')}
/>
```

### Com qualidade de imagem personalizada

```tsx
<UploadPhoto
  accessibility="foto-documento"
  imageQuality={0.8}
  onUpload={(response) => console.log(response)}
/>
```

## API

### Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `accessibility` | `string` | - | Identificador de acessibilidade (obrigatório) |
| `id` | `string` | - | ID opcional para o componente |
| `accessibilityLabel` | `string` | - | Rótulo de acessibilidade |
| `image` | `string` | - | URL ou URI da imagem pré-carregada |
| `imageQuality` | `number` | `0.5` | Qualidade da imagem (0 a 1) |
| `displayCamera` | `boolean` | `false` | Se deve exibir a câmera para captura |
| `onPress` | `(event) => void` | - | Callback para quando o componente é pressionado |
| `onUpload` | `(response) => void` | - | Callback para quando uma imagem é carregada |
| `onClearUpload` | `() => void` | - | Callback para quando a imagem é removida |
| `uploadText` | `string` | 'Adicionar Foto' | Texto exibido no estado vazio |
| `uploadIconSize` | `number` | `36` | Tamanho do ícone de upload |
| `uploadIcon` | `string` | 'image' | Nome do ícone de upload |
| `deleteIcon` | `string` | 'trash' | Nome do ícone de exclusão |
| `testID` | `string` | - | ID para testes automatizados |
| `iconType` | `IconFonts` | `IconFonts.FontAwesome` | Tipo de fonte de ícones |

## Métodos Acessíveis por Ref

O componente expõe os seguintes métodos via `ref`:

| Método | Descrição |
|--------|-----------|
| `getUploadImage()` | Retorna a imagem atualmente carregada |
| `clearUploadImage()` | Limpa a imagem sem acionar o callback `onClearUpload` |
| `takePicture()` | Tira uma foto usando a câmera quando `displayCamera` é true |
| `openPicker()` | Abre o seletor de imagens nativo |

Exemplo de uso:

```tsx
const uploadRef = useRef(null);

// ...

<Button 
  accessibility="btn-tirar-foto"
  onPress={() => uploadRef.current.takePicture()}
  text="Tirar foto"
/>

<UploadPhoto
  ref={uploadRef}
  accessibility="upload-foto"
  displayCamera
  onUpload={(response) => console.log(response)}
/>
```

## Notas de uso

- O componente utiliza `react-native-image-picker` para selecionar imagens da galeria
- Quando `displayCamera` é true, utiliza `react-native-camera` para captura direta
- Para funcionamento correto, é necessário configurar as permissões no `AndroidManifest.xml` e `Info.plist`
- Uma vez que uma imagem é carregada, um botão de exclusão aparece para permitir a remoção
- O componente pode ser personalizado visualmente através de estilos do tema 