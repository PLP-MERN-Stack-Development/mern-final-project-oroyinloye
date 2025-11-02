// ProductCard.test.jsx
import { render, screen } from '@testing-library/react';
import ProductCard from './ProductCard';

test('renders product name and price', () => {
  render(<ProductCard name="Tomatoes" price={500} />);
  expect(screen.getByText(/Tomatoes/i)).toBeInTheDocument();
  expect(screen.getByText(/₦500/i)).toBeInTheDocument();
});
