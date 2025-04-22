import React, { useContext, useState } from 'react';
import { Image as RNImage } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Placeholder, PlaceholderMedia, Shine } from 'rn-placeholder';
import { ThemeContext } from 'styled-components';
import { ImageProps } from '../../types';
import { Wrapper } from './styles';

const Image: React.FC<ImageProps> = ({
  id,
  testID,
  accessibility,
  containerStyle,
  displayPlaceholder = true,
  animationColor,
  animationContainerColor,
  style,
  source,
  ...rest
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const theme = useContext(ThemeContext);

  const onImageLoad = () => {
    setIsLoading(false);
  };

  const onImageLoadStart = () => {
    setIsLoading(true);
  };

  const animationStyling = (animationProps: any) => (
    <Shine
      {...animationProps}
      style={[
        animationProps.style,
        {
          backgroundColor: animationColor || theme?.background?.z3,
        },
      ]}
    />
  );

  return (
    <Wrapper style={containerStyle}>
      {isLoading && displayPlaceholder && (
        <Placeholder Animation={animationStyling}>
          <PlaceholderMedia
            style={[
              style,
              {
                backgroundColor:
                  animationContainerColor || theme?.background?.z2,
              },
            ]}
          />
        </Placeholder>
      )}
      {(typeof source === 'object' || typeof source === 'string') && (
        <FastImage
          fallback
          source={source as any}
          testID={testID || id}
          accessibilityLabel={accessibility}
          onLoadStart={onImageLoadStart}
          onLoad={onImageLoad}
          style={style}
          {...rest}
        />
      )}
      {typeof source === 'number' && (
        <RNImage
          source={source as any}
          testID={testID || id}
          accessibilityLabel={accessibility}
          style={style as any}
          {...rest}
        />
      )}
    </Wrapper>
  );
};

export default Image;
