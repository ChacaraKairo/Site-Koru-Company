import { Container } from '@/components/ui/Container';
import styles from './TechnologiesSection.module.css';

const groups = [
  {
    title: 'Interfaces',
    benefit: 'Experiências rápidas, modernas e fáceis de usar.',
    items: ['React', 'Next.js', 'TypeScript'],
  },
  {
    title: 'Dados',
    benefit: 'Informação estruturada para relatórios e decisões confiáveis.',
    items: ['PostgreSQL', 'Prisma', 'SQL', 'Dashboards'],
  },
  {
    title: 'Automações',
    benefit: 'APIs, integrações e rotinas para reduzir trabalho manual.',
    items: ['Node.js', 'Python', 'APIs', 'Webhooks'],
  },
];

export function TechnologiesSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <p>Tecnologias</p>
          <h2>Stack moderna traduzida em resultado prático.</h2>
        </div>
        <div className={styles.grid}>
          {groups.map((group) => (
            <article className={styles.card} key={group.title}>
              <h3>{group.title}</h3>
              <p>{group.benefit}</p>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
