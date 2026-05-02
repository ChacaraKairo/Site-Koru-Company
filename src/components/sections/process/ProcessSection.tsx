import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import styles from './ProcessSection.module.css';

const startSteps = [
  'Você explica o cenário.',
  'A Koru identifica oportunidades.',
  'Você recebe uma sugestão de caminho.',
];

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

const workModels = [
  {
    title: 'Diagnóstico técnico',
    text: 'Para entender cenário, mapear oportunidades e definir o próximo passo.',
  },
  {
    title: 'Projeto fechado',
    text: 'Para sistemas, sites, dashboards ou automações com escopo claro.',
  },
  {
    title: 'Evolução contínua',
    text: 'Para manutenção, melhorias e acompanhamento recorrente.',
  },
];

export function ProcessSection() {
  return (
    <section id="process" className={styles.section}>
      <Container>
        <SectionHeading
          eyebrow="Processo"
          title="Do diagnóstico à solução."
          subtitle="Um caminho claro para começar pequeno, reduzir risco e transformar necessidades de negócio em soluções digitais confiáveis."
          align="center"
        />

        <div className={styles.startGrid}>
          <div className={styles.startCopy}>
            <p>Como começamos</p>
            <h3>Antes de desenvolver, entendemos o cenário.</h3>
          </div>
          <ol className={styles.startSteps}>
            {startSteps.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                {step}
              </li>
            ))}
          </ol>
        </div>

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

        <div className={styles.models}>
          <div className={styles.modelsHeader}>
            <p>Formas de trabalho</p>
            <h3>Escolha o formato certo para o momento da empresa.</h3>
          </div>
          <div className={styles.modelsGrid}>
            {workModels.map((model) => (
              <article key={model.title}>
                <h4>{model.title}</h4>
                <p>{model.text}</p>
              </article>
            ))}
          </div>
        </div>

        <p className={styles.note}>
          Nem todo projeto precisa começar grande. Podemos iniciar com
          um diagnóstico, um MVP ou uma automação pontual.
        </p>
      </Container>
    </section>
  );
}
