import React, { FC } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { TouchableType, TypographyVariants } from '../../types';
import Touchable from '../Touchable';
import { Text } from './styles';

interface Props extends TouchableType {
  variant?: TypographyVariants;
  style?: StyleProp<ViewStyle>;
}

const Link: FC<Props> = ({
  id,
  onPress,
  children,
  accessibility,
  accessibilityLabel,
  testID,
  variant = 'body',
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
