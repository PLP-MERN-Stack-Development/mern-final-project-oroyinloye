import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// ✅ Mock socket before importing App
jest.mock('./socket', () => ({
  on: jest.fn(),
  off: jest.fn(),
  emit: jest.fn(),
  disconnect: jest.fn()
}));

import App from './App';

test('renders register heading and button', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /Register/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Sign Up/i })).toBeInTheDocument();
});
