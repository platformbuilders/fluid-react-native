import { PropsWithChildren } from 'react';
import { HapticFeedbackTypes } from 'react-native-haptic-feedback';

export type TouchableType = PropsWithChildren<{
  id?: string;
  accessibility: string;
  accessibilityLabel?: string;
  testID?: string;
  disabled?: boolean;
  onPress?: (param: any) => void;
  haptic?: HapticFeedbackTypes;
}>;
