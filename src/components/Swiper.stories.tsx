import React from 'react';
import { View } from 'react-native';
import { Swiper } from '@platformbuilders/fluid-react-native/dist/components/Swiper';
import type { Meta } from '@storybook/react';

const Render = ({ ...args }) => {
  const items = [1, 2, 3, 4, 5];

  return (
    <View>
      <Swiper accessibility="test-swiper" showPagination {...args}>
        {items.map((_, index) => (
          <View
            key={index}
            style={{
              width: 250,
              height: 400,
              margin: 5,
              backgroundColor: '#193f5e',
              borderRadius: 4,
            }}
          />
        ))}
      </Swiper>
    </View>
  );
};

const meta: Meta<typeof Swiper> = {
  title: 'Swiper',
  component: Render,
  args: {
    id: 'swiper',
    testID: 'test-swiper',
    autoplay: true,
    autoplayDelay: 2,
    autoplayLoop: true,
    showPagination: true,
  },
  parameters: {
    notes: 'Este componente é utilizado para renderizar um Swiper.',
  },
};

export default meta;

export const Default = {};
