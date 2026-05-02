import Image from 'next/image';
import aboutImagesStyles from './styles/AboutImages.module.css';

export function AboutImages() {
  return (
    <section className={aboutImagesStyles.aboutImages}>
      <figure className={aboutImagesStyles.card}>
        <Image
          src="/imagens/empresa.png"
          alt="Imagem representando a empresa Koru"
          width={760}
          height={500}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <figcaption className={aboutImagesStyles.caption}>
          Transformando empresas através da tecnologia
        </figcaption>
      </figure>

      <figure className={aboutImagesStyles.card}>
        <Image
          src="/imagens/ceo2.png"
          alt="Kairo Chácara - CEO da Koru Company"
          className={aboutImagesStyles.ceoPhoto}
          width={520}
          height={620}
          sizes="(max-width: 768px) 100vw, 40vw"
        />
        <figcaption className={aboutImagesStyles.caption}>
          Kairo Chácara - CEO e Fundador
        </figcaption>
      </figure>
    </section>
  );
}
