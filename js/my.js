var my_es6 =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

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