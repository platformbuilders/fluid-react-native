import React, { FC } from 'react';
import { ButtonProps } from '../../types';
import { ButtonWrapper, Loading, TextButton, Touchable } from './styles';

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
  width = 180,
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
        width={width}
      >
        {loading && <Loading contrast={contrast} />}
        {!loading && (
          <>
            <TextButton
              style={textStyle}
              disabled={disabled}
              variant={typographyVariant}
              buttonVariant={variant}
            >
              {children}
            </TextButton>
          </>
        )}
      </ButtonWrapper>
    </Touchable>
  );
};

export default Button;
