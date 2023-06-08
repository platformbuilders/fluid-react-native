import React from 'react';
import { InteractionManager } from 'react-native';

export const usePrevious = <T>(value: T): T | undefined => {
  const ref = React.useRef<T>();
  React.useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

export const useAutoFocus = (autoFocus = false, inputRef: any) => {
  React.useEffect(() => {
    if (autoFocus && inputRef) {
      InteractionManager.runAfterInteractions(() => {
        inputRef?.current?.focus();
      });
    }
  }, [autoFocus, inputRef]);

  return inputRef;
};
