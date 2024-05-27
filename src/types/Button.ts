import { PropsWithChildren } from 'react';

import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import {
  ButtonColorType,
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
    colorVariant?: ButtonColorType;
    typographyVariant?: TypographyVariants;
    minWidth?: string | number;
    maxWidth?: string | number;
    leftIconName?: string;
    rightIconName?: string;
    leftIconTouchable?: boolean;
    rightIconTouchable?: boolean;
  } & TouchableType
>;
