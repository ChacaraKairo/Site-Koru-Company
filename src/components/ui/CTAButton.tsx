import Link from 'next/link';
import styles from './CTAButton.module.css';

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  target?: string;
  rel?: string;
};

export function CTAButton({
  href,
  children,
  variant = 'primary',
  className = '',
  target,
  rel,
}: CTAButtonProps) {
  const classes = `${styles.button} ${styles[variant]} ${className}`;
  const isExternal = href.startsWith('http');

  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        target={target ?? '_blank'}
        rel={rel ?? 'noopener noreferrer'}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
