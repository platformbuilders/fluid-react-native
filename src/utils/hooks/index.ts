import React from 'react';
import { InteractionManager } from 'react-native';

export const usePrevious = <T>(value: T): T | undefined => {
  const ref = React.useRef<T>();
  React.useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

export const useAutoFocus = (
  autoFocus = false,
  inputRef = React.useRef<any>(null),
) => {
  React.useEffect(() => {
    if (autoFocus && inputRef.current) {
      InteractionManager.runAfterInteractions(() => {
        // Para TextInputMask
        if (
          typeof inputRef.current.getElement === 'function' &&
          inputRef.current.getElement() &&
          typeof inputRef.current.getElement().focus === 'function'
        ) {
          inputRef.current.getElement().focus();
        }
        // Fallback para _inputElement
        else if (
          inputRef.current._inputElement &&
          typeof inputRef.current._inputElement.focus === 'function'
        ) {
          inputRef.current._inputElement.focus();
        }
        // Para TextInput nativo
        else if (typeof inputRef.current.focus === 'function') {
          inputRef.current.focus();
        }
      });
    }
  }, [autoFocus, inputRef]);

  return inputRef;
};
