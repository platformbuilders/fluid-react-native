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

const getTextBase = getTheme('sizing.md');
const getBorderedRadius = getTheme('borderRadius.md');
const getTextMain = getTheme('text.main');
const getBorderWidth = getTheme('borderWidth.xxs');

const TextInputFloating = styled(TextInput).attrs((props: any) => ({
  borderedHeight: 56,
  suppressAnimation: false,
  borderedRadius: getBorderedRadius(props),
  borderedWidth: getBorderWidth(props),
  borderedColor: getColorByStatus(props)?.borderedColor,
  focusBorderedColor: getColorByStatus(props)?.borderedColor,
  iconColor: getColorByStatus(props)?.iconColor,
  withBottomline: false,
  fixedLabelVariant: 'animated',
  textStyle: {
    fontSize: getTextBase(props),
  },
  labelStyle: {
    color: getTextMain(props),
    fontWeight: 400,
    lineHeight: 24,
  },
  animationValues: {
    upper: {
      top: 2,
      fontSize: 12,
    },
    lower: {
      top: 15,
      fontSize: 16,
    },
  },
}))``;

export default TextInputFloating;
