export default class MobileNavbar {
  // Elemento do menu móvel (ícone ou botão para abrir/fechar o menu)
  mobileMenu: HTMLElement | null;

  // Elemento da lista de navegação (menu que será mostrado/ocultado)
  navList: HTMLElement | null;

  // Lista de todos os links dentro do menu de navegação
  navLinks: NodeListOf<HTMLElement>;

  // Nome da classe CSS usada para indicar o estado ativo (menu aberto)
  activeClass: string;

  /**
   * Construtor da classe MobileNavbar.
   * Recebe seletores CSS para os elementos principais e os seleciona no DOM.
   * @param mobileMenuSelector - seletor do botão/menu móvel
   * @param navListSelector - seletor da lista de navegação
   * @param navLinksSelector - seletor dos links dentro do menu
   */
  constructor(
    mobileMenuSelector: string,
    navListSelector: string,
    navLinksSelector: string,
  ) {
    // Seleciona o elemento do menu móvel a partir do seletor recebido
    this.mobileMenu = document.querySelector<HTMLElement>(
      mobileMenuSelector,
    );

    // Seleciona a lista de navegação
    this.navList =
      document.querySelector<HTMLElement>(navListSelector);

    // Seleciona todos os links dentro do menu de navegação
    this.navLinks = document.querySelectorAll<HTMLElement>(
      navLinksSelector,
    );

    // Define o nome da classe CSS que indica o menu ativo
    this.activeClass = 'active';

    // Garante que o contexto do 'this' dentro de handleClick seja sempre a instância da classe
    this.handleClick = this.handleClick.bind(this);
  }

  /**
   * Aplica animação nos links da navegação.
   * Se o link já tiver uma animação, remove para permitir toggle.
   * Cada link tem um delay diferente para animação em cascata.
   */
  animateLinks() {
    this.navLinks.forEach((link, index) => {
      if (link.style.animation) {
        // Se a animação já existe, remove para resetar
        link.style.animation = '';
      } else {
        // Aplica a animação com delay baseado no índice do link
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });
  }

  /**
   * Função executada ao clicar no botão/menu móvel.
   * Alterna a classe ativa para mostrar/ocultar o menu e anima os links.
   */
  handleClick() {
    if (this.navList) {
      this.navList.classList.toggle(this.activeClass);
    }
    if (this.mobileMenu) {
      this.mobileMenu.classList.toggle(this.activeClass);
    }
    // Aciona animação dos links ao abrir/fechar menu
    this.animateLinks();
  }

  /**
   * Adiciona o listener de clique no botão/menu móvel,
   * vinculando-o à função handleClick.
   */
  addClickEvent() {
    if (this.mobileMenu) {
      this.mobileMenu.addEventListener(
        'click',
        this.handleClick,
      );
    }
  }

  /**
   * Inicializa a instância da classe.
   * Só adiciona o evento de clique se o menu móvel existir no DOM.
   * @returns A própria instância da classe para possibilitar encadeamento
   */
  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}
