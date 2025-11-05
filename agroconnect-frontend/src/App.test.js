import { render, screen } from '@testing-library/react';
import App from './App';

test('renders register heading and button', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /register/i });
  const button = screen.getByRole('button', { name: /register/i });
  expect(heading).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});