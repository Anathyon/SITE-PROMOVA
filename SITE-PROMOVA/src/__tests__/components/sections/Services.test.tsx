import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Services from '../../../components/sections/Services';

vi.mock('../../../hooks/useWindowSize', () => ({
  useWindowSize: () => ({ width: 1200, height: 800 }),
}));

describe('Services Component', () => {
  it('renders the services title', () => {
    render(<Services />);
    expect(screen.getByText(/NOSSOS/i)).toBeInTheDocument();
    expect(screen.getByText(/SERVIÇOS/i)).toBeInTheDocument();
  });

  it('renders service items', () => {
    render(<Services />);
    expect(screen.getByText('Produção de Vídeo')).toBeInTheDocument();
  });
});
