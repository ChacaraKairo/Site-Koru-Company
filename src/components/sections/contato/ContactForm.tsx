import styles from './styles/ContactForm.module.css';
import { useContactForm } from './scripts/useContactForm';

export function ContactForm() {
  const {
    formData,
    handleChange,
    handleSubmit,
    status,
    feedback,
  } = useContactForm();

  const isSubmitting = status === 'submitting';

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <label htmlFor="name">Nome *</label>
      <input
        type="text"
        id="name"
        name="name"
        required
        autoComplete="name"
        value={formData.name}
        onChange={handleChange}
      />

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
      />

      <label htmlFor="email">E-mail *</label>
      <input
        type="email"
        id="email"
        name="email"
        required
        autoComplete="email"
        value={formData.email}
        onChange={handleChange}
      />

      <label htmlFor="message">Mensagem</label>
      <textarea
        id="message"
        name="message"
        rows={5}
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
