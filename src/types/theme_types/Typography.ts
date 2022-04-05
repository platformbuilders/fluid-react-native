import { TypographyVariants } from './Variants';

export interface TypographyType {
  variant?: TypographyVariants;
  lineHeightVariant?: TypographyVariants;
  children?: string | string[] | any;
  textRef?: any;
  id?: string;
  accessibility?: string;
  numberOfLines?: number;
}
