import Image from 'next/image';

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
      <Image
        src={imageUrl}
        alt={alt}
        fill
        sizes="100vw"
        className="rounded-xl object-cover"
      />
    </div>
  );
};

export default Slide;
