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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {


// var React = require('react')

var HeaderComponent = __webpack_require__(6)
var ContentComponent = __webpack_require__(4)
var FooterComponent = __webpack_require__(5)

var RootComponent = React.createClass({displayName: "RootComponent",
    render:function () {
        return (
            React.createElement("div", null, 
                React.createElement(HeaderComponent, null), 
                React.createElement(ContentComponent, null), 
                React.createElement(FooterComponent, null)
            )
        )
    }
})


module.exports = RootComponent

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(0)
__webpack_require__(1)

///////////////////////
// var React = require("react")
// var ReactDOM = require('react-dom')

var RootComponent = __webpack_require__(2)

ReactDOM.render(React.createElement(RootComponent, null),document.getElementById("app"))

/***/ }),
/* 4 */
/***/ (function(module, exports) {


// var React = require('react')


var ContentComponent = React.createClass({displayName: "ContentComponent",
    render:function () {
        return (
            

            React.createElement("div", {className: "content"}, 
                React.createElement("div", {className: "content-block"}, "这里是content")
            )

        )
    }
})


module.exports = ContentComponent

/***/ }),
/* 5 */
/***/ (function(module, exports) {


// var React = require('react')


var FooterComponent = React.createClass({displayName: "FooterComponent",
    render:function () {
        return (
            
                React.createElement("nav", {className: "bar bar-tab"}, 
                    React.createElement("a", {className: "tab-item external active", href: "#"}, 
                        React.createElement("span", {className: "icon icon-home"}), 
                        React.createElement("span", {className: "tab-label"}, "首页")
                    ), 
                    React.createElement("a", {className: "tab-item external", href: "#"}, 
                        React.createElement("span", {className: "icon icon-star"}), 
                        React.createElement("span", {className: "tab-label"}, "收藏")
                    ), 
                    React.createElement("a", {className: "tab-item external", href: "#"}, 
                        React.createElement("span", {className: "icon icon-settings"}), 
                        React.createElement("span", {className: "tab-label"}, "设置")
                    )
                )

        )
    }
})


module.exports = FooterComponent

/***/ }),
/* 6 */
/***/ (function(module, exports) {


// var React = require('react')


var HeaderComponent = React.createClass({displayName: "HeaderComponent",
    render:function () {
        return (
            
                React.createElement("header", {className: "bar bar-nav"}, 
                    React.createElement("a", {className: "icon icon-me pull-left open-panel"}), 
                    React.createElement("h1", {className: "title"}, "标题")
                )

  
        )
    }
})


module.exports = HeaderComponent

/***/ })
/******/ ]);