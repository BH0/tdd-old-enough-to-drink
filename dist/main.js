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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./api.json":
/*!******************!*\
  !*** ./api.json ***!
  \******************/
/*! exports provided: countries, default */
/***/ (function(module) {

eval("module.exports = {\"countries\":{\"spain\":\"17\",\"america\":\"21\",\"uk\":\"18\"}};\n\n//# sourceURL=webpack:///./api.json?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const { countries } = __webpack_require__(/*! ./api */ \"./api.json\"); \r\nconst { confirmDrinkingAge } = __webpack_require__(/*! ./util */ \"./util.js\"); \r\n\r\n(() => { \r\n    window.onload = () => { \r\n        /// Pre-existing Elements \r\n        const countryInputEl = document.querySelector(\"#country\"); \r\n        const userAgeInputEl = document.querySelector(\"#user-age\"); \r\n        const confirmEl = document.querySelector(\"button\"); \r\n        const resultEl = document.querySelectorAll(\"result\")[\"strong\"]; \r\n    \r\n        confirmEl.addEventListener(\"click\", e => { \r\n            let paragraphEl = document.createElement(\"p\"); \r\n            let output = document.createTextNode(`\\n${confirmDrinkingAge(countryInputEl.value, userAgeInputEl.value)}`); \r\n            paragraphEl.appendChild(output);  \r\n            // paragraphEl.classList.add(\"user-output\"); \r\n            document.body.insertBefore(paragraphEl, resultEl); \r\n        }); \r\n    } \r\n})(); \n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./util.js":
/*!*****************!*\
  !*** ./util.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const { countries } = __webpack_require__(/*! ./api */ \"./api.json\"); \r\n\r\nexports.confirmDrinkingAge = (country, age) => { \r\n    if (countries[country]) { \r\n        if (age >= countries[country]) { \r\n            return `you are old enough to drink in ${country}`; \r\n        } else { \r\n            return `you are not old enough to drink in ${country}`;\r\n        }\r\n    } else { \r\n        return `I am unaware of ${country}`; \r\n    }\r\n} \r\n\r\n\n\n//# sourceURL=webpack:///./util.js?");

/***/ }),

/***/ 0:
/*!*********************************!*\
  !*** multi ./util.js ./main.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! C:\\Users\\User\\webapps\\react\\uptodate\\tdd-old-enough-to-drink\\util.js */\"./util.js\");\nmodule.exports = __webpack_require__(/*! C:\\Users\\User\\webapps\\react\\uptodate\\tdd-old-enough-to-drink\\main.js */\"./main.js\");\n\n\n//# sourceURL=webpack:///multi_./util.js_./main.js?");

/***/ })

/******/ });