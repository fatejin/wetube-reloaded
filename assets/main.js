/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/js/main.js":
/*!*******************************!*\
  !*** ./src/client/js/main.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/styles.scss */ \"./src/client/scss/styles.scss\");\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__);\n\nconsole.log(\"hi\");\n\n//# sourceURL=webpack://wetube/./src/client/js/main.js?");

/***/ }),

/***/ "./src/client/scss/styles.scss":
/*!*************************************!*\
  !*** ./src/client/scss/styles.scss ***!
  \*************************************/
/***/ (() => {

eval("throw new Error(\"Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\\nReferenceError: document is not defined\\n    at Object.insertStyleElement (webpack://wetube/./node_modules/style-loader/dist/runtime/insertStyleElement.js?:5:15)\\n    at Object.domAPI (webpack://wetube/./node_modules/style-loader/dist/runtime/styleDomAPI.js?:37:23)\\n    at addStyle (webpack://wetube/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?:53:21)\\n    at modulesToDom (webpack://wetube/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?:41:18)\\n    at module.exports (webpack://wetube/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?:71:25)\\n    at eval (webpack://wetube/./src/client/scss/styles.scss?./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js:39:120)\\n    at Object../node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/scss/styles.scss (/home/wetube/node_modules/style-loader/dist/cjs.js!/home/wetube/node_modules/css-loader/dist/cjs.js!/home/wetube/node_modules/sass-loader/dist/cjs.js!/home/wetube/src/client/scss/styles.scss:39:1)\\n    at __webpack_require__ (/home/wetube/node_modules/style-loader/dist/cjs.js!/home/wetube/node_modules/css-loader/dist/cjs.js!/home/wetube/node_modules/sass-loader/dist/cjs.js!/home/wetube/src/client/scss/styles.scss:123:41)\\n    at /home/wetube/node_modules/style-loader/dist/cjs.js!/home/wetube/node_modules/css-loader/dist/cjs.js!/home/wetube/node_modules/sass-loader/dist/cjs.js!/home/wetube/src/client/scss/styles.scss:175:37\\n    at Object.<anonymous> (/home/wetube/node_modules/style-loader/dist/cjs.js!/home/wetube/node_modules/css-loader/dist/cjs.js!/home/wetube/node_modules/sass-loader/dist/cjs.js!/home/wetube/src/client/scss/styles.scss:178:12)\");\n\n//# sourceURL=webpack://wetube/./src/client/scss/styles.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/client/js/main.js");
/******/ 	
/******/ })()
;