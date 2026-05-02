'use client';

import { useEffect, useState } from 'react';
import { CTAButton } from '@/components/ui/CTAButton';
import { MenuList } from './MenuList';
import mobileMenuStyles from './styles/MenuMobile.module.css';

const whatsappLink =
  'https://wa.me/5519986011419?text=Ol%C3%A1%21%20Tenho%20interesse%20em%20agendar%20um%20diagn%C3%B3stico%20com%20a%20Koru%20Company.';

export function MenuMobile() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <button
        className={mobileMenuStyles.mobileMenuButton}
        onClick={() => setMenuOpen((open) => !open)}
        aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
      >
        <span
          className={`${mobileMenuStyles.line} ${
            menuOpen ? mobileMenuStyles.line1Active : ''
          }`}
        />
        <span
          className={`${mobileMenuStyles.line} ${
            menuOpen ? mobileMenuStyles.line2Active : ''
          }`}
        />
      </button>

      <div
        id="mobile-navigation"
        className={`${mobileMenuStyles.drawer} ${
          menuOpen ? mobileMenuStyles.drawerOpen : ''
        }`}
        aria-hidden={!menuOpen}
      >
        <div className={mobileMenuStyles.drawerContent}>
          <MenuList
            onLinkClick={closeMenu}
            className={mobileMenuStyles.drawerNavList}
          />
          <CTAButton href={whatsappLink} className={mobileMenuStyles.drawerCta}>
            Falar com a Koru
          </CTAButton>
        </div>
      </div>
    </>
  );
}
