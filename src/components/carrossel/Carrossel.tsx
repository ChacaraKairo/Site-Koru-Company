'use client';

import styles from './styles/Carrossel.module.css';
import { useCarrossel } from './scripts/useCarrossel';
import { imagens } from './scripts/imagens';

export function Carrossel() {
  const {
    indiceAtual,
    carrosselRef,
    avancarSlide,
    voltarSlide,
  } = useCarrossel(imagens.length);

  return (
    <div className={styles.carrosselContainer}>
      <div className={styles.carrossel} ref={carrosselRef}>
        {imagens.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Imagem ${index + 1}`}
          />
        ))}
      </div>

      <button className={styles.prev} onClick={voltarSlide}>
        ❮
      </button>
      <button
        className={styles.next}
        onClick={avancarSlide}
      >
        ❯
      </button>
    </div>
  );
}
