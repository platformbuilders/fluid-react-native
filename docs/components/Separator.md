# Separator

O componente `Separator` é um elemento visual utilizado para separar seções de conteúdo com uma linha horizontal e texto opcional.

## Importação

```tsx
import { Separator } from '@platformbuilders/fluid-react-native';
```

## Exemplo Básico

```tsx
<Separator text="ou" />
```

## Exemplos

### Com margens personalizadas

```tsx
<Separator 
  text="ou" 
  marginTop={20} 
  marginBottom={10} 
/>
```

### Uso em formulários

```tsx
<View>
  <Button 
    accessibility="entrar-email-senha"
    onPress={handleLogin} 
    text="Entrar com e-mail e senha" 
  />
  
  <Separator 
    text="ou" 
    marginTop={20} 
    marginBottom={20} 
  />
  
  <Button 
    accessibility="entrar-google"
    onPress={handleGoogleLogin} 
    text="Entrar com Google" 
  />
</View>
```

### Como divisor de seções

```tsx
<View>
  <Typography>Primeira seção de conteúdo</Typography>
  
  <Separator 
    text="Próxima seção" 
    marginTop={30} 
    marginBottom={30} 
  />
  
  <Typography>Segunda seção de conteúdo</Typography>
</View>
```

## API

### Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `text` | `string` | - | Texto a ser exibido no meio do separador (obrigatório) |
| `marginTop` | `number` | 0 | Margem superior do separador |
| `marginBottom` | `number` | 0 | Margem inferior do separador |

## Notas de uso

- O componente divide o espaço horizontalmente com uma linha, texto centralizado e outra linha
- É útil para separar visualmente grupos de conteúdo relacionados
- O texto centralizado ajuda a comunicar a relação ou transição entre os conteúdos separados
- As linhas têm uma aparência tracejada com 33% da largura disponível em cada lado 