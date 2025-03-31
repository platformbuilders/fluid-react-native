import React, { useEffect, useImperativeHandle, useRef, useState } from 'react';
import { isEmpty } from 'lodash';
import { Source } from 'react-native-fast-image';
import {
  ImageLibraryOptions,
  launchImageLibrary,
} from 'react-native-image-picker';
import { formatToMonogram } from '@platformbuilders/helpers';
import { ImagePlaceholder as defaultAvatar } from '../../assets/images';
import { AvatarProps as AvatarType } from '../../types';
import Image from '../Image';
import {
  MonogramText,
  MonogramWrapper,
  Wrapper,
} from './styles';

const Avatar: React.FC<AvatarType> = React.forwardRef(
  (
    {
      id,
      image,
      animatedLoading = true,
      accessibility = 'Upload de Avatar',
      accessibilityLabel,
      size = 50,
      imageQuality = 0.5,
      borderWidth = 2,
      onPress,
      onUpload,
      showBorder = true,
      displayMonogram = true,
      name,
      monogramStyle,
      ...rest
    },
    ref,
  ) => {
    const [visibleImage, setVisibleImage] = useState<string | undefined>();
    const cameraRef = useRef<any>();

    const openPicker = async (): Promise<void> => {
      const options: ImageLibraryOptions = {
        mediaType: 'photo',
        quality: imageQuality,
      };
      try {
        const response = await launchImageLibrary(options);
        const didCancel = response?.didCancel;
        const uri = response?.assets?.[0]?.uri;
        
        if (!didCancel && uri) {
          setVisibleImage(uri);
          if (onUpload) {
            onUpload(uri);
          }
        }
      } catch (error) {
        console.error("ImagePicker Error: ", error);
      }
    };

    const takePicture = async (): Promise<void> => {
      if (cameraRef.current) {
        const options = { quality: 0.5, base64: true };
        const data = await cameraRef.current.takePictureAsync(options);
        return data;
      }
    };

    const getUploadImage = (): any => {
      return visibleImage;
    };

    const clearUploadImage = (): void => {
      setVisibleImage(undefined);
    };

    const getCurrentAvatar = (): Source | any => {
      if (visibleImage) {
        return { uri: visibleImage };
      }
      if (image && !isEmpty(image)) {
        return { uri: image };
      }
      return defaultAvatar;
    };

    useImperativeHandle(ref, () => ({
      getUploadImage,
      clearUploadImage,
      takePicture,
      openPicker,
    }));

    useEffect(() => {
      if (
        image &&
        typeof image === 'object' &&
        !Array.isArray(image) &&
        'uri' in image &&
        image.uri
      ) {
        setVisibleImage(image.uri);
      } else {
        setVisibleImage(undefined);
      }
    }, [image]);

    return (
      <Wrapper
        id={id || accessibility}
        accessibility={accessibility}
        accessibilityLabel={accessibilityLabel || accessibility}
        size={size}
        onPress={onPress || (onUpload && openPicker)}
        disabled={!onPress && !onUpload}
        showBorder={showBorder}
        borderWidth={borderWidth}
        {...rest}
      >
        {visibleImage ? (
          <Image
            displayPlaceholder={animatedLoading}
            source={getCurrentAvatar()}
            resizeMode="cover"
            style={{ width: '101%', height: '101%' }}
          />
        ) : (
          <>
            {!visibleImage && !!name && displayMonogram && (
              <MonogramWrapper size={size}>
                <MonogramText size={size} style={monogramStyle}>
                  {formatToMonogram(name)}
                </MonogramText>
              </MonogramWrapper>
            )}
          </>
        )}
      </Wrapper>
    );
  },
);

Avatar.displayName = 'AvatarComponent';

export default Avatar;
