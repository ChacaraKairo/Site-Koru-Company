import { useState } from 'react';

// A única alteração necessária é aqui, na interface.
export interface FormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  message?: string; // Adicionado '?' para tornar a propriedade opcional
  endereco: string;
}

export function useContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: '', // Você ainda pode inicializar com um valor padrão
    endereco: '',
  });

  // Atualiza o estado conforme o usuário digita
  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  // Envia os dados para a API e limpa os campos após sucesso
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(
          err.error || 'Erro ao enviar formulário',
        );
      }

      alert('Mensagem enviada com sucesso!');
      setFormData({
        name: '',
        company: '',
        phone: '',
        email: '',
        message: '',
        endereco: '',
      });
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      alert('Erro ao enviar mensagem. Tente novamente.');
    }
  }

  return {
    formData,
    handleChange,
    handleSubmit,
    setFormData,
  };
}
