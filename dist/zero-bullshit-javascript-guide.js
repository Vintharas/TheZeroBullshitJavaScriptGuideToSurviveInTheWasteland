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
	
	var _factories = __webpack_require__(4);
	
	var _factoriesComposition = __webpack_require__(5);
	
	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
	
	var zeroBullshitJavaScriptGuide = {
	  test: function test() {
	    console.log(pip(_templateObject));
	    (0, _classes.testFunctionalMixinWithClasses)();
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

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.fireWeapon = fireWeapon;
	exports.testNew = testNew;
	exports.testFunctionalMixinWithClasses = testFunctionalMixinWithClasses;
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Weapon = exports.Weapon = function () {
	  function Weapon(damage, rateOfFire) {
	    var weight = arguments.length <= 2 || arguments[2] === undefined ? 10 : arguments[2];
	
	    _classCallCheck(this, Weapon);
	
	    this.rateOfFire = rateOfFire;
	
	    Object.assign(this, canBeWeighted(this, weight), {
	      toString: function toString() {
	        // closure
	        return 'an undescriptive weapon with ' + damage + ' damage';
	      }
	    });
	  }
	
	  _createClass(Weapon, [{
	    key: 'fire',
	    value: function fire() {
	      console.log('You fire ' + this);
	    }
	  }]);
	
	  return Weapon;
	}();
	
	var MutantSoldier = exports.MutantSoldier = function () {
	  function MutantSoldier(name, hp) {
	    _classCallCheck(this, MutantSoldier);
	
	    Object.assign(this, { name: name, hp: hp }, canBeWeighted(this, 300));
	  }
	
	  _createClass(MutantSoldier, [{
	    key: 'toString',
	    value: function toString() {
	      return this.name;
	    }
	  }, {
	    key: 'attack',
	    value: function attack() {
	      // attack...
	    }
	  }, {
	    key: 'move',
	    value: function move() {
	      // move...
	    }
	  }]);
	
	  return MutantSoldier;
	}();
	
	var Wall = exports.Wall = function () {
	  function Wall(defense, hp) {
	    _classCallCheck(this, Wall);
	
	    Object.assign(this, { defense: defense, hp: hp }, canBeWeighted(this, 10000));
	  }
	
	  _createClass(Wall, [{
	    key: 'toString',
	    value: function toString() {
	      return 'a kick-ass wall';
	    }
	  }]);
	
	  return Wall;
	}();
	
	// Example Functional mixin that also encapsulates state
	
	
	function canBeWeighted(item, weight) {
	  Object.assign(item, {
	    weight: weight,
	    examineWeight: examineWeight,
	    pickUp: pickUp
	  });
	
	  function examineWeight() {
	    if (item.weight > 50) {
	      console.log(item.toString() + ' looks heavy');
	    } else {
	      console.log(item.toString() + ' looks light');
	    }
	  }
	  function pickUp() {
	    if (weight > 50) {
	      console.log(item.toString() + ' is too heavy, you can\'t pick it up');
	    } else {
	      console.log('You pick ' + item + ' up');
	    }
	  }
	}
	
	var HeavyWeapon = exports.HeavyWeapon = function (_Weapon) {
	  _inherits(HeavyWeapon, _Weapon);
	
	  function HeavyWeapon(damage, rateOfFire) {
	    var weight = arguments.length <= 2 || arguments[2] === undefined ? 50 : arguments[2];
	
	    _classCallCheck(this, HeavyWeapon);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(HeavyWeapon).call(this, damage * 10, rateOfFire / 2, weight));
	  }
	
	  _createClass(HeavyWeapon, [{
	    key: 'toString',
	    value: function toString() {
	      return _get(Object.getPrototypeOf(HeavyWeapon.prototype), 'toString', this).call(this) + '. It looks heavy.';
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
	  console.log('heavy weapon damage: ' + heavyWeapon.damage);
	  // heavy weapon with damage: undefined
	}
	
	function testNew() {
	  // ups, forgot the new keyword
	  try {
	    var weapon = ES5Weapon(10, 1);
	    console.log('weapon is : ' + weapon);
	  } catch (error) {
	    console.log(error);
	    // => cannot set property damage of undefined
	    //    this.damage = damage;
	  }
	}
	
	function ES5Weapon(damage, rateOfFire) {
	  var weight = arguments.length <= 2 || arguments[2] === undefined ? 10 : arguments[2];
	
	  this.damage = damage;
	  this.rageOfFire = rateOfFire;
	  this.weight = weight;
	}
	
	function testFunctionalMixinWithClasses() {
	  var weapon = new Weapon(10, 1);
	  var mutant = new MutantSoldier('jaime', 100);
	  var wall = new Wall(200, 10000);
	  var stuff = [weapon, mutant, wall];
	  stuff.forEach(function (s) {
	    s.examineWeight();
	    s.pickUp();
	  });
	  /* =>
	    */
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
	      var _this = this;
	
	      if (!this.wares.length > 0) {
	        this.wares = this.repo.getAll(function (wares) {
	          _this.wares = wares;
	          console.log(_this.wares);
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
	
	  console.log('=== this explicitly ===');
	  fireUnbound.call( /* this */weapon);
	  // => you fire an undescriptive weapon with 10 damage
	  fireUnbound.call( /* this */'jaime');
	  // => you fire jaime
	
	  console.log('=== this bound ===');
	  var fireBound = weapon.fire.bind(weapon);
	  fireBound();
	  // => you fire an undescriptive weapon with 10 damage
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("fs");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.TheWeapon = TheWeapon;
	exports.fireTheWeapon = fireTheWeapon;
	exports.testCallbackProblemWithFactories = testCallbackProblemWithFactories;
	
	var _fs = __webpack_require__(3);
	
	var _fs2 = _interopRequireDefault(_fs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function TheWeapon(damage, rateOfFire) {
	  var weight = arguments.length <= 2 || arguments[2] === undefined ? 10 : arguments[2];
	
	  // damage is private by virtue of da closure
	  // public API
	  return {
	    rateOfFire: rateOfFire,
	    weight: weight,
	    toString: toString,
	    fire: fire
	  };
	
	  function toString() {
	    return 'an undescriptive weapon with ' + damage + ' damage';
	  }
	  function fire() {
	    return console.log('You fire ' + toString());
	  }
	}
	
	function fireTheWeapon() {
	  var weapon = TheWeapon(10, 1);
	  weapon.fire();
	  // => You fire an undescriptive weapon 10 damage
	}
	
	var WeaponRepositoryOhYeah = function () {
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
	
	function Shop() {
	  var repo = new WeaponRepositoryOhYeah();
	  var wares = [];
	
	  return {
	    wares: wares,
	    listWares: listWares
	  };
	
	  // no need for this
	  // and no problems with callbacks
	  function listWares() {
	    if (!wares.length > 0) {
	      repo.getAll(function (allWares) {
	        wares.push.apply(wares, _toConsumableArray(allWares));
	        console.log(wares);
	      });
	    } else {
	      console.log(wares);
	    }
	  }
	}
	
	function testCallbackProblemWithFactories() {
	  var shop = Shop();
	  shop.listWares();
	  // => lots'a wares
	}

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.testComposition = testComposition;
	/*
	*
	* Object composition
	*   Define objects in terms of what they can do (behavior)
	*   instead of in terms of what they are (class)
	*   See "composition over inheritance" => https://www.youtube.com/watch?v=wfMtDGfHWpA
	*
	* --- Animal
	*  |    |- poop
	*  |
	*  |------ Dog
	*  |        |- /poop/
	*  |        |- bark
	*  |
	*  |------ Cat
	*           |- /poop/
	*           |- meow
	*
	*
	* --- Robot
	*  |    |- drive
	*  |
	*  |------ CleanerRobot
	*  |        |- /drive/
	*  |        |- clean
	*  |
	*  |------ KillerRobot
	*  |        |- /drive/
	*           |- kill
	*
	*
	*
	*  New requirement: RobotKillerDog???
	*   - RobotKillerDog with bark method
	*     - duplicated bark
	*   - WorldObject parent to Robot and Animal with bark
	*     - Removes duplication
	*     - inherited unused method in other classes
	*
	*
	*  Using composition
	*     - Define behavior as composable units (objects or functions) => barker, pooper, cleaner, killer, drive, etc
	*     - Define factories in terms of these composable units
	*       - RobotKillerDog = barker + driver + killer
	*
	*
	*/
	
	var barker = function barker(state) {
	  return {
	    bark: function bark() {
	      return console.log('Woof, Woof, I am ' + state.name);
	    }
	  };
	};
	var driver = function driver(state) {
	  return {
	    drive: function drive() {
	      state.position.x += state.position.x + state.speed;
	      state.position.y += state.position.y + state.speed;
	      console.log(state.name + ' moves to position (' + state.position.x + ', ' + state.position.y + ')');
	    }
	  };
	};
	var killer = function killer(state) {
	  return {
	    kill: function kill(target) {
	      return console.log(state.name + ' kills ' + target.name + '. Maniac!');
	    }
	  };
	};
	
	// or function RobotKillerDog
	var RobotKillerDog = exports.RobotKillerDog = function RobotKillerDog(name) {
	  // privates
	  var state = {
	    name: name,
	    speed: 1,
	    position: { x: 0, y: 0 }
	  };
	
	  // public API
	  return Object.assign({}, barker(state), driver(state), killer(state), {
	    get name() {
	      return state.name;
	    }
	  });
	};
	
	function testComposition() {
	  var thor = RobotKillerDog('Thor');
	  var odin = RobotKillerDog('Odin');
	
	  thor.bark();
	  // => Woof, Woof, I'm Thor
	  thor.drive();
	  // => Thor moves to position (1,1)
	  thor.kill(odin);
	  // => Thor kills Odin. Maniac!
	}
	
	var pooper = function pooper(state) {
	  return {
	    poop: function poop() {
	      return console.log(state.name + ' poops');
	    }
	  };
	};
	
	// composing new objects from these behaviors is very straight forward
	function Dog(name) {
	  var state = { name: name };
	  return Object.assign({}, barker(state), pooper(state));
	}
	
	function KillerRobot() {
	  var state = { name: name, speed: 0, position: { x: 0, y: 0 } };
	  return Object.assign({}, driver(state), killer(state));
	}
	
	// etc

	// Advantages
	//   - super flexibility
	//   - code reusable
	//   - less code required than using class composition (via delegation)
	//   - no problems with this/new
	// Disadvantages
	//   - there's a lot of implicit things going on here that may cause errors at runtime
	//     - the contract of what is required from state is define in a mixin implementation
	//     - cannot define requirements
	//     - can have name collisions with mixins
	//   - there's more sofisticated object composition solutions

/***/ }
/******/ ])
});
;
//# sourceMappingURL=zero-bullshit-javascript-guide.js.map