import React, { FC, useEffect, useState } from 'react';
import {
  TextInputMaskOptionProp,
  TextInputMaskTypeProp,
} from 'react-native-masked-input/src/types';
import { isValid as isValidCpf } from '@fnando/cpf';
import { InputStatus } from '../../../enums';
import { MaskedTextInputType } from '../../../types';
import { TextInput } from './styles';
const optionDefault = {
  mask: '*'.repeat(400),
  validator: () => {
    return true;
  },
  translation: {
    '*': (val: string) => {
      return val;
    },
  },
};
type OptionMask = {
  typeMask: TextInputMaskTypeProp;
  options?: TextInputMaskOptionProp;
};
const MaskedTextInput: FC<MaskedTextInputType> = ({
  maskType = 'no-mask',
  inputRef,
  id,
  accessibility,
  contrast = false,
  multiline = false,
  status = InputStatus.Default,
  value = '',
  onChangeText,
  options = optionDefault,
  ...props
}) => {
  const [maskSelected, setMaskSelected] = useState<OptionMask>({
    typeMask: 'custom',
    options: options,
  });

  useEffect(() => {
    maskTypeControll(value);
  }, [value, options]);

  const handleSetMask = ({ typeMask, options }: OptionMask) => {
    if (
      typeMask != maskSelected.typeMask ||
      JSON.stringify(options) != JSON.stringify(maskSelected.options)
    ) {
      setMaskSelected({
        typeMask,
        options,
      });
    }
  };

  const maskTypeControll = (value: string) => {
    switch (maskType) {
      case 'document':
        if (value && isValidCpf(value)) {
          setMaskSelected({
            typeMask: 'cpf',
            options: { mask: '' },
          });
        }
        handleSetMask({
          typeMask: 'cnpj',
          options: { mask: '' },
        });
        break;
      case 'no-mask':
        handleSetMask({
          typeMask: 'custom',
          options: {
            mask: '*'.repeat(400),
          },
        });
        break;
      case 'uppercase':
        handleSetMask({
          typeMask: 'custom',
          options: {
            ...optionDefault,
            getRawValue: (value) => {
              return value.toUpperCase();
            },
          },
        });
        break;
      default:
        handleSetMask({
          typeMask: maskType,
          options: options,
        });
        break;
    }
  };

  return (
    <TextInput
      {...props}
      onChangeText={(maskedText) => {
        if (onChangeText) {
          onChangeText(maskedText.toString());
        }
      }}
      value={value}
      id={id || accessibility}
      status={status}
      accessibility={accessibility}
      testID={id || accessibility}
      accessibilityLabel={accessibility}
      inputRef={inputRef}
      contrast={contrast}
      multiline={multiline}
      type={maskSelected.typeMask}
      options={maskSelected.options}
      underlineColorAndroid="transparent"
    />
  );
};

export default MaskedTextInput;
