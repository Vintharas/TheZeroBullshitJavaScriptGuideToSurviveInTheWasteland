(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("fs"));
	else if(typeof define === 'function' && define.amd)
		define(["fs"], factory);
	else if(typeof exports === 'object')
		exports["zeroBullshitJavaScriptGuide"] = factory(require("fs"));
	else
		root["zeroBullshitJavaScriptGuide"] = factory(root["fs"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _templateObject = _taggedTemplateLiteral(['Starting simulation'], ['Starting simulation']),
	    _templateObject2 = _taggedTemplateLiteral(['Completing simulation'], ['Completing simulation']);
	
	var _classes = __webpack_require__(1);
	
	var _this = __webpack_require__(2);
	
	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
	
	var zeroBullshitJavaScriptGuide = {
	  test: function test() {
	    console.log(pip(_templateObject));
	    //testThis();
	    (0, _this.testHowThisWorks)();
	    console.log(pip(_templateObject2));
	  }
	};
	
	// tag, reusable formatting function
	function pip(literals /*[, substitutions]*/) {
	  return '\n************************************************************\n  PIP 4000 - ' + literals.join(' - ') + ' -\n************************************************************\n  ';
	}
	
	exports.default = zeroBullshitJavaScriptGuide;
	
	// like a boss
	
	zeroBullshitJavaScriptGuide.test();

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.fireWeapon = fireWeapon;
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Weapon = exports.Weapon = function () {
	  function Weapon(damage, rateOfFire) {
	    var weight = arguments.length <= 2 || arguments[2] === undefined ? 10 : arguments[2];
	
	    _classCallCheck(this, Weapon);
	
	    this.rateOfFire = rateOfFire;
	    this.weight = weight;
	
	    Object.assign(this, {
	      toString: function toString() {
	        // closure
	        return "an undescriptive weapon with " + damage + " damage";
	      }
	    });
	  }
	
	  _createClass(Weapon, [{
	    key: "fire",
	    value: function fire() {
	      console.log("You fire " + this);
	    }
	  }]);
	
	  return Weapon;
	}();
	
	var HeavyWeapon = exports.HeavyWeapon = function (_Weapon) {
	  _inherits(HeavyWeapon, _Weapon);
	
	  function HeavyWeapon(damage, rateOfFire) {
	    var weight = arguments.length <= 2 || arguments[2] === undefined ? 50 : arguments[2];
	
	    _classCallCheck(this, HeavyWeapon);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(HeavyWeapon).call(this, damage * 10, rateOfFire / 2, weight));
	  }
	
	  _createClass(HeavyWeapon, [{
	    key: "toString",
	    value: function toString() {
	      return _get(Object.getPrototypeOf(HeavyWeapon.prototype), "toString", this).call(this) + ". It looks heavy.";
	    }
	  }]);
	
	  return HeavyWeapon;
	}(Weapon);
	
	function fireWeapon() {
	  var weapon = new Weapon(10, 1);
	  weapon.fire();
	  // you fire an undescriptive weapon with 10 damage
	  var heavyWeapon = new HeavyWeapon(10, 1);
	  heavyWeapon.fire();
	  // you fire an undescriptive weapon with 100 damage. It looks heavy
	
	  // testing privacy
	  console.log("heavy weapon damage: " + heavyWeapon.damage);
	  // heavy weapon with damage: undefined
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Shop = exports.WeaponRepositoryOhYeah = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.testThis = testThis;
	exports.testHowThisWorks = testHowThisWorks;
	
	var _classes = __webpack_require__(1);
	
	var _fs = __webpack_require__(3);
	
	var _fs2 = _interopRequireDefault(_fs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var WeaponRepositoryOhYeah = exports.WeaponRepositoryOhYeah = function () {
	  function WeaponRepositoryOhYeah() {
	    _classCallCheck(this, WeaponRepositoryOhYeah);
	  }
	
	  _createClass(WeaponRepositoryOhYeah, [{
	    key: 'getAll',
	    value: function getAll(done) {
	      _fs2.default.readFile('./src/oop/weapons.json', 'utf8', function (err, data) {
	        if (err) {
	          return console.log(err);
	        }
	        done(JSON.parse(data));
	      });
	    }
	  }]);
	
	  return WeaponRepositoryOhYeah;
	}();
	
	var Shop = exports.Shop = function () {
	  function Shop() {
	    _classCallCheck(this, Shop);
	
	    this.wares = [];
	    this.repo = new WeaponRepositoryOhYeah();
	  }
	
	  _createClass(Shop, [{
	    key: 'listWares',
	    value: function listWares() {
	      if (!this.wares.length > 0) {
	        this.wares = this.repo.getAll(function done(wares) {
	          try {
	            this.wares = wares;
	            console.log(this.wares);
	          } catch (error) {
	            console.log('error: ' + error.message);
	            // => error: cannot set wares of undefined!
	          }
	        });
	      } else {
	          console.log(this.wares);
	        }
	    }
	  }]);
	
	  return Shop;
	}();
	
	function testThis() {
	  var repo = new Shop();
	  repo.listWares();
	}
	
	function testHowThisWorks() {
	  var weapon = new _classes.Weapon( /* damage */10, /* rateOfFire */1);
	  console.log('=== this with dot notation ===');
	  // fire calls => console.log(`You fire ${this}`);
	  weapon.fire();
	  // => you fire an undescriptive weapon with 10 damage
	
	  console.log('=== this unbound ===');
	  var fireUnbound = weapon.fire;
	  fireUnbound();
	  // => you fire undefined
	
	  console.log('=== this bound explicitly ===');
	  fireUnbound.call( /* this */weapon);
	  // => you fire an undescriptive weapon with 10 damage
	  fireUnbound.call( /* this */'jaime');
	  // => you fire jaime
	
	  var fireBound = weapon.fire.bind(weapon);
	  fireBound();
	  // => you fire an undescriptive weapon with 10 damage
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("fs");

/***/ }
/******/ ])
});
;
//# sourceMappingURL=zero-bullshit-javascript-guide.js.map