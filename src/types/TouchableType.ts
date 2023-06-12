import { PropsWithChildren } from 'react';
import { HapticFeedbackType } from 'react-native-haptic';

export type TouchableType = PropsWithChildren<{
  id?: string;
  accessibility: string;
  accessibilityLabel?: string;
  testID?: string;
  disabled?: boolean;
  onPress?: (param: any) => void;
  haptic?: HapticFeedbackType;
}>;
