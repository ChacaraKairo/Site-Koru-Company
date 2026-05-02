import { CTAButton } from '@/components/ui/CTAButton';
import { Container } from '@/components/ui/Container';
import {
  createWhatsAppLink,
  diagnosticMessage,
} from '@/config/contact';
import styles from './ProblemsSection.module.css';

const whatsappLink = createWhatsAppLink(diagnosticMessage);

const problems = [
  {
    title: 'Planilhas demais',
    text: 'Sua empresa depende de controles manuais para processos importantes.',
  },
  {
    title: 'Informações espalhadas',
    text: 'Dados ficam em ferramentas diferentes e ninguém tem a visão completa.',
  },
  {
    title: 'Retrabalho constante',
    text: 'Tarefas repetitivas consomem tempo e aumentam risco de erro.',
  },
  {
    title: 'Sistema improvisado',
    text: 'Você precisa de uma solução própria, mas ainda não sabe por onde começar.',
  },
  {
    title: 'Dados sem decisão',
    text: 'As informações existem, mas não viram indicadores claros para gestão.',
  },
  {
    title: 'Presença digital fraca',
    text: 'Seu site ou plataforma não transmite a qualidade real do negócio.',
  },
];

export function ProblemsSection() {
  return (
    <section id="problems" className={styles.section}>
      <Container>
        <div className={styles.layout}>
          <div>
            <p className={styles.eyebrow}>Quando ajudamos</p>
            <h2>Para empresas que precisam sair da operação manual.</h2>
            <p className={styles.subtitle}>
              A Koru é ideal para empresas de serviços, operações
              internas, negócios em crescimento e times que ainda
              dependem de planilhas, WhatsApp, controles manuais ou
              sistemas improvisados.
            </p>
            <div className={styles.fitBox}>
              <strong>Para quem não é</strong>
              <p>
                Não somos a melhor opção para quem busca apenas o menor
                preço, soluções genéricas ou desenvolvimento sem
                planejamento. Trabalhamos melhor com empresas que veem
                tecnologia como investimento estratégico.
              </p>
            </div>
          </div>
          <div className={styles.list}>
            {problems.map((problem) => (
              <article className={styles.item} key={problem.title}>
                <span />
                <div>
                  <h3>{problem.title}</h3>
                  <p>{problem.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className={styles.ctaBand}>
          <p>Reconheceu algum desses cenários?</p>
          <CTAButton href={whatsappLink} variant="secondary">
            Conversar com a Koru
          </CTAButton>
        </div>
      </Container>
    </section>
  );
}
