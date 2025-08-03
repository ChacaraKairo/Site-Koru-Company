import { useEffect, useRef, useState } from 'react';

export function useCarrossel(totalSlides: number) {
  const [indiceAtual, setIndiceAtual] = useState(0);
  const carrosselRef = useRef<HTMLDivElement>(null);

  const mostrarSlide = (indice: number) => {
    let novoIndice = indice;
    if (indice >= totalSlides) novoIndice = 0;
    if (indice < 0) novoIndice = totalSlides - 1;
    setIndiceAtual(novoIndice);
  };

  const avancarSlide = () => mostrarSlide(indiceAtual + 1);
  const voltarSlide = () => mostrarSlide(indiceAtual - 1);

  useEffect(() => {
    const intervalo = setInterval(avancarSlide, 10000);
    return () => clearInterval(intervalo);
  }, [indiceAtual]);

  useEffect(() => {
    if (carrosselRef.current) {
      carrosselRef.current.style.transform = `translateX(-${
        indiceAtual * 100
      }%)`;
    }
  }, [indiceAtual]);

  return {
    indiceAtual,
    carrosselRef,
    avancarSlide,
    voltarSlide,
  };
}
