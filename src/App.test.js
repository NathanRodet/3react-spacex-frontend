// Mes tests sont dans le back de l'app, promis.

describe('Test check', () => {
  function sum(a, b) {
    return a + b;
  }

  test('also should equal 4', () => {
    expect(sum(2, 2)).toBe(4);
  })
});

