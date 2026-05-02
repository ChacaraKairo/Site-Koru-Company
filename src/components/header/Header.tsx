'use client';

import { useEffect, useState } from 'react';
import { CTAButton } from '@/components/ui/CTAButton';
import {
  createWhatsAppLink,
  diagnosticMessage,
} from '@/config/contact';
import { Logo } from './Logo';
import { MenuDesktop } from './MenuDesktop';
import { MenuMobile } from './MenuMobile';
import headerStyles from './styles/Header.module.css';

const whatsappLink = createWhatsAppLink(diagnosticMessage);

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`${headerStyles.header} ${
        scrolled ? headerStyles.scrolled : ''
      }`}
    >
      <nav className={headerStyles.nav} aria-label="Navegação principal">
        <Logo />
        <MenuDesktop />
        <div className={headerStyles.actions}>
          <CTAButton
            href={whatsappLink}
            variant={scrolled ? 'primary' : 'secondary'}
            className={headerStyles.cta}
          >
            Falar com a Koru
          </CTAButton>
          <MenuMobile />
        </div>
      </nav>
    </header>
  );
}
