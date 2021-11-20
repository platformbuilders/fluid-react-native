import { RefObject } from 'react';
import {
  KeyboardTypeOptions,
  StyleProp,
  TextInputProps,
  TextStyle,
  ViewStyle,
} from 'react-native';

import { TextInputMaskTypeProp } from '../components/MaskedText';

import { HitSlopType } from './Common';
import { FontType } from './IconType';
import { TypographyVariants } from './theme_types/Variants';

export type TextInputType = {
  id: string;
  accessibility: string;
  inputRef?: any;
  options?: any;
  ref?: RefObject<any>;
  variant?: TypographyVariants;
  large?: boolean;
  withBottomline?: boolean;
  contrast?: boolean;
  centered?: boolean;
  iconSize?: number;
  iconTouchableEnabled?: boolean;
  textStyle?: StyleProp<TextStyle>;
  maskType?: TextInputMaskTypeProp;
  label?: string;
  iconName?: string;
  status?: string;
  error?: string | boolean;
  iconHitSlop?: HitSlopType;
  labelStyle?: any;
  isPlaceholder?: boolean;
  onPressIcon?(arg?: any): void;
  onBlur?(x?: any): void;
  onFocus?(x?: any): void;
  onSubmitEditing?(x?: any): void;
  onRightIconPress?(x?: any): void;
  placeholderTextColor?: string;
  leftIconColor?: string;
  iconColor?: string;
  inputPadding?: number;
  borderedBackgroundColor?: string;
  borderedHeight?: number;
  borderedColor?: string;
  borderedRadius?: number;
  iconNameBordered?: string;
  fixedLabelVariant?: TypographyVariants;
  rightIconName?: string;
  leftIconName?: string;
  iconType?: FontType;
  suppressAnimation?: boolean;
  iconLeftPadding?: number;
  iconRightPadding?: number;
  inputLeftPadding?: number;
  inputRightPadding?: number;
  borderedLabel?: string;
  showBorderErrored?: boolean;
  showIconErrored?: boolean;
} & TextInputProps;

export interface MaskedTextInputType extends TextInputType {
  maskType: TextInputMaskTypeProp;
}

export interface PinInputType {
  onChangeText: (text: string) => void;
  id?: string;
  accessibility?: string;
  keyboardAppearance?: 'default' | 'light' | 'dark';
  caption?: string;
  value?: string;
  onFulfill?(text: string): void;
  onBackspace?(): void;
  password?: boolean;
  autoFocus?: boolean;
  editable?: boolean;
  animated?: boolean;
  centered?: boolean;
  restrictToNumbers?: boolean;
  iconSize?: number;
  cellSpacing?: number;
  codeLength?: number;
  cellSize?: number;
  contrast?: boolean;
  placeholder?: string;
  error?: string | boolean;
  mask?: string | JSX.Element;
  maskDelay?: number;
  cellStyle?: any;
  cellStyleFocused?: any;
  textStyle?: any;
  textStyleFocused?: any;
  wrapperStyle?: StyleProp<ViewStyle>;
  keyboardType?: KeyboardTypeOptions;
  inputProps?: TextInputProps;
  labelStyle?: any;
  borderedLabel?: string;
  fixedLabelVariant?: TypographyVariants;
  /**
   * This accessibilityLabel is declared on each cell rendered of pin input,
   * really useful for QAs.
   *
   * #### Example
   * if the given `useIndexedAccessibilityLabel` is:
   *
   * `useIndexedAccessibilityLabel = "Insira a sua senha de transação"`
   *
   * The Appium result should look like this
   *
   * `Insira a sua senha de transação index` (there will be the index number in the end)
   *
   * #### Default
   * Default is `Insira o PIN index`
   */
  useIndexedAccessibilityLabel?: string;
  /**
   * This testID is declared on each cell rendered of pin input,
   * really useful for QAs using iOS.
   *
   * #### Example
   * if the given `useIndexedTestID` is:
   *
   * `useIndexedTestID = "Insira a sua senha de transação"`
   *
   * The Appium result should look like this
   *
   * `Insira a sua senha de transação index` (there will be the index number in the end)
   *
   * #### Default
   * Default is `Insira o PIN index`
   */
  useIndexedTestID?: string;
}
