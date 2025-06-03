import React, { FC, useEffect, useRef } from 'react';
import { TextInput } from 'react-native';
import { InputStatus } from '../../../enums';
import { MaskedTextInputType } from '../../../types';
import { TextInputMask } from 'react-native-masked-text';
import { TextInput as TextInputStyle } from '../styles';
import styled from 'styled-components/native';

const SUPPORTED_MASKS = [
  'cpf',
  'cnpj',
  'zip-code',
  'only-numbers',
  'cel-phone',
  'datetime',
  'credit-card',
  'custom',
  'money',
];

const isValidMask = (maskType?: string) =>
  !!maskType && SUPPORTED_MASKS.includes(maskType);

const StyledInput = styled(TextInputMask as any)`
  ${(TextInputStyle as any).componentStyle?.rules || ''}
`;

const StyledTextInput = styled(TextInput as any)`
  ${(TextInputStyle as any).componentStyle?.rules || ''}
`;

const MaskedTextInput: FC<MaskedTextInputType> = ({
  maskType,
  inputRef,
  id,
  accessibility,
  contrast = false,
  multiline = false,
  status = InputStatus.Default,
  autoFocus = false,
  ...props
}) => {
  const internalRef = useRef<any>(null);
  const refToUse = inputRef || internalRef;

  useEffect(() => {
    if (autoFocus && refToUse.current) {
      if (
        typeof refToUse.current.getElement === 'function' &&
        refToUse.current.getElement() &&
        typeof refToUse.current.getElement().focus === 'function'
      ) {
        refToUse.current.getElement().focus();
      }
      else if (
        refToUse.current._inputElement &&
        typeof refToUse.current._inputElement.focus === 'function'
      ) {
        refToUse.current._inputElement.focus();
      }
      else if (typeof refToUse.current.focus === 'function') {
        refToUse.current.focus();
      }
    }
  }, [autoFocus, refToUse]);

  if (isValidMask(maskType)) {
    return (
      <StyledInput
        {...props}
        style={props.style}
        autoFocus={autoFocus}
        id={id || accessibility}
        status={status}
        accessibility={accessibility}
        testID={id || accessibility}
        accessibilityLabel={accessibility}
        inputRef={refToUse}
        contrast={contrast}
        multiline={multiline}
        type={maskType}
        underlineColorAndroid="transparent"
        ref={refToUse}
      />
    );
  }
  return (
    <StyledTextInput
      {...props}
      style={props.style}
      autoFocus={autoFocus}
      id={id || accessibility}
      status={status}
      accessibility={accessibility}
      testID={id || accessibility}
      accessibilityLabel={accessibility}
      ref={refToUse}
      contrast={contrast}
      multiline={multiline}
      underlineColorAndroid="transparent"
    />
  );
};

export default MaskedTextInput;
