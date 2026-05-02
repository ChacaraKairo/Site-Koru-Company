import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import styles from './ProofSection.module.css';

type Project = {
  name: string;
  visual: 'system' | 'dashboard' | 'automation';
  caseType: 'demo' | 'real';
  problem: string;
  solution: string;
  stack: string[];
  outcome: string;
};

const projects: Project[] = [
  {
    name: 'Sistema de gestão interno',
    visual: 'system',
    caseType: 'demo',
    problem: 'Processos espalhados entre planilhas, mensagens e controles manuais.',
    solution:
      'Centralização de cadastros, solicitações, status e acompanhamento operacional em uma aplicação web.',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma'],
    outcome: 'Mais visibilidade sobre tarefas, responsáveis e gargalos.',
  },
  {
    name: 'Dashboard financeiro',
    visual: 'dashboard',
    caseType: 'demo',
    problem: 'Dados financeiros difíceis de acompanhar e comparar ao longo do mês.',
    solution:
      'Painéis com indicadores, filtros e leitura executiva para apoiar decisões de caixa e crescimento.',
    stack: ['React', 'APIs', 'Dashboards', 'SQL'],
    outcome: 'Decisões com números mais claros e acompanhamento recorrente.',
  },
  {
    name: 'Automação de atendimento',
    visual: 'automation',
    caseType: 'demo',
    problem: 'Respostas repetitivas e triagem manual consumindo tempo da equipe.',
    solution:
      'Fluxos automatizados para organizar entradas, padronizar respostas e direcionar solicitações.',
    stack: ['Node.js', 'Integrações', 'Webhooks', 'APIs'],
    outcome: 'Menos retrabalho e atendimento inicial mais previsível.',
  },
];

function DemoMockup({ visual }: { visual: Project['visual'] }) {
  if (visual === 'system') {
    return (
      <div className={styles.mockup} aria-hidden="true">
        <div className={styles.mockupBar}>
          <span />
          <span />
          <span />
        </div>
        <div className={styles.table}>
          <div className={styles.tableHeader}>
            <span>Solicitação</span>
            <span>Status</span>
            <span>Resp.</span>
            <span>Prior.</span>
          </div>
          {['Cadastro cliente', 'Aprovação pedido', 'Suporte interno'].map(
            (row, index) => (
              <div className={styles.tableRow} key={row}>
                <span>{row}</span>
                <i>{index === 0 ? 'novo' : index === 1 ? 'andamento' : 'fila'}</i>
                <small>{index === 0 ? 'Ana' : index === 1 ? 'Leo' : 'Kai'}</small>
                <b>{index === 1 ? 'alta' : 'média'}</b>
              </div>
            ),
          )}
        </div>
      </div>
    );
  }

  if (visual === 'dashboard') {
    return (
      <div className={styles.mockup} aria-hidden="true">
        <div className={styles.mockupBar}>
          <span />
          <span />
          <span />
        </div>
        <div className={styles.dashboardGrid}>
          <div>
            <small>Receita</small>
            <strong>R$ --</strong>
          </div>
          <div>
            <small>Despesas</small>
            <strong>R$ --</strong>
          </div>
          <div>
            <small>Saldo</small>
            <strong>mês</strong>
          </div>
          <div className={styles.miniChart}>
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.mockup} aria-hidden="true">
      <div className={styles.mockupBar}>
        <span />
        <span />
        <span />
      </div>
      <div className={styles.flow}>
        {['Entrada', 'Triagem', 'Resposta', 'Encaminhamento'].map((step) => (
          <div key={step}>
            <span>{step}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProofSection() {
  return (
    <section id="projects" className={styles.section}>
      <Container>
        <SectionHeading
          eyebrow="Exemplos de solução"
          title="Projetos que mostram como pensamos."
          subtitle="Estes exemplos demonstram o tipo de problema que analisamos, a forma como estruturamos soluções e os entregáveis que podem fazer parte de um projeto real."
          align="center"
        />
        <div className={styles.grid}>
          {projects.map((project) => (
            <article className={styles.card} key={project.name}>
              <DemoMockup visual={project.visual} />
              <div>
                <p className={styles.label}>
                  {project.caseType === 'real'
                    ? 'Case real'
                    : 'Projeto demonstrativo'}
                </p>
                <h3>{project.name}</h3>
              </div>
              <dl>
                <div>
                  <dt>Problema</dt>
                  <dd>{project.problem}</dd>
                </div>
                <div>
                  <dt>Solução aplicada</dt>
                  <dd>{project.solution}</dd>
                </div>
                <div>
                  <dt>Resultado esperado</dt>
                  <dd>{project.outcome}</dd>
                </div>
              </dl>
              <ul>
                {project.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
