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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/index.jsx":
/*!****************************************!*\
  !*** ./app/javascript/packs/index.jsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/ibrahimshaarawy/Desktop/sha3raair/sha3raair/app/javascript/packs/index.jsx: Unexpected token (9:41)\n\n   7 | import PropTypes from 'prop-types'\n   8 | import App from '../components/App.js'\n>  9 | import { Browser as Router, Route } from react-route-dom\n     |                                          ^\n  10 | // this is to use switch and route\n  11 | document.addEventListener('DOMContentLoaded', () => {\n  12 |   ReactDOM.render(\n    at Object._raise (/Users/ibrahimshaarawy/Desktop/sha3raair/sha3raair/node_modules/@babel/parser/lib/index.js:776:17)\n    at Object.raiseWithData (/Users/ibrahimshaarawy/Desktop/sha3raair/sha3raair/node_modules/@babel/parser/lib/index.js:769:17)\n    at Object.raise (/Users/ibrahimshaarawy/Desktop/sha3raair/sha3raair/node_modules/@babel/parser/lib/index.js:737:17)\n    at Object.unexpected (/Users/ibrahimshaarawy/Desktop/sha3raair/sha3raair/node_modules/@babel/parser/lib/index.js:9668:16)\n    at Object.parseImportSource (/Users/ibrahimshaarawy/Desktop/sha3raair/sha3raair/node_modules/@babel/parser/lib/index.js:13622:41)\n    at Object.parseImport (/Users/ibrahimshaarawy/Desktop/sha3raair/sha3raair/node_modules/@babel/parser/lib/index.js:13604:24)\n    at Object.parseStatementContent (/Users/ibrahimshaarawy/Desktop/sha3raair/sha3raair/node_modules/@babel/parser/lib/index.js:12284:27)\n    at Object.parseStatement (/Users/ibrahimshaarawy/Desktop/sha3raair/sha3raair/node_modules/@babel/parser/lib/index.js:12184:17)\n    at Object.parseBlockOrModuleBlockBody (/Users/ibrahimshaarawy/Desktop/sha3raair/sha3raair/node_modules/@babel/parser/lib/index.js:12764:25)\n    at Object.parseBlockBody (/Users/ibrahimshaarawy/Desktop/sha3raair/sha3raair/node_modules/@babel/parser/lib/index.js:12755:10)\n    at Object.parseProgram (/Users/ibrahimshaarawy/Desktop/sha3raair/sha3raair/node_modules/@babel/parser/lib/index.js:12119:10)\n    at Object.parseTopLevel (/Users/ibrahimshaarawy/Desktop/sha3raair/sha3raair/node_modules/@babel/parser/lib/index.js:12110:25)\n    at Object.parse (/Users/ibrahimshaarawy/Desktop/sha3raair/sha3raair/node_modules/@babel/parser/lib/index.js:13818:10)\n    at parse (/Users/ibrahimshaarawy/Desktop/sha3raair/sha3raair/node_modules/@babel/parser/lib/index.js:13870:38)\n    at parser (/Users/ibrahimshaarawy/Desktop/sha3raair/sha3raair/node_modules/@babel/core/lib/parser/index.js:54:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (/Users/ibrahimshaarawy/Desktop/sha3raair/sha3raair/node_modules/@babel/core/lib/transformation/normalize-file.js:99:38)\n    at normalizeFile.next (<anonymous>)\n    at run (/Users/ibrahimshaarawy/Desktop/sha3raair/sha3raair/node_modules/@babel/core/lib/transformation/index.js:31:50)\n    at run.next (<anonymous>)\n    at Function.transform (/Users/ibrahimshaarawy/Desktop/sha3raair/sha3raair/node_modules/@babel/core/lib/transform.js:27:41)\n    at transform.next (<anonymous>)\n    at step (/Users/ibrahimshaarawy/Desktop/sha3raair/sha3raair/node_modules/gensync/index.js:261:32)\n    at /Users/ibrahimshaarawy/Desktop/sha3raair/sha3raair/node_modules/gensync/index.js:273:13\n    at async.call.result.err.err (/Users/ibrahimshaarawy/Desktop/sha3raair/sha3raair/node_modules/gensync/index.js:223:11)\n    at /Users/ibrahimshaarawy/Desktop/sha3raair/sha3raair/node_modules/gensync/index.js:189:28\n    at /Users/ibrahimshaarawy/Desktop/sha3raair/sha3raair/node_modules/@babel/core/lib/gensync-utils/async.js:72:7\n    at /Users/ibrahimshaarawy/Desktop/sha3raair/sha3raair/node_modules/gensync/index.js:113:33\n    at step (/Users/ibrahimshaarawy/Desktop/sha3raair/sha3raair/node_modules/gensync/index.js:287:14)\n    at /Users/ibrahimshaarawy/Desktop/sha3raair/sha3raair/node_modules/gensync/index.js:273:13");

/***/ })

/******/ });
//# sourceMappingURL=index-eabd70ff8ac597aa7e04.js.map