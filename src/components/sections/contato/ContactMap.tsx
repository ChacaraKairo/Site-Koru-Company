import React from 'react';
import styles from './styles/ContactMap.module.css';

export function ContactMap() {
  return (
    <div className={styles.mapContainer}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.823965859212!2d-47.2118532!3d-23.0880084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8b5853ac5290b%3A0x85a02bc78d0e0e32!2sTerminal%20Urbano%20Central!5e0!3m2!1spt-BR!2sbr!4v1722647041435!5m2!1spt-BR!2sbr"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Terminal Urbano de Indaiatuba"
      />
    </div>
  );
}
