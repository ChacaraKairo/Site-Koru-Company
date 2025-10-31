// Arquivo: src/components/sections/contato/scripts/useContactForm.ts
import { useState } from 'react';

export interface FormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  message?: string;
  endereco: string;
}

/**
 * Nova função para buscar o endereço.
 * Ela retorna uma Promise com o endereço em string.
 */
const getAddress = (): Promise<string> => {
  return new Promise((resolve) => {
    if (!('geolocation' in navigator)) {
      // Retorna uma string vazia ou de erro se não for suportado
      return resolve('Geolocalização não suportada');
    }

    // Pede a localização
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          // Busca o endereço na API
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`,
          );
          const data = await response.json();
          // Resolve a Promise com o endereço
          resolve(
            data.display_name || 'Endereço não encontrado',
          );
        } catch (error) {
          console.error(
            'Erro ao buscar o endereço:',
            error,
          );
          resolve('Erro ao buscar endereço');
        }
      },
      (error) => {
        console.error(
          'Erro ao obter localização:',
          error.message,
        );
        // Resolve com uma string de erro se for negado
        resolve('Permissão de localização negada');
      },
    );
  });
};

export function useContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: '',
    endereco: '', // O endereço começa vazio
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
  // Transformamos a handleSubmit em 'async'
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // 1. PRIMEIRO, busca a localização atual
    const endereco = await getAddress();

    // 2. JUNTA os dados do formulário com a localização obtida
    const finalFormData = {
      ...formData,
      endereco: endereco,
    };

    // 3. DEPOIS, envia tudo para sua API
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // Envia os dados finais (com o endereço)
        body: JSON.stringify(finalFormData),
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(
          err.error || 'Erro ao enviar formulário',
        );
      }

      alert('Mensagem enviada com sucesso!');

      // 4. Limpa o formulário para o próximo envio
      setFormData({
        name: '',
        company: '',
        phone: '',
        email: '',
        message: '',
        endereco: '', // O endereço é limpo aqui
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
    setFormData, // setFormData ainda é necessário para o ContactForm.tsx
  };
}
