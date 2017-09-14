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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return displayOneOnLeft; });
/* unused harmony export displayOneOnright */
/* unused harmony export handleCarouselMedia */
var displayMul = function (data, index) {
    var contentUrl = '';

    var igUrl = data[index].link;
    if (data[index].videos) {
        contentUrl = data[index].videos.standard_resolution.url;
        $('#content' + index).attr('href', igUrl).append(`<video autoplay loop muted><source src = ${contentUrl} type="video/mp4" ></video>`)
    } else {
        contentUrl = data[i].images.standard_resolution.url;
        $('#content' + index).attr('href', igUrl).append(`<img src = ${contentUrl}>`)
    }
}

var displayOneOnLeft = function (data, index) {
    var contentUrl = data[0].videos.standard_resolution.url;;
    var igUrl = data[0].link;
    if (data[0].videos) {
        $('#content0').attr('href', igUrl).append(`<video autoplay loop muted><source src = ${contentUrl} type="video/mp4" ></video>`)
    } else {
        $('#content0').attr('href', igUrl).append(`<img src = ${contentUrl}>`)
    }
}

var displayOneOnright = function (data, index) {
    var contentUrl = data[0].videos.standard_resolution.url;;
    var igUrl = data[0].link;
    if (data[0].videos) {
        $('#content1').attr('href', igUrl).append(`<video autoplay loop muted><source src = ${contentUrl} type="video/mp4" ></video>`)
    } else {
        $('#content1').attr('href', igUrl).append(`<img src = ${contentUrl}>`)
    }
}

var handleCarouselMedia = function(data){}

/* harmony default export */ __webpack_exports__["a"] = (displayMul);



/***/ }),
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);





var storage = window.localStorage;
var accessToken = storage.getItem('accessToken');

$(document).ready(function () {
    var handleOne = storage.getItem('handleOne');
    var handleTwo = storage.getItem('handleTwo');
    var accessToken = storage.getItem('accessToken');

    if (accessToken === null) {
        $('#div0').remove();
        $('#div1').remove();
        $('body').addClass('not-authenticated');
    } else if (handleTwo === null || handleTwo === '' || handleOne === handleTwo) {
        $('.intro-page').remove();
        $('body').removeClass('not-authenticated');

        $.ajax({
            url: 'https://api.instagram.com/v1/users/search',
            dataType: 'jsonp',
            type: 'GET',
            data: { access_token: accessToken, q: handleOne },

            success: function (data) {
                console.log('=== FOUND USER ID', data)
                $.ajax({
                    url: `https://api.instagram.com/v1/users/${data.data[0].id}/media/recent`,
                    dataType: 'jsonp',
                    type: 'GET',
                    data: { access_token: accessToken, count: 2 },
                    success: function (data) {
                        console.log(data)
                        var data = data.data;

                        for (var i = 0; i < 2; i++) {
                            Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */])(data, i)
                        }
                    },
                    error: function (data) {
                        console.log(data);
                    }
                });
            },
            error: function (data) {
                console.log(data)
            }
        })

    } else {
        $('.intro-page').remove();
        $('body').removeClass('not-authenticated');

        $.ajax({
            url: 'https://api.instagram.com/v1/users/search',
            dataType: 'jsonp',
            type: 'GET',
            data: { access_token: accessToken, q: handleOne },
            success: function (data) {
                $.ajax({
                    url: `https://api.instagram.com/v1/users/${data.data[0].id}/media/recent`,
                    dataType: 'jsonp',
                    type: 'GET',
                    data: { access_token: accessToken, count: 1 },
                    success: function (data) {
                        var data = data.data;
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* displayOneOnLeft */])(data, null)
                    },
                    error: function (data) {
                        console.log(data)
                    }
                })
            }
        })

        $.ajax({
            url: 'https://api.instagram.com/v1/users/search',
            dataType: 'jsonp',
            type: 'GET',
            data: { access_token: accessToken, q: handleTwo },
            success: function (data) {
                $.ajax({
                    url: `https://api.instagram.com/v1/users/${data.data[0].id}/media/recent`,
                    dataType: 'jsonp',
                    type: 'GET',
                    data: { access_token: accessToken, count: 1 },
                    success: function (data) {
                        var data = data.data;
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["displayOneOnRight"])(data, null)
                    },
                    error: function (data) {
                        console.log(data)
                    }
                })
            }
        })
    }
})


/***/ })
/******/ ]);