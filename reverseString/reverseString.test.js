const reverseString = require('./reverseString');

test('works with normal strings', () => {
  expect(reverseString('string')).toMatch('gnirts');
});

test(('empty string is returns false'), () => {
  expect(reverseString('')).toEqual(false);
})

test('works with spaces', () => {  
  expect(reverseString('this is a boy')).toMatch('yobasisiht');
});

test('works with characters', () => {  
  expect(reverseString('is this a boy? Great!!')).toMatch('taerGyobasihtsi');
});