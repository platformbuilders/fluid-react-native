import React from 'react';
import { View } from 'react-native';
import renderer from 'react-test-renderer';
import Markdown from '..';

describe('<Markdown />', () => {
  it('should render Markdown', () => {
    const wrapper = renderer.create(
      <Markdown>
        <View />
      </Markdown>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
