import Image from 'next/image';
import Link from 'next/link';
import headerStyles from './styles/Header.module.css';

export function Logo() {
  return (
    <Link href="#hero" className={headerStyles.logo} aria-label="Koru Company">
      <Image
        src="/imagens/logo.png"
        alt="Koru Company"
        width={140}
        height={56}
        priority
        sizes="140px"
      />
    </Link>
  );
}
