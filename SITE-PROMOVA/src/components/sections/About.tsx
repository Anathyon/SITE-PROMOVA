import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useWindowSize } from '../../hooks/useWindowSize';
import { stats, highlights } from '../../data/about';

const About: React.FC = () => {
  const { width } = useWindowSize();
  const isMobile = width < 768;

  return (
    <section 
      id="about" 
      className="bg-dark-lighter overflow-hidden w-full flex items-center justify-center"
      style={{ 
        paddingTop: isMobile ? '4rem' : '8rem', 
        paddingBottom: isMobile ? '4rem' : '8rem' 
      }}
    >
      <div 
        className="max-w-7xl mx-auto"
        style={{ 
          paddingLeft: isMobile ? '1rem' : '1.5rem', 
          paddingRight: isMobile ? '1rem' : '1.5rem' 
        }}
      >
        <div 
          className="grid grid-cols-1 lg:grid-cols-2 items-center"
          style={{ gap: isMobile ? '3rem' : '5rem' }}
        >
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as any }}
            className="relative"
          >
            <div className="relative z-10 rounded-[48px] overflow-hidden border border-white/5 aspect-square">
              <img
                src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80&w=800"
                alt="Equipe Promova"
                loading="lazy"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-16 -left-16 w-56 h-56 bg-rainbow-gradient opacity-[0.04] blur-[80px] rounded-full animate-float"></div>
            <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-rainbow-gradient opacity-[0.04] blur-[80px] rounded-full animate-float delay-1000"></div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute glass rounded-[32px] border border-white/5 hidden md:block"
              style={{
                bottom: '-2rem',
                left: '-2rem',
                padding: '2rem'
              }}
            >
              <div 
                className="flex items-center"
                style={{ gap: '1.25rem' }}
              >
                <div className="w-14 h-14 rounded-2xl bg-white text-black flex items-center justify-center font-black text-xl">P</div>
                <div>
                  <p className="text-base font-black uppercase tracking-tight">Qualidade Premium</p>
                  <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/30">Certificada pela Promova</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as any }}
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-black tracking-tighter uppercase leading-[0.95]"
              style={{ 
                fontSize: isMobile ? '2.5rem' : '3.75rem',
                marginBottom: isMobile ? '1.5rem' : '2rem' 
              }}
            >
              PAIXÃO POR <br />
              <span className="rainbow-text">CONTAR HISTÓRIAS</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/40 leading-relaxed font-medium"
              style={{ 
                fontSize: isMobile ? '0.875rem' : '1.125rem',
                marginBottom: isMobile ? '2rem' : '2.5rem'
              }}
            >
              A Promova Produções nasceu da vontade de transformar a comunicação visual em uma experiência única. 
              Acreditamos que cada marca tem uma história poderosa para contar, e nossa missão é dar vida a essa narrativa 
              com criatividade, tecnologia e excelência técnica.
            </motion.p>

            <div 
              className="flex flex-col"
              style={{ gap: '1.25rem', marginBottom: isMobile ? '2.5rem' : '3rem' }}
            >
              {highlights.map((item, i) => (
                <motion.div 
                  key={item}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  className="flex items-center"
                  style={{ gap: '0.75rem' }}
                >
                  <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center">
                    <CheckCircle2 className="text-white" style={{ width: '0.75rem', height: '0.75rem' }} />
                  </div>
                  <span className="text-white/70 font-bold uppercase tracking-widest text-[10px]">{item}</span>
                </motion.div>
              ))}
            </div>

            <div 
              className="grid grid-cols-2 md:grid-cols-4 border-t border-white/5"
              style={{ 
                gap: '2rem', 
                paddingTop: isMobile ? '2rem' : '2.5rem' 
              }}
            >
              {stats.map((stat, i) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + (i * 0.1) }}
                >
                  <p 
                    className="font-black rainbow-text tracking-tighter"
                    style={{ 
                      fontSize: isMobile ? '1.5rem' : '1.875rem',
                      marginBottom: '0.25rem' 
                    }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-[7px] uppercase tracking-[0.3em] text-white/20 font-black">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
