import { useState } from 'react';
import { CONTACT } from '@/config/contact';

export interface FormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  message?: string;
}

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';
type FieldErrors = Partial<Record<keyof FormData, string>>;

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string) {
  const digits = phone.replace(/\D/g, '');
  return digits.length >= 10 && digits.length <= 14;
}

function validateForm(data: FormData) {
  const errors: FieldErrors = {};

  if (!data.name.trim()) {
    errors.name = 'Informe seu nome.';
  }

  if (!data.phone.trim()) {
    errors.phone = 'Informe seu telefone.';
  } else if (!isValidPhone(data.phone)) {
    errors.phone = 'Digite um telefone válido com DDD.';
  }

  if (!data.email.trim()) {
    errors.email = 'Informe seu e-mail.';
  } else if (!isValidEmail(data.email)) {
    errors.email = 'Digite um e-mail válido.';
  }

  return errors;
}

export function useContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: '',
  });
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [feedback, setFeedback] = useState('');

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setFieldErrors((prev) => ({
      ...prev,
      [name]: undefined,
    }));

    if (status !== 'idle') {
      setStatus('idle');
      setFeedback('');
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const errors = validateForm(formData);
    setFieldErrors(errors);

    if (Object.keys(errors).length > 0) {
      setStatus('error');
      setFeedback('Revise os campos destacados antes de enviar.');
      return;
    }

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
        throw new Error(err.error || 'Erro ao enviar formulário');
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
      setFieldErrors({});
      setStatus('success');
      setFeedback(
        'Mensagem enviada. Também abrimos o WhatsApp com a conversa pronta para agilizar seu atendimento.',
      );
      window.open(
        `https://wa.me/${CONTACT.whatsappNumber}?text=${whatsappMessage}`,
        '_blank',
        'noopener,noreferrer',
      );
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      setStatus('error');
      setFeedback(
        'Não foi possível enviar agora. Verifique seus dados e tente novamente.',
      );
    }
  }

  return {
    formData,
    handleChange,
    handleSubmit,
    status,
    feedback,
    fieldErrors,
  };
}
