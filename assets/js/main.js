const CONTACT = {
  whatsappNumber: '5519986011419',
};

const WHATSAPP_ICON = `
  <span class="whatsapp-icon" aria-hidden="true">
    <svg viewBox="0 0 24 24" focusable="false">
      <path d="M12.04 2a9.88 9.88 0 0 0-8.5 14.92L2.2 22l5.2-1.3A9.9 9.9 0 1 0 12.04 2Zm5.82 14.1c-.24.68-1.38 1.26-1.94 1.34-.5.08-1.13.12-1.82-.12-.42-.14-.96-.31-1.65-.61-2.9-1.25-4.8-4.16-4.94-4.35-.15-.2-1.18-1.57-1.18-3 0-1.44.75-2.14 1.02-2.43.27-.3.6-.37.8-.37h.58c.18 0 .44-.07.68.52.24.59.83 2.03.9 2.18.08.15.12.33.03.52-.09.2-.14.32-.28.5-.15.18-.3.4-.43.54-.15.15-.3.31-.13.6.17.3.75 1.23 1.6 1.98 1.1.98 2.02 1.28 2.31 1.43.3.15.47.13.64-.08.18-.2.73-.85.93-1.14.2-.3.4-.25.68-.15.28.1 1.76.83 2.06.98.3.15.5.23.58.36.07.13.07.75-.17 1.43Z"/>
    </svg>
  </span>
`;

function createWhatsAppLink(message) {
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function setupMenu() {
  const button = document.querySelector('[data-menu-toggle]');
  const nav = document.querySelector('[data-nav]');

  if (!button || !nav) return;

  button.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    button.setAttribute('aria-expanded', String(isOpen));
  });

  nav.addEventListener('click', (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      nav.classList.remove('is-open');
      button.setAttribute('aria-expanded', 'false');
    }
  });
}

function setupWhatsappLinks() {
  document.querySelectorAll('[data-whatsapp]').forEach((link) => {
    const message = link.getAttribute('data-whatsapp') || 'Olá! Quero falar com a Koru Company.';
    link.setAttribute('href', createWhatsAppLink(message));
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
  });
}

function setupFloatingWhatsapp() {
  if (document.querySelector('[data-floating-whatsapp]')) return;

  const link = document.createElement('a');
  link.className = 'floating-whatsapp btn-whatsapp';
  link.href = '#';
  link.dataset.floatingWhatsapp = 'true';
  link.dataset.whatsapp = 'Olá, gostaria de falar agora com a equipe da Koru Company.';
  link.setAttribute('aria-label', 'Falar com a Koru Company pelo WhatsApp');
  link.innerHTML = `${WHATSAPP_ICON}<span>Fale agora</span>`;
  document.body.append(link);
}

function setupContactForm() {
  const form = document.querySelector('[data-contact-form]');
  const feedback = document.querySelector('[data-form-feedback]');

  if (!(form instanceof HTMLFormElement)) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const company = String(data.get('company') || '').trim();
    const phone = String(data.get('phone') || '').trim();
    const email = String(data.get('email') || '').trim();
    const message = String(data.get('message') || '').trim();

    const whatsappMessage = [
      'Olá! Tenho interesse em conversar com a Koru Company.',
      '',
      `Nome: ${name}`,
      company ? `Empresa: ${company}` : '',
      `Telefone: ${phone}`,
      `E-mail: ${email}`,
      message ? `Mensagem: ${message}` : '',
    ].filter(Boolean).join('\n');

    if (feedback) {
      feedback.textContent = 'Tudo certo. Abrindo o WhatsApp com sua mensagem organizada.';
    }

    window.open(createWhatsAppLink(whatsappMessage), '_blank', 'noopener,noreferrer');
  });
}

function setupMethodToggle() {
  const button = document.querySelector('[data-method-toggle]');
  const grid = document.querySelector('.method-grid');
  if (!(button instanceof HTMLButtonElement) || !(grid instanceof HTMLElement)) return;

  button.addEventListener('click', () => {
    const expanded = grid.classList.toggle('is-expanded');
    button.setAttribute('aria-expanded', String(expanded));
    button.textContent = expanded ? 'Ver versão resumida' : 'Ver metodologia completa';
  });
}

setupMenu();
setupFloatingWhatsapp();
setupWhatsappLinks();
setupContactForm();
setupMethodToggle();
