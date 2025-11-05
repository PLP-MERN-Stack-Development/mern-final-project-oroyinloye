import { render, screen } from '@testing-library/react';
import Login from './Login'; // assuming Login.js is in same folder

test('renders login form', () => {
  render(<Login />);
  expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
});