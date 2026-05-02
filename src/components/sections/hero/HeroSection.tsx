import { CTAButton } from '@/components/ui/CTAButton';
import { Container } from '@/components/ui/Container';
import styles from './HeroSection.module.css';

const whatsappLink =
  'https://wa.me/5519986011419?text=Ol%C3%A1%21%20Tenho%20interesse%20em%20agendar%20um%20diagn%C3%B3stico%20com%20a%20Koru%20Company.';

const markers = [
  'Sistemas sob medida',
  'Automação de processos',
  'Dados para decisão',
];

export function HeroSection() {
  return (
    <section id="hero" className={styles.hero}>
      <Container className={styles.container}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Software house em Indaiatuba - SP</p>
          <h1>
            Soluções digitais para empresas que querem operar com
            mais inteligência.
          </h1>
          <p className={styles.subtitle}>
            A Koru desenvolve sistemas, automações e plataformas sob
            medida para transformar processos manuais em eficiência,
            controle e crescimento.
          </p>
          <div className={styles.actions}>
            <CTAButton href={whatsappLink}>Agendar diagnóstico</CTAButton>
            <CTAButton href="#solutions" variant="secondary">
              Conhecer soluções
            </CTAButton>
          </div>
          <ul className={styles.markers} aria-label="Especialidades da Koru">
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
            <div className={styles.metric}>
              <span>Fluxos ativos</span>
              <strong>24</strong>
            </div>
            <div className={styles.metric}>
              <span>Tempo poupado</span>
              <strong>+38%</strong>
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
      </Container>
    </section>
  );
}
