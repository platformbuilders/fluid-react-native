import { TypographyVariants } from '@platformbuilders/theme-toolkit';

export type TypographyType = {
  variant?: any;
  lineHeightVariant?: TypographyVariants;
  children?: string | string[] | any;
  id?: string;
  accessibility?: string;
  numberOfLines?: number;
};
