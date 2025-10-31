// Arquivo: src/components/sections/contato/ContactForm.tsx
import React, { useEffect } from 'react'; // useEffect não é mais usado aqui, mas deixei o import
import styles from './styles/ContactForm.module.css';
import { useContactForm } from './scripts/useContactForm';

export function ContactForm() {
  const {
    formData,
    handleChange,
    handleSubmit,
    // setFormData, // Não precisamos mais do setFormData aqui
  } = useContactForm();

  //
  // O useEffect() QUE ESTAVA AQUI FOI REMOVIDO!
  // A lógica agora está dentro do 'handleSubmit' no hook.
  //

  return (
    <form
      className={styles.contactForm}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name">Nome *</label>
      <input
        type="text"
        id="name"
        name="name"
        required
        value={formData.name}
        onChange={handleChange}
      />

      <label htmlFor="company">Empresa</label>
      <input
        type="text"
        id="company"
        name="company"
        value={formData.company}
        onChange={handleChange}
      />

      <label htmlFor="phone">Telefone *</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        required
        value={formData.phone}
        onChange={handleChange}
      />

      <label htmlFor="email">Email *</label>
      <input
        type="email"
        id="email"
        name="email"
        required
        value={formData.email}
        onChange={handleChange}
      />

      <label htmlFor="message">Observações</label>
      <textarea
        id="message"
        name="message"
        rows={5}
        value={formData.message || ''} // Garante que é uma string
        onChange={handleChange}
      />

      {/* O campo oculto não é mais necessário, pois o 'handleSubmit' cuida disso,
          mas pode deixar se quiser. Ele apenas não terá valor. */}
      <input
        type="hidden"
        name="endereco"
        value={formData.endereco || ''}
      />

      <button type="submit" className={styles.submitBtn}>
        Enviar
      </button>
    </form>
  );
}
