import React from 'react';
import { motion } from 'framer-motion';
import { Video, Camera, MonitorPlay, Share2, Zap, Layers } from 'lucide-react';
import { useWindowSize } from '../../hooks/useWindowSize';

const services = [
  {
    title: 'Produção de Vídeo',
    description: 'Comerciais, vídeos institucionais e documentários com qualidade cinematográfica 4K.',
    icon: Video,
    colors: { from: '#ff0000', to: '#ff7f00' }, // red to orange
  },
  {
    title: 'Fotografia Profissional',
    description: 'Ensaios corporativos, cobertura de eventos e fotografia de produtos de alto nível.',
    icon: Camera,
    colors: { from: '#ff7f00', to: '#ffff00' }, // orange to yellow
  },
  {
    title: 'Edição & Motion',
    description: 'Pós-produção avançada, color grading e animações que dão vida ao seu projeto.',
    icon: MonitorPlay,
    colors: { from: '#ffff00', to: '#00ff00' }, // yellow to green
  },
  {
    title: 'Social Media Content',
    description: 'Criação de Reels, TikToks e conteúdos dinâmicos otimizados para engajamento.',
    icon: Share2,
    colors: { from: '#00ff00', to: '#0000ff' }, // green to blue
  },
  {
    title: 'Transmissão ao Vivo',
    description: 'Lives profissionais para eventos, webinars e lançamentos com multi-câmeras.',
    icon: Zap,
    colors: { from: '#0000ff', to: '#ff0000' }, // blue to red
  },
  {
    title: 'Estratégia Visual',
    description: 'Consultoria completa para posicionamento de marca através do audiovisual.',
    icon: Layers,
    colors: { from: '#ff0000', to: '#0000ff' }, // red to blue
  },
];

const Services: React.FC = () => {
  const { width } = useWindowSize();
  const isMobile = width < 768;

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
        className="max-w-7xl mx-auto w-full flex flex-col items-center"
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-black tracking-tighter uppercase"
            style={{ 
              fontSize: isMobile ? '2.5rem' : '4rem',
              marginBottom: '1.25rem' 
            }}
          >
            NOSSOS <span className="rainbow-text">SERVIÇOS</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ y: -8 }}
              className="group rounded-[32px] bg-dark border border-white/5 hover:border-white/10 transition-all duration-500 relative overflow-hidden flex flex-col items-center text-center"
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
                className="rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-700"
                style={{ 
                  width: '3.5rem', 
                  height: '3.5rem', 
                  marginBottom: '1.5rem' 
                }}
              >
                <service.icon className="text-white w-7 h-7" />
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
