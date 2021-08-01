import { ThemeType } from '../types';
import {
  animations,
  borderRadius,
  borderWidth,
  colors,
  spacing,
  typography,
} from './mocks/theme';

export const theme: ThemeType = {
  ...colors,
  animations,
  typography,
  borderWidth,
  spacing,
  borderRadius,
};
