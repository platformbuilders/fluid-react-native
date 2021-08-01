import { Animations } from './Animations';
import { BorderRadius } from './BorderRadius';
import { BorderWidth } from './BorderWidth';
import { Colors } from './Colors';
import { Spacing } from './Spacing';
import { TypographyTheme } from './Typography';

export interface ThemeType extends Colors {
  spacing: Spacing;
  borderRadius: BorderRadius;
  borderWidth: BorderWidth;
  animations: Animations;
  typography: TypographyTheme;
}
