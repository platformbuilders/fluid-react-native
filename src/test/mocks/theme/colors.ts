import { darken, lighten } from 'polished';
import { Colors } from '../../../types';

const text = '#000000';
const primary = '#C6B09E';
const secondary = '#805281';
const tertiary = '#2A2E39';
const accent = '#547E6A';
const info = '#4096D1';
const success = '#357a38';
const warning = '#F5B800';
const danger = '#cc0000';

export default {
  text: {
    light: lighten(0.05, text),
    main: text,
    dark: darken(0.12, text),
    contrast: '#ffffff',
  },
  brand: {
    primary: {
      light: lighten(0.05, primary),
      main: primary,
      dark: darken(0.12, primary),
      contrast: '#ffffff',
    },
    secondary: {
      light: lighten(0.05, secondary),
      main: secondary,
      dark: darken(0.12, secondary),
      contrast: '#ffffff',
    },
    tertiary: {
      light: lighten(0.05, tertiary),
      main: tertiary,
      dark: darken(0.12, tertiary),
      contrast: '#ffffff',
    },
    accent: {
      light: lighten(0.05, accent),
      main: accent,
      dark: darken(0.12, accent),
      contrast: '#ffffff',
    },
  },
  danger: {
    light: lighten(0.05, danger),
    main: danger,
    dark: darken(0.12, danger),
    contrast: '#ffffff',
  },
  warning: {
    light: lighten(0.05, warning),
    main: warning,
    dark: darken(0.1, warning),
    contrast: '#ffffff',
  },
  success: {
    light: lighten(0.15, success),
    main: success,
    dark: darken(0.1, success),
    contrast: '#ffffff',
  },
  info: {
    light: lighten(0.05, info),
    main: info,
    dark: darken(0.05, info),
    contrast: '#ffffff',
  },
} as Colors;
