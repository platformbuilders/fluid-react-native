import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Fluid React Native',
  tagline: 'Biblioteca de componentes UI implementando o Design System Fluid',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://platformbuilders.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'platformbuilders', // Usually your GitHub org/user name.
  projectName: 'fluid-react-native', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
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
            'https://github.com/platformbuilders/fluid-react-native/tree/main/docs/website/',
          routeBasePath: 'docs',
        },
        blog: false, // Desativando o blog
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/fluid-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Fluid React Native',
      logo: {
        alt: 'Fluid React Native Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentação',
        },
        {
          to: '/docs/components',
          label: 'Componentes',
          position: 'left',
        },
        {
          to: '/docs/theme',
          label: 'Tema',
          position: 'left',
        },
        {
          href: 'https://github.com/platformbuilders/fluid-react-native',
          label: 'GitHub',
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
              label: 'Arquitetura',
              to: '/docs/architecture',
            },
            {
              label: 'Componentes',
              to: '/docs/components',
            },
          ],
        },
        {
          title: 'Recursos',
          items: [
            {
              label: 'Storybook',
              href: 'https://platformbuilders.github.io/fluid-react-native/storybook',
            },
            {
              label: 'Backlog',
              to: '/docs/backlog',
            },
          ],
        },
        {
          title: 'Mais',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/platformbuilders/fluid-react-native',
            },
            {
              label: 'Platform Builders',
              href: 'https://platformbuilders.io',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Platform Builders. Construído com Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'diff', 'json', 'typescript', 'tsx'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
