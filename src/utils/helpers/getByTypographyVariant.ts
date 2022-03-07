import { toNumber } from 'lodash';
import { PixelRatio } from 'react-native';
import { getTheme } from '@platformbuilders/helpers';

const baseFontSize = 16;

export const getFontSize = (props: any): number => {
  const fontSizeFromTheme = getTheme(`fontSizes.${props.variant}`)(props);
  return (
    PixelRatio.roundToNearestPixel(toNumber(fontSizeFromTheme)) || baseFontSize
  );
};

export const getLineHeight = (): number => {
  /* careful here, guys... it doesn't get from theme */
  const lineHeight = baseFontSize * 1.4;
  return PixelRatio.roundToNearestPixel(toNumber(lineHeight));
};
