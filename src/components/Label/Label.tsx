import React from 'react';
import styles from './Label.module.css';

export interface LabelProps {
  children: React.ReactNode;
  htmlFor?: string;
  className?: string;
}

export const Label: React.FC<LabelProps> = ({
  children,
  htmlFor,
  className = '',
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`${styles.label} ${className}`}
    >
      {children}
    </label>
  );
};