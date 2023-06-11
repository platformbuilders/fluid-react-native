import React, { FC } from 'react';
import { TypographyType } from '../../types';
import { Text } from './styles';

const Typography: FC<TypographyType> = ({
  variant = 'md',
  lineHeightVariant = 'min',
  children,
  id,
  accessibility,
  ...rest
}) => (
  <Text
    testID={id || accessibility || `${children}`}
    accessibilityLabel={accessibility || `${children}`}
    variant={variant}
    lineHeightVariant={lineHeightVariant}
    {...rest}
  >
    {children}
  </Text>
);

export default Typography;
