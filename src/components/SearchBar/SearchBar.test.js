/* eslint-disable */
import { render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';

test('Render test and buttons', () => {

  render(<SearchBar />);
  const buttonElement = screen.getByText(/Buscar/i);

  expect(buttonElement).toBeInTheDocument();

});
