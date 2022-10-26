import React, { FC } from 'react';
import { ButtonProps } from '../../types';
import If from '../If';
import { ButtonWrapper, Icon, Loading, TextButton, Touchable } from './styles';

export type ChipButtonProps = ButtonProps & {
  isEmoji?: boolean;
  iconTouchable?: boolean;
};

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
      {...rest}
    >
      <ButtonWrapper
        hasBorder={hasBorder}
        buttonVariant={variant}
        style={style}
        disabled={disabled}
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
                touchable={iconTouchable}
                isEmoji={isEmoji}
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
                touchable={iconTouchable}
                isEmoji={isEmoji}
              />
            </If>
          </>
        </If>
      </ButtonWrapper>
    </Touchable>
  );
};

export default ChipButton;
