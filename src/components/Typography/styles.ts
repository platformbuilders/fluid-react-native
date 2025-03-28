import { Animated, TextProps, TextStyle } from 'react-native';
import styled from 'styled-components/native';
import {
  TypographyVariants,
  getFontSize,
  getLineHeight,
  getTheme,
} from '@platformbuilders/theme-toolkit';
import { TextVariant } from '../../enums';

export interface StyledTextProps extends TextProps {
  variant?: TypographyVariants | TextVariant;
  weight?: string;
  align?: string;
  color?: string;
  style?: TextStyle | TextStyle[];
  lineHeightVariant?: TypographyVariants;
}

export const Text = styled.Text<StyledTextProps>`
  color: ${getTheme('text.main')};
  font-size: ${getFontSize}px;
  line-height: ${getLineHeight}px;
`;

export const AnimatedText = Animated.createAnimatedComponent(Text);
