import { Animated } from 'react-native';
import styled from 'styled-components/native';
import {
  getFontSize,
  getLineHeight,
  getTheme,
} from '@platformbuilders/theme-toolkit';

export const Text = styled.Text<any>`
  color: ${getTheme('text.main')};
  font-size: ${getFontSize}px;
  line-height: ${getLineHeight}px;
`;

export const AnimatedText = Animated.createAnimatedComponent(Text);
