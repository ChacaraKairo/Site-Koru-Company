import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { faqItems } from '@/content/faq';
import styles from './FAQSection.module.css';

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
          {faqItems.map((item) => (
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
