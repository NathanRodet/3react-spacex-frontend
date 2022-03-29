import getLaunchById from './api/getLaunchById';
const id = 1
const fakeUserResponse = { 'data': 'response' };

describe('Test check', () => {
  function sum(a, b) {
    return a + b;
  }

  test('also should equal 4', () => {
    expect(sum(2, 2)).toBe(4);
  })
});

describe('APITest check', () => {
  const APIgetLaunchById = async () => {
    const x = await getLaunchById(id);
    return x
  }

  it('should be array', () => {
    expect(APIgetLaunchById(id)).toBe([]);
  })

  test('should also be array', () => {
    expect(APIgetLaunchById(id)).toBe([]);
  })
});