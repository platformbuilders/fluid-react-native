import Theme from 'rspress/theme';
import Logo from '../components/Logo';

// Estendendo o tema padrão com nosso componente Logo personalizado
export default {
  ...Theme,
  Layout: () => <Theme.Layout logo={<Logo size={32} variant="default" />} />,
};

// Exportamos todos os componentes do tema original
export * from 'rspress/theme';
