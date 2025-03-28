import React, { FC } from 'react';
import { ButtonProps } from '../../types';
import {
  generateAccessibilityProps,
  generateTestID,
} from '../../utils/accessibility';
import { ButtonWrapper, Icon, Loading, TextButton, Touchable } from './styles';

export type BadgeProps = ButtonProps & {
  iconStyle?: any;
  isEmoji?: boolean;
  iconTouchable?: boolean;
  hasBorder?: boolean;
};

const Badge: FC<BadgeProps> = ({
  id,
  children,
  onPress,
  accessibility,
  accessibilityLabel,
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
  const role = onPress ? 'button' : 'text';
  const baseAccessibilityId =
    accessibility || id || (typeof children === 'string' ? children : 'badge');
  const defaultLabel =
    accessibilityLabel || (typeof children === 'string' ? children : 'Badge');
  const hint = onPress ? 'Toque para interagir' : undefined;

  const badgeAccessibilityProps = generateAccessibilityProps(
    {
      id,
      accessibility: baseAccessibilityId,
      accessibilityLabel: defaultLabel,
      disabled: loading || disabled,
      busy: loading,
    },
    role,
    defaultLabel,
    hint,
  );

  const badgeTestID = generateTestID('badge', baseAccessibilityId);

  return (
    <Touchable
      {...badgeAccessibilityProps}
      testID={badgeTestID}
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
                importantForAccessibility="no"
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
                importantForAccessibility="no"
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

export default Badge;
