const { calculator } = require('./script.js')

describe('The calculator', () => {
  test('2 + 2 is 4', () => {
    expect(calculator.add(2, 2)).toBe(4);
  }),
  
  test('2 - 2 is 0', () => {
    expect(calculator.subtract(2, 2)).toBe(0)
  })

  test('2 / 2 is 1', () => {
    expect(calculator.divide(2, 2)).toBe(1)
  })

  test('2 * 2 is 4', () => {
    expect(calculator.multiply(2, 2)).toBe(4)
  })
});