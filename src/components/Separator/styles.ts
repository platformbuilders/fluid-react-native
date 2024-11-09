import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { getTheme } from '@platformbuilders/theme-toolkit';
import Typography from '../Typography';

const smallerSpacing = getTheme('spacing.xs');
const disabled = getTheme('text.light');

type Props = {
  marginTop?: number;
  marginBottom?: number;
};

export const OptionsWrapper = styled.View`
  margin-top: ${({ marginTop }: Props) => marginTop || 0}px;
  margin-bottom: ${({ marginBottom }: Props) => marginBottom || 0}px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Line = styled.View`
  width: 33%;
  height: ${StyleSheet.hairlineWidth}px;
  background-color: ${disabled}90;
`;

export const DividerText = styled(Typography)`
  padding: ${smallerSpacing}px;
  color: ${disabled}90;
  font-weight: bold;
`;
