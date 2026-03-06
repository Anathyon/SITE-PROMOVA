import React from 'react';
import { Instagram, Facebook, Youtube, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
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
    <footer className="bg-dark-lighter pt-24 pb-12 border-t border-white/5" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Rodapé</h2>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-5 mb-8">
              <img 
                src="/assets/icons/icon-promova.png" 
                alt="Promova Logo" 
                className="h-14 w-14 rounded-full border border-white/10" 
                loading="lazy"
              />
              <span className="text-2xl font-black tracking-tighter rainbow-text">PROMOVA</span>
            </div>
            <p className="text-white/30 max-w-sm mb-10 leading-relaxed text-base font-medium">
              Especialistas em transformar ideias em narrativas visuais de alto impacto. 
              Sua marca merece ser promovida com excelência.
            </p>
            <div className="flex gap-5">
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
            <h4 id="quick-links-heading" className="text-white font-black mb-8 uppercase tracking-[0.3em] text-[9px]">Links Rápidos</h4>
            <ul className="space-y-5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-white/30 hover:text-white transition-all text-[11px] font-bold uppercase tracking-widest block py-1"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="legal-links-heading">
            <h4 id="legal-links-heading" className="text-white font-black mb-8 uppercase tracking-[0.3em] text-[9px]">Legal</h4>
            <ul className="space-y-5">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-white/30 hover:text-white transition-all text-[11px] font-bold uppercase tracking-widest block py-1"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="text-white/20 text-[9px] font-black uppercase tracking-widest pt-3">
                CNPJ: 13.898.791/0001-60
              </li>
            </ul>
          </nav>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-[9px] font-black uppercase tracking-[0.2em]">
            © {currentYear} Promova Produções. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
