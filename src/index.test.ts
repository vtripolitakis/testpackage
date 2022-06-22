const lala = require('../dist/index');

const { vaggelis, tripolitakis } = lala;

test('TEST vaggelis', () => {
  const testValue = vaggelis();
  expect(testValue).toBe('Vaggelis');
});

test('TEST tripolitakis', () => {
  const testValue = tripolitakis();
  expect(testValue).toBe('Tripolitakis');
});
