import { PropsWithChildren } from 'react';

import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import {
  ButtonVariants,
  TypographyVariants,
} from '@platformbuilders/theme-toolkit';
import { TouchableType } from './TouchableType';

export type ButtonProps = PropsWithChildren<
  {
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    rounded?: boolean;
    loading?: boolean;
    contrast?: boolean;
    flat?: boolean;
    variant?: ButtonVariants;
    typographyVariant?: TypographyVariants;
    minWidth?: string | number;
    maxWidth?: string | number;
    leftIconName?: string;
    rightIconName?: string;
    hasBorder?: boolean;
  } & TouchableType
>;
