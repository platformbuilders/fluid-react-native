import React, { forwardRef, useEffect, useState } from 'react';
import {
  TextInputMaskOptionProp,
  TextInputMaskTypeProp,
} from 'react-native-masked-input/src/types';
import { InputStatus } from '../../../enums';
import { MaskedTextInputType } from '../../../types';
import { generateAccessibilityProps, generateTestID } from '../../../utils';
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
      accessibilityLabel,
      testID,
      contrast = false,
      multiline = false,
      status = InputStatus.Default,
      value = '',
      onChangeText,
      options = optionDefault,
      placeholder = '',
      editable = true,
      ...rest
    },
    inputRef,
  ) => {
    const [maskSelected, setMaskSelected] = useState<OptionMask>({
      typeMask: 'custom',
      options: options,
    });

    // Gera propriedades de acessibilidade padronizadas
    const accessibilityProps = generateAccessibilityProps(
      { 
        id, 
        accessibility, 
        accessibilityLabel, 
        disabled: !editable 
      },
      'text',
      placeholder || 'Campo de texto',
      placeholder ? `Digite ${placeholder}` : 'Digite o texto'
    );

    // Gera ID de teste padronizado
    const inputTestID = generateTestID(
      { id, accessibility, testID },
      'input'
    );

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
        {...accessibilityProps}
        testID={inputTestID}
        contrast={contrast}
        multiline={multiline}
        type={maskSelected.typeMask}
        options={maskSelected.options}
        underlineColorAndroid="transparent"
        editable={editable}
      />
    );
  },
);

export default MaskedTextInput;
