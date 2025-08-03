// Arquivo: pages/api/contact.ts

import { PrismaClient } from '@/generated/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res
      .status(405)
      .json({ error: 'Method not allowed' });
  }

  const { name, company, phone, email, message, endereco } =
    req.body;

  // Validação básica
  if (!name || !email || !message) {
    return res
      .status(400)
      .json({
        error: 'Name, email, and message are required',
      });
  }

  try {
    const contatoCriado = await prisma.contacts.create({
      data: {
        name,
        company,
        phone,
        email,
        message,
        endereco,
        created_at: new Date(),
      },
    });

    return res.status(201).json(contatoCriado);
  } catch (error) {
    console.error('Erro ao salvar contato:', error);
    return res
      .status(500)
      .json({ error: 'Erro ao salvar os dados' });
  }
}
