import { ThemeType } from '../types';
import {
  animations,
  borderRadius,
  borderWidth,
  colors,
  opacity,
  spacing,
  typography,
} from './mocks/theme';

export const theme: ThemeType = {
  ...colors,
  ...animations,
  opacity,
  typography,
  borderWidth,
  spacing,
  borderRadius,
};
