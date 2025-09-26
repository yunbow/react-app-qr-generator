import type { Meta, StoryObj } from '@storybook/react';
import { ColorInput } from '../components/ColorInput';

const meta: Meta<typeof ColorInput> = {
  title: 'Components/ColorInput',
  component: ColorInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: '#000000',
    onChange: () => {},
  },
};

export const Background: Story = {
  args: {
    value: '#ffffff',
    onChange: () => {},
  },
};

export const Disabled: Story = {
  args: {
    value: '#ff0000',
    onChange: () => {},
    disabled: true,
  },
};