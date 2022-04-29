/* eslint-disable */
import { render, screen } from '@testing-library/react';
import ViewsFigLeft from './ViewsFigLeft';
import leftFig from '../../../figures/views-Parking-bro.svg';

test('renders text', () => {
  const title = 'El problema';
  const figure = leftFig;
  const text = 'Cualquier texto';

  render(<ViewsFigLeft title={title} figure={figure} text={text} />);
  expect(screen.getByText(title)).toBeInTheDocument();
});
