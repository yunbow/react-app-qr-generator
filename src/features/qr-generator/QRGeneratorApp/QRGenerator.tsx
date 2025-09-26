import React, { useEffect } from 'react';
import { TextArea, Button, Label } from '../../../components';
import { QROptions, QRDisplay, DownloadButtons } from '../components';
import { useQRGenerator } from '../useQRGenerator';
import styles from './QRGenerator.module.css';

export const QRGenerator: React.FC = () => {
  const {
    text,
    size,
    foregroundColor,
    backgroundColor,
    errorLevel,
    isGenerated,
    qrElementRef,
    setText,
    setSize,
    setForegroundColor,
    setBackgroundColor,
    setErrorLevel,
    generateQR,
    clearQR,
    downloadPNG,
    downloadSVG,
  } = useQRGenerator();

  const handleTextChange = (value: string) => {
    setText(value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      generateQR();
    }
  };

  useEffect(() => {
    // Load QRCode library
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>QRコード生成ツール</h1>

      <div className={styles.inputSection}>
        <Label>テキストまたはURLを入力:</Label>
        <TextArea
          value={text}
          onChange={handleTextChange}
          placeholder="ここにテキストまたはURLを入力してください"
          rows={4}
          onKeyDown={handleKeyDown}
        />

        <QROptions
          size={size}
          onSizeChange={setSize}
          foregroundColor={foregroundColor}
          onForegroundColorChange={setForegroundColor}
          backgroundColor={backgroundColor}
          onBackgroundColorChange={setBackgroundColor}
          errorLevel={errorLevel}
          onErrorLevelChange={setErrorLevel}
        />

        <div className={styles.buttonGroup}>
          <Button onClick={generateQR} variant="primary">
            QRコードを生成
          </Button>
          <Button onClick={clearQR} variant="secondary">
            クリア
          </Button>
        </div>
      </div>

      <div className={styles.resultSection}>
        <QRDisplay qrElementRef={qrElementRef} />
        <DownloadButtons
          onDownloadPng={downloadPNG}
          onDownloadSvg={downloadSVG}
          disabled={!isGenerated}
        />
      </div>
    </div>
  );
};