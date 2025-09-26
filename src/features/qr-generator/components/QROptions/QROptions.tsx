import React from 'react';
import { Select, ColorInput } from '../../../../components';
import { FormField } from '../FormField';
import { QRSize, QRErrorCorrectionLevel } from '../../types';
import { QR_CONFIG } from '../../../../Config';
import styles from './QROptions.module.css';

export interface QROptionsProps {
  size: QRSize;
  onSizeChange: (size: QRSize) => void;
  foregroundColor: string;
  onForegroundColorChange: (color: string) => void;
  backgroundColor: string;
  onBackgroundColorChange: (color: string) => void;
  errorLevel: QRErrorCorrectionLevel;
  onErrorLevelChange: (level: QRErrorCorrectionLevel) => void;
}

export const QROptions: React.FC<QROptionsProps> = ({
  size,
  onSizeChange,
  foregroundColor,
  onForegroundColorChange,
  backgroundColor,
  onBackgroundColorChange,
  errorLevel,
  onErrorLevelChange,
}) => {
  return (
    <div className={styles.options}>
      <FormField label="QRコードサイズ:">
        <Select
          value={size}
          onChange={(value) => onSizeChange(value as QRSize)}
          options={QR_CONFIG.SIZE_OPTIONS}
        />
      </FormField>

      <div className={styles.colorOption}>
        <FormField label="前景色:">
          <ColorInput
            value={foregroundColor}
            onChange={onForegroundColorChange}
          />
        </FormField>

        <FormField label="背景色:">
          <ColorInput
            value={backgroundColor}
            onChange={onBackgroundColorChange}
          />
        </FormField>
      </div>

      <FormField label="誤り訂正レベル:">
        <Select
          value={errorLevel}
          onChange={(value) => onErrorLevelChange(value as QRErrorCorrectionLevel)}
          options={QR_CONFIG.ERROR_LEVEL_OPTIONS}
        />
      </FormField>
    </div>
  );
};