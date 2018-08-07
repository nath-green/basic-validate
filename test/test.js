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

describe('isZero', () => {
  it('Value is zero', () => {
    let result = Validate.isZero(0)
    assert.equal(result, true)
  })

  it('Value is not zero', () => {
    let result = Validate.isZero(12)
    assert.equal(result, false)
  })
})

describe('charsBetween', () => {
  it('Characters within min & max', () => {
    let result = Validate.charsBetween('hello', 1, 5)
    assert.equal(result, true)
  })

  it('Characters outside min & max', () => {
    let result = Validate.charsBetween('hello', 2, 4)
    assert.equal(result, false)
  })
})

describe('isEmail', () => {
  it('Email is valid', () => {
    let result = Validate.isEmail('hello@nathgreen.co.uk')
    assert.equal(result, true)
  })

  it('Email is invalid', () => {
    let result = Validate.isEmail('hello@')
    assert.equal(result, false)
  })
})

describe('isTelephone', () => {
  it('Telephone is valid', () => {
    let result = Validate.isTelephone('077123456789')
    assert.equal(result, true)
  })

  it('Telephone is invalid', () => {
    let result = Validate.isTelephone('123')
    assert.equal(result, false)
  })
})

describe('isEqual', () => {
  it('Params are equal', () => {
    let result = Validate.isEqual('password', 'password')
    assert.equal(result, true)
  })

  it('Params not equal', () => {
    let result = Validate.isEqual('password', 'passw0rd')
    assert.equal(result, false)
  })
})
