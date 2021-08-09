import DefaultCheckbox from 'react-native-check-box';
import styled from 'styled-components/native';

type WrapperProps = {
  style: any;
};

export const Wrapper = styled.View<WrapperProps>``;

export const defaultLabelStyle = {
  fontSize: 16,
  opacity: 0.7,
};

export const containerStyle = {
  marginBottom: 0,
};

type Props = {
  testID: string;
  accessibilityLabel: string;
};

export const CheckBox = styled(DefaultCheckbox)<Props>``;
