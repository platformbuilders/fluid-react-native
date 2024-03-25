import styled from 'styled-components/native';

import { getTheme } from '@platformbuilders/theme-toolkit';

import Typography from '../Typography';

const brandPrimary = getTheme('brand.primary.main');
const smallSpacing = getTheme('spacing.sm');

export const Text = styled(Typography).attrs({
  variant: 'xs',
})`
  color: ${brandPrimary};
  text-align: center;
  margin-vertical: ${smallSpacing}px;
`;
