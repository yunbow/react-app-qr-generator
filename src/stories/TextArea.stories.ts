import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from '../components/TextArea';

const meta: Meta<typeof TextArea> = {
  title: 'Atoms/TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    rows: {
      control: { type: 'number', min: 1, max: 10 },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: '',
    onChange: () => {},
    placeholder: 'テキストを入力してください',
    rows: 4,
  },
};

export const WithValue: Story = {
  args: {
    value: 'Hello World!\nhttps://example.com',
    onChange: () => {},
    placeholder: 'テキストを入力してください',
    rows: 4,
  },
};

export const Disabled: Story = {
  args: {
    value: 'Disabled textarea',
    onChange: () => {},
    disabled: true,
    rows: 4,
  },
};