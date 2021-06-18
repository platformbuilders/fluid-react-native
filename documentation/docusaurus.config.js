module.exports = {
  title: '@platformbuilders/react-native-elements',
  tagline: `The perfect environment to learn and with the option to don't get your eyes burned down 😎`,
  url: 'https://react-native-elements.web.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'PlatformBuilders', // Usually your GitHub org/user name.
  projectName: 'react-native-elements', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'React Native Elements',
      logo: {
        alt: 'My Site Logo',
        src: 'img/favicon.ico',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Componentes',
              to: 'docs/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Platform Builders. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/platformbuilders/react-native-elements/tree/master/documentation',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
