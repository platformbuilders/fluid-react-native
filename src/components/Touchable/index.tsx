import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
// import { generateHaptic } from '@platformbuilders/helpers/native';
import { TouchableType } from '../../types';

const CommonTouchable: FC<TouchableType> = ({
  onPress = (): void => {},

  disabled = false,
  accessibility,
  accessibilityLabel,
  testID,
  id,
  ...rest
}) => (
  <TouchableOpacity
    {...rest}
    accessibilityLabel={accessibilityLabel || accessibility}
    testID={testID || id || accessibility}
    disabled={disabled}
    onPress={(e): void => {
      onPress(e);
    }}
  />
);

export default CommonTouchable;
