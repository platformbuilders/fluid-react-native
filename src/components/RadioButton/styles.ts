import { StyleProp, TextStyle } from 'react-native';
import styled from 'styled-components/native';
import { getTheme, ifStyle } from '@platformbuilders/theme-toolkit';
import Touchable from '../Touchable';
import Typography from '../Typography';

const textColor = getTheme('text.main');
const checkedRadioColor = getTheme('brand.primary.main');
const spacingSm = getTheme('spacing.sm');

const smBorderWidth = getTheme('borderWidth.sm');

const hasColor = ifStyle('radioButtonColor');
const hasCheckedColor = ifStyle('checkedRadioButtonColor');

type RadioProps = {
  radioButtonColor?: string;
  size: number;
};

export const Wrapper = styled(Touchable)`
  flex-direction: row;
  align-items: center;
`;

export const Radio = styled(Touchable)<RadioProps>`
  width: ${({ size }: RadioProps) => size}px;
  height: ${({ size }: RadioProps) => size}px;
  border-radius: ${({ size }: RadioProps) => size / 2}px;
  border: ${smBorderWidth}px
    ${({ radioButtonColor }: RadioProps): any =>
      hasColor(radioButtonColor, textColor)}${hasColor('', '4D')};
  align-items: center;
  justify-content: center;
`;

type CheckRadioProps = {
  checkedRadioButtonColor?: string;
  internalSize: number;
};

export const CheckedRadio = styled.View<CheckRadioProps>`
  width: ${({ internalSize }: CheckRadioProps) => internalSize}px;
  height: ${({ internalSize }: CheckRadioProps) => internalSize}px;
  background-color: ${({ checkedRadioButtonColor }: CheckRadioProps): any =>
    hasCheckedColor(checkedRadioButtonColor, checkedRadioColor)};
  border-radius: ${({ internalSize }: CheckRadioProps) => internalSize / 2}px;
`;

type LabelProps = {
  style?: StyleProp<TextStyle>;
};

export const Label = styled(Typography).attrs({ variant: 'sm' })<LabelProps>`
  margin-left: ${spacingSm}px;
`;
