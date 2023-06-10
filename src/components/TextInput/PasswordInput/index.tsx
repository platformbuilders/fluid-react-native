import React, { FC, useCallback, useState } from 'react';
import { TextInputType } from '../../../types';
import TextInput from '../index';

const PasswordInput: FC<TextInputType> = (props) => {
  const [hidePassword, setHidePassword] = useState<boolean>(true);
  const hitSlop = {
    left: 25,
    right: 25,
    top: 25,
    bottom: 25,
  };

  const onPressShowPassword = useCallback((): void => {
    setHidePassword(!hidePassword);
  }, [hidePassword]);

  return (
    <TextInput
      secureTextEntry={hidePassword}
      rightIconName={hidePassword ? 'eye' : 'eye-slash'}
      iconTouchableEnabled
      onPressIcon={onPressShowPassword}
      onRightIconPress={onPressShowPassword}
      iconHitSlop={hitSlop}
      {...props}
    />
  );
};

export default PasswordInput;
