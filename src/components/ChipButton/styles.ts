import styled from 'styled-components/native';
import {
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
const backgroundElevation = getTheme('background.z1');
const textMain = getTheme('text.main');
const brandPrimary = getTheme('brand.primary.main');
const brandPrimaryContrast = getTheme('brand.primary.contrast');
const brandSecondary = getTheme('brand.secondary.main');
const brandSecondaryContrast = getTheme('brand.secondary.contrast');
const brandTertiary = getTheme('brand.tertiary.main');
const brandTertiaryContrast = getTheme('brand.tertiary.contrast');
const brandAccent = getTheme('brand.accent.light');
const brandAccentContrast = getTheme('brand.accent.contrast');
const infoMain = getTheme('info.main');
const infoContrast = getTheme('info.contrast');
const dangerMain = getTheme('danger.main');
const dangerContrast = getTheme('danger.contrast');
const warningMain = getTheme('warning.main');
const warningContrast = getTheme('warning.contrast');
const spacingSm = getTheme('spacing.sm');
const spacingMd = getTheme('spacing.md');
const isLeftIcon = ifStyle('leftIcon');
const isRightIcon = ifStyle('rightIcon');
const hasBorder = ifStyle('hasBorder');
const isFlat = ifStyle('flat');

type ButtonWrapperProps = {
  style: any;
  hasBorder: boolean;
  flat: boolean;
  buttonVariant: ButtonVariants;
  disabled?: boolean;
} & ThemeProps;

const buttonSize = 40;

const getBackgroundColor = (props: any): string => {
  if (props.disabled) {
    return `${brandPrimary(props)}70`;
  }
  switch (props.buttonVariant) {
    case 'primary':
      return `${backgroundElevation(props)}`;
    case 'secondary':
      return `${brandSecondary(props)}`;
    case 'tertiary':
      return `${brandTertiary(props)}`;
    case 'accent':
      return `${brandAccent(props)}`;
    case 'info':
      return `${infoMain(props)}`;
    case 'warning':
      return `${warningMain(props)}`;
    case 'danger':
      return `${dangerMain(props)}`;
    case 'invert':
      return `${brandPrimaryContrast(props)}`;
    case 'flat':
      return `${'transparent'}`;
    default:
      return `${backgroundElevation(props)}`;
  }
};

type TextButtonProps = {
  buttonVariant: ButtonVariants;
  variant?: TypographyVariants;
  disabled?: boolean;
  flat?: boolean;
  style: any;
} & ThemeProps;

const getTextColor = (props: any): string => {
  if (props?.disabled) {
    return `${brandPrimaryContrast(props)}`;
  }
  switch (props.buttonVariant) {
    case 'primary':
      return `${textMain(props)}`;
    case 'secondary':
      return `${brandSecondaryContrast(props)}`;
    case 'tertiary':
      return `${brandTertiaryContrast(props)}`;
    case 'accent':
      return `${brandAccentContrast(props)}`;
    case 'danger':
      return `${dangerContrast(props)}`;
    case 'info':
      return `${infoContrast(props)}`;
    case 'warning':
      return `${warningContrast(props)}`;
    case 'invert':
      return `${brandPrimary(props)}`;
    case 'flat':
      return `${brandPrimary(props)}`;
    default:
      return `${textMain(props)}`;
  }
};

type TouchableProps = ThemeProps;

export const Touchable = styled(TouchableComponent)<TouchableProps>`
  border-radius: ${buttonSize / 2}px;
`;

export const ButtonWrapper = styled.View<ButtonWrapperProps>`
  align-self: center; // AUTO WIDTH DE ACORDO COM TEXTO
  height: ${buttonSize}px;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
  padding-vertical: ${spacingSm}px;
  padding-horizontal: ${spacingMd}px;
  border-radius: ${buttonSize}px;
  justify-content: center;
  background-color: ${isFlat('transparent', getBackgroundColor)};
  border-color: ${getBackgroundColor};
  border-width: ${hasBorder(borderWidthSmall, '0')}px;
`;

export const TextButton = styled(TypographyComponent)<TextButtonProps>`
  letter-spacing: -0.41px;
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
  buttonVariant: ButtonVariants;
  isEmoji?: boolean;
} & ThemeProps;

export const Icon = styled(DefaultIcon).attrs((props) => ({
  color: getTextColor(props),
}))<IconProps>`
  margin-right: ${isLeftIcon(spacingSm, 0)}px;
  margin-left: ${isRightIcon(spacingSm, 0)}px;
`;
