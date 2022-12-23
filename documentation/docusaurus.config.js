module.exports = {
  title: '@platformbuilders/fluid-react-native',
  tagline: `The perfect environment to learn and with the option to don't get your eyes burned down 😎`,
  url: 'https://fluid-react-native.web.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'PlatformBuilders', // Usually your GitHub org/user name.
  projectName: 'fluid-react-native', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: `Fluid React Native - v${require('./../package.json').version}`,
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
            'https://github.com/platformbuilders/fluid-react-native/tree/master/documentation',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
