import { moderateScale } from 'react-native-size-matters';
import styled from 'styled-components/native';
import { getTheme } from '@platformbuilders/theme-toolkit';
import { getShadow } from '../../utils/helpers';
import TextInput from '../TextInput';

const brandSecondary = getTheme('brand.secondary.main');
const largeSpacing = getTheme('spacing.xl');
const largeRadius = getTheme('borderRadius.xl');

const wrapperHeight = moderateScale(56);

type WrapperProps = {
  height?: number;
  inputPadding?: number;
  hasShadow?: boolean;
  style?: any;
};

export const Wrapper = styled.View<WrapperProps>`
  flex-direction: row;
  flex: 1;
  height: ${({ height }: WrapperProps) =>
    (!!height && `${height}px`) || `${wrapperHeight}px`};
  align-items: center;
  justify-content: center;
  padding-horizontal: ${({ inputPadding }: WrapperProps) =>
    (!!inputPadding && inputPadding) || largeSpacing}px;
  border-radius: ${largeRadius}px;
  ${({ hasShadow }: WrapperProps) => (hasShadow ? getShadow() : {})}
`;

type InputProps = {
  iconColor?: string;
  iconSize?: number;
  inputHeight?: number | string;
  inputPadding?: number;
};

export const Input = styled(TextInput).attrs((props: InputProps) => ({
  iconColor: `${props.iconColor || brandSecondary}`,
  iconTouchableEnabled: true,
  iconSize: props.iconSize || moderateScale(26),
}))<InputProps>`
  width: 100%;
  padding: 0;
  height: ${({ inputHeight }: InputProps) =>
    (!!inputHeight && inputHeight) || '90%'};
`;
