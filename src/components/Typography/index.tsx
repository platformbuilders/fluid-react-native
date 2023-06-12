import React, { FC } from 'react';
import { TypographyType } from '../../types';
import { AnimatedText, Text } from './styles';

const Typography: FC<TypographyType> = ({
  variant = 'md',
  lineHeightVariant = 'min',
  children,
  id,
  accessibility,
  ...rest
}) => {
  if (variant === 'animated') {
    return (
      <AnimatedText
        testID={id || accessibility || `${children}`}
        accessibilityLabel={accessibility || `${children}`}
        variant={variant}
        lineHeightVariant={lineHeightVariant}
        {...rest}
      >
        {children}
      </AnimatedText>
    );
  }
  return (
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
};

export default Typography;
