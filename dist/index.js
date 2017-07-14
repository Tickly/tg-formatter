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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_accounting__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_accounting___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_accounting__);





/* harmony default export */ __webpack_exports__["default"] = ({

    // 重点函数，别的地方只需调用这一个函数即可
    // formatter.format(value,format)
    // 此处format为引用传递，不能直接修改他
    format(value, format) {

        let fn, params;

        if (Array.isArray(format)) {
            if (format.length === 0) {
                throw new Error('format 数组必须包含一个元素')
            }
            // console.log(JSON.stringify(format));
            params = format.slice();
            fn = params[0];
            params[0] = value;
        } else {
            fn = format;
            params = [value];
        }

        fn = fn.split('').map((c, i) => {
            if (i === 0) return c.toUpperCase()
            return c;
        }).join('');

        fn = 'as' + fn;

        if (!this[fn]) {
            // console.log(fn, value, format)
        }

        return this[fn].apply(null, params);
    },

    asText(value) {
        return value
    },

    asDate(value, format = 'Y-MM-DD') {
        return __WEBPACK_IMPORTED_MODULE_0_moment___default()(value).format(format)
    },

    asTime(value, format = 'HH:mm:ss') {
        return __WEBPACK_IMPORTED_MODULE_0_moment___default()(value).format(format)
    },

    asCurrency(value) {
        if (!value) return;
        return __WEBPACK_IMPORTED_MODULE_1_accounting___default.a.formatMoney(value, '￥ ')
    },

    /**
     * 
     * @param {Number} value 
     * @param {Number} decimals 小数点后的个数，默认2
     */
    asDecimal(value, decimals = 2) {
        return __WEBPACK_IMPORTED_MODULE_1_accounting___default.a.formatNumber(value, decimals);
    },


    asPercent(value, decimals = 0) {
        value *= 100;
        return value.toFixed(decimals) + '%'
    },
});

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