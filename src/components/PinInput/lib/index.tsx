import React, { ForwardRefRenderFunction, forwardRef } from 'react';
import { SmoothPinCodeInputProps } from 'src/types';
import SmoothPinCodeInput from './react-native-smooth-pincode-input/SmoothPinCodeInput';

const DefaultCodeInputComponent: ForwardRefRenderFunction<
  any,
  SmoothPinCodeInputProps
> = (props, ref) => {
  return <SmoothPinCodeInput {...props} ref={ref} />;
};

const DefaultCodeInput = forwardRef(DefaultCodeInputComponent);

export default DefaultCodeInput;
