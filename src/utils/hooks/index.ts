import React from 'react';
import { InteractionManager } from 'react-native';

export const usePrevious = <T>(value: T): T | undefined => {
  const ref = React.useRef<T>();
  React.useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

export const useAutoFocus = (autoFocus = false) => {
  const inputRef = React.useRef<any>(null);

  React.useEffect(() => {
    if (autoFocus && inputRef.current) {
      InteractionManager.runAfterInteractions(() => {
        inputRef.current?.focus();
      });
    }
  }, [autoFocus, inputRef]);

  return inputRef;
};
