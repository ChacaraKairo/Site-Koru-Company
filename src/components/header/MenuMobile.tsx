'use client';

import { useState } from 'react';
import mobileMenuStyles from './styles/MenuMobile.module.css';
import { MenuList } from './MenuList';

interface MenuMobileProps {
  onLinkClick?: () => void;
}

export function MenuMobile({
  onLinkClick,
}: MenuMobileProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  function handleLinkClick() {
    setMenuOpen(false);
    if (onLinkClick) onLinkClick();
  }

  return (
    <>
      <button
        className={mobileMenuStyles.mobileMenuButton}
        onClick={toggleMenu}
        aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
      >
        <div
          className={`${mobileMenuStyles.line} ${
            menuOpen ? mobileMenuStyles.line1Active : ''
          }`}
        />
        <div
          className={`${mobileMenuStyles.line} ${
            menuOpen ? mobileMenuStyles.line2Active : ''
          }`}
        />
        <div
          className={`${mobileMenuStyles.line} ${
            menuOpen ? mobileMenuStyles.line3Active : ''
          }`}
        />
      </button>

      <div
        className={`${mobileMenuStyles.drawer} ${
          menuOpen ? mobileMenuStyles.drawerOpen : ''
        }`}
        onClick={() => setMenuOpen(false)}
      >
        <div
          className={mobileMenuStyles.drawerContent}
          onClick={(e) => e.stopPropagation()}
        >
          <MenuList
            onLinkClick={handleLinkClick}
            className={mobileMenuStyles.drawerNavList}
          />
        </div>
      </div>
    </>
  );
}
