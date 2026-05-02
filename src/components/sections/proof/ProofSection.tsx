import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import styles from './ProofSection.module.css';

const projects = [
  {
    name: 'Sistema de gestão interno',
    problem: 'Processos espalhados entre planilhas, mensagens e controles manuais.',
    solution:
      'Centralização de cadastros, solicitações, status e acompanhamento operacional em uma aplicação web.',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma'],
    outcome: 'Mais visibilidade sobre tarefas, responsáveis e gargalos.',
  },
  {
    name: 'Dashboard financeiro',
    problem: 'Dados financeiros difíceis de acompanhar e comparar ao longo do mês.',
    solution:
      'Painéis com indicadores, filtros e leitura executiva para apoiar decisões de caixa e crescimento.',
    stack: ['React', 'APIs', 'Dashboards', 'SQL'],
    outcome: 'Decisões com números mais claros e acompanhamento recorrente.',
  },
  {
    name: 'Automação de atendimento',
    problem: 'Respostas repetitivas e triagem manual consumindo tempo da equipe.',
    solution:
      'Fluxos automatizados para organizar entradas, padronizar respostas e direcionar solicitações.',
    stack: ['Node.js', 'Integrações', 'Webhooks', 'APIs'],
    outcome: 'Menos retrabalho e atendimento inicial mais previsível.',
  },
];

export function ProofSection() {
  return (
    <section className={styles.section}>
      <Container>
        <SectionHeading
          eyebrow="Projetos e labs"
          title="Projetos que mostram como pensamos."
          subtitle="Enquanto cases públicos são construídos, apresentamos exemplos demonstrativos de problemas, soluções e entregáveis que fazem parte do nosso método."
          align="center"
        />
        <div className={styles.grid}>
          {projects.map((project) => (
            <article className={styles.card} key={project.name}>
              <div>
                <p className={styles.label}>Projeto demonstrativo</p>
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
