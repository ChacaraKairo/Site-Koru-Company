const PRODUTOS = [
  {
    nome: 'PNKC',
    logo: '',
    descricao: 'Plataforma para criação de planos de negócios completos, com formulário guiado, análise financeira, SWOT, cronograma, anexos, Canvas visual e exportação em PDF.',
    link: 'https://pnkc.vercel.app',
    status: 'Disponível',
    idealPara: 'Empreendedores que precisam organizar, validar e apresentar ideias de negócio.',
    principalGanho: 'Transformar projetos em documentos profissionais prontos para apresentação.',
  },
  {
    nome: 'Nosso Zelo',
    logo: 'produtos/nossozelo/Logo-com-nome.png',
    descricao: 'Marketplace de serviços para encontrar cuidadores, enfermeiros e acompanhantes para idosos.',
    link: 'https://frontnossozelo.vercel.app',
    status: 'Disponível',
    idealPara: 'Famílias que buscam apoio confiável no cuidado de pessoas idosas.',
    principalGanho: 'Facilitar a conexão entre quem precisa de cuidado e profissionais especializados.',
  },
  {
    nome: 'IEZDU',
    logo: 'produtos/iezdu/ChatGPT Image 22 de mai. de 2026, 14_42_54.png',
    descricao: 'App mobile offline-first de organização pessoal, tarefas e foco, com listas, prazos, lembretes, prioridades, temas e companions digitais chamados Liues.',
    link: '',
    status: 'Em breve',
    idealPara: 'Pessoas que querem organizar tarefas e manter o foco mesmo sem internet.',
    principalGanho: 'Mais clareza para priorizar o que fazer primeiro no dia a dia.',
  },
  {
    nome: 'KORRE',
    logo: 'produtos/korre/Sem título - 22 de maio de 2026 às 13.37.39.png',
    descricao: 'Aplicativo para motoristas de aplicativo controlarem ganhos, despesas e lucro real.',
    link: 'https://play.google.com/store/apps/details?id=korre_app.gestao.korucompany',
    status: 'Disponível',
    idealPara: 'Motoristas de aplicativo que querem entender melhor a rentabilidade das corridas.',
    principalGanho: 'Registrar custos e acompanhar quanto realmente sobra no fim do dia.',
  },
];

function createProductLogo(product) {
  if (!product.logo) {
    const fallback = document.createElement('div');
    fallback.className = 'product-logo product-logo-fallback';
    fallback.textContent = product.nome;
    return fallback;
  }

  const wrapper = document.createElement('div');
  wrapper.className = 'product-logo product-logo-image';

  const image = document.createElement('img');
  image.src = product.logo;
  image.alt = `Logo ${product.nome}`;
  image.loading = 'lazy';

  image.addEventListener('error', () => {
    wrapper.classList.add('product-logo-fallback');
    wrapper.textContent = product.nome;
  });

  wrapper.append(image);
  return wrapper;
}

function renderProducts() {
  const list = document.querySelector('[data-products-list]');
  if (!list) return;

  list.innerHTML = '';

  PRODUTOS.forEach((product) => {
    const card = document.createElement('article');
    card.className = 'product-card';

    const status = document.createElement('p');
    status.className = 'status';
    status.textContent = product.status;

    const title = document.createElement('h2');
    title.textContent = product.nome;

    const description = document.createElement('p');
    description.textContent = product.descricao;

    const details = document.createElement('dl');
    details.innerHTML = `
      <div>
        <dt>Ideal para</dt>
        <dd>${product.idealPara}</dd>
      </div>
      <div>
        <dt>Principal ganho</dt>
        <dd>${product.principalGanho}</dd>
      </div>
    `;

    const link = document.createElement('a');
    link.className = product.link ? 'btn btn-secondary product-access' : 'btn btn-secondary product-access is-disabled';
    link.href = product.link || 'contato.html';
    link.textContent = product.link ? 'Acessar produto' : 'Link em breve';

    if (product.link) {
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    }

    card.append(createProductLogo(product), status, title, description, details, link);
    list.append(card);
  });
}

renderProducts();
