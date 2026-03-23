import React, { useState } from 'react';
import { Instagram, Facebook, Youtube } from 'lucide-react';
import { useWindowSize } from '../../hooks/useWindowSize';
import LegalModal from '../ui/LegalModal';
import { legalContent } from '../../data/legal';
import type { LegalSection } from '../../data/legal';

const WhatsAppIcon = ({ size = 18, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const Footer: React.FC = () => {
  const { width } = useWindowSize();
  const isMobile = width < 768;
  const currentYear = new Date().getFullYear();
  const [activeLegal, setActiveLegal] = useState<LegalSection | null>(null);

  const socialLinks = [
    { Icon: Instagram, href: 'https://instagram.com/pro.movaproducoes/', label: 'Instagram' },
    { Icon: Facebook, href: 'https://facebook.com/promovaproducoes', label: 'Facebook' },
    { Icon: Youtube, href: 'https://www.youtube.com/c/PromovaProdu%C3%A7%C3%B5es/videos', label: 'Youtube' },
    { Icon: WhatsAppIcon, href: 'https://wa.me/5588994368177', label: 'WhatsApp' }
  ];

  const quickLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Serviços', href: '#services' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Sobre', href: '#about' },
    { name: 'Contato', href: '#contact' }
  ];

  const legalLinks = [
    { name: 'Termos de Uso' },
    { name: 'Privacidade' },
    { name: 'Cookies' },
    { name: 'LGPD' }
  ];

  return (
    <footer 
      className="bg-dark-lighter border-t border-white/5 flex flex-col items-center w-full" 
      aria-labelledby="footer-heading"
      style={{ 
        paddingTop: isMobile ? '4rem' : '6rem', 
        paddingBottom: isMobile ? '2.5rem' : '3rem' 
      }}
    >
      <h2 id="footer-heading" className="sr-only">Rodapé</h2>
      <div 
        className="w-full mx-auto"
        style={{ 
          paddingLeft: isMobile ? '1.5rem' : '3rem', 
          paddingRight: isMobile ? '1.5rem' : '3rem' 
        }}
      >
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          style={{ 
            gap: isMobile ? '3rem' : '4rem', 
            marginBottom: isMobile ? '4rem' : '5rem' 
          }}
        >
          <div className="lg:col-span-2" style={{paddingLeft:"20%"}}>
            <div 
              className="flex items-center"
              style={{ gap: '1.25rem', marginBottom: '2rem' }}
            >
              <img 
                src="/assets/imgs/logo.png" 
                alt="Promova Logo" 
                className="h-14 w-14 rounded-full" 
                loading="lazy"
              />
              <span className="text-2xl font-black tracking-tighter rainbow-text">PROMOVA</span>
            </div>
            <p 
              className="text-white/30 max-w-sm leading-relaxed text-base font-medium"
              style={{ marginBottom: '2.5rem' }}
            >
              Especialistas em transformar ideias em narrativas visuais de alto impacto. 
              Sua marca merece ser promovida com excelência.
            </p>
            <div className="flex" style={{ gap: '1.25rem' }}>
              {socialLinks.map(({ Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-12 h-12 rounded-2xl glass flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500 group"
                >
                  <Icon size={18} className="transition-transform group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-labelledby="quick-links-heading">
            <h4 
              id="quick-links-heading" 
              className="text-white font-black uppercase tracking-[0.3em] text-[9px]"
              style={{ marginBottom: '2rem' }}
            >
              Links Rápidos
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-white/30 hover:text-white transition-all text-[11px] font-bold uppercase tracking-widest block"
                    style={{ paddingTop: '0.25rem', paddingBottom: '0.25rem' }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="legal-links-heading">
            <h4 
              id="legal-links-heading" 
              className="text-white font-black uppercase tracking-[0.3em] text-[9px]"
              style={{ marginBottom: '2rem' }}
            >
              Legal
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <button 
                    onClick={() => setActiveLegal(legalContent[link.name])}
                    className="text-white/30 hover:text-white transition-all text-[11px] font-bold uppercase tracking-widest block text-left w-full cursor-pointer"
                    style={{ paddingTop: '0.25rem', paddingBottom: '0.25rem' }}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
              <li 
                className="text-white/20 text-[9px] font-black uppercase tracking-widest"
                style={{ paddingTop: '0.75rem' }}
              >
                CNPJ: 13.898.791/0001-60
              </li>
            </ul>
          </nav>
        </div>

        <div 
          className="border-t border-white/5 flex flex-col md:flex-row justify-center items-center"
          style={{ paddingTop: '2.5rem', gap: '1.5rem' }}
        >
          <p className="text-white/20 text-[9px] font-black uppercase tracking-[0.2em]">
            © {currentYear} Promova Produções. Todos os direitos reservados.
          </p>
        </div>
      </div>

      <LegalModal 
        isOpen={!!activeLegal}
        onClose={() => setActiveLegal(null)}
        section={activeLegal}
        isMobile={isMobile}
      />
    </footer>
  );
};

export default Footer;

