export type QRErrorCorrectionLevel = 'L' | 'M' | 'Q' | 'H';

export type QRSize = 128 | 256 | 512;

export interface QRConfig {
  text: string;
  size: QRSize;
  foregroundColor: string;
  backgroundColor: string;
  errorLevel: QRErrorCorrectionLevel;
}

export interface QRGeneratorProps {
  onQRGenerated?: (dataUrl: string) => void;
}