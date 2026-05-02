import { CTAButton } from '@/components/ui/CTAButton';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { createWhatsAppLink } from '@/config/contact';
import styles from './SolutionsSection.module.css';

const operationSolutions = [
  {
    title: 'Sistemas sob medida',
    text: 'Aplicações web, sistemas internos, portais e plataformas para centralizar processos.',
    cta: 'Planejar um sistema',
    message: 'Olá! Quero planejar um sistema sob medida com a Koru Company.',
    complexity: 'Projeto sob medida',
    deliverables: ['Mapeamento', 'Protótipo', 'Desenvolvimento', 'Publicação', 'Treinamento'],
  },
  {
    title: 'Automação de processos',
    text: 'Fluxos inteligentes e integrações para reduzir tarefas repetitivas e esforço manual.',
    cta: 'Mapear automações',
    message: 'Olá! Quero mapear automações para a minha operação com a Koru Company.',
    complexity: 'Ideal para começar',
    deliverables: ['Mapeamento', 'Fluxo automatizado', 'Integrações', 'Testes', 'Acompanhamento'],
  },
  {
    title: 'Engenharia e análise de dados',
    text: 'Dashboards, indicadores e pipelines para transformar informação dispersa em decisão.',
    cta: 'Criar dashboards',
    message: 'Olá! Quero criar dashboards e indicadores com a Koru Company.',
    complexity: 'Pode evoluir por etapas',
    deliverables: ['Indicadores', 'Modelagem', 'Painéis', 'Rotina de dados'],
  },
  {
    title: 'Consultoria técnica',
    text: 'Apoio para arquitetura, modernização, escolha de tecnologias e melhoria de processos.',
    cta: 'Avaliar tecnologia',
    message: 'Olá! Quero avaliar a tecnologia e os processos digitais da minha empresa com a Koru Company.',
    complexity: 'Diagnóstico recomendado',
    deliverables: ['Diagnóstico', 'Plano técnico', 'Priorização', 'Evolução'],
  },
];

const digitalPresence = [
  {
    title: 'Sites profissionais',
    text: 'Presença digital rápida, responsiva e alinhada à qualidade real do negócio.',
  },
  {
    title: 'Landing pages',
    text: 'Páginas objetivas para ofertas, serviços ou validação de novas iniciativas.',
  },
  {
    title: 'Plataformas digitais',
    text: 'Experiências web com área logada, conteúdo, integrações ou fluxos específicos.',
  },
];

export function SolutionsSection() {
  return (
    <section id="solutions" className={styles.section}>
      <Container>
        <div className={styles.header}>
          <SectionHeading
            eyebrow="Soluções"
            title="Tecnologia sob medida para organizar sua operação."
            subtitle="Começamos pelo diagnóstico, entendemos o fluxo real de trabalho e construímos a solução certa para o momento da empresa."
          />
          <CTAButton
            href="#contact"
            variant="secondary"
            className={styles.headerCta}
          >
            Conversar sobre uma solução
          </CTAButton>
        </div>

        <p className={styles.groupLabel}>Soluções para operação</p>
        <div className={styles.grid}>
          {operationSolutions.map((solution, index) => (
            <article className={styles.card} key={solution.title}>
              <div className={styles.cardTop}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <small>{solution.complexity}</small>
              </div>
              <h3>{solution.title}</h3>
              <p>{solution.text}</p>
              <div className={styles.deliverables}>
                {solution.deliverables.map((deliverable) => (
                  <small key={deliverable}>{deliverable}</small>
                ))}
              </div>
              <CTAButton href={createWhatsAppLink(solution.message)} variant="ghost">
                {solution.cta}
              </CTAButton>
            </article>
          ))}
        </div>

        <div className={styles.presenceBlock}>
          <div>
            <p className={styles.groupLabel}>Presença digital</p>
            <h3>Quando a operação também precisa aparecer melhor.</h3>
          </div>
          <div className={styles.presenceGrid}>
            {digitalPresence.map((item) => (
              <article key={item.title}>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
