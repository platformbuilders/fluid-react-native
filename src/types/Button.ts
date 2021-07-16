import { ReactNode } from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { TouchableType } from './TouchableType';
import { ButtonVariants, TypographyVariants } from './Variants';

export type ButtonProps = {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  rounded?: boolean;
  loading?: boolean;
  contrast?: boolean;
  variant?: ButtonVariants;
  typographyVariant?: TypographyVariants;
  children?: string | ReactNode;
  minWidth?: string | number;
  maxWidth?: string | number;
  leftIconColor?: string;
  leftIconName?: string;
  rightIconName?: string;
  rightIconColor?: string;
} & TouchableType;
