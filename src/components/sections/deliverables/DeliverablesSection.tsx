import { Container } from '@/components/ui/Container';
import styles from './DeliverablesSection.module.css';

const deliverables = [
  'Diagnóstico do cenário',
  'Escopo e prioridades',
  'Protótipo ou fluxo da solução',
  'Desenvolvimento',
  'Testes',
  'Publicação',
  'Orientação de uso',
  'Plano de evolução',
];

export function DeliverablesSection() {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.copy}>
          <p>O que você recebe</p>
          <h2>Clareza antes, durante e depois do desenvolvimento.</h2>
        </div>
        <ul className={styles.list}>
          {deliverables.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
