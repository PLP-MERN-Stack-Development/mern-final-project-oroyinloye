// utils/calculateTotal.js
export const calculateTotal = (price, quantity) => price * quantity;

// utils/calculateTotal.test.js
import { calculateTotal } from './calculateTotal';

test('calculates total correctly', () => {
  expect(calculateTotal(500, 3)).toBe(1500);
});
test('returns 0 when quantity is 0', () => {
  expect(calculateTotal(500, 0)).toBe(0);
});
test('returns 0 when price is 0', () => {
  expect(calculateTotal(0, 5)).toBe(0);
});   
test('handles negative values', () => {
  expect(calculateTotal(-500, 3)).toBe(-1500);
  expect(calculateTotal(500, -3)).toBe(-1500);
});
// utils/calculateTotal.test.js
import { calculateTotal } from './calculateTotal';

test('calculates total correctly', () => {
  expect(calculateTotal(500, 3)).toBe(1500);
});
test('returns 0 when quantity is 0', () => {
  expect(calculateTotal(500, 0)).toBe(0);
});
test('returns 0 when price is 0', () => {
  expect(calculateTotal(0, 5)).toBe(0);
});   
test('handles negative values', () => {
  expect(calculateTotal(-500, 3)).toBe(-1500);
  expect(calculateTotal(500, -3)).toBe(-1500);
});