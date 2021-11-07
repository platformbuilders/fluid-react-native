import styled from 'styled-components/native';
import { TypographyType } from '../../types';
import { getFontSize, getTheme } from '../../utils/helpers';

export const Text = styled.Text<TypographyType>`
  color: ${getTheme('text.main')};
  font-size: ${getFontSize}px;
`;
