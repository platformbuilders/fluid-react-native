import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { isEmpty } from 'lodash';
import { Animated } from 'react-native';
import { InputStatus, TextInputType, TypographyVariants } from '../../types';
import { usePrevious } from '../../utils/hooks';

import FormError from '../FormError';
import MaskedTextInput from './MaskedTextInput';
import {
  BorderedWrapper,
  BottomLine,
  FixedLabel,
  Icon,
  InputAreaWrapper,
  InputBorderedAreaWrapper,
  InputBorderedColumnWrapper,
  LABEL_LOWER_STYLE,
  LABEL_UPPER_STYLE,
  Label,
  Wrapper,
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
  iconSize = 20,
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
  textStyle = {},
  labelStyle = {},
  iconHitSlop = {},
  inputRef = useRef(null),
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
  borderedRadius,
  iconType = 'material',
  fixedLabelVariant = 'xs',
  suppressAnimation = false,
  ...rest
  // eslint-disable-next-line sonarjs/cognitive-complexity
}) => {
  const animationInitialValues = {
    top: suppressAnimation ? LABEL_UPPER_STYLE.top : LABEL_LOWER_STYLE.top,
    fontSize: suppressAnimation
      ? LABEL_UPPER_STYLE.fontSize
      : LABEL_LOWER_STYLE.fontSize,
  };

  const [labelAnimatedStyle] = useState({
    top: new Animated.Value(animationInitialValues.top),
    fontSize: new Animated.Value(animationInitialValues.fontSize),
  });
  const [isPlaceholder, setIsPlaceHolder] = useState(
    suppressAnimation ? false : true,
  );
  const previousValue = usePrevious<string>(value || '');
  const labelVariant: TypographyVariants = large ? 'md' : 'xs';
  const textVariant: TypographyVariants = large ? 'lg' : 'md';
  const placeholderVariant: TypographyVariants = large ? 'lg' : 'md';

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
    animateComponent(LABEL_UPPER_STYLE);
  };

  const animationDown = (): void => {
    animateComponent(LABEL_LOWER_STYLE);
  };

  const handleOnFocus = (event: any): void => {
    if (isPlaceholder && !suppressAnimation) {
      setIsPlaceHolder(false);
      animationUp();
    }
    onFocus(event);
  };

  const handleOnBlur = (event: any): void => {
    const isEmptyLabel = label === '';
    if (!value && !isEmptyLabel && !suppressAnimation) {
      setIsPlaceHolder(true);
      animationDown();
    }
    if (isEmptyLabel) {
      setIsPlaceHolder(false);
    }
    onBlur(event);
  };

  const renderTextInput = (inputStatus: string): JSX.Element => {
    const renderPlaceholder = !value && !isPlaceholder ? placeholder : '';

    const textInputProps = {
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
      autoFocus,
      underlineColorAndroid: 'transparent',
      ...rest,
    };

    return (
      <MaskedTextInput
        inputRef={inputRef}
        maskType={maskType || 'no-mask'}
        accessibilityLabel={accessibilityLabel || accessibility}
        testID={testID || id || accessibility}
        {...textInputProps}
      />
    );
  };

  const setAnimation = () => {
    const wasEmpty = previousValue?.length === 0;
    if (value && value.length && wasEmpty && !suppressAnimation) {
      animationUp();
    }
    if (label === '') {
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
    />
  );

  return (
    <Wrapper style={style} multiline={multiline}>
      <FormError
        id={id || accessibility}
        accessibility={accessibility}
        centered={centered}
        error={error}
        large={large}
      >
        <BorderedWrapper
          borderedBackgroundColor={borderedBackgroundColor}
          borderedHeight={borderedHeight}
          borderedColor={borderedColor}
          borderedRadius={borderedRadius}
          error={hasError}
        >
          {!centered && !borderedHeight && (
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
          {borderedHeight ? (
            <InputBorderedAreaWrapper>
              {!isEmpty(iconBordered) && renderIcon(iconBordered, true)}
              <InputBorderedColumnWrapper
                hasLeftIcon={!isEmpty(iconBordered)}
                multiline={multiline}
                padding={inputPadding}
              >
                <FixedLabel
                  hasLeftIcon={!isEmpty(iconBordered)}
                  variant={fixedLabelVariant}
                >
                  {label}
                </FixedLabel>
                {renderTextInput(renderStatus)}
              </InputBorderedColumnWrapper>
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
              {!!leftIconName && renderIcon(leftIconName)}
              {renderTextInput(renderStatus)}
              {!!rightIconName && renderIcon(rightIconName)}
              {!leftIconName &&
                !rightIconName &&
                !isEmpty(icon) &&
                renderIcon(icon as string)}
            </InputAreaWrapper>
          )}
          {withBottomline && <BottomLine status={status} contrast={contrast} />}
        </BorderedWrapper>
      </FormError>
    </Wrapper>
  );
};

export default TextInput;
