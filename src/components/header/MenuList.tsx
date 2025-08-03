'use client';

import React from 'react';

type MenuItem = {
  href: string;
  label: string;
};

const menuItems: MenuItem[] = [
  { href: '#hero', label: 'Início' },
  { href: '#about', label: 'Quem Somos' },
  { href: '#services', label: 'Serviços' },
  { href: '#contact', label: 'Contato' },
];

interface MenuListProps {
  onLinkClick?: () => void;
  className?: string;
}

export function MenuList({
  onLinkClick,
  className,
}: MenuListProps) {
  const headerOffset = 150; // ajuste para a altura do seu header fixo em px

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string,
  ) => {
    e.preventDefault();

    const id = href.replace('#', '');
    const element = document.getElementById(id);

    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top;
      const offsetPosition =
        window.pageYOffset + elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }

    if (onLinkClick) {
      onLinkClick();
    }
  };

  return (
    <ul className={className}>
      {menuItems.map(({ href, label }) => (
        <li key={href}>
          <a
            href={href}
            onClick={(e) => handleClick(e, href)}
            className="hover:text-blue-600 transition"
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}
