// Arquivo: pages/api/contact.ts

import { PrismaClient } from '@/generated/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

// Interface para garantir a tipagem dos dados do formulário
// Baseado em: src/components/sections/contato/scripts/useContactForm.ts
interface ContactFormData {
  name: string;
  company?: string;
  phone: string;
  email: string;
  message?: string;
  endereco?: string;
}

/**
 * Envia uma notificação para o bot do Telegram.
 * Esta função é chamada internamente e não quebra a API principal se falhar.
 */
async function sendTelegramNotification(
  data: ContactFormData,
) {
  const { name, company, phone, email, message, endereco } =
    data;

  // Lê as variáveis de ambiente que você configurou no .env.local
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.error(
      'Variáveis de ambiente do Telegram (TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID) não estão configuradas.',
    );
    // Não retorna um erro para o usuário, apenas loga no servidor.
    return;
  }

  // Monta a mensagem formatada para o Telegram (usando Markdown)
  const text = `
*Nova Mensagem do Site Koru!*

*Nome:* ${name}
*Empresa:* ${company || 'Não informado'}
*Telefone:* ${phone}
*Email:* ${email}
*Endereço (localização):* ${endereco || 'Não informado'}

*Observações:*
${message || 'Nenhuma observação.'}
  `;

  // Limpa a formatação (remove espaços extras da template string)
  const formattedText = text
    .split('\n')
    .map((line) => line.trim())
    .join('\n');

  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

  try {
    // Usa o fetch nativo para enviar a notificação
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: formattedText,
        parse_mode: 'Markdown',
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error(
        'Erro ao enviar notificação para o Telegram:',
        errorData,
      );
    } else {
      console.log(
        'Notificação do Telegram enviada com sucesso!',
      );
    }
  } catch (error) {
    console.error(
      'Erro de rede ao contatar a API do Telegram:',
      error,
    );
  }
}

/**
 * Handler principal da API
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res
      .status(405)
      .json({ error: 'Method not allowed' });
  }

  // Tipamos o body da requisição
  const { name, company, phone, email, message, endereco } =
    req.body as ContactFormData;

  // Validação básica (message agora é opcional)
  if (!name || !email) {
    return res.status(400).json({
      error: 'Nome e email são obrigatórios',
    });
  }

  try {
    // 1. Salva o contato no banco de dados
    const contatoCriado = await prisma.contacts.create({
      data: {
        name,
        company: company || null, // Garante null se for string vazia
        phone,
        email,
        message: message || null, // Garante null se for string vazia
        endereco: endereco || null, // Garante null se for string vazia
        created_at: new Date(),
      },
    });

    // 2. Envia a notificação para o Telegram (NOVA PARTE)
    // Usamos 'await' para garantir que ele tente enviar antes de responder ao usuário,
    // mas a função tem seu próprio try/catch, então ela não vai quebrar a API.
    await sendTelegramNotification(
      req.body as ContactFormData,
    );

    // 3. Retorna sucesso para o frontend
    return res.status(201).json(contatoCriado);
  } catch (error) {
    console.error('Erro ao salvar contato:', error);
    return res
      .status(500)
      .json({ error: 'Erro ao salvar os dados' });
  }
}
