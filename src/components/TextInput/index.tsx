import React, { FC, useCallback, useEffect, useState } from 'react';
import { isEmpty } from 'lodash';
import { Animated } from 'react-native';
import { IconFonts, InputStatus } from '../../enums';
import { TextInputType } from '../../types';
import { generateTestID } from '../../utils/accessibility';
import { useAutoFocus, usePrevious } from '../../utils/hooks';
import FormError from '../FormError';
import MaskedTextInput from './MaskedTextInput';
import {
  BorderedWrapper,
  BottomLine,
  FixedLabel,
  FixedLabelAboveBorder,
  Icon,
  InputAreaWrapper,
  InputBorderedAreaWrapper,
  InputBorderedColumnWrapper,
  InputWrapper,
  LABEL_LOWER_STYLE,
  LABEL_UPPER_STYLE,
  RootWrapper,
} from './styles';

const TextInput: FC<TextInputType> = ({
  id,
  accessibility,
  accessibilityLabel,
  testID,
  large = false,
  contrast = false,
  centered = false,
  withBottomline = true,
  multiline = false,
  autoFocus = false,
  allowFontScaling = false,
  keyboardType = 'default',
  iconSize,
  status = InputStatus.Default,
  maskType = null,
  label = '',
  value = '',
  placeholder = '',
  error = '',
  style = {},
  errorStyle = {},
  textStyle = {},
  rootStyle = {},
  labelStyle = {},
  iconHitSlop = {},
  inputRef,
  onBlur = (): any => {},
  onFocus = (): any => {},
  onChangeText = (): any => {},
  onPressIcon = (): any => {},
  onRightIconPress = (): any => {},
  inputLeftPadding,
  inputRightPadding,
  rightIconName,
  leftIconName,
  leftIconColor,
  iconColor,
  inputPadding,
  borderedBackgroundColor,
  borderedHeight,
  borderedColor,
  focusBorderedColor,
  borderedWidth = 1,
  borderedRadius = 0,
  iconType = IconFonts.FontAwesome,
  fixedLabelVariant = 'xs',
  suppressAnimation = true,
  borderedLabel = '',
  showBorderErrored = true,
  iconSets,
  hidePlaceholderOnFocus = false,
  isFloating,
  animationValues = {
    upper: LABEL_UPPER_STYLE,
    lower: LABEL_LOWER_STYLE,
  },
  ...rest
  // eslint-disable-next-line sonarjs/cognitive-complexity
}) => {
  const customRef = useAutoFocus(autoFocus, inputRef);

  const animationInitialValues = {
    top: suppressAnimation
      ? animationValues.upper.top
      : animationValues.lower.top,
    fontSize: suppressAnimation
      ? animationValues.upper.fontSize
      : animationValues.lower.fontSize,
    opacity: suppressAnimation
      ? animationValues.upper.opacity
      : animationValues.lower.opacity,
  };

  const [labelAnimatedStyle] = useState({
    top: new Animated.Value(animationInitialValues.top),
    fontSize: new Animated.Value(animationInitialValues.fontSize),
    opacity: new Animated.Value(animationInitialValues.opacity),
  });

  const [isPlaceholder, setIsPlaceHolder] = useState(
    suppressAnimation ? false : true,
  );

  const [focusBorderColor, setFocusBorderColor] = useState(borderedColor);

  const previousValue = usePrevious<string>(value || '');
  const textVariant = large ? 'lg' : 'md';

  const animateComponent = useCallback(
    (updatedLabelStyle: any): void => {
      const animations = Object.keys(updatedLabelStyle).map((animationProp) =>
        Animated.timing(labelAnimatedStyle[animationProp], {
          toValue: updatedLabelStyle[animationProp],
          duration: 200,
          useNativeDriver: false,
        }),
      );
      Animated.parallel(animations).start();
    },
    [labelAnimatedStyle],
  );

  const animationUp = (): void => {
    animateComponent(animationValues.upper);
  };

  const animationDown = (): void => {
    animateComponent(animationValues.lower);
  };

  const handleOnFocus = (event: any): void => {
    if (isPlaceholder && !suppressAnimation && !hidePlaceholderOnFocus) {
      animationUp();
    }
    if (borderedHeight) {
      setFocusBorderColor(focusBorderedColor);
    }
    setIsPlaceHolder(false);
    onFocus(event);
  };

  const handleOnBlur = (event: any): void => {
    if (
      isEmpty(value) &&
      !isEmpty(label) &&
      !suppressAnimation &&
      !hidePlaceholderOnFocus
    ) {
      setIsPlaceHolder(true);
      animationDown();
    }
    if (isEmpty(label)) {
      setIsPlaceHolder(false);
    }
    if (borderedHeight) {
      setFocusBorderColor(borderedColor);
    }
    onBlur(event);
  };

  const renderTextInput = (inputStatus: string): JSX.Element => {
    const renderPlaceholder =
      isEmpty(value) && !isPlaceholder ? placeholder : '';

    const textInputProps = {
      inputRef: customRef,
      id,
      accessibility,
      accessibilityLabel,
      testID,
      large,
      variant: textVariant,
      centered,
      contrast,
      withBottomline,
      multiline,
      value,
      keyboardType,
      onChangeText,
      onRightIconPress,
      allowFontScaling,
      isPlaceholder,
      status: inputStatus,
      placeholder: renderPlaceholder,
      style: textStyle,
      onBlur: handleOnBlur,
      onFocus: handleOnFocus,
      underlineColorAndroid: 'transparent',
      autoFocus,
      ...rest,
    };
    return (
      <MaskedTextInput
        {...textInputProps}
        maskType={maskType || 'no-mask'}
        accessibilityLabel={
          accessibilityLabel ||
          label ||
          accessibility ||
          placeholder ||
          'Text input'
        }
        accessibilityRole="text"
        accessibilityHint={
          hasError
            ? (() => {
                // Define tipos para verificação
                const TypeCheck = {
                  STRING: 'string',
                } as const;

                return typeof error === TypeCheck.STRING
                  ? (error as string)
                  : 'Error';
              })()
            : placeholder || 'Enter text'
        }
        accessibilityState={{
          disabled: rest.editable === false,
        }}
        accessibilityLiveRegion="polite"
        testID={generateTestID('input', id || accessibility || 'input')}
      />
    );
  };

  const setAnimation = () => {
    const wasEmpty = previousValue?.length === 0;
    if (
      value?.length &&
      wasEmpty &&
      !suppressAnimation &&
      !hidePlaceholderOnFocus
    ) {
      animationUp();
    }
    if (isEmpty(label) || (value?.length && hidePlaceholderOnFocus)) {
      setIsPlaceHolder(false);
    }
  };

  useEffect(() => {
    setAnimation();
  }, [value, previousValue]);

  const hasError = !isEmpty(error);
  const renderStatus = hasError ? InputStatus.Danger : status;

  return (
    <RootWrapper style={[rootStyle]}>
      {label && !borderedHeight && (
        <FixedLabel
          variant={fixedLabelVariant}
          style={labelStyle}
          hasLeftIcon={!!leftIconName}
        >
          {label}
        </FixedLabel>
      )}
      <InputWrapper style={style}>
        {borderedHeight ? (
          <BorderedWrapper
            testID="bordered-wrapper"
            borderedBackgroundColor={borderedBackgroundColor}
            borderedColor={focusBorderColor}
            borderedHeight={borderedHeight}
            borderedRadius={borderedRadius}
            borderedWidth={borderedWidth}
            error={!!error}
            showBorderErrored={showBorderErrored}
            isFloating={isFloating}
          >
            <InputBorderedAreaWrapper hasBottomLine={withBottomline}>
              {leftIconName && (
                <Icon
                  name={leftIconName}
                  size={iconSize}
                  color={leftIconColor}
                  type={iconType}
                  iconSets={iconSets}
                  onPress={onPressIcon}
                  hitSlop={iconHitSlop}
                  testID={generateTestID('icon', leftIconName)}
                />
              )}
              <InputBorderedColumnWrapper
                hasLeftIcon={!!leftIconName}
                isFloating={isFloating}
                padding={inputPadding}
              >
                {borderedLabel && (
                  <FixedLabelAboveBorder style={labelStyle}>
                    {borderedLabel}
                  </FixedLabelAboveBorder>
                )}
                {renderTextInput(renderStatus)}
              </InputBorderedColumnWrapper>
              {rightIconName && (
                <Icon
                  name={rightIconName}
                  size={iconSize}
                  color={iconColor}
                  type={iconType}
                  iconSets={iconSets}
                  onPress={onRightIconPress}
                  hitSlop={iconHitSlop}
                  testID={generateTestID('icon', rightIconName)}
                />
              )}
            </InputBorderedAreaWrapper>
          </BorderedWrapper>
        ) : (
          <InputAreaWrapper
            padding={inputPadding}
            inputRightPadding={inputRightPadding}
            inputLeftPadding={inputLeftPadding}
            rightIcon={!!rightIconName}
            leftIcon={!!leftIconName}
          >
            {leftIconName && (
              <Icon
                name={leftIconName}
                size={iconSize}
                color={leftIconColor}
                type={iconType}
                iconSets={iconSets}
                onPress={onPressIcon}
                hitSlop={iconHitSlop}
                testID={generateTestID('icon', leftIconName)}
              />
            )}
            {renderTextInput(renderStatus)}
            {rightIconName && (
              <Icon
                name={rightIconName}
                size={iconSize}
                color={iconColor}
                type={iconType}
                iconSets={iconSets}
                onPress={onRightIconPress}
                hitSlop={iconHitSlop}
                testID={generateTestID('icon', rightIconName)}
              />
            )}
          </InputAreaWrapper>
        )}
        {withBottomline && <BottomLine contrast={contrast} status={status} />}
      </InputWrapper>
      {error && <FormError error={error} style={errorStyle} />}
    </RootWrapper>
  );
};

export default TextInput;
