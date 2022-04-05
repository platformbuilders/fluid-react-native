import { ThemeType } from '../types';
import {
  animations,
  borderRadius,
  borderWidth,
  colors,
  lineHeight,
  opacity,
  spacing,
  typography,
} from './mocks/theme';

export const theme: ThemeType = {
  ...colors,
  ...animations,
  opacity,
  lineHeight,
  fontSizes: typography,
  borderWidth,
  spacing,
  borderRadius,
};
