import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { TouchableType } from '../../types';
import { generateHaptic, handleSentryTraceability } from '../../utils/helpers';

const CommonTouchable: FC<TouchableType> = ({
  onPress = (): void => {},
  haptic = 'impact',
  disabled = false,
  accessibility,
  accessibilityLabel,
  testID,
  id,
  useSentryTraceability = false,
  ...rest
}) => (
  <TouchableOpacity
    {...rest}
    accessibilityLabel={accessibilityLabel || accessibility}
    testID={testID || id || accessibility}
    disabled={disabled}
    onPress={(e): void => {
      handleSentryTraceability({
        useSentryTraceability,
        category: 'touchable',
        data: {
          id,
          accessibility,
          accessibilityLabel,
          testID,
        },
      });
      generateHaptic(haptic);
      onPress(e);
    }}
  />
);

export default CommonTouchable;
