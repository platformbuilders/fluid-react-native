import styled from 'styled-components/native';
import { ThemeProps } from '@platformbuilders/theme-toolkit';

import { getTheme, ifStyle } from '../../utils/helpers';
import Icon from '../Icon';

import TypographyComponent from '../Typography';

type WrapperStyleProps = {
  isIOSPlatform: boolean;
};

type ThemePrimaryStyleProps = {
  isThemePrimary: boolean;
};

const isThemePrimary = ifStyle('isThemePrimary');
const isIOSPlatform = ifStyle('isIOSPlatform');
const spacingSm = getTheme('spacing.sm');
const spacingMd = getTheme('spacing.md');
const getThemePrimaryContrastTextColor = (props: ThemeProps) =>
  isThemePrimary(
    getTheme('brand.primary.contrast')(props),
    getTheme('info.contrast')(props),
  )(props);
const getThemePrimaryContrastBackgroundColor = (props: ThemeProps) =>
  isThemePrimary(
    getTheme('brand.primary.main')(props),
    getTheme('background.z4')(props),
  )(props);

export const Wrapper = styled.View<WrapperStyleProps & ThemePrimaryStyleProps>`
  ${isIOSPlatform('overflow: hidden; padding-bottom: 5px;', '')};
`;

export const ContentWrapper = styled.View<
  WrapperStyleProps & ThemePrimaryStyleProps
>`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-horizontal: ${spacingMd}px;
  padding-vertical: ${spacingMd}px;
  height: 64px;
  background-color: ${getThemePrimaryContrastBackgroundColor};
  ${isIOSPlatform('', 'elevation: 3;')};
`;

export const TextWrapper = styled.View`
  flex: 1;
  align-items: center;
`;

export const Title = styled(TypographyComponent).attrs({
  variant: 'lg',
})<ThemePrimaryStyleProps>`
  color: ${getThemePrimaryContrastTextColor};
  font-weight: bold;
`;

export const Subtitle = styled(TypographyComponent).attrs({
  variant: 'sm',
})<ThemePrimaryStyleProps>`
  color: ${getThemePrimaryContrastTextColor};
  margin-top: ${spacingSm}px;
`;

export const StyledIcon = styled(Icon).attrs((props) => ({
  color: getThemePrimaryContrastTextColor(props),
}))<ThemePrimaryStyleProps>``;
