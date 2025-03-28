import { Animated, TextProps, TextStyle } from 'react-native';
import styled from 'styled-components/native';
import {
  getFontSize,
  getLineHeight,
  getTheme,
} from '@platformbuilders/theme-toolkit';

export interface StyledTextProps extends TextProps {
  variant?: string;
  weight?: string;
  align?: string;
  color?: string;
  style?: TextStyle | TextStyle[];
}

export const Text = styled.Text<StyledTextProps>`
  color: ${getTheme('text.main')};
  font-size: ${getFontSize}px;
  line-height: ${getLineHeight}px;
`;

export const AnimatedText = Animated.createAnimatedComponent(Text);
