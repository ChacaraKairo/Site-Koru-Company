import React from 'react';
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
      <img src={image} alt={alt} />
      <div className={styles.serviceContent}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
