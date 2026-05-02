import styles from './styles/ContactForm.module.css';
import { useContactForm } from './scripts/useContactForm';

export function ContactForm() {
  const {
    formData,
    handleChange,
    handleSubmit,
    status,
    feedback,
    fieldErrors,
  } = useContactForm();

  const isSubmitting = status === 'submitting';

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit} noValidate>
      <p className={styles.notice}>
        Após o envio, a Koru recebe sua mensagem e também abre o
        WhatsApp com o texto pronto para agilizar o atendimento.
      </p>
      <label htmlFor="name">Nome *</label>
      <input
        type="text"
        id="name"
        name="name"
        required
        autoComplete="name"
        value={formData.name}
        onChange={handleChange}
        aria-invalid={Boolean(fieldErrors.name)}
        aria-describedby={fieldErrors.name ? 'name-error' : undefined}
      />
      {fieldErrors.name && (
        <span id="name-error" className={styles.fieldError}>
          {fieldErrors.name}
        </span>
      )}

      <label htmlFor="company">Empresa</label>
      <input
        type="text"
        id="company"
        name="company"
        autoComplete="organization"
        value={formData.company}
        onChange={handleChange}
      />

      <label htmlFor="phone">Telefone *</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        required
        autoComplete="tel"
        value={formData.phone}
        onChange={handleChange}
        aria-invalid={Boolean(fieldErrors.phone)}
        aria-describedby={fieldErrors.phone ? 'phone-error' : undefined}
      />
      {fieldErrors.phone && (
        <span id="phone-error" className={styles.fieldError}>
          {fieldErrors.phone}
        </span>
      )}

      <label htmlFor="email">E-mail *</label>
      <input
        type="email"
        id="email"
        name="email"
        required
        autoComplete="email"
        value={formData.email}
        onChange={handleChange}
        aria-invalid={Boolean(fieldErrors.email)}
        aria-describedby={fieldErrors.email ? 'email-error' : undefined}
      />
      {fieldErrors.email && (
        <span id="email-error" className={styles.fieldError}>
          {fieldErrors.email}
        </span>
      )}

      <label htmlFor="message">Mensagem</label>
      <textarea
        id="message"
        name="message"
        rows={5}
        placeholder="Conte brevemente o processo, sistema, automação ou desafio que você quer resolver."
        value={formData.message || ''}
        onChange={handleChange}
      />

      {feedback && (
        <p
          className={`${styles.feedback} ${
            status === 'error' ? styles.error : styles.success
          }`}
          role="status"
          aria-live="polite"
        >
          {feedback}
        </p>
      )}

      <button
        type="submit"
        className={styles.submitBtn}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
      </button>
    </form>
  );
}
