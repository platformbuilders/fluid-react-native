import React, { FC } from 'react';
import { ViewProps, View as DefaultView } from 'react-native';
import { View } from './styles';
import If from '../If';

type Props = {
  children?: React.ReactNode;
  hasShadow?: boolean;
} & ViewProps;

const Shadow: FC<Props> = ({ children, hasShadow = true, ...rest }) => (
  <>
    <If condition={hasShadow}>
      <View {...(rest as any)}>{children}</View>
    </If>
    <If condition={!hasShadow}>
      <DefaultView {...(rest as any)}>{children}</DefaultView>
    </If>
  </>
);

export default Shadow;
