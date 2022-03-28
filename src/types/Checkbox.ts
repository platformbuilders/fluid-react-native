import { ReactElement } from 'react';
import { StyleProp, TextStyle } from 'react-native';

export type CheckBoxType = {
  id?: string;
  testID?: string;
  accessibility?: string;
  checked?: boolean;
  label?: ReactElement | string;
  labelBefore?: ReactElement | string;
  error?: string;
  onPress?(): void;
  labelStyle?: StyleProp<TextStyle>;
  rightTextStyle?: StyleProp<TextStyle>;
  style?: any;
  checkBoxColor?: string | number;
  checkedCheckBoxColor?: string;
  uncheckedCheckBoxColor?: string;
};
