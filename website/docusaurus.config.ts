import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Fluid',
  tagline: 'Biblioteca de componentes UI para o Design System Fluid',
  favicon: 'img/logo-minimal.png',

  // Set the production url of your site here
  url: 'https://fluid.builders',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'platformbuilders', // Usually your GitHub org/user name.
  projectName: 'fluid-react-native', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR', 'en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/platformbuilders/fluid-react-native/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/platformbuilders/fluid-react-native/edit/master/website/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/logo-full-black.png',
    navbar: {
      title: 'Fluid',
      logo: {
        alt: 'Fluid Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentação',
        },
        {
          type: 'docSidebar',
          sidebarId: 'componentsSidebar',
          position: 'left',
          label: 'Componentes',
        },
        {
          to: '/docs/getting-started',
          label: 'Começar',
          position: 'right',
          className: 'get-started-btn',
        },
        {
          href: 'https://github.com/platformbuilders/fluid-react-native',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentação',
          items: [
            {
              label: 'Introdução',
              to: '/docs/intro',
            },
            {
              label: 'Instalação',
              to: '/docs/installation',
            },
            {
              label: 'Começar',
              to: '/docs/getting-started',
            },
          ],
        },
        {
          title: 'Componentes',
          items: [
            {
              label: 'Tipografia',
              to: '/docs/components/button',
            },
            {
              label: 'Botões',
              to: '/docs/components/button',
            },
            {
              label: 'Formulários',
              to: '/docs/components/text-input',
            },
          ],
        },
        {
          title: 'Comunidade',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/platformbuilders/fluid-react-native',
            },
            {
              label: 'NPM',
              href: 'https://www.npmjs.com/package/@platformbuilders/fluid-react-native',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Platform Builders. Construído com Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'diff', 'json', 'typescript'],
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
