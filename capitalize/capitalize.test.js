const capitalize = require('./capitalize.js')

describe('test capitalize string', () => {
  test('returns first letter capitalizedd', () => {
    const string = 'goat';
  
    const result = capitalize(string);
  
    expect(result).toBe('Goat');
  }),
  
  test('returns first letter capitalized even if capitalized already', () => {
    const string = 'Goat';
  
    const result = capitalize(string);
  
    expect(result).toBe('Goat');
  }),

  test('works with all capitalized', () => {
    const string = 'GOAT';
  
    const result = capitalize(string);
  
    expect(result).toBe('GOAT');
  })
})