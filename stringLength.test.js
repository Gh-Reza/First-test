const { stringLength } = require('./script')

test('String "string" character count is 6', () => {
  expect(stringLength('string')).toBe(6)
})