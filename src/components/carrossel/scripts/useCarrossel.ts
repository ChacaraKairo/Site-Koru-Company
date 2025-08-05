import { useState, useEffect } from 'react';

const useCarrossel = (length: number) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % length,
      );
    }, 4000); // troca automática a cada 4s

    return () => clearInterval(interval);
  }, [length]);

  const goToNext = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % length,
    );
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + length) % length,
    );
  };

  return {
    currentIndex,
    goToNext,
    goToPrev,
  };
};

export default useCarrossel;
