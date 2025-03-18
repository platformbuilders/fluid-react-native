import React from 'react';
import { favicon } from '../assets/images';

interface IconProps {
  size?: number;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ size = 16, className }) => {
  return (
    <img
      src={favicon}
      alt="Fluid React Native Icon"
      width={size}
      height={size}
      className={className}
    />
  );
};

export default Icon;
