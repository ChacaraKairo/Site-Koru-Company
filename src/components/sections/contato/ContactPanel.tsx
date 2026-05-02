import { CTAButton } from '@/components/ui/CTAButton';
import {
  CONTACT,
  createWhatsAppLink,
  diagnosticMessage,
} from '@/config/contact';
import styles from './styles/ContactPanel.module.css';

const whatsappLink = createWhatsAppLink(diagnosticMessage);

export function ContactPanel() {
  return (
    <aside className={styles.contactPanel} aria-label="Canais de contato">
      <p className={styles.eyebrow}>Atendimento</p>
      <h3>Diagnóstico sem compromisso para entender o cenário.</h3>
      <p className={styles.description}>
        Após o envio, recebemos sua mensagem e abrimos o WhatsApp com o
        texto pronto para agilizar o atendimento.
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
          <dd>Remoto para empresas de todo o Brasil.</dd>
        </div>
      </dl>
      <CTAButton href={whatsappLink} variant="secondary" fullWidthOnMobile>
        Continuar pelo WhatsApp
      </CTAButton>
    </aside>
  );
}
