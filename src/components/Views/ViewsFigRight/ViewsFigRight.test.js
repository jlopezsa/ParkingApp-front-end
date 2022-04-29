/* eslint-disable */
import { render, screen } from '@testing-library/react';
import ViewsFigRight from './ViewsFigRight';
import rigthFig from '../../../figures/views-navigator-cuate.svg';

test('renders text', () => {
  const title = '¿Qué hacemos?¿Qué hacemos?';
  const figure = rigthFig;
  const text = 'Cualquier texto';

  render(<ViewsFigRight title={title} figure={figure} text={text} />);
  expect(screen.getByText(title)).toBeInTheDocument();
});
