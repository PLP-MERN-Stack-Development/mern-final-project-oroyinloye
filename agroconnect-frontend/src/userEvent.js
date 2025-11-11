import userEvent from '@testing-library/user-event';

test('fills and submits form', async () => {
  render(<Register />);
  await userEvent.type(screen.getByPlaceholderText(/Name/i), 'Richard');
  await userEvent.type(screen.getByPlaceholderText(/Email/i), 'richard@example.com');
  await userEvent.type(screen.getByPlaceholderText(/Password/i), 'securepass');
  await userEvent.click(screen.getByRole('button', { name: /Sign Up/i }));
});
export default userEvent;
