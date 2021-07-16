import React, { FC } from 'react';
import { ButtonProps } from '../../types';
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
  variant = 'primary',
  typographyVariant = 'body',
  minWidth,
  maxWidth,
  rightIconColor,
  rightIconName,
  leftIconName,
  leftIconColor,
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
        buttonVariant={variant}
        style={style}
        disabled={disabled}
        rounded={rounded}
        minWidth={minWidth}
        maxWidth={maxWidth}
      >
        {loading && <Loading contrast={contrast} />}
        {!loading && (
          <>
            {!!leftIconName && (
              <Icon
                accessibility=""
                name={leftIconName as string}
                color={leftIconColor}
                leftIcon
              />
            )}
            <TextButton
              style={textStyle}
              disabled={disabled}
              variant={typographyVariant}
              buttonVariant={variant}
            >
              {children}
            </TextButton>
            {!!rightIconName && (
              <Icon
                accessibility=""
                name={rightIconName as string}
                color={rightIconColor}
                rightIcon
              />
            )}
          </>
        )}
      </ButtonWrapper>
    </Touchable>
  );
};

export default Button;
