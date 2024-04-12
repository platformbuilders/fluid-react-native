import DefaultCheckbox from 'react-native-check-box';
import styled from 'styled-components/native';
import { getTheme } from '@platformbuilders/theme-toolkit';
import Touchable from '../Touchable';
import TypographyComponent from '../Typography';

const infoMain = getTheme('info.main');
const textColor = getTheme('text.main');
const spacingSm = getTheme('spacing.sm');
const opacityOverlay = getTheme('opacity.overlay');

export const Wrapper = styled(Touchable)`
  flex-direction: row;
  align-items: center;
`;

export const containerStyle = {
  marginBottom: 0,
};

export const CheckBox = styled(DefaultCheckbox).attrs((props: any) => ({
  checkBoxColor: `${infoMain(props)}`,
  checkedCheckBoxColor: `${infoMain(props)}`,
}))<{ testID?: string; accessibilityLabel?: string }>``;

export const Label = styled(TypographyComponent).attrs({
  variant: 'md',
})<any>`
  flex-direction: row;
  color: ${textColor};
  opacity: ${opacityOverlay};
  margin-left: ${spacingSm}px;
`;
