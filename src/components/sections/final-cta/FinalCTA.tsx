import { CTAButton } from '@/components/ui/CTAButton';
import { Container } from '@/components/ui/Container';
import styles from './FinalCTA.module.css';

const whatsappLink =
  'https://wa.me/5519986011419?text=Ol%C3%A1%21%20Tenho%20interesse%20em%20agendar%20um%20diagn%C3%B3stico%20com%20a%20Koru%20Company.';

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
          <CTAButton href={whatsappLink}>Agendar diagnóstico</CTAButton>
          <CTAButton href="#solutions" variant="secondary">
            Ver soluções
          </CTAButton>
        </div>
      </Container>
    </section>
  );
}
