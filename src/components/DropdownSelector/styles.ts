import styled from 'styled-components/native';
import { getTheme, ifStyle } from '../../utils/helpers';
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

const hasLabel = ifStyle('label');
const hasError = ifStyle('error');
const isContrast = ifStyle('contrast');
const primaryContrast = getTheme('primary.contrast');
const primaryMain = getTheme('primary.main');
const minimumSpacing = getTheme('minimumSpacing');
const smallSpacing = getTheme('smallSpacing');
const mediumSpacing = getTheme('mediumSpacing');
const failure = getTheme('failure');

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

export const BorderedAreaWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const BorderedColumnWrapper = styled.View<InputBorderedColumnWrapperProps>`
  flex-direction: column;
  flex: 1;
`;

export const FixedLabel = styled(Typography)<FixedLabelProps>`
  color: ${primaryMain};
  margin-bottom: ${minimumSpacing};
  margin-top: ${minimumSpacing};
  margin-left: ${mediumSpacing};
  position: absolute;
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
