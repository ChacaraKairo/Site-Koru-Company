'use client';

import { useEffect } from 'react';
import MobileNavbar from './scripts/MobileNavbar'; // ajuste o caminho conforme sua pasta

import headerStyles from './styles/Header.module.css';
import { Logo } from './Logo';
import { MenuDesktop } from './MenuDesktop';
import { MenuMobile } from './MenuMobile';

export function Header() {
  useEffect(() => {
    const mobileNavbar = new MobileNavbar(
      '.mobile-menu',
      '.nav-list',
      '.nav-list li',
    );
    mobileNavbar.init();

    return () => {
      if (mobileNavbar.mobileMenu) {
        mobileNavbar.mobileMenu.removeEventListener(
          'click',
          mobileNavbar.handleClick,
        );
      }
    };
  }, []);

  return (
    <header className={headerStyles.header}>
      <nav className={headerStyles.nav}>
        <Logo />
        <MenuDesktop />
        <MenuMobile />
      </nav>
    </header>
  );
}
