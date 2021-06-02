import { Animations } from './Animations';
import { Colors } from './Colors';
import { Radius } from './Radius';
import { Spacings } from './Spacings';
import { TypographyTheme } from './Typography';

export type ThemeType = Colors &
  Spacings &
  Radius &
  Animations &
  TypographyTheme;
