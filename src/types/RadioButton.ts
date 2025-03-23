import { StyleProp, TextStyle } from 'react-native';

export type RadioButtonType = {
  id?: string;
  accessibility: string;
  accessibilityLabel?: string;
  testID?: string;
  radioButtonColor?: string;
  checkedRadioButtonColor?: string;
  size?: number;
  internalSize?: number;
  checked?: boolean;
  disabled?: boolean;
  onPress?(): void;
  label?: string;
  labelStyle?: StyleProp<TextStyle>;
};
