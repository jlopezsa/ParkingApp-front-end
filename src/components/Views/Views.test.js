/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import Views from './Views';

test('renders text', () => {
  render(<Views />);
  expect(screen.getByText(/El problema/i)).toBeInTheDocument();
  expect(screen.getByText(/¿Qué hacemos?/i)).toBeInTheDocument();
  expect(screen.getByText(/¿Cómo lo hacemos?/i)).toBeInTheDocument();
  expect(screen.getByText(/¿Y los parquaderos?/i)).toBeInTheDocument();
  expect(screen.getByText(/Proximamente.../i)).toBeInTheDocument();
});
