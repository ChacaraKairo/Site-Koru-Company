import Link from 'next/link';
import { SocialLinks } from './SocialLinks';
import styles from './styles/Footer.module.css';

const links = [
  { href: '#hero', label: 'Início' },
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
            href="https://wa.me/5519986011419"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
          <a href="mailto:korutecnologia@gmail.com">
            korutecnologia@gmail.com
          </a>
          <span>Indaiatuba - SP</span>
        </div>

        <SocialLinks />

        <p className={styles.copy}>
          © 2026 Koru Company. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
