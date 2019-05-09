module.exports =
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _moment = __webpack_require__(1);

var _moment2 = _interopRequireDefault(_moment);

var _accounting = __webpack_require__(2);

var _accounting2 = _interopRequireDefault(_accounting);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  /**
   * 重点函数，别的地方只需调用这一个函数即可
   * formatter.format(value,format)
   * 此处format为引用传递，不能直接修改他
   * @param {*} value 要格式化的值
   * @param {*} format 格式
   */
  format: function format(value) {
    var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'text';

    var fn = void 0,
        params = void 0;

    if (Array.isArray(format)) {
      if (format.length === 0) {
        throw new Error('format 数组必须包含一个元素');
      }

      params = format.slice();
      fn = params[0];
      params[0] = value;
    } else {
      fn = format;
      params = [value];
    }

    fn = fn.split('').map(function (c, i) {
      if (i === 0) return c.toUpperCase();
      return c;
    }).join('');

    fn = 'as' + fn;

    if (!this[fn]) {
      // console.log(fn, value, format)
    }

    return this[fn].apply(null, params);
  },
  asText: function asText(value) {
    if (value === null || value === undefined) return '';

    // 数组或者对象类型返回json格式字符串
    if (Array.isArray(value) || (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === _typeof({})) return JSON.stringify(value);

    // 其余类型 string,number,boolean 都调用toString方法返回
    return value.toString();
  },
  asDate: function asDate(value) {
    var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Y-MM-DD';

    return (0, _moment2.default)(value).format(format);
  },
  asTime: function asTime(value) {
    var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'HH:mm:ss';

    return (0, _moment2.default)(value).format(format);
  },
  asDateTime: function asDateTime(value) {
    return this.asDate(value) + ' ' + this.asTime(value);
  },
  asCurrency: function asCurrency(value) {
    var symbol = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '￥ ';
    var precision = arguments[2];
    var thousand = arguments[3];
    var decimal = arguments[4];
    var format = arguments[5];

    if (!value) return;
    return _accounting2.default.formatMoney(value, symbol, precision, thousand, decimal, format);
  },


  /**
   * 
   * @param {Number} value 
   * @param {Number} decimals 小数点后的个数，默认2
   */
  asDecimal: function asDecimal(value) {
    var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    var thousand = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ',';

    return _accounting2.default.formatNumber(value, decimals, thousand);
  },
  asPercent: function asPercent(value) {
    var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    value *= 100;
    return value.toFixed(decimals) + '%';
  }
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("accounting");

/***/ })
/******/ ]);