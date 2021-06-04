import { ComponentType } from 'react';
import { Animated, StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import styled from 'styled-components/native';
import { InputStatus, TextInputType } from '../../types';
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

type InputAreaWrapperProps = {
  rightIcon?: boolean;
  leftIcon?: boolean;
  multiline: boolean;
  padding?: number;
};

type BorderedWrapperProps = {
  borderedBackgroundColor?: string;
  borderedHeight?: number;
  borderedColor?: string;
  borderedRadius?: number;
  error?: boolean;
};

type InputBorderedColumnWrapperProps = {
  hasLeftIcon?: boolean;
  multiline?: boolean;
  padding?: number;
};

type FixedLabelProps = {
  hasLeftIcon?: boolean;
};

type BottomLineProps = {
  contrast: boolean;
  status: string;
};

// const factor = 1.2;
// const normalTextSize = moderateScale(16, factor);
// const normalPlaceholderSize = moderateScale(14, factor);
// const bigTextSize = moderateScale(24, factor);
// const bigPlaceholderSize = moderateScale(20, factor);
// const placeholderVariant = (props: any) => getFontSize('subhead')(props);
// const placeholderBigVariant = 'title4';

const hasRightIcon = ifStyle('rightIcon');
const hasLeftIcon = ifStyle('leftIcon');
const isMultiline = ifStyle('multiline');
const isCentered = ifStyle('centered');
const hasLabel = ifStyle('label');
const hasError = ifStyle('error');
const isContrast = ifStyle('contrast');
const switchStatus = switchStyle('status');
const primaryContrast = getTheme('primary.contrast');
const primaryMain = getTheme('primary.main');
const minimumSpacing = getTheme('minimumSpacing');
const smallSpacing = getTheme('smallSpacing');
const largeSpacing = getTheme('largeSpacing');
const mediumSpacing = getTheme('mediumSpacing');
const success = getTheme('success');
const textColor = getTheme('text');
const failure = getTheme('failure');
const disabled = getTheme('disabled');
const inputColor = (props: TextInputType | BottomLineProps): any =>
  switchStatus({
    [InputStatus.Success]: success,
    [InputStatus.Failure]: failure,
    [InputStatus.Default]: isContrast(primaryContrast, textColor)(props),
    [InputStatus.Disabled]: disabled,
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
  padding-top: ${hasLabel(smallSpacing, 0)};
  position: relative;
`;

export const BorderedWrapper = styled.View<BorderedWrapperProps>`
  ${({
    borderedBackgroundColor,
    borderedColor,
    borderedHeight,
    borderedRadius,
    error,
    ...rest
  }: BorderedWrapperProps) => {
    const borderedStyle = `
      justify-content: center;
      border: 1px solid ${
        error ? failure(rest) : borderedColor || primaryMain(rest)
      };
      background-color: ${borderedBackgroundColor || 'transparent'};
      height: ${borderedHeight}px;
      border-radius: ${borderedRadius}px;
      padding: ${smallSpacing(rest)};
    `;

    return `
    border: 0;
    ${borderedHeight ? borderedStyle : ''}
  `;
  }}
`;

export const InputBorderedAreaWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const InputBorderedColumnWrapper = styled.View<
  InputBorderedColumnWrapperProps
>`
  flex-direction: column;
  padding: 0 ${minimumSpacing};
  width: ${({ hasLeftIcon }: InputBorderedColumnWrapperProps) =>
    hasLeftIcon ? '86%' : '92%'};
  margin-left: ${({ hasLeftIcon }: InputBorderedColumnWrapperProps) =>
    hasLeftIcon ? minimumSpacing : `-${largeSpacing}`};
`;

export const FixedLabel = styled(Typography)<FixedLabelProps>`
  color: ${primaryMain};
  margin-bottom: ${minimumSpacing};
`;

export const InputAreaWrapper = styled.View<InputAreaWrapperProps>`
  padding-top: ${({ padding }: InputAreaWrapperProps) =>
    (!!padding && `${padding}px`) || minimumSpacing};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  padding-left: ${hasLeftIcon(mediumSpacing, '0px')};
  padding-right: ${hasRightIcon(largeSpacing, '0px')};
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
  margin-top: ${isMultiline(smallSpacing, 0)};
  font-size: ${getFontSize}px;
  line-height: ${getLineHeight}px;
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
};

export const Icon = styled(DefaultIcon).attrs((props: IconProps) => ({
  color: hasError(
    failure(props),
    props.iconColor ||
      isContrast(primaryContrast(props), primaryMain(props))(props),
  )(props),
}))<IconProps>``;
