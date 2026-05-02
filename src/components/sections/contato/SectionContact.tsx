import { Container } from '@/components/ui/Container';
import { ContactForm } from './ContactForm';
import { ContactPanel } from './ContactPanel';
import styles from './styles/SectionContact.module.css';

export function SectionContact() {
  return (
    <section id="contact" className={styles.contactSection}>
      <Container>
        <div className={styles.heading}>
          <p>Contato</p>
          <h2>Conte o que está travando sua operação.</h2>
          <span>
            Envie seu cenário e a Koru retorna com uma sugestão de
            próximo passo para sistemas, automações ou dados.
          </span>
        </div>
        <div className={styles.content}>
          <ContactForm />
          <ContactPanel />
        </div>
      </Container>
    </section>
  );
}
