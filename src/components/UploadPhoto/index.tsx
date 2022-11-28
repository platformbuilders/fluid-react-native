import React, { useImperativeHandle, useRef, useState } from 'react';
import { isEmpty } from 'lodash';
import { RNCamera } from 'react-native-camera';
import FastImage, { Source } from 'react-native-fast-image';
import {
  ImagePickerResponse,
  launchImageLibrary,
} from 'react-native-image-picker';
import { IconFonts, UploadPhotoType } from '../../types';
import {
  CameraView,
  UploadIcon,
  UploadIconWrapper,
  UploadText,
  Wrapper,
} from './styles';

const UploadPhoto: React.FC<UploadPhotoType> = React.forwardRef(
  (
    {
      id,
      image,
      accessibility,
      accessibilityLabel,
      testID,
      uploadText = 'Adicionar Foto',
      uploadIcon = 'image',
      imageQuality = 0.5,
      iconSize = 36,
      onPress,
      onUpload,
      displayCamera = false,
      iconType = IconFonts.Material,
      ...rest
    },
    ref,
  ) => {
    const [uploadedImage, setUploadedImage] = useState<any>();
    const cameraRef = useRef<any>();

    const openPicker = (): Promise<void> => {
      const options = {
        title: 'Selecionar foto',
        cancelButtonTitle: 'Cancelar',
        takePhotoButtonTitle: 'Tirar foto',
        chooseFromLibraryButtonTitle: 'Escolher da galeria',
        includeBase64: true,
        quality: imageQuality,
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };
      return new Promise((resolve) => {
        launchImageLibrary(options as any, (response: ImagePickerResponse) => {
          if (!response.didCancel && response.assets) {
            setUploadedImage(response?.assets[0]?.uri);
            if (onUpload) {
              onUpload(response);
            }
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

    const getCurrentPhoto = (): Source | any => {
      if (uploadedImage) {
        return { uri: uploadedImage };
      }
      if (image && !isEmpty(image)) {
        return { uri: image };
      }
      return '';
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
        onPress={onPress || (onUpload && openPicker)}
        disabled={!onPress && !onUpload}
        {...rest}
      >
        {displayCamera && !uploadedImage && (
          <CameraView
            ref={cameraRef}
            type={RNCamera.Constants.Type.front}
            flashMode={RNCamera.Constants.FlashMode.auto}
            androidCameraPermissionOptions={{
              title: 'Câmera',
              message: 'Precisamos da sua permissão para usar a câmera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancelar',
            }}
          />
        )}
        {uploadedImage && (
          <FastImage
            source={getCurrentPhoto()}
            resizeMode={FastImage.resizeMode.cover}
            style={{ width: '101%', height: '101%' }}
          />
        )}
        {!displayCamera && !uploadedImage && (
          <UploadIconWrapper>
            <UploadIcon
              disabled
              size={iconSize}
              name={uploadIcon}
              id=""
              accessibility=""
              type={iconType}
            />
            {uploadText && <UploadText>{uploadText}</UploadText>}
          </UploadIconWrapper>
        )}
      </Wrapper>
    );
  },
);

UploadPhoto.displayName = 'UploadPhotoComponent';

export default UploadPhoto;
