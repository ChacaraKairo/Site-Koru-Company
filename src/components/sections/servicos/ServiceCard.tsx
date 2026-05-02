import Image from 'next/image';
import styles from './styles/ServiceCard.module.css';

interface ServiceCardProps {
  image: string;
  alt: string;
  title: string;
  description: string;
}

export function ServiceCard({
  image,
  alt,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className={styles.serviceCard}>
      <Image
        src={image}
        alt={alt}
        width={520}
        height={340}
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <div className={styles.serviceContent}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
