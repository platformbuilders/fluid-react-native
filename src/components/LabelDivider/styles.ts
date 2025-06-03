import styled from 'styled-components/native';
import { getTheme } from '../../utils/helpers';
import Typography from '../Typography';

const disabled = getTheme('text.light');
const smallerSpacing = getTheme('spacing.xs');

export const OptionsWrapper = styled.View`
  margin-top: ${(props: any) => props.marginTop || 0}px;
  margin-bottom: ${(props: any) => props.marginBottom || 0}px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Line = styled.View`
  width: 33%;
  height: 1px;
  background-color: ${disabled}90;
`;

export const DividerText = styled(Typography)`
  padding: ${smallerSpacing}px;
  color: ${disabled}90;
  font-weight: bold;
`;