import 'styled-components';
import { ThemeType } from './theme_types/Theme';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
