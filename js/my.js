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

            console.log(this + " hit");
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
            console.log(distance);
            var direct = false;
            if (enemy.constructor.name === "Elf") {
                if (this.hp < 30 || distance >= 91) {
                    this.build();
                }
                if (distance < 50 && distance !== 0) {
                    distance = this.actionRun(true);
                }
                if (enemy._arrows === 0 && distance !== 0) {
                    distance = this.actionRun(true);
                    direct = true;
                }
                if (distance > 70 && distance < 91) {
                    distance = this.actionRun(false);
                }
                if (distance === 0) {
                    enemy.innerDamage(this.actionHit());
                    enemy.innerDamage(this.actionHit());
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


var _classHuman = __webpack_require__(2);

var _classHuman2 = _interopRequireDefault(_classHuman);

var _classElf = __webpack_require__(1);

var _classElf2 = _interopRequireDefault(_classElf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by user on 18.02.17.
 */

var hum = new _classHuman2.default();
var elf = new _classElf2.default();

var distance = 35;
function raund(war1, war2) {

  war1.action(war2);
  war1.reload();
}

raund(hum, elf);

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZGJlNzNjNTVhOGY3MDZkZjlmYzYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NsYXNzLWRlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NsYXNzLWVsZi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY2xhc3MtaHVtYW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL215X2VzNi5qcyJdLCJuYW1lcyI6WyJCYXNpY0NoYXJhY3RlciIsImhwIiwicG93ZXIiLCJkYW1hZ2UiLCJiYXNlQXAiLCJzcGVlZFdhbGsiLCJfYmFzZUFwIiwiYXAiLCJkZWZlbmNlIiwiZm9yd2FyZCIsImNvbnNvbGUiLCJsb2ciLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJkaXN0IiwiZGlzdGFuY2UiLCJkYW1hZ2VGdW5jIiwiRWxmIiwiX2Fycm93cyIsImJhc2VEaXN0YW5jZSIsImN1cmVudERhbWFnZSIsIkh1bWFuIiwiX2J1aWxkQ291bnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZW5lbXkiLCJkaXJlY3QiLCJidWlsZCIsImFjdGlvblJ1biIsImlubmVyRGFtYWdlIiwiYWN0aW9uSGl0IiwiaHVtIiwiZWxmIiwicmF1bmQiLCJ3YXIxIiwid2FyMiIsImFjdGlvbiIsInJlbG9hZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FB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Q0FGLDZCQUFTLElBQVQ7QUFDSDtBQUNELG9CQUFJWCxXQUFXLEVBQVgsSUFBaUJBLFdBQVcsRUFBaEMsRUFBbUM7QUFDL0JBLCtCQUFXLEtBQUthLFNBQUwsQ0FBZSxLQUFmLENBQVg7QUFDSDtBQUNELG9CQUFHYixhQUFhLENBQWhCLEVBQWtCO0FBQ2RVLDBCQUFNSSxXQUFOLENBQWtCLEtBQUtDLFNBQUwsRUFBbEI7QUFDQUwsMEJBQU1JLFdBQU4sQ0FBa0IsS0FBS0MsU0FBTCxFQUFsQjtBQUNIO0FBRUo7QUFDSjs7Ozs7O2tCQTNDZ0JULEs7Ozs7Ozs7OztBQ0FyQjs7OztBQUNBOzs7Ozs7QUFOQTs7OztBQVFBLElBQUlVLE1BQU0sMEJBQVY7QUFDQSxJQUFJQyxNQUFNLHdCQUFWOztBQUdBLElBQUlqQixXQUFXLEVBQWY7QUFDQSxTQUFTa0IsS0FBVCxDQUFlQyxJQUFmLEVBQXNCQyxJQUF0QixFQUE0Qjs7QUFFeEJELE9BQUtFLE1BQUwsQ0FBWUQsSUFBWjtBQUNBRCxPQUFLRyxNQUFMO0FBRUg7O0FBRURKLE1BQU1GLEdBQU4sRUFBV0MsR0FBWCxFIiwiZmlsZSI6Im15LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZGJlNzNjNTVhOGY3MDZkZjlmYzYiLCIvKipcclxuICogQ3JlYXRlZCBieSBkaW1hIG9uIDI0LjAyLjIwMTcuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNpY0NoYXJhY3RlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihocCA9IDEwMCwgcG93ZXIgPSA1MCwgZGFtYWdlPSAxNSwgYmFzZUFwID0gMTAsIHNwZWVkV2FsayA9IDUpe1xyXG4gICAgICAgIHRoaXMuaHAgPSBocDtcclxuICAgICAgICB0aGlzLnBvd2VyID0gcG93ZXI7XHJcbiAgICAgICAgdGhpcy5kYW1hZ2UgPSBkYW1hZ2U7XHJcbiAgICAgICAgdGhpcy5fYmFzZUFwID0gYmFzZUFwO1xyXG4gICAgICAgIHRoaXMuYXAgPSBiYXNlQXA7XHJcbiAgICAgICAgdGhpcy5zcGVlZFdhbGsgPSBzcGVlZFdhbGs7XHJcbiAgICAgICAgdGhpcy5kZWZlbmNlID0gMDtcclxuICAgIH07XHJcbiAgICBhY3Rpb25XYWxrKGZvcndhcmQpe1xyXG4gICAgICAgIGlmICh0aGlzLmFwIDwgNSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgaGF2ZSBub3QgYWN0aW9uIHBvaW50IGZvciB0aGlzIGFjdGlvbixcXG4ke3RoaXMuY29uc3RydWN0b3IubmFtZX0gaGF2ZSAke3RoaXMuYXB9IGFjdGlvbiBwb2ludHNgKTtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXAgLT0gNTtcclxuICAgICAgICBsZXQgZGlzdDtcclxuICAgICAgICBpZihmb3J3YXJkKXtcclxuICAgICAgICAgICAgZGlzdCA9IGRpc3RhbmNlIC0gdGhpcy5zcGVlZFdhbGs7XHJcbiAgICAgICAgICAgIGlmIChkaXN0IDwgMCkgZGlzdCA9IDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGlzdCA9IGRpc3RhbmNlICsgdGhpcy5zcGVlZFdhbGs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkaXN0O1xyXG4gICAgfTtcclxuICAgIGFjdGlvblJ1bihmb3J3YXJkKXtcclxuICAgICAgICBpZiAodGhpcy5hcCA8IDEwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBoYXZlIG5vdCBhY3Rpb24gcG9pbnQgZm9yIHRoaXMgYWN0aW9uLFxcbiR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfSBoYXZlICR7dGhpcy5hcH0gYWN0aW9uIHBvaW50c2ApO1xyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hcCAtPSAxMDtcclxuXHJcbiAgICAgICAgbGV0IGRpc3Q7XHJcbiAgICAgICAgaWYoZm9yd2FyZCl7XHJcbiAgICAgICAgICAgIGRpc3QgPSBkaXN0YW5jZSAtIDMqdGhpcy5zcGVlZFdhbGs7XHJcbiAgICAgICAgICAgIGlmIChkaXN0IDwgMCkgZGlzdCA9IDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGlzdCA9IGRpc3RhbmNlICsgMyp0aGlzLnNwZWVkV2FsaztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRpc3Q7XHJcblxyXG5cclxuICAgIH1cclxuICAgIHJlbG9hZCgpe1xyXG4gICAgICAgIHRoaXMuYXAgPSB0aGlzLmJhc2VBcDtcclxuICAgICAgICB0aGlzLmRlZmVuY2UgPSAwO1xyXG4gICAgfTtcclxuICAgIGFjdGlvbkJsb2NrKCl7XHJcbiAgICAgICAgaWYgKHRoaXMuYXAgPCA1KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBoYXZlIG5vdCBhY3Rpb24gcG9pbnQgZm9yIHRoaXMgYWN0aW9uLFxcbiR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfSBoYXZlICR7dGhpcy5hcH0gYWN0aW9uIHBvaW50c2ApO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXAgLT0gNTtcclxuICAgICAgICB0aGlzLmRlZmVuY2UgKz01O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX0gZGVmZW5zZSA9ICR7dGhpcy5kZWZlbmNlfWApO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgaW5uZXJEYW1hZ2UoZGFtYWdlRnVuYyl7XHJcbiAgICAgICAgaWYgKHRoaXMuZGVmZW5jZSAtIGRhbWFnZUZ1bmMgPCAwKXtcclxuICAgICAgICAgICAgdGhpcy5ocCArPSB0aGlzLmRlZmVuY2UgLSBkYW1hZ2VGdW5jO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk15IGRlZmVuc2Ugc2F2ZSBtZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5ocCA8IDApe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgVGhlICR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfSB3YXMga2lsbGVkYCk7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFjdGlvbkhpdChkaXN0YW5jZSA9IDApe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXN9IGhpdGApO1xyXG4gICAgICAgIGlmICh0aGlzLmFwIDwgNSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgaGF2ZSBub3QgYWN0aW9uIHBvaW50IGZvciB0aGlzIGFjdGlvbixcXG4ke3RoaXMuY29uc3RydWN0b3IubmFtZX0gaGF2ZSAke3RoaXMuYXB9IGFjdGlvbiBwb2ludHNgKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFwIC09IDU7XHJcbiAgICAgICAgaWYgKGRpc3RhbmNlID4gMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgSSBjYW4ndCBoaXQgbXkgZW5lbXksIGhlIGlzIHRvIGZhcmApO1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmRhbWFnZTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jbGFzcy1kZWZhdWx0LmpzIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgZGltYSBvbiAyNC4wMi4yMDE3LlxyXG4gKi9cclxuaW1wb3J0IEJhc2ljQ2hhcmFjdGVyIGZyb20gJy4vY2xhc3MtZGVmYXVsdCc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWxmIGV4dGVuZHMgQmFzaWNDaGFyYWN0ZXJ7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKDQwLDIwKTtcclxuICAgICAgICB0aGlzLl9hcnJvd3MgPSAxMDtcclxuXHJcbiAgICB9O1xyXG4gICAgc2hvd0Fycm93cygpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hcnJvd3M7XHJcbiAgICB9O1xyXG4gICAgYWN0aW9uU2hvb3QoZGlzdGFuY2UgPSAwKXtcclxuICAgICAgICBpZiAodGhpcy5hcCA8IDUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYGhhdmUgbm90IGFjdGlvbiBwb2ludCBmb3IgdGhpcyBhY3Rpb24sXFxuJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9IGhhdmUgJHt0aGlzLmFwfSBhY3Rpb24gcG9pbnRzYCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hcCAtPSA1O1xyXG4gICAgICAgIC8vIG1heGltdW0gZGlzdGFuY2UgOTBtLCAgaW4gdGhlIDEwbSBhbmQgPCBtYXhpbXVtIGRhbWFnZSB0aGlzLmRhbWFnZSArIGFycm93IGRhbWFnZSg1KVxyXG4gICAgICAgIGxldCBiYXNlRGlzdGFuY2UgPSBkaXN0YW5jZSAtIDEwO1xyXG4gICAgICAgIGxldCBjdXJlbnREYW1hZ2UgPSBiYXNlRGlzdGFuY2UgPD0gMCA/IHRoaXMuZGFtYWdlICsgNSA6ICh0aGlzLmRhbWFnZSArIDUpIC0gKHRoaXMuZGFtYWdlICsgNSkqKGJhc2VEaXN0YW5jZSoxLjIzKS8xMDAgO1xyXG4gICAgICAgIC8vIDEuMjMgLSBpdCBzdGVwIGZyb20gMCB0byA4MVxyXG4gICAgICAgIHJldHVybiBjdXJlbnREYW1hZ2U7XHJcbiAgICB9O1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NsYXNzLWVsZi5qcyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRpbWEgb24gMjQuMDIuMjAxNy5cclxuICovXHJcbmltcG9ydCBCYXNpY0NoYXJhY3RlciBmcm9tICcuL2NsYXNzLWRlZmF1bHQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSHVtYW4gZXh0ZW5kcyBCYXNpY0NoYXJhY3RlcntcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoODAsIDMwKTtcclxuICAgICAgICB0aGlzLl9idWlsZENvdW50ID0gMDtcclxuICAgIH07XHJcbiAgICBidWlsZCAoKXtcclxuICAgICAgICBpZiAodGhpcy5hcCA8IDEwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBoYXZlIG5vdCBhY3Rpb24gcG9pbnQgZm9yIHRoaXMgYWN0aW9uLFxcbiR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfSBoYXZlICR7dGhpcy5hcH0gYWN0aW9uIHBvaW50c2ApO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXAgLT0gMTA7XHJcbiAgICAgICAgaWYgKHRoaXMuX2J1aWxkQ291bnQgPCAzKXtcclxuICAgICAgICAgICAgdGhpcy5ocCArPTEwO1xyXG4gICAgICAgICAgICB0aGlzLl9idWlsZENvdW50Kys7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBUaGUgaHVtYW4gaGF2ZSAke0pTT04uc3RyaW5naWZ5KHRoaXMpfSBwYXJhbWApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBJIGNhbid0IGJ1aWxkIHRoZSBob3VzZWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5fYnVpbGRDb3VudDtcclxuICAgIH07XHJcbiAgICBhY3Rpb24oZW5lbXkpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRpc3RhbmNlKTtcclxuICAgICAgICBsZXQgZGlyZWN0ID0gZmFsc2U7XHJcbiAgICAgICAgaWYoZW5lbXkuY29uc3RydWN0b3IubmFtZSA9PT0gXCJFbGZcIiApe1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ocCA8IDMwIHx8IGRpc3RhbmNlID49IDkxKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnVpbGQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZGlzdGFuY2UgPCA1MCAmJiBkaXN0YW5jZSAhPT0gMCApe1xyXG4gICAgICAgICAgICAgICAgZGlzdGFuY2UgPSB0aGlzLmFjdGlvblJ1bih0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZW5lbXkuX2Fycm93cyA9PT0gMCAmJiBkaXN0YW5jZSAhPT0gMCl7XHJcbiAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IHRoaXMuYWN0aW9uUnVuKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgZGlyZWN0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZGlzdGFuY2UgPiA3MCAmJiBkaXN0YW5jZSA8IDkxKXtcclxuICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gdGhpcy5hY3Rpb25SdW4oZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGRpc3RhbmNlID09PSAwKXtcclxuICAgICAgICAgICAgICAgIGVuZW15LmlubmVyRGFtYWdlKHRoaXMuYWN0aW9uSGl0KCkpO1xyXG4gICAgICAgICAgICAgICAgZW5lbXkuaW5uZXJEYW1hZ2UodGhpcy5hY3Rpb25IaXQoKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY2xhc3MtaHVtYW4uanMiLCIvKipcclxuICogQ3JlYXRlZCBieSB1c2VyIG9uIDE4LjAyLjE3LlxyXG4gKi9cclxuXHJcblxyXG5pbXBvcnQgSHVtYW4gZnJvbSAnLi9jbGFzcy1odW1hbic7XHJcbmltcG9ydCBFbGYgZnJvbSAnLi9jbGFzcy1lbGYnO1xyXG5cclxubGV0IGh1bSA9IG5ldyBIdW1hbjtcclxubGV0IGVsZiA9IG5ldyBFbGY7XHJcblxyXG5cclxubGV0IGRpc3RhbmNlID0gMzU7XHJcbmZ1bmN0aW9uIHJhdW5kKHdhcjEgLCB3YXIyKSB7XHJcblxyXG4gICAgd2FyMS5hY3Rpb24od2FyMik7XHJcbiAgICB3YXIxLnJlbG9hZCgpO1xyXG5cclxufVxyXG5cclxucmF1bmQoaHVtLCBlbGYpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9teV9lczYuanMiXSwic291cmNlUm9vdCI6IiJ9