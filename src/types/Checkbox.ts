import { ReactElement } from 'react';
import { StyleProp, TextStyle } from 'react-native';

export type CheckBoxType = {
  id?: string;
  testID?: string;
  accessibility?: string;
  checked?: boolean;
  label?: ReactElement | string;
  error?: string;
  onPress?(): void;
  labelStyle?: StyleProp<TextStyle>;
  checkBoxColor?: string | number;
  checkedCheckBoxColor?: string;
  uncheckedCheckBoxColor?: string;
};
