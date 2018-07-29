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

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* Menu constructor */

function Menu(selector, options) {
    this.selector = selector;
    /* Default values */
    this.properties = {
        effect: 'noEffect',
        changeIcon: true
    };
    this.properties = Object.assign(this.properties, options);
    this.navList = document.querySelector(this.selector + ' .navbar-list');
    this.button = document.querySelector(this.selector + ' .hamburger');

    this.hamburgerEvent(); // run hamburgerEvent() method
    this.effect();
}
/* Proto methods */
Menu.prototype.hamburgerEvent = function () {
    var _this = this;

    var el = this.navList.classList;
    this.button.addEventListener('click', function () {
        el.toggle('active');
        if (!el.contains('active')) {
            el.add('unactive');
        } else if (el.contains('unactive')) {
            el.remove('unactive');
        }
        _this.changeIcon();
    });
};
Menu.prototype.effect = function () {
    if (this.properties.effect === 'slideDown') {
        this.navList.classList.add('slideDown');
    } else if (this.properties.effect === 'slideLeft') {
        this.navList.classList.add('slideLeft');
    }
    if (this.properties.effect === 'noEffect') {
        this.navList.classList.add('noEffect');
    }
};
Menu.prototype.changeIcon = function () {
    if (this.properties.changeIcon === true) {
        this.button.firstElementChild.classList.toggle('fa-times');
    } else if (this.properties.changeIcon === false) {
        return false;
    };
};

/* Button constructor */
function Button(selector, options) {
    this.selector = document.querySelector(selector);
    this.properties = {
        background: 'green'
    };
    this.properties = Object.assign(this.properties, options);

    this.background();
    this.hover();
}
Button.prototype.background = function () {
    var el = this.selector;
    var value = this.properties.background;

    switch (value) {
        case 'green':
            el.classList.add('btn-green');
            break;
        case 'blue':
            el.classList.add('btn-blue');
            break;
        case 'red':
            el.classList.add('btn-red');
            break;
        case 'orange':
            el.classList.add('btn-orange');
            break;
        case 'gray':
            el.classList.add('btn-gray');
            break;
        case 'black':
            el.classList.add('btn-black');
            break;
    }
    if (value.bgColor === undefined) {
        return false;
    } else {
        el.style.backgroundColor = value.bgColor;
        el.style.borderColor = value.bgColor;
    }
    if (value.fontColor === undefined) {
        return false;
    } else {
        el.style.color = value.fontColor;
    }
};
Button.prototype.hover = function () {
    var _this2 = this;

    var value = this.properties.hover;
    if (value === undefined) {
        return false;
    } else {
        this.selector.addEventListener('mouseover', function () {
            this.style.backgroundColor = value.bgColor;
            this.style.borderColor = value.bgColor;
        });
        this.selector.addEventListener('mouseout', function () {
            _this2.selector.style.backgroundColor = _this2.properties.background.bgColor;
            _this2.selector.style.borderColor = _this2.properties.background.bgColor;
        });
    }
};

/* test */
var btn = new Button('.przycisk', {
    background: 'green'
});
var bt = new Button('.przycisk2', {
    background: {
        bgColor: '#333333',
        fontColor: '#ffffff'
    },
    hover: {
        bgColor: '#444444',
        fontColor: '#eeeeee'
    }
});
console.log(bt);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);