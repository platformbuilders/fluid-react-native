# Modal

> **Status: Planejado** - Este componente está planejado para futuras versões da biblioteca, mas ainda não foi implementado.

O componente Modal é projetado para exibir conteúdo em uma camada sobreposta que bloqueia a interação com o conteúdo subjacente. É útil para diálogos, alertas, formulários e outras interações que exigem foco do usuário.

## Funcionalidades Planejadas

- **Modals de diferentes tamanhos**: Tela cheia, metade da tela, ou tamanho personalizado
- **Animações de entrada e saída**: Fade, deslizamento de baixo para cima, etc.
- **Opções de fechamento**: Toque fora, botão de fechar, pressionar tecla Esc, etc.
- **Suporte a backdrops personalizados**: Controle sobre a cor e opacidade do fundo
- **Acessibilidade completa**: Foco automático, armadilha de foco, e suporte a leitores de tela
- **Controle de scroll**: Bloqueio de scroll no conteúdo subjacente

## Uso Planejado

```jsx
import React, { useState } from 'react';
import { View, Button } from 'react-native';
import { Modal, Typography } from '@platformbuilders/fluid-react-native';

const ModalExample = () => {
  const [visible, setVisible] = useState(false);
  
  const handleOpen = () => setVisible(true);
  const handleClose = () => setVisible(false);
  
  return (
    <View>
      <Button title="Abrir Modal" onPress={handleOpen} />
      
      <Modal
        visible={visible}
        onClose={handleClose}
        title="Título do Modal"
        accessibility="modal-exemplo"
      >
        <Typography>
          Este é o conteúdo do modal. Você pode colocar qualquer componente aqui dentro.
        </Typography>
        
        <Button title="Fechar" onPress={handleClose} />
      </Modal>
    </View>
  );
};
```

## Variações Planejadas

### Tamanhos

```jsx
// Modal de tela cheia
<Modal
  visible={visible}
  onClose={handleClose}
  size="fullscreen"
>
  {/* conteúdo */}
</Modal>

// Modal de tamanho médio (padrão)
<Modal
  visible={visible}
  onClose={handleClose}
  size="medium"
>
  {/* conteúdo */}
</Modal>

// Modal pequeno
<Modal
  visible={visible}
  onClose={handleClose}
  size="small"
>
  {/* conteúdo */}
</Modal>

// Tamanho personalizado
<Modal
  visible={visible}
  onClose={handleClose}
  customSize={{ width: '80%', height: '50%' }}
>
  {/* conteúdo */}
</Modal>
```

### Posicionamento

```jsx
// Modal centralizado (padrão)
<Modal
  visible={visible}
  onClose={handleClose}
  position="center"
>
  {/* conteúdo */}
</Modal>

// Modal vindo de baixo
<Modal
  visible={visible}
  onClose={handleClose}
  position="bottom"
>
  {/* conteúdo */}
</Modal>

// Modal vindo de cima
<Modal
  visible={visible}
  onClose={handleClose}
  position="top"
>
  {/* conteúdo */}
</Modal>
```

### Animações

```jsx
// Fade (padrão)
<Modal
  visible={visible}
  onClose={handleClose}
  animation="fade"
>
  {/* conteúdo */}
</Modal>

// Slide
<Modal
  visible={visible}
  onClose={handleClose}
  animation="slide"
>
  {/* conteúdo */}
</Modal>

// Sem animação
<Modal
  visible={visible}
  onClose={handleClose}
  animation="none"
>
  {/* conteúdo */}
</Modal>
```

### Opções de Fechamento

```jsx
// Fechar ao tocar fora
<Modal
  visible={visible}
  onClose={handleClose}
  closeOnBackdropPress={true}
>
  {/* conteúdo */}
</Modal>

// Mostrar botão de fechar
<Modal
  visible={visible}
  onClose={handleClose}
  showCloseButton={true}
>
  {/* conteúdo */}
</Modal>
```

## Props Planejadas

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `visible` | boolean | `false` | Controla a visibilidade do modal |
| `onClose` | function | - | Função chamada quando o modal é fechado |
| `title` | string | - | Título do modal (opcional) |
| `size` | 'small' \| 'medium' \| 'fullscreen' | 'medium' | Tamanho predefinido do modal |
| `customSize` | object | - | Tamanho personalizado ({ width, height }) |
| `position` | 'center' \| 'bottom' \| 'top' | 'center' | Posicionamento do modal |
| `animation` | 'fade' \| 'slide' \| 'none' | 'fade' | Tipo de animação |
| `closeOnBackdropPress` | boolean | `true` | Permite fechar o modal ao tocar fora |
| `showCloseButton` | boolean | `true` | Mostra o botão de fechar no canto superior |
| `backdropColor` | string | - | Cor do backdrop (sobrepõe tema) |
| `backdropOpacity` | number | `0.5` | Opacidade do backdrop |
| `animationDuration` | number | `300` | Duração da animação em ms |
| `children` | ReactNode | - | Conteúdo do modal |
| `accessibility` | string | - | ID para acessibilidade |
| `testID` | string | - | ID para testes |

## Acessibilidade Planejada

O Modal implementará as seguintes funcionalidades de acessibilidade:

- **Focus trap**: Manterá o foco dentro do modal enquanto ele estiver aberto
- **Initial focus**: Focará automaticamente no primeiro elemento interativo
- **Screen reader support**: Anunciará quando o modal for aberto e fechado
- **ARIA roles**: Utilizará `role="dialog"` e outros atributos ARIA apropriados
- **Keyboard navigation**: Suporte completo para navegação por teclado

## Exemplo de Implementação Completa Planejada

```jsx
import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Modal, Typography, Button } from '@platformbuilders/fluid-react-native';

const ModalExamples = () => {
  const [simpleModalVisible, setSimpleModalVisible] = useState(false);
  const [fullscreenModalVisible, setFullscreenModalVisible] = useState(false);
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [customModalVisible, setCustomModalVisible] = useState(false);
  
  return (
    <ScrollView style={styles.container}>
      <Typography variant="h3" style={styles.title}>
        Exemplos de Modal
      </Typography>
      
      {/* Modal Simples */}
      <View style={styles.section}>
        <Button 
          title="Abrir Modal Simples" 
          onPress={() => setSimpleModalVisible(true)}
          style={styles.button}
        />
        
        <Modal
          visible={simpleModalVisible}
          onClose={() => setSimpleModalVisible(false)}
          title="Modal Simples"
          accessibility="modal-simples"
        >
          <View style={styles.modalContent}>
            <Typography variant="body" style={styles.modalText}>
              Este é um exemplo de modal simples com tamanho padrão.
            </Typography>
            
            <Button 
              title="Fechar Modal" 
              onPress={() => setSimpleModalVisible(false)}
              style={styles.modalButton}
            />
          </View>
        </Modal>
      </View>
      
      {/* Modal Fullscreen */}
      <View style={styles.section}>
        <Button 
          title="Abrir Modal Tela Cheia" 
          onPress={() => setFullscreenModalVisible(true)}
          style={styles.button}
        />
        
        <Modal
          visible={fullscreenModalVisible}
          onClose={() => setFullscreenModalVisible(false)}
          size="fullscreen"
          title="Modal Tela Cheia"
          accessibility="modal-tela-cheia"
        >
          <View style={styles.fullscreenContent}>
            <Typography variant="h4" style={styles.modalTitle}>
              Modal de Tela Cheia
            </Typography>
            
            <Typography variant="body" style={styles.modalText}>
              Este modal ocupa toda a tela e é útil para interações complexas que precisam de mais espaço.
            </Typography>
            
            <Button 
              title="Fechar Modal" 
              onPress={() => setFullscreenModalVisible(false)}
              style={styles.modalButton}
            />
          </View>
        </Modal>
      </View>
      
      {/* Bottom Sheet */}
      <View style={styles.section}>
        <Button 
          title="Abrir Bottom Sheet" 
          onPress={() => setBottomSheetVisible(true)}
          style={styles.button}
        />
        
        <Modal
          visible={bottomSheetVisible}
          onClose={() => setBottomSheetVisible(false)}
          position="bottom"
          animation="slide"
          accessibility="bottom-sheet"
        >
          <View style={styles.bottomSheetContent}>
            <Typography variant="subtitle" style={styles.modalTitle}>
              Bottom Sheet
            </Typography>
            
            <Typography variant="body" style={styles.modalText}>
              Este modal desliza de baixo para cima, similar a um bottom sheet.
            </Typography>
            
            <Button 
              title="Fechar" 
              onPress={() => setBottomSheetVisible(false)}
              style={styles.modalButton}
            />
          </View>
        </Modal>
      </View>
      
      {/* Modal Customizado */}
      <View style={styles.section}>
        <Button 
          title="Abrir Modal Customizado" 
          onPress={() => setCustomModalVisible(true)}
          style={styles.button}
        />
        
        <Modal
          visible={customModalVisible}
          onClose={() => setCustomModalVisible(false)}
          customSize={{ width: '90%', height: 'auto' }}
          backdropColor="#000000"
          backdropOpacity={0.8}
          animation="fade"
          animationDuration={500}
          showCloseButton={true}
          accessibility="modal-customizado"
        >
          <View style={styles.customModalContent}>
            <Typography variant="h4" style={styles.customModalTitle}>
              Modal Personalizado
            </Typography>
            
            <Typography variant="body" style={styles.modalText}>
              Este modal tem configurações personalizadas, incluindo tamanho, cor e opacidade do backdrop, e duração da animação.
            </Typography>
            
            <Button 
              title="Fechar Modal" 
              onPress={() => setCustomModalVisible(false)}
              style={styles.customModalButton}
            />
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    marginBottom: 24,
  },
  section: {
    marginBottom: 20,
  },
  button: {
    marginBottom: 10,
  },
  modalContent: {
    padding: 20,
  },
  fullscreenContent: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomSheetContent: {
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  customModalContent: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },
  modalTitle: {
    marginBottom: 16,
  },
  modalText: {
    marginBottom: 20,
  },
  modalButton: {
    alignSelf: 'flex-end',
  },
  customModalTitle: {
    marginBottom: 16,
    color: '#333333',
  },
  customModalButton: {
    alignSelf: 'center',
  },
});

export default ModalExamples;
```

## Implementação Futura

O componente Modal será implementado em uma versão futura da biblioteca Fluid React Native. Quando estiver disponível, esta documentação será atualizada com exemplos reais de uso, variações, e funcionalidades suportadas.

Se você tem sugestões específicas para a implementação deste componente, por favor, abra uma issue no repositório GitHub do projeto. 