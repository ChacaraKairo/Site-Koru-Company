import { Container } from '@/components/ui/Container';
import styles from './AboutSection.module.css';

const pillars = [
  {
    title: 'Clareza antes do código',
    text: 'Antes de desenvolver, entendemos o problema e desenhamos o caminho certo.',
  },
  {
    title: 'Tecnologia sob medida',
    text: 'Cada solução é pensada para o processo, o time e o momento da empresa.',
  },
  {
    title: 'Parceria de longo prazo',
    text: 'Construímos, acompanhamos e evoluímos junto com o cliente.',
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
            Atuamos como parceiro técnico para empresas que enxergam
            tecnologia como investimento estratégico, não apenas como
            custo.
          </p>
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
