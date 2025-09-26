import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '../components/Select';
import { QR_CONFIG } from '../Config';

const meta: Meta<typeof Select> = {
  title: 'Atoms/Select',
  component: Select,
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

export const SizeSelect: Story = {
  args: {
    value: 256,
    onChange: () => {},
    options: QR_CONFIG.SIZE_OPTIONS,
  },
};

export const ErrorLevelSelect: Story = {
  args: {
    value: 'M',
    onChange: () => {},
    options: QR_CONFIG.ERROR_LEVEL_OPTIONS,
  },
};

export const Disabled: Story = {
  args: {
    value: 256,
    onChange: () => {},
    options: QR_CONFIG.SIZE_OPTIONS,
    disabled: true,
  },
};