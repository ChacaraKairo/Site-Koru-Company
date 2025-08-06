import React from 'react';
import styles from './styles/ContactMap.module.css';

export function ContactMap() {
  return (
    <div className={styles.mapContainer}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d259264.3901634863!2d-47.2772077!3d-23.1117627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8b4a92532f027%3A0x261346b50e81af6c!2sIndaiatuba%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1722964866501!5m2!1spt-BR!2sbr"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Indaiatuba - SP"
      />
    </div>
  );
}
