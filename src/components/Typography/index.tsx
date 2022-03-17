import React, { FC } from 'react';
import { TypographyType } from '../../types';
import { Text } from './styles';

const Typography: FC<TypographyType> = ({
  textRef = React.createRef(),
  variant = 'md',
  lineHeightVariant = 'min',
  children,
  id,
  accessibility,
  ...rest
}) => (
  <Text
    testID={id || accessibility || `${children}`}
    accessibility={accessibility || `${children}`}
    accessibilityLabel={accessibility || `${children}`}
    ref={textRef}
    variant={variant}
    lineHeightVariant={lineHeightVariant}
    {...rest}
  >
    {children}
  </Text>
);

export default Typography;
