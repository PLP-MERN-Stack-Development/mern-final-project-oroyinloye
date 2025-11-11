import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Register from '../Register';

test('shows error when fields are empty', () => {
  render(<Register />);
  fireEvent.click(screen.getByRole('button', { name: /Sign Up/i }));
});
