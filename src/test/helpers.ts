import { FluidTheme } from '@platformbuilders/theme-toolkit';
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

export const theme: FluidTheme = {
  ...colors,
  ...animations,
  opacity,
  lineHeight,
  fontSizes: typography,
  borderWidth,
  spacing,
  borderRadius,
};
