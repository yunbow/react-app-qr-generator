import React from 'react';
import { Button } from '../../../../components';
import styles from './DownloadButtons.module.css';

export interface DownloadButtonsProps {
  onDownloadPng: () => void;
  onDownloadSvg: () => void;
  disabled?: boolean;
}

export const DownloadButtons: React.FC<DownloadButtonsProps> = ({
  onDownloadPng,
  onDownloadSvg,
  disabled = false,
}) => {
  return (
    <div className={styles.downloadOptions}>
      <Button
        onClick={onDownloadPng}
        disabled={disabled}
        className={styles.pngButton}
      >
        PNG形式でダウンロード
      </Button>
      <Button
        onClick={onDownloadSvg}
        disabled={disabled}
        className={styles.svgButton}
      >
        SVG形式でダウンロード
      </Button>
    </div>
  );
};