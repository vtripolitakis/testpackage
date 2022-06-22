/* eslint-disable import/extensions */
// eslint-disable-next-line import/no-unresolved
import { john, doe } from '../src';

test('TEST john', () => {
  const testValue = john();
  expect(testValue).toBe('John');
});

test('TEST doe', () => {
  const testValue = doe();
  expect(testValue).toBe('Doe');
});
