import React, { FC } from 'react';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import { SmoothPinCodeInputProps } from 'src/types';

const DefaultCodeInput: FC<SmoothPinCodeInputProps> = (props) => {
  return <SmoothPinCodeInput {...props} />;
};

export default DefaultCodeInput;
