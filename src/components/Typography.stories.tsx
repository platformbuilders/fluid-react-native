import { TextProps } from 'react-native';
import Typography from '@platformbuilders/fluid-react-native/dist/components/Typography';
import type { Meta } from '@storybook/react';
import { VARIANT_SIZE } from '../enums/size.enum';

const meta: Meta<typeof Typography> = {
  title: 'Typography',
  component: Typography,
  argTypes: {
    lineHeightVariant: { control: { type: 'select' }, options: VARIANT_SIZE },
    variant: { control: { type: 'select' }, options: VARIANT_SIZE },
  },
  args: {
    children: 'Texto de exemplo',
    accessibility: 'Texto de exemplo',
    animated: true,
    id: 'typography',
    lineHeightVariant: 'md',
    numberOfLines: 1,
    variant: 'md',
    style: { color: '#222' },
  } as TextProps,
  parameters: {
    notes: 'Este componente é utilizado para renderizar um Typhography.',
  },
};

export default meta;

export const Default = {};
