import { useState, useRef, useCallback } from 'react';
import { QRSize, QRErrorCorrectionLevel } from './types';
import { QR_CONFIG } from '../../Config';

declare global {
  interface Window {
    QRCode: any;
  }
}

export const useQRGenerator = () => {
  const [text, setText] = useState('');
  const [size, setSize] = useState<QRSize>(QR_CONFIG.DEFAULT_SIZE);
  const [foregroundColor, setForegroundColor] = useState<string>(QR_CONFIG.DEFAULT_FOREGROUND_COLOR);
  const [backgroundColor, setBackgroundColor] = useState<string>(QR_CONFIG.DEFAULT_BACKGROUND_COLOR);
  const [errorLevel, setErrorLevel] = useState<QRErrorCorrectionLevel>(QR_CONFIG.DEFAULT_ERROR_LEVEL);
  const [isGenerated, setIsGenerated] = useState(false);

  const qrElementRef = useRef<HTMLDivElement>(null);
  const qrInstanceRef = useRef<any>(null);

  const getErrorCorrectionLevel = (level: QRErrorCorrectionLevel) => {
    if (!window.QRCode) return undefined;

    switch (level) {
      case 'L': return window.QRCode.CorrectLevel.L;
      case 'M': return window.QRCode.CorrectLevel.M;
      case 'Q': return window.QRCode.CorrectLevel.Q;
      case 'H': return window.QRCode.CorrectLevel.H;
      default: return window.QRCode.CorrectLevel.M;
    }
  };

  const generateQR = useCallback(() => {
    if (!text.trim()) {
      alert('テキストまたはURLを入力してください');
      return;
    }

    if (!qrElementRef.current || !window.QRCode) {
      alert('QRコードライブラリが読み込まれていません');
      return;
    }

    // Clear existing QR code
    if (qrInstanceRef.current) {
      qrInstanceRef.current.clear();
      qrElementRef.current.innerHTML = '';
    }

    try {
      // Generate new QR code
      qrInstanceRef.current = new window.QRCode(qrElementRef.current, {
        text: text,
        width: size,
        height: size,
        colorDark: foregroundColor,
        colorLight: backgroundColor,
        correctLevel: getErrorCorrectionLevel(errorLevel)
      });

      setIsGenerated(true);
    } catch (error) {
      console.error('QRコード生成エラー:', error);
      alert('QRコードの生成に失敗しました。');
    }
  }, [text, size, foregroundColor, backgroundColor, errorLevel]);

  const clearQR = useCallback(() => {
    setText('');

    if (qrInstanceRef.current && qrElementRef.current) {
      qrInstanceRef.current.clear();
      qrElementRef.current.innerHTML = '';
    }

    setIsGenerated(false);
  }, []);

  const downloadPNG = useCallback(() => {
    if (!qrInstanceRef.current || !qrElementRef.current) return;

    const canvas = qrElementRef.current.querySelector('canvas');
    if (!canvas) return;

    try {
      const dataURL = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = dataURL;
      link.download = 'qrcode.png';
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('PNG生成エラー:', error);
      alert('PNG形式でのダウンロードに失敗しました。');
    }
  }, []);

  const generateSVG = useCallback(() => {
    if (!qrElementRef.current) return null;

    const canvas = qrElementRef.current.querySelector('canvas');
    if (!canvas) return null;

    const context = canvas.getContext('2d');
    if (!context) return null;
    const pixelData = context.getImageData(0, 0, size, size).data;

    let svgContent = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="${size}" height="${size}" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <rect width="${size}" height="${size}" fill="${backgroundColor}" />`;

    const dotSize = size / canvas.width;
    for (let y = 0; y < canvas.height; y++) {
      for (let x = 0; x < canvas.width; x++) {
        const index = (y * canvas.width + x) * 4;
        if (pixelData[index] < 128) {
          svgContent += `<rect x="${x * dotSize}" y="${y * dotSize}" width="${dotSize}" height="${dotSize}" fill="${foregroundColor}" />`;
        }
      }
    }

    svgContent += '</svg>';
    return svgContent;
  }, [size, foregroundColor, backgroundColor]);

  const downloadSVG = useCallback(() => {
    if (!qrInstanceRef.current) return;

    try {
      const svgData = generateSVG();
      if (!svgData) {
        alert('SVG形式でのダウンロードに失敗しました。');
        return;
      }

      const blob = new Blob([svgData], { type: 'image/svg+xml' });
      const url = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.download = 'qrcode.svg';
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => {
        URL.revokeObjectURL(url);
      }, 100);
    } catch (error) {
      console.error('SVG生成エラー:', error);
      alert('SVG形式でのダウンロードに失敗しました。');
    }
  }, [generateSVG]);

  return {
    // State
    text,
    size,
    foregroundColor,
    backgroundColor,
    errorLevel,
    isGenerated,
    qrElementRef,

    // Actions
    setText,
    setSize,
    setForegroundColor,
    setBackgroundColor,
    setErrorLevel,
    generateQR,
    clearQR,
    downloadPNG,
    downloadSVG,
  };
};