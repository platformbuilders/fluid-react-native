import styled from 'styled-components/native';

import { getTheme } from '../../utils/helpers';

import Typography from '../Typography';

const brandPrimary = getTheme('brand.primary');
const smallSpacing = getTheme('spacing.sm');

export const Text = styled(Typography).attrs({
  variant: 'subhead',
})`
  color: ${brandPrimary};
  text-align: center;
  margin-vertical: ${smallSpacing}px;
`;
