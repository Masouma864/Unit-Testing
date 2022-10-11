const calculator = require('./calculator');

describe('test calculator functions', () => {
  test('test addition', () => {
    // Arrange
    const a = 1;
    const b = 85;

    // Act 
    let calc = new calculator();

    // Assert
    const answer = +a+b;
    expect(calc.add(a, b)).toBe(answer)
  }), 

  test('test subtraction', () => {
    // Arrange
    const a = 1;
    const b = 85;

    // Act 
    let calc = new calculator();

    // Assert
    const answer = a-b;
    expect(calc.subtract(a, b)).toBe(answer)
  }),

  test('test multiplication', () => {
    // Arrange
    const a = 1;
    const b = 85;

    // Act 
    let calc = new calculator();

    // Assert
    const answer = a*b;
    expect(calc.multiply(a, b)).toBe(answer)
  }), 

  test('test division', () => {
    // Arrange
    const a = 1;
    const b = 85;

    // Act 
    let calc = new calculator();
    let result = calc.divide(a, b);

    // Assert
    const answer = a/b;
    expect(result).toBe(answer)
  })
  
})

