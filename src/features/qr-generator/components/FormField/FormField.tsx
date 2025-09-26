import React from 'react';
import { Label } from '../../../../components';
import styles from './FormField.module.css';

export interface FormFieldProps {
  label: string;
  children: React.ReactNode;
  className?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  children,
  className = '',
}) => {
  return (
    <div className={`${styles.formField} ${className}`}>
      <Label>{label}</Label>
      {children}
    </div>
  );
};