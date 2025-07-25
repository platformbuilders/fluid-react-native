declare module 'react-native-check-box' {
  import { ReactElement } from 'react';
  import { StyleProp, TextStyle, ViewStyle } from 'react-native';

  export type CheckboxProps = {
    style?: StyleProp<ViewStyle>;
    leftText?: ReactElement | string;
    leftTextStyle?: StyleProp<TextStyle>;
    leftTextView?: React.ReactNode;
    rightText?: ReactElement | string;
    rightTextStyle?: StyleProp<TextStyle>;
    rightTextView?: React.ReactNode;
    checkedImage?: React.ReactElement;
    unCheckedImage?: React.ReactElement;
    isChecked: boolean;
    onClick: () => void;
    disabled?: boolean;
    checkBoxColor?: string;
    checkedCheckBoxColor?: string;
    uncheckedCheckBoxColor?: string;
  };

}
