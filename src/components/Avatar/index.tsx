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
import {
  generateAccessibilityProps,
  generateTestID,
} from '../../utils/accessibility';
import Image from '../Image';
import { MonogramText, MonogramWrapper, Wrapper } from './styles';

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
        // Tratando erro silenciosamente
      }
    };

    const takePicture = async (): Promise<void> => {
      if (cameraRef.current) {
        const options = { quality: 0.5, base64: true };
        return await cameraRef.current.takePictureAsync(options);
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
      // Define tipos para verificação
      const TypeCheck = {
        OBJECT: 'object',
      } as const;

      if (
        image &&
        !Array.isArray(image) &&
        typeof image === TypeCheck.OBJECT &&
        // Forçando tipo para evitar erro TS2322
        'uri' in (image as object) &&
        (image as { uri: string }).uri
      ) {
        setVisibleImage((image as { uri: string }).uri);
      } else {
        setVisibleImage(undefined);
      }
    }, [image]);

    const baseAccessibilityId = accessibility || id || 'avatar';
    const defaultLabel = accessibilityLabel || accessibility;

    // Função para lidar com o press
    const handlePress = onPress || (onUpload ? () => openPicker() : undefined);

    // Determinando o hint base no evento disponível
    const pressHint = handlePress
      ? 'Toque para interagir ou fazer upload'
      : undefined;

    const wrapperAccessibilityProps = generateAccessibilityProps(
      {
        id: id,
        accessibility: baseAccessibilityId,
        accessibilityLabel: defaultLabel,
        disabled: !onPress && !onUpload,
      },
      'button',
      defaultLabel,
      pressHint,
    );

    const wrapperTestId = generateTestID('avatar', baseAccessibilityId);

    return (
      <Wrapper
        {...wrapperAccessibilityProps}
        testID={wrapperTestId}
        size={size}
        onPress={handlePress}
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
