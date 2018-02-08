'use strict'

import rules from './rules'
import input from './input'
import { areRulesValid, parseRules, initFlow } from './flow'

// ensure the rules are valid
if (!areRulesValid(rules)) throw new Error('rules are invalid')

// start the flow process
initFlow(parseRules(rules), input, 1)
