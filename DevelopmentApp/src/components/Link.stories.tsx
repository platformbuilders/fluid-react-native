import type {Meta} from '@storybook/react';
import Link from '@platformbuilders/fluid-react-native/dist/components/Link';
import {VARIANT_SIZE} from '../utils/enums/size.enum';
import {StyleProp, TextStyle} from 'react-native';

const meta: Meta<typeof Link> = {
  title: 'Link',
  component: Link,
  argTypes: {
    onPress: {action: 'clicked'},
    variant: {control: {type: 'select'}, options: VARIANT_SIZE},
  },
  args: {
    accessibility: 'Link',
    accessibilityLabel: 'Link',
    children: 'Texto de exemplo',
    disabled: false,
    onPress: () => {},
    id: 'link-id',
    style: {
      color: '#355deb',
    } as StyleProp<TextStyle>,
    testID: 'link-test-id',
    variant: 'lg',
  },
  parameters: {
    notes:
      'Esse componente tem como função auxiliar na manipulação, manutenção e padronização de links dentro de uma aplicação.',
  },
};

export default meta;

export const Default = {};
