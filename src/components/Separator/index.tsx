import React from 'react';
import { DividerText, Line, OptionsWrapper } from './styles';

type Props = {
  marginTop?: number;
  marginBottom?: number;
  text: string;
};

const Separator: React.FC<Props> = ({ text, marginTop, marginBottom }) => (
  <OptionsWrapper marginTop={marginTop} marginBottom={marginBottom}>
    <Line />
    <DividerText>{text}</DividerText>
    <Line />
  </OptionsWrapper>
);

export default Separator;
