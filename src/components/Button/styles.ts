import { moderateScale } from 'react-native-size-matters';
import styled from 'styled-components/native';
import { ButtonVariants, TypographyVariants } from '../../types';
import { getTheme, ifStyle } from '../../utils/helpers';
import DefaultIcon from '../Icon';
import LoadingIndicator from '../LoadingIndicator';
import TouchableComponent from '../Touchable';
import TypographyComponent from '../Typography';

const disabledMain = getTheme('disabled.main');
const disabledContrast = getTheme('disabled.contrast');
const primaryMain = getTheme('primary.main');
const primaryContrast = getTheme('primary.contrast');
const secondaryMain = getTheme('secondary.main');
const secondaryContrast = getTheme('secondary.contrast');
const tertiaryMain = getTheme('tertiary.main');
const tertiaryContrast = getTheme('tertiary.contrast');
const accentMain = getTheme('accent.main');
const accentContrast = getTheme('accent.contrast');
const buttonRadius = getTheme('buttonRadius');
const minimumSpacing = getTheme('minimumSpacing');
const smallSpacing = getTheme('smallSpacing');
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
    return disabledMain(props);
  }
  switch (props.buttonVariant) {
    case 'primary':
      return primaryMain(props);
    case 'secondary':
      return secondaryMain(props);
    case 'tertiary':
      return tertiaryMain(props);
    case 'accent':
      return accentMain(props);
    case 'flat':
      return 'transparent';
    default:
      return primaryMain(props);
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
    return disabledContrast(props);
  }
  switch (props.buttonVariant) {
    case 'primary':
      return primaryContrast(props);
    case 'secondary':
      return secondaryContrast(props);
    case 'tertiary':
      return tertiaryContrast(props);
    case 'accent':
      return accentContrast(props);
    case 'flat':
      return primaryMain(props);
    default:
      return primaryContrast(props);
  }
};

type TouchableProps = {
  rounded: boolean;
};

export const Touchable = styled(TouchableComponent)<TouchableProps>`
  border-radius: ${(props: TouchableProps): string =>
    props.rounded ? `${buttonSize / 2}px` : '0'};
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
    props.rounded ? '0' : minimumSpacing(props)};
  border-radius: ${(props: ButtonWrapperProps): string =>
    props.rounded ? `${buttonSize / 2}px` : buttonRadius(props)};
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
  margin-right: ${isLeftIcon(smallSpacing, 0)};
  margin-left: ${isRightIcon(smallSpacing, 0)};
`;
