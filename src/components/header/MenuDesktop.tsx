'use client';

import desktopMenuStyles from './styles/MenuDesktop.module.css';
import { MenuList } from './MenuList';

interface MenuDesktopProps {
  onLinkClick?: () => void;
}

export function MenuDesktop({
  onLinkClick,
}: MenuDesktopProps) {
  return (
    <div className={desktopMenuStyles.desktopMenu}>
      <MenuList
        onLinkClick={onLinkClick}
        className={desktopMenuStyles.navList}
      />
    </div>
  );
}
