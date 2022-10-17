import { HapticFeedbackType } from 'react-native-haptic';

export interface TouchableType {
  children?: React.ReactNode;
  id?: string;
  accessibility: string;
  accessibilityLabel?: string;
  testID?: string;
  disabled?: boolean;
  onPress?: (param: any) => void;
  haptic?: HapticFeedbackType;
}
