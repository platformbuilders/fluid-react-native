import { StyleProp, TextStyle } from 'react-native';

export type RadioButtonType = {
  id?: string;
  accessibility: string;
  radioButtonColor?: string;
  checkedRadioButtonColor?: string;
  size?: number;
  internalSize?: number;
  checked?: boolean;
  onPress?(): void;
  label?: string;
  labelStyle?: StyleProp<TextStyle>;
};
