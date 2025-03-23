import React from 'react';
import Haptic from 'react-native-haptic-feedback';
import { fireEvent, render } from 'react-native-testing-library';
import renderer, { act } from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';

import Touchable from '..';
import theme from '../../../theme';

// Mock do Haptic para poder testar as chamadas
jest.mock('react-native-haptic-feedback', () => ({
  trigger: jest.fn(),
}));

describe('<Touchable />', () => {
  // Limpar mocks entre os testes
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render Touchable', () => {
    let wrapper;
    
    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Touchable id="testing" accessibility="" />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should fire onPress from Touchable', () => {
    const onPressEvent = jest.fn();

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Touchable id="testing" accessibility="" onPress={onPressEvent} />
      </ThemeProvider>,
    );

    const component = getByTestId('testing');

    fireEvent.press(component);

    expect(onPressEvent).toHaveBeenCalled();
    expect(Haptic.trigger).toHaveBeenCalled();
  });

  it('should handle when haptic fails', () => {
    const onPressEvent = jest.fn();
    // Mock Haptic para lançar erro
    (Haptic.trigger as jest.Mock).mockImplementationOnce(() => {
      throw new Error('Haptic failed');
    });

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Touchable id="testing" accessibility="" onPress={onPressEvent} />
      </ThemeProvider>,
    );

    const component = getByTestId('testing');

    // Deve executar sem erros mesmo quando Haptic lança uma exceção
    expect(() => {
      fireEvent.press(component);
    }).not.toThrow();

    expect(onPressEvent).toHaveBeenCalled();
  });

  it('should use custom haptic feedback type', () => {
    const onPressEvent = jest.fn();
    const customHaptic = 'impactMedium';

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Touchable 
          id="testing" 
          accessibility="" 
          onPress={onPressEvent}
          haptic={customHaptic} 
        />
      </ThemeProvider>,
    );

    const component = getByTestId('testing');
    fireEvent.press(component);

    expect(onPressEvent).toHaveBeenCalled();
    expect(Haptic.trigger).toHaveBeenCalledWith(customHaptic);
  });

  it('should respect disabled state', () => {
    const onPressEvent = jest.fn();

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Touchable 
          id="testing" 
          accessibility="" 
          onPress={onPressEvent}
          disabled={true}
        />
      </ThemeProvider>,
    );

    const component = getByTestId('testing');
    
    // Verificar que o estado é desabilitado
    expect(component.props.accessibilityState.disabled).toBe(true);
    
    // Quando o componente está desabilitado, o React Native TouchableOpacity
    // evita automaticamente a execução de onPress, mas nos testes isso não
    // é simulado automaticamente. Verificamos apenas se a prop está correta.
  });

  it('should use testID if provided', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Touchable 
          id="testing" 
          accessibility=""
          testID="custom-test-id" 
        />
      </ThemeProvider>,
    );

    // Deve encontrar o componente pelo testID personalizado
    const component = getByTestId('custom-test-id');
    expect(component).toBeTruthy();
  });

  it('should use accessibility if no id or testID is provided', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Touchable accessibility="accessibility-label" />
      </ThemeProvider>,
    );

    // Deve encontrar o componente pelo valor do accessibility
    const component = getByTestId('accessibility-label');
    expect(component).toBeTruthy();
  });

  it('should use accessibilityLabel if provided', () => {
    const { getByA11yLabel } = render(
      <ThemeProvider theme={theme}>
        <Touchable 
          id="testing" 
          accessibility=""
          accessibilityLabel="custom-a11y-label" 
        />
      </ThemeProvider>,
    );

    // Deve encontrar o componente pelo accessibilityLabel personalizado
    const component = getByA11yLabel('custom-a11y-label');
    expect(component).toBeTruthy();
  });
});
