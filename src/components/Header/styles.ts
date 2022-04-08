import styled from 'styled-components/native';

import { getTheme } from '../../utils/helpers';

import TypographyComponent from '../Typography';

export const Wrapper = styled.View`
  flex: 1;
  height: 64px;
`;

export const Title = styled(TypographyComponent).attrs({
  variant: 'xl',
})`
  color: ${getTheme('text.contrast')};
  font-weight: bold;
`;
