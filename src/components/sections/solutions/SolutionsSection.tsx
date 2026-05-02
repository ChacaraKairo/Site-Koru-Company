import { CTAButton } from '@/components/ui/CTAButton';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import styles from './SolutionsSection.module.css';

const operationSolutions = [
  {
    title: 'Sistemas sob medida',
    text: 'Aplicações web, sistemas internos, portais e plataformas para centralizar processos.',
    cta: 'Planejar um sistema',
    complexity: 'Projeto sob medida',
    deliverables: ['Mapeamento', 'Protótipo', 'Desenvolvimento', 'Publicação', 'Treinamento'],
  },
  {
    title: 'Automação de processos',
    text: 'Fluxos inteligentes e integrações para reduzir tarefas repetitivas e esforço manual.',
    cta: 'Mapear automações',
    complexity: 'Ideal para começar',
    deliverables: ['Mapeamento', 'Fluxo automatizado', 'Integrações', 'Testes', 'Acompanhamento'],
  },
  {
    title: 'Engenharia e análise de dados',
    text: 'Dashboards, indicadores e pipelines para transformar informação dispersa em decisão.',
    cta: 'Criar dashboards',
    complexity: 'Pode evoluir por etapas',
    deliverables: ['Indicadores', 'Modelagem', 'Painéis', 'Rotina de dados'],
  },
  {
    title: 'Consultoria técnica',
    text: 'Apoio para arquitetura, modernização, escolha de tecnologias e melhoria de processos.',
    cta: 'Avaliar tecnologia',
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
            title="Soluções construídas para o seu fluxo real de trabalho."
            subtitle="Não sabe por onde começar? Começamos pelo diagnóstico: entendemos o processo, priorizamos oportunidades e desenhamos o caminho certo."
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
              <CTAButton href="#contact" variant="ghost">
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
