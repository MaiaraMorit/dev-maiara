import React, { useState } from 'react';
import styles from './FormationSection.module.css';

const FormationSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCertificateIndex, setCurrentCertificateIndex] = useState(0);

  const formations = [
    {
      year: '2019',
      title: 'Graduação em Jornalismo',
      institution: 'Estácio de Sá',
      status: 'Concluído'
    },
    {
      year: '2023',
      title: 'Curso Fullstack',
      institution: 'Trybe',
      status: 'Concluído'
    },
    {
      year: '2024',
      title: 'Curso JAVA',
      institution: 'Trybe',
      status: 'Concluído'
    },
    {
      year: '2024',
      title: 'Graduação em Eng. de Software',
      institution: 'Uninter',
      status: 'Em andamento'
    },
    {
      year: '2025',
      title: 'Curso de Figma',
      institution: 'Udemy',
      status: 'Concluído'
    }
  ];

  const certificates = [
    {
      name: 'Certificado Figma',
      image: '/Certificado figma.jpg'
    },
    {
      name: 'Certificado Frontend Trybe',
      image: '/certificado frontend trybe.jpg'
    },
    {
      name: 'Certificado Java Trybe',
      image: '/certificado java trybe.jpg'
    },
    {
      name: 'Certificado Full Stack Trybe',
      image: '/certificado trybe desenvolvimento full stack.jpg'
    }
  ];

  const handleCertificateClick = (index: number) => {
    setCurrentCertificateIndex(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handlePrevious = () => {
    setCurrentCertificateIndex((prev) => 
      prev === 0 ? certificates.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentCertificateIndex((prev) => 
      prev === certificates.length - 1 ? 0 : prev + 1
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleCloseModal();
    } else if (e.key === 'ArrowLeft') {
      handlePrevious();
    } else if (e.key === 'ArrowRight') {
      handleNext();
    }
  };

  return (
    <>
      <section id="formation" className={styles.formationSection}>
        <h2 className={styles.formationTitle}>Formação</h2>
        
        <div className={styles.formationContent}>
          <div className={styles.timelineContainer}>
            {formations.map((formation, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.yearBadge}>{formation.year}</div>
                <div className={styles.formationInfo}>
                  <h3 className={styles.formationName}>{formation.title}</h3>
                  <p className={styles.institution}>{formation.institution}</p>
                  <span className={`${styles.status} ${styles[formation.status.replace(' ', '')]}`}>
                    {formation.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          <div className={styles.certificatesContainer}>
            <h3 className={styles.certificatesTitle}>Certificados</h3>
            <div className={styles.certificatesGrid}>
              {certificates.map((certificate, index) => (
                <div 
                  key={index} 
                  className={styles.certificateItem}
                  onClick={() => handleCertificateClick(index)}
                >
                  <img 
                    src={certificate.image} 
                    alt={certificate.name}
                    className={styles.certificateImage}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal do Carrossel */}
      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={handleCloseModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={handleCloseModal}>
              ✕
            </button>
            
            <div className={styles.carouselContainer}>
              <button className={styles.carouselButton} onClick={handlePrevious}>
                ‹
              </button>
              
              <div className={styles.carouselImageContainer}>
                <img 
                  src={certificates[currentCertificateIndex].image}
                  alt={certificates[currentCertificateIndex].name}
                  className={styles.carouselImage}
                />
                <p className={styles.carouselCaption}>
                  {certificates[currentCertificateIndex].name}
                </p>
              </div>
              
              <button className={styles.carouselButton} onClick={handleNext}>
                ›
              </button>
            </div>
            
            <div className={styles.carouselIndicators}>
              {certificates.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.indicator} ${index === currentCertificateIndex ? styles.activeIndicator : ''}`}
                  onClick={() => setCurrentCertificateIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormationSection; 