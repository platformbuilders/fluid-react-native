import React, { FC } from 'react';
import { ButtonVariant } from '../../enums';
import { ButtonProps } from '../../types';
import { generateAccessibilityProps, generateTestID } from '../../utils';
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
  // Gera propriedades de acessibilidade padronizadas
  const accessibilityProps = generateAccessibilityProps(
    { 
      id, 
      accessibility, 
      accessibilityLabel, 
      disabled: loading || disabled, 
      busy: loading 
    },
    'button',
    children?.toString() || 'Botão',
    'Ativa ao pressionar'
  );

  // Gera ID de teste padronizado
  const buttonTestID = generateTestID(
    { id, accessibility, testID },
    'button'
  );

  return (
    <Touchable
      id={id || accessibility}
      {...accessibilityProps}
      testID={buttonTestID}
      disabled={loading || disabled}
      onPress={onPress}
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      rounded={rounded}
    >
      <ButtonWrapper
        hasBorder={variant === ButtonVariant.OUTLINE}
        buttonVariant={variant}
        colorVariant={colorVariant}
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
                colorVariant={colorVariant}
                style={style}
                touchable={leftIconTouchable}
                leftIcon
                accessibilityRole="image"
                accessibilityLabel={`Ícone ${leftIconName}`}
              />
            )}
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
            {!!rightIconName && (
              <Icon
                accessibility=""
                name={rightIconName as string}
                colorVariant={colorVariant}
                buttonVariant={variant}
                style={style}
                touchable={rightIconTouchable}
                rightIcon
                accessibilityRole="image"
                accessibilityLabel={`Ícone ${rightIconName}`}
              />
            )}
          </>
        )}
      </ButtonWrapper>
    </Touchable>
  );
};

export default Button;
