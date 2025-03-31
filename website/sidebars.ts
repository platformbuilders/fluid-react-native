import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Introdução',
      items: ['intro', 'getting-started', 'installation'],
    },
    {
      type: 'category',
      label: 'Guias',
      items: [
        'guides/best-practices',
        'theming',
        'accessibility',
      ],
    },
  ],
  
  componentsSidebar: [
    {
      type: 'category',
      label: 'Componentes',
      items: [
        {
          type: 'category',
          label: 'Interação',
          items: [
            'components/button',
            'components/touchable/index',
            'components/badge/index',
            'components/link/link',
          ],
        },
        {
          type: 'category',
          label: 'Layout',
          items: [
            'components/accordion/index',
            'components/card',
            'components/separator/index',
          ],
        },
        {
          type: 'category',
          label: 'Navegação',
          items: [
            'components/bottom-navigation/index',
            'components/header/index',
          ],
        },
        {
          type: 'category',
          label: 'Formulários',
          items: [
            'components/text-input',
            'components/checkbox',
            'components/search-input/index',
            'components/date-picker/index',
            'components/form-error/index',
            'components/pin-input/pin-input',
          ],
        },
        {
          type: 'category',
          label: 'Exibição',
          items: [
            'components/avatar/index',
            'components/icon/index',
            'components/image/index',
            'components/typography/index',
            'components/upload-photo/index',
            'components/markdown/markdown',
          ],
        },
        {
          type: 'category',
          label: 'Feedback',
          items: [
            'components/loading-indicator/loading-indicator',
          ],
        },
      ],
    },
  ],
};

export default sidebars;
