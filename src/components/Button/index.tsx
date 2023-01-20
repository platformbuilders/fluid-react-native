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
  hasBorder = false,
  variant = 'primary',
  typographyVariant = 'md',
  minWidth,
  maxWidth,
  rightIconName,
  leftIconName,
  useSentryTraceability,
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
      useSentryTraceability={useSentryTraceability}
    >
      <ButtonWrapper
        hasBorder={hasBorder}
        buttonVariant={variant}
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
                style={style}
                leftIcon
              />
            </If>
            <TextButton
              style={textStyle}
              disabled={disabled}
              flat={flat}
              variant={typographyVariant}
              buttonVariant={variant}
            >
              {children}
            </TextButton>
            <If condition={!!rightIconName}>
              <Icon
                accessibility=""
                name={rightIconName as string}
                buttonVariant={variant}
                style={style}
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
