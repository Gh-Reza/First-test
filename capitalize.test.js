const { capitalize } = require('./script.js')

test('The capitalized string of "string" should be "String"', () => {
  expect(capitalize('string')).toBe('String')
})