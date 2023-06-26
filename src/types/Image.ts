import { ImageSourcePropType } from 'react-native';
import { FastImageProps, ResizeMode } from 'react-native-fast-image';

export type ImageSource = FastImageProps['source'] | ImageSourcePropType;

export interface ImageProps {
  id?: string;
  testID?: string;
  accessibility?: string;
  displayPlaceholder?: boolean;
  containerStyle?: any;
  animationColor?: string;
  animationContainerColor?: string;
  source: ImageSource;
  resizeMode?: ResizeMode;
  style?: any;
}
