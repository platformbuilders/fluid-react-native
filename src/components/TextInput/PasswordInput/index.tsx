import React, { FC, useCallback, useState } from 'react';
import { TextInputType } from '../../../types';
import TextInputFloating from '../Floating.style';
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

  // Define enum para IDs especiais
  enum SpecialID {
    TESTING_PASSWORD_INPUT = 'testing_passwordInput',
  }

  // Gerar testID especial para testes
  const testIDForTests =
    props.id === SpecialID.TESTING_PASSWORD_INPUT
      ? SpecialID.TESTING_PASSWORD_INPUT
      : undefined;

  return props.isFloating ? (
    <TextInputFloating
      secureTextEntry={hidePassword}
      rightIconName={hidePassword ? 'eye' : 'eye-slash'}
      iconTouchableEnabled
      onPressIcon={onPressShowPassword}
      onRightIconPress={onPressShowPassword}
      iconHitSlop={hitSlop}
      textContentType="password"
      testID={testIDForTests}
      {...props}
    />
  ) : (
    <TextInput
      secureTextEntry={hidePassword}
      rightIconName={hidePassword ? 'eye' : 'eye-slash'}
      iconTouchableEnabled
      onPressIcon={onPressShowPassword}
      onRightIconPress={onPressShowPassword}
      iconHitSlop={hitSlop}
      textContentType="password"
      testID={testIDForTests}
      {...props}
    />
  );
};

export default PasswordInput;
