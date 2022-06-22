/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
const team = require('../dist/index');

const { john, doe } = team;

test('TEST john', () => {
  const testValue = john();
  expect(testValue).toBe('John');
});

test('TEST doe', () => {
  const testValue = doe();
  expect(testValue).toBe('Doe');
});
