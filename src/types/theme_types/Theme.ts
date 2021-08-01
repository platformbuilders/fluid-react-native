import { Animations } from './Animations';
import { BorderWidth } from './BorderWidth';
import { Colors } from './Colors';
import { Radius } from './Radius';
import { Spacings } from './Spacings';
import { TypographyTheme } from './Typography';

export interface ThemeType extends Colors {
  spacing: Spacings;
  radius: Radius;
  borderWidth: BorderWidth;
  animations: Animations;
  typography: TypographyTheme;
}

// export type ThemeType = Colors &
//   BorderWidth &
//   Animations &
//   TypographyTheme & { spacing: Spacings } & {
//     radius: Radius;
//   };
