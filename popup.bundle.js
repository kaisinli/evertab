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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__secrets_js__ = __webpack_require__(2);

var redirectUri = 'https://www.instagram.com/evertabextension/';
var authLink = `https://api.instagram.com/oauth/authorize/?client_id=${__WEBPACK_IMPORTED_MODULE_0__secrets_js__["a" /* default */]}&redirect_uri=${redirectUri}&response_type=token`;

var storage = window.localStorage;

$(document).ready(function () {
    var handleOne = storage.getItem('handleOne');
    var handleTwo = storage.getItem('handleTwo');
    var accessToken = storage.getItem('accessToken');

    if (accessToken === null) {
        chrome.tabs.query({ active: true, currentWindow: true },
            function isATInUrl(tabs) {
                var currentTabUrl = tabs[0].url;
                var ATFragmentInUrl = redirectUri + '#access_token=';
                var domainPathAndFrag = currentTabUrl.slice(0, 57);

                if (domainPathAndFrag !== ATFragmentInUrl) {
                    $("#new-handle-form").remove();
                    $('a').attr('href', authLink);
                } else {
                    $("#step-one").remove();
                    $('form')
                        .submit(function (e) {
                            console.log('SUBMIT', e)
                            var newHandleOne = $('#handle-one').val();
                            storage.setItem('handleOne', newHandleOne);
                            var newHandleTwo = $('#handle-two').val();
                            storage.setItem('handleTwo', newHandleTwo);
                            var accessToken = currentTabUrl.slice(57, currentTabUrl.length);
                            storage.setItem('accessToken', accessToken);
                        });
                }
            })
    } else {
        $('button').remove();
        $('form')
            .submit(function (e) {
                var newHandleOne = $('#handle-one').val();
                storage.setItem('handleOne', newHandleOne);
                var newHandleTwo = $('#handle-two').val();
                storage.setItem('handleTwo', newHandleTwo);
            });
    }
})


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export INSTAGRAM_CLIENT_SECRET */
/* unused harmony export INSTAGRAM_CLIENT_ID */
var INSTAGRAM_CLIENT_SECRET = 'dfe59781ff3340f0ae2d478e3826a4d3';
var INSTAGRAM_CLIENT_ID = '56a28f40e0064d65b1c3ca02fc1f4111';

/* harmony default export */ __webpack_exports__["a"] = (INSTAGRAM_CLIENT_ID);

/***/ })
/******/ ]);