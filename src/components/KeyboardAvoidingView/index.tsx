import React, { FC } from 'react';
import { KeyboardAvoidingView as Wrapper } from 'react-native';
import { isIOS } from '@platformbuilders/helpers/native';
import { AvoidingViewBehavior, KeyboardAvoidingViewProps } from '../../types';

const defaultBehavior: AvoidingViewBehavior = isIOS() ? 'padding' : undefined;
const defaultStyle = { flex: 1 };

const KeyboardAvoidingView: FC<KeyboardAvoidingViewProps> = ({
  style = defaultStyle,
  behavior = defaultBehavior,
  keyboardOffset = 20,
  enabled = true,
  ...rest
}) => (
  <Wrapper
    style={style}
    behavior={behavior}
    enabled={enabled}
    keyboardVerticalOffset={keyboardOffset}
    {...rest}
  />
);

export default KeyboardAvoidingView;
