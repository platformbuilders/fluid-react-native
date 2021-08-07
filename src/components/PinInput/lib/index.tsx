/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable prefer-spread */
import React, { useEffect, useState } from 'react';
import {
  I18nManager,
  ImageStyle,
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  Text,
  TextInput,
  TextInputKeyPressEventData,
  TextInputProps,
  TextProps,
  TextStyle,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { DefaultStyles } from './styles';

type Props = {
  value?: string;
  codeLength?: number;
  cellSize?: number;
  cellSpacing?: number;
  placeholder?: string | React.FC;
  mask?: string | React.FC;
  maskDelay?: number;
  password?: boolean;
  autoFocus?: boolean;
  restrictToNumbers?: boolean;
  containerStyle?: ViewProps;
  cellStyle?: ViewProps;
  cellStyleFocused?: ViewProps;
  cellStyleFilled?: ViewProps;
  textStyle?: TextProps;
  textStyleFocused?: TextProps;
  animated?: boolean;
  animationFocused?:
    | string
    | Animatable.CustomAnimation<TextStyle & ViewStyle & ImageStyle>;
  onFulfill?(code: string): void;
  onChangeText?(code: string): void;
  onBackspace?(): void;
  onTextChange?(code: string): void;
  testID?: string;
  onFocus?(): void;
  onBlur?(): void;
  keyboardType?: KeyboardTypeOptions;
  editable?: boolean;
  disableFullscreenUI?: boolean;
  inputProps?: TextInputProps;
  useAccessibilityLabelWithIndex?: string;
  useIndexedTestID?: string;
};

const SmoothPinCodeInput: React.FC<Props> = ({
  value = '',
  codeLength = 4,
  cellSize = 48,
  cellSpacing = 4,
  placeholder = '',
  password = false,
  mask = '*',
  maskDelay = 200,
  keyboardType = 'numeric',
  autoFocus = false,
  restrictToNumbers = false,
  containerStyle = DefaultStyles.containerDefault,
  cellStyle = DefaultStyles.cellDefault,
  cellStyleFocused = DefaultStyles.cellFocusedDefault,
  textStyle = DefaultStyles.textStyleDefault,
  textStyleFocused = DefaultStyles.textStyleFocusedDefault,
  animationFocused = 'pulse',
  animated = true,
  editable = true,
  inputProps = {},
  disableFullscreenUI = true,
  useAccessibilityLabelWithIndex = undefined,
  useIndexedTestID = undefined,
  cellStyleFilled = {},
  onBackspace,
  onBlur,
  onFocus,
  onFulfill,
  onTextChange,
  testID,
}) => {
  const [maskTimeout, setMaskTimeout] = useState<NodeJS.Timeout>();
  const [maskDelayLocal, setMaskDelayLocal] = useState(false);
  const [focused, setFocused] = useState(false);

  const ref = React.createRef<TextInput>();

  const inputRef = React.createRef<TextInput>();

  const _inputCode = (code: string) => {
    // const { password, codeLength = 4, onTextChange, onFulfill } = props;
    if (restrictToNumbers) {
      code = (code.match(/[0-9]/g) || []).join('');
    }
    if (onTextChange) {
      onTextChange(code);
    }
    if (code.length === codeLength && onFulfill) {
      onFulfill(code);
    }
    // handle password mask
    const maskDelayLocalConst = password && code.length > value.length; // only when input new char
    setMaskDelayLocal(maskDelayLocalConst);
    if (maskDelayLocal) {
      // mask password after delay
      if (maskTimeout) clearTimeout(maskTimeout);
      setMaskTimeout(
        setTimeout(() => {
          setMaskDelayLocal(false);
        }, maskDelay),
      );
    }
  };
  const _keyPress = (
    event: NativeSyntheticEvent<TextInputKeyPressEventData>,
  ) => {
    if (event.nativeEvent.key === 'Backspace') {
      // const { value, onBackspace } = props;
      if (value === '' && onBackspace) {
        onBackspace();
      }
    }
  };
  const _onFocused = () => {
    setFocused(true);
    if (typeof onFocus === 'function') {
      onFocus();
    }
  };
  const _onBlurred = () => {
    setFocused(false);
    if (typeof onBlur === 'function') {
      onBlur();
    }
  };
  const useIndexedAccessibilityLabelLocal = (idx: number) => {
    if (typeof useAccessibilityLabelWithIndex === 'string')
      return `${useAccessibilityLabelWithIndex} ${idx}`;
    return `Insira o PIN ${idx}`;
  };
  const useIndexedTestIDLocal = (idx: number) => {
    if (typeof useIndexedTestID === 'string')
      return `${useIndexedTestID} ${idx}`;
    return `Insira o PIN ${idx}`;
  };

  useEffect(() => {
    return () => {
      if (maskTimeout) clearTimeout(maskTimeout);
    };
  }, []);

  return (
    <Animatable.View
      ref={ref}
      style={[
        {
          alignItems: 'stretch',
          flexDirection: 'row',
          justifyContent: 'center',
          position: 'relative',
          width: cellSize * codeLength + cellSpacing * (codeLength - 1),
          height: cellSize,
        },
        containerStyle,
      ]}
    >
      <View
        style={{
          position: 'absolute',
          margin: 0,
          height: '100%',
          flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
          alignItems: 'center',
        }}
      >
        {Array.apply(null, Array(codeLength)).map((_, idx) => {
          const cellFocused = focused && idx === value.length;
          const filled = idx < value.length;
          const last = idx === value.length - 1;
          const showMask = filled && password && (!maskDelayLocal || !last);
          const isPlaceholderText = typeof placeholder === 'string';
          const isMaskText = typeof mask === 'string';
          const pinCodeChar = value.charAt(idx);
          let cellText = null;
          if (filled || placeholder !== null) {
            if (showMask && isMaskText) {
              cellText = mask;
            } else if (!filled && isPlaceholderText) {
              cellText = placeholder;
            } else if (pinCodeChar) {
              cellText = pinCodeChar;
            }
          }
          const placeholderComponent = !isPlaceholderText ? placeholder : null;
          const maskComponent = showMask && !isMaskText ? mask : null;
          const isCellText = typeof cellText === 'string';
          return (
            <Animatable.View
              key={idx}
              style={[
                {
                  width: cellSize,
                  height: cellSize,
                  marginLeft: cellSpacing / 2,
                  marginRight: cellSpacing / 2,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                },
                cellStyle,
                cellFocused ? cellStyleFocused : {},
                filled ? cellStyleFilled : {},
              ]}
              animation={
                idx === value.length && focused && animated
                  ? animationFocused
                  : undefined
              }
              iterationCount="infinite"
              duration={500}
              accessibilityLabel={useIndexedAccessibilityLabelLocal(idx)}
              testID={useIndexedTestIDLocal(idx)}
            >
              {isCellText && !maskComponent && (
                <Text style={[textStyle, cellFocused ? textStyleFocused : {}]}>
                  {cellText}
                </Text>
              )}
              {!isCellText && !maskComponent && placeholderComponent}
              {isCellText && maskComponent}
            </Animatable.View>
          );
        })}
      </View>
      <TextInput
        disableFullscreenUI={disableFullscreenUI}
        value={value}
        ref={inputRef}
        onChangeText={_inputCode}
        onKeyPress={_keyPress}
        onFocus={_onFocused}
        onBlur={_onBlurred}
        spellCheck={false}
        autoFocus={autoFocus}
        keyboardType={keyboardType}
        numberOfLines={1}
        caretHidden
        maxLength={codeLength}
        selection={{
          start: value.length,
          end: value.length,
        }}
        style={{
          flex: 1,
          opacity: 0,
          textAlign: 'center',
        }}
        testID={testID || undefined}
        editable={editable}
        {...inputProps}
      />
    </Animatable.View>
  );
};

export default SmoothPinCodeInput;

//   static defaultProps = {
//     value: '',
//     codeLength: 4,
//     cellSize: 48,
//     cellSpacing: 4,
//     placeholder: '',
//     password: false,
//     mask: '*',
//     maskDelay: 200,
//     keyboardType: 'numeric',
//     autoFocus: false,
//     restrictToNumbers: false,
//     containerStyle: styles.containerDefault,
//     cellStyle: styles.cellDefault,
//     cellStyleFocused: styles.cellFocusedDefault,
//     textStyle: styles.textStyleDefault,
//     textStyleFocused: styles.textStyleFocusedDefault,
//     animationFocused: 'pulse',
//     animated: true,
//     editable: true,
//     inputProps: {},
//     disableFullscreenUI: true,
//     useAccessibilityLabelWithIndex: undefined,
//     useIndexedTestID: undefined,
//   };
// }
// SmoothPinCodeInput.propTypes = {
//   value: PropTypes.string,
//   codeLength: PropTypes.number,
//   cellSize: PropTypes.number,
//   cellSpacing: PropTypes.number,
//   placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
//   mask: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
//   maskDelay: PropTypes.number,
//   password: PropTypes.bool,
//   autoFocus: PropTypes.bool,
//   restrictToNumbers: PropTypes.bool,
//   containerStyle: ViewPropTypes.style,
//   cellStyle: ViewPropTypes.style,
//   cellStyleFocused: ViewPropTypes.style,
//   cellStyleFilled: ViewPropTypes.style,
//   textStyle: Text.propTypes.style,
//   textStyleFocused: Text.propTypes.style,
//   animated: PropTypes.bool,
//   animationFocused: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
//   onFulfill: PropTypes.func,
//   onChangeText: PropTypes.func,
//   onBackspace: PropTypes.func,
//   onTextChange: PropTypes.func,
//   testID: PropTypes.any,
//   onFocus: PropTypes.func,
//   onBlur: PropTypes.func,
//   keyboardType: PropTypes.string,
//   editable: PropTypes.bool,
//   inputProps: PropTypes.exact(TextInput.propTypes),
//   useAccessibilityLabelWithIndex: PropTypes.string,
//   useIndexedTestID: PropTypes.string,
