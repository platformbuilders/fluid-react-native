import styled from 'styled-components/native';
import { TextInputMask } from 'react-native-masked-text';
import { TextInput as TextInputStyle } from '../styles';

const Input = styled(TextInputMask as any)`
  min-width: 0;
  flex-shrink: 1;
  flex-grow: 1;
  width: 100%;
  ${(TextInputStyle as any).componentStyle?.rules || ''}
`;

export default Input;
