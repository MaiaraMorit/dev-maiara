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
        </div>
        <div className={styles.rightPanel}>
          <div className={styles.rightContent}></div>
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