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
        key: "actionWalk",
        value: function actionWalk(distance, forward) {
            if (this.ap < 10) {
                console.log("have not action point for this action,\n" + this.constructor.name + " have " + this.ap + " action points");
                return 0;
            }
            this.ap -= 5;
            var dist = void 0;
            if (forward) {
                dist = distance - this.speedWalk;
            } else {
                dist = distance + this.speedWalk;
            }
            return dist;
        }
    }, {
        key: "actionRun",
        value: function actionRun(distance, forward) {
            if (this.ap < 10) {
                console.log("have not action point for this action,\n" + this.constructor.name + " have " + this.ap + " action points");
                return 0;
            }
            this.ap -= 10;

            var dist = void 0;
            if (forward) {
                dist = distance - 3 * this.speedWalk;
                if (dist < 0) dist = 0;
            } else {
                dist = distance + 3 * this.speedWalk;
            }
            return dist;
        }
    }, {
        key: "reload",
        value: function reload() {
            this.ap = this.baseAp;
            this.defence = 0;
        }
    }, {
        key: "actionBlock",
        value: function actionBlock() {
            if (this.ap < 5) {
                console.log("have not action point for this action,\n" + this.constructor.name + " have " + this.ap + " action points");
                return false;
            }
            this.ap -= 5;
            this.defence += 5;
            console.log(this.constructor.name + " defense = " + this.defence);
            return true;
        }
    }, {
        key: "innerDamage",
        value: function innerDamage(damageFunc) {
            if (this.defence - damageFunc < 0) {
                this.hp += this.defence - damageFunc;
                console.log(this);
            } else {
                console.log("My defense save me");
            }
            if (this.hp < 0) {
                console.log("The " + this.constructor.name + " was killed");
                delete this;
            }
        }
    }, {
        key: "actionHit",
        value: function actionHit() {
            var distance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            if (this.ap < 5) {
                console.log("have not action point for this action,\n" + this.constructor.name + " have " + this.ap + " action points");
                return false;
            }
            this.ap -= 5;
            if (distance > 0) {
                console.log("I can't hit my enemy, he is to far");
                return;
            }

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
        key: 'showArrows',
        value: function showArrows() {
            return this._arrows;
        }
    }, {
        key: 'actionShoot',
        value: function actionShoot() {
            var distance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            if (this.ap < 5) {
                console.log('have not action point for this action,\n' + this.constructor.name + ' have ' + this.ap + ' action points');
                return 0;
            }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGQwMTJjMzQ1ZjExNTExYzcxMzQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NsYXNzLWRlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NsYXNzLWVsZi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY2xhc3MtaHVtYW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL215X2VzNi5qcyJdLCJuYW1lcyI6WyJCYXNpY0NoYXJhY3RlciIsImhwIiwicG93ZXIiLCJkYW1hZ2UiLCJiYXNlQXAiLCJzcGVlZFdhbGsiLCJfYmFzZUFwIiwiYXAiLCJkZWZlbmNlIiwiZGlzdGFuY2UiLCJmb3J3YXJkIiwiY29uc29sZSIsImxvZyIsImNvbnN0cnVjdG9yIiwibmFtZSIsImRpc3QiLCJkYW1hZ2VGdW5jIiwiRWxmIiwiX2Fycm93cyIsImJhc2VEaXN0YW5jZSIsImN1cmVudERhbWFnZSIsIkh1bWFuIiwiX2J1aWxkQ291bnQiLCJKU09OIiwic3RyaW5naWZ5IiwiaHVtIiwiZWxmIiwiZmlnaHQiLCJ3YXIxIiwid2FyMiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRUE7OztJQUdxQkEsYztBQUNqQiw4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QjtBQUZTO0FBR1o7Ozs7Z0NBQ087QUFDSixnQkFBSSxLQUFLZixFQUFMLEdBQVUsRUFBZCxFQUFrQixPQUFPLHVDQUFQO0FBQ2xCLGlCQUFLQSxFQUFMLElBQVcsRUFBWDtBQUNBLGdCQUFJLEtBQUtlLFdBQUwsR0FBbUIsQ0FBdkIsRUFBeUI7QUFDckIscUJBQUtyQixFQUFMLElBQVUsRUFBVjtBQUNBLHFCQUFLcUIsV0FBTDtBQUNBWCx3QkFBUUMsR0FBUixxQkFBOEJXLEtBQUtDLFNBQUwsQ0FBZSxJQUFmLENBQTlCO0FBQ0gsYUFKRCxNQUlPO0FBQ0hiLHdCQUFRQyxHQUFSO0FBQ0g7QUFDRCxtQkFBTyxLQUFLVSxXQUFaO0FBQ0g7Ozs7OztrQkFoQmdCRCxLOzs7Ozs7Ozs7Ozs7OztBQ0ZyQjs7OztBQUNBOzs7Ozs7QUFMQTs7OztBQU9PLElBQUlJLG9CQUFNLDBCQUFWO0FBQ0EsSUFBSUMsb0JBQU0sd0JBQVY7O0FBRVBmLFFBQVFDLEdBQVIsQ0FBWWEsR0FBWjtBQUNBZCxRQUFRQyxHQUFSLENBQVljLEdBQVo7O0FBRUEsU0FBU0MsS0FBVCxDQUFlQyxJQUFmLEVBQXFCQyxJQUFyQixFQUEyQjtBQUN2QmxCLFVBQVFDLEdBQVIsQ0FBWWdCLElBQVo7QUFDSDs7QUFFREQsTUFBTUYsR0FBTixFQUFXQyxHQUFYLEUiLCJmaWxlIjoibXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAwZDAxMmMzNDVmMTE1MTFjNzEzNCIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRpbWEgb24gMjQuMDIuMjAxNy5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2ljQ2hhcmFjdGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGhwID0gMTAwLCBwb3dlciA9IDUwLCBkYW1hZ2U9IDE1LCBiYXNlQXAgPSAxMCwgc3BlZWRXYWxrID0gNSl7XHJcbiAgICAgICAgdGhpcy5ocCA9IGhwO1xyXG4gICAgICAgIHRoaXMucG93ZXIgPSBwb3dlcjtcclxuICAgICAgICB0aGlzLmRhbWFnZSA9IGRhbWFnZTtcclxuICAgICAgICB0aGlzLl9iYXNlQXAgPSBiYXNlQXA7XHJcbiAgICAgICAgdGhpcy5hcCA9IGJhc2VBcDtcclxuICAgICAgICB0aGlzLnNwZWVkV2FsayA9IHNwZWVkV2FsaztcclxuICAgICAgICB0aGlzLmRlZmVuY2UgPSAwO1xyXG4gICAgfTtcclxuICAgIGFjdGlvbldhbGsoZGlzdGFuY2UsIGZvcndhcmQpe1xyXG4gICAgICAgIGlmICh0aGlzLmFwIDwgMTApIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYGhhdmUgbm90IGFjdGlvbiBwb2ludCBmb3IgdGhpcyBhY3Rpb24sXFxuJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9IGhhdmUgJHt0aGlzLmFwfSBhY3Rpb24gcG9pbnRzYCk7XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFwIC09IDU7XHJcbiAgICAgICAgbGV0IGRpc3Q7XHJcbiAgICAgICAgaWYoZm9yd2FyZCl7XHJcbiAgICAgICAgICAgIGRpc3QgPSBkaXN0YW5jZSAtIHRoaXMuc3BlZWRXYWxrO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRpc3QgPSBkaXN0YW5jZSArIHRoaXMuc3BlZWRXYWxrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGlzdDtcclxuICAgIH07XHJcbiAgICBhY3Rpb25SdW4oZGlzdGFuY2UsIGZvcndhcmQpe1xyXG4gICAgICAgIGlmICh0aGlzLmFwIDwgMTApIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYGhhdmUgbm90IGFjdGlvbiBwb2ludCBmb3IgdGhpcyBhY3Rpb24sXFxuJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9IGhhdmUgJHt0aGlzLmFwfSBhY3Rpb24gcG9pbnRzYCk7XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFwIC09IDEwO1xyXG5cclxuICAgICAgICBsZXQgZGlzdDtcclxuICAgICAgICBpZihmb3J3YXJkKXtcclxuICAgICAgICAgICAgZGlzdCA9IGRpc3RhbmNlIC0gMyp0aGlzLnNwZWVkV2FsaztcclxuICAgICAgICAgICAgaWYgKGRpc3QgPCAwKSBkaXN0ID0gMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkaXN0ID0gZGlzdGFuY2UgKyAzKnRoaXMuc3BlZWRXYWxrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGlzdDtcclxuXHJcblxyXG4gICAgfVxyXG4gICAgcmVsb2FkKCl7XHJcbiAgICAgICAgdGhpcy5hcCA9IHRoaXMuYmFzZUFwO1xyXG4gICAgICAgIHRoaXMuZGVmZW5jZSA9IDA7XHJcbiAgICB9O1xyXG4gICAgYWN0aW9uQmxvY2soKXtcclxuICAgICAgICBpZiAodGhpcy5hcCA8IDUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYGhhdmUgbm90IGFjdGlvbiBwb2ludCBmb3IgdGhpcyBhY3Rpb24sXFxuJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9IGhhdmUgJHt0aGlzLmFwfSBhY3Rpb24gcG9pbnRzYCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hcCAtPSA1O1xyXG4gICAgICAgIHRoaXMuZGVmZW5jZSArPTU7XHJcbiAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfSBkZWZlbnNlID0gJHt0aGlzLmRlZmVuY2V9YCk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBpbm5lckRhbWFnZShkYW1hZ2VGdW5jKXtcclxuICAgICAgICBpZiAodGhpcy5kZWZlbmNlIC0gZGFtYWdlRnVuYyA8IDApe1xyXG4gICAgICAgICAgICB0aGlzLmhwICs9IHRoaXMuZGVmZW5jZSAtIGRhbWFnZUZ1bmM7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTXkgZGVmZW5zZSBzYXZlIG1lXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLmhwIDwgMCl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBUaGUgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9IHdhcyBraWxsZWRgKTtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYWN0aW9uSGl0KGRpc3RhbmNlID0gMCl7XHJcbiAgICAgICAgaWYgKHRoaXMuYXAgPCA1KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBoYXZlIG5vdCBhY3Rpb24gcG9pbnQgZm9yIHRoaXMgYWN0aW9uLFxcbiR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfSBoYXZlICR7dGhpcy5hcH0gYWN0aW9uIHBvaW50c2ApO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXAgLT0gNTtcclxuICAgICAgICBpZiAoZGlzdGFuY2UgPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBJIGNhbid0IGhpdCBteSBlbmVteSwgaGUgaXMgdG8gZmFyYCk7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGFtYWdlO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NsYXNzLWRlZmF1bHQuanMiLCIvKipcclxuICogQ3JlYXRlZCBieSBkaW1hIG9uIDI0LjAyLjIwMTcuXHJcbiAqL1xyXG5pbXBvcnQgQmFzaWNDaGFyYWN0ZXIgZnJvbSAnLi9jbGFzcy1kZWZhdWx0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVsZiBleHRlbmRzIEJhc2ljQ2hhcmFjdGVye1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcig0MCwyMCk7XHJcbiAgICAgICAgdGhpcy5fYXJyb3dzID0gMTA7XHJcblxyXG4gICAgfTtcclxuICAgIHNob3dBcnJvd3MoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXJyb3dzO1xyXG4gICAgfTtcclxuICAgIGFjdGlvblNob290KGRpc3RhbmNlID0gMCl7XHJcbiAgICAgICAgaWYgKHRoaXMuYXAgPCA1KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBoYXZlIG5vdCBhY3Rpb24gcG9pbnQgZm9yIHRoaXMgYWN0aW9uLFxcbiR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfSBoYXZlICR7dGhpcy5hcH0gYWN0aW9uIHBvaW50c2ApO1xyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hcCAtPSA1O1xyXG4gICAgICAgIC8vIG1heGltdW0gZGlzdGFuY2UgOTBtLCAgaW4gdGhlIDEwbSBhbmQgPCBtYXhpbXVtIGRhbWFnZSB0aGlzLmRhbWFnZSArIGFycm93IGRhbWFnZSg1KVxyXG4gICAgICAgIGxldCBiYXNlRGlzdGFuY2UgPSBkaXN0YW5jZSAtIDEwO1xyXG4gICAgICAgIGxldCBjdXJlbnREYW1hZ2UgPSBiYXNlRGlzdGFuY2UgPD0gMCA/IHRoaXMuZGFtYWdlICsgNSA6ICh0aGlzLmRhbWFnZSArIDUpIC0gKHRoaXMuZGFtYWdlICsgNSkqKGJhc2VEaXN0YW5jZSoxLjIzKS8xMDAgO1xyXG4gICAgICAgIC8vIDEuMjMgLSBpdCBzdGVwIGZyb20gMCB0byA4MVxyXG4gICAgICAgIHJldHVybiBjdXJlbnREYW1hZ2U7XHJcbiAgICB9O1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NsYXNzLWVsZi5qcyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRpbWEgb24gMjQuMDIuMjAxNy5cclxuICovXHJcbmltcG9ydCBCYXNpY0NoYXJhY3RlciBmcm9tICcuL2NsYXNzLWRlZmF1bHQnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEh1bWFuIGV4dGVuZHMgQmFzaWNDaGFyYWN0ZXJ7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKDgwLCAzMCk7XHJcbiAgICAgICAgdGhpcy5fYnVpbGRDb3VudCA9IDA7XHJcbiAgICB9O1xyXG4gICAgYnVpbGQgKCl7XHJcbiAgICAgICAgaWYgKHRoaXMuYXAgPCAxMCkgcmV0dXJuIFwiaGF2ZSBub3QgYWN0aW9uIHBvaW50IGZvciB0aGlzIGFjdGlvblwiO1xyXG4gICAgICAgIHRoaXMuYXAgLT0gMTA7XHJcbiAgICAgICAgaWYgKHRoaXMuX2J1aWxkQ291bnQgPCAzKXtcclxuICAgICAgICAgICAgdGhpcy5ocCArPTEwO1xyXG4gICAgICAgICAgICB0aGlzLl9idWlsZENvdW50Kys7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBUaGUgaHVtYW4gaGF2ZSAke0pTT04uc3RyaW5naWZ5KHRoaXMpfSBwYXJhbWApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBJIGNhbid0IGJ1aWxkIHRoZSBob3VzZWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5fYnVpbGRDb3VudDtcclxuICAgIH07XHJcblxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jbGFzcy1odW1hbi5qcyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IHVzZXIgb24gMTguMDIuMTcuXHJcbiAqL1xyXG5cclxuaW1wb3J0IEh1bWFuIGZyb20gJy4vY2xhc3MtaHVtYW4nO1xyXG5pbXBvcnQgRWxmIGZyb20gJy4vY2xhc3MtZWxmJztcclxuXHJcbmV4cG9ydCBsZXQgaHVtID0gbmV3IEh1bWFuO1xyXG5leHBvcnQgbGV0IGVsZiA9IG5ldyBFbGY7XHJcblxyXG5jb25zb2xlLmxvZyhodW0pO1xyXG5jb25zb2xlLmxvZyhlbGYpO1xyXG5cclxuZnVuY3Rpb24gZmlnaHQod2FyMSwgd2FyMikge1xyXG4gICAgY29uc29sZS5sb2cod2FyMSk7XHJcbn1cclxuXHJcbmZpZ2h0KGh1bSwgZWxmKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvbXlfZXM2LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==