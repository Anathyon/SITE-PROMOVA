import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Hero from '../../../components/sections/Hero';

vi.mock('../../../hooks/useWindowSize', () => ({
  useWindowSize: () => ({ width: 1200, height: 800 }),
}));

describe('Hero Component', () => {
  it('renders correctly', () => {
    render(<Hero />);
    expect(screen.getByText(/TRANSFORMAMOS/i)).toBeInTheDocument();
  });
});
