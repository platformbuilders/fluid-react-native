import { PropsWithChildren } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

export type AvoidingViewBehavior =
  | 'height'
  | 'position'
  | 'padding'
  | undefined;

export type KeyboardAvoidingViewProps = PropsWithChildren<{
  style?: StyleProp<ViewStyle>;
  behavior?: AvoidingViewBehavior;
  enabled?: boolean;
  keyboardOffset?: number;
}>;
