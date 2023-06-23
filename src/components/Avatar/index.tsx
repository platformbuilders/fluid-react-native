import React, { useEffect, useImperativeHandle, useState } from 'react';
import {
  ImageLibraryOptions,
  launchImageLibrary,
} from 'react-native-image-picker';
import { formatToMonogram } from '@platformbuilders/helpers';
import { AvatarType } from '../../types';
import Image from '../Image';
import {
  MonogramText,
  MonogramWrapper,
  UploadIcon,
  UploadIconWrapper,
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
      testID,
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
    const [uploadedImage, setUploadedImage] = useState<string | undefined>();

    const openPicker = (): Promise<void> => {
      const options: any | ImageLibraryOptions = {
        title: 'Selecionar foto',
        cancelButtonTitle: 'Cancelar',
        takePhotoButtonTitle: 'Tirar foto',
        chooseFromLibraryButtonTitle: 'Escolher da galeria',
        imageQuality,
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };
      return new Promise((resolve) => {
        launchImageLibrary(options, (response) => {
          if (!response.didCancel && response.assets) {
            setUploadedImage(response?.assets[0]?.uri);
          }
          resolve();
        });
      });
    };

    const getUploadImage = (): any => {
      return visibleImage;
    };

    const clearUploadImage = (): void => {
      setVisibleImage(undefined);
    };

    useImperativeHandle(ref, () => ({
      getUploadImage,
      clearUploadImage,
      openPicker,
    }));

    useEffect(() => {
      if (!!image) {
        setVisibleImage(image);
      }
    }, [image]);

    useEffect(() => {
      if (!!uploadedImage && !!onUpload) {
        onUpload(uploadedImage);
      }
    }, [uploadedImage]);

    return (
      <Wrapper
        id={id || accessibility}
        accessibility={accessibility}
        accessibilityLabel={accessibilityLabel || accessibility}
        testID={testID || id}
        size={size}
        onPress={onPress || (onUpload && openPicker)}
        disabled={!onPress && !onUpload}
        showBorder={showBorder}
        borderWidth={borderWidth}
        {...rest}
      >
        <Image
          testID="avatar-image"
          displayPlaceholder={animatedLoading}
          source={{ uri: visibleImage }}
          resizeMode="cover"
          style={{ width: '101%', height: '101%' }}
        />

        {!visibleImage && !!name && (
          <UploadIconWrapper size={size}>
            <UploadIcon id="" accessibility="" />
          </UploadIconWrapper>
        )}
        {!visibleImage && !!name && displayMonogram && (
          <MonogramWrapper size={size}>
            <MonogramText size={size} style={monogramStyle}>
              {formatToMonogram(name)}
            </MonogramText>
          </MonogramWrapper>
        )}
      </Wrapper>
    );
  },
);

Avatar.displayName = 'AvatarComponent';

export default Avatar;
