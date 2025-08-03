import React, { useEffect } from 'react';
import styles from './styles/ContactForm.module.css';
import { useContactForm } from './scripts/useContactForm';

export function ContactForm() {
  const {
    formData,
    handleChange,
    handleSubmit,
    setFormData,
  } = useContactForm();

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`,
            );
            const data = await response.json();

            const endereco = data.display_name || ''; // Endereço completo

            setFormData((prev) => ({
              ...prev,
              endereco,
            }));
          } catch (error) {
            console.error(
              'Erro ao buscar o endereço:',
              error,
            );
          }
        },
        (error) => {
          console.error(
            'Erro ao obter localização:',
            error.message,
          );
        },
      );
    }
  }, []);

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
        value={formData.message}
        onChange={handleChange}
      />

      {/* Campo oculto para o endereço completo */}
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
