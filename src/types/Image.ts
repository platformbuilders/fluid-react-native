import { StyleProp, ViewStyle } from 'react-native';
import { FastImageProps } from 'react-native-fast-image';

export interface ImageProps extends FastImageProps {
  id?: string;
  accessibility?: string;
  displayPlaceholder?: boolean;
  containerStyle?: any;
  animationColor?: string;
  animationContainerColor?: string;
}
