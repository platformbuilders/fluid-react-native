import styled from 'styled-components/native';
import { getTheme } from '@platformbuilders/theme-toolkit';
import TextInput from './index';

const success = getTheme('success.main');
const dangerMain = getTheme('danger.main');

const getColorByStatus = (props: any) => {
  const configByStatus: any = {
    default: {
      borderedColor: getTheme('text.light')(props),
      iconColor: getTheme('text.light')(props),
    },
    success: {
      borderedColor: success(props),
      iconColor: success(props),
    },
    error: {
      borderedColor: dangerMain(props),
      iconColor: dangerMain(props),
    },
    select: {
      borderedColor: getTheme('primary.main')(props),
      iconColor: getTheme('primary.main')(props),
    },
    focus: {
      borderedColor: getTheme('info.main')(props),
      iconColor: getTheme('info.main')(props),
    },
  };

  return configByStatus[props?.status || 'default'];
};

const getTextMain = getTheme('text.main');
const getBorderWidth = getTheme('borderWidth.xs');
const getFontSizeXs = getTheme('fontSizes.xs');
const getFontSizeLG = getTheme('fontSizes.lg');

const TextInputFloating = styled(TextInput).attrs((props: any) => {
  const fontSizeLg = getFontSizeLG(props) as number;
  const fontSizeXs = getFontSizeXs(props) as number;

  return {
    borderedHeight: 65,
    suppressAnimation: false,
    borderedRadius: 8,
    borderedWidth: getBorderWidth(props),
    borderedColor: getColorByStatus(props)?.borderedColor,
    iconColor: getColorByStatus(props)?.iconColor,
    withBottomline: false,
    fixedLabelVariant: 'animated',
    textStyle: {
      fontSize: fontSizeLg,
      color: getTextMain(props),
      paddingBottom: 5,
    },
    labelStyle: {
      lineHeight: 24,
      color: getTextMain(props),
    },
    iconSize: 18,
    animationValues: {
      upper: {
        top: 2,
        fontSize: fontSizeXs,
        opacity: 0.4,
      },
      lower: {
        top: 14,
        fontSize: fontSizeLg,
        opacity: 0.5,
      },
    },
  };
})``;

export default TextInputFloating;
