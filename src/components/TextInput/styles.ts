import { ComponentType } from 'react';
import { Animated, StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import styled from 'styled-components/native';
import { InputStatus } from '../../enums';
import { TextInputType } from '../../types';
import {
  getFontSize,
  getLineHeight,
  getTheme,
  ifStyle,
  scaledFontSize,
  switchStyle,
} from '../../utils/helpers';
import DefaultIcon from '../Icon';
import Typography from '../Typography';

const hasLeftIcon = ifStyle('hasLeftIcon');

type InputAreaWrapperProps = {
  rightIcon?: boolean;
  leftIcon?: boolean;
  multiline: boolean;
  padding?: number;
  inputRightPadding?: number;
  inputLeftPadding?: number;
};

type BorderedWrapperProps = {
  borderedBackgroundColor?: string;
  borderedHeight?: number;
  borderedColor?: string;
  borderedRadius?: number;
  error?: boolean;
  showBorderErrored?: boolean;
};

type InputBorderedAreaWrapperProps = {
  hasBottomLine?: boolean;
};

type InputBorderedColumnWrapperProps = {
  hasLeftIcon?: boolean;
  multiline?: boolean;
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

const isMultiline = ifStyle('multiline');
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
const smallSpacing = getTheme('spacing.sm');
const extraLargeSpacing = getTheme('spacing.xl');
const success = getTheme('success.main');
const textColor = getTheme('text.main');
const dangerMain = getTheme('danger.main');
const disabled = getTheme('brand.primary.main');
const inputColor = (props: TextInputType | BottomLineProps): any =>
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
  top: -10,
  fontSize: scaledFontSize(14),
};

export const LABEL_LOWER_STYLE = {
  top: 8,
  fontSize: scaledFontSize(18),
};

type WrapperProps = {
  multiline?: boolean;
  style?: any;
};

export const Wrapper = styled.View<WrapperProps>`
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
    error,
    showBorderErrored,
    ...rest
  }: BorderedWrapperProps) => {
    const borderedStyle = `
      justify-content: center;
      border: 1px solid ${
        error && showBorderErrored
          ? dangerMain(rest)
          : borderedColor || brandPrimary(rest)
      };
      background-color: ${borderedBackgroundColor || 'transparent'};
      height: ${borderedHeight}px;
      border-radius: ${borderedRadius}px;
      padding: ${smallSpacing(rest)}px;
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

export const TextLabel = styled.Text<any>`
  font-size: ${getFontSize}px;
  line-height: ${getLineHeight}px;
  position: absolute;
  color: ${inputColor};
  top: ${LABEL_LOWER_STYLE.top}px;
`;

export const Label = Animated.createAnimatedComponent<ComponentType<any>>(
  TextLabel,
);

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
  min-height: ${moderateScale(24)}px;
  color: ${inputColor};
  margin-top: ${isMultiline(smallSpacing, 0)}px;
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
};

const defaultIconColor = (props: IconProps) =>
  props.iconColor ||
  isContrast(brandContrast(props), brandPrimary(props))(props);

const erroredIconColor = (props: IconProps) => dangerMain(props);

export const Icon = styled(DefaultIcon).attrs((props: IconProps) => ({
  color: showIconErrored(
    hasError(erroredIconColor(props), defaultIconColor(props))(props),
    defaultIconColor(props),
  )(props),
}))<IconProps>``;
