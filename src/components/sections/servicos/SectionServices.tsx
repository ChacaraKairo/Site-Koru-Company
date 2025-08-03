import React from 'react';
import styles from './styles/Service.module.css';
import { ServicesList } from './ServiceList';

export function SectionServices() {
  return (
    <section
      id="services"
      className={styles.servicesSection}
    >
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          Nossos Serviços
        </h2>
        <p className={styles.sectionSubtitle}>
          Soluções sob medida para transformar o seu negócio
        </p>
        <ServicesList />
      </div>
    </section>
  );
}
