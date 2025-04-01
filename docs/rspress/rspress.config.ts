import { defineConfig } from 'rspress/config';
import path from 'path';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Fluid React Native',
  description: 'Documentação do Fluid React Native',
  outDir: path.join(__dirname, 'dist'),
  // Desativando módulos que podem causar problemas
  builderConfig: {
    source: {
      alias: {
        // Definindo um alias para o módulo problemático
        'virtual-search-hooks': path.join(__dirname, 'src/empty.js')
      }
    }
  },
  themeConfig: {
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/platformbuilders/fluid-react-native' }
    ],
    nav: [
      { text: 'Guia', link: '/guide/' },
      { text: 'Componentes', link: '/components/' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Guia',
          items: [
            { text: 'Introdução', link: '/guide/introduction' },
            { text: 'Instalação', link: '/guide/installation' },
            { text: 'Acessibilidade', link: '/guide/accessibility' },
          ],
        },
      ],
      '/components/': [
        {
          text: 'Componentes',
          items: [
            { text: 'Visão Geral', link: '/components/' },
          ],
        },
        {
          text: 'Elementos Básicos',
          items: [
            { text: 'Typography', link: '/components/typography' },
            { text: 'Button', link: '/components/button' },
          ],
        },
        {
          text: 'Formulários',
          items: [
            { text: 'TextInput', link: '/components/forms/textinput' },
            { text: 'Checkbox', link: '/components/forms/checkbox' },
          ],
        },
        {
          text: 'Mídia',
          items: [
            { text: 'Image', link: '/components/media/image' },
            { text: 'Avatar', link: '/components/media/avatar' },
            { text: 'Icon', link: '/components/media/icon' },
          ],
        },
        {
          text: 'Feedback',
          items: [
            { text: 'LoadingIndicator', link: '/components/feedback/loadingindicator' },
          ],
        },
      ],
    },
  },
}); 