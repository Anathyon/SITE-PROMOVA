import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import CTA from '../../../components/sections/CTA';

describe('CTA Component', () => {
  it('renders title and description', () => {
    render(<CTA />);
    expect(screen.getByText(/PRONTO PARA/i)).toBeInTheDocument();
    expect(screen.getByText(/TRANSFORMAR/i)).toBeInTheDocument();
    expect(screen.getByText(/SUA IDEIA EM VÍDEO/i)).toBeInTheDocument();
  });

  it('renders the "Falar com Especialista" link with correct href', () => {
    render(<CTA />);
    const link = screen.getByRole('link', { name: /Falar com Especialista/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '#contact');
  });

  it('renders the WhatsApp link with correct attributes', () => {
    render(<CTA />);
    const link = screen.getByRole('link', { name: /Entrar em contato via WhatsApp/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://wa.me/5588994368177');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('contains the expected icons', () => {
    const { container } = render(<CTA />);
    // Checking for lucide-react icons (they render as svg)
    const svgs = container.querySelectorAll('svg');
    expect(svgs.length).toBeGreaterThanOrEqual(2);
  });
});
