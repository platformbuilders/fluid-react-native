// Adicionando definição para react-native-check-box
declare module 'react-native-check-box' {
  import React from 'react';
  import { StyleProp, ViewStyle } from 'react-native';

  export interface CheckBoxProps {
    style?: StyleProp<ViewStyle>;
    leftText?: string;
    leftTextStyle?: StyleProp<any>;
    rightText?: string;
    rightTextStyle?: StyleProp<any>;
    checkedImage?: React.ReactElement;
    unCheckedImage?: React.ReactElement;
    isChecked: boolean;
    onClick?: (checked: boolean) => void;
    disabled?: boolean;
    checkBoxColor?: string;
    checkedCheckBoxColor?: string;
    uncheckedCheckBoxColor?: string;
    children?: React.ReactNode;
    // Adicione outras props conforme necessário
    importantForAccessibility?: 'yes' | 'no' | 'auto' | 'no-hide-descendants';
  }

  export default class CheckBox extends React.Component<CheckBoxProps> {}
} 