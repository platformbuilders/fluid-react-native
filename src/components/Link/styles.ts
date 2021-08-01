import styled from 'styled-components/native';
import { getTheme } from '../../utils/helpers';
import Typography from '../Typography';

const brandprimary = getTheme('brand.primary');

type Props = {
  testID: string;
  accessibilityLabel: string;
  style: any;
};

export const Text = styled(Typography)<Props>`
  font-weight: 500;
  color: ${brandprimary};
  text-decoration-color: ${brandprimary};
  text-decoration-line: underline;
`;
