import React, { FC } from 'react';
import { TypographyType } from '../../types';
import { Text } from './styles';

const Typography: FC<TypographyType> = ({
  textRef = React.createRef(),
  variant = 'md',
  lineHeightVariant = 'md',
  children,
  id,
  accessibility,
  ...rest
}) => {
  const testID = id || accessibility || `${children}`;
  const accessibilityLabel = (rest as any).accessibilityLabel || accessibility || `${children}`;

  return (
    <Text
      numberOfLines={rest.numberOfLines}
      testID={testID}
      accessibility={accessibility}
      accessibilityLabel={accessibilityLabel}
      variant={variant}
      lineHeightVariant={lineHeightVariant}
      {...(rest as any)}
    >
      {children}
    </Text>
  );
};

export default Typography;