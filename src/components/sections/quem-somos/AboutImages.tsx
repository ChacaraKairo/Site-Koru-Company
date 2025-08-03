import aboutImagesStyles from './styles/AboutImages.module.css';

export function AboutImages() {
  return (
    <section className={aboutImagesStyles.aboutImages}>
      <figure className={aboutImagesStyles.card}>
        <img
          src="/imagens/empresa.png"
          alt="Imagem representando a empresa Koru"
        />
        <figcaption className={aboutImagesStyles.caption}>
          Transformando empresas através da tecnologia
        </figcaption>
      </figure>

      <figure className={aboutImagesStyles.card}>
        <img
          src="/imagens/ceo2.png"
          alt="Kairo Chácara - CEO da Koru Company"
          className={aboutImagesStyles.ceoPhoto}
        />
        <figcaption className={aboutImagesStyles.caption}>
          Kairo Chácara — CEO e Fundador
        </figcaption>
      </figure>
    </section>
  );
}
