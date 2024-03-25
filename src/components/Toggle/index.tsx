import React from 'react';
import { SwitchButton } from './styles';

type ToggleProps = {
  id?: string;
  accessibility?: string;
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
  ...rest
}) => {
  return (
    <SwitchButton
      accessibility={accessibility}
      value={value}
      onValueChange={onValueChange}
      disabled={isDisabled}
      thumbColorProps={thumbColor}
      trackColorProps={trackColor}
      testID={id}
      {...rest}
    />
  );
};

export default ToggleButton;
