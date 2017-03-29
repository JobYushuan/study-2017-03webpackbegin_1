/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(3);

var _big = __webpack_require__(4);

var _big2 = _interopRequireDefault(_big);

var _small = __webpack_require__(5);

var _small2 = _interopRequireDefault(_small);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var image1 = document.createElement('img');
image1.src = "http://lorempixel.com/400/400";
document.body.appendChild(image1);

var image2 = document.createElement('img');
image2.src = _small2.default;
document.body.appendChild(image2);

var image3 = document.createElement('img');
image3.src = _big2.default;
document.body.appendChild(image3);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var sum = function sum(a, b) {
  return a + b;
};

exports.default = sum;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9773cdcb44ba3a832556a98f47fe138f.jpg";

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _sum = __webpack_require__(1);

var _sum2 = _interopRequireDefault(_sum);

__webpack_require__(0);

__webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log((0, _sum2.default)(1, 3));

/***/ })
/******/ ]);