import { RNCamera } from 'react-native-camera';
import styled from 'styled-components/native';
import { getTheme, ifStyle } from '@platformbuilders/theme-toolkit';
import Icon from '../Icon';
import Touchable from '../Touchable';
import Typography from '../Typography';

const brandPrimary = getTheme('brand.primary.main');
const brandAccent = getTheme('brand.accent.main');
const textMain = getTheme('text.main');
const linkAccent = getTheme('text.link.accent');

const showBorder = ifStyle('showBorder');
const hasBorderWidth = ifStyle('borderWidth');
const hasBorderColor = ifStyle('borderColor');

type WrapperProps = {
  size: number;
  disabled: boolean;
  showBorder: boolean;
  borderWidth?: number;
  borderColor?: string;
};

export const Wrapper = styled(Touchable)<WrapperProps>`
  width: ${(props: WrapperProps): number => props.size}px;
  height: ${(props: WrapperProps): number => props.size}px;
  border-radius: ${(props: WrapperProps): number => props.size / 2}px;
  overflow: hidden;
  border-width: ${(props: WrapperProps): any =>
    showBorder(hasBorderWidth(props.borderWidth, '2'), '0')}px;
  border-color: ${(props: WrapperProps): any =>
    hasBorderColor(props.borderColor, brandPrimary)};
  position: relative;
`;

type IconWrapperProps = {
  size: number;
};

export const UploadIconWrapper = styled.View<IconWrapperProps>`
  align-items: center;
  justify-content: center;
  width: ${(props: IconWrapperProps): number => props.size / 4}px;
  height: ${(props: IconWrapperProps): number => props.size / 4}px;
  border-radius: ${(props: IconWrapperProps): number => props.size / 8}px;
  position: absolute;
  z-index: 2;
  background-color: ${brandPrimary};
`;

export const UploadIcon = styled(Icon)`
  color: ${brandAccent};
`;

export const CameraView = styled(RNCamera)<{ size: number }>`
  width: ${(props: any): number => props.size}px;
  height: 100%;
  border-radius: ${(props: any): number => props.size / 2}px;
  overflow: hidden;
  border: ${showBorder('4px solid white', '')};
`;

export const MonogramWrapper = styled.View<IconWrapperProps>`
  align-items: center;
  justify-content: center;
  width: ${(props: IconWrapperProps): number => props.size}px;
  height: ${(props: IconWrapperProps): number => props.size}px;
  position: absolute;
  z-index: 3;
  background-color: ${linkAccent};
  text-align: center;
`;

type MonogramTextProps = {
  size?: number;
  style?: any;
};

export const MonogramText = styled(Typography)<MonogramTextProps>`
  color: ${textMain};
  font-size: ${(props: any): number => props.size * 0.45}px;
  line-height: ${(props: any): number => props.size * 0.45}px;
  letter-spacing: 1.3px;
  align-self: center;
  text-align: center;
  position: relative;
  top: 3px;
`;
