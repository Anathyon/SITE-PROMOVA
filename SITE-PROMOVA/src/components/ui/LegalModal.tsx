import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog } from '@headlessui/react';
import { X } from 'lucide-react';
import type { LegalSection } from '../../data/legal';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  section: LegalSection | null;
  isMobile: boolean;
}

const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, section, isMobile }) => {
  if (!section) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog
          static
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          open={isOpen}
          onClose={onClose}
          className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-8"
        >
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/90 backdrop-blur-sm" 
            onClick={onClose} 
            aria-hidden="true"
          />
          
          <Dialog.Panel
            as={motion.div}
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-2xl glass rounded-[40px] overflow-hidden border border-white/10 flex flex-col max-h-[85vh] z-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white hover:text-black transition-all"
              aria-label="Fechar"
            >
              <X size={20} />
            </button>

            {/* Content */}
            <div 
              className="w-full overflow-y-auto"
              style={{ padding: isMobile ? '2rem' : '3.5rem' }}
            >
              <span 
                className="text-[10px] font-black tracking-[0.4em] uppercase text-rainbow-red block"
                style={{ marginBottom: '1rem' }}
              >
                Informação Legal
              </span>
              <Dialog.Title 
                className="font-black text-white uppercase tracking-tight leading-tight"
                style={{ 
                  fontSize: isMobile ? '1.75rem' : '2.5rem',
                  marginBottom: '2rem' 
                }}
              >
                {section.title}
              </Dialog.Title>
              
              <div 
                className="flex flex-col"
                style={{ gap: '1.5rem' }}
              >
                {section.content.map((paragraph, idx) => (
                  <p 
                    key={idx}
                    className="text-white/60 leading-relaxed font-medium"
                    style={{ fontSize: isMobile ? '0.875rem' : '1rem' }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div style={{ marginTop: '3rem' }}>
                <button 
                  onClick={onClose}
                  className="w-full rounded-2xl bg-white text-black font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 hover:bg-white/90 transition-all hover:scale-[1.02] active:scale-95"
                  style={{ padding: '1.25rem' }}
                >
                  Entendi
                </button>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default LegalModal;
