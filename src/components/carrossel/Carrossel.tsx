import React from 'react';
import Slide from './Slider';
import carrosselData from './scripts/imagens';
import useCarrossel from './scripts/useCarrossel';

const Carrossel = () => {
  const { currentIndex, goToNext, goToPrev } = useCarrossel(
    carrosselData.length,
  );

  const handleClick = (
    e: React.MouseEvent<HTMLDivElement>,
  ) => {
    const x = e.clientX;
    const middle = window.innerWidth / 2;

    if (x < middle) {
      goToPrev();
    } else {
      goToNext();
    }
  };

  return (
    <div
      className="relative w-full max-w-full aspect-[28/9] mx-auto mt-10 mb-0 pb-0 overflow-hidden rounded-xl shadow-lg cursor-pointer"
      onClick={handleClick}
    >
      {carrosselData.map((slide, index) => (
        <Slide
          key={slide.id}
          imageUrl={slide.imageUrl}
          alt={slide.alt}
          isActive={index === currentIndex}
        />
      ))}

      {/* Bolinhas */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
        {carrosselData.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-white scale-125'
                : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carrossel;
