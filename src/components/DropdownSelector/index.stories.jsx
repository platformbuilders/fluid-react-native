import { storiesOf } from '@storybook/react-native';
import dropdownSelectorMarkdown from './dropdownSelector.md';

storiesOf('Text Input', module)
  .addParameters({
    readme: {
      content: dropdownSelectorMarkdown,
    },
    viewport: {
      defaultViewport: '',
    },
  })
  .add('Example', () => {});
