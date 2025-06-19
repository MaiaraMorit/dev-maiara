import React from 'react';
import styles from './HeroSection.module.css';

const HeroSection: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.leftPanel}>
        <p className={styles.hello}>Olá,</p>
        <p className={styles.name}>Sou<span style={{ marginLeft: '16px' }}></span><span className={styles.highlight}>Maiara</span></p>
        <p className={styles.role}>Desenvolvedora de software Jr.</p>
      </div>
      <div className={styles.rightPanel}>
        <div className={styles.rightContent}></div>
      </div>
    </section>
  );
};

export default HeroSection; 