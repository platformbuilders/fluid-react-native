import React, { FC } from 'react';
import { SmoothPinCodeInputProps } from 'src/types';
import SmoothPinCodeInput from './SmoothPinCodeInput';

const PinCodeInputLib: FC<SmoothPinCodeInputProps> = (props) => {
  return <SmoothPinCodeInput {...props} />;
};

export default PinCodeInputLib;
