import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import styles from './HeroSection.module.css';

const HeroSection: React.FC = () => {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [emailData, setEmailData] = useState({
    to: 'maiaramorit@gmail.com', // Seu email (destinatário)
    from_email: '', // Email da pessoa que quer contato
    subject: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);

  const handleCurriculoClick = () => {
    window.open('https://drive.google.com/file/d/1yT23pekCGuMSnM81tZGAnhgu6LLXuOzX/view?usp=sharing', '_blank');
  };

  const handleEmailClick = () => {
    setIsEmailModalOpen(true);
  };

  const handleGitHubClick = () => {
    console.log("vc clicou no GitHub");
  };

  const handleLinkedInClick = () => {
    console.log("vc clicou no LinkedIn");
  };

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  const handleCloseModal = () => {
    setIsEmailModalOpen(false);
    // Limpar dados quando fechar
    setEmailData(prev => ({
      ...prev,
      from_email: '',
      subject: '',
      message: ''
    }));
  };

  const handleInputChange = (field: string, value: string) => {
    setEmailData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!emailData.from_email.trim() || !emailData.subject.trim() || !emailData.message.trim()) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    // Validar formato do email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailData.from_email)) {
      alert('Por favor, insira um email válido.');
      return;
    }

    // Validar comprimento mínimo do assunto
    if (emailData.subject.trim().length < 4) {
      alert('O assunto deve ter pelo menos 4 caracteres. Por favor, seja mais específico sobre o motivo do contato.');
      return;
    }

    // Validar comprimento mínimo da mensagem
    if (emailData.message.trim().length < 10) {
      alert('A mensagem deve ter pelo menos 10 caracteres. Por favor, escreva uma mensagem mais detalhada para que eu possa te ajudar melhor.');
      return;
    }

    // Proteções de segurança
    if (emailData.subject.length > 100) {
      alert('O assunto é muito longo. Máximo 100 caracteres.');
      return;
    }

    if (emailData.message.length > 2000) {
      alert('A mensagem é muito longa. Máximo 2000 caracteres.');
      return;
    }

    // Verificar se não é spam (palavras suspeitas)
    const spamWords = ['viagra', 'casino', 'loan', 'credit', 'free money'];
    const messageLower = emailData.message.toLowerCase();
    const subjectLower = emailData.subject.toLowerCase();
    
    const hasSpamWords = spamWords.some(word => 
      messageLower.includes(word) || subjectLower.includes(word)
    );
    
    if (hasSpamWords) {
      alert('Mensagem bloqueada por conter conteúdo suspeito.');
      return;
    }

    setIsSending(true);
    
    try {
      // Debug: verificar se as variáveis de ambiente estão carregadas
      console.log('Variáveis de ambiente:', {
        serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID,
        templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      });

      // Configuração do EmailJS
      const templateParams = {
        to_email: emailData.to,
        from_email: emailData.from_email,
        subject: emailData.subject,
        message: emailData.message,
        from_name: emailData.from_email.split('@')[0], // Nome extraído do email
        reply_to: emailData.from_email, // Email para resposta
        to_name: 'Maiara' // Seu nome
      };

      // Usar credenciais hardcoded temporariamente se as variáveis não estiverem carregadas
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_bdhl59j';
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_cuv6wzt';
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'BCRUyu12W0o-RPVGE';

      console.log('Credenciais que serão usadas:', { serviceId, templateId, publicKey });

      // Enviar email usando EmailJS
      const result = await emailjs.send(
        serviceId, // Service ID
        templateId, // Template ID
        templateParams,
        publicKey // Public Key
      );

      console.log('Email enviado com sucesso:', result);
      alert('Email enviado com sucesso! Você receberá uma resposta em breve.');
      handleCloseModal();
      
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      alert('Erro ao enviar email. Tente novamente.');
    } finally {
      setIsSending(false);
    }
  };

  // Fechar modal com ESC
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isEmailModalOpen) {
        handleCloseModal();
      }
    };

    if (isEmailModalOpen) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isEmailModalOpen]);

  return (
    <>
      <section className={styles.heroSection}>
        <div className={styles.leftPanel}>
          <p className={styles.hello}>Olá,</p>
          <p className={styles.name}>Sou<span style={{ marginLeft: '16px' }}></span><span className={styles.highlight}>Maiara</span></p>
          <p className={styles.role}>Desenvolvedora de software Jr.</p>
          <div className={styles.separator}></div>
          <div className={styles.buttonContainer}>
            <button className={styles.button} onClick={handleCurriculoClick}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2"/>
                <path d="M16 13H8" stroke="currentColor" strokeWidth="2"/>
                <path d="M16 17H8" stroke="currentColor" strokeWidth="2"/>
                <path d="M10 9H8" stroke="currentColor" strokeWidth="2"/>
              </svg>
              Currículo
            </button>
            <button className={styles.button} onClick={handleEmailClick}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2"/>
                <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2"/>
              </svg>
              Email me
            </button>
          </div>
          <div className={styles.socialButtonsContainer}>
            <button
              className={styles.socialButton}
              aria-label="GitHub"
              onClick={() => window.open('https://github.com/maiaramorit', '_blank')}
            >
              <svg width="25" height="25" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
              <div className={styles.tooltip}>GitHub</div>
            </button>
            <button
              className={styles.socialButton}
              aria-label="LinkedIn"
              onClick={() => window.open('https://www.linkedin.com/in/maiaramorit/', '_blank')}
            >
              <svg width="25" height="25" viewBox="0 0 16 16" fill="none">
                <defs>
                  <mask id="linkedin-mask">
                    <rect width="16" height="16" rx="3" fill="white"/>
                    <path fill="black" d="M5.943 13.394V6.169H3.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.521-1.248-1.342-1.248-.822 0-1.358.54-1.358 1.248 0 .694.52 1.248 1.327 1.248h.015zM13.851 13.394V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.4 5.4 0 0 1 .016-.025V6.169h-2.4c.03.7 0 7.225 0 7.225h2.4v-4.045c0-.216.016-.432.08-.586.175-.432.574-.88 1.243-.88.877 0 1.228.664 1.228 1.637v3.874h2.4z"/>
                  </mask>
                </defs>
                <rect width="16" height="16" rx="3" fill="currentColor" mask="url(#linkedin-mask)"/>
              </svg>
              <div className={styles.tooltip}>LinkedIn</div>
            </button>
          </div>
        </div>
        <div className={styles.rightPanel}></div>
        <div className={styles.scrollIndicator} onClick={handleScrollDown}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </section>

      {/* Modal de Email */}
      {isEmailModalOpen && (
        <div className={styles.modalOverlay} onClick={handleCloseModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <button className={styles.backButton} onClick={handleCloseModal}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M19 12H5" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </button>
              <h2>Enviar Mensagem</h2>
            </div>
            
            <form onSubmit={handleSubmit} className={styles.emailForm}>
              <div className={styles.formGroup}>
                <label htmlFor="to">Para:</label>
                <input
                  type="email"
                  id="to"
                  value={emailData.to}
                  onChange={(e) => handleInputChange('to', e.target.value)}
                  readOnly
                  required
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="from_email">Seu Email: *</label>
                <input
                  type="email"
                  id="from_email"
                  value={emailData.from_email}
                  onChange={(e) => handleInputChange('from_email', e.target.value)}
                  placeholder="Digite seu email para contato"
                  required
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="subject">Assunto: *</label>
                <input
                  type="text"
                  id="subject"
                  value={emailData.subject}
                  onChange={(e) => handleInputChange('subject', e.target.value)}
                  placeholder="Digite o assunto da mensagem (mínimo 4 caracteres)"
                  required
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="message">Mensagem: *</label>
                <textarea
                  id="message"
                  value={emailData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  placeholder="Digite sua mensagem aqui... (mínimo 10 caracteres)"
                  rows={8}
                  required
                />
              </div>
              
              <div className={styles.formActions}>
                <button type="button" onClick={handleCloseModal} className={styles.cancelButton} disabled={isSending}>
                  Cancelar
                </button>
                <button type="submit" className={styles.sendButton} disabled={isSending}>
                  {isSending ? 'Enviando...' : 'Enviar'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroSection; 