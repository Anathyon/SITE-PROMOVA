import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, Calendar, MapPin, Tag } from 'lucide-react';
import { Dialog } from '@headlessui/react';
import { useWindowSize } from '../../hooks/useWindowSize';
import { projects } from '../../data/projects';
import type { Project } from '../../types';

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
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
      id="portfolio" 
      className="bg-dark flex flex-col items-center w-full"
      style={{ 
        paddingTop: isMobile ? '4rem' : '8rem', 
        paddingBottom: isMobile ? '4rem' : '8rem' 
      }}
    >
      <div 
        className="max-w-[85%] mx-auto"
        style={{ 
          paddingLeft: isMobile ? '1rem' : '1.5rem', 
          paddingRight: isMobile ? '1rem' : '1.5rem' 
        }}
      >
        <div 
          className="flex flex-col md:flex-row justify-between items-end gap-8"
          style={{ marginBottom: isMobile ? '3rem' : '5rem' }}
        >
          <div className="max-w-xl">
            <motion.h2 
              initial={shouldAnimate ? { opacity: 0, y: 20 } : undefined}
              whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
              viewport={{ once: false, amount: 0.8 }}
              onAnimationComplete={handleAnimationComplete}
              className="font-black tracking-tighter uppercase"
              style={{ 
                fontSize: isMobile ? '2.5rem' : '4rem',
                marginBottom: '1rem' 
              }}
            >
              NOSSO <span className={`rainbow-text ${shouldAnimate ? 'animate-rainbow' : ''}`}>PORTFÓLIO</span>
            </motion.h2>
            <motion.p 
              initial={shouldAnimate ? { opacity: 0, y: 20 } : undefined}
              whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
              viewport={{ once: false, amount: 0.8 }}
              transition={{ delay: 0.2 }}
              className="text-white/40 font-medium"
              style={{ fontSize: isMobile ? '0.875rem' : '1.125rem' }}
            >
              Uma seleção dos nossos trabalhos reais realizados em Meruoca e em todo o Ceará. Clique para ver detalhes.
            </motion.p>
          </div>
          <motion.div 
            initial={shouldAnimate ? { opacity: 0, x: 20 } : undefined}
            whileInView={shouldAnimate ? { opacity: 1, x: 0 } : undefined}
            viewport={{ once: false, amount: 0.8 }}
            transition={{ delay: 0.3 }}
            className="flex"
            style={{ gap: '0.75rem' }}
          >
            {['Todos', 'Vídeo', 'Foto'].map((cat) => (
              <button 
                key={cat} 
                className="rounded-full border border-white/5 hover:border-white/20 transition-all text-[10px] font-black uppercase tracking-widest hover:bg-white/5"
                style={{ padding: '0.5rem 1.5rem' }}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{ gap: isMobile ? '1.5rem' : '2rem' }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={shouldAnimate ? { opacity: 0, y: 20 } : undefined}
              whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
              viewport={{ once: false }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={!isMobile ? { scale: 1.02, y: -5 } : undefined}
              onClick={() => setSelectedProject(project)}
              className="group relative aspect-4/5 overflow-hidden rounded-[32px] bg-dark-lighter border border-white/5 cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-dark via-dark/10 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-700"></div>
              
              <div 
                className="absolute bottom-0 left-0 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-700"
                style={{ padding: isMobile ? '1.5rem' : '2rem' }}
              >
                <span className="text-[9px] font-black tracking-[0.3em] uppercase text-white/40 block" style={{ marginBottom: '0.75rem' }}>
                  {project.category}
                </span>
                <h3 
                  className="font-black text-white uppercase tracking-tight leading-tight"
                  style={{ 
                    fontSize: isMobile ? '1.25rem' : '1.5rem',
                    marginBottom: '1.25rem' 
                  }}
                >
                  {project.title}
                </h3>
                <button className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 hover:scale-110 active:scale-95">
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <Dialog
            static
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            open={!!selectedProject}
            onClose={() => setSelectedProject(null)}
            className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-8"
          >
            <div className="fixed inset-0 bg-black/90 backdrop-blur-sm" onClick={() => setSelectedProject(null)} />
            
            <Dialog.Panel
              as={motion.div}
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-5xl glass rounded-[40px] overflow-hidden border border-white/10 flex flex-col md:flex-row max-h-[90vh]"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white hover:text-black transition-all"
              >
                <X size={20} />
              </button>

              <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-dark/80 md:hidden" />
              </div>

              <div 
                className="w-full md:w-1/2 overflow-y-auto"
                style={{ padding: isMobile ? '1.5rem' : '3rem' }}
              >
                <span 
                  className="text-[10px] font-black tracking-[0.4em] uppercase text-rainbow-red block"
                  style={{ marginBottom: '1rem' }}
                >
                  {selectedProject.category}
                </span>
                <Dialog.Title 
                  className="font-black text-white uppercase tracking-tight leading-tight"
                  style={{ 
                    fontSize: isMobile ? '1.75rem' : '2.5rem',
                    marginBottom: '1.5rem' 
                  }}
                >
                  {selectedProject.title}
                </Dialog.Title>
                
                <div 
                  className="flex flex-wrap"
                  style={{ gap: '1.5rem', marginBottom: '2rem' }}
                >
                  <div className="flex items-center gap-2 text-white/40">
                    <Calendar size={16} className="text-white/20" />
                    <span className="text-xs font-bold uppercase tracking-widest">{selectedProject.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/40">
                    <MapPin size={16} className="text-white/20" />
                    <span className="text-xs font-bold uppercase tracking-widest">{selectedProject.location}</span>
                  </div>
                </div>

                <p 
                  className="text-white/60 leading-relaxed font-medium"
                  style={{ 
                    fontSize: isMobile ? '0.875rem' : '1.125rem',
                    marginBottom: '2.5rem' 
                  }}
                >
                  {selectedProject.description}
                </p>

                <div 
                  className="flex flex-col"
                  style={{ gap: '1.5rem' }}
                >
                  <div 
                    className="flex flex-wrap"
                    style={{ gap: '0.75rem' }}
                  >
                    {selectedProject.tags.map((tag) => (
                      <div 
                        key={tag} 
                        className="flex items-center gap-2 rounded-full bg-white/5 border border-white/5 text-[10px] font-black uppercase tracking-widest text-white/60"
                        style={{ padding: '0.5rem 1rem' }}
                      >
                        <Tag size={10} />
                        {tag}
                      </div>
                    ))}
                  </div>
                  
                  <button 
                    className="w-full rounded-2xl bg-white text-black font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 hover:bg-white/90 transition-all hover:scale-[1.02] active:scale-95"
                    style={{ padding: '1.25rem' }}
                  >
                    Solicitar Orçamento Similar
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
