import React from 'react';
import styles from './SkillsSection.module.css';

const SkillsSection: React.FC = () => {
  return (
    <section className={styles.skillsSection}>
      <div className={styles.skillsContainer}>
        <h2 className={styles.skillsTitle}>Skills</h2>
        <button className={styles.skillButton} style={{ left: '49px', top: '46px' }}>
          Front-end
        </button>
        <button className={styles.skillButton} style={{ left: '49px', top: '140px' }}>
          Back-end
        </button>
        <button className={styles.skillButton} style={{ left: '49px', top: '234px' }}>
          Side Projects
        </button>
      </div>
      
      <div className={styles.aboutContainer}>
        <h2 className={styles.aboutTitle}>Sobre mim</h2>
        <div className={styles.aboutDescription}>
          <p>
            Sou uma desenvolvedora de software júnior movida por curiosidade e vontade de fazer a diferença com tecnologia. Atualmente, faço parte da equipe da IBM Financing como estagiária, onde colaboro em projetos que apoiam a saúde financeira da empresa e de seus clientes. No meu dia a dia, trabalho com GraphQL, Angular, JavaScript, TypeScript e Python, além de testes automatizados com Jest. Tenho familiaridade com bancos de dados NoSQL (como MongoDB) e SQL (como MySQL e DB2), e também utilizo ferramentas como Docker e Cirrus CI.
          </p>
          <p>
            Sou formada em Jornalismo e hoje curso Engenharia de Software porque acredito que comunicação e tecnologia são pilares do futuro. Também sou super interessada em inteligência artificial e em como ela pode transformar nosso mundo. Se eu pudesse resumir minha trajetória até aqui em uma palavra, seria: determinação.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection; 