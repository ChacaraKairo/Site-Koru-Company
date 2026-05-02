import { CTAButton } from '@/components/ui/CTAButton';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import styles from './SolutionsSection.module.css';

const solutions = [
  {
    title: 'Sistemas sob medida',
    text: 'Aplicações web, sistemas internos, portais e plataformas personalizadas para centralizar processos e melhorar a operação.',
    cta: 'Planejar um sistema',
    deliverables: ['Requisitos', 'Protótipo', 'Desenvolvimento', 'Deploy'],
  },
  {
    title: 'Automação de processos',
    text: 'Automação de tarefas repetitivas, integração entre ferramentas e fluxos inteligentes para reduzir esforço manual.',
    cta: 'Mapear automações',
    deliverables: ['Mapeamento', 'Fluxo automatizado', 'Integrações', 'Monitoramento'],
  },
  {
    title: 'Engenharia e análise de dados',
    text: 'Dashboards, indicadores e pipelines de dados para transformar informações dispersas em decisões confiáveis.',
    cta: 'Criar dashboards',
    deliverables: ['Indicadores', 'Modelagem', 'Painéis', 'Rotina de dados'],
  },
  {
    title: 'Consultoria técnica',
    text: 'Apoio estratégico para arquitetura, modernização de sistemas, escolha de tecnologias e melhoria de processos digitais.',
    cta: 'Avaliar arquitetura',
    deliverables: ['Diagnóstico', 'Plano técnico', 'Priorização', 'Evolução'],
  },
  {
    title: 'Sites e plataformas digitais',
    text: 'Experiências web modernas, rápidas e responsivas para empresas que precisam transmitir confiança e converter melhor.',
    cta: 'Criar presença digital',
    deliverables: ['UX/UI', 'Desenvolvimento', 'Performance', 'SEO básico'],
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
        <div className={styles.grid}>
          {solutions.map((solution, index) => (
            <article className={styles.card} key={solution.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
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
      </Container>
    </section>
  );
}
