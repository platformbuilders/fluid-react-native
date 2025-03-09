import { PropsWithChildren } from 'react';

import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import {
  ButtonColorType,
  TypographyVariants,
} from '@platformbuilders/theme-toolkit';
import { ButtonVariant } from '../enums';
import { TouchableType } from './TouchableType';

export type ButtonProps = PropsWithChildren<
  {
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    rounded?: boolean;
    loading?: boolean;
    contrast?: boolean;
    flat?: boolean;
    variant?: ButtonVariant | string;
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
