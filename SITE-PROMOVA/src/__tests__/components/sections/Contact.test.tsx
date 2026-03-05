import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Contact from '../../../components/sections/Contact';

// Mock useWindowSize
vi.mock('../../../hooks/useWindowSize', () => ({
  useWindowSize: () => ({ width: 1200, height: 800 }),
}));

describe('Contact Component', () => {
  it('renders the typography elements and contact info', () => {
    render(<Contact />);
    expect(screen.getByText(/VAMOS/i)).toBeInTheDocument();
    expect(screen.getByText(/PROMOVER/i)).toBeInTheDocument();
    expect(screen.getByText(/SEU NEGÓCIO\?/i)).toBeInTheDocument();
    expect(screen.getByText('contato@promovaproducoes.com')).toBeInTheDocument();
  });

  it('renders the form fields', () => {
    render(<Contact />);
    expect(screen.getByPlaceholderText('Seu nome completo')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('seu@email.com')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Conte-nos um pouco sobre seu projeto...')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Enviar Mensagem/i })).toBeInTheDocument();
  });

  it('shows validation errors on empty submit', async () => {
    render(<Contact />);
    const submitBtn = screen.getByRole('button', { name: /Enviar Mensagem/i });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText('Nome deve ter pelo menos 3 caracteres')).toBeInTheDocument();
      expect(screen.getByText('E-mail inválido')).toBeInTheDocument();
      expect(screen.getByText('A mensagem deve ter pelo menos 10 caracteres')).toBeInTheDocument();
    });
  });
});
