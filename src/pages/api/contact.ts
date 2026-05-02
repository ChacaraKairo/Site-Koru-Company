import type { NextApiRequest, NextApiResponse } from 'next';

interface ContactFormData {
  name: string;
  company?: string;
  phone: string;
  email: string;
  message?: string;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string) {
  const digits = phone.replace(/\D/g, '');
  return digits.length >= 10 && digits.length <= 14;
}

async function sendTelegramNotification(data: ContactFormData) {
  const { name, company, phone, email, message } = data;
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.error(
      'Variáveis de ambiente do Telegram não estão configuradas.',
    );
    return;
  }

  const text = `
*Nova mensagem do site Koru*

*Nome:* ${name}
*Empresa:* ${company || 'Não informado'}
*Telefone:* ${phone}
*E-mail:* ${email}

*Mensagem:*
${message || 'Nenhuma mensagem informada.'}
  `;

  const formattedText = text
    .split('\n')
    .map((line) => line.trim())
    .join('\n');

  const response = await fetch(
    `https://api.telegram.org/bot${botToken}/sendMessage`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: formattedText,
        parse_mode: 'Markdown',
      }),
    },
  );

  if (!response.ok) {
    const errorData = await response.json();
    console.error('Erro ao enviar notificação para o Telegram:', errorData);
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, phone, email } = req.body as ContactFormData;

  if (!name?.trim() || !phone?.trim() || !email?.trim()) {
    return res.status(400).json({
      error: 'Nome, telefone e e-mail são obrigatórios.',
    });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({
      error: 'Informe um e-mail válido.',
    });
  }

  if (!isValidPhone(phone)) {
    return res.status(400).json({
      error: 'Informe um telefone válido.',
    });
  }

  try {
    await sendTelegramNotification(req.body as ContactFormData);

    return res
      .status(200)
      .json({ message: 'Mensagem enviada com sucesso.' });
  } catch (error) {
    console.error('Erro inesperado no handler da API:', error);
    return res.status(500).json({
      error: 'Erro interno ao processar a solicitação.',
    });
  }
}
