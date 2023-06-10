import React, { useEffect, useImperativeHandle, useRef, useState } from 'react';
import { isEmpty } from 'lodash';
import { RNCamera } from 'react-native-camera';
import { Source } from 'react-native-fast-image';
import {
  ImageLibraryOptions,
  launchImageLibrary,
} from 'react-native-image-picker';
import { formatToMonogram } from '@platformbuilders/helpers';
import { ImageAvatarPlaceholder as defaultAvatar } from '../../assets/images';
import { AvatarType } from '../../types';
import Image from '../Image';
import {
  CameraView,
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
      displayCamera = false,
      displayMonogram = true,
      name,
      monogramStyle,
      ...rest
    },
    ref,
    // eslint-disable-next-line sonarjs/cognitive-complexity
  ) => {
    const [visibleImage, setVisibleImage] = useState<string | undefined>();
    const [uploadedImage, setUploadedImage] = useState<string | undefined>();
    const cameraRef = useRef<any>();

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

    const takePicture = async (): Promise<void> => {
      if (cameraRef.current) {
        const options = { quality: 0.5, base64: true };
        const data = await cameraRef.current.takePictureAsync(options);
        setUploadedImage(data.uri);
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
        {displayCamera && !visibleImage ? (
          <CameraView
            ref={cameraRef}
            size={size}
            type={RNCamera.Constants.Type.front}
            flashMode={RNCamera.Constants.FlashMode.auto}
            androidCameraPermissionOptions={{
              title: 'Câmera',
              message: 'Precisamos da sua permissão para usar a câmera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancelar',
            }}
          />
        ) : (
          <Image
            displayPlaceholder={animatedLoading}
            source={getCurrentAvatar()}
            resizeMode="cover"
            style={{ width: '101%', height: '101%' }}
          />
        )}
        {!visibleImage && !!name && !!displayCamera && (
          <UploadIconWrapper size={size}>
            <UploadIcon id="" accessibility="" />
          </UploadIconWrapper>
        )}
        {!visibleImage && !displayCamera && !!name && displayMonogram && (
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
