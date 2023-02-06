import React, {
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import { isEmpty } from 'lodash';
import { Linking } from 'react-native';
import FastImage from 'react-native-fast-image';
import {
  ImagePickerResponse,
  launchImageLibrary,
} from 'react-native-image-picker';
import {
  Camera,
  CameraPermissionStatus,
  useCameraDevices,
} from 'react-native-vision-camera';
import { ImageAvatarPlaceholder as defaultAvatar } from '../../assets/images';
import { AvatarRef, AvatarType } from '../../types';
import If from '../If';
import { CameraView, UploadIcon, UploadIconWrapper, Wrapper } from './styles';

const Avatar = React.forwardRef<AvatarRef, AvatarType>(
  (
    {
      id,
      image = defaultAvatar,
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
      name,
      ...rest
    },
    ref,
    // eslint-disable-next-line sonarjs/cognitive-complexity
  ) => {
    const [permission, setPermission] = useState<CameraPermissionStatus>(
      'not-determined',
    );
    const [uploadedImage, setUploadedImage] = useState<string>();
    const cameraRef = useRef<Camera>(null);
    const devices = useCameraDevices();
    const device = devices.front ?? devices.back;

    useEffect(() => {
      if (displayCamera) {
        requestCameraPermission();
      }
    }, [displayCamera]);

    const requestCameraPermission = async () => {
      const permission = await Camera.requestCameraPermission();
      if (permission === 'denied') await Linking.openSettings();
      setPermission(permission);
    };

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
            const photo = response?.assets[0]?.uri;
            setUploadedImage(photo);
            if (onUpload) {
              onUpload(photo);
            }
          }
          resolve();
        });
      });
    };

    const takePicture = async (): Promise<void> => {
      if (cameraRef.current) {
        const photo = await cameraRef.current.takeSnapshot();
        setUploadedImage(`file://${photo.path}`);
      }
    };

    const getUploadImage = (): string | undefined => {
      return uploadedImage;
    };

    const clearUploadImage = (): void => {
      setUploadedImage('');
    };

    const currentAvatar = useMemo(() => {
      if (uploadedImage) {
        return { uri: uploadedImage };
      }
      if (image && !isEmpty(image)) {
        return { uri: image };
      }
      return defaultAvatar;
    }, [image, uploadedImage]);

    useImperativeHandle(ref, () => ({
      getUploadImage,
      clearUploadImage,
      takePicture,
      openPicker,
    }));

    const allowCamera = permission === 'authorized';

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
        {allowCamera && device && displayCamera ? (
          <CameraView size={size} ref={cameraRef} device={device} />
        ) : (
          <FastImage
            source={currentAvatar}
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
