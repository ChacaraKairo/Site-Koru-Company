'use client';

import { useEffect, useState } from 'react';
import { CTAButton } from '@/components/ui/CTAButton';
import { Logo } from './Logo';
import { MenuDesktop } from './MenuDesktop';
import { MenuMobile } from './MenuMobile';
import headerStyles from './styles/Header.module.css';

const whatsappLink =
  'https://wa.me/5519986011419?text=Ol%C3%A1%21%20Tenho%20interesse%20em%20agendar%20um%20diagn%C3%B3stico%20com%20a%20Koru%20Company.';

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
          <CTAButton href={whatsappLink} className={headerStyles.cta}>
            Falar com a Koru
          </CTAButton>
          <MenuMobile />
        </div>
      </nav>
    </header>
  );
}
