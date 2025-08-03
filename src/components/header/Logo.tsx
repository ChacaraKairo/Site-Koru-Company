'use client';

import Image from 'next/image';
import Link from 'next/link';
import headerStyles from './styles/Header.module.css';

export function Logo() {
  return (
    <Link href="#hero" className={headerStyles.logo}>
      <Image
        src="/imagens/logo.png"
        alt="Logo da Koru Company"
        width={250}
        height={100}
        priority
        style={{
          objectFit: 'cover',
          objectPosition: 'top center',
          display: 'block',
          width: '100%',
          height: 'auto',
        }}
      />
    </Link>
  );
}
