import { Instagram, Facebook, Youtube, Linkedin } from 'lucide-react';
import { useWindowSize } from '../../hooks/useWindowSize';

const Footer: React.FC = () => {
  const { width } = useWindowSize();
  const isMobile = width < 768;
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { Icon: Instagram, href: 'https://instagram.com/pro.movaproducoes/', label: 'Instagram' },
    { Icon: Facebook, href: 'https://facebook.com/promovaproducoes', label: 'Facebook' },
    { Icon: Youtube, href: 'https://www.youtube.com/c/PromovaProdu%C3%A7%C3%B5es/videos', label: 'Youtube' },
    { Icon: Linkedin, href: '#', label: 'Linkedin' }
  ];

  const quickLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Serviços', href: '#services' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Sobre', href: '#about' },
    { name: 'Contato', href: '#contact' }
  ];

  const legalLinks = [
    { name: 'Termos de Uso', href: '#' },
    { name: 'Privacidade', href: '#' },
    { name: 'Cookies', href: '#' },
    { name: 'LGPD', href: '#' }
  ];

  return (
    <footer 
      className="bg-dark-lighter border-t border-white/5" 
      aria-labelledby="footer-heading"
      style={{ 
        paddingTop: isMobile ? '4rem' : '6rem', 
        paddingBottom: isMobile ? '2.5rem' : '3rem' 
      }}
    >
      <h2 id="footer-heading" className="sr-only">Rodapé</h2>
      <div 
        className="max-w-7xl mx-auto"
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
          <div className="lg:col-span-2">
            <div 
              className="flex items-center"
              style={{ gap: '1.25rem', marginBottom: '2rem' }}
            >
              <img 
                src="/assets/icons/icon-promova.png" 
                alt="Promova Logo" 
                className="h-14 w-14 rounded-full border border-white/10" 
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
                  <a 
                    href={link.href} 
                    className="text-white/30 hover:text-white transition-all text-[11px] font-bold uppercase tracking-widest block"
                    style={{ paddingTop: '0.25rem', paddingBottom: '0.25rem' }}
                  >
                    {link.name}
                  </a>
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
          className="border-t border-white/5 flex flex-col md:flex-row justify-between items-center"
          style={{ paddingTop: '2.5rem', gap: '1.5rem' }}
        >
          <p className="text-white/20 text-[9px] font-black uppercase tracking-[0.2em]">
            © {currentYear} Promova Produções. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
