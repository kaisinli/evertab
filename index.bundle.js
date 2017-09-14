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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var storage = window.localStorage;
var handle0 = storage.getItem('handle0');
var handle1 = storage.getItem('handle1');

console.log(handle0, handle1)

$(document).ready(function () {
    if (handle0 === null) {
        $('#div0').remove();
        $('#div1').remove();
        $('body').addClass('not-authenticated');
    } else if (handle1 === null || handle1 === '' || handle1 === handle0) {
        $('.intro-page').remove();
        $('body').removeClass('not-authenticated');
        $.getJSON(`https://www.instagram.com/${handle0}/media/`, function (data) {
            console.log(data)
            var content = data.items;

            for (var i = 0; i < 2; i++) {
                var igUrl = content[i].link;
                var contentUrl = '';

                if (content[i].videos) {
                    contentUrl = content[i].videos.standard_resolution.url;
                    console.log(i, contentUrl)
                    $('#content' + i).attr('href', igUrl).append(`<video autoplay loop muted><source src = ${contentUrl} type="video/mp4" ></video>`)
                } else {
                    contentUrl = content[i].images.standard_resolution.url;
                    console.log(i, contentUrl)
                    $('#content' + i).attr('href', igUrl).append(`<img src = ${contentUrl}>`)
                }
            }
        })
    } else {
        $('.intro-page').remove();
        $('body').removeClass('not-authenticated');

        $.getJSON(`https://www.instagram.com/${handle0}/media/`, function (data) {
            var content = data.items
            var igUrl = content[0].link;

            var contentUrl = ''
            var ig
            if (content[0].videos) {
                contentUrl = content[0].videos.standard_resolution.url;
                $('#content0').attr('href', igUrl).append(`<video autoplay loop muted><source src = ${contentUrl} type="video/mp4" ></video>`)
            } else {
                contentUrl = content[0].images.standard_resolution.url;
                $('#content0').attr('href', igUrl).append(`<img src = ${contentUrl}>`)
            }
        })

        $.getJSON(`https://www.instagram.com/${handle1}/media/`, function (data) {
            var content = data.items
            var contentUrl = ''
            var igUrl = content[0].link;


            if (content[0].videos) {
                contentUrl = content[0].videos.standard_resolution.url;
                $('#content1').attr('href', igUrl).append(`<video autoplay loop muted><source src = ${contentUrl} type="video/mp4" ></video>`)
            } else {
                contentUrl = content[0].images.standard_resolution.url;
                $('#content1').attr('href', igUrl).append(`<img src = ${contentUrl}>`)
            }
        })


    }
})




/***/ })

/******/ });