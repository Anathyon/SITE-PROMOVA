import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Footer from '../../../components/layout/Footer';

describe('Footer Component', () => {
  it('renders the logo with correct alt text', () => {
    render(<Footer />);
    const logo = screen.getByAltText(/Promova Logo/i);
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '/assets/icons/icon-promova.png');
  });

  it('renders the brand name', () => {
    render(<Footer />);
    expect(screen.getByText(/PROMOVA/i)).toBeInTheDocument();
  });

  it('renders all social media links with correct aria-labels', () => {
    render(<Footer />);
    const socialLabels = ['Instagram', 'Facebook', 'Youtube', 'Linkedin'];
    socialLabels.forEach(label => {
      const link = screen.getByLabelText(label);
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  it('renders quick navigation links', () => {
    render(<Footer />);
    const navLinks = ['Início', 'Serviços', 'Portfólio', 'Sobre', 'Contato'];
    navLinks.forEach(linkText => {
      expect(screen.getByText(linkText)).toBeInTheDocument();
    });
  });

  it('renders legal links', () => {
    render(<Footer />);
    const legalLinks = ['Termos de Uso', 'Privacidade', 'Cookies', 'LGPD'];
    legalLinks.forEach(linkText => {
      expect(screen.getByText(linkText)).toBeInTheDocument();
    });
  });

  it('displays the CNPJ', () => {
    render(<Footer />);
    expect(screen.getByText(/CNPJ: 13.898.791\/0001-60/i)).toBeInTheDocument();
  });

  it('displays the current year in copyright', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(currentYear))).toBeInTheDocument();
  });

  it('renders the developer link', () => {
    render(<Footer />);
    const devLink = screen.getByText(/Youware/i);
    expect(devLink).toBeInTheDocument();
    expect(devLink.closest('a')).toHaveAttribute('href', 'https://youware.com.br');
  });
});
