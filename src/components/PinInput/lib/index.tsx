import React, { FC } from 'react';
import { SmoothPinCodeInputProps } from 'src/types';
import SmoothPinCodeInput from './SmoothPinCodeInput';

const DefaultCodeInput: FC<SmoothPinCodeInputProps> = (props) => {
  return <SmoothPinCodeInput {...props} />;
};

export default DefaultCodeInput;
