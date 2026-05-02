export const CONTACT = {
  whatsappNumber: '5519986011419',
  whatsappLabel: '+55 (19) 98601-1419',
  email: 'korutecnologia@gmail.com',
  city: 'Indaiatuba - SP',
  siteUrl: 'https://site-koru-company.vercel.app',
};

export function createWhatsAppLink(message: string) {
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
    message,
  )}`;
}

export const diagnosticMessage =
  'Olá! Tenho interesse em agendar um diagnóstico com a Koru Company.';
