import React, { useContext, useState } from 'react';
import FastImage from 'react-native-fast-image';
import { Placeholder, PlaceholderMedia, Shine } from 'rn-placeholder';
import { ThemeContext } from 'styled-components';
import { ImageProps } from '../../types';
import { Wrapper } from './styles';

const Image: React.FC<ImageProps> = ({
  id,
  accessibility,
  containerStyle,
  displayPlaceholder = true,
  animationColor,
  animationContainerColor,
  style,
  ...rest
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const theme = useContext(ThemeContext);

  const onImageLoad = () => {
    console.log('LOG:  onImageLoad  onImageLoad:');
    setIsLoading(false);
  };

  const onImageLoadStart = () => {
    console.log('LOG:  onImageLoadStart  onImageLoadStart:');
    setIsLoading(true);
  };

  const animationStyling = (animationProps: any) => (
    <Shine
      {...animationProps}
      style={[
        animationProps.style,
        {
          backgroundColor: animationColor || theme.background.z3,
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
                backgroundColor: animationContainerColor || theme.background.z2,
              },
            ]}
          />
        </Placeholder>
      )}
      <FastImage
        testID={id}
        accessibilityLabel={accessibility}
        onLoadStart={onImageLoadStart}
        onLoad={onImageLoad}
        style={style}
        {...rest}
      />
    </Wrapper>
  );
};

export default Image;
