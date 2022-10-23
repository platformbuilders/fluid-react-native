import React, { FC } from 'react';
import { ButtonProps } from '../../types';
import { ButtonWrapper, Icon, Loading, TextButton, Touchable } from './styles';

export type ChipButtonProps = {
  isEmoji?: boolean;
} & ButtonProps;

const ChipButton: FC<ChipButtonProps> = ({
  id,
  children,
  onPress,
  accessibility,
  accessibilityLabel,
  testID,
  style = [{}],
  textStyle = {},
  disabled = false,
  loading = false,
  contrast = false,
  flat = false,
  isEmoji = false,
  hasBorder = false,
  variant = 'primary',
  typographyVariant = 'md',
  minWidth = 110,
  maxWidth,
  rightIconName,
  leftIconName,
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
        style={style}
        disabled={disabled}
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

export default ChipButton;
