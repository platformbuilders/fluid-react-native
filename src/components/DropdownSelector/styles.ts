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

type BorderedWrapperProps = {
  borderedBackgroundColor?: string;
  borderedHeight?: number;
  borderedColor?: string;
  borderedRadius?: number;
  error?: boolean;
  borderWidth?: number;
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
    borderWidth,
    ...rest
  }: BorderedWrapperProps) => {
    const borderedStyle = `
      justify-content: center;
      border: ${borderedColor ? borderWidth || 1 : 0}px solid ${
      error ? failure(rest) : borderedColor || primaryMain(rest)
    };
      background-color: ${borderedBackgroundColor || 'transparent'};
      height: ${borderedHeight}px;
      border-radius: ${borderedRadius ? borderedRadius : 0}px;
    `;

    return `
    border: 0;
    ${borderedStyle}
  `;
  }}
`;

export const InputBorderedAreaWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const InputBorderedColumnWrapper = styled.View<InputBorderedColumnWrapperProps>`
  flex-direction: column;
  flex: 1;
`;

export const FixedLabel = styled(Typography)<FixedLabelProps>`
  color: ${primaryMain};
  margin-bottom: ${minimumSpacing};
  margin-top: ${minimumSpacing};
  position: absolute;
`;

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
