import type { Meta, StoryObj } from '@storybook/react';
import { DownloadButtons } from '../../features/qr-generator/components/DownloadButtons';

const meta: Meta<typeof DownloadButtons> = {
  title: 'Features/QrGenerator/Components/DownloadButtons',
  component: DownloadButtons,
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

export const Enabled: Story = {
  args: {
    onDownloadPng: () => alert('PNG download'),
    onDownloadSvg: () => alert('SVG download'),
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    onDownloadPng: () => {},
    onDownloadSvg: () => {},
    disabled: true,
  },
};