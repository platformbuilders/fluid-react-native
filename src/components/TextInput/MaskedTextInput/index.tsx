import React, { forwardRef, useEffect, useState } from 'react';
import {
  TextInputMaskOptionProp,
  TextInputMaskTypeProp,
} from 'react-native-masked-input/src/types';
import { InputStatus } from '../../../enums';
import { MaskedTextInputType } from '../../../types';
import { TextInput } from './styles';

const optionDefault = {
  mask: '*'.repeat(400),
  validator: () => true,
  translation: {
    '*': (val: string) => val,
  },
};

type OptionMask = {
  typeMask: TextInputMaskTypeProp;
  options?: TextInputMaskOptionProp;
};

const MaskedTextInput = forwardRef<any, MaskedTextInputType>(
  (
    {
      maskType = 'no-mask',
      id,
      accessibility,
      contrast = false,
      multiline = false,
      status = InputStatus.Default,
      value = '',
      onChangeText,
      options = optionDefault,
      ...rest
    },
    inputRef,
  ) => {
    const [maskSelected, setMaskSelected] = useState<OptionMask>({
      typeMask: 'custom',
      options: options,
    });

    // Função para controlar o tipo de máscara
    const maskTypeControll = () => {
      switch (maskType) {
        case 'cpf':
        case 'document':
          setMaskSelected({
            typeMask: 'cpf',
            options: { mask: '' },
          });
          break;
        case 'cnpj':
          setMaskSelected({
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
              getRawValue: (val) => val.toUpperCase(),
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

    // Função para atualizar a máscara selecionada
    const handleSetMask = ({ typeMask, options }: OptionMask) => {
      if (
        typeMask !== maskSelected.typeMask ||
        JSON.stringify(options) !== JSON.stringify(maskSelected.options)
      ) {
        setMaskSelected({ typeMask, options });
      }
    };

    // Atualiza a máscara quando o valor ou as opções mudam
    useEffect(() => {
      maskTypeControll();
    }, [value, options]);

    return (
      <TextInput
        {...rest}
        ref={inputRef}
        onChangeText={onChangeText}
        value={value}
        id={id || accessibility}
        status={status}
        accessibility={accessibility}
        testID={id || accessibility}
        accessibilityLabel={accessibility}
        contrast={contrast}
        multiline={multiline}
        type={maskSelected.typeMask}
        options={maskSelected.options}
        underlineColorAndroid="transparent"
      />
    );
  },
);

export default MaskedTextInput;
