'use client';

import { useEffect, useRef, useState } from 'react';
import { CTAButton } from '@/components/ui/CTAButton';
import {
  createWhatsAppLink,
  diagnosticMessage,
} from '@/config/contact';
import { MenuList } from './MenuList';
import mobileMenuStyles from './styles/MenuMobile.module.css';

const whatsappLink = createWhatsAppLink(diagnosticMessage);

export function MenuMobile() {
  const [menuOpen, setMenuOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';

    if (!menuOpen) {
      return () => {
        document.body.style.overflow = '';
      };
    }

    const focusableElements = drawerRef.current?.querySelectorAll<
      HTMLAnchorElement | HTMLButtonElement
    >('a[href], button:not([disabled])');
    const firstElement = focusableElements?.[0];
    const lastElement = focusableElements?.[focusableElements.length - 1];

    firstElement?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        closeMenu();
      }

      if (
        event.key === 'Tab' &&
        focusableElements?.length &&
        firstElement &&
        lastElement
      ) {
        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
    buttonRef.current?.focus();
  }

  return (
    <>
      <button
        ref={buttonRef}
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
        ref={drawerRef}
        id="mobile-navigation"
        className={`${mobileMenuStyles.drawer} ${
          menuOpen ? mobileMenuStyles.drawerOpen : ''
        }`}
        aria-hidden={!menuOpen}
        aria-modal="true"
        role="dialog"
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
