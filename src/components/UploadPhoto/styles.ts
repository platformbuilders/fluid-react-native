import { RNCamera } from 'react-native-camera';
import styled from 'styled-components/native';
import { getTheme } from '../../utils/helpers';
import Icon from '../Icon';
import Touchable from '../Touchable';
import Typography from '../Typography';

const iconColor = getTheme('text.main');
const brandPrimaryMain = getTheme('brand.primary.main');
const backgroundZ2 = getTheme('background.z2');
const borderRadius = getTheme('themeRadius.card');
const spacingMd = getTheme('spacing.md');

type WrapperProps = {
  disabled: boolean;
};

export const Wrapper = styled(Touchable)<WrapperProps>`
  overflow: hidden;
  position: relative;
  border-radius: ${borderRadius}px;
  border-width: 2px;
  min-height: 120px;
  border-color: ${backgroundZ2};
  border-style: dashed;
  justify-content: center;
  align-items: center;
`;

export const UploadIconWrapper = styled.View`
  align-items: center;
  justify-content: center;
`;

export const UploadIcon = styled(Icon).attrs((props) => ({
  color: iconColor(props),
}))`
  margin-bottom: ${spacingMd}px;
  opacity: 0.6;
`;

export const CameraView = styled(RNCamera)`
  height: 100%;
  overflow: hidden;
`;

export const UploadText = styled(Typography)`
  color: ${brandPrimaryMain};
`;