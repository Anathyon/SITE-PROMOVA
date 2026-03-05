import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import About from '../../../components/sections/About';

// Mock useWindowSize
vi.mock('../../../hooks/useWindowSize', () => ({
  useWindowSize: () => ({ width: 1200, height: 800 }),
}));

describe('About Component', () => {
  it('renders the main typography elements', () => {
    render(<About />);
    expect(screen.getByText(/PAIXÃO POR/i)).toBeInTheDocument();
    expect(screen.getByText(/CONTAR HISTÓRIAS/i)).toBeInTheDocument();
  });

  it('renders the statistics', () => {
    render(<About />);
    expect(screen.getByText('500+')).toBeInTheDocument();
    expect(screen.getByText('Projetos Entregues')).toBeInTheDocument();
    expect(screen.getByText('10+')).toBeInTheDocument();
    expect(screen.getByText('Anos de Experiência')).toBeInTheDocument();
  });

  it('renders the highlights', () => {
    render(<About />);
    expect(screen.getByText('Equipamentos de última geração (4K/8K)')).toBeInTheDocument();
  });
});
