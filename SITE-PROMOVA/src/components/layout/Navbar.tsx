import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useWindowSize } from '../../hooks/useWindowSize';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { width } = useWindowSize();
  const isMobile = width < 768;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'glass' : 'bg-transparent'
      }`}
      style={{ 
        paddingTop: isScrolled ? (isMobile ? '0.5rem' : '0.75rem') : (isMobile ? '1rem' : '1.5rem'),
        paddingBottom: isScrolled ? (isMobile ? '0.5rem' : '0.75rem') : (isMobile ? '1rem' : '1.5rem')
      }}
    >
      <div 
        className="mx-auto flex justify-between items-center"
        style={{ 
          maxWidth: isMobile ? '100%' : '95%',
          paddingLeft: isMobile ? '1rem' : '1.5rem', 
          paddingRight: isMobile ? '1rem' : '1.5rem' 
        }}
      >
        <a 
          href="#home" 
          className="flex items-center group"
          style={{ gap: isMobile ? '0.5rem' : '1rem' }}
        >
          <img 
            src="/assets/imgs/logo.png" 
            alt="Promova Logo" 
            className="rounded-full group-hover:scale-110 transition-transform duration-500" 
            style={{ 
              height: isMobile ? '2.5rem' : '4rem', 
              width: isMobile ? '2.5rem' : '4rem' 
            }}
          />
          <span 
            className="font-black font-montserrat tracking-tighter rainbow-text"
            style={{ fontSize: isMobile ? '1.25rem' : '1.875rem' }}
          >
            PROMOVA PRODUÇÕES
          </span>
        </a>

        {/* Desktop Menu */}
        <div 
          className="hidden md:flex items-center"
          style={{ gap: width < 1024 ? '1.5rem' : '2.5rem' }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-bold uppercase tracking-widest text-white/50 hover:text-white transition-all relative group"
            >
              {link.name}
              <span 
                className="absolute left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"
                style={{ bottom: '-0.5rem' }}
              ></span>
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-white text-black text-[10px] font-black uppercase tracking-widest hover:bg-white/90 transition-all hover:scale-105 active:scale-95"
            style={{ padding: '0.75rem 1.5rem' }}
          >
            Falar com Especialista
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white glass rounded-xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{ padding: '0.5rem' }}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden glass absolute top-full left-0 w-full flex flex-col items-center animate-in slide-in-from-top duration-500"
          style={{ paddingTop: '2rem', paddingBottom: '2rem', gap: '1.5rem' }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-black uppercase tracking-widest text-white/70 hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-white text-black font-black uppercase tracking-widest text-sm"
            style={{ paddingLeft: '2rem', paddingRight: '2rem', paddingTop: '0.75rem', paddingBottom: '0.75rem' }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Falar com Especialista
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
