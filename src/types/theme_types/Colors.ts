import { StatusBarStyle as RNBarStyle } from 'react-native';

interface BaseColor {
  contrast: string;
}

interface DefaultColors extends BaseColor {
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
export interface StatusBarStyle {
  style: RNBarStyle;
  backgroundColor: string; // Android only
}

export interface Colors {
  text: string;
  brand: BrandColors;
  failure: DefaultColors;
  warning: DefaultColors;
  success: DefaultColors;
  info: DefaultColors;
  barStyle: StatusBarStyle;
}
