import { DefaultTheme } from 'styled-components';

import { Animations } from './Animations';
import { BorderRadius } from './BorderRadius';
import { BorderWidth } from './BorderWidth';
import { Colors } from './Colors';
import { FontSizes } from './FontSizes';
import { LineHeight } from './LineHeight';
import { Opacity } from './Opacity';
import { Spacing } from './Spacing';

export interface ThemeType extends Colors, Animations {
  spacing: Spacing;
  borderRadius: BorderRadius;
  borderWidth: BorderWidth;
  lineHeight: LineHeight;
  opacity: Opacity;
  fontSizes: FontSizes;
}

export type ThemeProps = {
  theme: DefaultTheme;
};
