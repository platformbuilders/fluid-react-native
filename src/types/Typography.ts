import { TypographyVariants } from '@platformbuilders/theme-toolkit';
import { TextVariant } from '../enums';

export type TypographyType = {
  variant?: TypographyVariants | TextVariant | 'normal' | 'animated';
  lineHeightVariant?: TypographyVariants;
  children?: string | string[] | any;
  id?: string;
  accessibility?: string;
  numberOfLines?: number;
  animated?: boolean;
};
