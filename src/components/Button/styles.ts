import { moderateScale } from 'react-native-size-matters';
import styled from 'styled-components/native';
import { ButtonVariants, TypographyVariants } from '../../types';
import { getTheme, ifStyle } from '../../utils/helpers';
import DefaultIcon from '../Icon';
import LoadingIndicator from '../LoadingIndicator';
import TouchableComponent from '../Touchable';
import TypographyComponent from '../Typography';

const brandPrimary = getTheme('brand.primary');
const brandContrast = getTheme('brand.contrast');
const brandSecondary = getTheme('brand.secondary');
const brandTertiary = getTheme('brand.tertiary');
const brandAccent = getTheme('brand.accent');
const buttonRadius = getTheme('borderRadius.md');
const minimumSpacing = getTheme('spacing.xs');
const smallSpacing = getTheme('spacing.sm');
const isLeftIcon = ifStyle('leftIcon');
const isRightIcon = ifStyle('rightIcon');

type ButtonWrapperProps = {
  rounded: boolean;
  hasBorder: boolean;
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
    case 'flat':
      return 'transparent';
    default:
      return brandPrimary(props);
  }
};

type TextButtonProps = {
  buttonVariant: ButtonVariants;
  variant?: TypographyVariants;
  disabled?: boolean;
  style: any;
};

const getTextColor = (props: TextButtonProps): string => {
  if (props.disabled) {
    return brandContrast(props);
  }
  switch (props.buttonVariant) {
    case 'primary':
      return brandContrast(props);
    case 'secondary':
      return brandContrast(props);
    case 'tertiary':
      return brandContrast(props);
    case 'accent':
      return brandContrast(props);
    case 'flat':
      return brandPrimary(props);
    default:
      return brandContrast(props);
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
  background-color: ${getBackgroundColor};
  border-color: ${getTextColor};
  border: ${(props: ButtonWrapperProps) =>
    props.buttonVariant === 'flat' || props.hasBorder
      ? `1px solid ${getTextColor(props)}`
      : '0'};
`;

export const TextButton = styled(TypographyComponent)<TextButtonProps>`
  letter-spacing: 0.4px;
  color: ${getTextColor};
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
