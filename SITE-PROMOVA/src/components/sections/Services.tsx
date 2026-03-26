import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useWindowSize } from '../../hooks/useWindowSize';
import { services } from '../../data/services';

/**
 * Componente Services
 * Exibe a grade de serviços oferecidos pela empresa com animações e 
 * background de gradiente interativo. Em dispositivos móveis, as animações
 * rodarão no máximo duas vezes para evitar distrações.
 */
const Services: React.FC = () => {
  const { width } = useWindowSize();
  const isMobile = width < 768;
  const [animationCount, setAnimationCount] = useState(0);

  // Stop animations after 2 cycles on mobile
  const shouldAnimate = !isMobile || animationCount < 2;

  const handleAnimationComplete = () => {
    if (isMobile) setAnimationCount(prev => prev + 1);
  };

  return (
    <section 
      id="services" 
      className="bg-dark-lighter relative overflow-hidden flex flex-col items-center w-full"
      style={{ 
        paddingTop: isMobile ? '4rem' : '8rem', 
        paddingBottom: isMobile ? '4rem' : '8rem' 
      }}
    >
      <div 
        className="max-w-[80%] mx-auto w-full flex flex-col items-center"
        style={{ 
          paddingLeft: isMobile ? '1rem' : '1.5rem', 
          paddingRight: isMobile ? '1rem' : '1.5rem' 
        }}
      >
        <div 
          className="text-center"
          style={{ marginBottom: isMobile ? '3rem' : '5rem' }}
        >
          <motion.h2 
            initial={shouldAnimate ? { opacity: 0, y: 20 } : undefined}
            whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
            viewport={{ once: true, amount: 0.8 }}
            onAnimationComplete={handleAnimationComplete}
            className="font-black tracking-tighter uppercase"
            style={{ 
              fontSize: isMobile ? '2.5rem' : '4rem',
              marginBottom: '1.25rem' 
            }}
          >
            NOSSOS <span className={`rainbow-text ${shouldAnimate ? 'animate-rainbow' : ''}`}>SERVIÇOS</span>
          </motion.h2>
          <motion.p 
            initial={shouldAnimate ? { opacity: 0, y: 20 } : undefined}
            whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 0.2 }}
            className="text-white/40 max-w-xl mx-auto font-medium"
            style={{ fontSize: isMobile ? '0.875rem' : '1.125rem' }}
          >
            Soluções completas em audiovisual para elevar o patamar da sua comunicação.
          </motion.p>
        </div>

        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full justify-items-center"
          style={{ gap: isMobile ? '1.5rem' : '2rem' }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={shouldAnimate ? { opacity: 0, y: 20 } : undefined}
              whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={!isMobile ? { y: -12, scale: 1.02 } : {}}
              className="group rounded-[32px] bg-dark border border-white/5 hover:border-white/20 transition-all duration-500 relative overflow-hidden flex flex-col items-center text-center cursor-default"
              style={{ padding: isMobile ? '1.5rem' : '2rem' }}
            >
              {/* Hover Gradient Background */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-[0.05] transition-opacity duration-700 pointer-events-none"
                style={{ 
                  background: `linear-gradient(to bottom right, ${service.colors.from}, ${service.colors.to})` 
                }}
              ></div>
              
              <div 
                className="rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all duration-700"
                style={{ 
                  width: '3.5rem', 
                  height: '3.5rem', 
                  marginBottom: '1.5rem' 
                }}
              >
                <service.icon className="w-7 h-7" />
              </div>
              
              <h3 
                className="text-xl font-black uppercase tracking-tight group-hover:rainbow-text transition-all duration-500"
                style={{ marginBottom: '0.75rem' }}
              >
                {service.title}
              </h3>
              <p 
                className="text-white/40 leading-relaxed font-medium"
                style={{ fontSize: '1rem' }}
              >
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
