import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { Swiper } from '..';
import theme from '../../../theme';
import Typography from '../../Typography';

const mockData = [
  {
    title: 'Mock',
    content: 'Mock Content',
  },
];

describe('<Swiper />', () => {
  it('should render swiper by renderItems', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Swiper
          accessibility="swiper_with_render_items"
          data={mockData}
          renderItem={({ item }) => <Typography>{item.content}</Typography>}
        />
      </ThemeProvider>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render swiper by children', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Swiper accessibility="swiper_with_children">
          <Typography>Unity Test</Typography>
        </Swiper>
      </ThemeProvider>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
