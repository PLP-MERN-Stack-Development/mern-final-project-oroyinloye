// utils/calculateTotal.js
export const calculateTotal = (price, quantity) => price * quantity;

// utils/calculateTotal.test.js
import { calculateTotal } from './calculateTotal';

test('calculates total correctly', () => {
  expect(calculateTotal(500, 3)).toBe(1500);
});
