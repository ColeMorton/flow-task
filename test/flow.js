const assert = require('assert');

const { isRuleValid, areRulesValid, parseRules, initFlow } = require('../src/flow.js')

const validRules = require('./rules-mock.json')
const validRule = validRules[0]

const invalidRule = { id: 1, body: null }
const invalidRules = [ invalidRule ]

const validInput = require('./input-mock.json')

describe('isRuleValid', function() {
  it('should return true if rule is valid', function() {
    assert.equal(isRuleValid(validRule), true)
  })

  it('should return false if rule is invalid', function() {
    assert.equal(isRuleValid(invalidRule), false)
  })
})

describe('areRulesValid', function() {
  it('should return true if all rules are valid', function() {
    assert.equal(areRulesValid(validRules), true)
  })

  it('should return false if a rule is invalid', function() {
    assert.equal(areRulesValid(invalidRules), false)
  })
})

describe('areRulesValid', function() {
  it('should return true if all rules are valid', function() {
    assert.equal(areRulesValid(validRules), true)
  })

  it('should return false if a rule is invalid', function() {
    assert.equal(areRulesValid(invalidRules), false)
  })
})

describe('parseRules', function() {
  it('should parse the rules json', function() {
    const parsedRules = parseRules(validRules)
    assert.equal(parsedRules[0].id, 1)
    assert.equal(typeof parsedRules[0].func, 'function')
  })
})

describe('initFlow', function() {
  it('should return the correct result', function() {
    const parsedRules = parseRules(validRules)
    assert.deepEqual(initFlow(parsedRules, validInput, 1), { '1': true, '3': false, '4': false })
  })
})
