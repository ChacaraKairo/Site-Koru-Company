import React from 'react';
import { ServiceCard } from './ServiceCard';
import styles from './styles/Service.module.css';

const services = [
  {
    image: '/imagens/servicos/devsistm.png',
    alt: 'Imagem representando desenvolvimento de sistemas',
    title: 'Desenvolvimento de Sistemas',
    description:
      'Criamos plataformas e aplicações personalizadas com foco em escalabilidade, usabilidade e performance.',
  },
  {
    image: '/imagens/servicos/consult.png',
    alt: 'Imagem representando consultoria técnica',
    title: 'Consultoria Técnica',
    description:
      'Apoiamos empresas com estratégias tecnológicas, segurança e modernização de processos.',
  },
  {
    image: '/imagens/servicos/analdados.png',
    alt: 'Imagem representando análise de dados',
    title: 'Análise e Engenharia de Dados',
    description:
      'Transformamos dados em insights com análise avançada, modelagem e visualizações personalizadas.',
  },
  {
    image: '/imagens/servicos/autm.png',
    alt: 'Imagem representando automação com RPA',
    title: 'Automatização com RPA',
    description:
      'Eliminamos tarefas manuais repetitivas com Robotic Process Automation e aumentamos a produtividade.',
  },
  {
    image: '/imagens/servicos/mentor.png',
    alt: 'Imagem representando mentoria técnica',
    title: 'Mentoria e Capacitação Técnica',
    description:
      'Treinamentos sob demanda em tecnologias modernas, metodologias ágeis e boas práticas de desenvolvimento.',
  },
];

export function ServicesList() {
  return (
    <div className={styles.servicesGrid}>
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          image={service.image}
          alt={service.title}
          title={service.title}
          description={service.description}
        />
      ))}
    </div>
  );
}
