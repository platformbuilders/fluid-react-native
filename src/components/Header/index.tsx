import React, { FC } from 'react';

import { Title, Wrapper } from './styles';

type Props = {
  title: string;
};

const Header: FC<Props> = ({ title }) => (
  <Wrapper>
    <Title>{title}</Title>
  </Wrapper>
);

export default Header;
