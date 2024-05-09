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

const getTextBase = getTheme('fontSizes.lg');
const getBorderedRadius = getTheme('borderRadius.lg');
const getTextMain = getTheme('text.main');
const getBorderWidth = getTheme('borderWidth.xxs');
const getSizeMax = getTheme('sizing.max');

const TextInputFloating = styled(TextInput).attrs((props: any) => ({
  borderedHeight: getSizeMax(props),
  suppressAnimation: false,
  borderedRadius: getBorderedRadius(props),
  borderedWidth: getBorderWidth(props),
  borderedColor: getColorByStatus(props)?.borderedColor,
  iconColor: getColorByStatus(props)?.iconColor,
  withBottomline: false,
  fixedLabelVariant: 'animated',
  textStyle: {
    fontSize: getTextBase(props),
    color: getTextMain(props),
  },
  labelStyle: {
    color: getTextMain(props),
    lineHeight: 24,
  },
  animationValues: {
    upper: {
      top: 2,
      fontSize: 12,
      opacity: 0.8,
    },
    lower: {
      top: 15,
      fontSize: 16,
      opacity: 1,
    },
  },
}))``;

export default TextInputFloating;
