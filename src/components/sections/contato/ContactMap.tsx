import { CTAButton } from '@/components/ui/CTAButton';
import {
  CONTACT,
  createWhatsAppLink,
  diagnosticMessage,
} from '@/config/contact';
import styles from './styles/ContactMap.module.css';

const whatsappLink = createWhatsAppLink(diagnosticMessage);

export function ContactMap() {
  return (
    <aside className={styles.contactPanel} aria-label="Canais de contato">
      <p className={styles.eyebrow}>Próximo passo</p>
      <h3>Diagnóstico inicial sem compromisso.</h3>
      <p className={styles.description}>
        Após o envio, entraremos em contato para entender seu cenário e
        indicar o melhor caminho para sistemas, automações ou dados.
      </p>
      <dl className={styles.info}>
        <div>
          <dt>WhatsApp</dt>
          <dd>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              {CONTACT.whatsappLabel}
            </a>
          </dd>
        </div>
        <div>
          <dt>E-mail</dt>
          <dd>
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          </dd>
        </div>
        <div>
          <dt>Localização</dt>
          <dd>{CONTACT.city}</dd>
        </div>
        <div>
          <dt>Atendimento</dt>
          <dd>Nacional, com diagnóstico remoto.</dd>
        </div>
      </dl>
      <CTAButton href={whatsappLink} variant="secondary" fullWidthOnMobile>
        Continuar pelo WhatsApp
      </CTAButton>
    </aside>
  );
}
