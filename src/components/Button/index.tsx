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
  flat = false,
  hasBorder = false,
  variant = 'primary',
  typographyVariant = 'md',
  minWidth,
  maxWidth,
  rightIconName,
  leftIconName,
  haptic,
  ...rest
}) => {
  return (
    <Touchable
      disabled={disabled}
      haptic={haptic}
      id={id}
      onPress={onPress}
      accessibility={accessibility}
      accessibilityLabel={accessibilityLabel}
      testID={testID}
      rounded={rounded}
      {...(rest as any)}
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
        {loading && <Loading contrast={contrast} />}
        {!loading && (
          <>
            {!!leftIconName && (
              <Icon
                accessibility=""
                name={leftIconName as string}
                buttonVariant={variant}
                style={style}
                leftIcon
              />
            )}
            <TextButton
              style={textStyle}
              disabled={disabled}
              flat={flat}
              variant={typographyVariant}
              buttonVariant={variant}
            >
              {children}
            </TextButton>
            {!!rightIconName && (
              <Icon
                accessibility=""
                name={rightIconName as string}
                buttonVariant={variant}
                style={style}
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
