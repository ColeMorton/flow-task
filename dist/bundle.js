/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rules__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__rules__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__input__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flow__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flow___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__flow__);






// ensure the rules are valid
if (!Object(__WEBPACK_IMPORTED_MODULE_2__flow__["areRulesValid"])(__WEBPACK_IMPORTED_MODULE_0__rules___default.a)) throw new Error('rules are invalid')

// start the flow process
Object(__WEBPACK_IMPORTED_MODULE_2__flow__["initFlow"])(Object(__WEBPACK_IMPORTED_MODULE_2__flow__["parseRules"])(__WEBPACK_IMPORTED_MODULE_0__rules___default.a), __WEBPACK_IMPORTED_MODULE_1__input___default.a, 1)


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = [{"id":1,"body":"function a(arg) {return arg.color != null && arg.color === \"red\"}","true_id":3,"false_id":2},{"id":2,"body":"function a(arg) {return arg.color != null && arg.color === \"blue\"}","true_id":3,"false_id":null},{"id":3,"body":"function a(arg) {return arg.size != null && arg.size === \"small\"}","true_id":null,"false_id":4},{"id":4,"body":"function a(arg) {return arg.hasBorder === true}","true_id":null,"false_id":null}]

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = {"color":"red"}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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


/***/ })
/******/ ]);