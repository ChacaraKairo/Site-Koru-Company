import { useEffect, useRef } from 'react';

export function useRevealOnScroll<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const top = el.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (top < windowHeight - 100) {
        el.classList.add('visible');
      }
    };

    window.addEventListener('scroll', onScroll);
    onScroll();

    return () =>
      window.removeEventListener('scroll', onScroll);
  }, []);

  return ref;
}
