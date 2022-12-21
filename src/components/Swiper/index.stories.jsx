import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { colors } from '../../theme';
import swiperMarkdown from './swiper.md';
import {Swiper} from './index';


storiesOf('Swiper', module)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      content: swiperMarkdown,
      sidebar: swiperMarkdown,
    },
    viewport: {
      defaultViewport: '',
    },
  })
  .add('Simple example with renderItems', () => (
    <Swiper
      data={['Example 1', 'Example 2', 'Example 3']}
     renderItem={({item}) => text('Text', item)}
    />
  ))
  .add('Simple example with children', () => (
    <Swiper>
      {text('Text', 'Example 1')}
      {text('Text', 'Example 2')}
      {text('Text', 'Example 3')}
    </Swiper>
  ));
