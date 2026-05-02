import { CTAButton } from '@/components/ui/CTAButton';
import { Container } from '@/components/ui/Container';
import {
  createWhatsAppLink,
  diagnosticMessage,
} from '@/config/contact';
import styles from './HeroSection.module.css';

const whatsappLink = createWhatsAppLink(diagnosticMessage);

const markers = [
  'Menos tarefas manuais',
  'Mais controle operacional',
  'Decisões com dados reais',
];

const mockupItems = [
  'Operações',
  'Automações',
  'Dashboards',
  'Sistemas internos',
];

export function HeroSection() {
  return (
    <section id="hero" className={styles.hero}>
      <Container className={styles.container}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Software house em Indaiatuba - SP</p>
          <h1>
            Transformamos processos manuais em sistemas, automações e
            dados para decisão.
          </h1>
          <p className={styles.subtitle}>
            Para pequenas e médias empresas que precisam organizar
            processos, automatizar tarefas e crescer com mais controle.
          </p>
          <div className={styles.actions}>
            <CTAButton href={whatsappLink} fullWidthOnMobile>
              Agendar diagnóstico
            </CTAButton>
            <CTAButton href="#solutions" variant="secondary" fullWidthOnMobile>
              Conhecer soluções
            </CTAButton>
          </div>
          <p className={styles.microcopy}>
            Uma conversa rápida para entender sua operação e mapear
            oportunidades de automação, sistemas ou dados.
          </p>
          <ul className={styles.markers} aria-label="Benefícios da Koru">
            {markers.map((marker) => (
              <li key={marker}>{marker}</li>
            ))}
          </ul>
        </div>
        <div className={styles.interfaceMockup} aria-hidden="true">
          <div className={styles.mockupHeader}>
            <span />
            <span />
            <span />
          </div>
          <div className={styles.mockupBody}>
            <div className={styles.mockupList}>
              {mockupItems.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className={styles.chart}>
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>
        </div>
        <a href="#problems" className={styles.scrollCue}>
          Role para explorar
        </a>
      </Container>
    </section>
  );
}
