const stringLength = require('./stringLength');


test('string should return true if more than  or equal to 1', () => {
  expect(stringLength('string')).toEqual(true);
});

test(('empty string is returns false'), () => {
  expect(stringLength('')).toEqual(false);
})

test('longer than 10 characters', () => {  
  expect(stringLength('appreciation')).toEqual(false);
});

test('equal to 10 characters', () => {
  expect(stringLength('strayberry')).toEqual(true);
});

test('should not include spacing equal to 10', () => {
  expect(stringLength('this is a boy')).toEqual(true);
});

test('should not include spacing not equal to 10', () => {
  expect(stringLength('this is a boy with a toy')).toEqual(false);
});
