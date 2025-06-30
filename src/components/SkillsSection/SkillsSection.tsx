import React, { useState, useEffect, useRef } from 'react';
import styles from './SkillsSection.module.css';

const SkillsSection: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const skillsSectionRef = useRef<HTMLDivElement>(null);

  const skillsData = {
    frontend: {
      title: 'Frontend',
      categories: [
        {
          name: 'Linguagens & Frameworks',
          items: ['TypeScript', 'JavaScript', 'React', 'Angular']
        },
        {
          name: 'Tecnologias',
          items: ['HTML5', 'CSS', 'Carbon Design']
        },
        {
          name: 'Ferramentas & Design',
          items: ['Figma', 'UX Design (Figma)']
        }
      ]
    },
    backend: {
      title: 'Backend',
      categories: [
        {
          name: 'Linguagens & Frameworks',
          items: ['TypeScript', 'JavaScript', 'Node.js', 'Python', 'Jest']
        },
        {
          name: 'APIs',
          items: ['RESTful APIs', 'GraphQL', 'Express']
        },
        {
          name: 'Banco de Dados',
          items: ['MySQL (DB2)', 'MongoDB (básico)', 'Sequelize']
        },
        {
          name: 'Testes',
          items: ['Jest', 'Mocha', 'Chai']
        },
        {
          name: 'Conceitos',
          items: ['POO', 'Clean Code', 'SOLID', 'Arquitetura Hexagonal (básico)']
        },
        {
          name: 'Ambiente',
          items: ['Docker', 'Git']
        }
      ]
    },
    sideTalents: {
      title: 'Side Skills & Talents',
      categories: [
        {
          name: 'Ferramentas de Design & Edição',
          items: ['Filmora', 'Photoshop', 'InDesign']
        },
        {
          name: 'Gestão de Projetos',
          items: ['Jira']
        }
      ]
    }
  };

  const handleSkillClick = (skill: string) => {
    // Toggle: se clicar no mesmo botão, fecha
    if (selectedSkill === skill) {
      setSelectedSkill(null);
    } else {
      setSelectedSkill(skill);
    }
  };

  // Detectar clique fora e tecla ESC
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (skillsSectionRef.current && !skillsSectionRef.current.contains(event.target as Node)) {
        setSelectedSkill(null);
      }
    };

    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && selectedSkill) {
        setSelectedSkill(null);
      }
    };

    // Só adiciona os event listeners se há uma skill selecionada
    if (selectedSkill) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscKey);
    }

    // Cleanup: remove os event listeners
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [selectedSkill]);

  return (
    <section className={styles.skillsSection}>
      <div ref={skillsSectionRef} className={styles.skillsContainer}>
        <h2 className={styles.skillsTitle}>Skills</h2>
        <button 
          className={`${styles.skillButton} ${selectedSkill === 'frontend' ? styles.active : ''}`} 
          style={{ left: '49px', top: '46px' }}
          onClick={() => handleSkillClick('frontend')}
        >
          Front-end
        </button>
        <button 
          className={`${styles.skillButton} ${selectedSkill === 'backend' ? styles.active : ''}`} 
          style={{ left: '49px', top: '140px' }}
          onClick={() => handleSkillClick('backend')}
        >
          Back-end
        </button>
        <button 
          className={`${styles.skillButton} ${selectedSkill === 'sideTalents' ? styles.active : ''}`} 
          style={{ left: '49px', top: '234px' }}
          onClick={() => handleSkillClick('sideTalents')}
        >
          Side Skills & Talents
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

      {/* Skills Details Panel */}
      {selectedSkill && (
        <div className={styles.skillsDetailsPanel}>
          <button 
            className={styles.closeButton}
            onClick={() => setSelectedSkill(null)}
            aria-label="Fechar painel"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className={styles.skillsDetailsContent}>
            <h3 className={styles.skillsDetailsTitle}>{skillsData[selectedSkill as keyof typeof skillsData].title}</h3>
            <div className={styles.skillsCategories}>
              {skillsData[selectedSkill as keyof typeof skillsData].categories.map((category, index) => (
                <div key={index} className={styles.skillCategory}>
                  <h4 className={styles.categoryTitle}>{category.name}</h4>
                  <div className={styles.skillItems}>
                    {category.items.map((item, itemIndex) => (
                      <span key={itemIndex} className={styles.skillItem}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SkillsSection; 