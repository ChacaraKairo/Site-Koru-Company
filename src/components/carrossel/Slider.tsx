import React from 'react';

interface SlideProps {
  imageUrl: string;
  alt: string;
  isActive: boolean;
}

const Slide = ({ imageUrl, alt, isActive }: SlideProps) => {
  return (
    <div
      className={`w-full h-full absolute top-0 left-0 transition-opacity duration-1000 ${
        isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
      }`}
    >
      <img
        src={imageUrl}
        alt={alt}
        className="w-full h-full object-cover rounded-xl"
      />
    </div>
  );
};

export default Slide;
