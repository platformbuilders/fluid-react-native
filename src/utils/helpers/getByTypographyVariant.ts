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

export const getLineHeight = (props: any): number => {
  const lineHeight =
    (((getTheme(`fontSizes.${props.variant}`)(props) as unknown) as number) ||
      baseFontSize) * 1.4;
  return PixelRatio.roundToNearestPixel(toNumber(lineHeight));
};
