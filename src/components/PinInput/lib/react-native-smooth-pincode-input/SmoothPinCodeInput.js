import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { I18nManager, StyleSheet, Text, TextInput, View } from 'react-native';
import * as Animatable from 'react-native-animatable';

const styles = StyleSheet.create({
  containerDefault: {},
  cellDefault: {
    borderColor: 'gray',
    borderWidth: 1,
  },
  cellFocusedDefault: {
    borderColor: 'black',
    borderWidth: 2,
  },
  textStyleDefault: {
    color: 'gray',
    fontSize: 24,
  },
  textStyleFocusedDefault: {
    color: 'black',
  },
});

const SmoothPinCodeInput = React.forwardRef((props, forwardedRef) => {
  const [maskDelay, setMaskDelay] = React.useState(false);
  const [focused, setFocused] = React.useState(false);
  
  const ref = React.useRef();
  const inputRef = React.useRef();
  
  // Clear timeout on unmount
  React.useEffect(() => {
    let maskTimeout;
    return () => {
      clearTimeout(maskTimeout);
    };
  }, []);
  
  const animate = ({ animation = 'shake', duration = 650 }) => {
    if (!props.animated) {
      return new Promise((resolve, reject) =>
        reject(new Error('Animations are disabled')),
      );
    }
    return ref.current[animation](duration);
  };
  
  const shake = () => animate({ animation: 'shake' });
  
  const focus = () => {
    return inputRef.current.focus();
  };
  
  const blur = () => {
    return inputRef.current.blur();
  };
  
  const clear = () => {
    return inputRef.current.clear();
  };
  
  const _inputCode = (code) => {
    const { password, codeLength = 4, onTextChange, onFulfill, value, maskDelay: maskDelayProp } = props;
    
    if (props.restrictToNumbers) {
      code = (code.match(/[0-9]/g) || []).join('');
    }
    
    if (onTextChange) {
      onTextChange(code);
    }
    
    if (code.length === codeLength && onFulfill) {
      onFulfill(code);
    }
    
    // handle password mask
    const newMaskDelay = password && code.length > value.length; // only when input new char
    setMaskDelay(newMaskDelay);
    
    let maskTimeout;
    if (newMaskDelay) {
      // mask password after delay
      clearTimeout(maskTimeout);
      maskTimeout = setTimeout(() => {
        setMaskDelay(false);
      }, maskDelayProp);
    }
  };
  
  const _keyPress = (event) => {
    // Define constantes para teclas especiais
    const KeyTypes = {
      BACKSPACE: 'Backspace'
    };
    
    if (event.nativeEvent.key === KeyTypes.BACKSPACE) {
      const { value, onBackspace } = props;
      if (value === '' && onBackspace) {
        onBackspace();
      }
    }
  };
  
  const _onFocused = () => {
    setFocused(true);
    if (typeof props.onFocus === TypeCheck.FUNCTION) {
      props.onFocus();
    }
  };
  
  const _onBlurred = () => {
    setFocused(false);
    if (typeof props.onBlur === TypeCheck.FUNCTION) {
      props.onBlur();
    }
  };
  
  // Define tipos comuns para validação
  const TypeCheck = {
    STRING: 'string',
    FUNCTION: 'function'
  };
  
  const useIndexedAccessibilityLabel = (idx) => {
    if (typeof props.useIndexedAccessibilityLabel === TypeCheck.STRING)
      return `${props.useIndexedAccessibilityLabel} ${idx}`;
    return `Insira o PIN ${idx}`;
  };
  
  const useIndexedTestID = (idx) => {
    if (typeof props.useIndexedTestID === TypeCheck.STRING)
      return `${props.useIndexedTestID} ${idx}`;
    return `Insira o PIN ${idx}`;
  };
  
  // Expose methods to parent component
  React.useImperativeHandle(forwardedRef, () => ({
    focus,
    blur,
    clear,
    shake,
    animate
  }));
  
  const {
    value,
    codeLength,
    cellSize,
    cellSpacing,
    placeholder,
    password,
    mask,
    autoFocus,
    containerStyle,
    cellStyle,
    cellStyleFocused,
    cellStyleFilled,
    textStyle,
    textStyleFocused,
    keyboardType,
    animationFocused,
    animated,
    testID,
    editable,
    inputProps,
    disableFullscreenUI,
  } = props;
  
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
          const showMask = filled && password && (!maskDelay || !last);
          const isPlaceholderText = typeof placeholder === TypeCheck.STRING;
          const isMaskText = typeof mask === TypeCheck.STRING;
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
          const placeholderComponent = !isPlaceholderText
            ? placeholder
            : null;
          const maskComponent = showMask && !isMaskText ? mask : null;
          const isCellText = typeof cellText === TypeCheck.STRING;
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
                  : null
              }
              iterationCount="infinite"
              duration={500}
              accessibilityLabel={useIndexedAccessibilityLabel(idx)}
              testID={useIndexedTestID(idx)}
            >
              {isCellText && !maskComponent && (
                <Text
                  style={[textStyle, cellFocused ? textStyleFocused : {}]}
                >
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
});

SmoothPinCodeInput.propTypes = {
  value: PropTypes.string,
  codeLength: PropTypes.number,
  cellSize: PropTypes.number,
  cellSpacing: PropTypes.number,
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  mask: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  maskDelay: PropTypes.number,
  password: PropTypes.bool,
  autoFocus: PropTypes.bool,
  restrictToNumbers: PropTypes.bool,
  containerStyle: PropTypes.style,
  cellStyle: PropTypes.style,
  cellStyleFocused: PropTypes.style,
  cellStyleFilled: PropTypes.style,
  textStyle: PropTypes.style,
  textStyleFocused: PropTypes.style,
  animated: PropTypes.bool,
  animationFocused: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onFulfill: PropTypes.func,
  onChangeText: PropTypes.func,
  onBackspace: PropTypes.func,
  onTextChange: PropTypes.func,
  testID: PropTypes.any,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  keyboardType: PropTypes.string,
  editable: PropTypes.bool,
  inputProps: PropTypes.exact(TextInput.propTypes),
  useIndexedAccessibilityLabel: PropTypes.string,
  useIndexedTestID: PropTypes.string,
};

SmoothPinCodeInput.defaultProps = {
  value: '',
  codeLength: 4,
  cellSize: 48,
  cellSpacing: 4,
  placeholder: '',
  password: false,
  mask: '*',
  maskDelay: 200,
  keyboardType: 'numeric',
  autoFocus: false,
  restrictToNumbers: false,
  containerStyle: styles.containerDefault,
  cellStyle: styles.cellDefault,
  cellStyleFocused: styles.cellFocusedDefault,
  textStyle: styles.textStyleDefault,
  textStyleFocused: styles.textStyleFocusedDefault,
  animationFocused: 'pulse',
  animated: true,
  editable: true,
  inputProps: {},
  disableFullscreenUI: true,
  useIndexedAccessibilityLabel: undefined,
  useIndexedTestID: undefined,
};

export default SmoothPinCodeInput;
