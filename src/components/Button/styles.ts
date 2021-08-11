import { moderateScale } from 'react-native-size-matters';
import styled from 'styled-components/native';
import { ButtonVariants, TypographyVariants } from '../../types';
import { getTheme, ifStyle } from '../../utils/helpers';
import DefaultIcon from '../Icon';
import LoadingIndicator from '../LoadingIndicator';
import TouchableComponent from '../Touchable';
import TypographyComponent from '../Typography';

const borderWidthSmall = getTheme('borderWidth.xxs');
const brandPrimary = getTheme('brand.primary.main');
const brandPrimaryContrast = getTheme('brand.primary.contrast');
const brandSecondary = getTheme('brand.secondary.main');
const brandSecondaryContrast = getTheme('brand.secondary.contrast');
const brandTertiary = getTheme('brand.tertiary.main');
const brandTertiaryContrast = getTheme('brand.tertiary.contrast');
const brandAccent = getTheme('brand.accent.main');
const brandAccentContrast = getTheme('brand.accent.contrast');
const infoMain = getTheme('info.main');
const infoContrast = getTheme('info.contrast');
const dangerMain = getTheme('danger.main');
const dangerContrast = getTheme('danger.contrast');
const warningMain = getTheme('warning.main');
const warningContrast = getTheme('warning.contrast');
const buttonRadius = getTheme('borderRadius.md');
const minimumSpacing = getTheme('spacing.xs');
const smallSpacing = getTheme('spacing.sm');
const isLeftIcon = ifStyle('leftIcon');
const isRightIcon = ifStyle('rightIcon');
const hasBorder = ifStyle('hasBorder');
const isFlat = ifStyle('flat');

type ButtonWrapperProps = {
  rounded: boolean;
  hasBorder: boolean;
  flat: boolean;
  buttonVariant: ButtonVariants;
  disabled?: boolean;
  style: any;
  minWidth?: string | number;
  maxWidth?: string | number;
};

const buttonSize = moderateScale(45);

const getBackgroundColor = (props: ButtonWrapperProps): string => {
  if (props.disabled) {
    return `${brandPrimary(props)}70`;
  }
  switch (props.buttonVariant) {
    case 'primary':
      return brandPrimary(props);
    case 'secondary':
      return brandSecondary(props);
    case 'tertiary':
      return brandTertiary(props);
    case 'accent':
      return brandAccent(props);
    case 'info':
      return infoMain(props);
    case 'warning':
      return warningMain(props);
    case 'danger':
      return dangerMain(props);
    default:
      return brandPrimary(props);
  }
};

type TextButtonProps = {
  buttonVariant: ButtonVariants;
  variant?: TypographyVariants;
  disabled?: boolean;
  flat?: boolean;
  style: any;
};

const getTextColor = (props: TextButtonProps): string => {
  if (props.disabled) {
    return brandPrimaryContrast(props);
  }
  switch (props.buttonVariant) {
    case 'primary':
      return brandPrimaryContrast(props);
    case 'secondary':
      return brandSecondaryContrast(props);
    case 'tertiary':
      return brandTertiaryContrast(props);
    case 'accent':
      return brandAccentContrast(props);
    case 'danger':
      return dangerContrast(props);
    case 'info':
      return infoContrast(props);
    case 'warning':
      return warningContrast(props);
    default:
      return brandPrimaryContrast(props);
  }
};

type TouchableProps = {
  rounded: boolean;
};

export const Touchable = styled(TouchableComponent)<TouchableProps>`
  border-radius: ${(props: TouchableProps): any =>
    props.rounded ? buttonSize / 2 : 0}px;
`;

export const ButtonWrapper = styled.View<ButtonWrapperProps>`
  height: ${buttonSize}px;
  flex-direction: row;
  align-items: center;
  min-width: ${({ minWidth }: ButtonWrapperProps) =>
    minWidth || moderateScale(180) + 'px'};
  max-width: ${({ maxWidth }: ButtonWrapperProps) => maxWidth || '100%'};
  overflow: hidden;
  padding: ${(props: ButtonWrapperProps): string =>
    props.rounded ? '0' : minimumSpacing(props)}px;
  border-radius: ${(props: ButtonWrapperProps): any =>
    props.rounded ? buttonSize / 2 : buttonRadius(props)}px;
  justify-content: center;
  background-color: ${isFlat('transparent', getBackgroundColor)};
  border-color: ${getBackgroundColor};
  border-width: ${hasBorder(borderWidthSmall, '0')}px;
`;

export const TextButton = styled(TypographyComponent)<TextButtonProps>`
  letter-spacing: 0.4px;
  color: ${isFlat(getBackgroundColor, getTextColor)};
  font-weight: 500;
`;

export const Loading = styled(LoadingIndicator).attrs({
  variant: 'button',
})`
  align-self: center;
  width: ${moderateScale(55)}px;
`;

type IconProps = {
  rightIcon?: boolean;
  leftIcon?: boolean;
  buttonVariant: ButtonVariants;
  style: any;
};

export const Icon = styled(DefaultIcon).attrs((props: IconProps) => ({
  color: getTextColor(props),
}))<IconProps>`
  margin-right: ${isLeftIcon(smallSpacing, 0)}px;
  margin-left: ${isRightIcon(smallSpacing, 0)}px;
`;
