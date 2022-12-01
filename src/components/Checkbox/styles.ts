import DefaultCheckbox from 'react-native-check-box';
import styled from 'styled-components/native';
import { getTheme } from '../../utils/helpers';
import TypographyComponent from '../Typography';

const primaryColor = getTheme('brand.primary.main');
const textColor = getTheme('text.main');
const spacingSm = getTheme('spacing.sm');
const opacityOverlay = getTheme('opacity.overlay');

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const containerStyle = {
  marginBottom: 0,
};

export const CheckBox = styled(DefaultCheckbox).attrs((props) => ({
  checkBoxColor: `${primaryColor(props)}`,
  checkedCheckBoxColor: `${primaryColor(props)}`,
}))<{ testID?: string; accessibilityLabel?: string }>``;

export const Label = styled(TypographyComponent).attrs({
  variant: 'md',
})<any>`
  flex-direction: row;
  color: ${textColor};
  opacity: ${opacityOverlay};
  margin-left: ${spacingSm}px;
`;
