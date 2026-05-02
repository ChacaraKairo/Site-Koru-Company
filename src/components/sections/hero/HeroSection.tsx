import { CTAButton } from '@/components/ui/CTAButton';
import { Container } from '@/components/ui/Container';
import {
  createWhatsAppLink,
  diagnosticMessage,
} from '@/config/contact';
import styles from './HeroSection.module.css';

const whatsappLink = createWhatsAppLink(diagnosticMessage);

const markers = [
  'Menos retrabalho',
  'Mais controle operacional',
  'Decisões com dados reais',
];

const processRows = [
  { label: 'Solicitações abertas', value: 'triagem' },
  { label: 'Processos em andamento', value: 'status' },
  { label: 'Automações ativas', value: 'rotinas' },
  { label: 'Indicadores operacionais', value: 'painéis' },
];

export function HeroSection() {
  return (
    <section id="hero" className={styles.hero}>
      <Container className={styles.container}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Software house em Indaiatuba - SP</p>
          <h1>
            Sistemas, automações e dashboards para empresas que ainda
            dependem de processos manuais.
          </h1>
          <p className={styles.subtitle}>
            A Koru organiza sua operação com tecnologia sob medida para
            reduzir retrabalho, centralizar informações e transformar
            dados em decisão.
          </p>
          <div className={styles.actions}>
            <CTAButton href={whatsappLink} fullWidthOnMobile>
              Agendar diagnóstico
            </CTAButton>
            <CTAButton href="#problems" variant="secondary" fullWidthOnMobile>
              Ver como podemos ajudar
            </CTAButton>
          </div>
          <p className={styles.microcopy}>
            Diagnóstico inicial sem compromisso para entender seu
            cenário e indicar o melhor próximo passo.
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
            <div className={styles.panelTop}>
              <div>
                <span>Painel operacional</span>
                <strong>Visão da rotina</strong>
              </div>
              <small>demo</small>
            </div>
            <div className={styles.mockupList}>
              {processRows.map((item) => (
                <span key={item.label}>
                  {item.label}
                  <small>{item.value}</small>
                </span>
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
