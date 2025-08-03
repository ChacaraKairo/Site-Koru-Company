import React from 'react';
import styles from './styles/Footer.module.css';

interface Props {
  message: string;
}

export function AlertMessage({ message }: Props) {
  return (
    <div className={styles.customAlert}>{message}</div>
  );
}
