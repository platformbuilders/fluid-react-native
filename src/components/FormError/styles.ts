import styled from 'styled-components/native';
import { getTheme, ifStyle } from '../../utils/helpers';
import Typography from '../Typography';

const isCentered = ifStyle('centered');
const isLarge = ifStyle('large');
const failure = getTheme('failure.main');
const smallSpacing = getTheme('spacing.sm');

type ErrorTextProps = {
  centered: boolean;
  large: boolean;
  accessibilityLabel: string;
  testID: string;
};

export const ErrorText = styled(Typography).attrs((props: ErrorTextProps) => ({
  variant: isLarge('sm', 'xs')(props),
}))<ErrorTextProps>`
  color: ${failure};
  text-align: ${isCentered('center', 'left')};
  margin-top: ${isLarge(0, smallSpacing)}px;
`;
