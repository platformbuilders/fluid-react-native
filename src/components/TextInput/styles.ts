import { Animated, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import {
  ThemeProps,
  getFontSize,
  getTheme,
  ifStyle,
  switchStyle,
} from '@platformbuilders/theme-toolkit';
import { InputStatus } from '../../enums';
import { TextInputType } from '../../types';
import DefaultIcon from '../Icon';
import Typography from '../Typography';

const hasLeftIcon = ifStyle('hasLeftIcon');

type InputAreaWrapperProps = {
  rightIcon?: boolean;
  leftIcon?: boolean;
  padding?: number;
  inputRightPadding?: number;
  inputLeftPadding?: number;
};

type BorderedWrapperProps = {
  borderedBackgroundColor?: string;
  borderedHeight?: number;
  borderedColor?: string;
  borderedRadius?: number;
  borderedWidth?: number;
  error?: boolean;
  showBorderErrored?: boolean;
  isFloating?: boolean;
} & ThemeProps;

type InputBorderedAreaWrapperProps = {
  hasBottomLine?: boolean;
};

type InputBorderedColumnWrapperProps = {
  hasLeftIcon?: boolean;
  isFloating?: boolean;
  padding?: number;
};

type FixedLabelAboveBorder = {
  style: Record<string, string>;
};

type FixedLabelProps = {
  hasLeftIcon?: boolean;
};

type BottomLineProps = {
  contrast: boolean;
  status: string;
};

type TextLabelProps = (TextInputType | BottomLineProps) & ThemeProps;

const isCentered = ifStyle('centered');
const hasLabel = ifStyle('label');
const hasError = ifStyle('error');
const hasPadding = ifStyle('padding');
const hasInputRightPadding = ifStyle('inputRightPadding');
const hasInputLeftPadding = ifStyle('inputLeftPadding');
const hasBottomLine = ifStyle('hasBottomLine');
const isContrast = ifStyle('contrast');
const showIconErrored = ifStyle('showIconErrored');
const switchStatus = switchStyle('status');
const brandContrast = getTheme('brand.primary.contrast');
const brandPrimary = getTheme('brand.primary.main');
const minimumSpacing = getTheme('spacing.xs');
const sizingMD = getTheme('sizing.md');
const smallSpacing = getTheme('spacing.sm');
const extraLargeSpacing = getTheme('spacing.xl');
const success = getTheme('success.main');
const textColor = getTheme('text.main');
const dangerMain = getTheme('danger.main');
const disabled = getTheme('brand.primary.main');
const inputColor = (props: TextLabelProps) =>
  switchStatus({
    [InputStatus.Success]: success(props),
    [InputStatus.Danger]: dangerMain(props),
    [InputStatus.Default]: isContrast(
      brandContrast(props),
      textColor(props),
    )(props),
    [InputStatus.Disabled]: disabled(props),
  });

export const LABEL_UPPER_STYLE = {
  top: -12,
  fontSize: 12,
  opacity: 0.4,
};

export const LABEL_LOWER_STYLE = {
  top: 8,
  fontSize: 18,
  opacity: 0.5,
};

export const FONT_WEIGHT_UPPER = 600;
export const FONT_WEIGHT_LOWER = 400;

type WrapperProps = {
  multiline?: boolean;
  style?: any;
};

type RootWrapperProps = {
  style?: any;
};

export const RootWrapper = styled.View<RootWrapperProps>``;

export const InputWrapper = styled.View<WrapperProps>`
  justify-content: ${hasLabel('flex-end', 'flex-start')};
  padding-top: ${hasLabel(smallSpacing, 0)}px;
  position: relative;
`;

export const BorderedWrapper = styled.View<BorderedWrapperProps>`
  ${({
    borderedBackgroundColor,
    borderedColor,
    borderedHeight,
    borderedRadius,
    borderedWidth,
    error,
    showBorderErrored,
    isFloating,
    ...rest
  }: BorderedWrapperProps) => {
    const borderedStyle = `
      justify-content: center;
      border: ${borderedWidth}px solid ${
        error && showBorderErrored
          ? dangerMain(rest)
          : borderedColor || brandPrimary(rest)
      };
      background-color: ${borderedBackgroundColor || 'transparent'};
      height: ${borderedHeight}px;
      border-radius: ${borderedRadius}px;
      paddiing-top: ${isFloating ? 0 : smallSpacing(rest)}px;
      padding-bottom ${smallSpacing(rest)}px;
      padding-right: ${isFloating ? sizingMD(rest) : smallSpacing(rest)}px;
      padding-left: ${isFloating ? sizingMD(rest) : smallSpacing(rest)}px;
    `;
    return `
    border: 0;
    ${borderedHeight ? borderedStyle : ''}
  `;
  }}
`;

export const InputBorderedAreaWrapper = styled.View<InputBorderedAreaWrapperProps>`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: ${hasBottomLine('100%', 'auto')};
`;

export const InputBorderedColumnWrapper = styled.View<InputBorderedColumnWrapperProps>`
  flex-direction: column;
  padding: 0 ${minimumSpacing}px;
  width: ${hasLeftIcon('86%', '92%')};
  margin-left: ${hasLeftIcon(minimumSpacing, 0)}px;
`;

export const FixedLabelAboveBorder = styled(Typography)<FixedLabelAboveBorder>`
  color: ${textColor};
  position: absolute;
  top: -${extraLargeSpacing}px;
  left: 0;
`;

export const FixedLabel = styled(Typography)<FixedLabelProps>`
  color: ${brandPrimary};
  margin-bottom: ${minimumSpacing}px;
`;

export const InputAreaWrapper = styled.View<InputAreaWrapperProps>`
  padding-top: ${hasPadding(
    ({ padding }: InputAreaWrapperProps) => padding,
    minimumSpacing,
  )}px;
  padding-right: ${hasInputRightPadding(
    ({ inputRightPadding }: InputAreaWrapperProps) => inputRightPadding,
    hasPadding(({ padding }: InputAreaWrapperProps) => padding, minimumSpacing),
  )}px;
  padding-left: ${hasInputLeftPadding(
    ({ inputLeftPadding }: InputAreaWrapperProps) => inputLeftPadding,
    hasPadding(({ padding }: InputAreaWrapperProps) => padding, minimumSpacing),
  )}px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  overflow: hidden;
`;

export const TextLabel = styled(Typography)<any>`
  position: absolute;
  color: ${inputColor};
  top: ${LABEL_LOWER_STYLE.top}px;
`;

export const Label = Animated.createAnimatedComponent(TextLabel);

export const TextInput = styled.TextInput.attrs((props: TextInputType) => ({
  accessibilityLabel: props.accessibilityLabel || props.accessibility,
  testID: props.testID || props.id,
  textAlign: isCentered('center', 'left')(props),
  placeholderTextColor: props.placeholderTextColor
    ? props.placeholderTextColor
    : '#72727260',
}))<TextInputType>`
  padding: 0;
  flex-grow: 1;
  border-width: 0;
  min-height: 24px;
  color: ${inputColor};
  font-size: ${getFontSize}px;
  width: 100%;
`;

export const BottomLine = styled.View<BottomLineProps>`
  height: ${StyleSheet.hairlineWidth}px;
  background-color: ${inputColor};
`;

type IconProps = {
  contrast: boolean;
  error: boolean;
  iconColor?: string;
  showIconErrored?: boolean;
  size?: number;
} & ThemeProps;

const defaultIconColor = (props: IconProps) =>
  props.iconColor ||
  isContrast(brandContrast(props), brandPrimary(props))(props);

const erroredIconColor = (props: IconProps) => dangerMain(props);

export const Icon = styled(DefaultIcon).attrs((props: IconProps) => ({
  size: props?.size || sizingMD(props),
  color: showIconErrored(
    hasError(erroredIconColor(props), defaultIconColor(props))(props),
    defaultIconColor(props),
  )(props),
}))<IconProps>``;
