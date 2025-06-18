import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => (
  <header className={styles.customHeader + ' text-white py-3'}>
    <nav className="container d-flex align-items-center justify-content-between">
      <div className={styles.logoContainer}>
        <svg width="56" height="48" viewBox="0 0 56 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 32 Q18 10 50 38" stroke="#464646" strokeWidth="2.5" fill="none" opacity="0.18" />
          <text x="8" y="38" fontFamily="serif" fontSize="32" fill="#888" opacity="0.7">MT</text>
        </svg>
      </div>
      <div className={styles.formacaoBtnsRow + ' d-flex'} style={{gap: '12px', marginRight: 5, marginTop: 16, marginLeft: 0, marginBottom: 0, marginInlineStart: 'auto'}}>
        <button 
        className={styles.formacaoBtn + ' active'}
        onClick={() => console.log('Vc clicou em formação!')}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginRight: 10}}>
            <path d="M4 10.5L14 6L24 10.5L14 15L4 10.5Z" stroke="#BABABA" strokeWidth="2" fill="none"/>
            <path d="M7 12.5V17C7 19.2091 10.134 21 14 21C17.866 21 21 19.2091 21 17V12.5" stroke="#BABABA" strokeWidth="2" fill="none"/>
            <circle cx="24" cy="10.5" r="1.2" fill="#BABABA"/>
          </svg>
          Formação
        </button>
        <button 
        className={styles.formacaoBtn}
        onClick={() => console.log('Vc clicou em experiências!')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 16 16" style={{marginRight: 6}}>
            <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"
              stroke="#BABABA" stroke-width="0.7" fill="none"/>
          </svg>
          Experiências
        </button>
        <button 
        className={styles.formacaoBtn} 
        onClick={() => console.log('Vc clicou em projetos!')}>
          <svg width="25" height="25" fill="none" viewBox="0 0 24 24" stroke="#BABABA" strokeWidth="1.2" style={{marginRight: 10}}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2z"/>
          </svg>
          Projetos
        </button>
      </div>
    </nav>
  </header>
);

export default Header; 