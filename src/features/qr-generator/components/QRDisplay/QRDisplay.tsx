import React from 'react';
import styles from './QRDisplay.module.css';

export interface QRDisplayProps {
  qrElementRef: React.RefObject<HTMLDivElement>;
  className?: string;
}

export const QRDisplay: React.FC<QRDisplayProps> = ({
  qrElementRef,
  className = '',
}) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <div ref={qrElementRef} className={styles.qrcode} />
    </div>
  );
};