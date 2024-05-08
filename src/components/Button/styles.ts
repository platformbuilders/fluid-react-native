import styled from 'styled-components/native';
import {
  ButtonColorType,
  ButtonVariants,
  ThemeProps,
  TypographyVariants,
  getTheme,
  ifStyle,
} from '@platformbuilders/theme-toolkit';

import DefaultIcon from '../Icon';
import LoadingIndicator from '../LoadingIndicator';
import TouchableComponent from '../Touchable';
import TypographyComponent from '../Typography';

const borderWidthSmall = getTheme('borderWidth.sm');
const brandPrimary = getTheme('brand.primary.main');
const brandPrimaryContrast = getTheme('brand.primary.contrast');
const brandSecondary = getTheme('brand.secondary.main');
const brandSecondaryContrast = getTheme('brand.secondary.contrast');
const brandAccent = getTheme('brand.accent.main');
const brandAccentContrast = getTheme('brand.accent.contrast');
const infoMain = getTheme('info.main');
const infoContrast = getTheme('info.contrast');
const dangerMain = getTheme('danger.main');
const dangerContrast = getTheme('danger.contrast');
const successMain = getTheme('success.main');
const successContrast = getTheme('success.contrast');
const warningMain = getTheme('warning.main');
const warningContrast = getTheme('warning.contrast');
const buttonRadius = getTheme('borderRadius.sm');
const minimumSpacing = getTheme('spacing.xs');
const smallSpacing = getTheme('spacing.sm');
const isLeftIcon = ifStyle('leftIcon');
const isRightIcon = ifStyle('rightIcon');
const hasBorder = ifStyle('hasBorder');
const isFlat = ifStyle('flat');
const isDisabled = ifStyle('disabled');

type ButtonWrapperProps = {
  rounded: boolean;
  hasBorder: boolean;
  flat: boolean;
  buttonVariant: ButtonVariants;
  colorVariant: ButtonColorType;
  disabled?: boolean;
  style: any;
  minWidth?: string | number;
  maxWidth?: string | number;
} & ThemeProps;

const buttonSize = 45;

function isTintVariant(bandSelected, props) {
  if (props.buttonVariant === 'tint') {
    return `${bandSelected(props)}10`;
  } else {
    return `${bandSelected(props)}`;
  }
}

const getBackgroundColor = (props: ButtonWrapperProps): string => {
  if (
    props.buttonVariant === 'flat' ||
    props.buttonVariant === 'ghost' ||
    props.buttonVariant === 'outline'
  ) {
    return 'transparent';
  }

  switch (props.colorVariant) {
    case 'primary':
      return isTintVariant(brandPrimary, props);
    case 'secondary':
      return isTintVariant(brandSecondary, props);
    case 'accent':
      return isTintVariant(brandAccent, props);
    case 'info':
      return isTintVariant(infoMain, props);
    case 'warning':
      return isTintVariant(warningMain, props);
    case 'danger':
      return isTintVariant(dangerMain, props);
    case 'success':
      return isTintVariant(successMain, props);
    default:
      return `${brandPrimary(props)}`;
  }
};

type TextButtonProps = {
  buttonVariant: ButtonVariants;
  colorVariant: ButtonColorType;
  variant?: TypographyVariants;
  disabled?: boolean;
  flat?: boolean;
  style: any;
} & ThemeProps;

const getTextColor = (props: TextButtonProps): string => {
  switch (props.colorVariant) {
    case 'primary':
      return `${
        props.buttonVariant === 'filled'
          ? brandPrimaryContrast(props)
          : brandPrimary(props)
      }`;
    case 'secondary':
      return `${
        props.buttonVariant === 'filled'
          ? brandSecondaryContrast(props)
          : brandSecondary(props)
      }`;
    case 'accent':
      return `${
        props.buttonVariant === 'filled'
          ? brandAccentContrast(props)
          : brandAccent(props)
      }`;
    case 'danger':
      return `${
        props.buttonVariant === 'filled'
          ? dangerContrast(props)
          : dangerMain(props)
      }`;
    case 'info':
      return `${
        props.buttonVariant === 'filled' ? infoContrast(props) : infoMain(props)
      }`;
    case 'warning':
      return `${
        props.buttonVariant === 'filled'
          ? warningContrast(props)
          : warningMain(props)
      }`;
    case 'success':
      return `${
        props.buttonVariant === 'filled'
          ? successContrast(props)
          : successMain(props)
      }`;
    default:
      return `${brandPrimaryContrast(props)}`;
  }
};

type TouchableProps = {
  rounded: boolean;
} & ThemeProps;

export const Touchable = styled(TouchableComponent)<TouchableProps>`
  border-radius: ${(props: TouchableProps): any =>
    props.rounded ? buttonSize / 2 : buttonRadius(props)}px;
`;

export const ButtonWrapper = styled.View<ButtonWrapperProps>`
  height: ${buttonSize}px;
  flex-direction: row;
  align-items: center;
  min-width: ${({ minWidth }: ButtonWrapperProps): string =>
    `${minWidth || '180px'}`};
  max-width: ${({ maxWidth }: ButtonWrapperProps) => maxWidth || '100%'};
  overflow: hidden;
  padding: ${(props: ButtonWrapperProps): string =>
    props.rounded ? '0' : `${minimumSpacing(props)}px`};
  border-radius: ${(props: ButtonWrapperProps): any =>
    props.rounded ? buttonSize / 2 : buttonRadius(props)}px;
  justify-content: center;
  background-color: ${isFlat('transparent', getBackgroundColor)};
  border-color: ${getTextColor};
  border-width: ${hasBorder(borderWidthSmall, '0')}px;
  opacity: ${isDisabled(0.3, 1)};
`;

export const TextButton = styled(TypographyComponent)<TextButtonProps>`
  letter-spacing: 0.4px;
  color: ${isFlat(getBackgroundColor, getTextColor)};
  font-weight: bold;
`;

export const Loading = styled(LoadingIndicator).attrs({
  variant: 'button',
})`
  align-self: center;
  width: 55px;
`;

type IconProps = {
  rightIcon?: boolean;
  leftIcon?: boolean;
  colorVariant: ButtonColorType;
  buttonVariant: ButtonVariants;
  style: any;
} & ThemeProps;

export const Icon = styled(DefaultIcon).attrs((props: IconProps) => ({
  color: getTextColor(props),
}))<IconProps>`
  margin-right: ${isLeftIcon(smallSpacing, 0)}px;
  margin-left: ${isRightIcon(smallSpacing, 0)}px;
`;
