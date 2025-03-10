import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

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
  docsSidebar: [
    {
      type: 'category',
      label: 'Introdução',
      items: ['intro', 'getting-started', 'architecture'],
    },
    {
      type: 'category',
      label: 'Guias',
      items: [
        'guides/installation',
        'guides/theming',
        'guides/customization',
        'guides/accessibility',
      ],
    },
    {
      type: 'category',
      label: 'Componentes',
      items: [
        'components/index',
        {
          type: 'category',
          label: 'Formulários',
          items: [
            'components/button',
            // Comentando componentes que ainda não foram criados
            // 'components/checkbox',
            // 'components/text-input',
            // 'components/password-input',
            // 'components/radio-button',
            // 'components/toggle',
            // 'components/pin-input',
            // 'components/date-picker',
            // 'components/search-input',
          ],
        },
        // Comentando categorias que ainda não têm componentes documentados
        /*
        {
          type: 'category',
          label: 'Navegação e Layout',
          items: [
            'components/header',
            'components/bottom-navigation',
            'components/accordion',
            'components/separator',
          ],
        },
        {
          type: 'category',
          label: 'Feedback e Status',
          items: [
            'components/loading-indicator',
            'components/badge',
            'components/form-error',
          ],
        },
        {
          type: 'category',
          label: 'Conteúdo e Mídia',
          items: [
            'components/typography',
            'components/icon',
            'components/avatar',
            'components/image',
            'components/upload-photo',
            'components/markdown',
          ],
        },
        {
          type: 'category',
          label: 'Interação',
          items: [
            'components/touchable',
            'components/link',
          ],
        },
        */
      ],
    },
    {
      type: 'category',
      label: 'Tema',
      items: ['theme/index', 'theme/tokens', 'theme/customization'],
    },
    'backlog',
  ],
};

export default sidebars;
