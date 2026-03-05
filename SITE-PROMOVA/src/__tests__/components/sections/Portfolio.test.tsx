import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Portfolio from '../../../components/sections/Portfolio';

// Mock useWindowSize
vi.mock('../../../hooks/useWindowSize', () => ({
  useWindowSize: () => ({ width: 1200, height: 800 }),
}));

describe('Portfolio Component', () => {
  it('renders the portfolio title', () => {
    render(<Portfolio />);
    expect(screen.getByText(/NOSSO/i)).toBeInTheDocument();
    expect(screen.getByText(/PORTFÓLIO/i)).toBeInTheDocument();
  });

  it('renders all project cards', () => {
    render(<Portfolio />);
    const projectTitles = [
      'II Exposição da Agricultura Familiar',
      'Projeto Mandalla - Piscicultura',
      'Ceará Ciclo Natalino 2024',
      'TV de Rua - Instituto Tapuia',
      'Institucional Meruoca Região Norte',
      'Festival Cine Ceará'
    ];
    
    projectTitles.forEach(title => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });

  it('opens modal when a project card is clicked', () => {
    render(<Portfolio />);
    const projectCard = screen.getByText('II Exposição da Agricultura Familiar');
    fireEvent.click(projectCard);
    
    // Check if modal content appears
    expect(screen.getByText(/Agosto 2025/i)).toBeInTheDocument();
  });
});
