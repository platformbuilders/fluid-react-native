import styled from 'styled-components/native';
import { getTheme } from '@platformbuilders/theme-toolkit';
import Typography from '../Typography';

const brandPrimary = getTheme('brand.primary.main');
const spacingSm = getTheme('spacing.sm');

type Props = {
  testID: string;
  accessibilityLabel: string;
  style: any;
};

export const Text = styled(Typography)<Props>`
  font-weight: 500;
  color: ${(props) => props.theme.text.main};
  text-decoration-color: ${brandPrimary};
  text-decoration-line: underline;
  margin-left: ${spacingSm}px;
`;
