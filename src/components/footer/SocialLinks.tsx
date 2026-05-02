import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from 'react-icons/fa';
import styles from './styles/SocialLinks.module.css';

export function SocialLinks() {
  return (
    <div className={styles.socialIcons} aria-label="Redes sociais">
      <a
        href="https://www.linkedin.com/company/108584580"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn da Koru Company"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://www.instagram.com/koru_company"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram da Koru Company"
      >
        <FaInstagram />
      </a>
      <a
        href="https://www.facebook.com/people/KORU-Company/61578875519493/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook da Koru Company"
      >
        <FaFacebook />
      </a>
      <a
        href="https://wa.me/5519986011419"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp da Koru Company"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
}
