import { moderateScale } from 'react-native-size-matters';
import styled from 'styled-components/native';
import { ThemeProps, getTheme, ifStyle } from '@platformbuilders/theme-toolkit';
import { getShadow } from '../../utils/helpers';
import Icon from '../Icon';
import Touchable from '../Touchable';
import Typography from '../Typography';

const textColor = getTheme('text.main');
const primaryMain = getTheme('brand.primary.main');
const backgroundZ4 = getTheme('background.z4');

const emptyOpacity = getTheme('opacity.empty');
const opaqueOpacity = getTheme('opacity.opaque');

const smSpacing = getTheme('spacing.sm');

const isActive = ifStyle('active');

type NavbarWrapperProps = {
  safeBottomArea: boolean;
  bottomSpacing: number;
};

type FieldsProps = {
  active: boolean;
  activeColor?: string;
} & ThemeProps;

export const NavbarWrapper = styled.View<NavbarWrapperProps>`
  width: 100%;
  padding: ${smSpacing}px;
  padding-bottom: ${({ bottomSpacing }) => `${bottomSpacing}px`};
  background-color: ${backgroundZ4};
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  margin-top: auto;
  ${getShadow()};
`;

export const NavField = styled(Touchable)`
  width: ${moderateScale(70)}px;
  justify-content: center;
  align-items: center;
`;

export const NavIcon = styled(Icon).attrs((props: FieldsProps) => ({
  size: moderateScale(30),
  color: isActive(
    props?.activeColor || primaryMain(props),
    textColor(props),
  )(props),
  touchable: false,
}))<FieldsProps>`
  opacity: ${isActive(opaqueOpacity, emptyOpacity)};
`;

export const NavLabel = styled(Typography).attrs({
  variant: 'xs',
})<FieldsProps>`
  color: ${({ activeColor }: FieldsProps) =>
    isActive(activeColor || primaryMain, textColor)};
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  opacity: ${isActive(opaqueOpacity, emptyOpacity)};
`;
