import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import styles from './ProcessSection.module.css';

const steps = [
  {
    title: 'Diagnóstico',
    text: 'Entendemos o problema, os processos atuais e os objetivos do negócio.',
    deliverable: 'Mapa inicial do problema.',
  },
  {
    title: 'Estratégia',
    text: 'Definimos escopo, prioridades, arquitetura e o melhor caminho técnico.',
    deliverable: 'Proposta técnica e plano de ação.',
  },
  {
    title: 'Design da solução',
    text: 'Desenhamos fluxos, telas e experiências focadas em clareza e eficiência.',
    deliverable: 'Fluxos e protótipo.',
  },
  {
    title: 'Desenvolvimento',
    text: 'Construímos com tecnologia moderna, código limpo e visão de escala.',
    deliverable: 'Versão funcional.',
  },
  {
    title: 'Entrega e evolução',
    text: 'Publicamos, acompanhamos, ajustamos e evoluímos conforme o uso real.',
    deliverable: 'Publicação, ajustes e suporte inicial.',
  },
];

export function ProcessSection() {
  return (
    <section id="process" className={styles.section}>
      <Container>
        <SectionHeading
          eyebrow="Processo"
          title="Do diagnóstico à evolução contínua."
          subtitle="Um processo claro para transformar necessidades de negócio em soluções digitais confiáveis."
          align="center"
        />
        <ol className={styles.timeline}>
          {steps.map((step, index) => (
            <li className={styles.step} key={step.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
              <strong>Entregável: {step.deliverable}</strong>
            </li>
          ))}
        </ol>
        <p className={styles.note}>
          Projetos simples podem começar com um diagnóstico rápido.
          Projetos maiores são divididos em etapas para reduzir risco e
          dar visibilidade.
        </p>
      </Container>
    </section>
  );
}
