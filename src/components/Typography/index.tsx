import React, { FC } from 'react';
import { TypographyType } from '@platformbuilders/theme-toolkit';
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
