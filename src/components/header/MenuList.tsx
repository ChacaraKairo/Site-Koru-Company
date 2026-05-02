type MenuItem = {
  href: string;
  label: string;
};

const menuItems: MenuItem[] = [
  { href: '#hero', label: 'Início' },
  { href: '#solutions', label: 'Soluções' },
  { href: '#process', label: 'Processo' },
  { href: '#about', label: 'Sobre' },
  { href: '#contact', label: 'Contato' },
];

interface MenuListProps {
  onLinkClick?: () => void;
  className?: string;
}

export function MenuList({ onLinkClick, className }: MenuListProps) {
  return (
    <ul className={className}>
      {menuItems.map(({ href, label }) => (
        <li key={href}>
          <a href={href} onClick={onLinkClick}>
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}
