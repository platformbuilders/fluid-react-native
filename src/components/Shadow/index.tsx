import React, { FC, ReactNode } from 'react';
import { View as DefaultView } from 'react-native';
import If from '../If';
import { View } from './styles';

type Props = {
  hasShadow?: boolean;
  children?: ReactNode;
};

const Shadow: FC<Props> = ({ children, hasShadow = true, ...rest }) => (
  <>
    <If condition={hasShadow}>
      <View {...rest}>{children}</View>
    </If>
    <If condition={!hasShadow}>
      <DefaultView {...rest}>{children}</DefaultView>
    </If>
  </>
);

export default Shadow;
