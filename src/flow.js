'use strict'

const isRuleValid = ({ id, body }) => id != null && body != null

const areRulesValid = (rules) => Array.isArray(rules) && rules.every(isRuleValid)

const logStyled = (color) => (str) => console.log(`%c ${str}`, `color: ${color}; font-size: 1.5em`)

const logInfo = logStyled('rebeccapurple')

const logPass = logStyled('limegreen')

const logFail = logStyled('orangered')

const parseRule = ({ id, body, true_id, false_id }) => ({
  id,
  trueId: true_id,
  falseId: false_id,
  func: eval(`(${body})`)
})

const parseRules = (rules) => rules.map(parseRule)

const initFlow = (rules, input, ruleId = 1) => {
  logInfo('Flow started...')

  let nextRuleId = ruleId
  const result = {}
  while (nextRuleId != null) {
    const rule = rules.find((rule) => rule.id === nextRuleId)
    result[rule.id] = rule.func(input)

    if (result[rule.id] === true) {
      logPass(`Rule #${rule.id} passed.`)
      nextRuleId = rule.trueId
    } else {
      logFail(`Rule #${rule.id} failed.`)
      nextRuleId = rule.falseId
    }
  }

  logInfo('Flow completed!')
  return result
}

module.exports = {
  isRuleValid,
  areRulesValid,
  parseRules,
  initFlow
}
