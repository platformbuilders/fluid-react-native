import { toNumber } from 'lodash';
import { PixelRatio } from 'react-native';
import { getTheme, toOnlyNumbers } from '@platformbuilders/helpers';

const baseFontSize = 16;

export const getFontSize = (props: any): number => {
  const fontSizeFromTheme = getTheme(`fontSizes.${props.variant}`)(props);
  return (
    PixelRatio.roundToNearestPixel(toNumber(fontSizeFromTheme)) || baseFontSize
  );
};

export const getLineHeight = (props: any): number => {
  const fontSizeFromTheme = getTheme(`fontSizes.${props.variant}`)(props);
  const lineHeightVariant = getTheme(`lineHeight.${props.lineHeightVariant}`)(
    props,
  );
  const lineHeightPercentage = lineHeightVariant ? lineHeightVariant : '120';

  return (
    (Number(fontSizeFromTheme) * Number(toOnlyNumbers(lineHeightPercentage))) /
    100
  );
};
