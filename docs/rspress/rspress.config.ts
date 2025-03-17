import * as path from 'path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Fluid React Native',
  description:
    'Um pacote de ferramentas para desenvolvimento de aplicativos móveis com React Native, baseado no design system da Platform Builders.',
  logo: {
    light: '/fluid-logo-light.svg',
    dark: '/fluid-logo-dark.svg',
  },
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/platformbuilders/fluid-react-native',
      },
    ],
    locales: [
      {
        lang: 'pt-BR',
        label: 'Português (BR)',
      },
    ],
    retainedVersions: ['0.7.0'],
    editLink: {
      docRepoBaseUrl:
        'https://github.com/platformbuilders/fluid-react-native/tree/master/docs/rspress',
      text: 'Sugerir alterações para esta página',
    },
    enableContentSections: true,
    outlineTitle: 'Nesta página',
  },
  markdown: {
    checkDeadLinks: true,
  },
  route: {
    cleanUrls: true,
  },
  base: '/fluid-react-native/',
  builderConfig: {
    output: {
      copy: {
        patterns: [
          { from: './static', to: './' },
          // Caso precise copiar outros arquivos, adicione os patterns aqui
        ],
      },
    },
  },
  navbar: [
    {
      text: 'Guias',
      link: '/guides',
      activeMatch: '^/guides/',
    },
    {
      text: 'Componentes',
      link: '/components',
      activeMatch: '^/components/',
    },
    {
      text: 'Ícones',
      link: '/icons',
      activeMatch: '^/icons/',
    },
    {
      text: 'FAQ',
      link: '/faq',
      activeMatch: '^/faq/',
    },
  ],
  sidebar: {
    '/': [
      {
        text: 'Guias',
        link: '/guides',
        collapsed: false,
        items: [
          {
            text: 'Instalação',
            link: '/guides/installation',
          },
          {
            text: 'Primeiros passos',
            link: '/guides/getting-started',
          },
          {
            text: 'Temas',
            link: '/guides/theming',
          },
          {
            text: 'Acessibilidade',
            link: '/guides/accessibility',
          },
          {
            text: 'Suporte React Navigation',
            link: '/guides/react-navigation',
          },
          {
            text: 'Migração',
            link: '/guides/migration',
          },
        ],
      },
      {
        text: 'Componentes',
        link: '/components',
        collapsed: false,
        items: [
          {
            text: 'Básicos',
            collapsed: false,
            items: [
              {
                text: 'Typography',
                link: '/components/typography',
              },
              {
                text: 'Touchable',
                link: '/components/touchable',
              },
              {
                text: 'Link',
                link: '/components/link',
              },
              {
                text: 'Button',
                link: '/components/button',
              },
              {
                text: 'Icon',
                link: '/components/icon',
              },
              {
                text: 'Avatar',
                link: '/components/avatar',
              },
              {
                text: 'Image',
                link: '/components/image',
              },
              {
                text: 'Badge',
                link: '/components/badge',
              },
              {
                text: 'Accordion',
                link: '/components/accordion',
              },
            ],
          },
          {
            text: 'Navegação',
            collapsed: false,
            items: [
              {
                text: 'BottomNavigation',
                link: '/components/bottomnavigation',
              },
            ],
          },
          {
            text: 'Formulários',
            collapsed: false,
            items: [
              {
                text: 'TextInput',
                link: '/components/textinput',
              },
              {
                text: 'DatePicker',
                link: '/components/datepicker',
              },
              {
                text: 'PinInput',
                link: '/components/pininput',
              },
              {
                text: 'SearchInput',
                link: '/components/searchinput',
              },
              {
                text: 'FormError',
                link: '/components/formerror',
              },
              {
                text: 'Checkbox',
                link: '/components/checkbox',
              },
              {
                text: 'RadioButton',
                link: '/components/radiobutton',
              },
              {
                text: 'Toggle',
                link: '/components/toggle',
              },
            ],
          },
          {
            text: 'Display',
            collapsed: false,
            items: [
              {
                text: 'UploadPhoto',
                link: '/components/uploadphoto',
              },
              {
                text: 'Markdown',
                link: '/components/markdown',
              },
            ],
          },
          {
            text: 'Feedback',
            collapsed: false,
            items: [
              {
                text: 'Alert',
                link: '/components/alert',
              },
              {
                text: 'Modal',
                link: '/components/modal',
              },
              {
                text: 'Spinner',
                link: '/components/spinner',
              },
              {
                text: 'Placeholder',
                link: '/components/placeholder',
              },
            ],
          },
        ],
      },
      {
        text: 'FAQ',
        link: '/faq',
      },
    ],
  },
});
