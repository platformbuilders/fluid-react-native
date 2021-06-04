import React, { useRef, useState } from 'react';
import { Keyboard, StyleProp, TextStyle, ViewStyle } from 'react-native';
import { Input, Wrapper } from './styles';

type Props = {
  onChange(value: string): void;
  onClear?(): void;
  onFocus?(): void;
  onBlur?(): void;
  onSubmit?(): void;
  onIconPress?(): void;
  onRightIconPress?(): void;
  id?: string;
  accessibility: string;
  iconColor?: string;
  placeholder?: string;
  wrapperHeight?: number;
  inputPadding?: number;
  iconSize?: number;
  hasShadow?: boolean;
  textStyle?: StyleProp<TextStyle>;
  inputStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  placeholderTextColor?: string;
  autoFocus?: boolean;
  rightIconName?: string;
  leftIconName?: string;
};

const SearchInput: React.FC<Props> = ({
  onChange,
  onClear = () => null,
  onFocus = () => null,
  onBlur = () => null,
  onSubmit = () => null,
  onIconPress,
  id,
  accessibility,
  iconColor,
  placeholder,
  wrapperHeight,
  inputPadding,
  iconSize,
  hasShadow = false,
  inputStyle,
  containerStyle,
  placeholderTextColor,
  textStyle,
  autoFocus = false,
  rightIconName,
  leftIconName,
  ...rest
}) => {
  const [searchText, setSearchText] = useState('');
  const [isSearching, setSearching] = useState(false);
  const [isFocused, setFocused] = useState(false);
  const ref = useRef<HTMLInputElement>(null);
  const onPressIcon = (): void => {
    if (onIconPress) {
      onIconPress();
    }
    setSearchText('');
    onClear();
    setSearching(false);
    Keyboard.dismiss();
  };
  return (
    <Wrapper
      height={wrapperHeight}
      inputPadding={inputPadding}
      hasShadow={hasShadow}
      style={containerStyle}
    >
      <Input
        textStyle={textStyle}
        placeholderTextColor={placeholderTextColor}
        style={inputStyle}
        inputRef={ref}
        large={false}
        id={id || accessibility}
        accessibility={accessibility}
        autoFocus={autoFocus}
        autoCapitalize="none"
        autoCorrect={false}
        iconName={isFocused || !!searchText ? 'close' : 'magnify'}
        autoCompleteType="off"
        placeholder={isSearching ? '' : placeholder || 'Pesquise aqui'}
        onChangeText={(value: string): void => {
          setSearchText(value);
          onChange(value);
        }}
        onPressIcon={onPressIcon}
        value={searchText}
        onFocus={() => {
          setFocused(true);
          if (!autoFocus) onFocus();
        }}
        onBlur={(): void => {
          onBlur();
          setFocused(false);
          if (!searchText) {
            setSearching(false);
          }
        }}
        leftIconName={leftIconName}
        iconColor={iconColor}
        iconSize={iconSize}
        inputPadding={inputPadding}
        rightIconName={rightIconName}
        onSubmitEditing={onSubmit}
        {...rest}
      />
    </Wrapper>
  );
};

export default SearchInput;
