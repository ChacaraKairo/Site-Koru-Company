import { CTAButton } from '@/components/ui/CTAButton';
import { Container } from '@/components/ui/Container';
import {
  createWhatsAppLink,
  diagnosticMessage,
} from '@/config/contact';
import styles from './FinalCTA.module.css';

const whatsappLink = createWhatsAppLink(diagnosticMessage);

export function FinalCTA() {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <h2>Pronto para transformar sua operação?</h2>
        <p>
          Agende um diagnóstico e descubra como a Koru pode criar uma
          solução digital sob medida para o seu negócio.
        </p>
        <div className={styles.actions}>
          <CTAButton href={whatsappLink} fullWidthOnMobile>
            Agendar diagnóstico
          </CTAButton>
          <CTAButton href="#solutions" variant="secondary" fullWidthOnMobile>
            Ver soluções
          </CTAButton>
        </div>
      </Container>
    </section>
  );
}
