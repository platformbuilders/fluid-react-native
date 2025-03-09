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
      accessibilityLabel={
        accessibility || `Toggle switch. Current state: ${value ? 'on' : 'off'}`
      }
      accessibilityRole="switch"
      accessibilityState={{
        checked: value,
        disabled: isDisabled,
      }}
      accessibilityHint="Double tap to toggle the switch"
      value={value}
      onValueChange={onValueChange}
      disabled={isDisabled}
      thumbColorProps={thumbColor}
      trackColorProps={trackColor}
      testID={id || `toggle_${accessibility || ''}`}
      {...rest}
    />
  );
};

export default ToggleButton;
