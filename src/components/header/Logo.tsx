import Image from 'next/image';
import Link from 'next/link';
import headerStyles from './styles/Header.module.css';

export function Logo() {
  return (
    <Link href="#hero" className={headerStyles.logo} aria-label="Koru Company">
      <Image
        src="/imagens/logo.png"
        alt="Koru Company"
        width={156}
        height={62}
        priority
        sizes="156px"
      />
    </Link>
  );
}
