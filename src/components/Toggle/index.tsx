import React from 'react';
import { SwitchButton } from './styles';

type Props = {
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

const ToggleButton: React.FC<Props> = ({
  value,
  isDisabled = false,
  thumbColor,
  trackColor,
  onValueChange,
  ...rest
}) => {
  return (
    <SwitchButton
      value={value}
      onValueChange={onValueChange}
      disabled={isDisabled}
      thumbColorProps={thumbColor}
      trackColorProps={trackColor}
      testID={'toggle_button'}
      {...rest}
    />
  );
};

export default ToggleButton;
