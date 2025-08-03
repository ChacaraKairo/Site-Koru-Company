import React, { useState } from 'react';
import styles from './styles/Footer.module.css';
import { ContactInfo } from './ContactInfo';
import { SocialLinks } from './SocialLinks';
import { AlertMessage } from './AlertMessage';
import { copyPhoneNumber } from './scripts/copyPhoneNumber';

export function Footer() {
  const [showAlert, setShowAlert] = useState(false);

  const handleCopyPhone = () => {
    copyPhoneNumber(setShowAlert);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {showAlert && (
          <AlertMessage message="Número copiado para a área de transferência!" />
        )}
        <h3 className={styles.logo}>Koru Company</h3>
        <ContactInfo onCopyPhone={handleCopyPhone} />
        <SocialLinks />
        <p className={styles.copy}>
          © {new Date().getFullYear()} Koru Company. Todos
          os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
