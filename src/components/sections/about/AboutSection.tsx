import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import styles from './AboutSection.module.css';

const pillars = [
  {
    title: 'Clareza antes do código',
    text: 'Antes de desenvolver, entendemos o problema e desenhamos o caminho certo.',
  },
  {
    title: 'Soluções por etapa',
    text: 'Projetos podem começar pequenos e evoluir conforme prioridade, uso e resultado.',
  },
  {
    title: 'Comunicação objetiva',
    text: 'Você acompanha decisões, entregáveis e próximos passos sem linguagem desnecessária.',
  },
  {
    title: 'Evolução contínua',
    text: 'Construímos, acompanhamos e melhoramos a solução depois da entrega.',
  },
];

export function AboutSection() {
  return (
    <section id="about" className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Sobre a Koru</p>
          <h2>Uma software house criada para resolver problemas reais.</h2>
          <p>
            A Koru Company une estratégia, engenharia e design para
            criar soluções digitais sob medida. Nosso foco é entender a
            operação de cada cliente e desenvolver tecnologia que
            simplifica processos, melhora decisões e gera resultado
            concreto.
          </p>
          <p>
            Na prática, isso significa entender processos, desenhar
            fluxos, desenvolver sistemas e acompanhar a evolução da
            solução após a entrega.
          </p>
        </div>
        <div className={styles.profile}>
          <div className={styles.photo}>
            <Image
              src="/imagens/ceo2.png"
              alt="Kairo Chácara, fundador da Koru Company"
              width={520}
              height={620}
              sizes="(max-width: 900px) 100vw, 420px"
            />
          </div>
          <div className={styles.founder}>
            <strong>Kairo Chácara</strong>
            <span>Fundador da Koru Company</span>
            <p>
              A Koru nasce para ajudar pequenas e médias empresas a
              transformar processos manuais em soluções digitais claras,
              úteis e sustentáveis.
            </p>
          </div>
        </div>
        <div className={styles.pillars}>
          {pillars.map((pillar) => (
            <article className={styles.pillar} key={pillar.title}>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
