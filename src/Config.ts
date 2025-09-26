import { QRSize, QRErrorCorrectionLevel } from './features/qr-generator/types';

export const QR_CONFIG = {
  DEFAULT_SIZE: 256 as QRSize,
  DEFAULT_FOREGROUND_COLOR: '#000000',
  DEFAULT_BACKGROUND_COLOR: '#ffffff',
  DEFAULT_ERROR_LEVEL: 'M' as QRErrorCorrectionLevel,
  SIZE_OPTIONS: [
    { value: 128, label: '小 (128x128)' },
    { value: 256, label: '中 (256x256)' },
    { value: 512, label: '大 (512x512)' },
  ] as const,
  ERROR_LEVEL_OPTIONS: [
    { value: 'L', label: '低 (7%)' },
    { value: 'M', label: '中 (15%)' },
    { value: 'Q', label: '高 (25%)' },
    { value: 'H', label: '最高 (30%)' },
  ] as const,
} as const;