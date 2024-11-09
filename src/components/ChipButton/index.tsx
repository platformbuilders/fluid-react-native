import React, { FC } from 'react';
import { ButtonProps } from '../../types';
import { ButtonWrapper, Icon, Loading, TextButton, Touchable } from './styles';

export type ChipButtonProps = ButtonProps & {
  iconStyle?: any;
  isEmoji?: boolean;
  iconTouchable?: boolean;
  hasBorder?: boolean;
};

const ChipButton: FC<ChipButtonProps> = ({
  id,
  children,
  onPress,
  accessibility,
  accessibilityLabel,
  testID,
  style = [{}],
  textStyle = [{}],
  iconStyle = [{}],
  disabled = false,
  iconTouchable = false,
  loading = false,
  contrast = false,
  flat = false,
  isEmoji = false,
  hasBorder = false,
  variant = 'primary',
  typographyVariant = 'md',
  rightIconName,
  leftIconName,
  ...rest
}) => {
  return (
    <Touchable
      id={id || accessibility}
      accessibility={accessibility}
      accessibilityLabel={accessibilityLabel || accessibility}
      testID={testID || id || accessibility}
      disabled={loading || disabled}
      onPress={onPress}
    >
      <ButtonWrapper
        hasBorder={hasBorder}
        buttonVariant={variant}
        disabled={disabled}
        flat={flat}
        style={style}
        {...rest}
      >
        {loading && <Loading contrast={contrast} />}
        {!loading && (
          <>
            {!!leftIconName && (
              <Icon
                accessibility=""
                name={leftIconName as string}
                buttonVariant={variant}
                style={iconStyle}
                leftIcon
                touchable={iconTouchable}
                isEmoji={isEmoji}
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
                style={iconStyle}
                rightIcon
                touchable={iconTouchable}
                isEmoji={isEmoji}
              />
            )}
          </>
        )}
      </ButtonWrapper>
    </Touchable>
  );
};

export default ChipButton;
