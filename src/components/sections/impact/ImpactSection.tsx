import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import styles from './ImpactSection.module.css';

const items = [
  {
    title: 'Rotinas repetitivas não deveriam consumir seu time.',
    text: 'Criamos fluxos digitais para reduzir retrabalho, padronizar tarefas e liberar tempo operacional.',
    example:
      'Exemplos: cadastros automáticos, emissão de relatórios e integração entre planilhas e sistemas.',
  },
  {
    title: 'Informação espalhada vira decisão lenta.',
    text: 'Organizamos dados, processos e equipes em sistemas construídos para a realidade da sua empresa.',
    example:
      'Exemplos: CRM interno, painel de acompanhamento e controle de solicitações.',
  },
  {
    title: 'Dados só ajudam quando viram clareza.',
    text: 'Transformamos informações dispersas em indicadores, dashboards e insights acionáveis.',
    example:
      'Exemplos: dashboard financeiro, indicadores operacionais e relatórios executivos.',
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
              <small>{item.example}</small>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
