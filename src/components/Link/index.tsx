import React, { FC, PropsWithChildren } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { TypographyVariants } from '@platformbuilders/theme-toolkit';
import { TouchableType } from '../../types';
import Touchable from '../Touchable';
import { Text } from './styles';

interface Props extends TouchableType {
  variant?: TypographyVariants;
  style?: StyleProp<ViewStyle>;
}

const Link: FC<PropsWithChildren<Props>> = ({
  id,
  onPress,
  children,
  accessibility,
  accessibilityLabel,
  testID,
  variant = 'md',
  style,
  ...rest
}) => (
  <Touchable
    id={id || accessibility}
    onPress={onPress}
    accessibility={accessibility}
    accessibilityLabel={accessibilityLabel || accessibility}
    testID={testID || id || accessibility}
    {...rest}
  >
    <Text
      testID={`text_${id}`}
      accessibilityLabel={`Texto ${accessibility}`}
      accessibility={`Texto ${accessibility}`}
      style={style}
      variant={variant}
    >
      {children}
    </Text>
  </Touchable>
);

export default Link;
