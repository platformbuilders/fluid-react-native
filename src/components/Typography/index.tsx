import React, { forwardRef } from 'react';
import { TypographyType } from '../../types';
import { AnimatedText, Text } from './styles';

const Typography = forwardRef<any, TypographyType>(
  (
    {
      variant = 'md',
      lineHeightVariant = 'min',
      children,
      id,
      accessibility,
      ...rest
    },
    ref,
  ) => {
    if (variant === 'animated') {
      return (
        <AnimatedText
          ref={ref}
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
        ref={ref}
        testID={id || accessibility || `${children}`}
        accessibilityLabel={accessibility || `${children}`}
        variant={variant}
        lineHeightVariant={lineHeightVariant}
        {...rest}
      >
        {children}
      </Text>
    );
  },
);

export default Typography;
