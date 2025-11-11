import React from 'react';
import { render, screen, act } from '@testing-library/react';
import Dashboard from './Dashboard';

const listeners = {};

jest.mock('../socket', () => ({
  on: (event, callback) => {
    listeners[event] = callback;
  },
  off: jest.fn(),
  emit: jest.fn(),
  disconnect: jest.fn()
}));

test('renders incoming message', async () => {
  render(<Dashboard />);

  // ✅ Wrap the state update in act() properly
  await act(async () => {
    listeners.receiveMessage('Hello Richard');
  });

  const message = await screen.findByText(/Hello Richard/i);
  expect(message).toBeInTheDocument();
});