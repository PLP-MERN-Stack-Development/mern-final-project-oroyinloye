import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Register from './Register';

test('shows validation errors when fields are empty', async () => {
  render(<Register />);
  await userEvent.click(screen.getByRole('button', { name: /Sign Up/i }));
  expect(screen.getByText(/Name is required/i)).toBeInTheDocument();
  expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
  expect(screen.getByText(/Password is required/i)).toBeInTheDocument();
});

test('shows error for invalid email', async () => {
  render(<Register />);
  await userEvent.type(screen.getByPlaceholderText(/Name/i), 'Richard');
  await userEvent.type(screen.getByPlaceholderText(/Email/i), 'invalid-email');
  await userEvent.type(screen.getByPlaceholderText(/Password/i), 'securepass');
  await userEvent.click(screen.getByRole('button', { name: /Sign Up/i }));
  expect(screen.getByText(/Email is invalid/i)).toBeInTheDocument();
});