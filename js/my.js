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
        value: function actionWalk(forward) {
            if (this.ap < 5) {
                console.log("have not action point for this action,\n" + this.constructor.name + " have " + this.ap + " action points");
                return 0;
            }
            this.ap -= 5;
            var dist = void 0;
            if (forward) {
                dist = distance - this.speedWalk;
                if (dist < 0) dist = 0;
            } else {
                dist = distance + this.speedWalk;
            }
            return dist;
        }
    }, {
        key: "actionRun",
        value: function actionRun(forward) {
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
                return false;
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
            if (this.ap < 10) {
                console.log("have not action point for this action,\n" + this.constructor.name + " have " + this.ap + " action points");
                return false;
            }
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
    }, {
        key: "action",
        value: function action(enemy) {
            if (enemy.constructor.name === "Elf") {
                if (this.hp < 30 || distance >= 91) {
                    this.build();
                }
                if (distance < 50 && distance !== 0) {
                    distance = this.actionRun(true);
                }
                if (distance > 70 && distance < 91) {
                    distance = this.actionRun(false);
                }
                if (distance === 0) {
                    this.hit();
                    this.hit();
                }
            }
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

var distance = 35;
function fight(war1, war2) {
  console.log(distance);
  console.log(war1);
}

fight(hum, elf);

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgY2EwNmRjNGY3NmRjMzMxYmQ1NDAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NsYXNzLWRlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NsYXNzLWVsZi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY2xhc3MtaHVtYW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL215X2VzNi5qcyJdLCJuYW1lcyI6WyJCYXNpY0NoYXJhY3RlciIsImhwIiwicG93ZXIiLCJkYW1hZ2UiLCJiYXNlQXAiLCJzcGVlZFdhbGsiLCJfYmFzZUFwIiwiYXAiLCJkZWZlbmNlIiwiZm9yd2FyZCIsImNvbnNvbGUiLCJsb2ciLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJkaXN0IiwiZGlzdGFuY2UiLCJkYW1hZ2VGdW5jIiwiRWxmIiwiX2Fycm93cyIsImJhc2VEaXN0YW5jZSIsImN1cmVudERhbWFnZSIsIkh1bWFuIiwiX2J1aWxkQ291bnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZW5lbXkiLCJidWlsZCIsImFjdGlvblJ1biIsImhpdCIsImh1bSIsImVsZiIsImZpZ2h0Iiwid2FyMSIsIndhcjIiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7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T08sSUFBSVEsb0JBQU0sMEJBQVY7QUFDQSxJQUFJQyxvQkFBTSx3QkFBVjs7QUFFUHBCLFFBQVFDLEdBQVIsQ0FBWWtCLEdBQVo7QUFDQW5CLFFBQVFDLEdBQVIsQ0FBWW1CLEdBQVo7O0FBRUEsSUFBSWYsV0FBVyxFQUFmO0FBQ0EsU0FBU2dCLEtBQVQsQ0FBZUMsSUFBZixFQUFxQkMsSUFBckIsRUFBMkI7QUFDdkJ2QixVQUFRQyxHQUFSLENBQVlJLFFBQVo7QUFDQUwsVUFBUUMsR0FBUixDQUFZcUIsSUFBWjtBQUNIOztBQUVERCxNQUFNRixHQUFOLEVBQVdDLEdBQVgsRSIsImZpbGUiOiJteS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGNhMDZkYzRmNzZkYzMzMWJkNTQwIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGRpbWEgb24gMjQuMDIuMjAxNy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzaWNDaGFyYWN0ZXIge1xuICAgIGNvbnN0cnVjdG9yKGhwID0gMTAwLCBwb3dlciA9IDUwLCBkYW1hZ2U9IDE1LCBiYXNlQXAgPSAxMCwgc3BlZWRXYWxrID0gNSl7XG4gICAgICAgIHRoaXMuaHAgPSBocDtcbiAgICAgICAgdGhpcy5wb3dlciA9IHBvd2VyO1xuICAgICAgICB0aGlzLmRhbWFnZSA9IGRhbWFnZTtcbiAgICAgICAgdGhpcy5fYmFzZUFwID0gYmFzZUFwO1xuICAgICAgICB0aGlzLmFwID0gYmFzZUFwO1xuICAgICAgICB0aGlzLnNwZWVkV2FsayA9IHNwZWVkV2FsaztcbiAgICAgICAgdGhpcy5kZWZlbmNlID0gMDtcbiAgICB9O1xuICAgIGFjdGlvbldhbGsoZm9yd2FyZCl7XG4gICAgICAgIGlmICh0aGlzLmFwIDwgNSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYGhhdmUgbm90IGFjdGlvbiBwb2ludCBmb3IgdGhpcyBhY3Rpb24sXFxuJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9IGhhdmUgJHt0aGlzLmFwfSBhY3Rpb24gcG9pbnRzYCk7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFwIC09IDU7XG4gICAgICAgIGxldCBkaXN0O1xuICAgICAgICBpZihmb3J3YXJkKXtcbiAgICAgICAgICAgIGRpc3QgPSBkaXN0YW5jZSAtIHRoaXMuc3BlZWRXYWxrO1xuICAgICAgICAgICAgaWYgKGRpc3QgPCAwKSBkaXN0ID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRpc3QgPSBkaXN0YW5jZSArIHRoaXMuc3BlZWRXYWxrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkaXN0O1xuICAgIH07XG4gICAgYWN0aW9uUnVuKGZvcndhcmQpe1xuICAgICAgICBpZiAodGhpcy5hcCA8IDEwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgaGF2ZSBub3QgYWN0aW9uIHBvaW50IGZvciB0aGlzIGFjdGlvbixcXG4ke3RoaXMuY29uc3RydWN0b3IubmFtZX0gaGF2ZSAke3RoaXMuYXB9IGFjdGlvbiBwb2ludHNgKTtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYXAgLT0gMTA7XG5cbiAgICAgICAgbGV0IGRpc3Q7XG4gICAgICAgIGlmKGZvcndhcmQpe1xuICAgICAgICAgICAgZGlzdCA9IGRpc3RhbmNlIC0gMyp0aGlzLnNwZWVkV2FsaztcbiAgICAgICAgICAgIGlmIChkaXN0IDwgMCkgZGlzdCA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkaXN0ID0gZGlzdGFuY2UgKyAzKnRoaXMuc3BlZWRXYWxrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkaXN0O1xuXG5cbiAgICB9XG4gICAgcmVsb2FkKCl7XG4gICAgICAgIHRoaXMuYXAgPSB0aGlzLmJhc2VBcDtcbiAgICAgICAgdGhpcy5kZWZlbmNlID0gMDtcbiAgICB9O1xuICAgIGFjdGlvbkJsb2NrKCl7XG4gICAgICAgIGlmICh0aGlzLmFwIDwgNSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYGhhdmUgbm90IGFjdGlvbiBwb2ludCBmb3IgdGhpcyBhY3Rpb24sXFxuJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9IGhhdmUgJHt0aGlzLmFwfSBhY3Rpb24gcG9pbnRzYCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hcCAtPSA1O1xuICAgICAgICB0aGlzLmRlZmVuY2UgKz01O1xuICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9IGRlZmVuc2UgPSAke3RoaXMuZGVmZW5jZX1gKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlubmVyRGFtYWdlKGRhbWFnZUZ1bmMpe1xuICAgICAgICBpZiAodGhpcy5kZWZlbmNlIC0gZGFtYWdlRnVuYyA8IDApe1xuICAgICAgICAgICAgdGhpcy5ocCArPSB0aGlzLmRlZmVuY2UgLSBkYW1hZ2VGdW5jO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk15IGRlZmVuc2Ugc2F2ZSBtZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLmhwIDwgMCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgVGhlICR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfSB3YXMga2lsbGVkYCk7XG4gICAgICAgICAgICBkZWxldGUgdGhpcztcbiAgICAgICAgfVxuICAgIH1cbiAgICBhY3Rpb25IaXQoZGlzdGFuY2UgPSAwKXtcbiAgICAgICAgaWYgKHRoaXMuYXAgPCA1KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgaGF2ZSBub3QgYWN0aW9uIHBvaW50IGZvciB0aGlzIGFjdGlvbixcXG4ke3RoaXMuY29uc3RydWN0b3IubmFtZX0gaGF2ZSAke3RoaXMuYXB9IGFjdGlvbiBwb2ludHNgKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFwIC09IDU7XG4gICAgICAgIGlmIChkaXN0YW5jZSA+IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBJIGNhbid0IGhpdCBteSBlbmVteSwgaGUgaXMgdG8gZmFyYCk7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmRhbWFnZTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NsYXNzLWRlZmF1bHQuanMiLCIvKipcbiAqIENyZWF0ZWQgYnkgZGltYSBvbiAyNC4wMi4yMDE3LlxuICovXG5pbXBvcnQgQmFzaWNDaGFyYWN0ZXIgZnJvbSAnLi9jbGFzcy1kZWZhdWx0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWxmIGV4dGVuZHMgQmFzaWNDaGFyYWN0ZXJ7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoNDAsMjApO1xuICAgICAgICB0aGlzLl9hcnJvd3MgPSAxMDtcblxuICAgIH07XG4gICAgc2hvd0Fycm93cygpe1xuICAgICAgICByZXR1cm4gdGhpcy5fYXJyb3dzO1xuICAgIH07XG4gICAgYWN0aW9uU2hvb3QoZGlzdGFuY2UgPSAwKXtcbiAgICAgICAgaWYgKHRoaXMuYXAgPCA1KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgaGF2ZSBub3QgYWN0aW9uIHBvaW50IGZvciB0aGlzIGFjdGlvbixcXG4ke3RoaXMuY29uc3RydWN0b3IubmFtZX0gaGF2ZSAke3RoaXMuYXB9IGFjdGlvbiBwb2ludHNgKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFwIC09IDU7XG4gICAgICAgIC8vIG1heGltdW0gZGlzdGFuY2UgOTBtLCAgaW4gdGhlIDEwbSBhbmQgPCBtYXhpbXVtIGRhbWFnZSB0aGlzLmRhbWFnZSArIGFycm93IGRhbWFnZSg1KVxuICAgICAgICBsZXQgYmFzZURpc3RhbmNlID0gZGlzdGFuY2UgLSAxMDtcbiAgICAgICAgbGV0IGN1cmVudERhbWFnZSA9IGJhc2VEaXN0YW5jZSA8PSAwID8gdGhpcy5kYW1hZ2UgKyA1IDogKHRoaXMuZGFtYWdlICsgNSkgLSAodGhpcy5kYW1hZ2UgKyA1KSooYmFzZURpc3RhbmNlKjEuMjMpLzEwMCA7XG4gICAgICAgIC8vIDEuMjMgLSBpdCBzdGVwIGZyb20gMCB0byA4MVxuICAgICAgICByZXR1cm4gY3VyZW50RGFtYWdlO1xuICAgIH07XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NsYXNzLWVsZi5qcyIsIi8qKlxuICogQ3JlYXRlZCBieSBkaW1hIG9uIDI0LjAyLjIwMTcuXG4gKi9cbmltcG9ydCBCYXNpY0NoYXJhY3RlciBmcm9tICcuL2NsYXNzLWRlZmF1bHQnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEh1bWFuIGV4dGVuZHMgQmFzaWNDaGFyYWN0ZXJ7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoODAsIDMwKTtcbiAgICAgICAgdGhpcy5fYnVpbGRDb3VudCA9IDA7XG4gICAgfTtcbiAgICBidWlsZCAoKXtcbiAgICAgICAgaWYgKHRoaXMuYXAgPCAxMCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYGhhdmUgbm90IGFjdGlvbiBwb2ludCBmb3IgdGhpcyBhY3Rpb24sXFxuJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9IGhhdmUgJHt0aGlzLmFwfSBhY3Rpb24gcG9pbnRzYCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hcCAtPSAxMDtcbiAgICAgICAgaWYgKHRoaXMuX2J1aWxkQ291bnQgPCAzKXtcbiAgICAgICAgICAgIHRoaXMuaHAgKz0xMDtcbiAgICAgICAgICAgIHRoaXMuX2J1aWxkQ291bnQrKztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBUaGUgaHVtYW4gaGF2ZSAke0pTT04uc3RyaW5naWZ5KHRoaXMpfSBwYXJhbWApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYEkgY2FuJ3QgYnVpbGQgdGhlIGhvdXNlYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2J1aWxkQ291bnQ7XG4gICAgfTtcbiAgICBhY3Rpb24oZW5lbXkpe1xuICAgICAgICBpZihlbmVteS5jb25zdHJ1Y3Rvci5uYW1lID09PSBcIkVsZlwiICl7XG4gICAgICAgICAgICBpZiAodGhpcy5ocCA8IDMwIHx8IGRpc3RhbmNlID49IDkxKXtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGlzdGFuY2UgPCA1MCAmJiBkaXN0YW5jZSAhPT0gMCApe1xuICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gdGhpcy5hY3Rpb25SdW4odHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGlzdGFuY2UgPiA3MCAmJiBkaXN0YW5jZSA8IDkxKXtcbiAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IHRoaXMuYWN0aW9uUnVuKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGRpc3RhbmNlID09PSAwKXtcbiAgICAgICAgICAgICAgICB0aGlzLmhpdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuaGl0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH07XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY2xhc3MtaHVtYW4uanMiLCIvKipcbiAqIENyZWF0ZWQgYnkgdXNlciBvbiAxOC4wMi4xNy5cbiAqL1xuXG5pbXBvcnQgSHVtYW4gZnJvbSAnLi9jbGFzcy1odW1hbic7XG5pbXBvcnQgRWxmIGZyb20gJy4vY2xhc3MtZWxmJztcblxuZXhwb3J0IGxldCBodW0gPSBuZXcgSHVtYW47XG5leHBvcnQgbGV0IGVsZiA9IG5ldyBFbGY7XG5cbmNvbnNvbGUubG9nKGh1bSk7XG5jb25zb2xlLmxvZyhlbGYpO1xuXG5sZXQgZGlzdGFuY2UgPSAzNTtcbmZ1bmN0aW9uIGZpZ2h0KHdhcjEsIHdhcjIpIHtcbiAgICBjb25zb2xlLmxvZyhkaXN0YW5jZSk7XG4gICAgY29uc29sZS5sb2cod2FyMSk7XG59XG5cbmZpZ2h0KGh1bSwgZWxmKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvbXlfZXM2LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==