import { CTAButton } from '@/components/ui/CTAButton';
import { Container } from '@/components/ui/Container';
import {
  createWhatsAppLink,
  diagnosticMessage,
} from '@/config/contact';
import styles from './StartSection.module.css';

const whatsappLink = createWhatsAppLink(diagnosticMessage);

const steps = [
  'Você explica seu cenário.',
  'A Koru identifica oportunidades.',
  'Você recebe uma sugestão de caminho.',
  'Se fizer sentido, o projeto vira proposta.',
];

export function StartSection() {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.copy}>
          <p>Como começamos</p>
          <h2>Comece com um diagnóstico.</h2>
        </div>
        <ol className={styles.steps}>
          {steps.map((step, index) => (
            <li key={step}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              {step}
            </li>
          ))}
        </ol>
        <CTAButton href={whatsappLink} variant="secondary" fullWidthOnMobile>
          Agendar diagnóstico
        </CTAButton>
      </Container>
    </section>
  );
}
