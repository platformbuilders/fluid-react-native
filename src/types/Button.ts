import { ReactNode } from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { ButtonVariants, TypographyVariants } from './theme_types/Variants';
import { TouchableType } from './TouchableType';

export type ButtonProps = {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  rounded?: boolean;
  loading?: boolean;
  contrast?: boolean;
  flat?: boolean;
  variant?: ButtonVariants;
  typographyVariant?: TypographyVariants;
  children?: string | ReactNode;
  minWidth?: string | number;
  maxWidth?: string | number;
  leftIconName?: string;
  rightIconName?: string;
  hasBorder?: boolean;
} & TouchableType;
