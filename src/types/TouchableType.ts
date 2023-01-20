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
  /**
   * Feature flag for touchable press tracking on Sentry. Internally it uses the `addBreadcrumb`
   * function to trigger the logs.
   *
   * Default is `false`.
   */
  useSentryTraceability?: boolean;
}
