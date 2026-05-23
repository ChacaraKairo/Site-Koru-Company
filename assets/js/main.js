const CONTACT = {
  whatsappNumber: '5519986011419',
};

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
    const message = link.getAttribute('data-whatsapp') || 'Ola! Quero falar com a Koru Company.';
    link.setAttribute('href', createWhatsAppLink(message));
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
  });
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
      'Ola! Tenho interesse em conversar com a Koru Company.',
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
    button.textContent = expanded ? 'Ver versao resumida' : 'Ver metodologia completa';
  });
}

setupMenu();
setupWhatsappLinks();
setupContactForm();
setupMethodToggle();
