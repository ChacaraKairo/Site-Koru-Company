import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import styles from './FAQSection.module.css';

const questions = [
  {
    question: 'A Koru atende empresas de fora de Indaiatuba?',
    answer:
      'Sim. A atuação pode ser remota, com reuniões, diagnóstico e acompanhamento online.',
  },
  {
    question: 'É possível começar com uma automação pequena?',
    answer:
      'Sim. Muitas empresas começam com uma automação pontual ou um MVP antes de evoluir para um sistema maior.',
  },
  {
    question: 'Preciso saber exatamente o que quero antes de chamar?',
    answer:
      'Não. O diagnóstico existe justamente para entender o cenário e transformar a necessidade em um caminho técnico claro.',
  },
  {
    question: 'Vocês fazem manutenção e evolução?',
    answer:
      'Sim. Dependendo do projeto, a Koru pode acompanhar ajustes, melhorias e evolução contínua da solução.',
  },
  {
    question: 'O diagnóstico inicial é pago?',
    answer:
      'O primeiro contato é sem compromisso para entender o cenário e avaliar se faz sentido avançar para uma proposta.',
  },
];

export function FAQSection() {
  return (
    <section className={styles.section}>
      <Container>
        <SectionHeading
          eyebrow="Perguntas frequentes"
          title="Dúvidas comuns antes de começar."
          subtitle="Serviços sob medida precisam de clareza. Estas respostas ajudam a reduzir incertezas antes da primeira conversa."
          align="center"
        />
        <div className={styles.list}>
          {questions.map((item) => (
            <details className={styles.item} key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
