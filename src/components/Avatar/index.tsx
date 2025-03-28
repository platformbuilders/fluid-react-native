import React, { useEffect, useImperativeHandle, useState } from 'react';
import {
  ImageLibraryOptions,
  launchImageLibrary,
} from 'react-native-image-picker';
import { formatToMonogram } from '@platformbuilders/helpers';
import { AvatarProps, ImageSource } from '../../types';
import {
  generateAccessibilityProps,
  generateTestID,
} from '../../utils/accessibility';
import Image from '../Image';
import {
  MonogramText,
  MonogramWrapper,
  UploadIcon,
  UploadIconWrapper,
  Wrapper,
} from './styles';

const isValidURI = (value?: string): boolean =>
  value ? /(?:https?|file):\/\/|www\.[^\s]+/.test(value) : false;

const Avatar: React.FC<AvatarProps> = React.forwardRef(
  (
    {
      id,
      image,
      animatedLoading = true,
      accessibility,
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
    // eslint-disable-next-line sonarjs/cognitive-complexity
    const [visibleImage, setVisibleImage] = useState<ImageSource | undefined>();
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
      return uploadedImage;
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

    const source =
      typeof visibleImage == 'string' && isValidURI(visibleImage)
        ? { uri: visibleImage }
        : visibleImage;

    const role = onPress || onUpload ? 'button' : 'image';
    const baseAccessibilityId = accessibility || id || name || 'avatar';
    const defaultLabel = name
      ? `Avatar de ${name}`
      : accessibilityLabel || 'Avatar';
    const hint = onPress || onUpload ? 'Toque para interagir' : undefined;

    const avatarAccessibilityProps = generateAccessibilityProps(
      {
        id,
        accessibility: baseAccessibilityId,
        accessibilityLabel: defaultLabel,
        disabled: !onPress && !onUpload,
      },
      role,
      defaultLabel,
      hint,
    );

    const avatarTestID = generateTestID('avatar', baseAccessibilityId);

    return (
      <Wrapper
        {...avatarAccessibilityProps}
        testID={avatarTestID}
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
          source={source}
          resizeMode="cover"
          style={{ width: '101%', height: '101%' }}
        />

        {!visibleImage && !!name && (
          <UploadIconWrapper size={size}>
            <UploadIcon
              importantForAccessibility="no"
              id="avatar-upload-icon"
              name="camera"
            />
          </UploadIconWrapper>
        )}
        {!visibleImage && !!name && displayMonogram && (
          <MonogramWrapper importantForAccessibility="no" size={size}>
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
