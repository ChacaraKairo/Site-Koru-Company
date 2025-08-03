import React from 'react';
import styles from './styles/ContactInfo.module.css';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

interface Props {
  onCopyPhone: () => void;
}

export function ContactInfo({ onCopyPhone }: Props) {
  return (
    <div className={styles.contacts}>
      <p>
        <FaEnvelope className={styles.icon} />
        <a
          href="mailto:korutecnologia@gmail.com"
          className={styles.emailLink}
        >
          korutecnologia@gmail.com
        </a>
      </p>
      <p onClick={onCopyPhone} className={styles.clickable}>
        <FaPhoneAlt className={styles.icon} /> +55 (49)
        98923-3265
      </p>
    </div>
  );
}
