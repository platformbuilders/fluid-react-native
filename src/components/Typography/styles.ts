import styled from 'styled-components/native';
import { TypographyType, getTheme } from '@platformbuilders/theme-toolkit';
import { getFontSize, getLineHeight } from '../../utils/helpers';

export const Text = styled.Text<TypographyType>`
  color: ${getTheme('text.main')};
  font-size: ${getFontSize}px;
  line-height: ${getLineHeight}px;
`;
