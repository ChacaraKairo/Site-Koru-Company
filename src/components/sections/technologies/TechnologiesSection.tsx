import { Container } from '@/components/ui/Container';
import styles from './TechnologiesSection.module.css';

const technologies = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Python',
  'PostgreSQL',
  'Prisma',
  'APIs',
  'Automações',
  'Dashboards',
];

export function TechnologiesSection() {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.copy}>
          <p>Tecnologias</p>
          <h2>Stack moderna para soluções confiáveis.</h2>
        </div>
        <ul className={styles.list}>
          {technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
