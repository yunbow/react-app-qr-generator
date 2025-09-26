import type { Meta, StoryObj } from '@storybook/react';
import { QROptions } from '../../features/qr-generator/components/QROptions';
import { QR_CONFIG } from '../../Config';

const meta: Meta<typeof QROptions> = {
  title: 'Features/QrGenerator/Components/QROptions',
  component: QROptions,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: QR_CONFIG.DEFAULT_SIZE,
    onSizeChange: () => {},
    foregroundColor: QR_CONFIG.DEFAULT_FOREGROUND_COLOR,
    onForegroundColorChange: () => {},
    backgroundColor: QR_CONFIG.DEFAULT_BACKGROUND_COLOR,
    onBackgroundColorChange: () => {},
    errorLevel: QR_CONFIG.DEFAULT_ERROR_LEVEL,
    onErrorLevelChange: () => {},
  },
};

export const CustomColors: Story = {
  args: {
    size: 512,
    onSizeChange: () => {},
    foregroundColor: '#3498db',
    onForegroundColorChange: () => {},
    backgroundColor: '#f1c40f',
    onBackgroundColorChange: () => {},
    errorLevel: 'H',
    onErrorLevelChange: () => {},
  },
};