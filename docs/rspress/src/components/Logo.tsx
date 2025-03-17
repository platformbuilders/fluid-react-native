import React from 'react';
import { logo } from '../assets/images';

interface LogoProps {
  size?: number;
  className?: string;
  variant?: 'default' | 'full-black' | 'full-white' | 'minimal';
}

export const Logo: React.FC<LogoProps> = ({
  size = 32,
  className,
  variant = 'default',
}) => {
  let logoSrc = '/logo.svg';

  // Seleciona a variante do logo
  switch (variant) {
    case 'full-black':
      logoSrc = '/logo-full-black.png';
      break;
    case 'full-white':
      logoSrc = '/logo-full-white.png';
      break;
    case 'minimal':
      logoSrc = '/logo-minimal.png';
      break;
    default:
      logoSrc = '/logo.svg';
  }

  return (
    <img
      src={logoSrc}
      alt="Fluid React Native Logo"
      width={variant.includes('full') ? size * 3 : size}
      height={size}
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
};

export default Logo;
