var my =
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by dima on 24.02.2017.
 */
var BasicCharacter = function () {
    function BasicCharacter() {
        var hp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
        var power = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;
        var damage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 15;
        var baseAp = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 10;
        var speedWalk = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 5;

        _classCallCheck(this, BasicCharacter);

        this.hp = hp;
        this.power = power;
        this.damage = damage;
        this._baseAp = baseAp;
        this.ap = baseAp;
        this.speedWalk = speedWalk;
        this.defence = 0;
    }

    _createClass(BasicCharacter, [{
        key: "walk",
        value: function walk(distance, forward) {
            var dist = void 0;
            if (forward) {
                dist = distance - this.speedWalk;
            } else {
                dist = distance + this.speedWalk;
            }
            return dist;
        }
    }, {
        key: "run",
        value: function run(distance) {
            return distance / 3 * this.speedWalk;
        }
    }, {
        key: "reload",
        value: function reload() {
            this.ap = this.baseAp;
            this.defence = 0;
        }
    }, {
        key: "block",
        value: function block() {
            this.defence += 10;
        }
    }, {
        key: "innerDamage",
        value: function innerDamage(damage) {
            if (this.defence - damage < 0) {
                this.hp += this.defence - damage;
                console.log(this);
            } else {
                console.log("My defense save me");
            }
            if (this.hp < 0) {
                console.log("The " + this.__proto__.constructor.name + " was killed");
                delete this;
            }
        }
    }, {
        key: "hit",
        value: function hit(dictance) {
            if (this.ap < 5) return "have not action point for this action";
            if (distance > 0) return console.log("I can't hit my enemy, he is to far");
            this.ap -= 5;
            return this.damage;
        }
    }]);

    return BasicCharacter;
}();

exports.default = BasicCharacter;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classDefault = __webpack_require__(0);

var _classDefault2 = _interopRequireDefault(_classDefault);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by dima on 24.02.2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Elf = function (_BasicCharacter) {
    _inherits(Elf, _BasicCharacter);

    function Elf() {
        _classCallCheck(this, Elf);

        var _this = _possibleConstructorReturn(this, (Elf.__proto__ || Object.getPrototypeOf(Elf)).call(this, 40, 20));

        _this._arrows = 10;

        return _this;
    }

    _createClass(Elf, [{
        key: "showArrows",
        value: function showArrows() {
            return this._arrows;
        }
    }, {
        key: "shoot",
        value: function shoot(distance) {
            //debugger;
            if (this.ap < 5) return "have not action point for this action";
            this.ap -= 5;
            // maximum distance 90m,  in the 10m and < maximum damage this.damage + arrow damage(5)
            var baseDistance = distance - 10;
            var curentDamage = baseDistance <= 0 ? this.damage + 5 : this.damage + 5 - (this.damage + 5) * (baseDistance * 1.23) / 100;
            // 1.23 - it step from 0 to 81
            return curentDamage;
        }
    }]);

    return Elf;
}(_classDefault2.default);

exports.default = Elf;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classDefault = __webpack_require__(0);

var _classDefault2 = _interopRequireDefault(_classDefault);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by dima on 24.02.2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Human = function (_BasicCharacter) {
    _inherits(Human, _BasicCharacter);

    function Human() {
        _classCallCheck(this, Human);

        var _this = _possibleConstructorReturn(this, (Human.__proto__ || Object.getPrototypeOf(Human)).call(this, 80, 30));

        _this._buildCount = 0;
        return _this;
    }

    _createClass(Human, [{
        key: "build",
        value: function build() {
            if (this.ap < 10) return "have not action point for this action";
            this.ap -= 10;
            if (this._buildCount < 3) {
                this.hp += 10;
                this._buildCount++;
                console.log("The human have " + JSON.stringify(this) + " param");
            } else {
                console.log("I can't build the house");
            }
            return this._buildCount;
        }
    }]);

    return Human;
}(_classDefault2.default);

exports.default = Human;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.elf = exports.hum = undefined;

var _classHuman = __webpack_require__(2);

var _classHuman2 = _interopRequireDefault(_classHuman);

var _classElf = __webpack_require__(1);

var _classElf2 = _interopRequireDefault(_classElf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by user on 18.02.17.
 */

var hum = exports.hum = new _classHuman2.default();
var elf = exports.elf = new _classElf2.default();

console.log(hum);
console.log(elf);

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjlmNjA4Y2ZmNGQ1NWZmZTczOGUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NsYXNzLWRlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NsYXNzLWVsZi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY2xhc3MtaHVtYW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL215X2VzNi5qcyJdLCJuYW1lcyI6WyJCYXNpY0NoYXJhY3RlciIsImhwIiwicG93ZXIiLCJkYW1hZ2UiLCJiYXNlQXAiLCJzcGVlZFdhbGsiLCJfYmFzZUFwIiwiYXAiLCJkZWZlbmNlIiwiZGlzdGFuY2UiLCJmb3J3YXJkIiwiZGlzdCIsImNvbnNvbGUiLCJsb2ciLCJfX3Byb3RvX18iLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJkaWN0YW5jZSIsIkVsZiIsIl9hcnJvd3MiLCJiYXNlRGlzdGFuY2UiLCJjdXJlbnREYW1hZ2UiLCJIdW1hbiIsIl9idWlsZENvdW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImh1bSIsImVsZiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRUE7OztJQUdxQkEsYztBQUNqQiw4QkFBeUU7QUFBQSxZ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QUFuQjtBQUZTO0FBR1o7Ozs7Z0NBQ087QUFDSixnQkFBSSxLQUFLaEIsRUFBTCxHQUFVLEVBQWQsRUFBa0IsT0FBTyx1Q0FBUDtBQUNsQixpQkFBS0EsRUFBTCxJQUFXLEVBQVg7QUFDQSxnQkFBSSxLQUFLZ0IsV0FBTCxHQUFtQixDQUF2QixFQUF5QjtBQUNyQixxQkFBS3RCLEVBQUwsSUFBVSxFQUFWO0FBQ0EscUJBQUtzQixXQUFMO0FBQ0FYLHdCQUFRQyxHQUFSLHFCQUE4QlcsS0FBS0MsU0FBTCxDQUFlLElBQWYsQ0FBOUI7QUFDSCxhQUpELE1BSU87QUFDSGIsd0JBQVFDLEdBQVI7QUFDSDtBQUNELG1CQUFPLEtBQUtVLFdBQVo7QUFDSDs7Ozs7O2tCQWhCZ0JELEs7Ozs7Ozs7Ozs7Ozs7O0FDRnJCOzs7O0FBQ0E7Ozs7OztBQUxBOzs7O0FBT08sSUFBSUksb0JBQU0sMEJBQVY7QUFDQSxJQUFJQyxvQkFBTSx3QkFBVjs7QUFFUGYsUUFBUUMsR0FBUixDQUFZYSxHQUFaO0FBQ0FkLFFBQVFDLEdBQVIsQ0FBWWMsR0FBWixFIiwiZmlsZSI6Im15LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMjlmNjA4Y2ZmNGQ1NWZmZTczOGUiLCIvKipcclxuICogQ3JlYXRlZCBieSBkaW1hIG9uIDI0LjAyLjIwMTcuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNpY0NoYXJhY3RlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihocCA9IDEwMCwgcG93ZXIgPSA1MCwgZGFtYWdlPSAxNSwgYmFzZUFwID0gMTAsIHNwZWVkV2FsayA9IDUpe1xyXG4gICAgICAgIHRoaXMuaHAgPSBocDtcclxuICAgICAgICB0aGlzLnBvd2VyID0gcG93ZXI7XHJcbiAgICAgICAgdGhpcy5kYW1hZ2UgPSBkYW1hZ2U7XHJcbiAgICAgICAgdGhpcy5fYmFzZUFwID0gYmFzZUFwO1xyXG4gICAgICAgIHRoaXMuYXAgPSBiYXNlQXA7XHJcbiAgICAgICAgdGhpcy5zcGVlZFdhbGsgPSBzcGVlZFdhbGs7XHJcbiAgICAgICAgdGhpcy5kZWZlbmNlID0gMDtcclxuICAgIH1cclxuICAgIHdhbGsoZGlzdGFuY2UsIGZvcndhcmQpe1xyXG4gICAgICAgIGxldCBkaXN0O1xyXG4gICAgICAgIGlmKGZvcndhcmQpe1xyXG4gICAgICAgICAgICBkaXN0ID0gZGlzdGFuY2UgLSB0aGlzLnNwZWVkV2FsaztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkaXN0ID0gZGlzdGFuY2UgKyB0aGlzLnNwZWVkV2FsaztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRpc3Q7XHJcbiAgICB9XHJcbiAgICBydW4oZGlzdGFuY2Upe1xyXG4gICAgICAgIHJldHVybiBkaXN0YW5jZSAvIDMqdGhpcy5zcGVlZFdhbGs7XHJcbiAgICB9XHJcbiAgICByZWxvYWQoKXtcclxuICAgICAgICB0aGlzLmFwID0gdGhpcy5iYXNlQXA7XHJcbiAgICAgICAgdGhpcy5kZWZlbmNlID0gMDtcclxuICAgIH1cclxuICAgIGJsb2NrKCl7XHJcbiAgICAgICAgdGhpcy5kZWZlbmNlICs9MTA7XHJcbiAgICB9XHJcbiAgICBpbm5lckRhbWFnZShkYW1hZ2Upe1xyXG4gICAgICAgIGlmICh0aGlzLmRlZmVuY2UgLSBkYW1hZ2UgPCAwKXtcclxuICAgICAgICAgICAgdGhpcy5ocCArPSB0aGlzLmRlZmVuY2UgLSBkYW1hZ2U7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTXkgZGVmZW5zZSBzYXZlIG1lXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLmhwIDwgMCl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBUaGUgJHt0aGlzLl9fcHJvdG9fXy5jb25zdHJ1Y3Rvci5uYW1lfSB3YXMga2lsbGVkYCk7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGhpdChkaWN0YW5jZSl7XHJcbiAgICAgICAgaWYgKHRoaXMuYXAgPCA1KSByZXR1cm4gXCJoYXZlIG5vdCBhY3Rpb24gcG9pbnQgZm9yIHRoaXMgYWN0aW9uXCI7XHJcbiAgICAgICAgaWYgKGRpc3RhbmNlID4gMCkgcmV0dXJuIGNvbnNvbGUubG9nKGBJIGNhbid0IGhpdCBteSBlbmVteSwgaGUgaXMgdG8gZmFyYCk7XHJcbiAgICAgICAgdGhpcy5hcCAtPSA1O1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhbWFnZTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jbGFzcy1kZWZhdWx0LmpzIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgZGltYSBvbiAyNC4wMi4yMDE3LlxyXG4gKi9cclxuaW1wb3J0IEJhc2ljQ2hhcmFjdGVyIGZyb20gJy4vY2xhc3MtZGVmYXVsdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbGYgZXh0ZW5kcyBCYXNpY0NoYXJhY3RlcntcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoNDAsMjApO1xyXG4gICAgICAgIHRoaXMuX2Fycm93cyA9IDEwO1xyXG4gICAgICAgIFxyXG4gICAgfTtcclxuICAgIHNob3dBcnJvd3MoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXJyb3dzO1xyXG4gICAgfTtcclxuICAgIHNob290KGRpc3RhbmNlKXtcclxuICAgICAgICAvL2RlYnVnZ2VyO1xyXG4gICAgICAgIGlmICh0aGlzLmFwIDwgNSkgcmV0dXJuIFwiaGF2ZSBub3QgYWN0aW9uIHBvaW50IGZvciB0aGlzIGFjdGlvblwiO1xyXG4gICAgICAgIHRoaXMuYXAgLT0gNTtcclxuICAgICAgICAvLyBtYXhpbXVtIGRpc3RhbmNlIDkwbSwgIGluIHRoZSAxMG0gYW5kIDwgbWF4aW11bSBkYW1hZ2UgdGhpcy5kYW1hZ2UgKyBhcnJvdyBkYW1hZ2UoNSlcclxuICAgICAgICBsZXQgYmFzZURpc3RhbmNlID0gZGlzdGFuY2UgLSAxMDtcclxuICAgICAgICBsZXQgY3VyZW50RGFtYWdlID0gYmFzZURpc3RhbmNlIDw9IDAgPyB0aGlzLmRhbWFnZSArIDUgOiAodGhpcy5kYW1hZ2UgKyA1KSAtICh0aGlzLmRhbWFnZSArIDUpKihiYXNlRGlzdGFuY2UqMS4yMykvMTAwIDtcclxuICAgICAgICAvLyAxLjIzIC0gaXQgc3RlcCBmcm9tIDAgdG8gODFcclxuICAgICAgICByZXR1cm4gY3VyZW50RGFtYWdlO1xyXG4gICAgfTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jbGFzcy1lbGYuanMiLCIvKipcclxuICogQ3JlYXRlZCBieSBkaW1hIG9uIDI0LjAyLjIwMTcuXHJcbiAqL1xyXG5pbXBvcnQgQmFzaWNDaGFyYWN0ZXIgZnJvbSAnLi9jbGFzcy1kZWZhdWx0JztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIdW1hbiBleHRlbmRzIEJhc2ljQ2hhcmFjdGVye1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcig4MCwgMzApO1xyXG4gICAgICAgIHRoaXMuX2J1aWxkQ291bnQgPSAwO1xyXG4gICAgfTtcclxuICAgIGJ1aWxkICgpe1xyXG4gICAgICAgIGlmICh0aGlzLmFwIDwgMTApIHJldHVybiBcImhhdmUgbm90IGFjdGlvbiBwb2ludCBmb3IgdGhpcyBhY3Rpb25cIjtcclxuICAgICAgICB0aGlzLmFwIC09IDEwO1xyXG4gICAgICAgIGlmICh0aGlzLl9idWlsZENvdW50IDwgMyl7XHJcbiAgICAgICAgICAgIHRoaXMuaHAgKz0xMDtcclxuICAgICAgICAgICAgdGhpcy5fYnVpbGRDb3VudCsrO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgVGhlIGh1bWFuIGhhdmUgJHtKU09OLnN0cmluZ2lmeSh0aGlzKX0gcGFyYW1gKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgSSBjYW4ndCBidWlsZCB0aGUgaG91c2VgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2J1aWxkQ291bnQ7XHJcbiAgICB9O1xyXG5cclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY2xhc3MtaHVtYW4uanMiLCIvKipcclxuICogQ3JlYXRlZCBieSB1c2VyIG9uIDE4LjAyLjE3LlxyXG4gKi9cclxuXHJcbmltcG9ydCBIdW1hbiBmcm9tICcuL2NsYXNzLWh1bWFuJztcclxuaW1wb3J0IEVsZiBmcm9tICcuL2NsYXNzLWVsZic7XHJcblxyXG5leHBvcnQgbGV0IGh1bSA9IG5ldyBIdW1hbjtcclxuZXhwb3J0IGxldCBlbGYgPSBuZXcgRWxmO1xyXG5cclxuY29uc29sZS5sb2coaHVtKTtcclxuY29uc29sZS5sb2coZWxmKTtcclxuXHJcblxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL215X2VzNi5qcyJdLCJzb3VyY2VSb290IjoiIn0=