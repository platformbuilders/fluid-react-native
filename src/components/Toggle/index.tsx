import React from 'react';
import { generateAccessibilityProps, generateTestID } from '../../utils';
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
  // Gera propriedades de acessibilidade padronizadas
  const accessibilityProps = generateAccessibilityProps(
    { 
      id, 
      accessibility, 
      accessibilityLabel, 
      disabled: isDisabled, 
      checked: value 
    },
    'switch',
    `Alternar. Estado atual: ${value ? 'ativado' : 'desativado'}`,
    'Toque duas vezes para alternar'
  );

  // Gera ID de teste padronizado
  const toggleTestID = generateTestID(
    { id, accessibility, testID },
    'toggle'
  );

  return (
    <SwitchButton
      {...accessibilityProps}
      value={value}
      onValueChange={onValueChange}
      disabled={isDisabled}
      thumbColorProps={thumbColor}
      trackColorProps={trackColor}
      testID={toggleTestID}
      {...rest}
    />
  );
};

export default ToggleButton;
