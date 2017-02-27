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

function fight(war1, war2) {
  console.log(war1);
}

fight(hum, elf);

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNGRlMTY2ZjI4NmI5MWYzMjBiYTkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NsYXNzLWRlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NsYXNzLWVsZi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY2xhc3MtaHVtYW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL215X2VzNi5qcyJdLCJuYW1lcyI6WyJCYXNpY0NoYXJhY3RlciIsImhwIiwicG93ZXIiLCJkYW1hZ2UiLCJiYXNlQXAiLCJzcGVlZFdhbGsiLCJfYmFzZUFwIiwiYXAiLCJkZWZlbmNlIiwiZGlzdGFuY2UiLCJmb3J3YXJkIiwiZGlzdCIsImNvbnNvbGUiLCJsb2ciLCJfX3Byb3RvX18iLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJkaWN0YW5jZSIsIkVsZiIsIl9hcnJvd3MiLCJiYXNlRGlzdGFuY2UiLCJjdXJlbnREYW1hZ2UiLCJIdW1hbiIsIl9idWlsZENvdW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImh1bSIsImVsZiIsImZpZ2h0Iiwid2FyMSIsIndhcjIiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEVBOzs7SUFHcUJB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QUVULGNBQUtDLFdBQUwsR0FBbUIsQ0FBbkI7QUFGUztBQUdaOzs7O2dDQUNPO0FBQ0osZ0JBQUksS0FBS2hCLEVBQUwsR0FBVSxFQUFkLEVBQWtCLE9BQU8sdUNBQVA7QUFDbEIsaUJBQUtBLEVBQUwsSUFBVyxFQUFYO0FBQ0EsZ0JBQUksS0FBS2dCLFdBQUwsR0FBbUIsQ0FBdkIsRUFBeUI7QUFDckIscUJBQUt0QixFQUFMLElBQVUsRUFBVjtBQUNBLHFCQUFLc0IsV0FBTDtBQUNBWCx3QkFBUUMsR0FBUixxQkFBOEJXLEtBQUtDLFNBQUwsQ0FBZSxJQUFmLENBQTlCO0FBQ0gsYUFKRCxNQUlPO0FBQ0hiLHdCQUFRQyxHQUFSO0FBQ0g7QUFDRCxtQkFBTyxLQUFLVSxXQUFaO0FBQ0g7Ozs7OztrQkFoQmdCRCxLOzs7Ozs7Ozs7Ozs7OztBQ0ZyQjs7OztBQUNBOzs7Ozs7QUFMQTs7OztBQU9PLElBQUlJLG9CQUFNLDBCQUFWO0FBQ0EsSUFBSUMsb0JBQU0sd0JBQVY7O0FBRVBmLFFBQVFDLEdBQVIsQ0FBWWEsR0FBWjtBQUNBZCxRQUFRQyxHQUFSLENBQVljLEdBQVo7O0FBRUEsU0FBU0MsS0FBVCxDQUFlQyxJQUFmLEVBQXFCQyxJQUFyQixFQUEyQjtBQUN2QmxCLFVBQVFDLEdBQVIsQ0FBWWdCLElBQVo7QUFDSDs7QUFFREQsTUFBTUYsR0FBTixFQUFXQyxHQUFYLEUiLCJmaWxlIjoibXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA0ZGUxNjZmMjg2YjkxZjMyMGJhOSIsIi8qKlxuICogQ3JlYXRlZCBieSBkaW1hIG9uIDI0LjAyLjIwMTcuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2ljQ2hhcmFjdGVyIHtcbiAgICBjb25zdHJ1Y3RvcihocCA9IDEwMCwgcG93ZXIgPSA1MCwgZGFtYWdlPSAxNSwgYmFzZUFwID0gMTAsIHNwZWVkV2FsayA9IDUpe1xuICAgICAgICB0aGlzLmhwID0gaHA7XG4gICAgICAgIHRoaXMucG93ZXIgPSBwb3dlcjtcbiAgICAgICAgdGhpcy5kYW1hZ2UgPSBkYW1hZ2U7XG4gICAgICAgIHRoaXMuX2Jhc2VBcCA9IGJhc2VBcDtcbiAgICAgICAgdGhpcy5hcCA9IGJhc2VBcDtcbiAgICAgICAgdGhpcy5zcGVlZFdhbGsgPSBzcGVlZFdhbGs7XG4gICAgICAgIHRoaXMuZGVmZW5jZSA9IDA7XG4gICAgfVxuICAgIHdhbGsoZGlzdGFuY2UsIGZvcndhcmQpe1xuICAgICAgICBsZXQgZGlzdDtcbiAgICAgICAgaWYoZm9yd2FyZCl7XG4gICAgICAgICAgICBkaXN0ID0gZGlzdGFuY2UgLSB0aGlzLnNwZWVkV2FsaztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRpc3QgPSBkaXN0YW5jZSArIHRoaXMuc3BlZWRXYWxrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkaXN0O1xuICAgIH1cbiAgICBydW4oZGlzdGFuY2Upe1xuICAgICAgICByZXR1cm4gZGlzdGFuY2UgLyAzKnRoaXMuc3BlZWRXYWxrO1xuICAgIH1cbiAgICByZWxvYWQoKXtcbiAgICAgICAgdGhpcy5hcCA9IHRoaXMuYmFzZUFwO1xuICAgICAgICB0aGlzLmRlZmVuY2UgPSAwO1xuICAgIH1cbiAgICBibG9jaygpe1xuICAgICAgICB0aGlzLmRlZmVuY2UgKz0xMDtcbiAgICB9XG4gICAgaW5uZXJEYW1hZ2UoZGFtYWdlKXtcbiAgICAgICAgaWYgKHRoaXMuZGVmZW5jZSAtIGRhbWFnZSA8IDApe1xuICAgICAgICAgICAgdGhpcy5ocCArPSB0aGlzLmRlZmVuY2UgLSBkYW1hZ2U7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTXkgZGVmZW5zZSBzYXZlIG1lXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuaHAgPCAwKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBUaGUgJHt0aGlzLl9fcHJvdG9fXy5jb25zdHJ1Y3Rvci5uYW1lfSB3YXMga2lsbGVkYCk7XG4gICAgICAgICAgICBkZWxldGUgdGhpcztcbiAgICAgICAgfVxuICAgIH1cbiAgICBoaXQoZGljdGFuY2Upe1xuICAgICAgICBpZiAodGhpcy5hcCA8IDUpIHJldHVybiBcImhhdmUgbm90IGFjdGlvbiBwb2ludCBmb3IgdGhpcyBhY3Rpb25cIjtcbiAgICAgICAgaWYgKGRpc3RhbmNlID4gMCkgcmV0dXJuIGNvbnNvbGUubG9nKGBJIGNhbid0IGhpdCBteSBlbmVteSwgaGUgaXMgdG8gZmFyYCk7XG4gICAgICAgIHRoaXMuYXAgLT0gNTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGFtYWdlO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY2xhc3MtZGVmYXVsdC5qcyIsIi8qKlxuICogQ3JlYXRlZCBieSBkaW1hIG9uIDI0LjAyLjIwMTcuXG4gKi9cbmltcG9ydCBCYXNpY0NoYXJhY3RlciBmcm9tICcuL2NsYXNzLWRlZmF1bHQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbGYgZXh0ZW5kcyBCYXNpY0NoYXJhY3RlcntcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcig0MCwyMCk7XG4gICAgICAgIHRoaXMuX2Fycm93cyA9IDEwO1xuXG4gICAgfTtcbiAgICBzaG93QXJyb3dzKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9hcnJvd3M7XG4gICAgfTtcbiAgICBzaG9vdChkaXN0YW5jZSl7XG4gICAgICAgIC8vZGVidWdnZXI7XG4gICAgICAgIGlmICh0aGlzLmFwIDwgNSkgcmV0dXJuIFwiaGF2ZSBub3QgYWN0aW9uIHBvaW50IGZvciB0aGlzIGFjdGlvblwiO1xuICAgICAgICB0aGlzLmFwIC09IDU7XG4gICAgICAgIC8vIG1heGltdW0gZGlzdGFuY2UgOTBtLCAgaW4gdGhlIDEwbSBhbmQgPCBtYXhpbXVtIGRhbWFnZSB0aGlzLmRhbWFnZSArIGFycm93IGRhbWFnZSg1KVxuICAgICAgICBsZXQgYmFzZURpc3RhbmNlID0gZGlzdGFuY2UgLSAxMDtcbiAgICAgICAgbGV0IGN1cmVudERhbWFnZSA9IGJhc2VEaXN0YW5jZSA8PSAwID8gdGhpcy5kYW1hZ2UgKyA1IDogKHRoaXMuZGFtYWdlICsgNSkgLSAodGhpcy5kYW1hZ2UgKyA1KSooYmFzZURpc3RhbmNlKjEuMjMpLzEwMCA7XG4gICAgICAgIC8vIDEuMjMgLSBpdCBzdGVwIGZyb20gMCB0byA4MVxuICAgICAgICByZXR1cm4gY3VyZW50RGFtYWdlO1xuICAgIH07XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NsYXNzLWVsZi5qcyIsIi8qKlxuICogQ3JlYXRlZCBieSBkaW1hIG9uIDI0LjAyLjIwMTcuXG4gKi9cbmltcG9ydCBCYXNpY0NoYXJhY3RlciBmcm9tICcuL2NsYXNzLWRlZmF1bHQnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEh1bWFuIGV4dGVuZHMgQmFzaWNDaGFyYWN0ZXJ7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoODAsIDMwKTtcbiAgICAgICAgdGhpcy5fYnVpbGRDb3VudCA9IDA7XG4gICAgfTtcbiAgICBidWlsZCAoKXtcbiAgICAgICAgaWYgKHRoaXMuYXAgPCAxMCkgcmV0dXJuIFwiaGF2ZSBub3QgYWN0aW9uIHBvaW50IGZvciB0aGlzIGFjdGlvblwiO1xuICAgICAgICB0aGlzLmFwIC09IDEwO1xuICAgICAgICBpZiAodGhpcy5fYnVpbGRDb3VudCA8IDMpe1xuICAgICAgICAgICAgdGhpcy5ocCArPTEwO1xuICAgICAgICAgICAgdGhpcy5fYnVpbGRDb3VudCsrO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFRoZSBodW1hbiBoYXZlICR7SlNPTi5zdHJpbmdpZnkodGhpcyl9IHBhcmFtYCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgSSBjYW4ndCBidWlsZCB0aGUgaG91c2VgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fYnVpbGRDb3VudDtcbiAgICB9O1xuXG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY2xhc3MtaHVtYW4uanMiLCIvKipcbiAqIENyZWF0ZWQgYnkgdXNlciBvbiAxOC4wMi4xNy5cbiAqL1xuXG5pbXBvcnQgSHVtYW4gZnJvbSAnLi9jbGFzcy1odW1hbic7XG5pbXBvcnQgRWxmIGZyb20gJy4vY2xhc3MtZWxmJztcblxuZXhwb3J0IGxldCBodW0gPSBuZXcgSHVtYW47XG5leHBvcnQgbGV0IGVsZiA9IG5ldyBFbGY7XG5cbmNvbnNvbGUubG9nKGh1bSk7XG5jb25zb2xlLmxvZyhlbGYpO1xuXG5mdW5jdGlvbiBmaWdodCh3YXIxLCB3YXIyKSB7XG4gICAgY29uc29sZS5sb2cod2FyMSk7XG59XG5cbmZpZ2h0KGh1bSwgZWxmKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvbXlfZXM2LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==