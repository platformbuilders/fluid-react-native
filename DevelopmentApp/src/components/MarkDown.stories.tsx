import type {Meta} from '@storybook/react';
import Markdown from '@platformbuilders/fluid-react-native/dist/components/Markdown';

const meta: Meta<typeof Markdown> = {
  title: 'Markdown',
  component: Markdown,
  argTypes: {
    textStyle: {control: {type: 'object'}},
  },
  args: {
    textStyle: {color: '#193f5e'},
    children: `# Markdown
**Markdown is a lightweight and easy-to-use syntax for styling all forms of writing on the GitHub platform.**

Documentation is available at [Markdown Guide](https://www.npmjs.com/package/react-native-markdown-display)
`,
  },
  parameters: {
    notes: 'Este componente é utilizado para renderizar markdown.',
  },
};

export default meta;

export const Default = {};
