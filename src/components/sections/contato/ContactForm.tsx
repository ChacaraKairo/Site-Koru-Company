import { useEffect, useRef } from 'react';
import styles from './styles/ContactForm.module.css';
import { useContactForm } from './scripts/useContactForm';

export function ContactForm() {
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const {
    formData,
    handleChange,
    handleSubmit,
    status,
    feedback,
    fieldErrors,
  } = useContactForm();

  const isSubmitting = status === 'submitting';

  useEffect(() => {
    if (fieldErrors.name) {
      nameRef.current?.focus();
    } else if (fieldErrors.phone) {
      phoneRef.current?.focus();
    } else if (fieldErrors.email) {
      emailRef.current?.focus();
    }
  }, [fieldErrors]);

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit} noValidate>
      <p className={styles.notice}>
        Após o envio, a Koru recebe sua mensagem e também abre o
        WhatsApp com o texto pronto para agilizar o atendimento.
      </p>
      <label htmlFor="name">Nome *</label>
      <input
        ref={nameRef}
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
        ref={phoneRef}
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
        ref={emailRef}
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

      <p className={styles.privacyNotice}>
        Ao enviar, você concorda que a Koru utilize seus dados apenas
        para responder ao contato solicitado.
      </p>

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
