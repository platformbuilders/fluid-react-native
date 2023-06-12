import { SwitchProps } from 'react-native';
import styled from 'styled-components/native';
import { ThemeProps, getTheme } from '@platformbuilders/theme-toolkit';

const primaryMain = getTheme('brand.primary.main');
const backgroundZ4 = getTheme('background.z4');
const backgroundZ3 = getTheme('background.z3');

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

export const SwitchButton = styled.Switch.attrs((props: GeneralProps) => {
  const { value, thumbColorProps, trackColorProps } = props;
  const activeColor = thumbColorProps?.trueColor || primaryMain(props);
  const inactiveColor = thumbColorProps?.falseColor || backgroundZ4(props);
  //
  const falseTrackColor =
    trackColorProps?.falseColor || `${backgroundZ3(props)}`;
  const trueTrackColor = trackColorProps?.trueColor || `${activeColor}30`;
  const iosBackgroundColor =
    trackColorProps?.falseColor || `${inactiveColor}4D`;

  return {
    thumbColor: value ? activeColor : inactiveColor,
    trackColor: {
      false: falseTrackColor,
      true: trueTrackColor,
    },
    ios_backgroundColor: iosBackgroundColor,
  };
})``;
