import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { useWindowSize } from '../../hooks/useWindowSize';

/**
 * CTA Component - Call to Action section for the landing page.
 * Refactored to use inline styles for spacing and interactive animations.
 */
const CTA: React.FC = () => {
  const { width } = useWindowSize();
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;
  const [animationCount, setAnimationCount] = useState(0);

  // Stop animations after 2 cycles on mobile
  const shouldAnimate = !isMobile || animationCount < 2;

  const handleAnimationComplete = () => {
    if (isMobile) setAnimationCount(prev => prev + 1);
  };

  const WHATSAPP_URL = "https://wa.me/5588994368177";
  const CONTACT_ANCHOR = "#contact";

  return (
    <section 
      id="cta"
      className="relative overflow-hidden bg-dark flex flex-col items-center"
      aria-labelledby="cta-title"
      style={{ 
        paddingTop: isMobile ? '5rem' : '8rem', 
        paddingBottom: isMobile ? '5rem' : '8rem' 
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-[-10%] left-1/4 w-[600px] h-[600px] bg-rainbow-gradient opacity-[0.05] blur-[150px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-1/4 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full"></div>
      </div>

      <div 
        className="max-w-7xl mx-auto relative z-10 text-center"
        style={{ 
          paddingLeft: isMobile ? '1rem' : '1.5rem', 
          paddingRight: isMobile ? '1rem' : '1.5rem' 
        }}
      >
        <motion.div
          initial={shouldAnimate ? { opacity: 0, y: 40 } : undefined}
          whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
          whileHover={!isMobile ? { scale: 1.01 } : undefined}
          onAnimationComplete={handleAnimationComplete}
          viewport={{ once: false, amount: 0.8 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="glass border border-white/10 max-w-5xl mx-auto shadow-2xl cursor-default"
          style={{ 
            padding: isMobile ? '2rem' : (isTablet ? '4rem' : '5rem'),
            borderRadius: isMobile ? '32px' : '64px'
          }}
        >
          <h2 
            id="cta-title"
            className="font-black uppercase tracking-tighter"
            style={{ 
              fontSize: isMobile ? '2.25rem' : (isTablet ? '3rem' : '4.5rem'),
              lineHeight: '1.1',
              marginBottom: '2rem'
            }}
          >
            PRONTO PARA <span className={`rainbow-text block sm:inline ${shouldAnimate ? 'animate-rainbow' : ''}`}>TRANSFORMAR</span> <br className="hidden md:block" /> 
            SUA IDEIA EM <span className={`rainbow-text ${shouldAnimate ? 'animate-rainbow' : ''}`}>VÍDEO?</span>
          </h2>
          
          <p 
            className="text-white/60 font-medium leading-relaxed"
            style={{ 
              fontSize: isMobile ? '1.125rem' : '1.25rem',
              marginBottom: '3rem',
              maxWidth: '48rem',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          >
            Entre em contato agora mesmo e vamos criar juntos um projeto audiovisual que vai destacar sua marca no mercado com excelência técnica e criatividade.
          </p>

          <nav 
            className="flex flex-col sm:flex-row items-center justify-center" 
            aria-label="CTA Actions"
            style={{ gap: '1.5rem' }}
          >
            <a
              href={CONTACT_ANCHOR}
              className="btn-primary group tracking-widest uppercase justify-center"
              aria-label="Falar com Especialista"
              style={{ 
                padding: '1.25rem 2.5rem',
                fontSize: '1rem',
                width: isMobile ? '100%' : 'auto',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              Falar com Especialista
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
            </a>
            
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary group tracking-widest uppercase justify-center border-white/10 hover:border-white/20 transition-all text-white"
              aria-label="Entrar em contato via WhatsApp"
              style={{ 
                padding: '1.25rem 2.5rem',
                fontSize: '1rem',
                width: isMobile ? '100%' : 'auto',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}
            >
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              WhatsApp
            </a>
          </nav>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
