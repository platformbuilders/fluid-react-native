import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { colors } from '../../theme';
import buttonMarkdown from './button.md';
import Button from './index';

const optionsVariant = {
  primary: colors.brand.primary,
  secondary: colors.brand.secondary,
  tertiary: colors.brand.tertiary,
  accent: colors.brand.accent,
  flat: 'transparent',
};

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      content: buttonMarkdown,
      sidebar: buttonMarkdown,
    },
    viewport: {
      defaultViewport: '',
    },
  })
  .add('Simple example', () => (
    <Button
      tertiary={boolean('tertiary', false)}
      secondary={boolean('secondary', false)}
      style={{
        width: 100,
        height: 50,
        backgroundColor: select('variant', optionsVariant, 'primary'),
      }}
      disabled={boolean('disabled', false)}
      rounded={boolean('rounded', false)}
      onPress={action('button-click')}
    >
      {text('Text', 'Button Test')}
    </Button>
  ));
