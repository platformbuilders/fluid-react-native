import styled from 'styled-components/native';
import { getTheme } from '../../utils/helpers';
import Typography from '../Typography';

const brandPrimary = getTheme('brand.primary.main');

type Props = {
  testID: string;
  accessibilityLabel: string;
  style: any;
};

export const Text = styled(Typography)<Props>`
  font-weight: 500;
  color: ${brandPrimary};
  text-decoration-color: ${brandPrimary};
  text-decoration-line: underline;
`;
