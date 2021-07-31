import { StatusBarStyle as RNBarStyle } from 'react-native';

interface BaseColor {
  contrast: string;
}

interface Colors extends BaseColor {
  light: string;
  main: string;
  dark: string;
}

interface BrandColors extends BaseColor {
  primary: string;
  secondary: string;
  tertiary: string;
  accent: string;
}

interface DepthColors {
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
}

export interface StatusBarStyle {
  style: RNBarStyle;
  backgroundColor: string;
}

export interface ColorTokens {
  text: string;
  brand: BrandColors;
  failure: Colors;
  warning: Colors;
  success: Colors;
  info: Colors;
  depth: DepthColors;
  barStyle: StatusBarStyle;
}

export interface ThemeColors {
  light: ColorTokens;
  dark: ColorTokens;
}
