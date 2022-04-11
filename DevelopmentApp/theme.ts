/* eslint-disable sonarjs/no-duplicate-string */
const theme = {
  spacing: {
    min: {
      value: 1,
      type: 'spacing',
    },
    xxs: {
      value: 2,
      type: 'spacing',
    },
    xs: {
      value: 4,
      type: 'spacing',
    },
    sm: {
      value: 8,
      type: 'spacing',
    },
    md: {
      value: 16,
      type: 'spacing',
    },
    lg: {
      value: 24,
      type: 'spacing',
    },
    xl: {
      value: 32,
      type: 'spacing',
    },
    xxl: {
      value: 48,
      type: 'spacing',
    },
    max: {
      value: 64,
      type: 'spacing',
    },
  },
  sizing: {
    min: {
      value: 1,
      type: 'sizing',
    },
    xxs: {
      value: 2,
      type: 'sizing',
    },
    xs: {
      value: 4,
      type: 'sizing',
    },
    sm: {
      value: 8,
      type: 'sizing',
    },
    md: {
      value: 16,
      type: 'sizing',
    },
    lg: {
      value: 24,
      type: 'sizing',
    },
    xl: {
      value: 32,
      type: 'sizing',
    },
    xxl: {
      value: 48,
      type: 'sizing',
    },
    max: {
      value: 64,
      type: 'sizing',
    },
  },
  borderRadius: {
    min: {
      value: 0,
      type: 'borderRadius',
    },
    xxs: {
      value: 1,
      type: 'borderRadius',
    },
    xs: {
      value: 2,
      type: 'borderRadius',
    },
    sm: {
      value: 4,
      type: 'borderRadius',
    },
    md: {
      value: 6,
      type: 'borderRadius',
    },
    lg: {
      value: 8,
      type: 'borderRadius',
    },
    xl: {
      value: 16,
      type: 'borderRadius',
    },
    xxl: {
      value: 32,
      type: 'borderRadius',
    },
    max: {
      value: 999,
      type: 'borderRadius',
    },
  },
  borderWidth: {
    min: {
      value: 0.5,
      type: 'borderWidth',
    },
    xxs: {
      value: 1,
      type: 'borderWidth',
    },
    xs: {
      value: 1.5,
      type: 'borderWidth',
    },
    sm: {
      value: 2,
      type: 'borderWidth',
    },
    md: {
      value: 3,
      type: 'borderWidth',
    },
    lg: {
      value: 4,
      type: 'borderWidth',
    },
    xl: {
      value: 6,
      type: 'borderWidth',
    },
    xxl: {
      value: 8,
      type: 'borderWidth',
    },
    max: {
      value: 12,
      type: 'borderWidth',
    },
    none: {
      value: 0,
      type: 'borderWidth',
    },
  },
  boxShadow: {
    z0: {
      value: {
        x: 0,
        y: 0,
        spread: 0,
        color: '',
        blur: 0,
      },
      type: 'boxShadow',
    },
    z1: {
      value: {
        x: 0,
        y: 1,
        spread: 0,
        color: 'rgba(0, 0, 0, 0.1)',
        blur: 3,
      },
      type: 'boxShadow',
    },
    z2: {
      value: {
        x: 0,
        y: 4,
        spread: -1,
        color: 'rgba(0, 0, 0, 0.1)',
        blur: 6,
      },
      type: 'boxShadow',
    },
    z3: {
      value: {
        x: 0,
        y: 10,
        spread: -3,
        color: 'rgba(0, 0, 0, 0.1)',
        blur: 15,
      },
      type: 'boxShadow',
    },
    z4: {
      value: {
        x: 0,
        y: 20,
        spread: -5,
        color: 'rgba(0, 0, 0, 0.1)',
        blur: 25,
      },
      type: 'boxShadow',
    },
    z5: {
      value: {
        x: 0,
        y: 25,
        spread: -12,
        color: 'rgba(0, 0, 0, 0.2)',
        blur: 50,
      },
      type: 'boxShadow',
    },
  },
  brand: {
    primary: {
      light: {
        value: '#4F89FA',
        type: 'color',
      },
      main: {
        value: '#305BC4',
        type: 'color',
      },
      dark: {
        value: '#19316F',
        type: 'color',
      },
      contrast: {
        value: '#ffffff',
        type: 'color',
      },
    },
    secondary: {
      light: {
        value: '#FFDD00',
        type: 'color',
      },
      main: {
        value: '#FABB00',
        type: 'color',
      },
      dark: {
        value: '#F08800',
        type: 'color',
      },
      contrast: {
        value: '#442905',
        type: 'color',
      },
    },
    tertiary: {
      light: {
        value: '#888',
        type: 'color',
      },
      main: {
        value: '#666',
        type: 'color',
      },
      dark: {
        value: '#444',
        type: 'color',
      },
      contrast: {
        value: '#ffffff',
        type: 'color',
      },
    },
    accent: {
      light: {
        value: '#4f89fa',
        type: 'color',
      },
      main: {
        value: '#305bc4',
        type: 'color',
      },
      dark: {
        value: '#19316f',
        type: 'color',
      },
      contrast: {
        value: '#fff',
        type: 'color',
      },
    },
  },
  danger: {
    lightContrastDark: {
      value: '#FF99A7',
      type: 'color',
    },
    light: {
      value: '#FF99A7',
      type: 'color',
    },
    main: {
      value: '#FB275D',
      type: 'color',
    },
    darkContrastLight: {
      value: '#94002F',
      type: 'color',
    },
    dark: {
      value: '#94002F',
      type: 'color',
    },
    contrast: {
      value: '#000',
      type: 'color',
    },
  },
  warning: {
    lightContrastDark: {
      value: '#FFF8CE',
      type: 'color',
    },
    light: {
      value: '#FFF8CE',
      type: 'color',
    },
    main: {
      value: '#FFCA0C',
      type: 'color',
    },
    darkContrastLight: {
      value: '#7A5502',
      type: 'color',
    },
    dark: {
      value: '#7A5502',
      type: 'color',
    },
    contrast: {
      value: '#000',
      type: 'color',
    },
  },
  info: {
    lightContrastDark: {
      value: '#C2ECEC',
      type: 'color',
    },
    light: {
      value: '#C2ECEC',
      type: 'color',
    },
    main: {
      value: '#42CCD4',
      type: 'color',
    },
    darkContrastLight: {
      value: '#104A56',
      type: 'color',
    },
    dark: {
      value: '#104A56',
      type: 'color',
    },
    contrast: {
      value: '#000',
      type: 'color',
    },
  },
  success: {
    lightContrastDark: {
      value: '#56CD8D',
      type: 'color',
    },
    light: {
      value: '#56CD8D',
      type: 'color',
    },
    main: {
      value: '#149B5F',
      type: 'color',
    },
    darkContrastLight: {
      value: '#00401B',
      type: 'color',
    },
    dark: {
      value: '#00401B',
      type: 'color',
    },
    contrast: {
      value: '#000',
      type: 'color',
    },
  },
  text: {
    dark: {
      value: '#16254A',
      type: 'color',
    },
    light: {
      value: '#16254A',
      type: 'color',
    },
    main: {
      value: '#16254A',
      type: 'color',
    },
    contrast: {
      value: '#fff',
      type: 'color',
    },
  },
  background: {
    z0: {
      value: '#EDF2F7',
      type: 'color',
    },
    z1: {
      value: '#F4F7FA',
      type: 'color',
    },
    z2: {
      value: '#F8FAFC',
      type: 'color',
    },
    z3: {
      value: '#FBFCFD',
      type: 'color',
    },
    z4: {
      value: '#fff',
      type: 'color',
    },
    transparent: {
      value: '#ffffff00',
      type: 'color',
    },
  },
  opacity: {
    disabled: {
      value: '30%',
      type: 'opacity',
    },
    empty: {
      value: '50%',
      type: 'opacity',
    },
    overlay: {
      value: '80%',
      type: 'opacity',
    },
    opaque: {
      value: '100%',
      description: 'everything without any transparency',
      type: 'opacity',
    },
    transparent: {
      value: '0%',
      type: 'opacity',
    },
    subtle: {
      value: '10%',
      type: 'opacity',
    },
  },
  standard: {
    value: '0%',
    type: 'letterSpacing',
  },
  bigger: {
    value: '5%',
    type: 'letterSpacing',
  },
  regular: {
    value: 'Regular',
    type: 'fontWeights',
  },
  medium: {
    value: 'Medium',
    type: 'fontWeights',
  },
  bold: {
    value: 'Bold',
    type: 'fontWeights',
  },
  fontSizes: {
    min: {
      value: 10,
      type: 'fontSizes',
    },
    xxs: {
      value: 11,
      type: 'fontSizes',
    },
    xs: {
      value: 13,
      type: 'fontSizes',
    },
    sm: {
      value: 14,
      type: 'fontSizes',
    },
    md: {
      value: 15,
      type: 'fontSizes',
    },
    lg: {
      value: 17,
      type: 'fontSizes',
    },
    xl: {
      value: 20,
      type: 'fontSizes',
    },
    xxl: {
      value: 24,
      type: 'fontSizes',
    },
    max: {
      value: 32,
      type: 'fontSizes',
    },
  },
  themeRadius: {
    button: {
      value: 4,
      type: 'borderRadius',
    },
    card: {
      value: 6,
      type: 'borderRadius',
    },
    input: {
      value: 6,
      type: 'borderRadius',
    },
  },
  lineHeight: {
    min: {
      value: '100%',
      type: 'lineHeights',
    },
    xxs: {
      value: '110%',
      type: 'lineHeights',
    },
    xs: {
      value: '120%',
      type: 'lineHeights',
    },
    sm: {
      value: '130%',
      type: 'lineHeights',
    },
    md: {
      value: '140%',
      type: 'lineHeights',
    },
    lg: {
      value: '150%',
      type: 'lineHeights',
    },
    xl: {
      value: '160%',
      type: 'lineHeights',
    },
    xxl: {
      value: '180%',
      type: 'lineHeights',
    },
    max: {
      value: '200%',
      type: 'lineHeights',
    },
  },
  icons: {
    value: 'Font Awesome 5 Pro',
    type: 'fontFamilies',
  },
  headings: {
    value: 'Roboto',
    type: 'fontFamilies',
  },
  body: {
    value: 'Roboto',
    type: 'fontFamilies',
  },
  gradient: {
    z2: {
      value:
        'linear-gradient(90deg, rgba($background.z2, 0) 0%, rgba($background.z2, 1) 20%)',
      type: 'color',
    },
    z1: {
      value:
        'linear-gradient(90deg, rgba($background.z1, 0) 0%, rgba($background.z1, 1) 20%)',
      type: 'color',
    },
    z0: {
      value:
        'linear-gradient(90deg, rgba($background.z0, 0) 0%, rgba($background.z0, 1) 20%)',
      type: 'color',
    },
    brandPrimaryLight: {
      value:
        'linear-gradient(90deg, rgba($brand.primary.light, 0) 0%, rgba($brand.primary.light, 1) 20%)',
      type: 'color',
    },
    brandPrimaryMain: {
      value:
        'linear-gradient(90deg, rgba($brand.primary.main, 0) 0%, rgba($brand.primary.main, 1) 20%)',
      type: 'color',
    },
    brandPrimaryDark: {
      value:
        'linear-gradient(90deg, rgba($brand.primary.dark, 0) 0%, rgba($brand.primary.dark, 1) 20%)',
      type: 'color',
    },
  },
};

export default theme;
