import { Animations } from './Animations';
import { BorderRadius } from './BorderRadius';
import { ThemeColors } from './Colors';
import { Spacings } from './Spacings';
import { TypographyTheme } from './Typography';

export type ThemeType = ThemeColors &
  Spacings &
  BorderRadius &
  Animations &
  TypographyTheme;
