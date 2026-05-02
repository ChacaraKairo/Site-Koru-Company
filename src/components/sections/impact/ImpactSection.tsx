import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import styles from './ImpactSection.module.css';

const items = [
  {
    title: 'Automatize rotinas',
    text: 'Reduza tarefas repetitivas e elimine gargalos operacionais com fluxos digitais inteligentes.',
  },
  {
    title: 'Centralize informações',
    text: 'Organize dados, processos e equipes em sistemas construídos para a realidade da sua empresa.',
  },
  {
    title: 'Decida com clareza',
    text: 'Transforme dados em indicadores, dashboards e insights acionáveis para crescer com previsibilidade.',
  },
];

export function ImpactSection() {
  return (
    <section className={styles.section}>
      <Container>
        <SectionHeading
          eyebrow="Impacto"
          title="Menos processos manuais. Mais controle. Mais escala."
          subtitle="Desenhamos soluções digitais para simplificar operações, conectar informações e liberar tempo para o que realmente move o negócio."
          align="center"
        />
        <div className={styles.grid}>
          {items.map((item, index) => (
            <article className={styles.card} key={item.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
