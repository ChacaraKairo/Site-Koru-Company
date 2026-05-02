'use client';

import { useEffect, useState } from 'react';

type MenuItem = {
  href: string;
  label: string;
};

const menuItems: MenuItem[] = [
  { href: '#hero', label: 'Início' },
  { href: '#solutions', label: 'Soluções' },
  { href: '#projects', label: 'Projetos' },
  { href: '#contact', label: 'Contato' },
];

interface MenuListProps {
  onLinkClick?: () => void;
  className?: string;
}

export function MenuList({ onLinkClick, className }: MenuListProps) {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sections = menuItems
      .map((item) => document.getElementById(item.href.replace('#', '')))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: '-35% 0px -55% 0px',
        threshold: [0.1, 0.35, 0.6],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <ul className={className}>
      {menuItems.map(({ href, label }) => {
        const isActive = activeSection === href.replace('#', '');

        return (
          <li key={href}>
            <a
              href={href}
              onClick={onLinkClick}
              data-active={isActive ? 'true' : undefined}
              aria-current={isActive ? 'page' : undefined}
            >
              {label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
