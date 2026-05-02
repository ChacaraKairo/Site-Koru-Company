import { Container } from '@/components/ui/Container';
import { ContactForm } from './ContactForm';
import { ContactMap } from './ContactMap';
import styles from './styles/SectionContact.module.css';

export function SectionContact() {
  return (
    <section id="contact" className={styles.contactSection}>
      <Container>
        <div className={styles.heading}>
          <p>Contato</p>
          <h2>Vamos conversar sobre a sua operação?</h2>
          <span>
            Conte brevemente o que você precisa. A Koru pode ajudar a
            transformar processos em soluções digitais mais eficientes.
          </span>
        </div>
        <div className={styles.content}>
          <ContactForm />
          <ContactMap />
        </div>
      </Container>
    </section>
  );
}
