import React from 'react';
import styles from './CareerSection.module.css';

const CareerSection: React.FC = () => {
  const careerData = [
    {
      id: 1,
      title: 'Estagiária de Desenvolvimento',
      company: 'Watson AR - IBM Financing',
      period: '2024 – Cargo atual',
      location: 'IBM Brasil',
      description: [
        'Desenvolvimento e manutenção utilizando Angular, TypeScript e ython.',
        'Liderança na prototipação de uma ferramenta interna de dashboard, criando fluxos e gráficos interativos no Figma com foco em visualização de dados.',
        'Apoio na criação de queries GraphQL e integração com sistemas legados via APIs RESTful.',
        'Utilização de MongoDB, DB2 e Python em conjunto com ferramentas modernas para manipulação segura e eficiente de dados.',
        'Aplicação de testes com Jest, uso de Docker e suporte a pipelines de CI/CD.',
        'Participação em reuniões de alinhamento e planejamento (dailies, refinamentos, plannings), com uso do Jira para organizar e acompanhar as entregas.',
        'Atuação com times globais em inglês, contribuindo para melhorias no projeto e aprimorando minhas habilidades de comunicação.'
      ],
      technologies: ['Angular', 'TypeScript', 'GraphQL', 'API REST', 'MongoDB', 'DB2', 'Python', 'Jest', 'Jira', 'Docker', 'Figma'],
      isCurrent: true
    },
    {
      id: 2,
      title: 'Gerente de Marketing',
      company: 'Dupla do Cabelo',
      period: '2020 – 2023',
      location: 'Dupla do Cabelo',
      description: [
        'Gerenciamento de mídias digitais e produção de conteúdo para redes sociais.',
        'Gestão de e-commerce, atendimento ao cliente e suporte operacional.',
        'Liderança de equipe com foco em controle de entregas e cronogramas.'
      ],
      technologies: ['Marketing Digital', 'E-commerce', 'Gestão de Equipe', 'Redes Sociais'],
      isCurrent: false
    },
    {
      id: 3,
      title: 'Estagiária em Comunicação',
      company: 'RIT (Rede Internacional de Televisão)',
      period: '2017 – 2019',
      location: 'RIT TV',
      description: [
        'Apoio à produção de conteúdo audiovisual e planejamento de pautas.',
        'Participação na organização e cobertura de programas ao vivo.',
        'Criação de roteiros e edição básica de vídeo para mídias institucionais.',
      ],
      technologies: ['Produção Audiovisual', 'Edição de Vídeo', 'Jornalismo'],
      isCurrent: false
    }
  ];

  return (
    <section id="career" className={styles.careerSection}>
      <div className={styles.careerContainer}>
        <h2 className={styles.careerTitle}>Carreira</h2>
        
        <div className={styles.timelineContainer}>
          {careerData.map((experience, index) => (
            <div key={experience.id} className={styles.timelineItem}>
              <div className={styles.timelineBadge}>
                <div className={`${styles.badge} ${experience.isCurrent ? styles.currentBadge : ''}`}>
                  {experience.isCurrent ? 'Atual' : experience.period.split('–')[1]?.trim() || experience.period}
                </div>
              </div>
              
              <div className={styles.timelineContent}>
                <div className={styles.experienceHeader}>
                  <h3 className={styles.jobTitle}>{experience.title}</h3>
                  <div className={styles.companyInfo}>
                    <span className={styles.companyName}>{experience.company}</span>
                    <span className={styles.companyLocation}> · {experience.location}</span>
                  </div>
                  <div className={styles.period}>{experience.period}</div>
                </div>
                
                <div className={styles.experienceDescription}>
                  {experience.description.map((item, itemIndex) => (
                    <p key={itemIndex} className={styles.descriptionItem}>
                      {item}
                    </p>
                  ))}
                </div>
                
                <div className={styles.technologiesContainer}>
                  {experience.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className={styles.technologyTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerSection; 