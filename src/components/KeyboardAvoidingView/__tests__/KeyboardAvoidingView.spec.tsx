import React, { View } from 'react-native';
import renderer from 'react-test-renderer';
import Keyboard from '..';

describe('<Keyboard />', () => {
  it('should render Keyboard', () => {
    const wrapper = renderer.create(
      <Keyboard>
        <View />
      </Keyboard>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
