import { ThemeType } from '../types';
import {
  animations,
  borderWidth,
  colors,
  radius,
  spacing,
  typography,
} from './mocks/theme';

export const theme: ThemeType = {
  ...colors,
  animations,
  typography,
  borderWidth,
  spacing,
  radius,
};
