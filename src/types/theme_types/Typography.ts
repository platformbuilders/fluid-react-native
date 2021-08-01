import { TypographyVariants } from './Variants';

export type TypographyTheme = {
  largeTitle: number;
  title1: number;
  title2: number;
  title3: number;
  headline: number;
  body: number;
  callout: number;
  subhead: number;
  footnote: number;
  caption1: number;
  caption2: number;
};

export interface TypographyType {
  variant?: TypographyVariants;
  children?: string | string[] | any;
  textRef?: any;
  id?: string;
  accessibility?: string;
  numberOfLines?: number;
}
