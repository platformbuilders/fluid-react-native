import React, { useImperativeHandle, useRef, useState } from 'react';
import { isEmpty } from 'lodash';
import { RNCamera } from 'react-native-camera';
import FastImage, { Source } from 'react-native-fast-image';
import ImagePicker from 'react-native-image-picker';
import { ImageAvatarPlaceholder as defaultAvatar } from '../../assets/images';
import { AvatarType } from '../../types';
import If from '../If';
import { CameraView, UploadIcon, UploadIconWrapper, Wrapper } from './styles';

const Avatar: React.FC<AvatarType> = React.forwardRef(
  (
    {
      id,
      image = defaultAvatar,
      accessibility = 'Upload de Avatar',
      accessibilityLabel,
      testID,
      size = 50,
      borderWidth = 2,
      onPress,
      onUpload,
      showBorder = true,
      displayCamera = false,
      name,
      ...rest
    },
    ref,
    // eslint-disable-next-line sonarjs/cognitive-complexity
  ) => {
    const [uploadedImage, setUploadedImage] = useState<any>();
    const cameraRef = useRef<any>();

    const openPicker = (): Promise<void> => {
      const options = {
        title: 'Selecionar foto',
        cancelButtonTitle: 'Cancelar',
        takePhotoButtonTitle: 'Tirar foto',
        chooseFromLibraryButtonTitle: 'Escolher da galeria',
        quality: 0.3,
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };
      return new Promise((resolve) => {
        ImagePicker.launchImageLibrary(options as any, (response: any) => {
          setUploadedImage(response.uri);
          if (onUpload) {
            onUpload(response.uri);
          }
          resolve();
        });
      });
    };

    const takePicture = async (): Promise<void> => {
      if (cameraRef.current) {
        const options = { quality: 0.5, base64: true };
        const data = await cameraRef.current.takePictureAsync(options);
        setUploadedImage(data);
        return data;
      }
    };

    const getUploadImage = (): any => {
      return uploadedImage;
    };

    const clearUploadImage = (): void => {
      setUploadedImage('');
    };

    const getCurrentAvatar = (): Source | any => {
      if (uploadedImage) {
        return { uri: uploadedImage };
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

    return (
      <Wrapper
        id={id || accessibility}
        accessibility={accessibility}
        accessibilityLabel={accessibilityLabel || accessibility}
        testID={testID || id}
        size={size}
        onPress={onPress}
        disabled={!onPress}
        showBorder={showBorder}
        borderWidth={borderWidth}
        {...rest}
      >
        {displayCamera && !uploadedImage ? (
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
          <FastImage
            source={getCurrentAvatar()}
            resizeMode={FastImage.resizeMode.cover}
            style={{ width: '101%', height: '101%' }}
          />
        )}

        <If condition={!!name && !!displayCamera}>
          <UploadIconWrapper size={size}>
            <UploadIcon id="" accessibility="" />
          </UploadIconWrapper>
        </If>
      </Wrapper>
    );
  },
);

Avatar.displayName = 'AvatarComponent';

export default Avatar;
