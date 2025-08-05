import React from 'react';
import styles from './styles/SectionContact.module.css';
import { ContactForm } from './ContactForm';
import { ContactMap } from './ContactMap';
import { useRevealOnScroll } from '../animation';

export function SectionContact() {
  const ref = useRevealOnScroll<HTMLElement>();

  return (
    <section
      ref={ref}
      id="contact"
      className={styles.contactSection}
    >
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          Fale Conosco
        </h2>
        <div className={styles.content}>
          <ContactForm />
          <ContactMap />
        </div>
      </div>
    </section>
  );
}
