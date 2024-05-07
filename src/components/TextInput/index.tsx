import React, { VFC, useCallback, useEffect, useState } from 'react';
import { isEmpty } from 'lodash';
import { Animated } from 'react-native';
import { IconFonts, InputStatus } from '../../enums';
import { TextInputType } from '../../types';
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
  Label,
  RootWrapper,
} from './styles';

const TextInput: VFC<TextInputType> = ({
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
  iconTouchableEnabled = false,
  status = InputStatus.Default,
  maskType = null,
  iconNameBordered = '',
  iconName,
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
  showIconErrored = true,
  iconSets,
  hidePlaceholderOnFocus = false,
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
  };

  const [labelAnimatedStyle] = useState({
    top: new Animated.Value(animationInitialValues.top),
    fontSize: new Animated.Value(animationInitialValues.fontSize),
  });
  const [isPlaceholder, setIsPlaceHolder] = useState(
    suppressAnimation ? false : true,
  );

  const [focusBorderColor, setFocusBorderColor] = useState(borderedColor);

  const previousValue = usePrevious<string>(value || '');
  const labelVariant = large ? 'md' : 'xs';
  const textVariant = large ? 'lg' : 'md';
  const placeholderVariant = large ? 'lg' : 'md';

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
        accessibilityLabel={accessibilityLabel || accessibility}
        testID={testID || id || accessibility}
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
  const icon = iconName;
  const iconBordered = iconNameBordered;
  const renderStatus = hasError ? InputStatus.Danger : status;

  const renderIcon = (iconProp: string, isLeft?: boolean) => (
    <Icon
      testID={`icon_${iconProp || ''}`}
      type={iconType}
      id={`id_${iconProp}`}
      accessibility={`icon_${accessibility}`}
      size={iconSize}
      name={iconProp || ''}
      contrast={contrast}
      error={hasError}
      touchable={iconTouchableEnabled}
      onPress={!!rightIconName ? onRightIconPress : onPressIcon}
      hitSlop={iconHitSlop}
      iconColor={isLeft ? leftIconColor : iconColor}
      showIconErrored={showIconErrored}
      iconSets={iconSets}
    />
  );
  return (
    <RootWrapper style={rootStyle}>
      <FormError
        id={id || accessibility}
        accessibility={accessibility}
        centered={centered}
        error={error}
        large={large}
        style={errorStyle}
      >
        <InputWrapper style={style} multiline={multiline}>
          <BorderedWrapper
            borderedBackgroundColor={borderedBackgroundColor}
            borderedHeight={borderedHeight}
            borderedColor={focusBorderColor}
            borderedRadius={borderedRadius}
            borderedWidth={borderedWidth}
            error={hasError}
            showBorderErrored={showBorderErrored}
          >
            {!centered &&
              !borderedHeight &&
              !(hidePlaceholderOnFocus && !isPlaceholder) && (
                <Label
                  status={status}
                  contrast={contrast}
                  style={[labelAnimatedStyle, labelStyle]}
                  variant={isPlaceholder ? placeholderVariant : labelVariant}
                  testID={`error_${id || accessibility}`}
                  accessibilityLabel={`Erro ${accessibility}`}
                >
                  {label}
                </Label>
              )}
            {!isEmpty(borderedLabel) && isEmpty(label) && !!borderedHeight && (
              <FixedLabelAboveBorder
                style={labelStyle}
                variant={fixedLabelVariant}
              >
                {borderedLabel}
              </FixedLabelAboveBorder>
            )}
            {borderedHeight ? (
              <InputBorderedAreaWrapper hasBottomLine={withBottomline}>
                {!!leftIconName && renderIcon(leftIconName, true)}
                {!isEmpty(iconBordered) && renderIcon(iconBordered, true)}
                <InputBorderedColumnWrapper
                  hasLeftIcon={!isEmpty(iconBordered)}
                  multiline={multiline}
                  padding={inputPadding}
                >
                  {!isEmpty(label) && isEmpty(borderedLabel) && (
                    <FixedLabel
                      hasLeftIcon={!isEmpty(iconBordered)}
                      style={
                        fixedLabelVariant === 'animated'
                          ? [labelAnimatedStyle, labelStyle]
                          : labelStyle
                      }
                      variant={fixedLabelVariant}
                    >
                      {label}
                    </FixedLabel>
                  )}
                  {renderTextInput(renderStatus)}
                </InputBorderedColumnWrapper>
                {!!rightIconName && renderIcon(rightIconName)}
                {!isEmpty(icon) && renderIcon(icon || '')}
              </InputBorderedAreaWrapper>
            ) : (
              <InputAreaWrapper
                multiline={multiline}
                padding={inputPadding}
                rightIcon={!!rightIconName}
                inputLeftPadding={inputLeftPadding}
                inputRightPadding={inputRightPadding}
              >
                {borderedHeight && <FixedLabel>{label}</FixedLabel>}
                {!!leftIconName && renderIcon(leftIconName, true)}
                {renderTextInput(renderStatus)}
                {!!rightIconName && renderIcon(rightIconName)}
                {!leftIconName &&
                  !rightIconName &&
                  !isEmpty(icon) &&
                  renderIcon(icon as string)}
              </InputAreaWrapper>
            )}
            {withBottomline && (
              <BottomLine status={status} contrast={contrast} />
            )}
          </BorderedWrapper>
        </InputWrapper>
      </FormError>
    </RootWrapper>
  );
};

export default TextInput;
