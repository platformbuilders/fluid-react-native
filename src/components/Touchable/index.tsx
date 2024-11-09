import React, { FC } from 'react';
import { GestureResponderEvent, TouchableOpacity } from 'react-native';
import Haptic from 'react-native-haptic-feedback';
import { TouchableType } from '../../types';

const CommonTouchable: FC<TouchableType> = ({
  onPress = (): void => {},
  haptic = 'impactLight',
  disabled = false,
  accessibility,
  accessibilityLabel,
  testID,
  id,
  ...rest
}) => {
  const onBasicPress = (event: GestureResponderEvent): void => {
    onPress(event);
    try {
      Haptic.trigger(haptic);
    } catch (error) {}
  };

  return (
    <TouchableOpacity
      {...rest}
      accessibilityLabel={accessibilityLabel || accessibility}
      testID={testID || id || accessibility}
      disabled={disabled}
      onPress={onBasicPress}
    />
  );
};

export default CommonTouchable;
