import { InteractionManager } from 'react-native';
import { renderHook } from '@testing-library/react-native';
import { useAutoFocus, usePrevious } from '../hooks';

// Mock do InteractionManager
jest.mock('react-native', () => ({
  InteractionManager: {
    runAfterInteractions: jest.fn().mockImplementation(async (callback) => {
      if (callback) await callback();
      return { cancel: jest.fn() };
    }),
  },
}));

describe('Hooks utilitários', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('usePrevious', () => {
    it('deve retornar undefined na primeira renderização', () => {
      const { result } = renderHook(() => usePrevious('test'));
      expect(result.current).toBeUndefined();
    });

    it('deve retornar o valor anterior depois de uma atualização', () => {
      const { result, rerender } = renderHook(
        ({ value }) => usePrevious(value),
        {
          initialProps: { value: 'initial' },
        },
      );

      expect(result.current).toBeUndefined();

      rerender({ value: 'updated' });
      expect(result.current).toBe('initial');
    });

    it('deve manter o histórico ao receber múltiplos valores', () => {
      const { result, rerender } = renderHook(
        ({ value }) => usePrevious(value),
        {
          initialProps: { value: 'first' },
        },
      );

      rerender({ value: 'second' });
      expect(result.current).toBe('first');

      rerender({ value: 'third' });
      expect(result.current).toBe('second');
    });
  });

  describe('useAutoFocus', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    it('não deve chamar focus quando autoFocus é false', () => {
      const focusMock = jest.fn();
      const inputRef = {
        current: {
          _inputElement: {
            current: {
              focus: focusMock,
            },
          },
        },
      };

      renderHook(() => useAutoFocus(false, inputRef));

      expect(focusMock).not.toHaveBeenCalled();
      expect(InteractionManager.runAfterInteractions).not.toHaveBeenCalled();
    });

    it('deve chamar focus quando autoFocus é true', () => {
      const focusMock = jest.fn();
      const inputRef = {
        current: {
          _inputElement: {
            current: {
              focus: focusMock,
            },
          },
        },
      };

      renderHook(() => useAutoFocus(true, inputRef));

      expect(focusMock).toHaveBeenCalled();
      expect(InteractionManager.runAfterInteractions).toHaveBeenCalled();
    });

    it('deve retornar o inputRef passado', () => {
      const inputRef = {
        current: {
          _inputElement: {
            current: {},
          },
        },
      };
      const { result } = renderHook(() => useAutoFocus(false, inputRef));

      expect(result.current).toBe(inputRef);
    });

    it('não deve apresentar erro se inputRef for undefined', () => {
      // Limpa as chamadas anteriores para garantir que possamos verificar apenas as chamadas deste teste
      jest.clearAllMocks();

      // Quando inputRef é undefined, NÃO deve chamar runAfterInteractions
      // conforme implementação da função useAutoFocus que verifica autoFocus && inputRef
      renderHook(() => useAutoFocus(true, undefined));

      // O InteractionManager NÃO é chamado quando inputRef é undefined
      expect(InteractionManager.runAfterInteractions).not.toHaveBeenCalled();

      // Verificamos que o hook retorna o inputRef original (undefined)
      const { result } = renderHook(() => useAutoFocus(true, undefined));
      expect(result.current).toBeUndefined();
    });

    it('não deve causar erro se inputRef.current for null', () => {
      const inputRef = { current: null };
      renderHook(() => useAutoFocus(true, inputRef));
      expect(InteractionManager.runAfterInteractions).not.toHaveBeenCalled();
    });

    it('não deve causar erro se inputRef.current._inputElement for null', () => {
      const inputRef = { current: { _inputElement: null } };
      renderHook(() => useAutoFocus(true, inputRef));
      expect(InteractionManager.runAfterInteractions).not.toHaveBeenCalled();
    });

    it('não deve causar erro se inputRef.current._inputElement.current for null', () => {
      const inputRef = { current: { _inputElement: { current: null } } };
      renderHook(() => useAutoFocus(true, inputRef));
      expect(InteractionManager.runAfterInteractions).not.toHaveBeenCalled();
    });

    it('não deve chamar runAfterInteractions quando autoFocus é false e inputRef é null', () => {
      renderHook(() => useAutoFocus(false, null));
      expect(InteractionManager.runAfterInteractions).not.toHaveBeenCalled();
    });

    it('não deve chamar runAfterInteractions quando autoFocus é false e inputRef.current é null', () => {
      const inputRef = { current: null };
      renderHook(() => useAutoFocus(false, inputRef));
      expect(InteractionManager.runAfterInteractions).not.toHaveBeenCalled();
    });

    it('não deve chamar runAfterInteractions quando autoFocus é false e inputRef.current._inputElement é null', () => {
      const inputRef = { current: { _inputElement: null } };
      renderHook(() => useAutoFocus(false, inputRef));
      expect(InteractionManager.runAfterInteractions).not.toHaveBeenCalled();
    });

    it('não deve chamar runAfterInteractions quando autoFocus é false e inputRef.current._inputElement.current é null', () => {
      const inputRef = { current: { _inputElement: { current: null } } };
      renderHook(() => useAutoFocus(false, inputRef));
      expect(InteractionManager.runAfterInteractions).not.toHaveBeenCalled();
    });
  });
});
