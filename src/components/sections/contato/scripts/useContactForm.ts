import { useState } from 'react';

export interface FormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  message?: string;
}

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

export function useContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [feedback, setFeedback] = useState('');

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    if (status !== 'idle') {
      setStatus('idle');
      setFeedback('');
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('submitting');
    setFeedback('');

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
        throw new Error(err.error || 'Erro ao enviar formulario');
      }

      const whatsappMessage = encodeURIComponent(
        `Olá! Meu nome é ${formData.name}, sou da empresa ${
          formData.company || 'não informada'
        }. Gostaria de conversar com a Koru sobre: ${
          formData.message || 'uma solução digital'
        }. Meu telefone é ${formData.phone} e meu e-mail é ${formData.email}.`,
      );

      setFormData({
        name: '',
        company: '',
        phone: '',
        email: '',
        message: '',
      });
      setStatus('success');
      setFeedback(
        'Mensagem enviada. Se preferir, a conversa também pode continuar pelo WhatsApp.',
      );
      window.open(
        `https://wa.me/5519986011419?text=${whatsappMessage}`,
        '_blank',
        'noopener,noreferrer',
      );
    } catch (error) {
      console.error('Erro ao enviar formulario:', error);
      setStatus('error');
      setFeedback(
        'Não foi possível enviar agora. Tente novamente em instantes.',
      );
    }
  }

  return {
    formData,
    handleChange,
    handleSubmit,
    status,
    feedback,
  };
}
