//SmoothPinCodeInput.d.ts
declare module 'react-native-smooth-pincode-input'{
  import { ReactElement, Component } from 'react';
  import { StyleProp, ViewStyle,TextStyle,TextInputProps, ViewProps } from 'react-native';
  type SmoothPinCodeInputProps = {
    value?: string;
    codeLength?: number;
    cellSize?: number;
    cellSpacing?: number;
    placeholder?: string | ReactElement;
    mask?: string | ReactElement;
    maskDelay?: number;
    password?: boolean;
    autoFocus?: boolean;
    restrictToNumbers?: boolean;
    containerStyle?: StyleProp<ViewStyle>;
    cellStyle?: StyleProp<ViewStyle>;
    cellStyleFocused?: StyleProp<ViewStyle>;
    cellStyleFilled?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    textStyleFocused?: StyleProp<TextStyle>;
    animated?: boolean;
    animationFocused?: string | any;
    onFulfill?: (value:string)=>void;
    onChangeText?: TextInputProps['onChangeText'];
    onBackspace?: ()=>void;
    onTextChange?: TextInputProps['onChangeText'];
    testID?: any;
    onFocus?: TextInputProps['onFocus'],
    onBlur?: TextInputProps['onBlur'],
    keyboardType?: string;
    editable?: boolean;
    inputProps?: TextInputProps;
    /**
     * This accessibilityLabel is declared on each cell rendered of pin input,
     * really useful for QAs.
     *
     * #### Example
     * if the given `useAccessibilityLabelWithIndex` is:
     *
     * `useAccessibilityLabelWithIndex = "Insira a sua senha de transação"`
     *
     * The Appium result should look like this
     *
     * `Insira a sua senha de transação index` (there will be the index number in the end)
     *
     * #### Default
     * Default is `Insira o PIN index`
     */
    useAccessibilityLabelWithIndex?: string;
    /**
     * This testID is declared on each cell rendered of pin input,
     * really useful for QAs using iOS.
     *
     * #### Example
     * if the given `useAccessibilityLabelWithIndex` is:
     *
     * `useAccessibilityLabelWithIndex = "Insira a sua senha de transação"`
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

  type SmoothInputSate = {
      maskDelay: boolean,
      focused: boolean,
    }

  export default class SmoothPinCodeInput extends Component<SmoothPinCodeInputProps, SmoothInputSate> {}
}
