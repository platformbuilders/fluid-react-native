import { StatusBarStyle as RNBarStyle } from 'react-native';
import { Depth } from './Depth';

interface BaseColor {
  contrast: string;
}

interface DefaultColors extends BaseColor {
  light: string;
  main: string;
  dark: string;
}

interface BrandColors {
  primary: DefaultColors;
  secondary: DefaultColors;
  tertiary: DefaultColors;
  accent: DefaultColors;
}

export interface StatusBarStyle {
  style: RNBarStyle;
  backgroundColor: string; // Android only
}

// Theme dark/light
export interface Colors {
  background: Depth;
  text: DefaultColors;
  brand: BrandColors;
  failure: DefaultColors;
  warning: DefaultColors;
  success: DefaultColors;
  info: DefaultColors;
}
