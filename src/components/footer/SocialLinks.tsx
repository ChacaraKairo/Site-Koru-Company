import React from 'react';
import styles from './styles/SocialLinks.module.css';
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
} from 'react-icons/fa';

export function SocialLinks() {
  return (
    <div className={styles.socialIcons}>
      <a
        href="https://www.linkedin.com/company/108584580"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://www.instagram.com/koru_company"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram />
      </a>
      <a
        href="https://www.facebook.com/people/KORU-Company/61578875519493/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook />
      </a>
      <a
        href="https://wa.me/5549989233265"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
}
