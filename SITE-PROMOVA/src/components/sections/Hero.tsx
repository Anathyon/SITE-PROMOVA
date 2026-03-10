import React from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';
import { useWindowSize } from '../../hooks/useWindowSize';

const Hero: React.FC = () => {
  const { width } = useWindowSize();
  const { scrollY } = useScroll();
  const [isAtTop, setIsAtTop] = React.useState(true);
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    setIsAtTop(latest < 5);
  });

  // Stop foreground animations after 50px of scroll
  const foregroundOpacity = useTransform(scrollY, [0, 50], [1, 0]);
  const foregroundPointerEvents = useTransform(scrollY, (value) => value > 50 ? 'none' : 'auto');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as any,
      },
    },
  };

  const getResponsiveFontSize = () => {
    if (isMobile) return '2.5rem';
    if (isTablet) return '4rem';
    return '5.5rem'; // Default lg/xl size
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ paddingTop: isMobile ? '4rem' : '6rem' }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute top-1/4 -left-20 w-[300px] md:w-[400px] h-[300px] md:h-[400px] blur-[80px] md:blur-[120px] rounded-full animate-float"
          style={{ backgroundColor: 'rgba(0, 0, 255, 0.1)' }}
        ></div>
        <div 
          className="absolute bottom-1/4 -right-20 w-[300px] md:w-[400px] h-[300px] md:h-[400px] blur-[80px] md:blur-[120px] rounded-full animate-float delay-1000"
          style={{ backgroundColor: 'rgba(255, 0, 0, 0.1)' }}
        ></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)]"></div>
      </div>

      <motion.div 
        className="max-w-7xl mx-auto z-10 text-center"
        style={{ 
          paddingLeft: isMobile ? '1rem' : '1.5rem', 
          paddingRight: isMobile ? '1rem' : '1.5rem',
          opacity: foregroundOpacity,
          pointerEvents: foregroundPointerEvents as any
        }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.span 
            variants={itemVariants}
            className="inline-block rounded-full glass font-black tracking-[0.3em] uppercase text-white/40 border border-white/5"
            style={{ 
              fontSize: isMobile ? '7px' : '9px',
              paddingLeft: isMobile ? '1rem' : '1.25rem', 
              paddingRight: isMobile ? '1rem' : '1.25rem', 
              paddingTop: '0.375rem', 
              paddingBottom: '0.375rem',
              marginBottom: isMobile ? '1rem' : '1.5rem' 
            }}
          >
            Produção Audiovisual de Alto Impacto
          </motion.span>
          
          <motion.h1 
            variants={itemVariants}
            className="font-black tracking-tighter leading-none md:leading-[0.9] uppercase"
            style={{ 
              fontSize: getResponsiveFontSize(),
              marginBottom: isMobile ? '1.5rem' : '2rem' 
            }}
          >
            TRANSFORMAMOS <br />
            <motion.span 
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              animate={{ clipPath: 'inset(0 0 0 0)' }}
              transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1], delay: 0.5 }}
              className={`rainbow-text ${isAtTop ? 'animate-rainbow-infinite' : ''}`} 
              style={{ 
                display: 'inline-block',
                transition: 'opacity 0.5s ease' 
              }}
            >
              IDEIAS EM
            </motion.span> <br />
            MOVIMENTO.
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-sm md:text-xl text-white/40 max-w-2xl leading-relaxed font-medium"
            style={{ 
              marginLeft: 'auto', 
              marginRight: 'auto', 
              marginBottom: isMobile ? '2rem' : '2.5rem' 
            }}
          >
            A Promova Produções cria narrativas visuais que conectam marcas a pessoas. 
            Do roteiro à pós-produção, entregamos excelência em cada frame.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center text-center"
            style={{ gap: isMobile ? '1rem' : '1.25rem' }}
          >
            <a
              href="#portfolio"
              className="btn-primary group text-xs md:text-sm"
              style={{ 
                padding: isMobile ? '0.625rem 1.25rem' : '0.75rem 1.5rem', 
                display: 'flex', 
                gap: '0.5rem',
                width: isMobile ? '100% ' : 'auto',
                justifyContent: 'center'
              }}
            >
              Ver Portfólio
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="btn-secondary text-xs md:text-sm"
              style={{ 
                padding: isMobile ? '0.625rem 1.25rem' : '0.75rem 1.5rem', 
                display: 'flex', 
                gap: '0.5rem',
                width: isMobile ? '100% ' : 'auto',
                justifyContent: 'center'
              }}
            >
              <Play className="w-4 h-4 fill-white" />
              Iniciar Projeto
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ 
          opacity: foregroundOpacity,
          gap: '0.75rem' 
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-[7px] uppercase tracking-[0.4em] text-white/20 font-black">Scroll</span>
        <div className="w-px h-8 md:h-12 bg-linear-to-b from-white/20 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
