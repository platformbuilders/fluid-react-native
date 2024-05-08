import { RefObject } from 'react';
import { KeyboardTypeOptions, TextInput, TextInputProps } from 'react-native';

import { TypographyVariants } from '@platformbuilders/theme-toolkit';

import { HitSlopType } from './Common';
import { IconFonts } from './IconType';

type TextInputMaskTypeProp =
  | 'document'
  | 'credit-card'
  | 'cpf'
  | 'cnpj'
  | 'zip-code'
  | 'only-numbers'
  | 'money'
  | 'cel-phone'
  | 'datetime'
  | 'no-mask'
  | 'custom'
  | 'uppercase';

export type TextInputTypeRef = { _inputElement: RefObject<TextInput> };

export type TextInputType = {
  id: string;
  accessibility: string;
  inputRef?: any;
  options?: any;
  ref?: RefObject<any>;
  variant?: any;
  large?: boolean;
  withBottomline?: boolean;
  contrast?: boolean;
  centered?: boolean;
  iconSets?: any;
  iconSize?: number;
  iconTouchableEnabled?: boolean;
  textStyle?: any;
  labelStyle?: any;
  rootStyle?: any;
  errorStyle?: any;
  maskType?: TextInputMaskTypeProp;
  label?: string;
  iconName?: string;
  status?: string;
  error?: string | boolean;
  iconHitSlop?: HitSlopType;
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
  focusBorderedColor?: string;
  borderedRadius?: number;
  borderedWidth?: number;
  iconNameBordered?: string;
  fixedLabelVariant?: any;
  rightIconName?: string;
  leftIconName?: string;
  iconType?: IconFonts;
  suppressAnimation?: boolean;
  iconLeftPadding?: number;
  iconRightPadding?: number;
  inputLeftPadding?: number;
  inputRightPadding?: number;
  borderedLabel?: string;
  showBorderErrored?: boolean;
  showIconErrored?: boolean;
  hidePlaceholderOnFocus?: boolean;
  animationValues?: {
    upper: any;
    lower: any;
  };
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
  wrapperStyle?: any;
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
