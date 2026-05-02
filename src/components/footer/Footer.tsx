import Link from 'next/link';
import { CONTACT, createWhatsAppLink, diagnosticMessage } from '@/config/contact';
import { SocialLinks } from './SocialLinks';
import styles from './styles/Footer.module.css';

const links = [
  { href: '#hero', label: 'Início' },
  { href: '#problems', label: 'Problemas' },
  { href: '#solutions', label: 'Soluções' },
  { href: '#process', label: 'Processo' },
  { href: '#about', label: 'Sobre' },
  { href: '#contact', label: 'Contato' },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <h2>Koru Company</h2>
          <p>
            Soluções digitais sob medida para empresas que querem
            operar melhor.
          </p>
        </div>

        <nav className={styles.links} aria-label="Links do rodapé">
          {links.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.contact}>
          <a
            href={createWhatsAppLink(diagnosticMessage)}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          <span>{CONTACT.city}</span>
        </div>

        <SocialLinks />

        <p className={styles.copy}>
          © 2026 Koru Company. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
