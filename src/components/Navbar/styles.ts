import { getBottomSpace } from 'react-native-iphone-x-helper';
import { moderateScale } from 'react-native-size-matters';
import styled, { DefaultTheme } from 'styled-components/native';
import { isIOS } from '@platformbuilders/helpers/native';
import { getShadow, getTheme, ifStyle } from '../../utils/helpers';
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
const hasSafeBottomArea = ifStyle('safeBottomArea');
const bottomSpace = isIOS() ? getBottomSpace() : smSpacing;

type NavbarWrapperProps = {
  safeBottomArea: boolean;
};

type FieldsProps = {
  theme: DefaultTheme;
  active: boolean;
  activeColor?: string;
};

export const NavbarWrapper = styled.View<NavbarWrapperProps>`
  width: 100%;
  padding: ${smSpacing}px ${smSpacing}px
    ${hasSafeBottomArea(bottomSpace, smSpacing)}px;
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

export const NavIcon = styled(Icon).attrs((props: any) => ({
  size: moderateScale(30),
  color: String(props.active
    ? primaryMain(props)
    : textColor(props)),
  touchable: false,
}))<any>`
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
