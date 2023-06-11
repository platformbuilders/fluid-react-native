import { SwitchProps } from 'react-native';
import styled from 'styled-components/native';
import { ThemeProps, getTheme } from '@platformbuilders/theme-toolkit';

const textColor = getTheme('text.main');
const primaryMain = getTheme('brand.primary.main');
const backgroundZ4 = getTheme('background.z4');

type SwitchInternalProps = {
  thumbColorProps?: {
    trueColor: string;
    falseColor: string;
  };
  trackColorProps?: {
    trueColor: string;
    falseColor: string;
  };
};

type GeneralProps = SwitchProps & SwitchInternalProps & ThemeProps;

export const SwitchButton = styled.Switch.attrs((props: GeneralProps) => ({
  thumbColor: props.value
    ? props.thumbColorProps?.trueColor || primaryMain(props)
    : props.thumbColorProps?.falseColor || backgroundZ4(props),
  trackColor: {
    false: props.trackColorProps?.falseColor || `${textColor(props)}4D`,
    true: props.trackColorProps?.trueColor || `${primaryMain(props)}80`,
  },
  ios_backgroundColor:
    props.trackColorProps?.falseColor || `${textColor(props)}4D`,
}))``;
