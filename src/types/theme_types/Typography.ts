import { TypographyVariants } from './Variants';

export type TypographyVariantStyle = {
  fontSize: number;
  lineHeight: number;
};

export type TypographyTheme = {
  largeTitle: TypographyVariantStyle;
  title1: TypographyVariantStyle;
  title2: TypographyVariantStyle;
  title3: TypographyVariantStyle;
  headline: TypographyVariantStyle;
  body: TypographyVariantStyle;
  callout: TypographyVariantStyle;
  subhead: TypographyVariantStyle;
  footnote: TypographyVariantStyle;
  caption1: TypographyVariantStyle;
  caption2: TypographyVariantStyle;
};

export interface TypographyType {
  variant?: TypographyVariants;
  children?: string | string[] | any;
  textRef?: any;
  id?: string;
  accessibility?: string;
  numberOfLines?: number;
}
