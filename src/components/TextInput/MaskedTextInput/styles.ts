import TextInputMask from 'react-native-masked-input';
import styled from 'styled-components/native';
import { getTheme } from '@platformbuilders/theme-toolkit';
import { TextInput as TextInputStyle } from '../styles';

const MaskedInput = TextInputStyle.withComponent(TextInputMask);
const placeholderTextColor = getTheme('text.light');

export const TextInput = styled(MaskedInput).attrs((props: any) => ({
  placeholderTextColor: props.placeholderTextColor
    ? props.placeholderTextColor
    : placeholderTextColor(props),
}))`
  flex: 1;
`;
