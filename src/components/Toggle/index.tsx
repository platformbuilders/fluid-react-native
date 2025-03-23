import React from 'react';
import { generateAccessibilityProps } from '../../utils';
import { SwitchButton } from './styles';

type ToggleProps = {
  id?: string;
  accessibility?: string;
  accessibilityLabel?: string;
  testID?: string;
  value: boolean;
  isDisabled?: boolean;
  thumbColor?: {
    trueColor: string;
    falseColor: string;
  };
  trackColor?: {
    trueColor: string;
    falseColor: string;
  };
  onValueChange(value: boolean): void;
};

const ToggleButton: React.FC<ToggleProps> = ({
  id,
  value,
  isDisabled = false,
  thumbColor,
  trackColor,
  onValueChange,
  accessibility,
  accessibilityLabel,
  testID,
  ...rest
}) => {
  // Define o label padrão de acessibilidade baseado no estado
  const defaultLabel = `Alternar. Estado atual: ${value ? 'ativado' : 'desativado'}`;

  // Gera propriedades de acessibilidade padronizadas
  const accessibilityProps = generateAccessibilityProps(
    {
      id,
      accessibility,
      accessibilityLabel: accessibilityLabel || defaultLabel,
      disabled: isDisabled,
      checked: value,
    },
    'switch',
    defaultLabel,
    'Toque duas vezes para alternar',
  );

  // Prefixo para ID de teste
  const prefix = 'toggle';

  // ID de teste final
  let finalTestID;

  // Se tiver ID, formata como "prefix_id"
  if (id) {
    finalTestID = `${prefix}_${id}`;
  }
  // Se não tiver ID mas tiver accessibility, formata como "prefix_accessibility"
  else if (accessibility) {
    finalTestID = `${prefix}_${accessibility}`;
  }
  // Fallback para o testID fornecido com prefixo
  else if (testID) {
    finalTestID = `${prefix}_${testID}`;
  } else {
    finalTestID = `${prefix}_toggle`;
  }

  return (
    <SwitchButton
      {...accessibilityProps}
      value={value}
      onValueChange={onValueChange}
      disabled={isDisabled}
      thumbColorProps={thumbColor}
      trackColorProps={trackColor}
      testID={finalTestID}
      {...rest}
    />
  );
};

export default ToggleButton;
