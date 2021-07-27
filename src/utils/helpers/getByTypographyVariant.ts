import { toNumber } from 'lodash';
import { PixelRatio } from 'react-native';
import { getTheme } from '@platformbuilders/helpers';
// import { TypographyVariantStyle } from '../../types';

export const getFontSize = (props: any): number => {
  const fontSizeFromTheme = getTheme(`${props.variant}.fontSize`)(props);
  return PixelRatio.roundToNearestPixel(toNumber(fontSizeFromTheme)) || 16;
};

export const getLineHeight = (props: any): number => {
  const lineHeight = getTheme(`${props.variant}.lineHeight`)(props) || 22;
  return PixelRatio.roundToNearestPixel(toNumber(lineHeight));
};
