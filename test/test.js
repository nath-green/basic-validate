const assert = require('chai').assert
const Validate = require('../src/index')

describe('isEmpty', () => {
  it('Value is empty', () => {
    let result = Validate.isEmpty('')
    assert.equal(result, true)
  })

  it('Value is not empty', () => {
    let result = Validate.isEmpty('hello')
    assert.equal(result, false)
  })
})
