import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import styles from './ProblemsSection.module.css';

const problems = [
  'Sua empresa depende de planilhas manuais para controlar processos importantes.',
  'Informações ficam espalhadas em várias ferramentas e ninguém tem a visão completa.',
  'Tarefas repetitivas consomem tempo da equipe e aumentam risco de erro.',
  'Você precisa de um sistema próprio, mas ainda não sabe por onde começar.',
  'Seus dados existem, mas não viram indicadores claros para decisão.',
  'Seu site ou plataforma não transmite a qualidade real do seu negócio.',
];

export function ProblemsSection() {
  return (
    <section id="problems" className={styles.section}>
      <Container>
        <div className={styles.layout}>
          <SectionHeading
            eyebrow="Quando ajudamos"
            title="Para empresas que precisam sair da operação manual."
            subtitle="A Koru é indicada quando o processo já cresceu, mas as ferramentas ainda não acompanham a rotina do negócio."
          />
          <div className={styles.list}>
            {problems.map((problem) => (
              <article className={styles.item} key={problem}>
                <span />
                <p>{problem}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
