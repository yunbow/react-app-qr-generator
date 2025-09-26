import React from 'react';
import styles from './Select.module.css';

export interface SelectOption {
  readonly value: string | number;
  readonly label: string;
}

export interface SelectProps {
  value: string | number;
  onChange: (value: string | number) => void;
  options: readonly SelectOption[];
  disabled?: boolean;
  className?: string;
}

export const Select: React.FC<SelectProps> = ({
  value,
  onChange,
  options,
  disabled = false,
  className = '',
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = options.find(option =>
      option.value.toString() === e.target.value
    );
    if (selectedOption) {
      onChange(selectedOption.value);
    }
  };

  return (
    <select
      value={value}
      onChange={handleChange}
      disabled={disabled}
      className={`${styles.select} ${className}`}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};