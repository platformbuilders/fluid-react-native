import { darken, lighten } from 'polished';
import { Colors } from '../../../types';

const primary = '#C6B09E';
const secondary = '#805281';
const tertiary = '#2A2E39';
const accent = '#547E6A';
const info = '#4096D1';
const success = '#357a38';
const warning = '#F5B800';
const failure = '#cc0000';

export default {
  text: '#212121',
  brand: {
    primary,
    secondary,
    tertiary,
    accent,
    contrast: '#cccccc',
  },
  failure: {
    light: lighten(0.05, failure),
    main: failure,
    dark: darken(0.12, failure),
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
  barStyle: {
    style: 'dark-content',
    backgroundColor: primary,
  },
} as Colors;
