import React, { FC } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { TouchableType, TypographyVariants } from '../../types';
import Touchable from '../Touchable';
import { Text } from './styles';

interface Props extends TouchableType {
  children?: React.ReactNode;
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
  variant = 'md',
  style,
  ...rest
}) => (
  <Touchable
    disabled={rest.disabled}
    haptic={rest.haptic}
    id={id}
    onPress={onPress}
    accessibility={accessibility}
    accessibilityLabel={accessibilityLabel}
    testID={testID}
    {...(rest as any)}
  >
    <Text
      testID={`text_${id}`}
      accessibilityLabel={`Texto ${accessibility}`}
      accessibility={`Texto ${accessibility}`}
      style={style}
      variant={variant}
      {...(rest as any)}
    >
      {children}
    </Text>
  </Touchable>
);

export default Link;
