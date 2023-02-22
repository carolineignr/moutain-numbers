const mountainNumbers = require('./index');

test('correct order mountain numbers', () => {
  expect(mountainNumbers([0, 1, 2, 3, 1], 1, 0)).toBe(true);
  expect(mountainNumbers([0, 5, 6, 2, 1], 1, 0)).toBe(true);
})

test('insufficient array numbers', () => {
  expect(mountainNumbers([0, 1], 1, 0)).toBe(false);
})

test('duplicated numbers in array', () => {
  expect(mountainNumbers([0, 1, 1, 3], 1, 0)).toBe(false);
})

test('numbers in array has incorrect order', () => {
  expect(mountainNumbers([0, 2, 1, 3], 1, 0)).toBe(false);
})