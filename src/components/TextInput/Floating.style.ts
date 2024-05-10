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
const getFontSizeLG = getTheme('fontSizes.lg');
const getFontSizeXXL = getTheme('fontSizes.xxl');

const TextInputFloating = styled(TextInput).attrs((props: any) => ({
  borderedHeight: 90,
  suppressAnimation: false,
  borderedRadius: 10,
  borderedWidth: getBorderWidth(props),
  borderedColor: getColorByStatus(props)?.borderedColor,
  iconColor: getColorByStatus(props)?.iconColor,
  withBottomline: false,
  fixedLabelVariant: 'animated',
  textStyle: {
    fontSize: getFontSizeXXL(props),
    color: getTextMain(props),
  },
  labelStyle: {
    color: getTextMain(props),
    lineHeight: 24,
  },
  iconSize: 24,
  animationValues: {
    upper: {
      top: -2,
      fontSize: getFontSizeLG(props),
      opacity: 0.4,
    },
    lower: {
      top: 21,
      fontSize: getFontSizeXXL(props),
      opacity: 0.5,
    },
  },
}))``;

export default TextInputFloating;
