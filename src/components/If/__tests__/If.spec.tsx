import React from 'react';
import { Text } from 'react-native';
import renderer from 'react-test-renderer';
import If from '..';

describe('<If />', () => {
  it('should match snapshot when truthy', () => {
    const render = renderer.create(
      <If condition>
        <Text>Test</Text>
      </If>,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });

  it('should match snapshot when false', () => {
    const render = renderer.create(
      <If condition={false}>
        <Text>Test</Text>
      </If>,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });

  it('should render the component when the condition is truthy', () => {
    const render = renderer.create(
      <If condition>
        <Text>Test</Text>
      </If>,
    );

    expect(JSON.stringify(render.toJSON())).toBe(
      JSON.stringify({
        type: 'Text',
        props: {},
        children: ['Test'],
      }),
    );
  });

  it('should not render the component when the condition is falsy', () => {
    const render = renderer.create(
      <If condition={false}>
        <Text>Test</Text>
      </If>,
    );

    expect(render.toJSON()).toBe(null);
  });
});
