import React from 'react';
import styles from './ColorInput.module.css';

export interface ColorInputProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  className?: string;
}

export const ColorInput: React.FC<ColorInputProps> = ({
  value,
  onChange,
  disabled = false,
  className = '',
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <input
      type="color"
      value={value}
      onChange={handleChange}
      disabled={disabled}
      className={`${styles.colorInput} ${className}`}
    />
  );
};