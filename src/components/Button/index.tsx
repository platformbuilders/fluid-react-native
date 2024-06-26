import React, { FC } from 'react';
import { ButtonProps } from '../../types';
import If from '../If';
import { ButtonWrapper, Icon, Loading, TextButton, Touchable } from './styles';

const Button: FC<ButtonProps> = ({
  id,
  children,
  onPress,
  accessibility,
  accessibilityLabel,
  testID,
  style = [{}],
  textStyle = {},
  disabled = false,
  rounded = false,
  loading = false,
  contrast = false,
  flat = false,
  variant = 'filled',
  colorVariant = 'primary',
  typographyVariant = 'md',
  minWidth,
  maxWidth,
  rightIconName,
  leftIconName,
  leftIconTouchable = true,
  rightIconTouchable = true,
}) => {
  return (
    <Touchable
      id={id || accessibility}
      accessibility={accessibility}
      accessibilityLabel={accessibilityLabel || accessibility}
      testID={testID || id || accessibility}
      disabled={loading || disabled}
      onPress={onPress}
      rounded={rounded}
    >
      <ButtonWrapper
        hasBorder={variant === 'outline'}
        buttonVariant={variant}
        colorVariant={colorVariant}
        style={style}
        disabled={disabled}
        rounded={rounded}
        minWidth={minWidth}
        maxWidth={maxWidth}
        flat={flat}
      >
        <If condition={loading}>
          <Loading contrast={contrast} />
        </If>
        <If condition={!loading}>
          <>
            <If condition={!!leftIconName}>
              <Icon
                accessibility=""
                name={leftIconName as string}
                buttonVariant={variant}
                colorVariant={colorVariant}
                style={style}
                touchable={leftIconTouchable}
                leftIcon
              />
            </If>
            <TextButton
              style={textStyle}
              disabled={disabled}
              flat={flat}
              colorVariant={colorVariant}
              variant={typographyVariant}
              buttonVariant={variant}
            >
              {children}
            </TextButton>
            <If condition={!!rightIconName}>
              <Icon
                accessibility=""
                name={rightIconName as string}
                colorVariant={colorVariant}
                buttonVariant={variant}
                style={style}
                touchable={rightIconTouchable}
                rightIcon
              />
            </If>
          </>
        </If>
      </ButtonWrapper>
    </Touchable>
  );
};

export default Button;
