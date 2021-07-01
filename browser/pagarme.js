(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("pagarme", [], factory);
	else if(typeof exports === 'object')
		exports["pagarme"] = factory();
	else
		root["pagarme"] = factory();
})(this, function() {
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
	
	var _merge = __webpack_require__(1);
	
	var _merge2 = _interopRequireDefault(_merge);
	
	var _client = __webpack_require__(8);
	
	var _client2 = _interopRequireDefault(_client);
	
	var _validations = __webpack_require__(233);
	
	var _validations2 = _interopRequireDefault(_validations);
	
	var _postback = __webpack_require__(218);
	
	var _postback2 = _interopRequireDefault(_postback);
	
	var _resources = __webpack_require__(108);
	
	var _resources2 = _interopRequireDefault(_resources);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _merge2.default)({
	  client: _client2.default,
	  validate: _validations2.default,
	  postback: _postback2.default
	}, _resources2.default);
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var _assign = __webpack_require__(2);
	var _curry2 = __webpack_require__(5);
	
	
	/**
	 * Create a new object with the own properties of the first object merged with
	 * the own properties of the second object. If a key exists in both objects,
	 * the value from the second object will be used.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Object
	 * @sig {k: v} -> {k: v} -> {k: v}
	 * @param {Object} l
	 * @param {Object} r
	 * @return {Object}
	 * @see R.mergeWith, R.mergeWithKey
	 * @example
	 *
	 *      R.merge({ 'name': 'fred', 'age': 10 }, { 'age': 40 });
	 *      //=> { 'name': 'fred', 'age': 40 }
	 *
	 *      var resetToDefault = R.merge(R.__, {x: 0});
	 *      resetToDefault({x: 5, y: 2}); //=> {x: 0, y: 2}
	 */
	module.exports = _curry2(function merge(l, r) {
	  return _assign({}, l, r);
	});


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var _objectAssign = __webpack_require__(3);
	
	module.exports =
	  typeof Object.assign === 'function' ? Object.assign : _objectAssign;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var _has = __webpack_require__(4);
	
	// Based on https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
	module.exports = function _objectAssign(target) {
	  if (target == null) {
	    throw new TypeError('Cannot convert undefined or null to object');
	  }
	
	  var output = Object(target);
	  var idx = 1;
	  var length = arguments.length;
	  while (idx < length) {
	    var source = arguments[idx];
	    if (source != null) {
	      for (var nextKey in source) {
	        if (_has(nextKey, source)) {
	          output[nextKey] = source[nextKey];
	        }
	      }
	    }
	    idx += 1;
	  }
	  return output;
	};


/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = function _has(prop, obj) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var _curry1 = __webpack_require__(6);
	var _isPlaceholder = __webpack_require__(7);
	
	
	/**
	 * Optimized internal two-arity curry function.
	 *
	 * @private
	 * @category Function
	 * @param {Function} fn The function to curry.
	 * @return {Function} The curried function.
	 */
	module.exports = function _curry2(fn) {
	  return function f2(a, b) {
	    switch (arguments.length) {
	      case 0:
	        return f2;
	      case 1:
	        return _isPlaceholder(a) ? f2
	             : _curry1(function(_b) { return fn(a, _b); });
	      default:
	        return _isPlaceholder(a) && _isPlaceholder(b) ? f2
	             : _isPlaceholder(a) ? _curry1(function(_a) { return fn(_a, b); })
	             : _isPlaceholder(b) ? _curry1(function(_b) { return fn(a, _b); })
	             : fn(a, b);
	    }
	  };
	};


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var _isPlaceholder = __webpack_require__(7);
	
	
	/**
	 * Optimized internal one-arity curry function.
	 *
	 * @private
	 * @category Function
	 * @param {Function} fn The function to curry.
	 * @return {Function} The curried function.
	 */
	module.exports = function _curry1(fn) {
	  return function f1(a) {
	    if (arguments.length === 0 || _isPlaceholder(a)) {
	      return f1;
	    } else {
	      return fn.apply(this, arguments);
	    }
	  };
	};


/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = function _isPlaceholder(a) {
	  return a != null &&
	         typeof a === 'object' &&
	         a['@@functional/placeholder'] === true;
	};


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _merge = __webpack_require__(1);
	
	var _merge2 = _interopRequireDefault(_merge);
	
	var _assocPath = __webpack_require__(9);
	
	var _assocPath2 = _interopRequireDefault(_assocPath);
	
	var _curry = __webpack_require__(13);
	
	var _curry2 = _interopRequireDefault(_curry);
	
	var _map = __webpack_require__(17);
	
	var _map2 = _interopRequireDefault(_map);
	
	var _is = __webpack_require__(31);
	
	var _is2 = _interopRequireDefault(_is);
	
	var _ifElse = __webpack_require__(32);
	
	var _ifElse2 = _interopRequireDefault(_ifElse);
	
	var _strategies = __webpack_require__(33);
	
	var _strategies2 = _interopRequireDefault(_strategies);
	
	var _resources = __webpack_require__(108);
	
	var _resources2 = _interopRequireDefault(_resources);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var bindOptions = function bindOptions(options) {
	  return function (func) {
	    return func.bind(null, options);
	  };
	}; /**
	    * Client Module
	    * @description The client module is the entry point for our SDK.
	    *              It holds a Promise-based authentication method
	    *              ([connect]{@link client#connect}) as well as
	    *              allowing for raw use of the resources (without authentication).
	    * @module client
	    */
	
	var bindRecursive = function bindRecursive(options) {
	  return (0, _ifElse2.default)((0, _is2.default)(Function), bindOptions(options), function (resource) {
	    return (0, _map2.default)(bindRecursive(options), resource);
	  });
	};
	
	/**
	 * Binds the `options` and `version` received as param
	 * to the client's resources.
	 *
	 * @param {Object} options
	 * @param {Object} version
	 * @returns A version of resources with its methods' first param binded to `options`
	 * and sets the header 'X-PagarMe-Version' to the version passed as param
	 */
	var withVersion = (0, _curry2.default)(function (options, version) {
	  var optionsWithVersion = (0, _assocPath2.default)(['headers', 'X-PagarMe-Version'], version, options);
	
	  var boundClientWithVersion = (0, _map2.default)(bindRecursive(optionsWithVersion), _resources2.default);
	  return boundClientWithVersion;
	});
	
	/**
	 * Binds the `options` received as param
	 * to the client's resources.
	 * @private
	 *
	 * @param {Object} options
	 * @returns A version of resources with its methods' first param binded to `options`
	 */
	function bindClientOptions(_ref) {
	  var options = _ref.options,
	      authentication = _ref.authentication;
	
	  var boundClient = (0, _map2.default)(bindRecursive(options), _resources2.default);
	
	  return (0, _merge2.default)(boundClient, {
	    authentication: authentication,
	    withVersion: withVersion(options)
	  });
	}
	
	/**
	 * Returns a version of client with
	 * authentication data binded to the
	 * resource requests.
	 *
	 * @example
	 * // API Key Authentication
	 * pagarme.client.connect({ api_key: 'ak_test_y7jk294ynbzf93' })
	 *
	 * // Encryption Key Authentication
	 * pagarme.client.connect({ encryption_key: 'ek_test_y7jk294ynbzf93' })
	 *
	 * // Login Authentication
	 * pagarme.client.connect({ email: 'user@email.com', password: '123456' })
	 *
	 * @param {Object} authentication
	 * @returns {Promise} A Promise that resolves to a client with authentication data binded
	 */
	function connect(authentication) {
	  return _strategies2.default.find(authentication).then(function (s) {
	    return s.execute();
	  }).then(bindClientOptions);
	}
	
	var client = (0, _merge2.default)({ connect: connect }, _resources2.default);
	
	exports.default = client;
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var _curry3 = __webpack_require__(10);
	var _slice = __webpack_require__(11);
	var assoc = __webpack_require__(12);
	
	
	/**
	 * Makes a shallow clone of an object, setting or overriding the nodes required
	 * to create the given path, and placing the specific value at the tail end of
	 * that path. Note that this copies and flattens prototype properties onto the
	 * new object as well. All non-primitive properties are copied by reference.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.8.0
	 * @category Object
	 * @sig [String] -> a -> {k: v} -> {k: v}
	 * @param {Array} path the path to set
	 * @param {*} val the new value
	 * @param {Object} obj the object to clone
	 * @return {Object} a new object similar to the original except along the specified path.
	 * @see R.dissocPath
	 * @example
	 *
	 *      R.assocPath(['a', 'b', 'c'], 42, {a: {b: {c: 0}}}); //=> {a: {b: {c: 42}}}
	 */
	module.exports = _curry3(function assocPath(path, val, obj) {
	  switch (path.length) {
	    case 0:
	      return val;
	    case 1:
	      return assoc(path[0], val, obj);
	    default:
	      return assoc(path[0], assocPath(_slice(path, 1), val, Object(obj[path[0]])), obj);
	  }
	});


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var _curry1 = __webpack_require__(6);
	var _curry2 = __webpack_require__(5);
	var _isPlaceholder = __webpack_require__(7);
	
	
	/**
	 * Optimized internal three-arity curry function.
	 *
	 * @private
	 * @category Function
	 * @param {Function} fn The function to curry.
	 * @return {Function} The curried function.
	 */
	module.exports = function _curry3(fn) {
	  return function f3(a, b, c) {
	    switch (arguments.length) {
	      case 0:
	        return f3;
	      case 1:
	        return _isPlaceholder(a) ? f3
	             : _curry2(function(_b, _c) { return fn(a, _b, _c); });
	      case 2:
	        return _isPlaceholder(a) && _isPlaceholder(b) ? f3
	             : _isPlaceholder(a) ? _curry2(function(_a, _c) { return fn(_a, b, _c); })
	             : _isPlaceholder(b) ? _curry2(function(_b, _c) { return fn(a, _b, _c); })
	             : _curry1(function(_c) { return fn(a, b, _c); });
	      default:
	        return _isPlaceholder(a) && _isPlaceholder(b) && _isPlaceholder(c) ? f3
	             : _isPlaceholder(a) && _isPlaceholder(b) ? _curry2(function(_a, _b) { return fn(_a, _b, c); })
	             : _isPlaceholder(a) && _isPlaceholder(c) ? _curry2(function(_a, _c) { return fn(_a, b, _c); })
	             : _isPlaceholder(b) && _isPlaceholder(c) ? _curry2(function(_b, _c) { return fn(a, _b, _c); })
	             : _isPlaceholder(a) ? _curry1(function(_a) { return fn(_a, b, c); })
	             : _isPlaceholder(b) ? _curry1(function(_b) { return fn(a, _b, c); })
	             : _isPlaceholder(c) ? _curry1(function(_c) { return fn(a, b, _c); })
	             : fn(a, b, c);
	    }
	  };
	};


/***/ },
/* 11 */
/***/ function(module, exports) {

	/**
	 * An optimized, private array `slice` implementation.
	 *
	 * @private
	 * @param {Arguments|Array} args The array or arguments object to consider.
	 * @param {Number} [from=0] The array index to slice from, inclusive.
	 * @param {Number} [to=args.length] The array index to slice to, exclusive.
	 * @return {Array} A new, sliced array.
	 * @example
	 *
	 *      _slice([1, 2, 3, 4, 5], 1, 3); //=> [2, 3]
	 *
	 *      var firstThreeArgs = function(a, b, c, d) {
	 *        return _slice(arguments, 0, 3);
	 *      };
	 *      firstThreeArgs(1, 2, 3, 4); //=> [1, 2, 3]
	 */
	module.exports = function _slice(args, from, to) {
	  switch (arguments.length) {
	    case 1: return _slice(args, 0, args.length);
	    case 2: return _slice(args, from, args.length);
	    default:
	      var list = [];
	      var idx = 0;
	      var len = Math.max(0, Math.min(args.length, to) - from);
	      while (idx < len) {
	        list[idx] = args[from + idx];
	        idx += 1;
	      }
	      return list;
	  }
	};


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var _curry3 = __webpack_require__(10);
	
	
	/**
	 * Makes a shallow clone of an object, setting or overriding the specified
	 * property with the given value. Note that this copies and flattens prototype
	 * properties onto the new object as well. All non-primitive properties are
	 * copied by reference.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.8.0
	 * @category Object
	 * @sig String -> a -> {k: v} -> {k: v}
	 * @param {String} prop the property name to set
	 * @param {*} val the new value
	 * @param {Object} obj the object to clone
	 * @return {Object} a new object similar to the original except for the specified property.
	 * @see R.dissoc
	 * @example
	 *
	 *      R.assoc('c', 3, {a: 1, b: 2}); //=> {a: 1, b: 2, c: 3}
	 */
	module.exports = _curry3(function assoc(prop, val, obj) {
	  var result = {};
	  for (var p in obj) {
	    result[p] = obj[p];
	  }
	  result[prop] = val;
	  return result;
	});


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var _curry1 = __webpack_require__(6);
	var curryN = __webpack_require__(14);
	
	
	/**
	 * Returns a curried equivalent of the provided function. The curried function
	 * has two unusual capabilities. First, its arguments needn't be provided one
	 * at a time. If `f` is a ternary function and `g` is `R.curry(f)`, the
	 * following are equivalent:
	 *
	 *   - `g(1)(2)(3)`
	 *   - `g(1)(2, 3)`
	 *   - `g(1, 2)(3)`
	 *   - `g(1, 2, 3)`
	 *
	 * Secondly, the special placeholder value `R.__` may be used to specify
	 * "gaps", allowing partial application of any combination of arguments,
	 * regardless of their positions. If `g` is as above and `_` is `R.__`, the
	 * following are equivalent:
	 *
	 *   - `g(1, 2, 3)`
	 *   - `g(_, 2, 3)(1)`
	 *   - `g(_, _, 3)(1)(2)`
	 *   - `g(_, _, 3)(1, 2)`
	 *   - `g(_, 2)(1)(3)`
	 *   - `g(_, 2)(1, 3)`
	 *   - `g(_, 2)(_, 3)(1)`
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Function
	 * @sig (* -> a) -> (* -> a)
	 * @param {Function} fn The function to curry.
	 * @return {Function} A new, curried function.
	 * @see R.curryN
	 * @example
	 *
	 *      var addFourNumbers = (a, b, c, d) => a + b + c + d;
	 *
	 *      var curriedAddFourNumbers = R.curry(addFourNumbers);
	 *      var f = curriedAddFourNumbers(1, 2);
	 *      var g = f(3);
	 *      g(4); //=> 10
	 */
	module.exports = _curry1(function curry(fn) {
	  return curryN(fn.length, fn);
	});


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var _arity = __webpack_require__(15);
	var _curry1 = __webpack_require__(6);
	var _curry2 = __webpack_require__(5);
	var _curryN = __webpack_require__(16);
	
	
	/**
	 * Returns a curried equivalent of the provided function, with the specified
	 * arity. The curried function has two unusual capabilities. First, its
	 * arguments needn't be provided one at a time. If `g` is `R.curryN(3, f)`, the
	 * following are equivalent:
	 *
	 *   - `g(1)(2)(3)`
	 *   - `g(1)(2, 3)`
	 *   - `g(1, 2)(3)`
	 *   - `g(1, 2, 3)`
	 *
	 * Secondly, the special placeholder value `R.__` may be used to specify
	 * "gaps", allowing partial application of any combination of arguments,
	 * regardless of their positions. If `g` is as above and `_` is `R.__`, the
	 * following are equivalent:
	 *
	 *   - `g(1, 2, 3)`
	 *   - `g(_, 2, 3)(1)`
	 *   - `g(_, _, 3)(1)(2)`
	 *   - `g(_, _, 3)(1, 2)`
	 *   - `g(_, 2)(1)(3)`
	 *   - `g(_, 2)(1, 3)`
	 *   - `g(_, 2)(_, 3)(1)`
	 *
	 * @func
	 * @memberOf R
	 * @since v0.5.0
	 * @category Function
	 * @sig Number -> (* -> a) -> (* -> a)
	 * @param {Number} length The arity for the returned function.
	 * @param {Function} fn The function to curry.
	 * @return {Function} A new, curried function.
	 * @see R.curry
	 * @example
	 *
	 *      var sumArgs = (...args) => R.sum(args);
	 *
	 *      var curriedAddFourNumbers = R.curryN(4, sumArgs);
	 *      var f = curriedAddFourNumbers(1, 2);
	 *      var g = f(3);
	 *      g(4); //=> 10
	 */
	module.exports = _curry2(function curryN(length, fn) {
	  if (length === 1) {
	    return _curry1(fn);
	  }
	  return _arity(length, _curryN(length, [], fn));
	});


/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = function _arity(n, fn) {
	  /* eslint-disable no-unused-vars */
	  switch (n) {
	    case 0: return function() { return fn.apply(this, arguments); };
	    case 1: return function(a0) { return fn.apply(this, arguments); };
	    case 2: return function(a0, a1) { return fn.apply(this, arguments); };
	    case 3: return function(a0, a1, a2) { return fn.apply(this, arguments); };
	    case 4: return function(a0, a1, a2, a3) { return fn.apply(this, arguments); };
	    case 5: return function(a0, a1, a2, a3, a4) { return fn.apply(this, arguments); };
	    case 6: return function(a0, a1, a2, a3, a4, a5) { return fn.apply(this, arguments); };
	    case 7: return function(a0, a1, a2, a3, a4, a5, a6) { return fn.apply(this, arguments); };
	    case 8: return function(a0, a1, a2, a3, a4, a5, a6, a7) { return fn.apply(this, arguments); };
	    case 9: return function(a0, a1, a2, a3, a4, a5, a6, a7, a8) { return fn.apply(this, arguments); };
	    case 10: return function(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) { return fn.apply(this, arguments); };
	    default: throw new Error('First argument to _arity must be a non-negative integer no greater than ten');
	  }
	};


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var _arity = __webpack_require__(15);
	var _isPlaceholder = __webpack_require__(7);
	
	
	/**
	 * Internal curryN function.
	 *
	 * @private
	 * @category Function
	 * @param {Number} length The arity of the curried function.
	 * @param {Array} received An array of arguments received thus far.
	 * @param {Function} fn The function to curry.
	 * @return {Function} The curried function.
	 */
	module.exports = function _curryN(length, received, fn) {
	  return function() {
	    var combined = [];
	    var argsIdx = 0;
	    var left = length;
	    var combinedIdx = 0;
	    while (combinedIdx < received.length || argsIdx < arguments.length) {
	      var result;
	      if (combinedIdx < received.length &&
	          (!_isPlaceholder(received[combinedIdx]) ||
	           argsIdx >= arguments.length)) {
	        result = received[combinedIdx];
	      } else {
	        result = arguments[argsIdx];
	        argsIdx += 1;
	      }
	      combined[combinedIdx] = result;
	      if (!_isPlaceholder(result)) {
	        left -= 1;
	      }
	      combinedIdx += 1;
	    }
	    return left <= 0 ? fn.apply(this, combined)
	                     : _arity(left, _curryN(length, combined, fn));
	  };
	};


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var _curry2 = __webpack_require__(5);
	var _dispatchable = __webpack_require__(18);
	var _map = __webpack_require__(21);
	var _reduce = __webpack_require__(22);
	var _xmap = __webpack_require__(27);
	var curryN = __webpack_require__(14);
	var keys = __webpack_require__(29);
	
	
	/**
	 * Takes a function and
	 * a [functor](https://github.com/fantasyland/fantasy-land#functor),
	 * applies the function to each of the functor's values, and returns
	 * a functor of the same shape.
	 *
	 * Ramda provides suitable `map` implementations for `Array` and `Object`,
	 * so this function may be applied to `[1, 2, 3]` or `{x: 1, y: 2, z: 3}`.
	 *
	 * Dispatches to the `map` method of the second argument, if present.
	 *
	 * Acts as a transducer if a transformer is given in list position.
	 *
	 * Also treats functions as functors and will compose them together.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig Functor f => (a -> b) -> f a -> f b
	 * @param {Function} fn The function to be called on every element of the input `list`.
	 * @param {Array} list The list to be iterated over.
	 * @return {Array} The new list.
	 * @see R.transduce, R.addIndex
	 * @example
	 *
	 *      var double = x => x * 2;
	 *
	 *      R.map(double, [1, 2, 3]); //=> [2, 4, 6]
	 *
	 *      R.map(double, {x: 1, y: 2, z: 3}); //=> {x: 2, y: 4, z: 6}
	 */
	module.exports = _curry2(_dispatchable('map', _xmap, function map(fn, functor) {
	  switch (Object.prototype.toString.call(functor)) {
	    case '[object Function]':
	      return curryN(functor.length, function() {
	        return fn.call(this, functor.apply(this, arguments));
	      });
	    case '[object Object]':
	      return _reduce(function(acc, key) {
	        acc[key] = fn(functor[key]);
	        return acc;
	      }, {}, keys(functor));
	    default:
	      return _map(fn, functor);
	  }
	}));


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var _isArray = __webpack_require__(19);
	var _isTransformer = __webpack_require__(20);
	var _slice = __webpack_require__(11);
	
	
	/**
	 * Returns a function that dispatches with different strategies based on the
	 * object in list position (last argument). If it is an array, executes [fn].
	 * Otherwise, if it has a function with [methodname], it will execute that
	 * function (functor case). Otherwise, if it is a transformer, uses transducer
	 * [xf] to return a new transformer (transducer case). Otherwise, it will
	 * default to executing [fn].
	 *
	 * @private
	 * @param {String} methodname property to check for a custom implementation
	 * @param {Function} xf transducer to initialize if object is transformer
	 * @param {Function} fn default ramda implementation
	 * @return {Function} A function that dispatches on object in list position
	 */
	module.exports = function _dispatchable(methodname, xf, fn) {
	  return function() {
	    var length = arguments.length;
	    if (length === 0) {
	      return fn();
	    }
	    var obj = arguments[length - 1];
	    if (!_isArray(obj)) {
	      var args = _slice(arguments, 0, length - 1);
	      if (typeof obj[methodname] === 'function') {
	        return obj[methodname].apply(obj, args);
	      }
	      if (_isTransformer(obj)) {
	        var transducer = xf.apply(null, args);
	        return transducer(obj);
	      }
	    }
	    return fn.apply(this, arguments);
	  };
	};


/***/ },
/* 19 */
/***/ function(module, exports) {

	/**
	 * Tests whether or not an object is an array.
	 *
	 * @private
	 * @param {*} val The object to test.
	 * @return {Boolean} `true` if `val` is an array, `false` otherwise.
	 * @example
	 *
	 *      _isArray([]); //=> true
	 *      _isArray(null); //=> false
	 *      _isArray({}); //=> false
	 */
	module.exports = Array.isArray || function _isArray(val) {
	  return (val != null &&
	          val.length >= 0 &&
	          Object.prototype.toString.call(val) === '[object Array]');
	};


/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = function _isTransformer(obj) {
	  return typeof obj['@@transducer/step'] === 'function';
	};


/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = function _map(fn, functor) {
	  var idx = 0;
	  var len = functor.length;
	  var result = Array(len);
	  while (idx < len) {
	    result[idx] = fn(functor[idx]);
	    idx += 1;
	  }
	  return result;
	};


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var _xwrap = __webpack_require__(23);
	var bind = __webpack_require__(24);
	var isArrayLike = __webpack_require__(25);
	
	
	module.exports = (function() {
	  function _arrayReduce(xf, acc, list) {
	    var idx = 0;
	    var len = list.length;
	    while (idx < len) {
	      acc = xf['@@transducer/step'](acc, list[idx]);
	      if (acc && acc['@@transducer/reduced']) {
	        acc = acc['@@transducer/value'];
	        break;
	      }
	      idx += 1;
	    }
	    return xf['@@transducer/result'](acc);
	  }
	
	  function _iterableReduce(xf, acc, iter) {
	    var step = iter.next();
	    while (!step.done) {
	      acc = xf['@@transducer/step'](acc, step.value);
	      if (acc && acc['@@transducer/reduced']) {
	        acc = acc['@@transducer/value'];
	        break;
	      }
	      step = iter.next();
	    }
	    return xf['@@transducer/result'](acc);
	  }
	
	  function _methodReduce(xf, acc, obj) {
	    return xf['@@transducer/result'](obj.reduce(bind(xf['@@transducer/step'], xf), acc));
	  }
	
	  var symIterator = (typeof Symbol !== 'undefined') ? Symbol.iterator : '@@iterator';
	  return function _reduce(fn, acc, list) {
	    if (typeof fn === 'function') {
	      fn = _xwrap(fn);
	    }
	    if (isArrayLike(list)) {
	      return _arrayReduce(fn, acc, list);
	    }
	    if (typeof list.reduce === 'function') {
	      return _methodReduce(fn, acc, list);
	    }
	    if (list[symIterator] != null) {
	      return _iterableReduce(fn, acc, list[symIterator]());
	    }
	    if (typeof list.next === 'function') {
	      return _iterableReduce(fn, acc, list);
	    }
	    throw new TypeError('reduce: list must be array or iterable');
	  };
	}());


/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = (function() {
	  function XWrap(fn) {
	    this.f = fn;
	  }
	  XWrap.prototype['@@transducer/init'] = function() {
	    throw new Error('init not implemented on XWrap');
	  };
	  XWrap.prototype['@@transducer/result'] = function(acc) { return acc; };
	  XWrap.prototype['@@transducer/step'] = function(acc, x) {
	    return this.f(acc, x);
	  };
	
	  return function _xwrap(fn) { return new XWrap(fn); };
	}());


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var _arity = __webpack_require__(15);
	var _curry2 = __webpack_require__(5);
	
	
	/**
	 * Creates a function that is bound to a context.
	 * Note: `R.bind` does not provide the additional argument-binding capabilities of
	 * [Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
	 *
	 * @func
	 * @memberOf R
	 * @since v0.6.0
	 * @category Function
	 * @category Object
	 * @sig (* -> *) -> {*} -> (* -> *)
	 * @param {Function} fn The function to bind to context
	 * @param {Object} thisObj The context to bind `fn` to
	 * @return {Function} A function that will execute in the context of `thisObj`.
	 * @see R.partial
	 * @example
	 *
	 *      var log = R.bind(console.log, console);
	 *      R.pipe(R.assoc('a', 2), R.tap(log), R.assoc('a', 3))({a: 1}); //=> {a: 3}
	 *      // logs {a: 2}
	 */
	module.exports = _curry2(function bind(fn, thisObj) {
	  return _arity(fn.length, function() {
	    return fn.apply(thisObj, arguments);
	  });
	});


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var _curry1 = __webpack_require__(6);
	var _isArray = __webpack_require__(19);
	var _isString = __webpack_require__(26);
	
	
	/**
	 * Tests whether or not an object is similar to an array.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.5.0
	 * @category Type
	 * @category List
	 * @sig * -> Boolean
	 * @param {*} x The object to test.
	 * @return {Boolean} `true` if `x` has a numeric length property and extreme indices defined; `false` otherwise.
	 * @example
	 *
	 *      R.isArrayLike([]); //=> true
	 *      R.isArrayLike(true); //=> false
	 *      R.isArrayLike({}); //=> false
	 *      R.isArrayLike({length: 10}); //=> false
	 *      R.isArrayLike({0: 'zero', 9: 'nine', length: 10}); //=> true
	 */
	module.exports = _curry1(function isArrayLike(x) {
	  if (_isArray(x)) { return true; }
	  if (!x) { return false; }
	  if (typeof x !== 'object') { return false; }
	  if (_isString(x)) { return false; }
	  if (x.nodeType === 1) { return !!x.length; }
	  if (x.length === 0) { return true; }
	  if (x.length > 0) {
	    return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);
	  }
	  return false;
	});


/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = function _isString(x) {
	  return Object.prototype.toString.call(x) === '[object String]';
	};


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var _curry2 = __webpack_require__(5);
	var _xfBase = __webpack_require__(28);
	
	
	module.exports = (function() {
	  function XMap(f, xf) {
	    this.xf = xf;
	    this.f = f;
	  }
	  XMap.prototype['@@transducer/init'] = _xfBase.init;
	  XMap.prototype['@@transducer/result'] = _xfBase.result;
	  XMap.prototype['@@transducer/step'] = function(result, input) {
	    return this.xf['@@transducer/step'](result, this.f(input));
	  };
	
	  return _curry2(function _xmap(f, xf) { return new XMap(f, xf); });
	}());


/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = {
	  init: function() {
	    return this.xf['@@transducer/init']();
	  },
	  result: function(result) {
	    return this.xf['@@transducer/result'](result);
	  }
	};


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var _curry1 = __webpack_require__(6);
	var _has = __webpack_require__(4);
	var _isArguments = __webpack_require__(30);
	
	
	/**
	 * Returns a list containing the names of all the enumerable own properties of
	 * the supplied object.
	 * Note that the order of the output array is not guaranteed to be consistent
	 * across different JS platforms.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Object
	 * @sig {k: v} -> [k]
	 * @param {Object} obj The object to extract properties from
	 * @return {Array} An array of the object's own properties.
	 * @example
	 *
	 *      R.keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']
	 */
	module.exports = (function() {
	  // cover IE < 9 keys issues
	  var hasEnumBug = !({toString: null}).propertyIsEnumerable('toString');
	  var nonEnumerableProps = ['constructor', 'valueOf', 'isPrototypeOf', 'toString',
	                            'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];
	  // Safari bug
	  var hasArgsEnumBug = (function() {
	    'use strict';
	    return arguments.propertyIsEnumerable('length');
	  }());
	
	  var contains = function contains(list, item) {
	    var idx = 0;
	    while (idx < list.length) {
	      if (list[idx] === item) {
	        return true;
	      }
	      idx += 1;
	    }
	    return false;
	  };
	
	  return typeof Object.keys === 'function' && !hasArgsEnumBug ?
	    _curry1(function keys(obj) {
	      return Object(obj) !== obj ? [] : Object.keys(obj);
	    }) :
	    _curry1(function keys(obj) {
	      if (Object(obj) !== obj) {
	        return [];
	      }
	      var prop, nIdx;
	      var ks = [];
	      var checkArgsLength = hasArgsEnumBug && _isArguments(obj);
	      for (prop in obj) {
	        if (_has(prop, obj) && (!checkArgsLength || prop !== 'length')) {
	          ks[ks.length] = prop;
	        }
	      }
	      if (hasEnumBug) {
	        nIdx = nonEnumerableProps.length - 1;
	        while (nIdx >= 0) {
	          prop = nonEnumerableProps[nIdx];
	          if (_has(prop, obj) && !contains(ks, prop)) {
	            ks[ks.length] = prop;
	          }
	          nIdx -= 1;
	        }
	      }
	      return ks;
	    });
	}());


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var _has = __webpack_require__(4);
	
	
	module.exports = (function() {
	  var toString = Object.prototype.toString;
	  return toString.call(arguments) === '[object Arguments]' ?
	    function _isArguments(x) { return toString.call(x) === '[object Arguments]'; } :
	    function _isArguments(x) { return _has('callee', x); };
	}());


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var _curry2 = __webpack_require__(5);
	
	
	/**
	 * See if an object (`val`) is an instance of the supplied constructor. This
	 * function will check up the inheritance chain, if any.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.3.0
	 * @category Type
	 * @sig (* -> {*}) -> a -> Boolean
	 * @param {Object} ctor A constructor
	 * @param {*} val The value to test
	 * @return {Boolean}
	 * @example
	 *
	 *      R.is(Object, {}); //=> true
	 *      R.is(Number, 1); //=> true
	 *      R.is(Object, 1); //=> false
	 *      R.is(String, 's'); //=> true
	 *      R.is(String, new String('')); //=> true
	 *      R.is(Object, new String('')); //=> true
	 *      R.is(Object, 's'); //=> false
	 *      R.is(Number, {}); //=> false
	 */
	module.exports = _curry2(function is(Ctor, val) {
	  return val != null && val.constructor === Ctor || val instanceof Ctor;
	});


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var _curry3 = __webpack_require__(10);
	var curryN = __webpack_require__(14);
	
	
	/**
	 * Creates a function that will process either the `onTrue` or the `onFalse`
	 * function depending upon the result of the `condition` predicate.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.8.0
	 * @category Logic
	 * @sig (*... -> Boolean) -> (*... -> *) -> (*... -> *) -> (*... -> *)
	 * @param {Function} condition A predicate function
	 * @param {Function} onTrue A function to invoke when the `condition` evaluates to a truthy value.
	 * @param {Function} onFalse A function to invoke when the `condition` evaluates to a falsy value.
	 * @return {Function} A new unary function that will process either the `onTrue` or the `onFalse`
	 *                    function depending upon the result of the `condition` predicate.
	 * @see R.unless, R.when
	 * @example
	 *
	 *      var incCount = R.ifElse(
	 *        R.has('count'),
	 *        R.over(R.lensProp('count'), R.inc),
	 *        R.assoc('count', 1)
	 *      );
	 *      incCount({});           //=> { count: 1 }
	 *      incCount({ count: 1 }); //=> { count: 2 }
	 */
	module.exports = _curry3(function ifElse(condition, onTrue, onFalse) {
	  return curryN(Math.max(condition.length, onTrue.length, onFalse.length),
	    function _ifElse() {
	      return condition.apply(this, arguments) ? onTrue.apply(this, arguments) : onFalse.apply(this, arguments);
	    }
	  );
	});


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _and = __webpack_require__(34);
	
	var _and2 = _interopRequireDefault(_and);
	
	var _isNil = __webpack_require__(35);
	
	var _isNil2 = _interopRequireDefault(_isNil);
	
	var _T = __webpack_require__(36);
	
	var _T2 = _interopRequireDefault(_T);
	
	var _has = __webpack_require__(38);
	
	var _has2 = _interopRequireDefault(_has);
	
	var _both = __webpack_require__(39);
	
	var _both2 = _interopRequireDefault(_both);
	
	var _cond = __webpack_require__(45);
	
	var _cond2 = _interopRequireDefault(_cond);
	
	var _encryption = __webpack_require__(48);
	
	var _encryption2 = _interopRequireDefault(_encryption);
	
	var _login = __webpack_require__(102);
	
	var _login2 = _interopRequireDefault(_login);
	
	var _api = __webpack_require__(104);
	
	var _api2 = _interopRequireDefault(_api);
	
	var _sessionId = __webpack_require__(106);
	
	var _sessionId2 = _interopRequireDefault(_sessionId);
	
	var _jwt = __webpack_require__(107);
	
	var _jwt2 = _interopRequireDefault(_jwt);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name Strategies
	 * @description This module is responsible for the
	 *              authentication method strategies.
	 * @module strategies
	 * @private
	 */
	
	var isBrowserEnvironment = typeof global === 'undefined';
	
	function rejectInvalidAuthObject() {
	  return Promise.reject(new Error('You must supply a valid authentication object'));
	}
	
	function rejectAPIKeyOnBrowser() {
	  return Promise.reject(new Error('You cannot use an api key in the browser!'));
	}
	
	/**
	 * Defines the correct authentication
	 * method according to the supplied
	 * object's properties and returns
	 * the builder function.
	 *
	 * @param {Object} options The object containing
	 *                         the authentication data
	 * @return {?Function} The builder function for
	 *                     the Authentication method
	 * @private
	 */
	var strategyBuilder = (0, _cond2.default)([[(0, _both2.default)((0, _has2.default)('email'), (0, _has2.default)('password')), _login2.default.build], [(0, _has2.default)('api_key'), _api2.default.build], [(0, _has2.default)('encryption_key'), _encryption2.default.build], [(0, _has2.default)('session_id'), _sessionId2.default.build], [(0, _both2.default)((0, _has2.default)('account_id'), (0, _has2.default)('jwt')), _jwt2.default.build], [_T2.default, rejectInvalidAuthObject]]);
	
	/**
	 * Finds and resolves to a builder
	 * function for authentication
	 * according to the supplied object.
	 *
	 * @param {Object} options The object containing
	 *                         the authentication data
	 * @returns {Promise} Resolves to either the
	 *                    correct builder function
	 *                    or rejects with an Error.
	 */
	function find(options) {
	  if ((0, _isNil2.default)(options)) {
	    return rejectInvalidAuthObject();
	  }
	
	  if ((0, _and2.default)((0, _has2.default)('api_key', options), isBrowserEnvironment)) {
	    return rejectAPIKeyOnBrowser();
	  }
	
	  return Promise.resolve(strategyBuilder(options));
	}
	
	exports.default = { find: find };
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var _curry2 = __webpack_require__(5);
	
	
	/**
	 * Returns `true` if both arguments are `true`; `false` otherwise.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Logic
	 * @sig * -> * -> *
	 * @param {Boolean} a A boolean value
	 * @param {Boolean} b A boolean value
	 * @return {Boolean} `true` if both arguments are `true`, `false` otherwise
	 * @see R.both
	 * @example
	 *
	 *      R.and(true, true); //=> true
	 *      R.and(true, false); //=> false
	 *      R.and(false, true); //=> false
	 *      R.and(false, false); //=> false
	 */
	module.exports = _curry2(function and(a, b) {
	  return a && b;
	});


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var _curry1 = __webpack_require__(6);
	
	
	/**
	 * Checks if the input value is `null` or `undefined`.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.9.0
	 * @category Type
	 * @sig * -> Boolean
	 * @param {*} x The value to test.
	 * @return {Boolean} `true` if `x` is `undefined` or `null`, otherwise `false`.
	 * @example
	 *
	 *      R.isNil(null); //=> true
	 *      R.isNil(undefined); //=> true
	 *      R.isNil(0); //=> false
	 *      R.isNil([]); //=> false
	 */
	module.exports = _curry1(function isNil(x) { return x == null; });


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var always = __webpack_require__(37);
	
	
	/**
	 * A function that always returns `true`. Any passed in parameters are ignored.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.9.0
	 * @category Function
	 * @sig * -> Boolean
	 * @param {*}
	 * @return {Boolean}
	 * @see R.always, R.F
	 * @example
	 *
	 *      R.T(); //=> true
	 */
	module.exports = always(true);


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var _curry1 = __webpack_require__(6);
	
	
	/**
	 * Returns a function that always returns the given value. Note that for
	 * non-primitives the value returned is a reference to the original value.
	 *
	 * This function is known as `const`, `constant`, or `K` (for K combinator) in
	 * other languages and libraries.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Function
	 * @sig a -> (* -> a)
	 * @param {*} val The value to wrap in a function
	 * @return {Function} A Function :: * -> val.
	 * @example
	 *
	 *      var t = R.always('Tee');
	 *      t(); //=> 'Tee'
	 */
	module.exports = _curry1(function always(val) {
	  return function() {
	    return val;
	  };
	});


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var _curry2 = __webpack_require__(5);
	var _has = __webpack_require__(4);
	
	
	/**
	 * Returns whether or not an object has an own property with the specified name
	 *
	 * @func
	 * @memberOf R
	 * @since v0.7.0
	 * @category Object
	 * @sig s -> {s: x} -> Boolean
	 * @param {String} prop The name of the property to check for.
	 * @param {Object} obj The object to query.
	 * @return {Boolean} Whether the property exists.
	 * @example
	 *
	 *      var hasName = R.has('name');
	 *      hasName({name: 'alice'});   //=> true
	 *      hasName({name: 'bob'});     //=> true
	 *      hasName({});                //=> false
	 *
	 *      var point = {x: 0, y: 0};
	 *      var pointHas = R.has(R.__, point);
	 *      pointHas('x');  //=> true
	 *      pointHas('y');  //=> true
	 *      pointHas('z');  //=> false
	 */
	module.exports = _curry2(_has);


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var _curry2 = __webpack_require__(5);
	var _isFunction = __webpack_require__(40);
	var and = __webpack_require__(34);
	var lift = __webpack_require__(41);
	
	
	/**
	 * A function wrapping calls to the two functions in an `&&` operation,
	 * returning the result of the first function if it is false-y and the result
	 * of the second function otherwise. Note that this is short-circuited,
	 * meaning that the second function will not be invoked if the first returns a
	 * false-y value.
	 *
	 * In addition to functions, `R.both` also accepts any fantasy-land compatible
	 * applicative functor.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.12.0
	 * @category Logic
	 * @sig (*... -> Boolean) -> (*... -> Boolean) -> (*... -> Boolean)
	 * @param {Function} f a predicate
	 * @param {Function} g another predicate
	 * @return {Function} a function that applies its arguments to `f` and `g` and `&&`s their outputs together.
	 * @see R.and
	 * @example
	 *
	 *      var gt10 = x => x > 10;
	 *      var even = x => x % 2 === 0;
	 *      var f = R.both(gt10, even);
	 *      f(100); //=> true
	 *      f(101); //=> false
	 */
	module.exports = _curry2(function both(f, g) {
	  return _isFunction(f) ?
	    function _both() {
	      return f.apply(this, arguments) && g.apply(this, arguments);
	    } :
	    lift(and)(f, g);
	});


/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = function _isFunction(x) {
	  return Object.prototype.toString.call(x) === '[object Function]';
	};


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var _curry1 = __webpack_require__(6);
	var liftN = __webpack_require__(42);
	
	
	/**
	 * "lifts" a function of arity > 1 so that it may "map over" a list, Function or other
	 * object that satisfies the [FantasyLand Apply spec](https://github.com/fantasyland/fantasy-land#apply).
	 *
	 * @func
	 * @memberOf R
	 * @since v0.7.0
	 * @category Function
	 * @sig (*... -> *) -> ([*]... -> [*])
	 * @param {Function} fn The function to lift into higher context
	 * @return {Function} The lifted function.
	 * @see R.liftN
	 * @example
	 *
	 *      var madd3 = R.lift(R.curry((a, b, c) => a + b + c));
	 *
	 *      madd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]
	 *
	 *      var madd5 = R.lift(R.curry((a, b, c, d, e) => a + b + c + d + e));
	 *
	 *      madd5([1,2], [3], [4, 5], [6], [7, 8]); //=> [21, 22, 22, 23, 22, 23, 23, 24]
	 */
	module.exports = _curry1(function lift(fn) {
	  return liftN(fn.length, fn);
	});


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var _curry2 = __webpack_require__(5);
	var _reduce = __webpack_require__(22);
	var _slice = __webpack_require__(11);
	var ap = __webpack_require__(43);
	var curryN = __webpack_require__(14);
	var map = __webpack_require__(17);
	
	
	/**
	 * "lifts" a function to be the specified arity, so that it may "map over" that
	 * many lists, Functions or other objects that satisfy the [FantasyLand Apply spec](https://github.com/fantasyland/fantasy-land#apply).
	 *
	 * @func
	 * @memberOf R
	 * @since v0.7.0
	 * @category Function
	 * @sig Number -> (*... -> *) -> ([*]... -> [*])
	 * @param {Function} fn The function to lift into higher context
	 * @return {Function} The lifted function.
	 * @see R.lift, R.ap
	 * @example
	 *
	 *      var madd3 = R.liftN(3, R.curryN(3, (...args) => R.sum(args)));
	 *      madd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]
	 */
	module.exports = _curry2(function liftN(arity, fn) {
	  var lifted = curryN(arity, fn);
	  return curryN(arity, function() {
	    return _reduce(ap, map(lifted, arguments[0]), _slice(arguments, 1));
	  });
	});


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var _concat = __webpack_require__(44);
	var _curry2 = __webpack_require__(5);
	var _reduce = __webpack_require__(22);
	var map = __webpack_require__(17);
	
	
	/**
	 * ap applies a list of functions to a list of values.
	 *
	 * Dispatches to the `ap` method of the second argument, if present. Also
	 * treats curried functions as applicatives.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.3.0
	 * @category Function
	 * @sig [a -> b] -> [a] -> [b]
	 * @sig Apply f => f (a -> b) -> f a -> f b
	 * @param {Array} fns An array of functions
	 * @param {Array} vs An array of values
	 * @return {Array} An array of results of applying each of `fns` to all of `vs` in turn.
	 * @example
	 *
	 *      R.ap([R.multiply(2), R.add(3)], [1,2,3]); //=> [2, 4, 6, 4, 5, 6]
	 */
	module.exports = _curry2(function ap(applicative, fn) {
	  return (
	    typeof applicative.ap === 'function' ?
	      applicative.ap(fn) :
	    typeof applicative === 'function' ?
	      function(x) { return applicative(x)(fn(x)); } :
	    // else
	      _reduce(function(acc, f) { return _concat(acc, map(f, fn)); }, [], applicative)
	  );
	});


/***/ },
/* 44 */
/***/ function(module, exports) {

	/**
	 * Private `concat` function to merge two array-like objects.
	 *
	 * @private
	 * @param {Array|Arguments} [set1=[]] An array-like object.
	 * @param {Array|Arguments} [set2=[]] An array-like object.
	 * @return {Array} A new, merged array.
	 * @example
	 *
	 *      _concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
	 */
	module.exports = function _concat(set1, set2) {
	  set1 = set1 || [];
	  set2 = set2 || [];
	  var idx;
	  var len1 = set1.length;
	  var len2 = set2.length;
	  var result = [];
	
	  idx = 0;
	  while (idx < len1) {
	    result[result.length] = set1[idx];
	    idx += 1;
	  }
	  idx = 0;
	  while (idx < len2) {
	    result[result.length] = set2[idx];
	    idx += 1;
	  }
	  return result;
	};


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var _arity = __webpack_require__(15);
	var _curry1 = __webpack_require__(6);
	var map = __webpack_require__(17);
	var max = __webpack_require__(46);
	var reduce = __webpack_require__(47);
	
	
	/**
	 * Returns a function, `fn`, which encapsulates if/else-if/else logic.
	 * `R.cond` takes a list of [predicate, transform] pairs. All of the arguments
	 * to `fn` are applied to each of the predicates in turn until one returns a
	 * "truthy" value, at which point `fn` returns the result of applying its
	 * arguments to the corresponding transformer. If none of the predicates
	 * matches, `fn` returns undefined.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.6.0
	 * @category Logic
	 * @sig [[(*... -> Boolean),(*... -> *)]] -> (*... -> *)
	 * @param {Array} pairs
	 * @return {Function}
	 * @example
	 *
	 *      var fn = R.cond([
	 *        [R.equals(0),   R.always('water freezes at 0°C')],
	 *        [R.equals(100), R.always('water boils at 100°C')],
	 *        [R.T,           temp => 'nothing special happens at ' + temp + '°C']
	 *      ]);
	 *      fn(0); //=> 'water freezes at 0°C'
	 *      fn(50); //=> 'nothing special happens at 50°C'
	 *      fn(100); //=> 'water boils at 100°C'
	 */
	module.exports = _curry1(function cond(pairs) {
	  var arity = reduce(max,
	                     0,
	                     map(function(pair) { return pair[0].length; }, pairs));
	  return _arity(arity, function() {
	    var idx = 0;
	    while (idx < pairs.length) {
	      if (pairs[idx][0].apply(this, arguments)) {
	        return pairs[idx][1].apply(this, arguments);
	      }
	      idx += 1;
	    }
	  });
	});


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var _curry2 = __webpack_require__(5);
	
	
	/**
	 * Returns the larger of its two arguments.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Relation
	 * @sig Ord a => a -> a -> a
	 * @param {*} a
	 * @param {*} b
	 * @return {*}
	 * @see R.maxBy, R.min
	 * @example
	 *
	 *      R.max(789, 123); //=> 789
	 *      R.max('a', 'b'); //=> 'b'
	 */
	module.exports = _curry2(function max(a, b) { return b > a ? b : a; });


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var _curry3 = __webpack_require__(10);
	var _reduce = __webpack_require__(22);
	
	
	/**
	 * Returns a single item by iterating through the list, successively calling
	 * the iterator function and passing it an accumulator value and the current
	 * value from the array, and then passing the result to the next call.
	 *
	 * The iterator function receives two values: *(acc, value)*. It may use
	 * `R.reduced` to shortcut the iteration.
	 *
	 * Note: `R.reduce` does not skip deleted or unassigned indices (sparse
	 * arrays), unlike the native `Array.prototype.reduce` method. For more details
	 * on this behavior, see:
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Description
	 *
	 * Dispatches to the `reduce` method of the third argument, if present.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig ((a, b) -> a) -> a -> [b] -> a
	 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
	 *        current element from the array.
	 * @param {*} acc The accumulator value.
	 * @param {Array} list The list to iterate over.
	 * @return {*} The final, accumulated value.
	 * @see R.reduced, R.addIndex
	 * @example
	 *
	 *      var numbers = [1, 2, 3];
	 *      var plus = (a, b) => a + b;
	 *
	 *      R.reduce(plus, 10, numbers); //=> 16
	 */
	module.exports = _curry3(_reduce);


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _merge = __webpack_require__(1);
	
	var _merge2 = _interopRequireDefault(_merge);
	
	var _bluebird = __webpack_require__(49);
	
	var _transactions = __webpack_require__(87);
	
	var _transactions2 = _interopRequireDefault(_transactions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Creates an object with
	 * the `encryption_key` from
	 * the supplied `options` param
	 *
	 * @param {any} options
	 * @returns {Object} an object containing
	 *                   a body property with
	 *                   the desired `encryption_key`
	 * @private
	 */
	/**
	 * @name encryption
	 * @memberof strategies
	 * @private
	 */
	function execute(opts) {
	  var encryptionKey = opts.encryption_key,
	      options = opts.options;
	
	  var payload = (0, _merge2.default)({
	    body: {
	      encryption_key: encryptionKey
	    }
	  }, options && options.baseURL ? { baseURL: options.baseURL } : {});
	
	  return _transactions2.default.calculateInstallmentsAmount(payload, { amount: 1, interest_rate: 100 }).catch(function (error) {
	    return opts.skipAuthentication ? (0, _bluebird.resolve)(opts.options) : (0, _bluebird.reject)(error);
	  }).catch(function (err) {
	    return err.name === 'ApiError';
	  }, function () {
	    return (0, _bluebird.reject)(new Error('You must supply a valid encryption key'));
	  }).then((0, _merge2.default)(payload)).then(function (requestOpts) {
	    return {
	      authentication: { encryption_key: encryptionKey },
	      options: requestOpts
	    };
	  });
	}
	
	/**
	 * Returns the supplied parameter with
	 * the `execute` function added to it.
	 *
	 * @param {any} options
	 * @returns {Object} The `options` parameter
	 *                   with `execute` add to it
	 * @private
	 */
	function build(options) {
	  return (0, _merge2.default)(options, { execute: execute.bind(null, options) });
	}
	
	exports.default = {
	  build: build
	};
	module.exports = exports['default'];

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var old;
	if (typeof Promise !== "undefined") old = Promise;
	function noConflict() {
	    try { if (Promise === bluebird) Promise = old; }
	    catch (e) {}
	    return bluebird;
	}
	var bluebird = __webpack_require__(50)();
	bluebird.noConflict = noConflict;
	module.exports = bluebird;


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";
	module.exports = function() {
	var makeSelfResolutionError = function () {
	    return new TypeError("circular promise resolution chain\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
	};
	var reflectHandler = function() {
	    return new Promise.PromiseInspection(this._target());
	};
	var apiRejection = function(msg) {
	    return Promise.reject(new TypeError(msg));
	};
	function Proxyable() {}
	var UNDEFINED_BINDING = {};
	var util = __webpack_require__(52);
	
	var getDomain;
	if (util.isNode) {
	    getDomain = function() {
	        var ret = process.domain;
	        if (ret === undefined) ret = null;
	        return ret;
	    };
	} else {
	    getDomain = function() {
	        return null;
	    };
	}
	util.notEnumerableProp(Promise, "_getDomain", getDomain);
	
	var es5 = __webpack_require__(53);
	var Async = __webpack_require__(54);
	var async = new Async();
	es5.defineProperty(Promise, "_async", {value: async});
	var errors = __webpack_require__(58);
	var TypeError = Promise.TypeError = errors.TypeError;
	Promise.RangeError = errors.RangeError;
	var CancellationError = Promise.CancellationError = errors.CancellationError;
	Promise.TimeoutError = errors.TimeoutError;
	Promise.OperationalError = errors.OperationalError;
	Promise.RejectionError = errors.OperationalError;
	Promise.AggregateError = errors.AggregateError;
	var INTERNAL = function(){};
	var APPLY = {};
	var NEXT_FILTER = {};
	var tryConvertToPromise = __webpack_require__(59)(Promise, INTERNAL);
	var PromiseArray =
	    __webpack_require__(60)(Promise, INTERNAL,
	                               tryConvertToPromise, apiRejection, Proxyable);
	var Context = __webpack_require__(61)(Promise);
	 /*jshint unused:false*/
	var createContext = Context.create;
	var debug = __webpack_require__(62)(Promise, Context);
	var CapturedTrace = debug.CapturedTrace;
	var PassThroughHandlerContext =
	    __webpack_require__(63)(Promise, tryConvertToPromise, NEXT_FILTER);
	var catchFilter = __webpack_require__(64)(NEXT_FILTER);
	var nodebackForPromise = __webpack_require__(65);
	var errorObj = util.errorObj;
	var tryCatch = util.tryCatch;
	function check(self, executor) {
	    if (self == null || self.constructor !== Promise) {
	        throw new TypeError("the promise constructor cannot be invoked directly\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
	    }
	    if (typeof executor !== "function") {
	        throw new TypeError("expecting a function but got " + util.classString(executor));
	    }
	
	}
	
	function Promise(executor) {
	    if (executor !== INTERNAL) {
	        check(this, executor);
	    }
	    this._bitField = 0;
	    this._fulfillmentHandler0 = undefined;
	    this._rejectionHandler0 = undefined;
	    this._promise0 = undefined;
	    this._receiver0 = undefined;
	    this._resolveFromExecutor(executor);
	    this._promiseCreated();
	    this._fireEvent("promiseCreated", this);
	}
	
	Promise.prototype.toString = function () {
	    return "[object Promise]";
	};
	
	Promise.prototype.caught = Promise.prototype["catch"] = function (fn) {
	    var len = arguments.length;
	    if (len > 1) {
	        var catchInstances = new Array(len - 1),
	            j = 0, i;
	        for (i = 0; i < len - 1; ++i) {
	            var item = arguments[i];
	            if (util.isObject(item)) {
	                catchInstances[j++] = item;
	            } else {
	                return apiRejection("Catch statement predicate: " +
	                    "expecting an object but got " + util.classString(item));
	            }
	        }
	        catchInstances.length = j;
	        fn = arguments[i];
	        return this.then(undefined, catchFilter(catchInstances, fn, this));
	    }
	    return this.then(undefined, fn);
	};
	
	Promise.prototype.reflect = function () {
	    return this._then(reflectHandler,
	        reflectHandler, undefined, this, undefined);
	};
	
	Promise.prototype.then = function (didFulfill, didReject) {
	    if (debug.warnings() && arguments.length > 0 &&
	        typeof didFulfill !== "function" &&
	        typeof didReject !== "function") {
	        var msg = ".then() only accepts functions but was passed: " +
	                util.classString(didFulfill);
	        if (arguments.length > 1) {
	            msg += ", " + util.classString(didReject);
	        }
	        this._warn(msg);
	    }
	    return this._then(didFulfill, didReject, undefined, undefined, undefined);
	};
	
	Promise.prototype.done = function (didFulfill, didReject) {
	    var promise =
	        this._then(didFulfill, didReject, undefined, undefined, undefined);
	    promise._setIsFinal();
	};
	
	Promise.prototype.spread = function (fn) {
	    if (typeof fn !== "function") {
	        return apiRejection("expecting a function but got " + util.classString(fn));
	    }
	    return this.all()._then(fn, undefined, undefined, APPLY, undefined);
	};
	
	Promise.prototype.toJSON = function () {
	    var ret = {
	        isFulfilled: false,
	        isRejected: false,
	        fulfillmentValue: undefined,
	        rejectionReason: undefined
	    };
	    if (this.isFulfilled()) {
	        ret.fulfillmentValue = this.value();
	        ret.isFulfilled = true;
	    } else if (this.isRejected()) {
	        ret.rejectionReason = this.reason();
	        ret.isRejected = true;
	    }
	    return ret;
	};
	
	Promise.prototype.all = function () {
	    if (arguments.length > 0) {
	        this._warn(".all() was passed arguments but it does not take any");
	    }
	    return new PromiseArray(this).promise();
	};
	
	Promise.prototype.error = function (fn) {
	    return this.caught(util.originatesFromRejection, fn);
	};
	
	Promise.getNewLibraryCopy = module.exports;
	
	Promise.is = function (val) {
	    return val instanceof Promise;
	};
	
	Promise.fromNode = Promise.fromCallback = function(fn) {
	    var ret = new Promise(INTERNAL);
	    ret._captureStackTrace();
	    var multiArgs = arguments.length > 1 ? !!Object(arguments[1]).multiArgs
	                                         : false;
	    var result = tryCatch(fn)(nodebackForPromise(ret, multiArgs));
	    if (result === errorObj) {
	        ret._rejectCallback(result.e, true);
	    }
	    if (!ret._isFateSealed()) ret._setAsyncGuaranteed();
	    return ret;
	};
	
	Promise.all = function (promises) {
	    return new PromiseArray(promises).promise();
	};
	
	Promise.cast = function (obj) {
	    var ret = tryConvertToPromise(obj);
	    if (!(ret instanceof Promise)) {
	        ret = new Promise(INTERNAL);
	        ret._captureStackTrace();
	        ret._setFulfilled();
	        ret._rejectionHandler0 = obj;
	    }
	    return ret;
	};
	
	Promise.resolve = Promise.fulfilled = Promise.cast;
	
	Promise.reject = Promise.rejected = function (reason) {
	    var ret = new Promise(INTERNAL);
	    ret._captureStackTrace();
	    ret._rejectCallback(reason, true);
	    return ret;
	};
	
	Promise.setScheduler = function(fn) {
	    if (typeof fn !== "function") {
	        throw new TypeError("expecting a function but got " + util.classString(fn));
	    }
	    return async.setScheduler(fn);
	};
	
	Promise.prototype._then = function (
	    didFulfill,
	    didReject,
	    _,    receiver,
	    internalData
	) {
	    var haveInternalData = internalData !== undefined;
	    var promise = haveInternalData ? internalData : new Promise(INTERNAL);
	    var target = this._target();
	    var bitField = target._bitField;
	
	    if (!haveInternalData) {
	        promise._propagateFrom(this, 3);
	        promise._captureStackTrace();
	        if (receiver === undefined &&
	            ((this._bitField & 2097152) !== 0)) {
	            if (!((bitField & 50397184) === 0)) {
	                receiver = this._boundValue();
	            } else {
	                receiver = target === this ? undefined : this._boundTo;
	            }
	        }
	        this._fireEvent("promiseChained", this, promise);
	    }
	
	    var domain = getDomain();
	    if (!((bitField & 50397184) === 0)) {
	        var handler, value, settler = target._settlePromiseCtx;
	        if (((bitField & 33554432) !== 0)) {
	            value = target._rejectionHandler0;
	            handler = didFulfill;
	        } else if (((bitField & 16777216) !== 0)) {
	            value = target._fulfillmentHandler0;
	            handler = didReject;
	            target._unsetRejectionIsUnhandled();
	        } else {
	            settler = target._settlePromiseLateCancellationObserver;
	            value = new CancellationError("late cancellation observer");
	            target._attachExtraTrace(value);
	            handler = didReject;
	        }
	
	        async.invoke(settler, target, {
	            handler: domain === null ? handler
	                : (typeof handler === "function" &&
	                    util.domainBind(domain, handler)),
	            promise: promise,
	            receiver: receiver,
	            value: value
	        });
	    } else {
	        target._addCallbacks(didFulfill, didReject, promise, receiver, domain);
	    }
	
	    return promise;
	};
	
	Promise.prototype._length = function () {
	    return this._bitField & 65535;
	};
	
	Promise.prototype._isFateSealed = function () {
	    return (this._bitField & 117506048) !== 0;
	};
	
	Promise.prototype._isFollowing = function () {
	    return (this._bitField & 67108864) === 67108864;
	};
	
	Promise.prototype._setLength = function (len) {
	    this._bitField = (this._bitField & -65536) |
	        (len & 65535);
	};
	
	Promise.prototype._setFulfilled = function () {
	    this._bitField = this._bitField | 33554432;
	    this._fireEvent("promiseFulfilled", this);
	};
	
	Promise.prototype._setRejected = function () {
	    this._bitField = this._bitField | 16777216;
	    this._fireEvent("promiseRejected", this);
	};
	
	Promise.prototype._setFollowing = function () {
	    this._bitField = this._bitField | 67108864;
	    this._fireEvent("promiseResolved", this);
	};
	
	Promise.prototype._setIsFinal = function () {
	    this._bitField = this._bitField | 4194304;
	};
	
	Promise.prototype._isFinal = function () {
	    return (this._bitField & 4194304) > 0;
	};
	
	Promise.prototype._unsetCancelled = function() {
	    this._bitField = this._bitField & (~65536);
	};
	
	Promise.prototype._setCancelled = function() {
	    this._bitField = this._bitField | 65536;
	    this._fireEvent("promiseCancelled", this);
	};
	
	Promise.prototype._setWillBeCancelled = function() {
	    this._bitField = this._bitField | 8388608;
	};
	
	Promise.prototype._setAsyncGuaranteed = function() {
	    if (async.hasCustomScheduler()) return;
	    this._bitField = this._bitField | 134217728;
	};
	
	Promise.prototype._receiverAt = function (index) {
	    var ret = index === 0 ? this._receiver0 : this[
	            index * 4 - 4 + 3];
	    if (ret === UNDEFINED_BINDING) {
	        return undefined;
	    } else if (ret === undefined && this._isBound()) {
	        return this._boundValue();
	    }
	    return ret;
	};
	
	Promise.prototype._promiseAt = function (index) {
	    return this[
	            index * 4 - 4 + 2];
	};
	
	Promise.prototype._fulfillmentHandlerAt = function (index) {
	    return this[
	            index * 4 - 4 + 0];
	};
	
	Promise.prototype._rejectionHandlerAt = function (index) {
	    return this[
	            index * 4 - 4 + 1];
	};
	
	Promise.prototype._boundValue = function() {};
	
	Promise.prototype._migrateCallback0 = function (follower) {
	    var bitField = follower._bitField;
	    var fulfill = follower._fulfillmentHandler0;
	    var reject = follower._rejectionHandler0;
	    var promise = follower._promise0;
	    var receiver = follower._receiverAt(0);
	    if (receiver === undefined) receiver = UNDEFINED_BINDING;
	    this._addCallbacks(fulfill, reject, promise, receiver, null);
	};
	
	Promise.prototype._migrateCallbackAt = function (follower, index) {
	    var fulfill = follower._fulfillmentHandlerAt(index);
	    var reject = follower._rejectionHandlerAt(index);
	    var promise = follower._promiseAt(index);
	    var receiver = follower._receiverAt(index);
	    if (receiver === undefined) receiver = UNDEFINED_BINDING;
	    this._addCallbacks(fulfill, reject, promise, receiver, null);
	};
	
	Promise.prototype._addCallbacks = function (
	    fulfill,
	    reject,
	    promise,
	    receiver,
	    domain
	) {
	    var index = this._length();
	
	    if (index >= 65535 - 4) {
	        index = 0;
	        this._setLength(0);
	    }
	
	    if (index === 0) {
	        this._promise0 = promise;
	        this._receiver0 = receiver;
	        if (typeof fulfill === "function") {
	            this._fulfillmentHandler0 =
	                domain === null ? fulfill : util.domainBind(domain, fulfill);
	        }
	        if (typeof reject === "function") {
	            this._rejectionHandler0 =
	                domain === null ? reject : util.domainBind(domain, reject);
	        }
	    } else {
	        var base = index * 4 - 4;
	        this[base + 2] = promise;
	        this[base + 3] = receiver;
	        if (typeof fulfill === "function") {
	            this[base + 0] =
	                domain === null ? fulfill : util.domainBind(domain, fulfill);
	        }
	        if (typeof reject === "function") {
	            this[base + 1] =
	                domain === null ? reject : util.domainBind(domain, reject);
	        }
	    }
	    this._setLength(index + 1);
	    return index;
	};
	
	Promise.prototype._proxy = function (proxyable, arg) {
	    this._addCallbacks(undefined, undefined, arg, proxyable, null);
	};
	
	Promise.prototype._resolveCallback = function(value, shouldBind) {
	    if (((this._bitField & 117506048) !== 0)) return;
	    if (value === this)
	        return this._rejectCallback(makeSelfResolutionError(), false);
	    var maybePromise = tryConvertToPromise(value, this);
	    if (!(maybePromise instanceof Promise)) return this._fulfill(value);
	
	    if (shouldBind) this._propagateFrom(maybePromise, 2);
	
	    var promise = maybePromise._target();
	
	    if (promise === this) {
	        this._reject(makeSelfResolutionError());
	        return;
	    }
	
	    var bitField = promise._bitField;
	    if (((bitField & 50397184) === 0)) {
	        var len = this._length();
	        if (len > 0) promise._migrateCallback0(this);
	        for (var i = 1; i < len; ++i) {
	            promise._migrateCallbackAt(this, i);
	        }
	        this._setFollowing();
	        this._setLength(0);
	        this._setFollowee(promise);
	    } else if (((bitField & 33554432) !== 0)) {
	        this._fulfill(promise._value());
	    } else if (((bitField & 16777216) !== 0)) {
	        this._reject(promise._reason());
	    } else {
	        var reason = new CancellationError("late cancellation observer");
	        promise._attachExtraTrace(reason);
	        this._reject(reason);
	    }
	};
	
	Promise.prototype._rejectCallback =
	function(reason, synchronous, ignoreNonErrorWarnings) {
	    var trace = util.ensureErrorObject(reason);
	    var hasStack = trace === reason;
	    if (!hasStack && !ignoreNonErrorWarnings && debug.warnings()) {
	        var message = "a promise was rejected with a non-error: " +
	            util.classString(reason);
	        this._warn(message, true);
	    }
	    this._attachExtraTrace(trace, synchronous ? hasStack : false);
	    this._reject(reason);
	};
	
	Promise.prototype._resolveFromExecutor = function (executor) {
	    if (executor === INTERNAL) return;
	    var promise = this;
	    this._captureStackTrace();
	    this._pushContext();
	    var synchronous = true;
	    var r = this._execute(executor, function(value) {
	        promise._resolveCallback(value);
	    }, function (reason) {
	        promise._rejectCallback(reason, synchronous);
	    });
	    synchronous = false;
	    this._popContext();
	
	    if (r !== undefined) {
	        promise._rejectCallback(r, true);
	    }
	};
	
	Promise.prototype._settlePromiseFromHandler = function (
	    handler, receiver, value, promise
	) {
	    var bitField = promise._bitField;
	    if (((bitField & 65536) !== 0)) return;
	    promise._pushContext();
	    var x;
	    if (receiver === APPLY) {
	        if (!value || typeof value.length !== "number") {
	            x = errorObj;
	            x.e = new TypeError("cannot .spread() a non-array: " +
	                                    util.classString(value));
	        } else {
	            x = tryCatch(handler).apply(this._boundValue(), value);
	        }
	    } else {
	        x = tryCatch(handler).call(receiver, value);
	    }
	    var promiseCreated = promise._popContext();
	    bitField = promise._bitField;
	    if (((bitField & 65536) !== 0)) return;
	
	    if (x === NEXT_FILTER) {
	        promise._reject(value);
	    } else if (x === errorObj) {
	        promise._rejectCallback(x.e, false);
	    } else {
	        debug.checkForgottenReturns(x, promiseCreated, "",  promise, this);
	        promise._resolveCallback(x);
	    }
	};
	
	Promise.prototype._target = function() {
	    var ret = this;
	    while (ret._isFollowing()) ret = ret._followee();
	    return ret;
	};
	
	Promise.prototype._followee = function() {
	    return this._rejectionHandler0;
	};
	
	Promise.prototype._setFollowee = function(promise) {
	    this._rejectionHandler0 = promise;
	};
	
	Promise.prototype._settlePromise = function(promise, handler, receiver, value) {
	    var isPromise = promise instanceof Promise;
	    var bitField = this._bitField;
	    var asyncGuaranteed = ((bitField & 134217728) !== 0);
	    if (((bitField & 65536) !== 0)) {
	        if (isPromise) promise._invokeInternalOnCancel();
	
	        if (receiver instanceof PassThroughHandlerContext &&
	            receiver.isFinallyHandler()) {
	            receiver.cancelPromise = promise;
	            if (tryCatch(handler).call(receiver, value) === errorObj) {
	                promise._reject(errorObj.e);
	            }
	        } else if (handler === reflectHandler) {
	            promise._fulfill(reflectHandler.call(receiver));
	        } else if (receiver instanceof Proxyable) {
	            receiver._promiseCancelled(promise);
	        } else if (isPromise || promise instanceof PromiseArray) {
	            promise._cancel();
	        } else {
	            receiver.cancel();
	        }
	    } else if (typeof handler === "function") {
	        if (!isPromise) {
	            handler.call(receiver, value, promise);
	        } else {
	            if (asyncGuaranteed) promise._setAsyncGuaranteed();
	            this._settlePromiseFromHandler(handler, receiver, value, promise);
	        }
	    } else if (receiver instanceof Proxyable) {
	        if (!receiver._isResolved()) {
	            if (((bitField & 33554432) !== 0)) {
	                receiver._promiseFulfilled(value, promise);
	            } else {
	                receiver._promiseRejected(value, promise);
	            }
	        }
	    } else if (isPromise) {
	        if (asyncGuaranteed) promise._setAsyncGuaranteed();
	        if (((bitField & 33554432) !== 0)) {
	            promise._fulfill(value);
	        } else {
	            promise._reject(value);
	        }
	    }
	};
	
	Promise.prototype._settlePromiseLateCancellationObserver = function(ctx) {
	    var handler = ctx.handler;
	    var promise = ctx.promise;
	    var receiver = ctx.receiver;
	    var value = ctx.value;
	    if (typeof handler === "function") {
	        if (!(promise instanceof Promise)) {
	            handler.call(receiver, value, promise);
	        } else {
	            this._settlePromiseFromHandler(handler, receiver, value, promise);
	        }
	    } else if (promise instanceof Promise) {
	        promise._reject(value);
	    }
	};
	
	Promise.prototype._settlePromiseCtx = function(ctx) {
	    this._settlePromise(ctx.promise, ctx.handler, ctx.receiver, ctx.value);
	};
	
	Promise.prototype._settlePromise0 = function(handler, value, bitField) {
	    var promise = this._promise0;
	    var receiver = this._receiverAt(0);
	    this._promise0 = undefined;
	    this._receiver0 = undefined;
	    this._settlePromise(promise, handler, receiver, value);
	};
	
	Promise.prototype._clearCallbackDataAtIndex = function(index) {
	    var base = index * 4 - 4;
	    this[base + 2] =
	    this[base + 3] =
	    this[base + 0] =
	    this[base + 1] = undefined;
	};
	
	Promise.prototype._fulfill = function (value) {
	    var bitField = this._bitField;
	    if (((bitField & 117506048) >>> 16)) return;
	    if (value === this) {
	        var err = makeSelfResolutionError();
	        this._attachExtraTrace(err);
	        return this._reject(err);
	    }
	    this._setFulfilled();
	    this._rejectionHandler0 = value;
	
	    if ((bitField & 65535) > 0) {
	        if (((bitField & 134217728) !== 0)) {
	            this._settlePromises();
	        } else {
	            async.settlePromises(this);
	        }
	    }
	};
	
	Promise.prototype._reject = function (reason) {
	    var bitField = this._bitField;
	    if (((bitField & 117506048) >>> 16)) return;
	    this._setRejected();
	    this._fulfillmentHandler0 = reason;
	
	    if (this._isFinal()) {
	        return async.fatalError(reason, util.isNode);
	    }
	
	    if ((bitField & 65535) > 0) {
	        async.settlePromises(this);
	    } else {
	        this._ensurePossibleRejectionHandled();
	    }
	};
	
	Promise.prototype._fulfillPromises = function (len, value) {
	    for (var i = 1; i < len; i++) {
	        var handler = this._fulfillmentHandlerAt(i);
	        var promise = this._promiseAt(i);
	        var receiver = this._receiverAt(i);
	        this._clearCallbackDataAtIndex(i);
	        this._settlePromise(promise, handler, receiver, value);
	    }
	};
	
	Promise.prototype._rejectPromises = function (len, reason) {
	    for (var i = 1; i < len; i++) {
	        var handler = this._rejectionHandlerAt(i);
	        var promise = this._promiseAt(i);
	        var receiver = this._receiverAt(i);
	        this._clearCallbackDataAtIndex(i);
	        this._settlePromise(promise, handler, receiver, reason);
	    }
	};
	
	Promise.prototype._settlePromises = function () {
	    var bitField = this._bitField;
	    var len = (bitField & 65535);
	
	    if (len > 0) {
	        if (((bitField & 16842752) !== 0)) {
	            var reason = this._fulfillmentHandler0;
	            this._settlePromise0(this._rejectionHandler0, reason, bitField);
	            this._rejectPromises(len, reason);
	        } else {
	            var value = this._rejectionHandler0;
	            this._settlePromise0(this._fulfillmentHandler0, value, bitField);
	            this._fulfillPromises(len, value);
	        }
	        this._setLength(0);
	    }
	    this._clearCancellationData();
	};
	
	Promise.prototype._settledValue = function() {
	    var bitField = this._bitField;
	    if (((bitField & 33554432) !== 0)) {
	        return this._rejectionHandler0;
	    } else if (((bitField & 16777216) !== 0)) {
	        return this._fulfillmentHandler0;
	    }
	};
	
	function deferResolve(v) {this.promise._resolveCallback(v);}
	function deferReject(v) {this.promise._rejectCallback(v, false);}
	
	Promise.defer = Promise.pending = function() {
	    debug.deprecated("Promise.defer", "new Promise");
	    var promise = new Promise(INTERNAL);
	    return {
	        promise: promise,
	        resolve: deferResolve,
	        reject: deferReject
	    };
	};
	
	util.notEnumerableProp(Promise,
	                       "_makeSelfResolutionError",
	                       makeSelfResolutionError);
	
	__webpack_require__(66)(Promise, INTERNAL, tryConvertToPromise, apiRejection,
	    debug);
	__webpack_require__(67)(Promise, INTERNAL, tryConvertToPromise, debug);
	__webpack_require__(68)(Promise, PromiseArray, apiRejection, debug);
	__webpack_require__(69)(Promise);
	__webpack_require__(70)(Promise);
	__webpack_require__(71)(
	    Promise, PromiseArray, tryConvertToPromise, INTERNAL, async, getDomain);
	Promise.Promise = Promise;
	Promise.version = "3.5.1";
	__webpack_require__(72)(Promise, PromiseArray, apiRejection, tryConvertToPromise, INTERNAL, debug);
	__webpack_require__(73)(Promise);
	__webpack_require__(74)(Promise, apiRejection, tryConvertToPromise, createContext, INTERNAL, debug);
	__webpack_require__(75)(Promise, INTERNAL, debug);
	__webpack_require__(76)(Promise, apiRejection, INTERNAL, tryConvertToPromise, Proxyable, debug);
	__webpack_require__(77)(Promise);
	__webpack_require__(78)(Promise, INTERNAL);
	__webpack_require__(79)(Promise, PromiseArray, tryConvertToPromise, apiRejection);
	__webpack_require__(80)(Promise, INTERNAL, tryConvertToPromise, apiRejection);
	__webpack_require__(81)(Promise, PromiseArray, apiRejection, tryConvertToPromise, INTERNAL, debug);
	__webpack_require__(82)(Promise, PromiseArray, debug);
	__webpack_require__(83)(Promise, PromiseArray, apiRejection);
	__webpack_require__(84)(Promise, INTERNAL);
	__webpack_require__(85)(Promise, INTERNAL);
	__webpack_require__(86)(Promise);
	                                                         
	    util.toFastProperties(Promise);                                          
	    util.toFastProperties(Promise.prototype);                                
	    function fillTypes(value) {                                              
	        var p = new Promise(INTERNAL);                                       
	        p._fulfillmentHandler0 = value;                                      
	        p._rejectionHandler0 = value;                                        
	        p._promise0 = value;                                                 
	        p._receiver0 = value;                                                
	    }                                                                        
	    // Complete slack tracking, opt out of field-type tracking and           
	    // stabilize map                                                         
	    fillTypes({a: 1});                                                       
	    fillTypes({b: 2});                                                       
	    fillTypes({c: 3});                                                       
	    fillTypes(1);                                                            
	    fillTypes(function(){});                                                 
	    fillTypes(undefined);                                                    
	    fillTypes(false);                                                        
	    fillTypes(new Promise(INTERNAL));                                        
	    debug.setBounds(Async.firstLineError, util.lastLineError);               
	    return Promise;                                                          
	
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(51)))

/***/ },
/* 51 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;
	
	process.listeners = function (name) { return [] }
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {"use strict";
	var es5 = __webpack_require__(53);
	var canEvaluate = typeof navigator == "undefined";
	
	var errorObj = {e: {}};
	var tryCatchTarget;
	var globalObject = typeof self !== "undefined" ? self :
	    typeof window !== "undefined" ? window :
	    typeof global !== "undefined" ? global :
	    this !== undefined ? this : null;
	
	function tryCatcher() {
	    try {
	        var target = tryCatchTarget;
	        tryCatchTarget = null;
	        return target.apply(this, arguments);
	    } catch (e) {
	        errorObj.e = e;
	        return errorObj;
	    }
	}
	function tryCatch(fn) {
	    tryCatchTarget = fn;
	    return tryCatcher;
	}
	
	var inherits = function(Child, Parent) {
	    var hasProp = {}.hasOwnProperty;
	
	    function T() {
	        this.constructor = Child;
	        this.constructor$ = Parent;
	        for (var propertyName in Parent.prototype) {
	            if (hasProp.call(Parent.prototype, propertyName) &&
	                propertyName.charAt(propertyName.length-1) !== "$"
	           ) {
	                this[propertyName + "$"] = Parent.prototype[propertyName];
	            }
	        }
	    }
	    T.prototype = Parent.prototype;
	    Child.prototype = new T();
	    return Child.prototype;
	};
	
	
	function isPrimitive(val) {
	    return val == null || val === true || val === false ||
	        typeof val === "string" || typeof val === "number";
	
	}
	
	function isObject(value) {
	    return typeof value === "function" ||
	           typeof value === "object" && value !== null;
	}
	
	function maybeWrapAsError(maybeError) {
	    if (!isPrimitive(maybeError)) return maybeError;
	
	    return new Error(safeToString(maybeError));
	}
	
	function withAppended(target, appendee) {
	    var len = target.length;
	    var ret = new Array(len + 1);
	    var i;
	    for (i = 0; i < len; ++i) {
	        ret[i] = target[i];
	    }
	    ret[i] = appendee;
	    return ret;
	}
	
	function getDataPropertyOrDefault(obj, key, defaultValue) {
	    if (es5.isES5) {
	        var desc = Object.getOwnPropertyDescriptor(obj, key);
	
	        if (desc != null) {
	            return desc.get == null && desc.set == null
	                    ? desc.value
	                    : defaultValue;
	        }
	    } else {
	        return {}.hasOwnProperty.call(obj, key) ? obj[key] : undefined;
	    }
	}
	
	function notEnumerableProp(obj, name, value) {
	    if (isPrimitive(obj)) return obj;
	    var descriptor = {
	        value: value,
	        configurable: true,
	        enumerable: false,
	        writable: true
	    };
	    es5.defineProperty(obj, name, descriptor);
	    return obj;
	}
	
	function thrower(r) {
	    throw r;
	}
	
	var inheritedDataKeys = (function() {
	    var excludedPrototypes = [
	        Array.prototype,
	        Object.prototype,
	        Function.prototype
	    ];
	
	    var isExcludedProto = function(val) {
	        for (var i = 0; i < excludedPrototypes.length; ++i) {
	            if (excludedPrototypes[i] === val) {
	                return true;
	            }
	        }
	        return false;
	    };
	
	    if (es5.isES5) {
	        var getKeys = Object.getOwnPropertyNames;
	        return function(obj) {
	            var ret = [];
	            var visitedKeys = Object.create(null);
	            while (obj != null && !isExcludedProto(obj)) {
	                var keys;
	                try {
	                    keys = getKeys(obj);
	                } catch (e) {
	                    return ret;
	                }
	                for (var i = 0; i < keys.length; ++i) {
	                    var key = keys[i];
	                    if (visitedKeys[key]) continue;
	                    visitedKeys[key] = true;
	                    var desc = Object.getOwnPropertyDescriptor(obj, key);
	                    if (desc != null && desc.get == null && desc.set == null) {
	                        ret.push(key);
	                    }
	                }
	                obj = es5.getPrototypeOf(obj);
	            }
	            return ret;
	        };
	    } else {
	        var hasProp = {}.hasOwnProperty;
	        return function(obj) {
	            if (isExcludedProto(obj)) return [];
	            var ret = [];
	
	            /*jshint forin:false */
	            enumeration: for (var key in obj) {
	                if (hasProp.call(obj, key)) {
	                    ret.push(key);
	                } else {
	                    for (var i = 0; i < excludedPrototypes.length; ++i) {
	                        if (hasProp.call(excludedPrototypes[i], key)) {
	                            continue enumeration;
	                        }
	                    }
	                    ret.push(key);
	                }
	            }
	            return ret;
	        };
	    }
	
	})();
	
	var thisAssignmentPattern = /this\s*\.\s*\S+\s*=/;
	function isClass(fn) {
	    try {
	        if (typeof fn === "function") {
	            var keys = es5.names(fn.prototype);
	
	            var hasMethods = es5.isES5 && keys.length > 1;
	            var hasMethodsOtherThanConstructor = keys.length > 0 &&
	                !(keys.length === 1 && keys[0] === "constructor");
	            var hasThisAssignmentAndStaticMethods =
	                thisAssignmentPattern.test(fn + "") && es5.names(fn).length > 0;
	
	            if (hasMethods || hasMethodsOtherThanConstructor ||
	                hasThisAssignmentAndStaticMethods) {
	                return true;
	            }
	        }
	        return false;
	    } catch (e) {
	        return false;
	    }
	}
	
	function toFastProperties(obj) {
	    /*jshint -W027,-W055,-W031*/
	    function FakeConstructor() {}
	    FakeConstructor.prototype = obj;
	    var l = 8;
	    while (l--) new FakeConstructor();
	    return obj;
	    eval(obj);
	}
	
	var rident = /^[a-z$_][a-z$_0-9]*$/i;
	function isIdentifier(str) {
	    return rident.test(str);
	}
	
	function filledRange(count, prefix, suffix) {
	    var ret = new Array(count);
	    for(var i = 0; i < count; ++i) {
	        ret[i] = prefix + i + suffix;
	    }
	    return ret;
	}
	
	function safeToString(obj) {
	    try {
	        return obj + "";
	    } catch (e) {
	        return "[no string representation]";
	    }
	}
	
	function isError(obj) {
	    return obj instanceof Error ||
	        (obj !== null &&
	           typeof obj === "object" &&
	           typeof obj.message === "string" &&
	           typeof obj.name === "string");
	}
	
	function markAsOriginatingFromRejection(e) {
	    try {
	        notEnumerableProp(e, "isOperational", true);
	    }
	    catch(ignore) {}
	}
	
	function originatesFromRejection(e) {
	    if (e == null) return false;
	    return ((e instanceof Error["__BluebirdErrorTypes__"].OperationalError) ||
	        e["isOperational"] === true);
	}
	
	function canAttachTrace(obj) {
	    return isError(obj) && es5.propertyIsWritable(obj, "stack");
	}
	
	var ensureErrorObject = (function() {
	    if (!("stack" in new Error())) {
	        return function(value) {
	            if (canAttachTrace(value)) return value;
	            try {throw new Error(safeToString(value));}
	            catch(err) {return err;}
	        };
	    } else {
	        return function(value) {
	            if (canAttachTrace(value)) return value;
	            return new Error(safeToString(value));
	        };
	    }
	})();
	
	function classString(obj) {
	    return {}.toString.call(obj);
	}
	
	function copyDescriptors(from, to, filter) {
	    var keys = es5.names(from);
	    for (var i = 0; i < keys.length; ++i) {
	        var key = keys[i];
	        if (filter(key)) {
	            try {
	                es5.defineProperty(to, key, es5.getDescriptor(from, key));
	            } catch (ignore) {}
	        }
	    }
	}
	
	var asArray = function(v) {
	    if (es5.isArray(v)) {
	        return v;
	    }
	    return null;
	};
	
	if (typeof Symbol !== "undefined" && Symbol.iterator) {
	    var ArrayFrom = typeof Array.from === "function" ? function(v) {
	        return Array.from(v);
	    } : function(v) {
	        var ret = [];
	        var it = v[Symbol.iterator]();
	        var itResult;
	        while (!((itResult = it.next()).done)) {
	            ret.push(itResult.value);
	        }
	        return ret;
	    };
	
	    asArray = function(v) {
	        if (es5.isArray(v)) {
	            return v;
	        } else if (v != null && typeof v[Symbol.iterator] === "function") {
	            return ArrayFrom(v);
	        }
	        return null;
	    };
	}
	
	var isNode = typeof process !== "undefined" &&
	        classString(process).toLowerCase() === "[object process]";
	
	var hasEnvVariables = typeof process !== "undefined" &&
	    typeof process.env !== "undefined";
	
	function env(key) {
	    return hasEnvVariables ? process.env[key] : undefined;
	}
	
	function getNativePromise() {
	    if (typeof Promise === "function") {
	        try {
	            var promise = new Promise(function(){});
	            if ({}.toString.call(promise) === "[object Promise]") {
	                return Promise;
	            }
	        } catch (e) {}
	    }
	}
	
	function domainBind(self, cb) {
	    return self.bind(cb);
	}
	
	var ret = {
	    isClass: isClass,
	    isIdentifier: isIdentifier,
	    inheritedDataKeys: inheritedDataKeys,
	    getDataPropertyOrDefault: getDataPropertyOrDefault,
	    thrower: thrower,
	    isArray: es5.isArray,
	    asArray: asArray,
	    notEnumerableProp: notEnumerableProp,
	    isPrimitive: isPrimitive,
	    isObject: isObject,
	    isError: isError,
	    canEvaluate: canEvaluate,
	    errorObj: errorObj,
	    tryCatch: tryCatch,
	    inherits: inherits,
	    withAppended: withAppended,
	    maybeWrapAsError: maybeWrapAsError,
	    toFastProperties: toFastProperties,
	    filledRange: filledRange,
	    toString: safeToString,
	    canAttachTrace: canAttachTrace,
	    ensureErrorObject: ensureErrorObject,
	    originatesFromRejection: originatesFromRejection,
	    markAsOriginatingFromRejection: markAsOriginatingFromRejection,
	    classString: classString,
	    copyDescriptors: copyDescriptors,
	    hasDevTools: typeof chrome !== "undefined" && chrome &&
	                 typeof chrome.loadTimes === "function",
	    isNode: isNode,
	    hasEnvVariables: hasEnvVariables,
	    env: env,
	    global: globalObject,
	    getNativePromise: getNativePromise,
	    domainBind: domainBind
	};
	ret.isRecentNode = ret.isNode && (function() {
	    var version = process.versions.node.split(".").map(Number);
	    return (version[0] === 0 && version[1] > 10) || (version[0] > 0);
	})();
	
	if (ret.isNode) ret.toFastProperties(process);
	
	try {throw new Error(); } catch (e) {ret.lastLineError = e;}
	module.exports = ret;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(51)))

/***/ },
/* 53 */
/***/ function(module, exports) {

	var isES5 = (function(){
	    "use strict";
	    return this === undefined;
	})();
	
	if (isES5) {
	    module.exports = {
	        freeze: Object.freeze,
	        defineProperty: Object.defineProperty,
	        getDescriptor: Object.getOwnPropertyDescriptor,
	        keys: Object.keys,
	        names: Object.getOwnPropertyNames,
	        getPrototypeOf: Object.getPrototypeOf,
	        isArray: Array.isArray,
	        isES5: isES5,
	        propertyIsWritable: function(obj, prop) {
	            var descriptor = Object.getOwnPropertyDescriptor(obj, prop);
	            return !!(!descriptor || descriptor.writable || descriptor.set);
	        }
	    };
	} else {
	    var has = {}.hasOwnProperty;
	    var str = {}.toString;
	    var proto = {}.constructor.prototype;
	
	    var ObjectKeys = function (o) {
	        var ret = [];
	        for (var key in o) {
	            if (has.call(o, key)) {
	                ret.push(key);
	            }
	        }
	        return ret;
	    };
	
	    var ObjectGetDescriptor = function(o, key) {
	        return {value: o[key]};
	    };
	
	    var ObjectDefineProperty = function (o, key, desc) {
	        o[key] = desc.value;
	        return o;
	    };
	
	    var ObjectFreeze = function (obj) {
	        return obj;
	    };
	
	    var ObjectGetPrototypeOf = function (obj) {
	        try {
	            return Object(obj).constructor.prototype;
	        }
	        catch (e) {
	            return proto;
	        }
	    };
	
	    var ArrayIsArray = function (obj) {
	        try {
	            return str.call(obj) === "[object Array]";
	        }
	        catch(e) {
	            return false;
	        }
	    };
	
	    module.exports = {
	        isArray: ArrayIsArray,
	        keys: ObjectKeys,
	        names: ObjectKeys,
	        defineProperty: ObjectDefineProperty,
	        getDescriptor: ObjectGetDescriptor,
	        freeze: ObjectFreeze,
	        getPrototypeOf: ObjectGetPrototypeOf,
	        isES5: isES5,
	        propertyIsWritable: function() {
	            return true;
	        }
	    };
	}


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";
	var firstLineError;
	try {throw new Error(); } catch (e) {firstLineError = e;}
	var schedule = __webpack_require__(55);
	var Queue = __webpack_require__(57);
	var util = __webpack_require__(52);
	
	function Async() {
	    this._customScheduler = false;
	    this._isTickUsed = false;
	    this._lateQueue = new Queue(16);
	    this._normalQueue = new Queue(16);
	    this._haveDrainedQueues = false;
	    this._trampolineEnabled = true;
	    var self = this;
	    this.drainQueues = function () {
	        self._drainQueues();
	    };
	    this._schedule = schedule;
	}
	
	Async.prototype.setScheduler = function(fn) {
	    var prev = this._schedule;
	    this._schedule = fn;
	    this._customScheduler = true;
	    return prev;
	};
	
	Async.prototype.hasCustomScheduler = function() {
	    return this._customScheduler;
	};
	
	Async.prototype.enableTrampoline = function() {
	    this._trampolineEnabled = true;
	};
	
	Async.prototype.disableTrampolineIfNecessary = function() {
	    if (util.hasDevTools) {
	        this._trampolineEnabled = false;
	    }
	};
	
	Async.prototype.haveItemsQueued = function () {
	    return this._isTickUsed || this._haveDrainedQueues;
	};
	
	
	Async.prototype.fatalError = function(e, isNode) {
	    if (isNode) {
	        process.stderr.write("Fatal " + (e instanceof Error ? e.stack : e) +
	            "\n");
	        process.exit(2);
	    } else {
	        this.throwLater(e);
	    }
	};
	
	Async.prototype.throwLater = function(fn, arg) {
	    if (arguments.length === 1) {
	        arg = fn;
	        fn = function () { throw arg; };
	    }
	    if (typeof setTimeout !== "undefined") {
	        setTimeout(function() {
	            fn(arg);
	        }, 0);
	    } else try {
	        this._schedule(function() {
	            fn(arg);
	        });
	    } catch (e) {
	        throw new Error("No async scheduler available\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
	    }
	};
	
	function AsyncInvokeLater(fn, receiver, arg) {
	    this._lateQueue.push(fn, receiver, arg);
	    this._queueTick();
	}
	
	function AsyncInvoke(fn, receiver, arg) {
	    this._normalQueue.push(fn, receiver, arg);
	    this._queueTick();
	}
	
	function AsyncSettlePromises(promise) {
	    this._normalQueue._pushOne(promise);
	    this._queueTick();
	}
	
	if (!util.hasDevTools) {
	    Async.prototype.invokeLater = AsyncInvokeLater;
	    Async.prototype.invoke = AsyncInvoke;
	    Async.prototype.settlePromises = AsyncSettlePromises;
	} else {
	    Async.prototype.invokeLater = function (fn, receiver, arg) {
	        if (this._trampolineEnabled) {
	            AsyncInvokeLater.call(this, fn, receiver, arg);
	        } else {
	            this._schedule(function() {
	                setTimeout(function() {
	                    fn.call(receiver, arg);
	                }, 100);
	            });
	        }
	    };
	
	    Async.prototype.invoke = function (fn, receiver, arg) {
	        if (this._trampolineEnabled) {
	            AsyncInvoke.call(this, fn, receiver, arg);
	        } else {
	            this._schedule(function() {
	                fn.call(receiver, arg);
	            });
	        }
	    };
	
	    Async.prototype.settlePromises = function(promise) {
	        if (this._trampolineEnabled) {
	            AsyncSettlePromises.call(this, promise);
	        } else {
	            this._schedule(function() {
	                promise._settlePromises();
	            });
	        }
	    };
	}
	
	Async.prototype._drainQueue = function(queue) {
	    while (queue.length() > 0) {
	        var fn = queue.shift();
	        if (typeof fn !== "function") {
	            fn._settlePromises();
	            continue;
	        }
	        var receiver = queue.shift();
	        var arg = queue.shift();
	        fn.call(receiver, arg);
	    }
	};
	
	Async.prototype._drainQueues = function () {
	    this._drainQueue(this._normalQueue);
	    this._reset();
	    this._haveDrainedQueues = true;
	    this._drainQueue(this._lateQueue);
	};
	
	Async.prototype._queueTick = function () {
	    if (!this._isTickUsed) {
	        this._isTickUsed = true;
	        this._schedule(this.drainQueues);
	    }
	};
	
	Async.prototype._reset = function () {
	    this._isTickUsed = false;
	};
	
	module.exports = Async;
	module.exports.firstLineError = firstLineError;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(51)))

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process, setImmediate) {"use strict";
	var util = __webpack_require__(52);
	var schedule;
	var noAsyncScheduler = function() {
	    throw new Error("No async scheduler available\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
	};
	var NativePromise = util.getNativePromise();
	if (util.isNode && typeof MutationObserver === "undefined") {
	    var GlobalSetImmediate = global.setImmediate;
	    var ProcessNextTick = process.nextTick;
	    schedule = util.isRecentNode
	                ? function(fn) { GlobalSetImmediate.call(global, fn); }
	                : function(fn) { ProcessNextTick.call(process, fn); };
	} else if (typeof NativePromise === "function" &&
	           typeof NativePromise.resolve === "function") {
	    var nativePromise = NativePromise.resolve();
	    schedule = function(fn) {
	        nativePromise.then(fn);
	    };
	} else if ((typeof MutationObserver !== "undefined") &&
	          !(typeof window !== "undefined" &&
	            window.navigator &&
	            (window.navigator.standalone || window.cordova))) {
	    schedule = (function() {
	        var div = document.createElement("div");
	        var opts = {attributes: true};
	        var toggleScheduled = false;
	        var div2 = document.createElement("div");
	        var o2 = new MutationObserver(function() {
	            div.classList.toggle("foo");
	            toggleScheduled = false;
	        });
	        o2.observe(div2, opts);
	
	        var scheduleToggle = function() {
	            if (toggleScheduled) return;
	            toggleScheduled = true;
	            div2.classList.toggle("foo");
	        };
	
	        return function schedule(fn) {
	            var o = new MutationObserver(function() {
	                o.disconnect();
	                fn();
	            });
	            o.observe(div, opts);
	            scheduleToggle();
	        };
	    })();
	} else if (typeof setImmediate !== "undefined") {
	    schedule = function (fn) {
	        setImmediate(fn);
	    };
	} else if (typeof setTimeout !== "undefined") {
	    schedule = function (fn) {
	        setTimeout(fn, 0);
	    };
	} else {
	    schedule = noAsyncScheduler;
	}
	module.exports = schedule;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(51), __webpack_require__(56).setImmediate))

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {var nextTick = __webpack_require__(51).nextTick;
	var apply = Function.prototype.apply;
	var slice = Array.prototype.slice;
	var immediateIds = {};
	var nextImmediateId = 0;
	
	// DOM APIs, for completeness
	
	exports.setTimeout = function() {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function() {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout =
	exports.clearInterval = function(timeout) { timeout.close(); };
	
	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function() {};
	Timeout.prototype.close = function() {
	  this._clearFn.call(window, this._id);
	};
	
	// Does not start the time, just sets up the members needed.
	exports.enroll = function(item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};
	
	exports.unenroll = function(item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};
	
	exports._unrefActive = exports.active = function(item) {
	  clearTimeout(item._idleTimeoutId);
	
	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout)
	        item._onTimeout();
	    }, msecs);
	  }
	};
	
	// That's not how node.js implements it but the exposed api is the same.
	exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
	  var id = nextImmediateId++;
	  var args = arguments.length < 2 ? false : slice.call(arguments, 1);
	
	  immediateIds[id] = true;
	
	  nextTick(function onNextTick() {
	    if (immediateIds[id]) {
	      // fn.call() is faster so we optimize for the common use-case
	      // @see http://jsperf.com/call-apply-segu
	      if (args) {
	        fn.apply(null, args);
	      } else {
	        fn.call(null);
	      }
	      // Prevent ids from leaking
	      exports.clearImmediate(id);
	    }
	  });
	
	  return id;
	};
	
	exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
	  delete immediateIds[id];
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(56).setImmediate, __webpack_require__(56).clearImmediate))

/***/ },
/* 57 */
/***/ function(module, exports) {

	"use strict";
	function arrayMove(src, srcIndex, dst, dstIndex, len) {
	    for (var j = 0; j < len; ++j) {
	        dst[j + dstIndex] = src[j + srcIndex];
	        src[j + srcIndex] = void 0;
	    }
	}
	
	function Queue(capacity) {
	    this._capacity = capacity;
	    this._length = 0;
	    this._front = 0;
	}
	
	Queue.prototype._willBeOverCapacity = function (size) {
	    return this._capacity < size;
	};
	
	Queue.prototype._pushOne = function (arg) {
	    var length = this.length();
	    this._checkCapacity(length + 1);
	    var i = (this._front + length) & (this._capacity - 1);
	    this[i] = arg;
	    this._length = length + 1;
	};
	
	Queue.prototype.push = function (fn, receiver, arg) {
	    var length = this.length() + 3;
	    if (this._willBeOverCapacity(length)) {
	        this._pushOne(fn);
	        this._pushOne(receiver);
	        this._pushOne(arg);
	        return;
	    }
	    var j = this._front + length - 3;
	    this._checkCapacity(length);
	    var wrapMask = this._capacity - 1;
	    this[(j + 0) & wrapMask] = fn;
	    this[(j + 1) & wrapMask] = receiver;
	    this[(j + 2) & wrapMask] = arg;
	    this._length = length;
	};
	
	Queue.prototype.shift = function () {
	    var front = this._front,
	        ret = this[front];
	
	    this[front] = undefined;
	    this._front = (front + 1) & (this._capacity - 1);
	    this._length--;
	    return ret;
	};
	
	Queue.prototype.length = function () {
	    return this._length;
	};
	
	Queue.prototype._checkCapacity = function (size) {
	    if (this._capacity < size) {
	        this._resizeTo(this._capacity << 1);
	    }
	};
	
	Queue.prototype._resizeTo = function (capacity) {
	    var oldCapacity = this._capacity;
	    this._capacity = capacity;
	    var front = this._front;
	    var length = this._length;
	    var moveItemsCount = (front + length) & (oldCapacity - 1);
	    arrayMove(this, 0, this, oldCapacity, moveItemsCount);
	};
	
	module.exports = Queue;


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var es5 = __webpack_require__(53);
	var Objectfreeze = es5.freeze;
	var util = __webpack_require__(52);
	var inherits = util.inherits;
	var notEnumerableProp = util.notEnumerableProp;
	
	function subError(nameProperty, defaultMessage) {
	    function SubError(message) {
	        if (!(this instanceof SubError)) return new SubError(message);
	        notEnumerableProp(this, "message",
	            typeof message === "string" ? message : defaultMessage);
	        notEnumerableProp(this, "name", nameProperty);
	        if (Error.captureStackTrace) {
	            Error.captureStackTrace(this, this.constructor);
	        } else {
	            Error.call(this);
	        }
	    }
	    inherits(SubError, Error);
	    return SubError;
	}
	
	var _TypeError, _RangeError;
	var Warning = subError("Warning", "warning");
	var CancellationError = subError("CancellationError", "cancellation error");
	var TimeoutError = subError("TimeoutError", "timeout error");
	var AggregateError = subError("AggregateError", "aggregate error");
	try {
	    _TypeError = TypeError;
	    _RangeError = RangeError;
	} catch(e) {
	    _TypeError = subError("TypeError", "type error");
	    _RangeError = subError("RangeError", "range error");
	}
	
	var methods = ("join pop push shift unshift slice filter forEach some " +
	    "every map indexOf lastIndexOf reduce reduceRight sort reverse").split(" ");
	
	for (var i = 0; i < methods.length; ++i) {
	    if (typeof Array.prototype[methods[i]] === "function") {
	        AggregateError.prototype[methods[i]] = Array.prototype[methods[i]];
	    }
	}
	
	es5.defineProperty(AggregateError.prototype, "length", {
	    value: 0,
	    configurable: false,
	    writable: true,
	    enumerable: true
	});
	AggregateError.prototype["isOperational"] = true;
	var level = 0;
	AggregateError.prototype.toString = function() {
	    var indent = Array(level * 4 + 1).join(" ");
	    var ret = "\n" + indent + "AggregateError of:" + "\n";
	    level++;
	    indent = Array(level * 4 + 1).join(" ");
	    for (var i = 0; i < this.length; ++i) {
	        var str = this[i] === this ? "[Circular AggregateError]" : this[i] + "";
	        var lines = str.split("\n");
	        for (var j = 0; j < lines.length; ++j) {
	            lines[j] = indent + lines[j];
	        }
	        str = lines.join("\n");
	        ret += str + "\n";
	    }
	    level--;
	    return ret;
	};
	
	function OperationalError(message) {
	    if (!(this instanceof OperationalError))
	        return new OperationalError(message);
	    notEnumerableProp(this, "name", "OperationalError");
	    notEnumerableProp(this, "message", message);
	    this.cause = message;
	    this["isOperational"] = true;
	
	    if (message instanceof Error) {
	        notEnumerableProp(this, "message", message.message);
	        notEnumerableProp(this, "stack", message.stack);
	    } else if (Error.captureStackTrace) {
	        Error.captureStackTrace(this, this.constructor);
	    }
	
	}
	inherits(OperationalError, Error);
	
	var errorTypes = Error["__BluebirdErrorTypes__"];
	if (!errorTypes) {
	    errorTypes = Objectfreeze({
	        CancellationError: CancellationError,
	        TimeoutError: TimeoutError,
	        OperationalError: OperationalError,
	        RejectionError: OperationalError,
	        AggregateError: AggregateError
	    });
	    es5.defineProperty(Error, "__BluebirdErrorTypes__", {
	        value: errorTypes,
	        writable: false,
	        enumerable: false,
	        configurable: false
	    });
	}
	
	module.exports = {
	    Error: Error,
	    TypeError: _TypeError,
	    RangeError: _RangeError,
	    CancellationError: errorTypes.CancellationError,
	    OperationalError: errorTypes.OperationalError,
	    TimeoutError: errorTypes.TimeoutError,
	    AggregateError: errorTypes.AggregateError,
	    Warning: Warning
	};


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	module.exports = function(Promise, INTERNAL) {
	var util = __webpack_require__(52);
	var errorObj = util.errorObj;
	var isObject = util.isObject;
	
	function tryConvertToPromise(obj, context) {
	    if (isObject(obj)) {
	        if (obj instanceof Promise) return obj;
	        var then = getThen(obj);
	        if (then === errorObj) {
	            if (context) context._pushContext();
	            var ret = Promise.reject(then.e);
	            if (context) context._popContext();
	            return ret;
	        } else if (typeof then === "function") {
	            if (isAnyBluebirdPromise(obj)) {
	                var ret = new Promise(INTERNAL);
	                obj._then(
	                    ret._fulfill,
	                    ret._reject,
	                    undefined,
	                    ret,
	                    null
	                );
	                return ret;
	            }
	            return doThenable(obj, then, context);
	        }
	    }
	    return obj;
	}
	
	function doGetThen(obj) {
	    return obj.then;
	}
	
	function getThen(obj) {
	    try {
	        return doGetThen(obj);
	    } catch (e) {
	        errorObj.e = e;
	        return errorObj;
	    }
	}
	
	var hasProp = {}.hasOwnProperty;
	function isAnyBluebirdPromise(obj) {
	    try {
	        return hasProp.call(obj, "_promise0");
	    } catch (e) {
	        return false;
	    }
	}
	
	function doThenable(x, then, context) {
	    var promise = new Promise(INTERNAL);
	    var ret = promise;
	    if (context) context._pushContext();
	    promise._captureStackTrace();
	    if (context) context._popContext();
	    var synchronous = true;
	    var result = util.tryCatch(then).call(x, resolve, reject);
	    synchronous = false;
	
	    if (promise && result === errorObj) {
	        promise._rejectCallback(result.e, true, true);
	        promise = null;
	    }
	
	    function resolve(value) {
	        if (!promise) return;
	        promise._resolveCallback(value);
	        promise = null;
	    }
	
	    function reject(reason) {
	        if (!promise) return;
	        promise._rejectCallback(reason, synchronous, true);
	        promise = null;
	    }
	    return ret;
	}
	
	return tryConvertToPromise;
	};


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	module.exports = function(Promise, INTERNAL, tryConvertToPromise,
	    apiRejection, Proxyable) {
	var util = __webpack_require__(52);
	var isArray = util.isArray;
	
	function toResolutionValue(val) {
	    switch(val) {
	    case -2: return [];
	    case -3: return {};
	    case -6: return new Map();
	    }
	}
	
	function PromiseArray(values) {
	    var promise = this._promise = new Promise(INTERNAL);
	    if (values instanceof Promise) {
	        promise._propagateFrom(values, 3);
	    }
	    promise._setOnCancel(this);
	    this._values = values;
	    this._length = 0;
	    this._totalResolved = 0;
	    this._init(undefined, -2);
	}
	util.inherits(PromiseArray, Proxyable);
	
	PromiseArray.prototype.length = function () {
	    return this._length;
	};
	
	PromiseArray.prototype.promise = function () {
	    return this._promise;
	};
	
	PromiseArray.prototype._init = function init(_, resolveValueIfEmpty) {
	    var values = tryConvertToPromise(this._values, this._promise);
	    if (values instanceof Promise) {
	        values = values._target();
	        var bitField = values._bitField;
	        ;
	        this._values = values;
	
	        if (((bitField & 50397184) === 0)) {
	            this._promise._setAsyncGuaranteed();
	            return values._then(
	                init,
	                this._reject,
	                undefined,
	                this,
	                resolveValueIfEmpty
	           );
	        } else if (((bitField & 33554432) !== 0)) {
	            values = values._value();
	        } else if (((bitField & 16777216) !== 0)) {
	            return this._reject(values._reason());
	        } else {
	            return this._cancel();
	        }
	    }
	    values = util.asArray(values);
	    if (values === null) {
	        var err = apiRejection(
	            "expecting an array or an iterable object but got " + util.classString(values)).reason();
	        this._promise._rejectCallback(err, false);
	        return;
	    }
	
	    if (values.length === 0) {
	        if (resolveValueIfEmpty === -5) {
	            this._resolveEmptyArray();
	        }
	        else {
	            this._resolve(toResolutionValue(resolveValueIfEmpty));
	        }
	        return;
	    }
	    this._iterate(values);
	};
	
	PromiseArray.prototype._iterate = function(values) {
	    var len = this.getActualLength(values.length);
	    this._length = len;
	    this._values = this.shouldCopyValues() ? new Array(len) : this._values;
	    var result = this._promise;
	    var isResolved = false;
	    var bitField = null;
	    for (var i = 0; i < len; ++i) {
	        var maybePromise = tryConvertToPromise(values[i], result);
	
	        if (maybePromise instanceof Promise) {
	            maybePromise = maybePromise._target();
	            bitField = maybePromise._bitField;
	        } else {
	            bitField = null;
	        }
	
	        if (isResolved) {
	            if (bitField !== null) {
	                maybePromise.suppressUnhandledRejections();
	            }
	        } else if (bitField !== null) {
	            if (((bitField & 50397184) === 0)) {
	                maybePromise._proxy(this, i);
	                this._values[i] = maybePromise;
	            } else if (((bitField & 33554432) !== 0)) {
	                isResolved = this._promiseFulfilled(maybePromise._value(), i);
	            } else if (((bitField & 16777216) !== 0)) {
	                isResolved = this._promiseRejected(maybePromise._reason(), i);
	            } else {
	                isResolved = this._promiseCancelled(i);
	            }
	        } else {
	            isResolved = this._promiseFulfilled(maybePromise, i);
	        }
	    }
	    if (!isResolved) result._setAsyncGuaranteed();
	};
	
	PromiseArray.prototype._isResolved = function () {
	    return this._values === null;
	};
	
	PromiseArray.prototype._resolve = function (value) {
	    this._values = null;
	    this._promise._fulfill(value);
	};
	
	PromiseArray.prototype._cancel = function() {
	    if (this._isResolved() || !this._promise._isCancellable()) return;
	    this._values = null;
	    this._promise._cancel();
	};
	
	PromiseArray.prototype._reject = function (reason) {
	    this._values = null;
	    this._promise._rejectCallback(reason, false);
	};
	
	PromiseArray.prototype._promiseFulfilled = function (value, index) {
	    this._values[index] = value;
	    var totalResolved = ++this._totalResolved;
	    if (totalResolved >= this._length) {
	        this._resolve(this._values);
	        return true;
	    }
	    return false;
	};
	
	PromiseArray.prototype._promiseCancelled = function() {
	    this._cancel();
	    return true;
	};
	
	PromiseArray.prototype._promiseRejected = function (reason) {
	    this._totalResolved++;
	    this._reject(reason);
	    return true;
	};
	
	PromiseArray.prototype._resultCancelled = function() {
	    if (this._isResolved()) return;
	    var values = this._values;
	    this._cancel();
	    if (values instanceof Promise) {
	        values.cancel();
	    } else {
	        for (var i = 0; i < values.length; ++i) {
	            if (values[i] instanceof Promise) {
	                values[i].cancel();
	            }
	        }
	    }
	};
	
	PromiseArray.prototype.shouldCopyValues = function () {
	    return true;
	};
	
	PromiseArray.prototype.getActualLength = function (len) {
	    return len;
	};
	
	return PromiseArray;
	};


/***/ },
/* 61 */
/***/ function(module, exports) {

	"use strict";
	module.exports = function(Promise) {
	var longStackTraces = false;
	var contextStack = [];
	
	Promise.prototype._promiseCreated = function() {};
	Promise.prototype._pushContext = function() {};
	Promise.prototype._popContext = function() {return null;};
	Promise._peekContext = Promise.prototype._peekContext = function() {};
	
	function Context() {
	    this._trace = new Context.CapturedTrace(peekContext());
	}
	Context.prototype._pushContext = function () {
	    if (this._trace !== undefined) {
	        this._trace._promiseCreated = null;
	        contextStack.push(this._trace);
	    }
	};
	
	Context.prototype._popContext = function () {
	    if (this._trace !== undefined) {
	        var trace = contextStack.pop();
	        var ret = trace._promiseCreated;
	        trace._promiseCreated = null;
	        return ret;
	    }
	    return null;
	};
	
	function createContext() {
	    if (longStackTraces) return new Context();
	}
	
	function peekContext() {
	    var lastIndex = contextStack.length - 1;
	    if (lastIndex >= 0) {
	        return contextStack[lastIndex];
	    }
	    return undefined;
	}
	Context.CapturedTrace = null;
	Context.create = createContext;
	Context.deactivateLongStackTraces = function() {};
	Context.activateLongStackTraces = function() {
	    var Promise_pushContext = Promise.prototype._pushContext;
	    var Promise_popContext = Promise.prototype._popContext;
	    var Promise_PeekContext = Promise._peekContext;
	    var Promise_peekContext = Promise.prototype._peekContext;
	    var Promise_promiseCreated = Promise.prototype._promiseCreated;
	    Context.deactivateLongStackTraces = function() {
	        Promise.prototype._pushContext = Promise_pushContext;
	        Promise.prototype._popContext = Promise_popContext;
	        Promise._peekContext = Promise_PeekContext;
	        Promise.prototype._peekContext = Promise_peekContext;
	        Promise.prototype._promiseCreated = Promise_promiseCreated;
	        longStackTraces = false;
	    };
	    longStackTraces = true;
	    Promise.prototype._pushContext = Context.prototype._pushContext;
	    Promise.prototype._popContext = Context.prototype._popContext;
	    Promise._peekContext = Promise.prototype._peekContext = peekContext;
	    Promise.prototype._promiseCreated = function() {
	        var ctx = this._peekContext();
	        if (ctx && ctx._promiseCreated == null) ctx._promiseCreated = this;
	    };
	};
	return Context;
	};


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";
	module.exports = function(Promise, Context) {
	var getDomain = Promise._getDomain;
	var async = Promise._async;
	var Warning = __webpack_require__(58).Warning;
	var util = __webpack_require__(52);
	var canAttachTrace = util.canAttachTrace;
	var unhandledRejectionHandled;
	var possiblyUnhandledRejection;
	var bluebirdFramePattern =
	    /[\\\/]bluebird[\\\/]js[\\\/](release|debug|instrumented)/;
	var nodeFramePattern = /\((?:timers\.js):\d+:\d+\)/;
	var parseLinePattern = /[\/<\(](.+?):(\d+):(\d+)\)?\s*$/;
	var stackFramePattern = null;
	var formatStack = null;
	var indentStackFrames = false;
	var printWarning;
	var debugging = !!(util.env("BLUEBIRD_DEBUG") != 0 &&
	                        (false ||
	                         util.env("BLUEBIRD_DEBUG") ||
	                         util.env("NODE_ENV") === "development"));
	
	var warnings = !!(util.env("BLUEBIRD_WARNINGS") != 0 &&
	    (debugging || util.env("BLUEBIRD_WARNINGS")));
	
	var longStackTraces = !!(util.env("BLUEBIRD_LONG_STACK_TRACES") != 0 &&
	    (debugging || util.env("BLUEBIRD_LONG_STACK_TRACES")));
	
	var wForgottenReturn = util.env("BLUEBIRD_W_FORGOTTEN_RETURN") != 0 &&
	    (warnings || !!util.env("BLUEBIRD_W_FORGOTTEN_RETURN"));
	
	Promise.prototype.suppressUnhandledRejections = function() {
	    var target = this._target();
	    target._bitField = ((target._bitField & (~1048576)) |
	                      524288);
	};
	
	Promise.prototype._ensurePossibleRejectionHandled = function () {
	    if ((this._bitField & 524288) !== 0) return;
	    this._setRejectionIsUnhandled();
	    var self = this;
	    setTimeout(function() {
	        self._notifyUnhandledRejection();
	    }, 1);
	};
	
	Promise.prototype._notifyUnhandledRejectionIsHandled = function () {
	    fireRejectionEvent("rejectionHandled",
	                                  unhandledRejectionHandled, undefined, this);
	};
	
	Promise.prototype._setReturnedNonUndefined = function() {
	    this._bitField = this._bitField | 268435456;
	};
	
	Promise.prototype._returnedNonUndefined = function() {
	    return (this._bitField & 268435456) !== 0;
	};
	
	Promise.prototype._notifyUnhandledRejection = function () {
	    if (this._isRejectionUnhandled()) {
	        var reason = this._settledValue();
	        this._setUnhandledRejectionIsNotified();
	        fireRejectionEvent("unhandledRejection",
	                                      possiblyUnhandledRejection, reason, this);
	    }
	};
	
	Promise.prototype._setUnhandledRejectionIsNotified = function () {
	    this._bitField = this._bitField | 262144;
	};
	
	Promise.prototype._unsetUnhandledRejectionIsNotified = function () {
	    this._bitField = this._bitField & (~262144);
	};
	
	Promise.prototype._isUnhandledRejectionNotified = function () {
	    return (this._bitField & 262144) > 0;
	};
	
	Promise.prototype._setRejectionIsUnhandled = function () {
	    this._bitField = this._bitField | 1048576;
	};
	
	Promise.prototype._unsetRejectionIsUnhandled = function () {
	    this._bitField = this._bitField & (~1048576);
	    if (this._isUnhandledRejectionNotified()) {
	        this._unsetUnhandledRejectionIsNotified();
	        this._notifyUnhandledRejectionIsHandled();
	    }
	};
	
	Promise.prototype._isRejectionUnhandled = function () {
	    return (this._bitField & 1048576) > 0;
	};
	
	Promise.prototype._warn = function(message, shouldUseOwnTrace, promise) {
	    return warn(message, shouldUseOwnTrace, promise || this);
	};
	
	Promise.onPossiblyUnhandledRejection = function (fn) {
	    var domain = getDomain();
	    possiblyUnhandledRejection =
	        typeof fn === "function" ? (domain === null ?
	                                            fn : util.domainBind(domain, fn))
	                                 : undefined;
	};
	
	Promise.onUnhandledRejectionHandled = function (fn) {
	    var domain = getDomain();
	    unhandledRejectionHandled =
	        typeof fn === "function" ? (domain === null ?
	                                            fn : util.domainBind(domain, fn))
	                                 : undefined;
	};
	
	var disableLongStackTraces = function() {};
	Promise.longStackTraces = function () {
	    if (async.haveItemsQueued() && !config.longStackTraces) {
	        throw new Error("cannot enable long stack traces after promises have been created\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
	    }
	    if (!config.longStackTraces && longStackTracesIsSupported()) {
	        var Promise_captureStackTrace = Promise.prototype._captureStackTrace;
	        var Promise_attachExtraTrace = Promise.prototype._attachExtraTrace;
	        config.longStackTraces = true;
	        disableLongStackTraces = function() {
	            if (async.haveItemsQueued() && !config.longStackTraces) {
	                throw new Error("cannot enable long stack traces after promises have been created\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
	            }
	            Promise.prototype._captureStackTrace = Promise_captureStackTrace;
	            Promise.prototype._attachExtraTrace = Promise_attachExtraTrace;
	            Context.deactivateLongStackTraces();
	            async.enableTrampoline();
	            config.longStackTraces = false;
	        };
	        Promise.prototype._captureStackTrace = longStackTracesCaptureStackTrace;
	        Promise.prototype._attachExtraTrace = longStackTracesAttachExtraTrace;
	        Context.activateLongStackTraces();
	        async.disableTrampolineIfNecessary();
	    }
	};
	
	Promise.hasLongStackTraces = function () {
	    return config.longStackTraces && longStackTracesIsSupported();
	};
	
	var fireDomEvent = (function() {
	    try {
	        if (typeof CustomEvent === "function") {
	            var event = new CustomEvent("CustomEvent");
	            util.global.dispatchEvent(event);
	            return function(name, event) {
	                var domEvent = new CustomEvent(name.toLowerCase(), {
	                    detail: event,
	                    cancelable: true
	                });
	                return !util.global.dispatchEvent(domEvent);
	            };
	        } else if (typeof Event === "function") {
	            var event = new Event("CustomEvent");
	            util.global.dispatchEvent(event);
	            return function(name, event) {
	                var domEvent = new Event(name.toLowerCase(), {
	                    cancelable: true
	                });
	                domEvent.detail = event;
	                return !util.global.dispatchEvent(domEvent);
	            };
	        } else {
	            var event = document.createEvent("CustomEvent");
	            event.initCustomEvent("testingtheevent", false, true, {});
	            util.global.dispatchEvent(event);
	            return function(name, event) {
	                var domEvent = document.createEvent("CustomEvent");
	                domEvent.initCustomEvent(name.toLowerCase(), false, true,
	                    event);
	                return !util.global.dispatchEvent(domEvent);
	            };
	        }
	    } catch (e) {}
	    return function() {
	        return false;
	    };
	})();
	
	var fireGlobalEvent = (function() {
	    if (util.isNode) {
	        return function() {
	            return process.emit.apply(process, arguments);
	        };
	    } else {
	        if (!util.global) {
	            return function() {
	                return false;
	            };
	        }
	        return function(name) {
	            var methodName = "on" + name.toLowerCase();
	            var method = util.global[methodName];
	            if (!method) return false;
	            method.apply(util.global, [].slice.call(arguments, 1));
	            return true;
	        };
	    }
	})();
	
	function generatePromiseLifecycleEventObject(name, promise) {
	    return {promise: promise};
	}
	
	var eventToObjectGenerator = {
	    promiseCreated: generatePromiseLifecycleEventObject,
	    promiseFulfilled: generatePromiseLifecycleEventObject,
	    promiseRejected: generatePromiseLifecycleEventObject,
	    promiseResolved: generatePromiseLifecycleEventObject,
	    promiseCancelled: generatePromiseLifecycleEventObject,
	    promiseChained: function(name, promise, child) {
	        return {promise: promise, child: child};
	    },
	    warning: function(name, warning) {
	        return {warning: warning};
	    },
	    unhandledRejection: function (name, reason, promise) {
	        return {reason: reason, promise: promise};
	    },
	    rejectionHandled: generatePromiseLifecycleEventObject
	};
	
	var activeFireEvent = function (name) {
	    var globalEventFired = false;
	    try {
	        globalEventFired = fireGlobalEvent.apply(null, arguments);
	    } catch (e) {
	        async.throwLater(e);
	        globalEventFired = true;
	    }
	
	    var domEventFired = false;
	    try {
	        domEventFired = fireDomEvent(name,
	                    eventToObjectGenerator[name].apply(null, arguments));
	    } catch (e) {
	        async.throwLater(e);
	        domEventFired = true;
	    }
	
	    return domEventFired || globalEventFired;
	};
	
	Promise.config = function(opts) {
	    opts = Object(opts);
	    if ("longStackTraces" in opts) {
	        if (opts.longStackTraces) {
	            Promise.longStackTraces();
	        } else if (!opts.longStackTraces && Promise.hasLongStackTraces()) {
	            disableLongStackTraces();
	        }
	    }
	    if ("warnings" in opts) {
	        var warningsOption = opts.warnings;
	        config.warnings = !!warningsOption;
	        wForgottenReturn = config.warnings;
	
	        if (util.isObject(warningsOption)) {
	            if ("wForgottenReturn" in warningsOption) {
	                wForgottenReturn = !!warningsOption.wForgottenReturn;
	            }
	        }
	    }
	    if ("cancellation" in opts && opts.cancellation && !config.cancellation) {
	        if (async.haveItemsQueued()) {
	            throw new Error(
	                "cannot enable cancellation after promises are in use");
	        }
	        Promise.prototype._clearCancellationData =
	            cancellationClearCancellationData;
	        Promise.prototype._propagateFrom = cancellationPropagateFrom;
	        Promise.prototype._onCancel = cancellationOnCancel;
	        Promise.prototype._setOnCancel = cancellationSetOnCancel;
	        Promise.prototype._attachCancellationCallback =
	            cancellationAttachCancellationCallback;
	        Promise.prototype._execute = cancellationExecute;
	        propagateFromFunction = cancellationPropagateFrom;
	        config.cancellation = true;
	    }
	    if ("monitoring" in opts) {
	        if (opts.monitoring && !config.monitoring) {
	            config.monitoring = true;
	            Promise.prototype._fireEvent = activeFireEvent;
	        } else if (!opts.monitoring && config.monitoring) {
	            config.monitoring = false;
	            Promise.prototype._fireEvent = defaultFireEvent;
	        }
	    }
	    return Promise;
	};
	
	function defaultFireEvent() { return false; }
	
	Promise.prototype._fireEvent = defaultFireEvent;
	Promise.prototype._execute = function(executor, resolve, reject) {
	    try {
	        executor(resolve, reject);
	    } catch (e) {
	        return e;
	    }
	};
	Promise.prototype._onCancel = function () {};
	Promise.prototype._setOnCancel = function (handler) { ; };
	Promise.prototype._attachCancellationCallback = function(onCancel) {
	    ;
	};
	Promise.prototype._captureStackTrace = function () {};
	Promise.prototype._attachExtraTrace = function () {};
	Promise.prototype._clearCancellationData = function() {};
	Promise.prototype._propagateFrom = function (parent, flags) {
	    ;
	    ;
	};
	
	function cancellationExecute(executor, resolve, reject) {
	    var promise = this;
	    try {
	        executor(resolve, reject, function(onCancel) {
	            if (typeof onCancel !== "function") {
	                throw new TypeError("onCancel must be a function, got: " +
	                                    util.toString(onCancel));
	            }
	            promise._attachCancellationCallback(onCancel);
	        });
	    } catch (e) {
	        return e;
	    }
	}
	
	function cancellationAttachCancellationCallback(onCancel) {
	    if (!this._isCancellable()) return this;
	
	    var previousOnCancel = this._onCancel();
	    if (previousOnCancel !== undefined) {
	        if (util.isArray(previousOnCancel)) {
	            previousOnCancel.push(onCancel);
	        } else {
	            this._setOnCancel([previousOnCancel, onCancel]);
	        }
	    } else {
	        this._setOnCancel(onCancel);
	    }
	}
	
	function cancellationOnCancel() {
	    return this._onCancelField;
	}
	
	function cancellationSetOnCancel(onCancel) {
	    this._onCancelField = onCancel;
	}
	
	function cancellationClearCancellationData() {
	    this._cancellationParent = undefined;
	    this._onCancelField = undefined;
	}
	
	function cancellationPropagateFrom(parent, flags) {
	    if ((flags & 1) !== 0) {
	        this._cancellationParent = parent;
	        var branchesRemainingToCancel = parent._branchesRemainingToCancel;
	        if (branchesRemainingToCancel === undefined) {
	            branchesRemainingToCancel = 0;
	        }
	        parent._branchesRemainingToCancel = branchesRemainingToCancel + 1;
	    }
	    if ((flags & 2) !== 0 && parent._isBound()) {
	        this._setBoundTo(parent._boundTo);
	    }
	}
	
	function bindingPropagateFrom(parent, flags) {
	    if ((flags & 2) !== 0 && parent._isBound()) {
	        this._setBoundTo(parent._boundTo);
	    }
	}
	var propagateFromFunction = bindingPropagateFrom;
	
	function boundValueFunction() {
	    var ret = this._boundTo;
	    if (ret !== undefined) {
	        if (ret instanceof Promise) {
	            if (ret.isFulfilled()) {
	                return ret.value();
	            } else {
	                return undefined;
	            }
	        }
	    }
	    return ret;
	}
	
	function longStackTracesCaptureStackTrace() {
	    this._trace = new CapturedTrace(this._peekContext());
	}
	
	function longStackTracesAttachExtraTrace(error, ignoreSelf) {
	    if (canAttachTrace(error)) {
	        var trace = this._trace;
	        if (trace !== undefined) {
	            if (ignoreSelf) trace = trace._parent;
	        }
	        if (trace !== undefined) {
	            trace.attachExtraTrace(error);
	        } else if (!error.__stackCleaned__) {
	            var parsed = parseStackAndMessage(error);
	            util.notEnumerableProp(error, "stack",
	                parsed.message + "\n" + parsed.stack.join("\n"));
	            util.notEnumerableProp(error, "__stackCleaned__", true);
	        }
	    }
	}
	
	function checkForgottenReturns(returnValue, promiseCreated, name, promise,
	                               parent) {
	    if (returnValue === undefined && promiseCreated !== null &&
	        wForgottenReturn) {
	        if (parent !== undefined && parent._returnedNonUndefined()) return;
	        if ((promise._bitField & 65535) === 0) return;
	
	        if (name) name = name + " ";
	        var handlerLine = "";
	        var creatorLine = "";
	        if (promiseCreated._trace) {
	            var traceLines = promiseCreated._trace.stack.split("\n");
	            var stack = cleanStack(traceLines);
	            for (var i = stack.length - 1; i >= 0; --i) {
	                var line = stack[i];
	                if (!nodeFramePattern.test(line)) {
	                    var lineMatches = line.match(parseLinePattern);
	                    if (lineMatches) {
	                        handlerLine  = "at " + lineMatches[1] +
	                            ":" + lineMatches[2] + ":" + lineMatches[3] + " ";
	                    }
	                    break;
	                }
	            }
	
	            if (stack.length > 0) {
	                var firstUserLine = stack[0];
	                for (var i = 0; i < traceLines.length; ++i) {
	
	                    if (traceLines[i] === firstUserLine) {
	                        if (i > 0) {
	                            creatorLine = "\n" + traceLines[i - 1];
	                        }
	                        break;
	                    }
	                }
	
	            }
	        }
	        var msg = "a promise was created in a " + name +
	            "handler " + handlerLine + "but was not returned from it, " +
	            "see http://goo.gl/rRqMUw" +
	            creatorLine;
	        promise._warn(msg, true, promiseCreated);
	    }
	}
	
	function deprecated(name, replacement) {
	    var message = name +
	        " is deprecated and will be removed in a future version.";
	    if (replacement) message += " Use " + replacement + " instead.";
	    return warn(message);
	}
	
	function warn(message, shouldUseOwnTrace, promise) {
	    if (!config.warnings) return;
	    var warning = new Warning(message);
	    var ctx;
	    if (shouldUseOwnTrace) {
	        promise._attachExtraTrace(warning);
	    } else if (config.longStackTraces && (ctx = Promise._peekContext())) {
	        ctx.attachExtraTrace(warning);
	    } else {
	        var parsed = parseStackAndMessage(warning);
	        warning.stack = parsed.message + "\n" + parsed.stack.join("\n");
	    }
	
	    if (!activeFireEvent("warning", warning)) {
	        formatAndLogError(warning, "", true);
	    }
	}
	
	function reconstructStack(message, stacks) {
	    for (var i = 0; i < stacks.length - 1; ++i) {
	        stacks[i].push("From previous event:");
	        stacks[i] = stacks[i].join("\n");
	    }
	    if (i < stacks.length) {
	        stacks[i] = stacks[i].join("\n");
	    }
	    return message + "\n" + stacks.join("\n");
	}
	
	function removeDuplicateOrEmptyJumps(stacks) {
	    for (var i = 0; i < stacks.length; ++i) {
	        if (stacks[i].length === 0 ||
	            ((i + 1 < stacks.length) && stacks[i][0] === stacks[i+1][0])) {
	            stacks.splice(i, 1);
	            i--;
	        }
	    }
	}
	
	function removeCommonRoots(stacks) {
	    var current = stacks[0];
	    for (var i = 1; i < stacks.length; ++i) {
	        var prev = stacks[i];
	        var currentLastIndex = current.length - 1;
	        var currentLastLine = current[currentLastIndex];
	        var commonRootMeetPoint = -1;
	
	        for (var j = prev.length - 1; j >= 0; --j) {
	            if (prev[j] === currentLastLine) {
	                commonRootMeetPoint = j;
	                break;
	            }
	        }
	
	        for (var j = commonRootMeetPoint; j >= 0; --j) {
	            var line = prev[j];
	            if (current[currentLastIndex] === line) {
	                current.pop();
	                currentLastIndex--;
	            } else {
	                break;
	            }
	        }
	        current = prev;
	    }
	}
	
	function cleanStack(stack) {
	    var ret = [];
	    for (var i = 0; i < stack.length; ++i) {
	        var line = stack[i];
	        var isTraceLine = "    (No stack trace)" === line ||
	            stackFramePattern.test(line);
	        var isInternalFrame = isTraceLine && shouldIgnore(line);
	        if (isTraceLine && !isInternalFrame) {
	            if (indentStackFrames && line.charAt(0) !== " ") {
	                line = "    " + line;
	            }
	            ret.push(line);
	        }
	    }
	    return ret;
	}
	
	function stackFramesAsArray(error) {
	    var stack = error.stack.replace(/\s+$/g, "").split("\n");
	    for (var i = 0; i < stack.length; ++i) {
	        var line = stack[i];
	        if ("    (No stack trace)" === line || stackFramePattern.test(line)) {
	            break;
	        }
	    }
	    if (i > 0 && error.name != "SyntaxError") {
	        stack = stack.slice(i);
	    }
	    return stack;
	}
	
	function parseStackAndMessage(error) {
	    var stack = error.stack;
	    var message = error.toString();
	    stack = typeof stack === "string" && stack.length > 0
	                ? stackFramesAsArray(error) : ["    (No stack trace)"];
	    return {
	        message: message,
	        stack: error.name == "SyntaxError" ? stack : cleanStack(stack)
	    };
	}
	
	function formatAndLogError(error, title, isSoft) {
	    if (typeof console !== "undefined") {
	        var message;
	        if (util.isObject(error)) {
	            var stack = error.stack;
	            message = title + formatStack(stack, error);
	        } else {
	            message = title + String(error);
	        }
	        if (typeof printWarning === "function") {
	            printWarning(message, isSoft);
	        } else if (typeof console.log === "function" ||
	            typeof console.log === "object") {
	            console.log(message);
	        }
	    }
	}
	
	function fireRejectionEvent(name, localHandler, reason, promise) {
	    var localEventFired = false;
	    try {
	        if (typeof localHandler === "function") {
	            localEventFired = true;
	            if (name === "rejectionHandled") {
	                localHandler(promise);
	            } else {
	                localHandler(reason, promise);
	            }
	        }
	    } catch (e) {
	        async.throwLater(e);
	    }
	
	    if (name === "unhandledRejection") {
	        if (!activeFireEvent(name, reason, promise) && !localEventFired) {
	            formatAndLogError(reason, "Unhandled rejection ");
	        }
	    } else {
	        activeFireEvent(name, promise);
	    }
	}
	
	function formatNonError(obj) {
	    var str;
	    if (typeof obj === "function") {
	        str = "[function " +
	            (obj.name || "anonymous") +
	            "]";
	    } else {
	        str = obj && typeof obj.toString === "function"
	            ? obj.toString() : util.toString(obj);
	        var ruselessToString = /\[object [a-zA-Z0-9$_]+\]/;
	        if (ruselessToString.test(str)) {
	            try {
	                var newStr = JSON.stringify(obj);
	                str = newStr;
	            }
	            catch(e) {
	
	            }
	        }
	        if (str.length === 0) {
	            str = "(empty array)";
	        }
	    }
	    return ("(<" + snip(str) + ">, no stack trace)");
	}
	
	function snip(str) {
	    var maxChars = 41;
	    if (str.length < maxChars) {
	        return str;
	    }
	    return str.substr(0, maxChars - 3) + "...";
	}
	
	function longStackTracesIsSupported() {
	    return typeof captureStackTrace === "function";
	}
	
	var shouldIgnore = function() { return false; };
	var parseLineInfoRegex = /[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;
	function parseLineInfo(line) {
	    var matches = line.match(parseLineInfoRegex);
	    if (matches) {
	        return {
	            fileName: matches[1],
	            line: parseInt(matches[2], 10)
	        };
	    }
	}
	
	function setBounds(firstLineError, lastLineError) {
	    if (!longStackTracesIsSupported()) return;
	    var firstStackLines = firstLineError.stack.split("\n");
	    var lastStackLines = lastLineError.stack.split("\n");
	    var firstIndex = -1;
	    var lastIndex = -1;
	    var firstFileName;
	    var lastFileName;
	    for (var i = 0; i < firstStackLines.length; ++i) {
	        var result = parseLineInfo(firstStackLines[i]);
	        if (result) {
	            firstFileName = result.fileName;
	            firstIndex = result.line;
	            break;
	        }
	    }
	    for (var i = 0; i < lastStackLines.length; ++i) {
	        var result = parseLineInfo(lastStackLines[i]);
	        if (result) {
	            lastFileName = result.fileName;
	            lastIndex = result.line;
	            break;
	        }
	    }
	    if (firstIndex < 0 || lastIndex < 0 || !firstFileName || !lastFileName ||
	        firstFileName !== lastFileName || firstIndex >= lastIndex) {
	        return;
	    }
	
	    shouldIgnore = function(line) {
	        if (bluebirdFramePattern.test(line)) return true;
	        var info = parseLineInfo(line);
	        if (info) {
	            if (info.fileName === firstFileName &&
	                (firstIndex <= info.line && info.line <= lastIndex)) {
	                return true;
	            }
	        }
	        return false;
	    };
	}
	
	function CapturedTrace(parent) {
	    this._parent = parent;
	    this._promisesCreated = 0;
	    var length = this._length = 1 + (parent === undefined ? 0 : parent._length);
	    captureStackTrace(this, CapturedTrace);
	    if (length > 32) this.uncycle();
	}
	util.inherits(CapturedTrace, Error);
	Context.CapturedTrace = CapturedTrace;
	
	CapturedTrace.prototype.uncycle = function() {
	    var length = this._length;
	    if (length < 2) return;
	    var nodes = [];
	    var stackToIndex = {};
	
	    for (var i = 0, node = this; node !== undefined; ++i) {
	        nodes.push(node);
	        node = node._parent;
	    }
	    length = this._length = i;
	    for (var i = length - 1; i >= 0; --i) {
	        var stack = nodes[i].stack;
	        if (stackToIndex[stack] === undefined) {
	            stackToIndex[stack] = i;
	        }
	    }
	    for (var i = 0; i < length; ++i) {
	        var currentStack = nodes[i].stack;
	        var index = stackToIndex[currentStack];
	        if (index !== undefined && index !== i) {
	            if (index > 0) {
	                nodes[index - 1]._parent = undefined;
	                nodes[index - 1]._length = 1;
	            }
	            nodes[i]._parent = undefined;
	            nodes[i]._length = 1;
	            var cycleEdgeNode = i > 0 ? nodes[i - 1] : this;
	
	            if (index < length - 1) {
	                cycleEdgeNode._parent = nodes[index + 1];
	                cycleEdgeNode._parent.uncycle();
	                cycleEdgeNode._length =
	                    cycleEdgeNode._parent._length + 1;
	            } else {
	                cycleEdgeNode._parent = undefined;
	                cycleEdgeNode._length = 1;
	            }
	            var currentChildLength = cycleEdgeNode._length + 1;
	            for (var j = i - 2; j >= 0; --j) {
	                nodes[j]._length = currentChildLength;
	                currentChildLength++;
	            }
	            return;
	        }
	    }
	};
	
	CapturedTrace.prototype.attachExtraTrace = function(error) {
	    if (error.__stackCleaned__) return;
	    this.uncycle();
	    var parsed = parseStackAndMessage(error);
	    var message = parsed.message;
	    var stacks = [parsed.stack];
	
	    var trace = this;
	    while (trace !== undefined) {
	        stacks.push(cleanStack(trace.stack.split("\n")));
	        trace = trace._parent;
	    }
	    removeCommonRoots(stacks);
	    removeDuplicateOrEmptyJumps(stacks);
	    util.notEnumerableProp(error, "stack", reconstructStack(message, stacks));
	    util.notEnumerableProp(error, "__stackCleaned__", true);
	};
	
	var captureStackTrace = (function stackDetection() {
	    var v8stackFramePattern = /^\s*at\s*/;
	    var v8stackFormatter = function(stack, error) {
	        if (typeof stack === "string") return stack;
	
	        if (error.name !== undefined &&
	            error.message !== undefined) {
	            return error.toString();
	        }
	        return formatNonError(error);
	    };
	
	    if (typeof Error.stackTraceLimit === "number" &&
	        typeof Error.captureStackTrace === "function") {
	        Error.stackTraceLimit += 6;
	        stackFramePattern = v8stackFramePattern;
	        formatStack = v8stackFormatter;
	        var captureStackTrace = Error.captureStackTrace;
	
	        shouldIgnore = function(line) {
	            return bluebirdFramePattern.test(line);
	        };
	        return function(receiver, ignoreUntil) {
	            Error.stackTraceLimit += 6;
	            captureStackTrace(receiver, ignoreUntil);
	            Error.stackTraceLimit -= 6;
	        };
	    }
	    var err = new Error();
	
	    if (typeof err.stack === "string" &&
	        err.stack.split("\n")[0].indexOf("stackDetection@") >= 0) {
	        stackFramePattern = /@/;
	        formatStack = v8stackFormatter;
	        indentStackFrames = true;
	        return function captureStackTrace(o) {
	            o.stack = new Error().stack;
	        };
	    }
	
	    var hasStackAfterThrow;
	    try { throw new Error(); }
	    catch(e) {
	        hasStackAfterThrow = ("stack" in e);
	    }
	    if (!("stack" in err) && hasStackAfterThrow &&
	        typeof Error.stackTraceLimit === "number") {
	        stackFramePattern = v8stackFramePattern;
	        formatStack = v8stackFormatter;
	        return function captureStackTrace(o) {
	            Error.stackTraceLimit += 6;
	            try { throw new Error(); }
	            catch(e) { o.stack = e.stack; }
	            Error.stackTraceLimit -= 6;
	        };
	    }
	
	    formatStack = function(stack, error) {
	        if (typeof stack === "string") return stack;
	
	        if ((typeof error === "object" ||
	            typeof error === "function") &&
	            error.name !== undefined &&
	            error.message !== undefined) {
	            return error.toString();
	        }
	        return formatNonError(error);
	    };
	
	    return null;
	
	})([]);
	
	if (typeof console !== "undefined" && typeof console.warn !== "undefined") {
	    printWarning = function (message) {
	        console.warn(message);
	    };
	    if (util.isNode && process.stderr.isTTY) {
	        printWarning = function(message, isSoft) {
	            var color = isSoft ? "\u001b[33m" : "\u001b[31m";
	            console.warn(color + message + "\u001b[0m\n");
	        };
	    } else if (!util.isNode && typeof (new Error().stack) === "string") {
	        printWarning = function(message, isSoft) {
	            console.warn("%c" + message,
	                        isSoft ? "color: darkorange" : "color: red");
	        };
	    }
	}
	
	var config = {
	    warnings: warnings,
	    longStackTraces: false,
	    cancellation: false,
	    monitoring: false
	};
	
	if (longStackTraces) Promise.longStackTraces();
	
	return {
	    longStackTraces: function() {
	        return config.longStackTraces;
	    },
	    warnings: function() {
	        return config.warnings;
	    },
	    cancellation: function() {
	        return config.cancellation;
	    },
	    monitoring: function() {
	        return config.monitoring;
	    },
	    propagateFromFunction: function() {
	        return propagateFromFunction;
	    },
	    boundValueFunction: function() {
	        return boundValueFunction;
	    },
	    checkForgottenReturns: checkForgottenReturns,
	    setBounds: setBounds,
	    warn: warn,
	    deprecated: deprecated,
	    CapturedTrace: CapturedTrace,
	    fireDomEvent: fireDomEvent,
	    fireGlobalEvent: fireGlobalEvent
	};
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(51)))

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	module.exports = function(Promise, tryConvertToPromise, NEXT_FILTER) {
	var util = __webpack_require__(52);
	var CancellationError = Promise.CancellationError;
	var errorObj = util.errorObj;
	var catchFilter = __webpack_require__(64)(NEXT_FILTER);
	
	function PassThroughHandlerContext(promise, type, handler) {
	    this.promise = promise;
	    this.type = type;
	    this.handler = handler;
	    this.called = false;
	    this.cancelPromise = null;
	}
	
	PassThroughHandlerContext.prototype.isFinallyHandler = function() {
	    return this.type === 0;
	};
	
	function FinallyHandlerCancelReaction(finallyHandler) {
	    this.finallyHandler = finallyHandler;
	}
	
	FinallyHandlerCancelReaction.prototype._resultCancelled = function() {
	    checkCancel(this.finallyHandler);
	};
	
	function checkCancel(ctx, reason) {
	    if (ctx.cancelPromise != null) {
	        if (arguments.length > 1) {
	            ctx.cancelPromise._reject(reason);
	        } else {
	            ctx.cancelPromise._cancel();
	        }
	        ctx.cancelPromise = null;
	        return true;
	    }
	    return false;
	}
	
	function succeed() {
	    return finallyHandler.call(this, this.promise._target()._settledValue());
	}
	function fail(reason) {
	    if (checkCancel(this, reason)) return;
	    errorObj.e = reason;
	    return errorObj;
	}
	function finallyHandler(reasonOrValue) {
	    var promise = this.promise;
	    var handler = this.handler;
	
	    if (!this.called) {
	        this.called = true;
	        var ret = this.isFinallyHandler()
	            ? handler.call(promise._boundValue())
	            : handler.call(promise._boundValue(), reasonOrValue);
	        if (ret === NEXT_FILTER) {
	            return ret;
	        } else if (ret !== undefined) {
	            promise._setReturnedNonUndefined();
	            var maybePromise = tryConvertToPromise(ret, promise);
	            if (maybePromise instanceof Promise) {
	                if (this.cancelPromise != null) {
	                    if (maybePromise._isCancelled()) {
	                        var reason =
	                            new CancellationError("late cancellation observer");
	                        promise._attachExtraTrace(reason);
	                        errorObj.e = reason;
	                        return errorObj;
	                    } else if (maybePromise.isPending()) {
	                        maybePromise._attachCancellationCallback(
	                            new FinallyHandlerCancelReaction(this));
	                    }
	                }
	                return maybePromise._then(
	                    succeed, fail, undefined, this, undefined);
	            }
	        }
	    }
	
	    if (promise.isRejected()) {
	        checkCancel(this);
	        errorObj.e = reasonOrValue;
	        return errorObj;
	    } else {
	        checkCancel(this);
	        return reasonOrValue;
	    }
	}
	
	Promise.prototype._passThrough = function(handler, type, success, fail) {
	    if (typeof handler !== "function") return this.then();
	    return this._then(success,
	                      fail,
	                      undefined,
	                      new PassThroughHandlerContext(this, type, handler),
	                      undefined);
	};
	
	Promise.prototype.lastly =
	Promise.prototype["finally"] = function (handler) {
	    return this._passThrough(handler,
	                             0,
	                             finallyHandler,
	                             finallyHandler);
	};
	
	
	Promise.prototype.tap = function (handler) {
	    return this._passThrough(handler, 1, finallyHandler);
	};
	
	Promise.prototype.tapCatch = function (handlerOrPredicate) {
	    var len = arguments.length;
	    if(len === 1) {
	        return this._passThrough(handlerOrPredicate,
	                                 1,
	                                 undefined,
	                                 finallyHandler);
	    } else {
	         var catchInstances = new Array(len - 1),
	            j = 0, i;
	        for (i = 0; i < len - 1; ++i) {
	            var item = arguments[i];
	            if (util.isObject(item)) {
	                catchInstances[j++] = item;
	            } else {
	                return Promise.reject(new TypeError(
	                    "tapCatch statement predicate: "
	                    + "expecting an object but got " + util.classString(item)
	                ));
	            }
	        }
	        catchInstances.length = j;
	        var handler = arguments[i];
	        return this._passThrough(catchFilter(catchInstances, handler, this),
	                                 1,
	                                 undefined,
	                                 finallyHandler);
	    }
	
	};
	
	return PassThroughHandlerContext;
	};


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	module.exports = function(NEXT_FILTER) {
	var util = __webpack_require__(52);
	var getKeys = __webpack_require__(53).keys;
	var tryCatch = util.tryCatch;
	var errorObj = util.errorObj;
	
	function catchFilter(instances, cb, promise) {
	    return function(e) {
	        var boundTo = promise._boundValue();
	        predicateLoop: for (var i = 0; i < instances.length; ++i) {
	            var item = instances[i];
	
	            if (item === Error ||
	                (item != null && item.prototype instanceof Error)) {
	                if (e instanceof item) {
	                    return tryCatch(cb).call(boundTo, e);
	                }
	            } else if (typeof item === "function") {
	                var matchesPredicate = tryCatch(item).call(boundTo, e);
	                if (matchesPredicate === errorObj) {
	                    return matchesPredicate;
	                } else if (matchesPredicate) {
	                    return tryCatch(cb).call(boundTo, e);
	                }
	            } else if (util.isObject(e)) {
	                var keys = getKeys(item);
	                for (var j = 0; j < keys.length; ++j) {
	                    var key = keys[j];
	                    if (item[key] != e[key]) {
	                        continue predicateLoop;
	                    }
	                }
	                return tryCatch(cb).call(boundTo, e);
	            }
	        }
	        return NEXT_FILTER;
	    };
	}
	
	return catchFilter;
	};


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var util = __webpack_require__(52);
	var maybeWrapAsError = util.maybeWrapAsError;
	var errors = __webpack_require__(58);
	var OperationalError = errors.OperationalError;
	var es5 = __webpack_require__(53);
	
	function isUntypedError(obj) {
	    return obj instanceof Error &&
	        es5.getPrototypeOf(obj) === Error.prototype;
	}
	
	var rErrorKey = /^(?:name|message|stack|cause)$/;
	function wrapAsOperationalError(obj) {
	    var ret;
	    if (isUntypedError(obj)) {
	        ret = new OperationalError(obj);
	        ret.name = obj.name;
	        ret.message = obj.message;
	        ret.stack = obj.stack;
	        var keys = es5.keys(obj);
	        for (var i = 0; i < keys.length; ++i) {
	            var key = keys[i];
	            if (!rErrorKey.test(key)) {
	                ret[key] = obj[key];
	            }
	        }
	        return ret;
	    }
	    util.markAsOriginatingFromRejection(obj);
	    return obj;
	}
	
	function nodebackForPromise(promise, multiArgs) {
	    return function(err, value) {
	        if (promise === null) return;
	        if (err) {
	            var wrapped = wrapAsOperationalError(maybeWrapAsError(err));
	            promise._attachExtraTrace(wrapped);
	            promise._reject(wrapped);
	        } else if (!multiArgs) {
	            promise._fulfill(value);
	        } else {
	            var $_len = arguments.length;var args = new Array(Math.max($_len - 1, 0)); for(var $_i = 1; $_i < $_len; ++$_i) {args[$_i - 1] = arguments[$_i];};
	            promise._fulfill(args);
	        }
	        promise = null;
	    };
	}
	
	module.exports = nodebackForPromise;


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	module.exports =
	function(Promise, INTERNAL, tryConvertToPromise, apiRejection, debug) {
	var util = __webpack_require__(52);
	var tryCatch = util.tryCatch;
	
	Promise.method = function (fn) {
	    if (typeof fn !== "function") {
	        throw new Promise.TypeError("expecting a function but got " + util.classString(fn));
	    }
	    return function () {
	        var ret = new Promise(INTERNAL);
	        ret._captureStackTrace();
	        ret._pushContext();
	        var value = tryCatch(fn).apply(this, arguments);
	        var promiseCreated = ret._popContext();
	        debug.checkForgottenReturns(
	            value, promiseCreated, "Promise.method", ret);
	        ret._resolveFromSyncValue(value);
	        return ret;
	    };
	};
	
	Promise.attempt = Promise["try"] = function (fn) {
	    if (typeof fn !== "function") {
	        return apiRejection("expecting a function but got " + util.classString(fn));
	    }
	    var ret = new Promise(INTERNAL);
	    ret._captureStackTrace();
	    ret._pushContext();
	    var value;
	    if (arguments.length > 1) {
	        debug.deprecated("calling Promise.try with more than 1 argument");
	        var arg = arguments[1];
	        var ctx = arguments[2];
	        value = util.isArray(arg) ? tryCatch(fn).apply(ctx, arg)
	                                  : tryCatch(fn).call(ctx, arg);
	    } else {
	        value = tryCatch(fn)();
	    }
	    var promiseCreated = ret._popContext();
	    debug.checkForgottenReturns(
	        value, promiseCreated, "Promise.try", ret);
	    ret._resolveFromSyncValue(value);
	    return ret;
	};
	
	Promise.prototype._resolveFromSyncValue = function (value) {
	    if (value === util.errorObj) {
	        this._rejectCallback(value.e, false);
	    } else {
	        this._resolveCallback(value, true);
	    }
	};
	};


/***/ },
/* 67 */
/***/ function(module, exports) {

	"use strict";
	module.exports = function(Promise, INTERNAL, tryConvertToPromise, debug) {
	var calledBind = false;
	var rejectThis = function(_, e) {
	    this._reject(e);
	};
	
	var targetRejected = function(e, context) {
	    context.promiseRejectionQueued = true;
	    context.bindingPromise._then(rejectThis, rejectThis, null, this, e);
	};
	
	var bindingResolved = function(thisArg, context) {
	    if (((this._bitField & 50397184) === 0)) {
	        this._resolveCallback(context.target);
	    }
	};
	
	var bindingRejected = function(e, context) {
	    if (!context.promiseRejectionQueued) this._reject(e);
	};
	
	Promise.prototype.bind = function (thisArg) {
	    if (!calledBind) {
	        calledBind = true;
	        Promise.prototype._propagateFrom = debug.propagateFromFunction();
	        Promise.prototype._boundValue = debug.boundValueFunction();
	    }
	    var maybePromise = tryConvertToPromise(thisArg);
	    var ret = new Promise(INTERNAL);
	    ret._propagateFrom(this, 1);
	    var target = this._target();
	    ret._setBoundTo(maybePromise);
	    if (maybePromise instanceof Promise) {
	        var context = {
	            promiseRejectionQueued: false,
	            promise: ret,
	            target: target,
	            bindingPromise: maybePromise
	        };
	        target._then(INTERNAL, targetRejected, undefined, ret, context);
	        maybePromise._then(
	            bindingResolved, bindingRejected, undefined, ret, context);
	        ret._setOnCancel(maybePromise);
	    } else {
	        ret._resolveCallback(target);
	    }
	    return ret;
	};
	
	Promise.prototype._setBoundTo = function (obj) {
	    if (obj !== undefined) {
	        this._bitField = this._bitField | 2097152;
	        this._boundTo = obj;
	    } else {
	        this._bitField = this._bitField & (~2097152);
	    }
	};
	
	Promise.prototype._isBound = function () {
	    return (this._bitField & 2097152) === 2097152;
	};
	
	Promise.bind = function (thisArg, value) {
	    return Promise.resolve(value).bind(thisArg);
	};
	};


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	module.exports = function(Promise, PromiseArray, apiRejection, debug) {
	var util = __webpack_require__(52);
	var tryCatch = util.tryCatch;
	var errorObj = util.errorObj;
	var async = Promise._async;
	
	Promise.prototype["break"] = Promise.prototype.cancel = function() {
	    if (!debug.cancellation()) return this._warn("cancellation is disabled");
	
	    var promise = this;
	    var child = promise;
	    while (promise._isCancellable()) {
	        if (!promise._cancelBy(child)) {
	            if (child._isFollowing()) {
	                child._followee().cancel();
	            } else {
	                child._cancelBranched();
	            }
	            break;
	        }
	
	        var parent = promise._cancellationParent;
	        if (parent == null || !parent._isCancellable()) {
	            if (promise._isFollowing()) {
	                promise._followee().cancel();
	            } else {
	                promise._cancelBranched();
	            }
	            break;
	        } else {
	            if (promise._isFollowing()) promise._followee().cancel();
	            promise._setWillBeCancelled();
	            child = promise;
	            promise = parent;
	        }
	    }
	};
	
	Promise.prototype._branchHasCancelled = function() {
	    this._branchesRemainingToCancel--;
	};
	
	Promise.prototype._enoughBranchesHaveCancelled = function() {
	    return this._branchesRemainingToCancel === undefined ||
	           this._branchesRemainingToCancel <= 0;
	};
	
	Promise.prototype._cancelBy = function(canceller) {
	    if (canceller === this) {
	        this._branchesRemainingToCancel = 0;
	        this._invokeOnCancel();
	        return true;
	    } else {
	        this._branchHasCancelled();
	        if (this._enoughBranchesHaveCancelled()) {
	            this._invokeOnCancel();
	            return true;
	        }
	    }
	    return false;
	};
	
	Promise.prototype._cancelBranched = function() {
	    if (this._enoughBranchesHaveCancelled()) {
	        this._cancel();
	    }
	};
	
	Promise.prototype._cancel = function() {
	    if (!this._isCancellable()) return;
	    this._setCancelled();
	    async.invoke(this._cancelPromises, this, undefined);
	};
	
	Promise.prototype._cancelPromises = function() {
	    if (this._length() > 0) this._settlePromises();
	};
	
	Promise.prototype._unsetOnCancel = function() {
	    this._onCancelField = undefined;
	};
	
	Promise.prototype._isCancellable = function() {
	    return this.isPending() && !this._isCancelled();
	};
	
	Promise.prototype.isCancellable = function() {
	    return this.isPending() && !this.isCancelled();
	};
	
	Promise.prototype._doInvokeOnCancel = function(onCancelCallback, internalOnly) {
	    if (util.isArray(onCancelCallback)) {
	        for (var i = 0; i < onCancelCallback.length; ++i) {
	            this._doInvokeOnCancel(onCancelCallback[i], internalOnly);
	        }
	    } else if (onCancelCallback !== undefined) {
	        if (typeof onCancelCallback === "function") {
	            if (!internalOnly) {
	                var e = tryCatch(onCancelCallback).call(this._boundValue());
	                if (e === errorObj) {
	                    this._attachExtraTrace(e.e);
	                    async.throwLater(e.e);
	                }
	            }
	        } else {
	            onCancelCallback._resultCancelled(this);
	        }
	    }
	};
	
	Promise.prototype._invokeOnCancel = function() {
	    var onCancelCallback = this._onCancel();
	    this._unsetOnCancel();
	    async.invoke(this._doInvokeOnCancel, this, onCancelCallback);
	};
	
	Promise.prototype._invokeInternalOnCancel = function() {
	    if (this._isCancellable()) {
	        this._doInvokeOnCancel(this._onCancel(), true);
	        this._unsetOnCancel();
	    }
	};
	
	Promise.prototype._resultCancelled = function() {
	    this.cancel();
	};
	
	};


/***/ },
/* 69 */
/***/ function(module, exports) {

	"use strict";
	module.exports = function(Promise) {
	function returner() {
	    return this.value;
	}
	function thrower() {
	    throw this.reason;
	}
	
	Promise.prototype["return"] =
	Promise.prototype.thenReturn = function (value) {
	    if (value instanceof Promise) value.suppressUnhandledRejections();
	    return this._then(
	        returner, undefined, undefined, {value: value}, undefined);
	};
	
	Promise.prototype["throw"] =
	Promise.prototype.thenThrow = function (reason) {
	    return this._then(
	        thrower, undefined, undefined, {reason: reason}, undefined);
	};
	
	Promise.prototype.catchThrow = function (reason) {
	    if (arguments.length <= 1) {
	        return this._then(
	            undefined, thrower, undefined, {reason: reason}, undefined);
	    } else {
	        var _reason = arguments[1];
	        var handler = function() {throw _reason;};
	        return this.caught(reason, handler);
	    }
	};
	
	Promise.prototype.catchReturn = function (value) {
	    if (arguments.length <= 1) {
	        if (value instanceof Promise) value.suppressUnhandledRejections();
	        return this._then(
	            undefined, returner, undefined, {value: value}, undefined);
	    } else {
	        var _value = arguments[1];
	        if (_value instanceof Promise) _value.suppressUnhandledRejections();
	        var handler = function() {return _value;};
	        return this.caught(value, handler);
	    }
	};
	};


/***/ },
/* 70 */
/***/ function(module, exports) {

	"use strict";
	module.exports = function(Promise) {
	function PromiseInspection(promise) {
	    if (promise !== undefined) {
	        promise = promise._target();
	        this._bitField = promise._bitField;
	        this._settledValueField = promise._isFateSealed()
	            ? promise._settledValue() : undefined;
	    }
	    else {
	        this._bitField = 0;
	        this._settledValueField = undefined;
	    }
	}
	
	PromiseInspection.prototype._settledValue = function() {
	    return this._settledValueField;
	};
	
	var value = PromiseInspection.prototype.value = function () {
	    if (!this.isFulfilled()) {
	        throw new TypeError("cannot get fulfillment value of a non-fulfilled promise\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
	    }
	    return this._settledValue();
	};
	
	var reason = PromiseInspection.prototype.error =
	PromiseInspection.prototype.reason = function () {
	    if (!this.isRejected()) {
	        throw new TypeError("cannot get rejection reason of a non-rejected promise\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
	    }
	    return this._settledValue();
	};
	
	var isFulfilled = PromiseInspection.prototype.isFulfilled = function() {
	    return (this._bitField & 33554432) !== 0;
	};
	
	var isRejected = PromiseInspection.prototype.isRejected = function () {
	    return (this._bitField & 16777216) !== 0;
	};
	
	var isPending = PromiseInspection.prototype.isPending = function () {
	    return (this._bitField & 50397184) === 0;
	};
	
	var isResolved = PromiseInspection.prototype.isResolved = function () {
	    return (this._bitField & 50331648) !== 0;
	};
	
	PromiseInspection.prototype.isCancelled = function() {
	    return (this._bitField & 8454144) !== 0;
	};
	
	Promise.prototype.__isCancelled = function() {
	    return (this._bitField & 65536) === 65536;
	};
	
	Promise.prototype._isCancelled = function() {
	    return this._target().__isCancelled();
	};
	
	Promise.prototype.isCancelled = function() {
	    return (this._target()._bitField & 8454144) !== 0;
	};
	
	Promise.prototype.isPending = function() {
	    return isPending.call(this._target());
	};
	
	Promise.prototype.isRejected = function() {
	    return isRejected.call(this._target());
	};
	
	Promise.prototype.isFulfilled = function() {
	    return isFulfilled.call(this._target());
	};
	
	Promise.prototype.isResolved = function() {
	    return isResolved.call(this._target());
	};
	
	Promise.prototype.value = function() {
	    return value.call(this._target());
	};
	
	Promise.prototype.reason = function() {
	    var target = this._target();
	    target._unsetRejectionIsUnhandled();
	    return reason.call(target);
	};
	
	Promise.prototype._value = function() {
	    return this._settledValue();
	};
	
	Promise.prototype._reason = function() {
	    this._unsetRejectionIsUnhandled();
	    return this._settledValue();
	};
	
	Promise.PromiseInspection = PromiseInspection;
	};


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	module.exports =
	function(Promise, PromiseArray, tryConvertToPromise, INTERNAL, async,
	         getDomain) {
	var util = __webpack_require__(52);
	var canEvaluate = util.canEvaluate;
	var tryCatch = util.tryCatch;
	var errorObj = util.errorObj;
	var reject;
	
	if (true) {
	if (canEvaluate) {
	    var thenCallback = function(i) {
	        return new Function("value", "holder", "                             \n\
	            'use strict';                                                    \n\
	            holder.pIndex = value;                                           \n\
	            holder.checkFulfillment(this);                                   \n\
	            ".replace(/Index/g, i));
	    };
	
	    var promiseSetter = function(i) {
	        return new Function("promise", "holder", "                           \n\
	            'use strict';                                                    \n\
	            holder.pIndex = promise;                                         \n\
	            ".replace(/Index/g, i));
	    };
	
	    var generateHolderClass = function(total) {
	        var props = new Array(total);
	        for (var i = 0; i < props.length; ++i) {
	            props[i] = "this.p" + (i+1);
	        }
	        var assignment = props.join(" = ") + " = null;";
	        var cancellationCode= "var promise;\n" + props.map(function(prop) {
	            return "                                                         \n\
	                promise = " + prop + ";                                      \n\
	                if (promise instanceof Promise) {                            \n\
	                    promise.cancel();                                        \n\
	                }                                                            \n\
	            ";
	        }).join("\n");
	        var passedArguments = props.join(", ");
	        var name = "Holder$" + total;
	
	
	        var code = "return function(tryCatch, errorObj, Promise, async) {    \n\
	            'use strict';                                                    \n\
	            function [TheName](fn) {                                         \n\
	                [TheProperties]                                              \n\
	                this.fn = fn;                                                \n\
	                this.asyncNeeded = true;                                     \n\
	                this.now = 0;                                                \n\
	            }                                                                \n\
	                                                                             \n\
	            [TheName].prototype._callFunction = function(promise) {          \n\
	                promise._pushContext();                                      \n\
	                var ret = tryCatch(this.fn)([ThePassedArguments]);           \n\
	                promise._popContext();                                       \n\
	                if (ret === errorObj) {                                      \n\
	                    promise._rejectCallback(ret.e, false);                   \n\
	                } else {                                                     \n\
	                    promise._resolveCallback(ret);                           \n\
	                }                                                            \n\
	            };                                                               \n\
	                                                                             \n\
	            [TheName].prototype.checkFulfillment = function(promise) {       \n\
	                var now = ++this.now;                                        \n\
	                if (now === [TheTotal]) {                                    \n\
	                    if (this.asyncNeeded) {                                  \n\
	                        async.invoke(this._callFunction, this, promise);     \n\
	                    } else {                                                 \n\
	                        this._callFunction(promise);                         \n\
	                    }                                                        \n\
	                                                                             \n\
	                }                                                            \n\
	            };                                                               \n\
	                                                                             \n\
	            [TheName].prototype._resultCancelled = function() {              \n\
	                [CancellationCode]                                           \n\
	            };                                                               \n\
	                                                                             \n\
	            return [TheName];                                                \n\
	        }(tryCatch, errorObj, Promise, async);                               \n\
	        ";
	
	        code = code.replace(/\[TheName\]/g, name)
	            .replace(/\[TheTotal\]/g, total)
	            .replace(/\[ThePassedArguments\]/g, passedArguments)
	            .replace(/\[TheProperties\]/g, assignment)
	            .replace(/\[CancellationCode\]/g, cancellationCode);
	
	        return new Function("tryCatch", "errorObj", "Promise", "async", code)
	                           (tryCatch, errorObj, Promise, async);
	    };
	
	    var holderClasses = [];
	    var thenCallbacks = [];
	    var promiseSetters = [];
	
	    for (var i = 0; i < 8; ++i) {
	        holderClasses.push(generateHolderClass(i + 1));
	        thenCallbacks.push(thenCallback(i + 1));
	        promiseSetters.push(promiseSetter(i + 1));
	    }
	
	    reject = function (reason) {
	        this._reject(reason);
	    };
	}}
	
	Promise.join = function () {
	    var last = arguments.length - 1;
	    var fn;
	    if (last > 0 && typeof arguments[last] === "function") {
	        fn = arguments[last];
	        if (true) {
	            if (last <= 8 && canEvaluate) {
	                var ret = new Promise(INTERNAL);
	                ret._captureStackTrace();
	                var HolderClass = holderClasses[last - 1];
	                var holder = new HolderClass(fn);
	                var callbacks = thenCallbacks;
	
	                for (var i = 0; i < last; ++i) {
	                    var maybePromise = tryConvertToPromise(arguments[i], ret);
	                    if (maybePromise instanceof Promise) {
	                        maybePromise = maybePromise._target();
	                        var bitField = maybePromise._bitField;
	                        ;
	                        if (((bitField & 50397184) === 0)) {
	                            maybePromise._then(callbacks[i], reject,
	                                               undefined, ret, holder);
	                            promiseSetters[i](maybePromise, holder);
	                            holder.asyncNeeded = false;
	                        } else if (((bitField & 33554432) !== 0)) {
	                            callbacks[i].call(ret,
	                                              maybePromise._value(), holder);
	                        } else if (((bitField & 16777216) !== 0)) {
	                            ret._reject(maybePromise._reason());
	                        } else {
	                            ret._cancel();
	                        }
	                    } else {
	                        callbacks[i].call(ret, maybePromise, holder);
	                    }
	                }
	
	                if (!ret._isFateSealed()) {
	                    if (holder.asyncNeeded) {
	                        var domain = getDomain();
	                        if (domain !== null) {
	                            holder.fn = util.domainBind(domain, holder.fn);
	                        }
	                    }
	                    ret._setAsyncGuaranteed();
	                    ret._setOnCancel(holder);
	                }
	                return ret;
	            }
	        }
	    }
	    var $_len = arguments.length;var args = new Array($_len); for(var $_i = 0; $_i < $_len; ++$_i) {args[$_i] = arguments[$_i];};
	    if (fn) args.pop();
	    var ret = new PromiseArray(args).promise();
	    return fn !== undefined ? ret.spread(fn) : ret;
	};
	
	};


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	module.exports = function(Promise,
	                          PromiseArray,
	                          apiRejection,
	                          tryConvertToPromise,
	                          INTERNAL,
	                          debug) {
	var getDomain = Promise._getDomain;
	var util = __webpack_require__(52);
	var tryCatch = util.tryCatch;
	var errorObj = util.errorObj;
	var async = Promise._async;
	
	function MappingPromiseArray(promises, fn, limit, _filter) {
	    this.constructor$(promises);
	    this._promise._captureStackTrace();
	    var domain = getDomain();
	    this._callback = domain === null ? fn : util.domainBind(domain, fn);
	    this._preservedValues = _filter === INTERNAL
	        ? new Array(this.length())
	        : null;
	    this._limit = limit;
	    this._inFlight = 0;
	    this._queue = [];
	    async.invoke(this._asyncInit, this, undefined);
	}
	util.inherits(MappingPromiseArray, PromiseArray);
	
	MappingPromiseArray.prototype._asyncInit = function() {
	    this._init$(undefined, -2);
	};
	
	MappingPromiseArray.prototype._init = function () {};
	
	MappingPromiseArray.prototype._promiseFulfilled = function (value, index) {
	    var values = this._values;
	    var length = this.length();
	    var preservedValues = this._preservedValues;
	    var limit = this._limit;
	
	    if (index < 0) {
	        index = (index * -1) - 1;
	        values[index] = value;
	        if (limit >= 1) {
	            this._inFlight--;
	            this._drainQueue();
	            if (this._isResolved()) return true;
	        }
	    } else {
	        if (limit >= 1 && this._inFlight >= limit) {
	            values[index] = value;
	            this._queue.push(index);
	            return false;
	        }
	        if (preservedValues !== null) preservedValues[index] = value;
	
	        var promise = this._promise;
	        var callback = this._callback;
	        var receiver = promise._boundValue();
	        promise._pushContext();
	        var ret = tryCatch(callback).call(receiver, value, index, length);
	        var promiseCreated = promise._popContext();
	        debug.checkForgottenReturns(
	            ret,
	            promiseCreated,
	            preservedValues !== null ? "Promise.filter" : "Promise.map",
	            promise
	        );
	        if (ret === errorObj) {
	            this._reject(ret.e);
	            return true;
	        }
	
	        var maybePromise = tryConvertToPromise(ret, this._promise);
	        if (maybePromise instanceof Promise) {
	            maybePromise = maybePromise._target();
	            var bitField = maybePromise._bitField;
	            ;
	            if (((bitField & 50397184) === 0)) {
	                if (limit >= 1) this._inFlight++;
	                values[index] = maybePromise;
	                maybePromise._proxy(this, (index + 1) * -1);
	                return false;
	            } else if (((bitField & 33554432) !== 0)) {
	                ret = maybePromise._value();
	            } else if (((bitField & 16777216) !== 0)) {
	                this._reject(maybePromise._reason());
	                return true;
	            } else {
	                this._cancel();
	                return true;
	            }
	        }
	        values[index] = ret;
	    }
	    var totalResolved = ++this._totalResolved;
	    if (totalResolved >= length) {
	        if (preservedValues !== null) {
	            this._filter(values, preservedValues);
	        } else {
	            this._resolve(values);
	        }
	        return true;
	    }
	    return false;
	};
	
	MappingPromiseArray.prototype._drainQueue = function () {
	    var queue = this._queue;
	    var limit = this._limit;
	    var values = this._values;
	    while (queue.length > 0 && this._inFlight < limit) {
	        if (this._isResolved()) return;
	        var index = queue.pop();
	        this._promiseFulfilled(values[index], index);
	    }
	};
	
	MappingPromiseArray.prototype._filter = function (booleans, values) {
	    var len = values.length;
	    var ret = new Array(len);
	    var j = 0;
	    for (var i = 0; i < len; ++i) {
	        if (booleans[i]) ret[j++] = values[i];
	    }
	    ret.length = j;
	    this._resolve(ret);
	};
	
	MappingPromiseArray.prototype.preservedValues = function () {
	    return this._preservedValues;
	};
	
	function map(promises, fn, options, _filter) {
	    if (typeof fn !== "function") {
	        return apiRejection("expecting a function but got " + util.classString(fn));
	    }
	
	    var limit = 0;
	    if (options !== undefined) {
	        if (typeof options === "object" && options !== null) {
	            if (typeof options.concurrency !== "number") {
	                return Promise.reject(
	                    new TypeError("'concurrency' must be a number but it is " +
	                                    util.classString(options.concurrency)));
	            }
	            limit = options.concurrency;
	        } else {
	            return Promise.reject(new TypeError(
	                            "options argument must be an object but it is " +
	                             util.classString(options)));
	        }
	    }
	    limit = typeof limit === "number" &&
	        isFinite(limit) && limit >= 1 ? limit : 0;
	    return new MappingPromiseArray(promises, fn, limit, _filter).promise();
	}
	
	Promise.prototype.map = function (fn, options) {
	    return map(this, fn, options, null);
	};
	
	Promise.map = function (promises, fn, options, _filter) {
	    return map(promises, fn, options, _filter);
	};
	
	
	};


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var cr = Object.create;
	if (cr) {
	    var callerCache = cr(null);
	    var getterCache = cr(null);
	    callerCache[" size"] = getterCache[" size"] = 0;
	}
	
	module.exports = function(Promise) {
	var util = __webpack_require__(52);
	var canEvaluate = util.canEvaluate;
	var isIdentifier = util.isIdentifier;
	
	var getMethodCaller;
	var getGetter;
	if (true) {
	var makeMethodCaller = function (methodName) {
	    return new Function("ensureMethod", "                                    \n\
	        return function(obj) {                                               \n\
	            'use strict'                                                     \n\
	            var len = this.length;                                           \n\
	            ensureMethod(obj, 'methodName');                                 \n\
	            switch(len) {                                                    \n\
	                case 1: return obj.methodName(this[0]);                      \n\
	                case 2: return obj.methodName(this[0], this[1]);             \n\
	                case 3: return obj.methodName(this[0], this[1], this[2]);    \n\
	                case 0: return obj.methodName();                             \n\
	                default:                                                     \n\
	                    return obj.methodName.apply(obj, this);                  \n\
	            }                                                                \n\
	        };                                                                   \n\
	        ".replace(/methodName/g, methodName))(ensureMethod);
	};
	
	var makeGetter = function (propertyName) {
	    return new Function("obj", "                                             \n\
	        'use strict';                                                        \n\
	        return obj.propertyName;                                             \n\
	        ".replace("propertyName", propertyName));
	};
	
	var getCompiled = function(name, compiler, cache) {
	    var ret = cache[name];
	    if (typeof ret !== "function") {
	        if (!isIdentifier(name)) {
	            return null;
	        }
	        ret = compiler(name);
	        cache[name] = ret;
	        cache[" size"]++;
	        if (cache[" size"] > 512) {
	            var keys = Object.keys(cache);
	            for (var i = 0; i < 256; ++i) delete cache[keys[i]];
	            cache[" size"] = keys.length - 256;
	        }
	    }
	    return ret;
	};
	
	getMethodCaller = function(name) {
	    return getCompiled(name, makeMethodCaller, callerCache);
	};
	
	getGetter = function(name) {
	    return getCompiled(name, makeGetter, getterCache);
	};
	}
	
	function ensureMethod(obj, methodName) {
	    var fn;
	    if (obj != null) fn = obj[methodName];
	    if (typeof fn !== "function") {
	        var message = "Object " + util.classString(obj) + " has no method '" +
	            util.toString(methodName) + "'";
	        throw new Promise.TypeError(message);
	    }
	    return fn;
	}
	
	function caller(obj) {
	    var methodName = this.pop();
	    var fn = ensureMethod(obj, methodName);
	    return fn.apply(obj, this);
	}
	Promise.prototype.call = function (methodName) {
	    var $_len = arguments.length;var args = new Array(Math.max($_len - 1, 0)); for(var $_i = 1; $_i < $_len; ++$_i) {args[$_i - 1] = arguments[$_i];};
	    if (true) {
	        if (canEvaluate) {
	            var maybeCaller = getMethodCaller(methodName);
	            if (maybeCaller !== null) {
	                return this._then(
	                    maybeCaller, undefined, undefined, args, undefined);
	            }
	        }
	    }
	    args.push(methodName);
	    return this._then(caller, undefined, undefined, args, undefined);
	};
	
	function namedGetter(obj) {
	    return obj[this];
	}
	function indexedGetter(obj) {
	    var index = +this;
	    if (index < 0) index = Math.max(0, index + obj.length);
	    return obj[index];
	}
	Promise.prototype.get = function (propertyName) {
	    var isIndex = (typeof propertyName === "number");
	    var getter;
	    if (!isIndex) {
	        if (canEvaluate) {
	            var maybeGetter = getGetter(propertyName);
	            getter = maybeGetter !== null ? maybeGetter : namedGetter;
	        } else {
	            getter = namedGetter;
	        }
	    } else {
	        getter = indexedGetter;
	    }
	    return this._then(getter, undefined, undefined, propertyName, undefined);
	};
	};


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	module.exports = function (Promise, apiRejection, tryConvertToPromise,
	    createContext, INTERNAL, debug) {
	    var util = __webpack_require__(52);
	    var TypeError = __webpack_require__(58).TypeError;
	    var inherits = __webpack_require__(52).inherits;
	    var errorObj = util.errorObj;
	    var tryCatch = util.tryCatch;
	    var NULL = {};
	
	    function thrower(e) {
	        setTimeout(function(){throw e;}, 0);
	    }
	
	    function castPreservingDisposable(thenable) {
	        var maybePromise = tryConvertToPromise(thenable);
	        if (maybePromise !== thenable &&
	            typeof thenable._isDisposable === "function" &&
	            typeof thenable._getDisposer === "function" &&
	            thenable._isDisposable()) {
	            maybePromise._setDisposable(thenable._getDisposer());
	        }
	        return maybePromise;
	    }
	    function dispose(resources, inspection) {
	        var i = 0;
	        var len = resources.length;
	        var ret = new Promise(INTERNAL);
	        function iterator() {
	            if (i >= len) return ret._fulfill();
	            var maybePromise = castPreservingDisposable(resources[i++]);
	            if (maybePromise instanceof Promise &&
	                maybePromise._isDisposable()) {
	                try {
	                    maybePromise = tryConvertToPromise(
	                        maybePromise._getDisposer().tryDispose(inspection),
	                        resources.promise);
	                } catch (e) {
	                    return thrower(e);
	                }
	                if (maybePromise instanceof Promise) {
	                    return maybePromise._then(iterator, thrower,
	                                              null, null, null);
	                }
	            }
	            iterator();
	        }
	        iterator();
	        return ret;
	    }
	
	    function Disposer(data, promise, context) {
	        this._data = data;
	        this._promise = promise;
	        this._context = context;
	    }
	
	    Disposer.prototype.data = function () {
	        return this._data;
	    };
	
	    Disposer.prototype.promise = function () {
	        return this._promise;
	    };
	
	    Disposer.prototype.resource = function () {
	        if (this.promise().isFulfilled()) {
	            return this.promise().value();
	        }
	        return NULL;
	    };
	
	    Disposer.prototype.tryDispose = function(inspection) {
	        var resource = this.resource();
	        var context = this._context;
	        if (context !== undefined) context._pushContext();
	        var ret = resource !== NULL
	            ? this.doDispose(resource, inspection) : null;
	        if (context !== undefined) context._popContext();
	        this._promise._unsetDisposable();
	        this._data = null;
	        return ret;
	    };
	
	    Disposer.isDisposer = function (d) {
	        return (d != null &&
	                typeof d.resource === "function" &&
	                typeof d.tryDispose === "function");
	    };
	
	    function FunctionDisposer(fn, promise, context) {
	        this.constructor$(fn, promise, context);
	    }
	    inherits(FunctionDisposer, Disposer);
	
	    FunctionDisposer.prototype.doDispose = function (resource, inspection) {
	        var fn = this.data();
	        return fn.call(resource, resource, inspection);
	    };
	
	    function maybeUnwrapDisposer(value) {
	        if (Disposer.isDisposer(value)) {
	            this.resources[this.index]._setDisposable(value);
	            return value.promise();
	        }
	        return value;
	    }
	
	    function ResourceList(length) {
	        this.length = length;
	        this.promise = null;
	        this[length-1] = null;
	    }
	
	    ResourceList.prototype._resultCancelled = function() {
	        var len = this.length;
	        for (var i = 0; i < len; ++i) {
	            var item = this[i];
	            if (item instanceof Promise) {
	                item.cancel();
	            }
	        }
	    };
	
	    Promise.using = function () {
	        var len = arguments.length;
	        if (len < 2) return apiRejection(
	                        "you must pass at least 2 arguments to Promise.using");
	        var fn = arguments[len - 1];
	        if (typeof fn !== "function") {
	            return apiRejection("expecting a function but got " + util.classString(fn));
	        }
	        var input;
	        var spreadArgs = true;
	        if (len === 2 && Array.isArray(arguments[0])) {
	            input = arguments[0];
	            len = input.length;
	            spreadArgs = false;
	        } else {
	            input = arguments;
	            len--;
	        }
	        var resources = new ResourceList(len);
	        for (var i = 0; i < len; ++i) {
	            var resource = input[i];
	            if (Disposer.isDisposer(resource)) {
	                var disposer = resource;
	                resource = resource.promise();
	                resource._setDisposable(disposer);
	            } else {
	                var maybePromise = tryConvertToPromise(resource);
	                if (maybePromise instanceof Promise) {
	                    resource =
	                        maybePromise._then(maybeUnwrapDisposer, null, null, {
	                            resources: resources,
	                            index: i
	                    }, undefined);
	                }
	            }
	            resources[i] = resource;
	        }
	
	        var reflectedResources = new Array(resources.length);
	        for (var i = 0; i < reflectedResources.length; ++i) {
	            reflectedResources[i] = Promise.resolve(resources[i]).reflect();
	        }
	
	        var resultPromise = Promise.all(reflectedResources)
	            .then(function(inspections) {
	                for (var i = 0; i < inspections.length; ++i) {
	                    var inspection = inspections[i];
	                    if (inspection.isRejected()) {
	                        errorObj.e = inspection.error();
	                        return errorObj;
	                    } else if (!inspection.isFulfilled()) {
	                        resultPromise.cancel();
	                        return;
	                    }
	                    inspections[i] = inspection.value();
	                }
	                promise._pushContext();
	
	                fn = tryCatch(fn);
	                var ret = spreadArgs
	                    ? fn.apply(undefined, inspections) : fn(inspections);
	                var promiseCreated = promise._popContext();
	                debug.checkForgottenReturns(
	                    ret, promiseCreated, "Promise.using", promise);
	                return ret;
	            });
	
	        var promise = resultPromise.lastly(function() {
	            var inspection = new Promise.PromiseInspection(resultPromise);
	            return dispose(resources, inspection);
	        });
	        resources.promise = promise;
	        promise._setOnCancel(resources);
	        return promise;
	    };
	
	    Promise.prototype._setDisposable = function (disposer) {
	        this._bitField = this._bitField | 131072;
	        this._disposer = disposer;
	    };
	
	    Promise.prototype._isDisposable = function () {
	        return (this._bitField & 131072) > 0;
	    };
	
	    Promise.prototype._getDisposer = function () {
	        return this._disposer;
	    };
	
	    Promise.prototype._unsetDisposable = function () {
	        this._bitField = this._bitField & (~131072);
	        this._disposer = undefined;
	    };
	
	    Promise.prototype.disposer = function (fn) {
	        if (typeof fn === "function") {
	            return new FunctionDisposer(fn, this, createContext());
	        }
	        throw new TypeError();
	    };
	
	};


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	module.exports = function(Promise, INTERNAL, debug) {
	var util = __webpack_require__(52);
	var TimeoutError = Promise.TimeoutError;
	
	function HandleWrapper(handle)  {
	    this.handle = handle;
	}
	
	HandleWrapper.prototype._resultCancelled = function() {
	    clearTimeout(this.handle);
	};
	
	var afterValue = function(value) { return delay(+this).thenReturn(value); };
	var delay = Promise.delay = function (ms, value) {
	    var ret;
	    var handle;
	    if (value !== undefined) {
	        ret = Promise.resolve(value)
	                ._then(afterValue, null, null, ms, undefined);
	        if (debug.cancellation() && value instanceof Promise) {
	            ret._setOnCancel(value);
	        }
	    } else {
	        ret = new Promise(INTERNAL);
	        handle = setTimeout(function() { ret._fulfill(); }, +ms);
	        if (debug.cancellation()) {
	            ret._setOnCancel(new HandleWrapper(handle));
	        }
	        ret._captureStackTrace();
	    }
	    ret._setAsyncGuaranteed();
	    return ret;
	};
	
	Promise.prototype.delay = function (ms) {
	    return delay(ms, this);
	};
	
	var afterTimeout = function (promise, message, parent) {
	    var err;
	    if (typeof message !== "string") {
	        if (message instanceof Error) {
	            err = message;
	        } else {
	            err = new TimeoutError("operation timed out");
	        }
	    } else {
	        err = new TimeoutError(message);
	    }
	    util.markAsOriginatingFromRejection(err);
	    promise._attachExtraTrace(err);
	    promise._reject(err);
	
	    if (parent != null) {
	        parent.cancel();
	    }
	};
	
	function successClear(value) {
	    clearTimeout(this.handle);
	    return value;
	}
	
	function failureClear(reason) {
	    clearTimeout(this.handle);
	    throw reason;
	}
	
	Promise.prototype.timeout = function (ms, message) {
	    ms = +ms;
	    var ret, parent;
	
	    var handleWrapper = new HandleWrapper(setTimeout(function timeoutTimeout() {
	        if (ret.isPending()) {
	            afterTimeout(ret, message, parent);
	        }
	    }, ms));
	
	    if (debug.cancellation()) {
	        parent = this.then();
	        ret = parent._then(successClear, failureClear,
	                            undefined, handleWrapper, undefined);
	        ret._setOnCancel(handleWrapper);
	    } else {
	        ret = this._then(successClear, failureClear,
	                            undefined, handleWrapper, undefined);
	    }
	
	    return ret;
	};
	
	};


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	module.exports = function(Promise,
	                          apiRejection,
	                          INTERNAL,
	                          tryConvertToPromise,
	                          Proxyable,
	                          debug) {
	var errors = __webpack_require__(58);
	var TypeError = errors.TypeError;
	var util = __webpack_require__(52);
	var errorObj = util.errorObj;
	var tryCatch = util.tryCatch;
	var yieldHandlers = [];
	
	function promiseFromYieldHandler(value, yieldHandlers, traceParent) {
	    for (var i = 0; i < yieldHandlers.length; ++i) {
	        traceParent._pushContext();
	        var result = tryCatch(yieldHandlers[i])(value);
	        traceParent._popContext();
	        if (result === errorObj) {
	            traceParent._pushContext();
	            var ret = Promise.reject(errorObj.e);
	            traceParent._popContext();
	            return ret;
	        }
	        var maybePromise = tryConvertToPromise(result, traceParent);
	        if (maybePromise instanceof Promise) return maybePromise;
	    }
	    return null;
	}
	
	function PromiseSpawn(generatorFunction, receiver, yieldHandler, stack) {
	    if (debug.cancellation()) {
	        var internal = new Promise(INTERNAL);
	        var _finallyPromise = this._finallyPromise = new Promise(INTERNAL);
	        this._promise = internal.lastly(function() {
	            return _finallyPromise;
	        });
	        internal._captureStackTrace();
	        internal._setOnCancel(this);
	    } else {
	        var promise = this._promise = new Promise(INTERNAL);
	        promise._captureStackTrace();
	    }
	    this._stack = stack;
	    this._generatorFunction = generatorFunction;
	    this._receiver = receiver;
	    this._generator = undefined;
	    this._yieldHandlers = typeof yieldHandler === "function"
	        ? [yieldHandler].concat(yieldHandlers)
	        : yieldHandlers;
	    this._yieldedPromise = null;
	    this._cancellationPhase = false;
	}
	util.inherits(PromiseSpawn, Proxyable);
	
	PromiseSpawn.prototype._isResolved = function() {
	    return this._promise === null;
	};
	
	PromiseSpawn.prototype._cleanup = function() {
	    this._promise = this._generator = null;
	    if (debug.cancellation() && this._finallyPromise !== null) {
	        this._finallyPromise._fulfill();
	        this._finallyPromise = null;
	    }
	};
	
	PromiseSpawn.prototype._promiseCancelled = function() {
	    if (this._isResolved()) return;
	    var implementsReturn = typeof this._generator["return"] !== "undefined";
	
	    var result;
	    if (!implementsReturn) {
	        var reason = new Promise.CancellationError(
	            "generator .return() sentinel");
	        Promise.coroutine.returnSentinel = reason;
	        this._promise._attachExtraTrace(reason);
	        this._promise._pushContext();
	        result = tryCatch(this._generator["throw"]).call(this._generator,
	                                                         reason);
	        this._promise._popContext();
	    } else {
	        this._promise._pushContext();
	        result = tryCatch(this._generator["return"]).call(this._generator,
	                                                          undefined);
	        this._promise._popContext();
	    }
	    this._cancellationPhase = true;
	    this._yieldedPromise = null;
	    this._continue(result);
	};
	
	PromiseSpawn.prototype._promiseFulfilled = function(value) {
	    this._yieldedPromise = null;
	    this._promise._pushContext();
	    var result = tryCatch(this._generator.next).call(this._generator, value);
	    this._promise._popContext();
	    this._continue(result);
	};
	
	PromiseSpawn.prototype._promiseRejected = function(reason) {
	    this._yieldedPromise = null;
	    this._promise._attachExtraTrace(reason);
	    this._promise._pushContext();
	    var result = tryCatch(this._generator["throw"])
	        .call(this._generator, reason);
	    this._promise._popContext();
	    this._continue(result);
	};
	
	PromiseSpawn.prototype._resultCancelled = function() {
	    if (this._yieldedPromise instanceof Promise) {
	        var promise = this._yieldedPromise;
	        this._yieldedPromise = null;
	        promise.cancel();
	    }
	};
	
	PromiseSpawn.prototype.promise = function () {
	    return this._promise;
	};
	
	PromiseSpawn.prototype._run = function () {
	    this._generator = this._generatorFunction.call(this._receiver);
	    this._receiver =
	        this._generatorFunction = undefined;
	    this._promiseFulfilled(undefined);
	};
	
	PromiseSpawn.prototype._continue = function (result) {
	    var promise = this._promise;
	    if (result === errorObj) {
	        this._cleanup();
	        if (this._cancellationPhase) {
	            return promise.cancel();
	        } else {
	            return promise._rejectCallback(result.e, false);
	        }
	    }
	
	    var value = result.value;
	    if (result.done === true) {
	        this._cleanup();
	        if (this._cancellationPhase) {
	            return promise.cancel();
	        } else {
	            return promise._resolveCallback(value);
	        }
	    } else {
	        var maybePromise = tryConvertToPromise(value, this._promise);
	        if (!(maybePromise instanceof Promise)) {
	            maybePromise =
	                promiseFromYieldHandler(maybePromise,
	                                        this._yieldHandlers,
	                                        this._promise);
	            if (maybePromise === null) {
	                this._promiseRejected(
	                    new TypeError(
	                        "A value %s was yielded that could not be treated as a promise\u000a\u000a    See http://goo.gl/MqrFmX\u000a\u000a".replace("%s", String(value)) +
	                        "From coroutine:\u000a" +
	                        this._stack.split("\n").slice(1, -7).join("\n")
	                    )
	                );
	                return;
	            }
	        }
	        maybePromise = maybePromise._target();
	        var bitField = maybePromise._bitField;
	        ;
	        if (((bitField & 50397184) === 0)) {
	            this._yieldedPromise = maybePromise;
	            maybePromise._proxy(this, null);
	        } else if (((bitField & 33554432) !== 0)) {
	            Promise._async.invoke(
	                this._promiseFulfilled, this, maybePromise._value()
	            );
	        } else if (((bitField & 16777216) !== 0)) {
	            Promise._async.invoke(
	                this._promiseRejected, this, maybePromise._reason()
	            );
	        } else {
	            this._promiseCancelled();
	        }
	    }
	};
	
	Promise.coroutine = function (generatorFunction, options) {
	    if (typeof generatorFunction !== "function") {
	        throw new TypeError("generatorFunction must be a function\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
	    }
	    var yieldHandler = Object(options).yieldHandler;
	    var PromiseSpawn$ = PromiseSpawn;
	    var stack = new Error().stack;
	    return function () {
	        var generator = generatorFunction.apply(this, arguments);
	        var spawn = new PromiseSpawn$(undefined, undefined, yieldHandler,
	                                      stack);
	        var ret = spawn.promise();
	        spawn._generator = generator;
	        spawn._promiseFulfilled(undefined);
	        return ret;
	    };
	};
	
	Promise.coroutine.addYieldHandler = function(fn) {
	    if (typeof fn !== "function") {
	        throw new TypeError("expecting a function but got " + util.classString(fn));
	    }
	    yieldHandlers.push(fn);
	};
	
	Promise.spawn = function (generatorFunction) {
	    debug.deprecated("Promise.spawn()", "Promise.coroutine()");
	    if (typeof generatorFunction !== "function") {
	        return apiRejection("generatorFunction must be a function\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
	    }
	    var spawn = new PromiseSpawn(generatorFunction, this);
	    var ret = spawn.promise();
	    spawn._run(Promise.spawn);
	    return ret;
	};
	};


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	module.exports = function(Promise) {
	var util = __webpack_require__(52);
	var async = Promise._async;
	var tryCatch = util.tryCatch;
	var errorObj = util.errorObj;
	
	function spreadAdapter(val, nodeback) {
	    var promise = this;
	    if (!util.isArray(val)) return successAdapter.call(promise, val, nodeback);
	    var ret =
	        tryCatch(nodeback).apply(promise._boundValue(), [null].concat(val));
	    if (ret === errorObj) {
	        async.throwLater(ret.e);
	    }
	}
	
	function successAdapter(val, nodeback) {
	    var promise = this;
	    var receiver = promise._boundValue();
	    var ret = val === undefined
	        ? tryCatch(nodeback).call(receiver, null)
	        : tryCatch(nodeback).call(receiver, null, val);
	    if (ret === errorObj) {
	        async.throwLater(ret.e);
	    }
	}
	function errorAdapter(reason, nodeback) {
	    var promise = this;
	    if (!reason) {
	        var newReason = new Error(reason + "");
	        newReason.cause = reason;
	        reason = newReason;
	    }
	    var ret = tryCatch(nodeback).call(promise._boundValue(), reason);
	    if (ret === errorObj) {
	        async.throwLater(ret.e);
	    }
	}
	
	Promise.prototype.asCallback = Promise.prototype.nodeify = function (nodeback,
	                                                                     options) {
	    if (typeof nodeback == "function") {
	        var adapter = successAdapter;
	        if (options !== undefined && Object(options).spread) {
	            adapter = spreadAdapter;
	        }
	        this._then(
	            adapter,
	            errorAdapter,
	            undefined,
	            this,
	            nodeback
	        );
	    }
	    return this;
	};
	};


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	module.exports = function(Promise, INTERNAL) {
	var THIS = {};
	var util = __webpack_require__(52);
	var nodebackForPromise = __webpack_require__(65);
	var withAppended = util.withAppended;
	var maybeWrapAsError = util.maybeWrapAsError;
	var canEvaluate = util.canEvaluate;
	var TypeError = __webpack_require__(58).TypeError;
	var defaultSuffix = "Async";
	var defaultPromisified = {__isPromisified__: true};
	var noCopyProps = [
	    "arity",    "length",
	    "name",
	    "arguments",
	    "caller",
	    "callee",
	    "prototype",
	    "__isPromisified__"
	];
	var noCopyPropsPattern = new RegExp("^(?:" + noCopyProps.join("|") + ")$");
	
	var defaultFilter = function(name) {
	    return util.isIdentifier(name) &&
	        name.charAt(0) !== "_" &&
	        name !== "constructor";
	};
	
	function propsFilter(key) {
	    return !noCopyPropsPattern.test(key);
	}
	
	function isPromisified(fn) {
	    try {
	        return fn.__isPromisified__ === true;
	    }
	    catch (e) {
	        return false;
	    }
	}
	
	function hasPromisified(obj, key, suffix) {
	    var val = util.getDataPropertyOrDefault(obj, key + suffix,
	                                            defaultPromisified);
	    return val ? isPromisified(val) : false;
	}
	function checkValid(ret, suffix, suffixRegexp) {
	    for (var i = 0; i < ret.length; i += 2) {
	        var key = ret[i];
	        if (suffixRegexp.test(key)) {
	            var keyWithoutAsyncSuffix = key.replace(suffixRegexp, "");
	            for (var j = 0; j < ret.length; j += 2) {
	                if (ret[j] === keyWithoutAsyncSuffix) {
	                    throw new TypeError("Cannot promisify an API that has normal methods with '%s'-suffix\u000a\u000a    See http://goo.gl/MqrFmX\u000a"
	                        .replace("%s", suffix));
	                }
	            }
	        }
	    }
	}
	
	function promisifiableMethods(obj, suffix, suffixRegexp, filter) {
	    var keys = util.inheritedDataKeys(obj);
	    var ret = [];
	    for (var i = 0; i < keys.length; ++i) {
	        var key = keys[i];
	        var value = obj[key];
	        var passesDefaultFilter = filter === defaultFilter
	            ? true : defaultFilter(key, value, obj);
	        if (typeof value === "function" &&
	            !isPromisified(value) &&
	            !hasPromisified(obj, key, suffix) &&
	            filter(key, value, obj, passesDefaultFilter)) {
	            ret.push(key, value);
	        }
	    }
	    checkValid(ret, suffix, suffixRegexp);
	    return ret;
	}
	
	var escapeIdentRegex = function(str) {
	    return str.replace(/([$])/, "\\$");
	};
	
	var makeNodePromisifiedEval;
	if (true) {
	var switchCaseArgumentOrder = function(likelyArgumentCount) {
	    var ret = [likelyArgumentCount];
	    var min = Math.max(0, likelyArgumentCount - 1 - 3);
	    for(var i = likelyArgumentCount - 1; i >= min; --i) {
	        ret.push(i);
	    }
	    for(var i = likelyArgumentCount + 1; i <= 3; ++i) {
	        ret.push(i);
	    }
	    return ret;
	};
	
	var argumentSequence = function(argumentCount) {
	    return util.filledRange(argumentCount, "_arg", "");
	};
	
	var parameterDeclaration = function(parameterCount) {
	    return util.filledRange(
	        Math.max(parameterCount, 3), "_arg", "");
	};
	
	var parameterCount = function(fn) {
	    if (typeof fn.length === "number") {
	        return Math.max(Math.min(fn.length, 1023 + 1), 0);
	    }
	    return 0;
	};
	
	makeNodePromisifiedEval =
	function(callback, receiver, originalName, fn, _, multiArgs) {
	    var newParameterCount = Math.max(0, parameterCount(fn) - 1);
	    var argumentOrder = switchCaseArgumentOrder(newParameterCount);
	    var shouldProxyThis = typeof callback === "string" || receiver === THIS;
	
	    function generateCallForArgumentCount(count) {
	        var args = argumentSequence(count).join(", ");
	        var comma = count > 0 ? ", " : "";
	        var ret;
	        if (shouldProxyThis) {
	            ret = "ret = callback.call(this, {{args}}, nodeback); break;\n";
	        } else {
	            ret = receiver === undefined
	                ? "ret = callback({{args}}, nodeback); break;\n"
	                : "ret = callback.call(receiver, {{args}}, nodeback); break;\n";
	        }
	        return ret.replace("{{args}}", args).replace(", ", comma);
	    }
	
	    function generateArgumentSwitchCase() {
	        var ret = "";
	        for (var i = 0; i < argumentOrder.length; ++i) {
	            ret += "case " + argumentOrder[i] +":" +
	                generateCallForArgumentCount(argumentOrder[i]);
	        }
	
	        ret += "                                                             \n\
	        default:                                                             \n\
	            var args = new Array(len + 1);                                   \n\
	            var i = 0;                                                       \n\
	            for (var i = 0; i < len; ++i) {                                  \n\
	               args[i] = arguments[i];                                       \n\
	            }                                                                \n\
	            args[i] = nodeback;                                              \n\
	            [CodeForCall]                                                    \n\
	            break;                                                           \n\
	        ".replace("[CodeForCall]", (shouldProxyThis
	                                ? "ret = callback.apply(this, args);\n"
	                                : "ret = callback.apply(receiver, args);\n"));
	        return ret;
	    }
	
	    var getFunctionCode = typeof callback === "string"
	                                ? ("this != null ? this['"+callback+"'] : fn")
	                                : "fn";
	    var body = "'use strict';                                                \n\
	        var ret = function (Parameters) {                                    \n\
	            'use strict';                                                    \n\
	            var len = arguments.length;                                      \n\
	            var promise = new Promise(INTERNAL);                             \n\
	            promise._captureStackTrace();                                    \n\
	            var nodeback = nodebackForPromise(promise, " + multiArgs + ");   \n\
	            var ret;                                                         \n\
	            var callback = tryCatch([GetFunctionCode]);                      \n\
	            switch(len) {                                                    \n\
	                [CodeForSwitchCase]                                          \n\
	            }                                                                \n\
	            if (ret === errorObj) {                                          \n\
	                promise._rejectCallback(maybeWrapAsError(ret.e), true, true);\n\
	            }                                                                \n\
	            if (!promise._isFateSealed()) promise._setAsyncGuaranteed();     \n\
	            return promise;                                                  \n\
	        };                                                                   \n\
	        notEnumerableProp(ret, '__isPromisified__', true);                   \n\
	        return ret;                                                          \n\
	    ".replace("[CodeForSwitchCase]", generateArgumentSwitchCase())
	        .replace("[GetFunctionCode]", getFunctionCode);
	    body = body.replace("Parameters", parameterDeclaration(newParameterCount));
	    return new Function("Promise",
	                        "fn",
	                        "receiver",
	                        "withAppended",
	                        "maybeWrapAsError",
	                        "nodebackForPromise",
	                        "tryCatch",
	                        "errorObj",
	                        "notEnumerableProp",
	                        "INTERNAL",
	                        body)(
	                    Promise,
	                    fn,
	                    receiver,
	                    withAppended,
	                    maybeWrapAsError,
	                    nodebackForPromise,
	                    util.tryCatch,
	                    util.errorObj,
	                    util.notEnumerableProp,
	                    INTERNAL);
	};
	}
	
	function makeNodePromisifiedClosure(callback, receiver, _, fn, __, multiArgs) {
	    var defaultThis = (function() {return this;})();
	    var method = callback;
	    if (typeof method === "string") {
	        callback = fn;
	    }
	    function promisified() {
	        var _receiver = receiver;
	        if (receiver === THIS) _receiver = this;
	        var promise = new Promise(INTERNAL);
	        promise._captureStackTrace();
	        var cb = typeof method === "string" && this !== defaultThis
	            ? this[method] : callback;
	        var fn = nodebackForPromise(promise, multiArgs);
	        try {
	            cb.apply(_receiver, withAppended(arguments, fn));
	        } catch(e) {
	            promise._rejectCallback(maybeWrapAsError(e), true, true);
	        }
	        if (!promise._isFateSealed()) promise._setAsyncGuaranteed();
	        return promise;
	    }
	    util.notEnumerableProp(promisified, "__isPromisified__", true);
	    return promisified;
	}
	
	var makeNodePromisified = canEvaluate
	    ? makeNodePromisifiedEval
	    : makeNodePromisifiedClosure;
	
	function promisifyAll(obj, suffix, filter, promisifier, multiArgs) {
	    var suffixRegexp = new RegExp(escapeIdentRegex(suffix) + "$");
	    var methods =
	        promisifiableMethods(obj, suffix, suffixRegexp, filter);
	
	    for (var i = 0, len = methods.length; i < len; i+= 2) {
	        var key = methods[i];
	        var fn = methods[i+1];
	        var promisifiedKey = key + suffix;
	        if (promisifier === makeNodePromisified) {
	            obj[promisifiedKey] =
	                makeNodePromisified(key, THIS, key, fn, suffix, multiArgs);
	        } else {
	            var promisified = promisifier(fn, function() {
	                return makeNodePromisified(key, THIS, key,
	                                           fn, suffix, multiArgs);
	            });
	            util.notEnumerableProp(promisified, "__isPromisified__", true);
	            obj[promisifiedKey] = promisified;
	        }
	    }
	    util.toFastProperties(obj);
	    return obj;
	}
	
	function promisify(callback, receiver, multiArgs) {
	    return makeNodePromisified(callback, receiver, undefined,
	                                callback, null, multiArgs);
	}
	
	Promise.promisify = function (fn, options) {
	    if (typeof fn !== "function") {
	        throw new TypeError("expecting a function but got " + util.classString(fn));
	    }
	    if (isPromisified(fn)) {
	        return fn;
	    }
	    options = Object(options);
	    var receiver = options.context === undefined ? THIS : options.context;
	    var multiArgs = !!options.multiArgs;
	    var ret = promisify(fn, receiver, multiArgs);
	    util.copyDescriptors(fn, ret, propsFilter);
	    return ret;
	};
	
	Promise.promisifyAll = function (target, options) {
	    if (typeof target !== "function" && typeof target !== "object") {
	        throw new TypeError("the target of promisifyAll must be an object or a function\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
	    }
	    options = Object(options);
	    var multiArgs = !!options.multiArgs;
	    var suffix = options.suffix;
	    if (typeof suffix !== "string") suffix = defaultSuffix;
	    var filter = options.filter;
	    if (typeof filter !== "function") filter = defaultFilter;
	    var promisifier = options.promisifier;
	    if (typeof promisifier !== "function") promisifier = makeNodePromisified;
	
	    if (!util.isIdentifier(suffix)) {
	        throw new RangeError("suffix must be a valid identifier\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
	    }
	
	    var keys = util.inheritedDataKeys(target);
	    for (var i = 0; i < keys.length; ++i) {
	        var value = target[keys[i]];
	        if (keys[i] !== "constructor" &&
	            util.isClass(value)) {
	            promisifyAll(value.prototype, suffix, filter, promisifier,
	                multiArgs);
	            promisifyAll(value, suffix, filter, promisifier, multiArgs);
	        }
	    }
	
	    return promisifyAll(target, suffix, filter, promisifier, multiArgs);
	};
	};
	


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	module.exports = function(
	    Promise, PromiseArray, tryConvertToPromise, apiRejection) {
	var util = __webpack_require__(52);
	var isObject = util.isObject;
	var es5 = __webpack_require__(53);
	var Es6Map;
	if (typeof Map === "function") Es6Map = Map;
	
	var mapToEntries = (function() {
	    var index = 0;
	    var size = 0;
	
	    function extractEntry(value, key) {
	        this[index] = value;
	        this[index + size] = key;
	        index++;
	    }
	
	    return function mapToEntries(map) {
	        size = map.size;
	        index = 0;
	        var ret = new Array(map.size * 2);
	        map.forEach(extractEntry, ret);
	        return ret;
	    };
	})();
	
	var entriesToMap = function(entries) {
	    var ret = new Es6Map();
	    var length = entries.length / 2 | 0;
	    for (var i = 0; i < length; ++i) {
	        var key = entries[length + i];
	        var value = entries[i];
	        ret.set(key, value);
	    }
	    return ret;
	};
	
	function PropertiesPromiseArray(obj) {
	    var isMap = false;
	    var entries;
	    if (Es6Map !== undefined && obj instanceof Es6Map) {
	        entries = mapToEntries(obj);
	        isMap = true;
	    } else {
	        var keys = es5.keys(obj);
	        var len = keys.length;
	        entries = new Array(len * 2);
	        for (var i = 0; i < len; ++i) {
	            var key = keys[i];
	            entries[i] = obj[key];
	            entries[i + len] = key;
	        }
	    }
	    this.constructor$(entries);
	    this._isMap = isMap;
	    this._init$(undefined, isMap ? -6 : -3);
	}
	util.inherits(PropertiesPromiseArray, PromiseArray);
	
	PropertiesPromiseArray.prototype._init = function () {};
	
	PropertiesPromiseArray.prototype._promiseFulfilled = function (value, index) {
	    this._values[index] = value;
	    var totalResolved = ++this._totalResolved;
	    if (totalResolved >= this._length) {
	        var val;
	        if (this._isMap) {
	            val = entriesToMap(this._values);
	        } else {
	            val = {};
	            var keyOffset = this.length();
	            for (var i = 0, len = this.length(); i < len; ++i) {
	                val[this._values[i + keyOffset]] = this._values[i];
	            }
	        }
	        this._resolve(val);
	        return true;
	    }
	    return false;
	};
	
	PropertiesPromiseArray.prototype.shouldCopyValues = function () {
	    return false;
	};
	
	PropertiesPromiseArray.prototype.getActualLength = function (len) {
	    return len >> 1;
	};
	
	function props(promises) {
	    var ret;
	    var castValue = tryConvertToPromise(promises);
	
	    if (!isObject(castValue)) {
	        return apiRejection("cannot await properties of a non-object\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
	    } else if (castValue instanceof Promise) {
	        ret = castValue._then(
	            Promise.props, undefined, undefined, undefined, undefined);
	    } else {
	        ret = new PropertiesPromiseArray(castValue).promise();
	    }
	
	    if (castValue instanceof Promise) {
	        ret._propagateFrom(castValue, 2);
	    }
	    return ret;
	}
	
	Promise.prototype.props = function () {
	    return props(this);
	};
	
	Promise.props = function (promises) {
	    return props(promises);
	};
	};


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	module.exports = function(
	    Promise, INTERNAL, tryConvertToPromise, apiRejection) {
	var util = __webpack_require__(52);
	
	var raceLater = function (promise) {
	    return promise.then(function(array) {
	        return race(array, promise);
	    });
	};
	
	function race(promises, parent) {
	    var maybePromise = tryConvertToPromise(promises);
	
	    if (maybePromise instanceof Promise) {
	        return raceLater(maybePromise);
	    } else {
	        promises = util.asArray(promises);
	        if (promises === null)
	            return apiRejection("expecting an array or an iterable object but got " + util.classString(promises));
	    }
	
	    var ret = new Promise(INTERNAL);
	    if (parent !== undefined) {
	        ret._propagateFrom(parent, 3);
	    }
	    var fulfill = ret._fulfill;
	    var reject = ret._reject;
	    for (var i = 0, len = promises.length; i < len; ++i) {
	        var val = promises[i];
	
	        if (val === undefined && !(i in promises)) {
	            continue;
	        }
	
	        Promise.cast(val)._then(fulfill, reject, undefined, ret, null);
	    }
	    return ret;
	}
	
	Promise.race = function (promises) {
	    return race(promises, undefined);
	};
	
	Promise.prototype.race = function () {
	    return race(this, undefined);
	};
	
	};


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	module.exports = function(Promise,
	                          PromiseArray,
	                          apiRejection,
	                          tryConvertToPromise,
	                          INTERNAL,
	                          debug) {
	var getDomain = Promise._getDomain;
	var util = __webpack_require__(52);
	var tryCatch = util.tryCatch;
	
	function ReductionPromiseArray(promises, fn, initialValue, _each) {
	    this.constructor$(promises);
	    var domain = getDomain();
	    this._fn = domain === null ? fn : util.domainBind(domain, fn);
	    if (initialValue !== undefined) {
	        initialValue = Promise.resolve(initialValue);
	        initialValue._attachCancellationCallback(this);
	    }
	    this._initialValue = initialValue;
	    this._currentCancellable = null;
	    if(_each === INTERNAL) {
	        this._eachValues = Array(this._length);
	    } else if (_each === 0) {
	        this._eachValues = null;
	    } else {
	        this._eachValues = undefined;
	    }
	    this._promise._captureStackTrace();
	    this._init$(undefined, -5);
	}
	util.inherits(ReductionPromiseArray, PromiseArray);
	
	ReductionPromiseArray.prototype._gotAccum = function(accum) {
	    if (this._eachValues !== undefined && 
	        this._eachValues !== null && 
	        accum !== INTERNAL) {
	        this._eachValues.push(accum);
	    }
	};
	
	ReductionPromiseArray.prototype._eachComplete = function(value) {
	    if (this._eachValues !== null) {
	        this._eachValues.push(value);
	    }
	    return this._eachValues;
	};
	
	ReductionPromiseArray.prototype._init = function() {};
	
	ReductionPromiseArray.prototype._resolveEmptyArray = function() {
	    this._resolve(this._eachValues !== undefined ? this._eachValues
	                                                 : this._initialValue);
	};
	
	ReductionPromiseArray.prototype.shouldCopyValues = function () {
	    return false;
	};
	
	ReductionPromiseArray.prototype._resolve = function(value) {
	    this._promise._resolveCallback(value);
	    this._values = null;
	};
	
	ReductionPromiseArray.prototype._resultCancelled = function(sender) {
	    if (sender === this._initialValue) return this._cancel();
	    if (this._isResolved()) return;
	    this._resultCancelled$();
	    if (this._currentCancellable instanceof Promise) {
	        this._currentCancellable.cancel();
	    }
	    if (this._initialValue instanceof Promise) {
	        this._initialValue.cancel();
	    }
	};
	
	ReductionPromiseArray.prototype._iterate = function (values) {
	    this._values = values;
	    var value;
	    var i;
	    var length = values.length;
	    if (this._initialValue !== undefined) {
	        value = this._initialValue;
	        i = 0;
	    } else {
	        value = Promise.resolve(values[0]);
	        i = 1;
	    }
	
	    this._currentCancellable = value;
	
	    if (!value.isRejected()) {
	        for (; i < length; ++i) {
	            var ctx = {
	                accum: null,
	                value: values[i],
	                index: i,
	                length: length,
	                array: this
	            };
	            value = value._then(gotAccum, undefined, undefined, ctx, undefined);
	        }
	    }
	
	    if (this._eachValues !== undefined) {
	        value = value
	            ._then(this._eachComplete, undefined, undefined, this, undefined);
	    }
	    value._then(completed, completed, undefined, value, this);
	};
	
	Promise.prototype.reduce = function (fn, initialValue) {
	    return reduce(this, fn, initialValue, null);
	};
	
	Promise.reduce = function (promises, fn, initialValue, _each) {
	    return reduce(promises, fn, initialValue, _each);
	};
	
	function completed(valueOrReason, array) {
	    if (this.isFulfilled()) {
	        array._resolve(valueOrReason);
	    } else {
	        array._reject(valueOrReason);
	    }
	}
	
	function reduce(promises, fn, initialValue, _each) {
	    if (typeof fn !== "function") {
	        return apiRejection("expecting a function but got " + util.classString(fn));
	    }
	    var array = new ReductionPromiseArray(promises, fn, initialValue, _each);
	    return array.promise();
	}
	
	function gotAccum(accum) {
	    this.accum = accum;
	    this.array._gotAccum(accum);
	    var value = tryConvertToPromise(this.value, this.array._promise);
	    if (value instanceof Promise) {
	        this.array._currentCancellable = value;
	        return value._then(gotValue, undefined, undefined, this, undefined);
	    } else {
	        return gotValue.call(this, value);
	    }
	}
	
	function gotValue(value) {
	    var array = this.array;
	    var promise = array._promise;
	    var fn = tryCatch(array._fn);
	    promise._pushContext();
	    var ret;
	    if (array._eachValues !== undefined) {
	        ret = fn.call(promise._boundValue(), value, this.index, this.length);
	    } else {
	        ret = fn.call(promise._boundValue(),
	                              this.accum, value, this.index, this.length);
	    }
	    if (ret instanceof Promise) {
	        array._currentCancellable = ret;
	    }
	    var promiseCreated = promise._popContext();
	    debug.checkForgottenReturns(
	        ret,
	        promiseCreated,
	        array._eachValues !== undefined ? "Promise.each" : "Promise.reduce",
	        promise
	    );
	    return ret;
	}
	};


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	module.exports =
	    function(Promise, PromiseArray, debug) {
	var PromiseInspection = Promise.PromiseInspection;
	var util = __webpack_require__(52);
	
	function SettledPromiseArray(values) {
	    this.constructor$(values);
	}
	util.inherits(SettledPromiseArray, PromiseArray);
	
	SettledPromiseArray.prototype._promiseResolved = function (index, inspection) {
	    this._values[index] = inspection;
	    var totalResolved = ++this._totalResolved;
	    if (totalResolved >= this._length) {
	        this._resolve(this._values);
	        return true;
	    }
	    return false;
	};
	
	SettledPromiseArray.prototype._promiseFulfilled = function (value, index) {
	    var ret = new PromiseInspection();
	    ret._bitField = 33554432;
	    ret._settledValueField = value;
	    return this._promiseResolved(index, ret);
	};
	SettledPromiseArray.prototype._promiseRejected = function (reason, index) {
	    var ret = new PromiseInspection();
	    ret._bitField = 16777216;
	    ret._settledValueField = reason;
	    return this._promiseResolved(index, ret);
	};
	
	Promise.settle = function (promises) {
	    debug.deprecated(".settle()", ".reflect()");
	    return new SettledPromiseArray(promises).promise();
	};
	
	Promise.prototype.settle = function () {
	    return Promise.settle(this);
	};
	};


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	module.exports =
	function(Promise, PromiseArray, apiRejection) {
	var util = __webpack_require__(52);
	var RangeError = __webpack_require__(58).RangeError;
	var AggregateError = __webpack_require__(58).AggregateError;
	var isArray = util.isArray;
	var CANCELLATION = {};
	
	
	function SomePromiseArray(values) {
	    this.constructor$(values);
	    this._howMany = 0;
	    this._unwrap = false;
	    this._initialized = false;
	}
	util.inherits(SomePromiseArray, PromiseArray);
	
	SomePromiseArray.prototype._init = function () {
	    if (!this._initialized) {
	        return;
	    }
	    if (this._howMany === 0) {
	        this._resolve([]);
	        return;
	    }
	    this._init$(undefined, -5);
	    var isArrayResolved = isArray(this._values);
	    if (!this._isResolved() &&
	        isArrayResolved &&
	        this._howMany > this._canPossiblyFulfill()) {
	        this._reject(this._getRangeError(this.length()));
	    }
	};
	
	SomePromiseArray.prototype.init = function () {
	    this._initialized = true;
	    this._init();
	};
	
	SomePromiseArray.prototype.setUnwrap = function () {
	    this._unwrap = true;
	};
	
	SomePromiseArray.prototype.howMany = function () {
	    return this._howMany;
	};
	
	SomePromiseArray.prototype.setHowMany = function (count) {
	    this._howMany = count;
	};
	
	SomePromiseArray.prototype._promiseFulfilled = function (value) {
	    this._addFulfilled(value);
	    if (this._fulfilled() === this.howMany()) {
	        this._values.length = this.howMany();
	        if (this.howMany() === 1 && this._unwrap) {
	            this._resolve(this._values[0]);
	        } else {
	            this._resolve(this._values);
	        }
	        return true;
	    }
	    return false;
	
	};
	SomePromiseArray.prototype._promiseRejected = function (reason) {
	    this._addRejected(reason);
	    return this._checkOutcome();
	};
	
	SomePromiseArray.prototype._promiseCancelled = function () {
	    if (this._values instanceof Promise || this._values == null) {
	        return this._cancel();
	    }
	    this._addRejected(CANCELLATION);
	    return this._checkOutcome();
	};
	
	SomePromiseArray.prototype._checkOutcome = function() {
	    if (this.howMany() > this._canPossiblyFulfill()) {
	        var e = new AggregateError();
	        for (var i = this.length(); i < this._values.length; ++i) {
	            if (this._values[i] !== CANCELLATION) {
	                e.push(this._values[i]);
	            }
	        }
	        if (e.length > 0) {
	            this._reject(e);
	        } else {
	            this._cancel();
	        }
	        return true;
	    }
	    return false;
	};
	
	SomePromiseArray.prototype._fulfilled = function () {
	    return this._totalResolved;
	};
	
	SomePromiseArray.prototype._rejected = function () {
	    return this._values.length - this.length();
	};
	
	SomePromiseArray.prototype._addRejected = function (reason) {
	    this._values.push(reason);
	};
	
	SomePromiseArray.prototype._addFulfilled = function (value) {
	    this._values[this._totalResolved++] = value;
	};
	
	SomePromiseArray.prototype._canPossiblyFulfill = function () {
	    return this.length() - this._rejected();
	};
	
	SomePromiseArray.prototype._getRangeError = function (count) {
	    var message = "Input array must contain at least " +
	            this._howMany + " items but contains only " + count + " items";
	    return new RangeError(message);
	};
	
	SomePromiseArray.prototype._resolveEmptyArray = function () {
	    this._reject(this._getRangeError(0));
	};
	
	function some(promises, howMany) {
	    if ((howMany | 0) !== howMany || howMany < 0) {
	        return apiRejection("expecting a positive integer\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
	    }
	    var ret = new SomePromiseArray(promises);
	    var promise = ret.promise();
	    ret.setHowMany(howMany);
	    ret.init();
	    return promise;
	}
	
	Promise.some = function (promises, howMany) {
	    return some(promises, howMany);
	};
	
	Promise.prototype.some = function (howMany) {
	    return some(this, howMany);
	};
	
	Promise._SomePromiseArray = SomePromiseArray;
	};


/***/ },
/* 84 */
/***/ function(module, exports) {

	"use strict";
	module.exports = function(Promise, INTERNAL) {
	var PromiseMap = Promise.map;
	
	Promise.prototype.filter = function (fn, options) {
	    return PromiseMap(this, fn, options, INTERNAL);
	};
	
	Promise.filter = function (promises, fn, options) {
	    return PromiseMap(promises, fn, options, INTERNAL);
	};
	};


/***/ },
/* 85 */
/***/ function(module, exports) {

	"use strict";
	module.exports = function(Promise, INTERNAL) {
	var PromiseReduce = Promise.reduce;
	var PromiseAll = Promise.all;
	
	function promiseAllThis() {
	    return PromiseAll(this);
	}
	
	function PromiseMapSeries(promises, fn) {
	    return PromiseReduce(promises, fn, INTERNAL, INTERNAL);
	}
	
	Promise.prototype.each = function (fn) {
	    return PromiseReduce(this, fn, INTERNAL, 0)
	              ._then(promiseAllThis, undefined, undefined, this, undefined);
	};
	
	Promise.prototype.mapSeries = function (fn) {
	    return PromiseReduce(this, fn, INTERNAL, INTERNAL);
	};
	
	Promise.each = function (promises, fn) {
	    return PromiseReduce(promises, fn, INTERNAL, 0)
	              ._then(promiseAllThis, undefined, undefined, promises, undefined);
	};
	
	Promise.mapSeries = PromiseMapSeries;
	};
	


/***/ },
/* 86 */
/***/ function(module, exports) {

	"use strict";
	module.exports = function(Promise) {
	var SomePromiseArray = Promise._SomePromiseArray;
	function any(promises) {
	    var ret = new SomePromiseArray(promises);
	    var promise = ret.promise();
	    ret.setHowMany(1);
	    ret.setUnwrap();
	    ret.init();
	    return promise;
	}
	
	Promise.any = function (promises) {
	    return any(promises);
	};
	
	Promise.prototype.any = function () {
	    return any(this);
	};
	
	};


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _pick = __webpack_require__(88);
	
	var _pick2 = _interopRequireDefault(_pick);
	
	var _T = __webpack_require__(36);
	
	var _T2 = _interopRequireDefault(_T);
	
	var _has = __webpack_require__(38);
	
	var _has2 = _interopRequireDefault(_has);
	
	var _cond = __webpack_require__(45);
	
	var _cond2 = _interopRequireDefault(_cond);
	
	var _curry = __webpack_require__(13);
	
	var _curry2 = _interopRequireDefault(_curry);
	
	var _routes = __webpack_require__(89);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _request = __webpack_require__(90);
	
	var _request2 = _interopRequireDefault(_request);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var findOne = (0, _curry2.default)(function (opts, body) {
	  return _request2.default.get(opts, _routes2.default.transactions.details(body.id), {});
	}); /**
	     * @name Transactions
	     * @description This module exposes functions
	     *              related to the `/transactions` path.
	     *
	     * @module transactions
	     **/
	
	var findAll = (0, _curry2.default)(function (opts, pagination) {
	  return _request2.default.get(opts, _routes2.default.transactions.base, pagination || {});
	});
	
	/**
	 * `GET /transactions`
	 * Makes a request to /transactions or to /transactions/:id
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {Object} body The payload for the request.
	 * {@link https://pagarme.readme.io/reference#retornando-transações|API Reference for this payload}
	 * @param {Number} [body.id] The transaction ID. If not sent a
	 *                           transaction list will be returned instead.
	 * @param {Number} [body.count] Pagination option for transaction list.
	 *                              Number of transaction in a page
	 * @param {Number} [body.page] Pagination option for transaction list.
	 *                             The page index.
	*/
	var find = function find(opts, body) {
	  return (0, _cond2.default)([[(0, _has2.default)('id'), findOne(opts)], [_T2.default, findAll(opts)]])(body);
	};
	
	/**
	 * `GET /transactions`
	 * Makes a request to /transactions to get all transactions.
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {Number} [body.count] Pagination option for recipient list.
	 *                              Number of recipient in a page
	 * @param {Number} [body.page] Pagination option for recipient list.
	 *                             The page index.
	*/
	var all = function all(opts, body) {
	  return findAll(opts, body);
	};
	
	/**
	 * `POST /transactions`
	 * Creates a transaction from the given payload.
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {Object} body The payload for the request.
	 * {@link https://pagarme.readme.io/reference#criar-transação|API Reference for this payload}
	 *
	 * @returns {Promise} Resolves to the result of
	 *                    the request or to an error.
	 */
	var create = function create(opts, body) {
	  return _request2.default.post(opts, _routes2.default.transactions.base, body);
	};
	
	/**
	 * `POST /transactions/:id/capture`
	 * Captures a transaction from the given id.
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {Number} body.id The transaction ID.
	 *
	 * @returns {Promise} Resolves to the result of
	 *                    the request or to an error.
	 */
	var capture = function capture(opts, body) {
	  return _request2.default.post(opts, _routes2.default.transactions.capture(body.id), body);
	};
	
	/**
	 * `POST /transactions/:id/refund`
	 * Refunds a transaction from the given id.
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {Object} body The payload for the request.
	 * {@link https://pagarme.readme.io/reference#estorno-de-transação|API Reference for this payload}
	 *
	 * @param {Number} body.id The transaction ID.
	 *
	 * @returns {Promise} Resolves to the result of
	 *                    the request or to an error.
	 */
	var refund = function refund(opts, body) {
	  return _request2.default.post(opts, _routes2.default.transactions.refund(body.id), body);
	};
	
	/**
	 * `POST /transactions/:id/collect_payment`
	 * Sends a payment link to a customer
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {Object} body The payload for the request.
	 * {@link https://pagarme.readme.io/reference#notificando-cliente-sobre-boleto-a-ser-pago|API Reference for this payload}
	 * @param {Number} body.id - The transaction id
	 * @param {String} body.email - User email to send the
	 *                              payment request
	 *
	 * @returns {Promise} Resolves to the result of
	 *                    the request or to an error.
	 */
	var collectPayment = function collectPayment(opts, body) {
	  return _request2.default.post(opts, _routes2.default.transactions.collectPayment(body.id), body);
	};
	
	/**
	 * `GET /transactions/card_hash_key`
	 * Create a card hash key
	 *
	 * @param {Object} opts - An options params which
	 *                        is usually already bound
	 *                        by `connect` functions.
	 *
	 * @param {Object} body The payload for the request.
	 * {@link https://dash.readme.io/project/pagarme/v1/refs/gerando-card_hash-manualmente-1|API Reference for this payload}
	 *
	 * @returns {Promise} - Resolves to the result of
	 *                      the request or to an error.
	 */
	var cardHashKey = function cardHashKey(opts) {
	  return _request2.default.get(opts, _routes2.default.transactions.cardHashKey, {});
	};
	
	/**
	 * `PUT /transactions/:id`
	 * Updates a transaction from the given payload.
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {Object} body The payload for the request.
	 *
	 * @param {Number} body.id The transaction ID
	 * @param {Number} body.status The transaction status
	 * @returns {Promise} A promise that resolves to
	 *                    the newly created transactions's
	 *                    data or to an error.
	 **/
	var update = function update(opts, body) {
	  return _request2.default.put(opts, _routes2.default.transactions.details(body.id), body);
	};
	
	/**
	 * `GET /transactions/calculate_installments_amount`
	 * Calculates the value of each purchase's installments
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {Number} body.interest_rate - The interest rate's value.
	 * @param {Number} body.amount - The value of the purchase.
	 * @param {Number} [body.max_installments] - The max number of installments.
	 * @param {Number} [body.free_installments] - The number of installments without interest.
	 *
	 * @returns {Promise} Resolves to the result of
	 *                    the request or to an error.
	 */
	var calculateInstallmentsAmount = function calculateInstallmentsAmount(opts, body) {
	  return _request2.default.get(opts, _routes2.default.transactions.calculateInstallmentsAmount, body);
	};
	
	/**
	 * `POST /transactions/:id/reprocess`
	 * Reprocess a transaction from the given id.
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {Number} body.id The transaction ID.
	 * @param {Boolean} body.capture Should capture
	 *                               the transaction.
	 * @param {Boolean} body.analyze Should analyze
	 *                               the transaction.
	 *
	 * @returns {Promise} Resolves to the result of
	 *                    the request or to an error.
	 */
	var reprocess = function reprocess(opts, body) {
	  var payload = (0, _pick2.default)(['capture', 'analyze'], body);
	
	  return _request2.default.post(opts, _routes2.default.transactions.reprocess(body.id), payload);
	};
	
	exports.default = {
	  find: find,
	  all: all,
	  capture: capture,
	  create: create,
	  refund: refund,
	  collectPayment: collectPayment,
	  cardHashKey: cardHashKey,
	  update: update,
	  calculateInstallmentsAmount: calculateInstallmentsAmount,
	  reprocess: reprocess
	};
	module.exports = exports['default'];

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var _curry2 = __webpack_require__(5);
	
	
	/**
	 * Returns a partial copy of an object containing only the keys specified. If
	 * the key does not exist, the property is ignored.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Object
	 * @sig [k] -> {k: v} -> {k: v}
	 * @param {Array} names an array of String property names to copy onto a new object
	 * @param {Object} obj The object to copy from
	 * @return {Object} A new object with only properties from `names` on it.
	 * @see R.omit, R.props
	 * @example
	 *
	 *      R.pick(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
	 *      R.pick(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1}
	 */
	module.exports = _curry2(function pick(names, obj) {
	  var result = {};
	  var idx = 0;
	  while (idx < names.length) {
	    if (names[idx] in obj) {
	      result[names[idx]] = obj[names[idx]];
	    }
	    idx += 1;
	  }
	  return result;
	});


/***/ },
/* 89 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var base = 'https://api.pagar.me:443/1';
	
	var session = {
	  base: '/sessions',
	  destroy: function destroy(id) {
	    return '/sessions/' + id;
	  },
	  verify: function verify(id) {
	    return '/sessions/' + id + '/verify';
	  }
	};
	
	var transactions = {
	  base: '/transactions',
	  cardHashKey: '/transactions/card_hash_key',
	  calculateInstallmentsAmount: '/transactions/calculate_installments_amount',
	  details: function details(id) {
	    return '/transactions/' + id;
	  },
	  refund: function refund(id) {
	    return '/transactions/' + id + '/refund';
	  },
	  capture: function capture(id) {
	    return '/transactions/' + id + '/capture';
	  },
	  collectPayment: function collectPayment(id) {
	    return '/transactions/' + id + '/collect_payment';
	  },
	  antifraudAnalyses: {
	    findAll: function findAll(id) {
	      return '/transactions/' + id + '/antifraud_analyses';
	    },
	    find: function find(id, antifraudId) {
	      return '/transactions/' + id + '/antifraud_analyses/' + antifraudId;
	    },
	    create: function create(id) {
	      return '/transactions/' + id + '/antifraud_analyses';
	    }
	  },
	  reprocess: function reprocess(id) {
	    return '/transactions/' + id + '/reprocess';
	  }
	};
	
	var payables = {
	  base: '/payables',
	  transaction: function transaction(transactionId) {
	    return '/transactions/' + transactionId + '/payables';
	  },
	  find: function find(id) {
	    return '/payables/' + id;
	  },
	  days: '/payables/days'
	};
	
	var invites = {
	  base: '/invites',
	  details: function details(id) {
	    return '/invites/' + id;
	  }
	};
	
	var recipients = {
	  base: '/recipients',
	  details: function details(id) {
	    return '/recipients/' + id;
	  }
	};
	
	var bulkAnticipations = {
	  base: function base(recipientId) {
	    return '/recipients/' + recipientId + '/bulk_anticipations';
	  },
	  details: function details(recipientId, id) {
	    return '/recipients/' + recipientId + '/bulk_anticipations/' + id;
	  },
	  limits: function limits(recipientId) {
	    return '/recipients/' + recipientId + '/bulk_anticipations/limits';
	  },
	  days: function days(recipientId, id) {
	    return '/recipients/' + recipientId + '/bulk_anticipations/' + id + '/days';
	  },
	  confirm: function confirm(recipientId, id) {
	    return '/recipients/' + recipientId + '/bulk_anticipations/' + id + '/confirm';
	  },
	  cancel: function cancel(recipientId, id) {
	    return '/recipients/' + recipientId + '/bulk_anticipations/' + id + '/cancel';
	  }
	};
	
	var search = '/search';
	
	var user = {
	  base: '/users',
	  resetPassword: '/users/reset_password',
	  redefinePassword: '/users/redefine_password',
	  details: function details(id) {
	    return '/users/' + id;
	  },
	  updatePassword: function updatePassword(id) {
	    return '/users/' + id + '/update_password';
	  },
	  singular: '/user'
	};
	
	var company = {
	  basePlural: '/companies',
	  base: '/company',
	  temporary: '/companies/temporary',
	  emailConfirmation: '/company/email_confirmation',
	  activate: '/companies/activate',
	  resetKeys: '/company/reset_keys',
	  affiliationProgress: '/company/affiliation_progress',
	  branding: function branding(id) {
	    return '/company/branding/' + id;
	  },
	  emailTemplates: function emailTemplates(id) {
	    return '/company/email_templates/' + id;
	  },
	  fees: '/company/fees',
	  anticipation: {
	    base: '/company/anticipation',
	    options: '/company/anticipation/options'
	  },
	  apiKey: '/company/api_key'
	};
	
	var splitRules = {
	  findAll: function findAll(transactionId) {
	    return '/transactions/' + transactionId + '/split_rules';
	  },
	  find: function find(transactionId, splitId) {
	    return '/transactions/' + transactionId + '/split_rules/' + splitId;
	  }
	};
	
	var antifraudAnalyses = {
	  findAll: function findAll(transactionId) {
	    return '/transactions/' + transactionId + '/antifraud_analyses';
	  },
	  find: function find(transactionId, antifraudId) {
	    return '/transactions/' + transactionId + '/antifraud_analyses/' + antifraudId;
	  },
	  create: function create(transactionId) {
	    return '/transactions/' + transactionId + '/antifraud_analyses';
	  }
	};
	
	var bankAccounts = {
	  base: '/bank_accounts',
	  details: function details(id) {
	    return '/bank_accounts/' + id;
	  }
	};
	
	var plans = {
	  base: '/plans',
	  details: function details(id) {
	    return '/plans/' + id;
	  }
	};
	
	var acquirersConfigurations = {
	  base: '/acquirers_configurations',
	  details: function details(id) {
	    return '/acquirers_configuration/' + id;
	  }
	};
	
	var acquirers = {
	  base: '/acquirers',
	  details: function details(id) {
	    return '/acquirer/' + id;
	  },
	  anticipation: function anticipation(id, delay) {
	    return '/acquirer/' + id + '/anticipation_delay/' + delay;
	  }
	};
	
	var subscriptions = {
	  base: '/subscriptions',
	  details: function details(id) {
	    return '/subscriptions/' + id;
	  },
	  cancel: function cancel(id) {
	    return '/subscriptions/' + id + '/cancel';
	  },
	  transactions: function transactions(id) {
	    return '/subscriptions/' + id + '/transactions';
	  },
	  settleCharge: function settleCharge(id) {
	    return '/subscriptions/' + id + '/settle_charge';
	  }
	};
	
	var chargebacks = '/chargebacks';
	
	var cards = {
	  base: '/cards',
	  details: function details(id) {
	    return '/cards/' + id;
	  }
	};
	
	var transfers = {
	  base: '/transfers',
	  details: function details(id) {
	    return '/transfers/' + id;
	  },
	  days: '/transfers/days',
	  limits: '/transfers/limits',
	  cancel: function cancel(id) {
	    return '/transfers/' + id + '/cancel';
	  }
	};
	
	var balance = {
	  base: '/balance',
	  recipient: function recipient(id) {
	    return '/recipients/' + id + '/balance';
	  }
	};
	
	var balanceOperations = {
	  base: '/balance/operations',
	  days: '/balance/operations/days',
	  details: function details(id) {
	    return '/balance/operations/' + id;
	  },
	  recipients: {
	    findAll: function findAll(recipientId) {
	      return '/recipients/' + recipientId + '/balance/operations';
	    },
	    find: function find(id, recipientId) {
	      return '/recipients/' + recipientId + '/balance/operations/' + id;
	    },
	    findWithFormat: function findWithFormat(recipientId, format) {
	      return '/recipients/' + recipientId + '/balance/operations.' + format;
	    }
	  }
	};
	
	var events = {
	  base: '/events',
	  transaction: function transaction(transactionId) {
	    return '/transactions/' + transactionId + '/events';
	  },
	  transactionDetails: function transactionDetails(id, transactionId) {
	    return '/transactions/' + transactionId + '/events/' + id;
	  },
	  subscription: function subscription(subscriptionId) {
	    return '/subscriptions/' + subscriptionId + '/events';
	  },
	  subscriptionDetails: function subscriptionDetails(id, subscriptionId) {
	    return '/subscriptions/' + subscriptionId + '/events/' + id;
	  }
	};
	
	var gatewayOperations = {
	  transaction: function transaction(transactionId) {
	    return '/transactions/' + transactionId + '/operations';
	  },
	  transactionDetails: function transactionDetails(id, transactionId) {
	    return '/transactions/' + transactionId + '/operations/' + id;
	  },
	  subscription: function subscription(subscriptionId) {
	    return '/subscriptions/' + subscriptionId + '/operations';
	  },
	  refuseMessage: function refuseMessage(subscriptionId, id) {
	    return '/subscriptions/' + subscriptionId + '/operations/' + id + '/refuse_message';
	  }
	};
	
	var chargebackOperations = {
	  transaction: function transaction(transactionId) {
	    return '/transactions/' + transactionId + '/chargeback_operations';
	  }
	};
	
	var postbacks = {
	  transaction: function transaction(transactionId) {
	    return '/transactions/' + transactionId + '/postbacks';
	  },
	  transactionDetails: function transactionDetails(id, transactionId) {
	    return '/transactions/' + transactionId + '/postbacks/' + id;
	  },
	  subscription: function subscription(subscriptionId) {
	    return '/subscriptions/' + subscriptionId + '/postbacks';
	  },
	  redeliver: function redeliver(subscriptionId, id) {
	    return '/subscriptions/' + subscriptionId + '/postbacks/' + id + '/redeliver';
	  }
	};
	
	var customers = {
	  base: '/customers',
	  details: function details(id) {
	    return '/customers/' + id;
	  }
	};
	
	var zipcodes = {
	  details: function details(zipcode) {
	    return '/zipcodes/' + zipcode;
	  }
	};
	
	var paymentLinks = {
	  base: '/payment_links',
	  cancel: function cancel(id) {
	    return '/payment_links/' + id + '/cancel';
	  },
	  details: function details(id) {
	    return '/payment_links/' + id;
	  }
	};
	
	var onboardingAnswers = {
	  base: '/onboarding_answers'
	};
	
	var onboardingQuestions = {
	  details: function details(id) {
	    return '/onboarding_questions/' + id;
	  }
	};
	
	var orders = {
	  base: '/orders'
	};
	
	var refunds = {
	  base: '/refunds',
	  cancel: function cancel(id) {
	    return '/refunds/' + id + '/cancel';
	  }
	};
	
	var companySegments = '/company_segments';
	
	var status = '/status';
	
	var versions = '/versions';
	
	var reprocessedTransactions = '/reprocessed_transactions';
	
	var feePresets = {
	  details: function details(id) {
	    return '/fee_presets/' + id;
	  }
	};
	
	var pix = {
	  base: '/pix',
	  keys: '/pix/keys'
	};
	
	var settlements = {
	  all: function all(recipientId) {
	    return '/recipients/' + recipientId + '/settlements';
	  },
	  contracts: {
	    all: function all(recipientId) {
	      return '/recipients/' + recipientId + '/settlements/contracts';
	    }
	  }
	};
	
	var credit = {
	  creditLines: {
	    all: '/credit/credit_lines'
	  },
	  proposals: {
	    create: function create(creditLineId) {
	      return '/credit/credit_lines/' + creditLineId + '/proposals';
	    },
	    details: function details(creditLineId, proposalId) {
	      return '/credit/credit_lines/' + creditLineId + '/proposals/' + proposalId;
	    },
	    accept: function accept(creditLineId, proposalId) {
	      return '/credit/credit_lines/' + creditLineId + '/proposals/' + proposalId + '/accept';
	    },
	    settlementForecast: function settlementForecast(creditLineId, proposalId) {
	      return '/credit/credit_lines/' + creditLineId + '/proposals/' + proposalId + '/settlement_forecast';
	    }
	  },
	  loans: {
	    all: '/credit/loans',
	    details: function details(loanId) {
	      return '/credit/loans/' + loanId;
	    }
	  },
	  statements: {
	    daily: function daily(loanId) {
	      return '/credit/loans/' + loanId + '/statements/daily';
	    },
	    monthly: function monthly(loanId) {
	      return '/credit/loans/' + loanId + '/statements/monthly';
	    }
	  }
	};
	
	exports.default = {
	  acquirers: acquirers,
	  chargebacks: chargebacks,
	  acquirersConfigurations: acquirersConfigurations,
	  antifraudAnalyses: antifraudAnalyses,
	  balance: balance,
	  balanceOperations: balanceOperations,
	  bankAccounts: bankAccounts,
	  base: base,
	  bulkAnticipations: bulkAnticipations,
	  cards: cards,
	  chargebackOperations: chargebackOperations,
	  company: company,
	  companySegments: companySegments,
	  feePresets: feePresets,
	  events: events,
	  gatewayOperations: gatewayOperations,
	  invites: invites,
	  onboardingAnswers: onboardingAnswers,
	  onboardingQuestions: onboardingQuestions,
	  orders: orders,
	  payables: payables,
	  paymentLinks: paymentLinks,
	  pix: pix,
	  plans: plans,
	  postbacks: postbacks,
	  recipients: recipients,
	  search: search,
	  session: session,
	  settlements: settlements,
	  splitRules: splitRules,
	  subscriptions: subscriptions,
	  transactions: transactions,
	  transfers: transfers,
	  user: user,
	  customers: customers,
	  zipcodes: zipcodes,
	  status: status,
	  versions: versions,
	  reprocessedTransactions: reprocessedTransactions,
	  refunds: refunds,
	  credit: credit
	};
	module.exports = exports['default'];

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _keys = __webpack_require__(29);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _length = __webpack_require__(91);
	
	var _length2 = _interopRequireDefault(_length);
	
	var _merge = __webpack_require__(1);
	
	var _merge2 = _interopRequireDefault(_merge);
	
	var _mergeAll = __webpack_require__(93);
	
	var _mergeAll2 = _interopRequireDefault(_mergeAll);
	
	var _bluebird = __webpack_require__(49);
	
	var _bluebird2 = _interopRequireDefault(_bluebird);
	
	var _qs = __webpack_require__(94);
	
	var _qs2 = _interopRequireDefault(_qs);
	
	var _routes = __webpack_require__(89);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _errors = __webpack_require__(99);
	
	var _errors2 = _interopRequireDefault(_errors);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name Request
	 * @description This module handles the HTTP requests to Pagar.me's API.  '
	 *              It exports GET, PUT, POST, DELETE functions based upon
	 *              the `fetch` module.
	 *
	 * @module request
	 * @private
	 */
	
	__webpack_require__(100);
	
	var version =  true ? ("4.18.0") : '';
	
	var defaultHeaders = {
	  'Content-Type': 'application/json',
	  'X-PagarMe-User-Agent': 'pagarme-js/' + version
	};
	
	var isBrowser = typeof window !== 'undefined' && {}.toString.call(window) === '[object Window]';
	
	var mergeWithDefaultHeaders = function mergeWithDefaultHeaders(headers) {
	  if (isBrowser && window.navigator) {
	    var userAgent = window.navigator.userAgent ? window.navigator.userAgent + ' ' : '';
	
	    var customAgentHeaders = {
	      'User-Agent': userAgent + 'pagarme-js/' + version,
	      'X-PagarMe-User-Agent': userAgent + 'pagarme-js/' + version
	    };
	
	    return (0, _mergeAll2.default)([headers, defaultHeaders, customAgentHeaders]);
	  }
	
	  return (0, _merge2.default)(headers, defaultHeaders);
	};
	
	/**
	 * This method builds the final method, body and headers
	 * that will be used in `fetch`.
	 *
	 * @param {String} method
	 * @param {String} endpoint
	 * @param {Object} options
	 * @param {Object} data
	 * @returns {Object} An object containing a URL property
	 *                   and an object in the form of
	 *                   `{ method, body, headers }`
	 * @private
	 */
	function buildRequestParams(method, endpoint, options, data) {
	  var query = '';
	  var body = '';
	  var params = null;
	  var headers = options.headers || {};
	
	  var payload = (0, _merge2.default)(options.body || {}, data || {});
	
	  var queries = options.qs || {};
	
	  if ((0, _length2.default)((0, _keys2.default)(queries))) {
	    query = '' + _qs2.default.stringify(queries);
	  }
	
	  var shouldStringifyPayload = ['GET', 'HEAD'].includes(method);
	
	  var requestHasBody = !['GET', 'HEAD'].includes(method);
	
	  if (shouldStringifyPayload) {
	    query += '' + (query ? '&' : '') + _qs2.default.stringify(payload, { encode: false });
	    params = {
	      method: method,
	      headers: headers
	    };
	  }
	
	  if (requestHasBody) {
	    body = JSON.stringify(payload);
	    headers = mergeWithDefaultHeaders(headers);
	    params = {
	      method: method,
	      body: body,
	      headers: headers
	    };
	  }
	
	  var url = '' + endpoint + (query ? '?' + query : '');
	
	  return {
	    url: url,
	    params: params
	  };
	}
	
	/**
	 * This function handles the request erros,
	 * returning a Promise that will reject to
	 * a custom ApiError with a relevant message.
	 *
	 * @param {Object} response
	 * @returns {Promise} A Promise rejection with a
	 *                    Server Error message or the
	 *                    error response body
	 * @private
	 */
	function handleError(response) {
	  if (response.status === 500) {
	    return _bluebird2.default.reject(new _errors2.default({
	      status: 500,
	      errors: [{ message: 'Pagar.me server error' }]
	    }));
	  }
	
	  return response.json().then(function (body) {
	    return _bluebird2.default.reject(new _errors2.default((0, _merge2.default)(body, { status: response.status })));
	  });
	}
	
	/**
	 * This simple function handles the result of a
	 * request, returning either a JSON response
	 * or forwarding the error handling to another
	 * function.
	 *
	 * @param {Object} response
	 * @returns {Promise} A promise that will either
	 *                    resolve to the Response JSON
	 *                    conversion or further the chain to
	 *                    [handleError]{@link handleError}
	 * @private
	 */
	function handleResult(response) {
	  var contentType = response.headers.get('Content-Type');
	
	  if (response.ok) {
	    if (contentType.includes('application/json')) {
	      return response.json();
	    }
	
	    if (contentType === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
	      return response.arrayBuffer();
	    }
	
	    return response.text();
	  }
	
	  return handleError(response);
	}
	
	/**
	 * This function returns a new function,
	 * created from the supplied `method`.
	 * The returned function uses
	 * [buildRequestParams]{@link buildRequestParams}
	 * to define the request's URL, headers and body.
	 *
	 * @param {String} method
	 * @returns {Function} A `request` function that
	 *                     will return a Promise with
	 *                     the server response
	 * @private
	 */
	function buildRequest(method) {
	  return function request() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var path = arguments[1];
	    var body = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	
	    var endpoint = (options.baseURL || _routes2.default.base) + path;
	
	    var _buildRequestParams = buildRequestParams(method, endpoint, options, body),
	        url = _buildRequestParams.url,
	        params = _buildRequestParams.params;
	
	    return fetch(url, params).then(handleResult);
	  };
	}
	
	exports.default = {
	  get: buildRequest('GET'),
	  put: buildRequest('PUT'),
	  post: buildRequest('POST'),
	  delete: buildRequest('DELETE')
	};
	module.exports = exports['default'];

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var _curry1 = __webpack_require__(6);
	var _isNumber = __webpack_require__(92);
	
	
	/**
	 * Returns the number of elements in the array by returning `list.length`.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.3.0
	 * @category List
	 * @sig [a] -> Number
	 * @param {Array} list The array to inspect.
	 * @return {Number} The length of the array.
	 * @example
	 *
	 *      R.length([]); //=> 0
	 *      R.length([1, 2, 3]); //=> 3
	 */
	module.exports = _curry1(function length(list) {
	  return list != null && _isNumber(list.length) ? list.length : NaN;
	});


/***/ },
/* 92 */
/***/ function(module, exports) {

	module.exports = function _isNumber(x) {
	  return Object.prototype.toString.call(x) === '[object Number]';
	};


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var _assign = __webpack_require__(2);
	var _curry1 = __webpack_require__(6);
	
	
	/**
	 * Merges a list of objects together into one object.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.10.0
	 * @category List
	 * @sig [{k: v}] -> {k: v}
	 * @param {Array} list An array of objects
	 * @return {Object} A merged object.
	 * @see R.reduce
	 * @example
	 *
	 *      R.mergeAll([{foo:1},{bar:2},{baz:3}]); //=> {foo:1,bar:2,baz:3}
	 *      R.mergeAll([{foo:1},{foo:2},{bar:2}]); //=> {foo:2,bar:2}
	 */
	module.exports = _curry1(function mergeAll(list) {
	  return _assign.apply(null, [{}].concat(list));
	});


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var stringify = __webpack_require__(95);
	var parse = __webpack_require__(98);
	var formats = __webpack_require__(97);
	
	module.exports = {
	    formats: formats,
	    parse: parse,
	    stringify: stringify
	};


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(96);
	var formats = __webpack_require__(97);
	
	var arrayPrefixGenerators = {
	    brackets: function brackets(prefix) { // eslint-disable-line func-name-matching
	        return prefix + '[]';
	    },
	    indices: function indices(prefix, key) { // eslint-disable-line func-name-matching
	        return prefix + '[' + key + ']';
	    },
	    repeat: function repeat(prefix) { // eslint-disable-line func-name-matching
	        return prefix;
	    }
	};
	
	var toISO = Date.prototype.toISOString;
	
	var defaults = {
	    delimiter: '&',
	    encode: true,
	    encoder: utils.encode,
	    serializeDate: function serializeDate(date) { // eslint-disable-line func-name-matching
	        return toISO.call(date);
	    },
	    skipNulls: false,
	    strictNullHandling: false
	};
	
	var stringify = function stringify( // eslint-disable-line func-name-matching
	    object,
	    prefix,
	    generateArrayPrefix,
	    strictNullHandling,
	    skipNulls,
	    encoder,
	    filter,
	    sort,
	    allowDots,
	    serializeDate,
	    formatter
	) {
	    var obj = object;
	    if (typeof filter === 'function') {
	        obj = filter(prefix, obj);
	    } else if (obj instanceof Date) {
	        obj = serializeDate(obj);
	    } else if (obj === null) {
	        if (strictNullHandling) {
	            return encoder ? encoder(prefix) : prefix;
	        }
	
	        obj = '';
	    }
	
	    if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean' || utils.isBuffer(obj)) {
	        if (encoder) {
	            return [formatter(encoder(prefix)) + '=' + formatter(encoder(obj))];
	        }
	        return [formatter(prefix) + '=' + formatter(String(obj))];
	    }
	
	    var values = [];
	
	    if (typeof obj === 'undefined') {
	        return values;
	    }
	
	    var objKeys;
	    if (Array.isArray(filter)) {
	        objKeys = filter;
	    } else {
	        var keys = Object.keys(obj);
	        objKeys = sort ? keys.sort(sort) : keys;
	    }
	
	    for (var i = 0; i < objKeys.length; ++i) {
	        var key = objKeys[i];
	
	        if (skipNulls && obj[key] === null) {
	            continue;
	        }
	
	        if (Array.isArray(obj)) {
	            values = values.concat(stringify(
	                obj[key],
	                generateArrayPrefix(prefix, key),
	                generateArrayPrefix,
	                strictNullHandling,
	                skipNulls,
	                encoder,
	                filter,
	                sort,
	                allowDots,
	                serializeDate,
	                formatter
	            ));
	        } else {
	            values = values.concat(stringify(
	                obj[key],
	                prefix + (allowDots ? '.' + key : '[' + key + ']'),
	                generateArrayPrefix,
	                strictNullHandling,
	                skipNulls,
	                encoder,
	                filter,
	                sort,
	                allowDots,
	                serializeDate,
	                formatter
	            ));
	        }
	    }
	
	    return values;
	};
	
	module.exports = function (object, opts) {
	    var obj = object;
	    var options = opts || {};
	
	    if (options.encoder !== null && options.encoder !== undefined && typeof options.encoder !== 'function') {
	        throw new TypeError('Encoder has to be a function.');
	    }
	
	    var delimiter = typeof options.delimiter === 'undefined' ? defaults.delimiter : options.delimiter;
	    var strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;
	    var skipNulls = typeof options.skipNulls === 'boolean' ? options.skipNulls : defaults.skipNulls;
	    var encode = typeof options.encode === 'boolean' ? options.encode : defaults.encode;
	    var encoder = encode ? (typeof options.encoder === 'function' ? options.encoder : defaults.encoder) : null;
	    var sort = typeof options.sort === 'function' ? options.sort : null;
	    var allowDots = typeof options.allowDots === 'undefined' ? false : options.allowDots;
	    var serializeDate = typeof options.serializeDate === 'function' ? options.serializeDate : defaults.serializeDate;
	    if (typeof options.format === 'undefined') {
	        options.format = formats.default;
	    } else if (!Object.prototype.hasOwnProperty.call(formats.formatters, options.format)) {
	        throw new TypeError('Unknown format option provided.');
	    }
	    var formatter = formats.formatters[options.format];
	    var objKeys;
	    var filter;
	
	    if (typeof options.filter === 'function') {
	        filter = options.filter;
	        obj = filter('', obj);
	    } else if (Array.isArray(options.filter)) {
	        filter = options.filter;
	        objKeys = filter;
	    }
	
	    var keys = [];
	
	    if (typeof obj !== 'object' || obj === null) {
	        return '';
	    }
	
	    var arrayFormat;
	    if (options.arrayFormat in arrayPrefixGenerators) {
	        arrayFormat = options.arrayFormat;
	    } else if ('indices' in options) {
	        arrayFormat = options.indices ? 'indices' : 'repeat';
	    } else {
	        arrayFormat = 'indices';
	    }
	
	    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];
	
	    if (!objKeys) {
	        objKeys = Object.keys(obj);
	    }
	
	    if (sort) {
	        objKeys.sort(sort);
	    }
	
	    for (var i = 0; i < objKeys.length; ++i) {
	        var key = objKeys[i];
	
	        if (skipNulls && obj[key] === null) {
	            continue;
	        }
	
	        keys = keys.concat(stringify(
	            obj[key],
	            key,
	            generateArrayPrefix,
	            strictNullHandling,
	            skipNulls,
	            encoder,
	            filter,
	            sort,
	            allowDots,
	            serializeDate,
	            formatter
	        ));
	    }
	
	    return keys.join(delimiter);
	};


/***/ },
/* 96 */
/***/ function(module, exports) {

	'use strict';
	
	var has = Object.prototype.hasOwnProperty;
	
	var hexTable = (function () {
	    var array = [];
	    for (var i = 0; i < 256; ++i) {
	        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
	    }
	
	    return array;
	}());
	
	exports.arrayToObject = function (source, options) {
	    var obj = options && options.plainObjects ? Object.create(null) : {};
	    for (var i = 0; i < source.length; ++i) {
	        if (typeof source[i] !== 'undefined') {
	            obj[i] = source[i];
	        }
	    }
	
	    return obj;
	};
	
	exports.merge = function (target, source, options) {
	    if (!source) {
	        return target;
	    }
	
	    if (typeof source !== 'object') {
	        if (Array.isArray(target)) {
	            target.push(source);
	        } else if (typeof target === 'object') {
	            if (options.plainObjects || options.allowPrototypes || !has.call(Object.prototype, source)) {
	                target[source] = true;
	            }
	        } else {
	            return [target, source];
	        }
	
	        return target;
	    }
	
	    if (typeof target !== 'object') {
	        return [target].concat(source);
	    }
	
	    var mergeTarget = target;
	    if (Array.isArray(target) && !Array.isArray(source)) {
	        mergeTarget = exports.arrayToObject(target, options);
	    }
	
	    if (Array.isArray(target) && Array.isArray(source)) {
	        source.forEach(function (item, i) {
	            if (has.call(target, i)) {
	                if (target[i] && typeof target[i] === 'object') {
	                    target[i] = exports.merge(target[i], item, options);
	                } else {
	                    target.push(item);
	                }
	            } else {
	                target[i] = item;
	            }
	        });
	        return target;
	    }
	
	    return Object.keys(source).reduce(function (acc, key) {
	        var value = source[key];
	
	        if (Object.prototype.hasOwnProperty.call(acc, key)) {
	            acc[key] = exports.merge(acc[key], value, options);
	        } else {
	            acc[key] = value;
	        }
	        return acc;
	    }, mergeTarget);
	};
	
	exports.decode = function (str) {
	    try {
	        return decodeURIComponent(str.replace(/\+/g, ' '));
	    } catch (e) {
	        return str;
	    }
	};
	
	exports.encode = function (str) {
	    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
	    // It has been adapted here for stricter adherence to RFC 3986
	    if (str.length === 0) {
	        return str;
	    }
	
	    var string = typeof str === 'string' ? str : String(str);
	
	    var out = '';
	    for (var i = 0; i < string.length; ++i) {
	        var c = string.charCodeAt(i);
	
	        if (
	            c === 0x2D || // -
	            c === 0x2E || // .
	            c === 0x5F || // _
	            c === 0x7E || // ~
	            (c >= 0x30 && c <= 0x39) || // 0-9
	            (c >= 0x41 && c <= 0x5A) || // a-z
	            (c >= 0x61 && c <= 0x7A) // A-Z
	        ) {
	            out += string.charAt(i);
	            continue;
	        }
	
	        if (c < 0x80) {
	            out = out + hexTable[c];
	            continue;
	        }
	
	        if (c < 0x800) {
	            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
	            continue;
	        }
	
	        if (c < 0xD800 || c >= 0xE000) {
	            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
	            continue;
	        }
	
	        i += 1;
	        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
	        out += hexTable[0xF0 | (c >> 18)] + hexTable[0x80 | ((c >> 12) & 0x3F)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]; // eslint-disable-line max-len
	    }
	
	    return out;
	};
	
	exports.compact = function (obj, references) {
	    if (typeof obj !== 'object' || obj === null) {
	        return obj;
	    }
	
	    var refs = references || [];
	    var lookup = refs.indexOf(obj);
	    if (lookup !== -1) {
	        return refs[lookup];
	    }
	
	    refs.push(obj);
	
	    if (Array.isArray(obj)) {
	        var compacted = [];
	
	        for (var i = 0; i < obj.length; ++i) {
	            if (obj[i] && typeof obj[i] === 'object') {
	                compacted.push(exports.compact(obj[i], refs));
	            } else if (typeof obj[i] !== 'undefined') {
	                compacted.push(obj[i]);
	            }
	        }
	
	        return compacted;
	    }
	
	    var keys = Object.keys(obj);
	    keys.forEach(function (key) {
	        obj[key] = exports.compact(obj[key], refs);
	    });
	
	    return obj;
	};
	
	exports.isRegExp = function (obj) {
	    return Object.prototype.toString.call(obj) === '[object RegExp]';
	};
	
	exports.isBuffer = function (obj) {
	    if (obj === null || typeof obj === 'undefined') {
	        return false;
	    }
	
	    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
	};


/***/ },
/* 97 */
/***/ function(module, exports) {

	'use strict';
	
	var replace = String.prototype.replace;
	var percentTwenties = /%20/g;
	
	module.exports = {
	    'default': 'RFC3986',
	    formatters: {
	        RFC1738: function (value) {
	            return replace.call(value, percentTwenties, '+');
	        },
	        RFC3986: function (value) {
	            return value;
	        }
	    },
	    RFC1738: 'RFC1738',
	    RFC3986: 'RFC3986'
	};


/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(96);
	
	var has = Object.prototype.hasOwnProperty;
	
	var defaults = {
	    allowDots: false,
	    allowPrototypes: false,
	    arrayLimit: 20,
	    decoder: utils.decode,
	    delimiter: '&',
	    depth: 5,
	    parameterLimit: 1000,
	    plainObjects: false,
	    strictNullHandling: false
	};
	
	var parseValues = function parseQueryStringValues(str, options) {
	    var obj = {};
	    var parts = str.split(options.delimiter, options.parameterLimit === Infinity ? undefined : options.parameterLimit);
	
	    for (var i = 0; i < parts.length; ++i) {
	        var part = parts[i];
	        var pos = part.indexOf(']=') === -1 ? part.indexOf('=') : part.indexOf(']=') + 1;
	
	        var key, val;
	        if (pos === -1) {
	            key = options.decoder(part);
	            val = options.strictNullHandling ? null : '';
	        } else {
	            key = options.decoder(part.slice(0, pos));
	            val = options.decoder(part.slice(pos + 1));
	        }
	        if (has.call(obj, key)) {
	            obj[key] = [].concat(obj[key]).concat(val);
	        } else {
	            obj[key] = val;
	        }
	    }
	
	    return obj;
	};
	
	var parseObject = function parseObjectRecursive(chain, val, options) {
	    if (!chain.length) {
	        return val;
	    }
	
	    var root = chain.shift();
	
	    var obj;
	    if (root === '[]') {
	        obj = [];
	        obj = obj.concat(parseObject(chain, val, options));
	    } else {
	        obj = options.plainObjects ? Object.create(null) : {};
	        var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
	        var index = parseInt(cleanRoot, 10);
	        if (
	            !isNaN(index) &&
	            root !== cleanRoot &&
	            String(index) === cleanRoot &&
	            index >= 0 &&
	            (options.parseArrays && index <= options.arrayLimit)
	        ) {
	            obj = [];
	            obj[index] = parseObject(chain, val, options);
	        } else {
	            obj[cleanRoot] = parseObject(chain, val, options);
	        }
	    }
	
	    return obj;
	};
	
	var parseKeys = function parseQueryStringKeys(givenKey, val, options) {
	    if (!givenKey) {
	        return;
	    }
	
	    // Transform dot notation to bracket notation
	    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;
	
	    // The regex chunks
	
	    var brackets = /(\[[^[\]]*])/;
	    var child = /(\[[^[\]]*])/g;
	
	    // Get the parent
	
	    var segment = brackets.exec(key);
	    var parent = segment ? key.slice(0, segment.index) : key;
	
	    // Stash the parent if it exists
	
	    var keys = [];
	    if (parent) {
	        // If we aren't using plain objects, optionally prefix keys
	        // that would overwrite object prototype properties
	        if (!options.plainObjects && has.call(Object.prototype, parent)) {
	            if (!options.allowPrototypes) {
	                return;
	            }
	        }
	
	        keys.push(parent);
	    }
	
	    // Loop through children appending to the array until we hit depth
	
	    var i = 0;
	    while ((segment = child.exec(key)) !== null && i < options.depth) {
	        i += 1;
	        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
	            if (!options.allowPrototypes) {
	                return;
	            }
	        }
	        keys.push(segment[1]);
	    }
	
	    // If there's a remainder, just add whatever is left
	
	    if (segment) {
	        keys.push('[' + key.slice(segment.index) + ']');
	    }
	
	    return parseObject(keys, val, options);
	};
	
	module.exports = function (str, opts) {
	    var options = opts || {};
	
	    if (options.decoder !== null && options.decoder !== undefined && typeof options.decoder !== 'function') {
	        throw new TypeError('Decoder has to be a function.');
	    }
	
	    options.delimiter = typeof options.delimiter === 'string' || utils.isRegExp(options.delimiter) ? options.delimiter : defaults.delimiter;
	    options.depth = typeof options.depth === 'number' ? options.depth : defaults.depth;
	    options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : defaults.arrayLimit;
	    options.parseArrays = options.parseArrays !== false;
	    options.decoder = typeof options.decoder === 'function' ? options.decoder : defaults.decoder;
	    options.allowDots = typeof options.allowDots === 'boolean' ? options.allowDots : defaults.allowDots;
	    options.plainObjects = typeof options.plainObjects === 'boolean' ? options.plainObjects : defaults.plainObjects;
	    options.allowPrototypes = typeof options.allowPrototypes === 'boolean' ? options.allowPrototypes : defaults.allowPrototypes;
	    options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : defaults.parameterLimit;
	    options.strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;
	
	    if (str === '' || str === null || typeof str === 'undefined') {
	        return options.plainObjects ? Object.create(null) : {};
	    }
	
	    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
	    var obj = options.plainObjects ? Object.create(null) : {};
	
	    // Iterate over the keys and setup the new object
	
	    var keys = Object.keys(tempObj);
	    for (var i = 0; i < keys.length; ++i) {
	        var key = keys[i];
	        var newObj = parseKeys(key, tempObj[key], options);
	        obj = utils.merge(obj, newObj, options);
	    }
	
	    return utils.compact(obj);
	};


/***/ },
/* 99 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ApiError = function (_Error) {
	  _inherits(ApiError, _Error);
	
	  function ApiError(response) {
	    _classCallCheck(this, ApiError);
	
	    var _this = _possibleConstructorReturn(this, (ApiError.__proto__ || Object.getPrototypeOf(ApiError)).call(this, 'Pagar.me API error. Check error\'s "response" property for more details.'));
	
	    _this.name = 'ApiError';
	    _this.response = response;
	    return _this;
	  }
	
	  return ApiError;
	}(Error);
	
	exports.default = ApiError;
	module.exports = exports['default'];

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	// the whatwg-fetch polyfill installs the fetch() function
	// on the global object (window or self)
	//
	// Return that as the export for use in Webpack, Browserify etc.
	__webpack_require__(101);
	module.exports = self.fetch.bind(self);


/***/ },
/* 101 */
/***/ function(module, exports) {

	(function(self) {
	  'use strict';
	
	  if (self.fetch) {
	    return
	  }
	
	  var support = {
	    searchParams: 'URLSearchParams' in self,
	    iterable: 'Symbol' in self && 'iterator' in Symbol,
	    blob: 'FileReader' in self && 'Blob' in self && (function() {
	      try {
	        new Blob()
	        return true
	      } catch(e) {
	        return false
	      }
	    })(),
	    formData: 'FormData' in self,
	    arrayBuffer: 'ArrayBuffer' in self
	  }
	
	  if (support.arrayBuffer) {
	    var viewClasses = [
	      '[object Int8Array]',
	      '[object Uint8Array]',
	      '[object Uint8ClampedArray]',
	      '[object Int16Array]',
	      '[object Uint16Array]',
	      '[object Int32Array]',
	      '[object Uint32Array]',
	      '[object Float32Array]',
	      '[object Float64Array]'
	    ]
	
	    var isDataView = function(obj) {
	      return obj && DataView.prototype.isPrototypeOf(obj)
	    }
	
	    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
	      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
	    }
	  }
	
	  function normalizeName(name) {
	    if (typeof name !== 'string') {
	      name = String(name)
	    }
	    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
	      throw new TypeError('Invalid character in header field name')
	    }
	    return name.toLowerCase()
	  }
	
	  function normalizeValue(value) {
	    if (typeof value !== 'string') {
	      value = String(value)
	    }
	    return value
	  }
	
	  // Build a destructive iterator for the value list
	  function iteratorFor(items) {
	    var iterator = {
	      next: function() {
	        var value = items.shift()
	        return {done: value === undefined, value: value}
	      }
	    }
	
	    if (support.iterable) {
	      iterator[Symbol.iterator] = function() {
	        return iterator
	      }
	    }
	
	    return iterator
	  }
	
	  function Headers(headers) {
	    this.map = {}
	
	    if (headers instanceof Headers) {
	      headers.forEach(function(value, name) {
	        this.append(name, value)
	      }, this)
	    } else if (Array.isArray(headers)) {
	      headers.forEach(function(header) {
	        this.append(header[0], header[1])
	      }, this)
	    } else if (headers) {
	      Object.getOwnPropertyNames(headers).forEach(function(name) {
	        this.append(name, headers[name])
	      }, this)
	    }
	  }
	
	  Headers.prototype.append = function(name, value) {
	    name = normalizeName(name)
	    value = normalizeValue(value)
	    var oldValue = this.map[name]
	    this.map[name] = oldValue ? oldValue+','+value : value
	  }
	
	  Headers.prototype['delete'] = function(name) {
	    delete this.map[normalizeName(name)]
	  }
	
	  Headers.prototype.get = function(name) {
	    name = normalizeName(name)
	    return this.has(name) ? this.map[name] : null
	  }
	
	  Headers.prototype.has = function(name) {
	    return this.map.hasOwnProperty(normalizeName(name))
	  }
	
	  Headers.prototype.set = function(name, value) {
	    this.map[normalizeName(name)] = normalizeValue(value)
	  }
	
	  Headers.prototype.forEach = function(callback, thisArg) {
	    for (var name in this.map) {
	      if (this.map.hasOwnProperty(name)) {
	        callback.call(thisArg, this.map[name], name, this)
	      }
	    }
	  }
	
	  Headers.prototype.keys = function() {
	    var items = []
	    this.forEach(function(value, name) { items.push(name) })
	    return iteratorFor(items)
	  }
	
	  Headers.prototype.values = function() {
	    var items = []
	    this.forEach(function(value) { items.push(value) })
	    return iteratorFor(items)
	  }
	
	  Headers.prototype.entries = function() {
	    var items = []
	    this.forEach(function(value, name) { items.push([name, value]) })
	    return iteratorFor(items)
	  }
	
	  if (support.iterable) {
	    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
	  }
	
	  function consumed(body) {
	    if (body.bodyUsed) {
	      return Promise.reject(new TypeError('Already read'))
	    }
	    body.bodyUsed = true
	  }
	
	  function fileReaderReady(reader) {
	    return new Promise(function(resolve, reject) {
	      reader.onload = function() {
	        resolve(reader.result)
	      }
	      reader.onerror = function() {
	        reject(reader.error)
	      }
	    })
	  }
	
	  function readBlobAsArrayBuffer(blob) {
	    var reader = new FileReader()
	    var promise = fileReaderReady(reader)
	    reader.readAsArrayBuffer(blob)
	    return promise
	  }
	
	  function readBlobAsText(blob) {
	    var reader = new FileReader()
	    var promise = fileReaderReady(reader)
	    reader.readAsText(blob)
	    return promise
	  }
	
	  function readArrayBufferAsText(buf) {
	    var view = new Uint8Array(buf)
	    var chars = new Array(view.length)
	
	    for (var i = 0; i < view.length; i++) {
	      chars[i] = String.fromCharCode(view[i])
	    }
	    return chars.join('')
	  }
	
	  function bufferClone(buf) {
	    if (buf.slice) {
	      return buf.slice(0)
	    } else {
	      var view = new Uint8Array(buf.byteLength)
	      view.set(new Uint8Array(buf))
	      return view.buffer
	    }
	  }
	
	  function Body() {
	    this.bodyUsed = false
	
	    this._initBody = function(body) {
	      this._bodyInit = body
	      if (!body) {
	        this._bodyText = ''
	      } else if (typeof body === 'string') {
	        this._bodyText = body
	      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
	        this._bodyBlob = body
	      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
	        this._bodyFormData = body
	      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	        this._bodyText = body.toString()
	      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
	        this._bodyArrayBuffer = bufferClone(body.buffer)
	        // IE 10-11 can't handle a DataView body.
	        this._bodyInit = new Blob([this._bodyArrayBuffer])
	      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
	        this._bodyArrayBuffer = bufferClone(body)
	      } else {
	        throw new Error('unsupported BodyInit type')
	      }
	
	      if (!this.headers.get('content-type')) {
	        if (typeof body === 'string') {
	          this.headers.set('content-type', 'text/plain;charset=UTF-8')
	        } else if (this._bodyBlob && this._bodyBlob.type) {
	          this.headers.set('content-type', this._bodyBlob.type)
	        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
	        }
	      }
	    }
	
	    if (support.blob) {
	      this.blob = function() {
	        var rejected = consumed(this)
	        if (rejected) {
	          return rejected
	        }
	
	        if (this._bodyBlob) {
	          return Promise.resolve(this._bodyBlob)
	        } else if (this._bodyArrayBuffer) {
	          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as blob')
	        } else {
	          return Promise.resolve(new Blob([this._bodyText]))
	        }
	      }
	
	      this.arrayBuffer = function() {
	        if (this._bodyArrayBuffer) {
	          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
	        } else {
	          return this.blob().then(readBlobAsArrayBuffer)
	        }
	      }
	    }
	
	    this.text = function() {
	      var rejected = consumed(this)
	      if (rejected) {
	        return rejected
	      }
	
	      if (this._bodyBlob) {
	        return readBlobAsText(this._bodyBlob)
	      } else if (this._bodyArrayBuffer) {
	        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
	      } else if (this._bodyFormData) {
	        throw new Error('could not read FormData body as text')
	      } else {
	        return Promise.resolve(this._bodyText)
	      }
	    }
	
	    if (support.formData) {
	      this.formData = function() {
	        return this.text().then(decode)
	      }
	    }
	
	    this.json = function() {
	      return this.text().then(JSON.parse)
	    }
	
	    return this
	  }
	
	  // HTTP methods whose capitalization should be normalized
	  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']
	
	  function normalizeMethod(method) {
	    var upcased = method.toUpperCase()
	    return (methods.indexOf(upcased) > -1) ? upcased : method
	  }
	
	  function Request(input, options) {
	    options = options || {}
	    var body = options.body
	
	    if (input instanceof Request) {
	      if (input.bodyUsed) {
	        throw new TypeError('Already read')
	      }
	      this.url = input.url
	      this.credentials = input.credentials
	      if (!options.headers) {
	        this.headers = new Headers(input.headers)
	      }
	      this.method = input.method
	      this.mode = input.mode
	      if (!body && input._bodyInit != null) {
	        body = input._bodyInit
	        input.bodyUsed = true
	      }
	    } else {
	      this.url = String(input)
	    }
	
	    this.credentials = options.credentials || this.credentials || 'omit'
	    if (options.headers || !this.headers) {
	      this.headers = new Headers(options.headers)
	    }
	    this.method = normalizeMethod(options.method || this.method || 'GET')
	    this.mode = options.mode || this.mode || null
	    this.referrer = null
	
	    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
	      throw new TypeError('Body not allowed for GET or HEAD requests')
	    }
	    this._initBody(body)
	  }
	
	  Request.prototype.clone = function() {
	    return new Request(this, { body: this._bodyInit })
	  }
	
	  function decode(body) {
	    var form = new FormData()
	    body.trim().split('&').forEach(function(bytes) {
	      if (bytes) {
	        var split = bytes.split('=')
	        var name = split.shift().replace(/\+/g, ' ')
	        var value = split.join('=').replace(/\+/g, ' ')
	        form.append(decodeURIComponent(name), decodeURIComponent(value))
	      }
	    })
	    return form
	  }
	
	  function parseHeaders(rawHeaders) {
	    var headers = new Headers()
	    // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
	    // https://tools.ietf.org/html/rfc7230#section-3.2
	    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ')
	    preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
	      var parts = line.split(':')
	      var key = parts.shift().trim()
	      if (key) {
	        var value = parts.join(':').trim()
	        headers.append(key, value)
	      }
	    })
	    return headers
	  }
	
	  Body.call(Request.prototype)
	
	  function Response(bodyInit, options) {
	    if (!options) {
	      options = {}
	    }
	
	    this.type = 'default'
	    this.status = options.status === undefined ? 200 : options.status
	    this.ok = this.status >= 200 && this.status < 300
	    this.statusText = 'statusText' in options ? options.statusText : 'OK'
	    this.headers = new Headers(options.headers)
	    this.url = options.url || ''
	    this._initBody(bodyInit)
	  }
	
	  Body.call(Response.prototype)
	
	  Response.prototype.clone = function() {
	    return new Response(this._bodyInit, {
	      status: this.status,
	      statusText: this.statusText,
	      headers: new Headers(this.headers),
	      url: this.url
	    })
	  }
	
	  Response.error = function() {
	    var response = new Response(null, {status: 0, statusText: ''})
	    response.type = 'error'
	    return response
	  }
	
	  var redirectStatuses = [301, 302, 303, 307, 308]
	
	  Response.redirect = function(url, status) {
	    if (redirectStatuses.indexOf(status) === -1) {
	      throw new RangeError('Invalid status code')
	    }
	
	    return new Response(null, {status: status, headers: {location: url}})
	  }
	
	  self.Headers = Headers
	  self.Request = Request
	  self.Response = Response
	
	  self.fetch = function(input, init) {
	    return new Promise(function(resolve, reject) {
	      var request = new Request(input, init)
	      var xhr = new XMLHttpRequest()
	
	      xhr.onload = function() {
	        var options = {
	          status: xhr.status,
	          statusText: xhr.statusText,
	          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
	        }
	        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
	        var body = 'response' in xhr ? xhr.response : xhr.responseText
	        resolve(new Response(body, options))
	      }
	
	      xhr.onerror = function() {
	        reject(new TypeError('Network request failed'))
	      }
	
	      xhr.ontimeout = function() {
	        reject(new TypeError('Network request failed'))
	      }
	
	      xhr.open(request.method, request.url, true)
	
	      if (request.credentials === 'include') {
	        xhr.withCredentials = true
	      } else if (request.credentials === 'omit') {
	        xhr.withCredentials = false
	      }
	
	      if ('responseType' in xhr && support.blob) {
	        xhr.responseType = 'blob'
	      }
	
	      request.headers.forEach(function(value, name) {
	        xhr.setRequestHeader(name, value)
	      })
	
	      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
	    })
	  }
	  self.fetch.polyfill = true
	})(typeof self !== 'undefined' ? self : this);


/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _merge = __webpack_require__(1);
	
	var _merge2 = _interopRequireDefault(_merge);
	
	var _session = __webpack_require__(103);
	
	var _session2 = _interopRequireDefault(_session);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name login
	 * @memberof strategies
	 * @private
	 */
	var buildSessionAuth = function buildSessionAuth(_ref, options) {
	  var sessionId = _ref.session_id,
	      impersonationKey = _ref.impersonation_key;
	  return (0, _merge2.default)(options, {
	    body: {
	      session_id: sessionId,
	      impersonation_key: impersonationKey
	    }
	  });
	};
	
	/**
	 * Creates a session in the server
	 * and returns a Promise with the
	 * pertinent object.
	 * Allows setting the environment
	 * to live passing `environment: "live"`.
	 *
	 * @param {any} { email, password, recaptchaToken, environment }
	 * @returns {Promise} Resolves to an object
	 *                    containing a body with
	 *                    the desired `session_id`
	 * @private
	 */
	function execute(_ref2) {
	  var email = _ref2.email,
	      password = _ref2.password,
	      recaptchaToken = _ref2.recaptchaToken,
	      token = _ref2.token,
	      impersonationKey = _ref2.impersonationKey,
	      environment = _ref2.environment,
	      options = _ref2.options;
	
	  var headers = environment === 'live' ? { 'X-Live': 1 } : {};
	
	  var opts = (0, _merge2.default)(options, {
	    headers: headers
	  });
	
	  return _session2.default.create(opts, email, password, recaptchaToken, token).then(function (sessionInfo) {
	    return {
	      options: buildSessionAuth((0, _merge2.default)(sessionInfo, {
	        impersonation_key: impersonationKey
	      }), opts),
	      authentication: sessionInfo
	    };
	  });
	}
	
	/**
	 * Returns the supplied parameter with
	 * the `execute` function added to it.
	 *
	 * @param {any} options
	 * @returns {Object} The `options` parameter
	 *                   with `execute` add to it
	 * @private
	 */
	function build(options) {
	  return (0, _merge2.default)(options, { execute: execute.bind(null, options) });
	}
	
	exports.default = { build: build };
	module.exports = exports['default'];

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _routes = __webpack_require__(89);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _request = __webpack_require__(90);
	
	var _request2 = _interopRequireDefault(_request);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * `POST /sessions`
	 * Creates a session from the given payload.
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 * @param {String} email The account's email
	 *
	 * @param {String} password The account's password
	 *
	 * @param {String} recaptchaToken The generated reCAPTCHA token
	 *
	 * @returns {Promise} Resolves to the result of
	 *                    the request or to an error.
	 */
	/**
	 * @name Session
	 * @description This module exposes functions
	 *              related to the `/sessions` path.
	 *
	 * @module session
	 **/
	
	var create = function create(opts, email, password, recaptchaToken, token) {
	  return _request2.default.post(opts, _routes2.default.session.base, {
	    email: email,
	    password: password,
	    recaptchaToken: recaptchaToken,
	    token: token
	  });
	};
	
	/**
	 * `DELETE /sessions/:id`
	 *
	 * Deletes the session with the given ID
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 * @param {String} id The session's id
	 *
	 * @returns {Promise} Resolves to the result of
	 *                    the request or to an error.
	 */
	var destroy = function destroy(opts, id) {
	  return _request2.default.delete(opts, _routes2.default.session.destroy(id), {});
	};
	
	/**
	 * `POST /sessions/:id/verify`
	 * Verifies a session's password' from the given
	 * session_id and possible password.
	 *
	 * @example
	 * client.session.verify({ id: sessionId, password: pwd})
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 * @param {String} payload The payload to be sent
	 *
	 * @returns {Promise} Resolves to the result of
	 *                    the request or to an error.
	 */
	var verify = function verify(opts, payload) {
	  return _request2.default.post(opts, _routes2.default.session.verify(payload.id), payload);
	};
	
	exports.default = {
	  create: create,
	  destroy: destroy,
	  verify: verify
	};
	module.exports = exports['default'];

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _merge = __webpack_require__(1);
	
	var _merge2 = _interopRequireDefault(_merge);
	
	var _company = __webpack_require__(105);
	
	var _company2 = _interopRequireDefault(_company);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Creates an object with
	 * the `api_key` from
	 * the supplied `options` param
	 *
	 * @param {any} options
	 * @returns {Object} an object containing
	 *                   a body property with
	 *                   the desired `api_key
	 * @private
	 */
	/**
	 * @name api
	 * @memberof strategies
	 * @private
	 */
	function execute(opts) {
	  var apiKey = opts.api_key,
	      options = opts.options;
	
	  var body = {
	    body: {
	      api_key: apiKey
	    }
	  };
	  if (options && options.baseURL) {
	    body.baseURL = options.baseURL;
	  }
	  return _company2.default.current(body).catch(function (error) {
	    if (opts.skipAuthentication) {
	      return;
	    }
	    if (error.name === 'ApiError') {
	      throw new Error('You must supply a valid API key');
	    }
	
	    // eslint-disable-next-line no-console
	    console.warn('Warning: Could not verify key. Pagar.me may be offline ' + error.name);
	  }).then(function () {
	    return (0, _merge2.default)(body, opts.options);
	  }).then(function (requestOpts) {
	    return {
	      authentication: { api_key: apiKey },
	      options: requestOpts
	    };
	  });
	}
	
	/**
	 * Returns the supplied parameter with
	 * the `execute` function added to it.
	 *
	 * @param {any} options
	 * @returns {Object} The `options` parameter
	 *                   with `execute` add to it
	 * @private
	 */
	function build(options) {
	  return (0, _merge2.default)(options, { execute: execute.bind(null, options) });
	}
	
	exports.default = {
	  build: build
	};
	module.exports = exports['default'];

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _routes = __webpack_require__(89);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _request = __webpack_require__(90);
	
	var _request2 = _interopRequireDefault(_request);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * `POST /companies`
	 * Creates a company from the given payload.
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {Object} body The payload for the request
	 * @returns {Promise} A promise that resolves to
	 *                    the newly created company's
	 *                    data or to an error.
	 **/
	/**
	 * @name Company
	 * @description This module exposes functions
	 *              related to the `/company` and
	 *              `/companies` paths.
	 *
	 * @module company
	 **/
	
	var create = function create(opts, body) {
	  return _request2.default.post(opts, _routes2.default.company.basePlural, body);
	};
	
	/**
	 * `POST /companies/temporary`
	 * Creates a test-only temporary company.
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {Object} body The payload for the request
	 * @returns {Promise} A promise that resolves to
	 *                    the newly created company's
	 *                    data or to an error.
	 **/
	var createTemporary = function createTemporary(opts, body) {
	  return _request2.default.post(opts, _routes2.default.company.temporary, body);
	};
	
	/**
	 * `POST /companies/activate`
	 * Activates a company.
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @returns {Promise} A promise that resolves to
	 *                    the newly created company's
	 *                    data or to an error.
	 **/
	var activate = function activate(opts, body) {
	  return _request2.default.post(opts, _routes2.default.company.activate, body);
	};
	
	/**
	 * `PUT /company`
	 * Updates a company from the given payload.
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {Object} body The payload for the request
	 * @returns {Promise} A promise that resolves to
	 *                    the newly created company's
	 *                    data or to an error.
	 **/
	var update = function update(opts, body) {
	  return _request2.default.put(opts, _routes2.default.company.base, body);
	};
	
	/**
	 * `GET /company`
	 * Return a company from the given payload.
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @returns {Promise} A promise that resolves to
	 *                    the newly created company's
	 *                    data or to an error.
	 **/
	var current = function current(opts) {
	  return _request2.default.get(opts, _routes2.default.company.base);
	};
	
	/**
	 * `PUT /company/reset_keys`
	 * Reset the company API keys.
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {Object} body The payload for the request
	 *
	 * @returns {Promise} A promise that resolves to
	 *                    the newly created company's
	 *                    data or to an error.
	 **/
	var resetKeys = function resetKeys(opts) {
	  return _request2.default.put(opts, _routes2.default.company.resetKeys);
	};
	
	/**
	 * `GET /company/affiliation_progress`
	 * Information about the affiliation progress.
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @returns {Promise} A promise that resolves to
	 *                    the newly created company's
	 *                    data or to an error.
	 **/
	var affiliationProgress = function affiliationProgress(opts) {
	  return _request2.default.get(opts, _routes2.default.company.affiliationProgress, {});
	};
	
	/**
	 * `PUT /company/branding/:id`
	 * Updates a company branding from the given payload.
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {Object} body The payload for the request
	 *
	 * @returns {Promise} A promise that resolves to
	 *                    the newly created company's
	 *                    data or to an error.
	 **/
	var updateBranding = function updateBranding(opts, body) {
	  return _request2.default.put(opts, _routes2.default.company.branding(body.id), body);
	};
	
	var emailTemplates = {
	  /**
	   * `GET /company/email_templates/:id`
	   * Get emails templates
	   *
	   * @param {Object} opts An options params which
	   *                      is usually already bound
	   *                      by `connect` functions.
	   *
	   * @param {Number} body.id The ID of the email template.
	   *
	   * @returns {Promise} A promise that resolves to
	   *                    the newly created company's
	   *                    data or to an error.
	   **/
	  find: function find(opts, body) {
	    return _request2.default.get(opts, _routes2.default.company.emailTemplates(body.id), {});
	  },
	
	  /**
	   * `PUT /company/email_templates/:id`
	   * Updates a company from the given payload.
	   *
	   * @param {Object} opts An options params which
	   *                      is usually already bound
	   *                      by `connect` functions.
	   *
	   * @param {Object} body The payload for the request
	   * @returns {Promise} A promise that resolves to
	   *                    the newly created company's
	   *                    data or to an error.
	   **/
	  update: function update(opts, body) {
	    return _request2.default.put(opts, _routes2.default.company.emailTemplates(body.id), body);
	  }
	
	  /**
	   * `POST /company/email_confirmation`
	   * Resend account confirmation email to a previously registered company.
	   *
	   * @param {Object} opts An options params which
	   *                      is usually already bound
	   *                      by `connect` functions.
	   *
	   * @param {String} body.email The email address to resend the account confirmation
	   * @returns {Promise} A promise that resolves to
	   *                    the send email confirmation company's
	   *                    data or to an error.
	   **/
	};var emailConfirmation = function emailConfirmation(opts, body) {
	  return _request2.default.post(opts, _routes2.default.company.emailConfirmation, body);
	};
	
	/**
	 * `GET /company/fees`
	 * Return company fees configuration available.
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @returns {Promise} A promise that resolves to
	 *                    the newly created company's
	 *                    data or to an error.
	 **/
	var fees = function fees(opts) {
	  return _request2.default.get(opts, _routes2.default.company.fees);
	};
	
	/**
	 * `PUT /company/anticipation`
	 * Sets the delay for the automatic anticipation based on the options
	 * available. It's also possible to disable the automatic anticipation.
	 *
	 * Check GET /company/anticipation/options for the options available.
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {Boolean} body.enabled Enables the automatic anticipation.
	 * @param {Number} body.delay Days for the anticipation delay.
	 *
	 * @returns {Promise} A promise that resolves to
	 *                    a confirmation or to an error.
	 **/
	var updateAnticipation = function updateAnticipation(opts, body) {
	  return _request2.default.put(opts, _routes2.default.company.anticipation.base, body);
	};
	
	/**
	 * `GET /company/anticipation/options`
	 * Available anticipation options that can be set using PUT /company/anticipation.
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @returns {Promise} A promise that resolves to
	 *                    the available anticipation options
	 *                    or to an error.
	 **/
	var anticipationOptions = function anticipationOptions(opts) {
	  return _request2.default.get(opts, _routes2.default.company.anticipation.options);
	};
	
	/**
	 * `GET /company/api_key`
	 * Return company api key (sandbox and live)
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @returns {Promise} A promise that resolves to
	 *                    the newly created company's
	 *                    data or to an error.
	 **/
	var apiKey = function apiKey(opts) {
	  return _request2.default.get(opts, _routes2.default.company.apiKey);
	};
	
	exports.default = {
	  create: create,
	  createTemporary: createTemporary,
	  activate: activate,
	  emailConfirmation: emailConfirmation,
	  update: update,
	  current: current,
	  resetKeys: resetKeys,
	  affiliationProgress: affiliationProgress,
	  updateBranding: updateBranding,
	  emailTemplates: emailTemplates,
	  fees: fees,
	  updateAnticipation: updateAnticipation,
	  anticipationOptions: anticipationOptions,
	  apiKey: apiKey
	};
	module.exports = exports['default'];

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _merge = __webpack_require__(1);
	
	var _merge2 = _interopRequireDefault(_merge);
	
	var _bluebird = __webpack_require__(49);
	
	var _transactions = __webpack_require__(87);
	
	var _transactions2 = _interopRequireDefault(_transactions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Creates an object with
	 * the `session_id` from
	 * the supplied `options` param
	 *
	 * @param {any} options
	 * @returns {Object} an object containing
	 *                   a body property with
	 *                   the desired `session_id`
	 * @private
	 */
	/**
	 * @name sessionId
	 * @memberof strategies
	 * @private
	 */
	function execute(_ref) {
	  var sessionId = _ref.session_id,
	      environment = _ref.environment,
	      impersonationKey = _ref.impersonationKey,
	      options = _ref.options,
	      skipAuthentication = _ref.skipAuthentication;
	
	  var headers = environment === 'live' ? { 'X-Live': 1 } : {};
	
	  var body = {
	    session_id: sessionId
	  };
	
	  if (impersonationKey) {
	    body.impersonation_key = impersonationKey;
	  }
	
	  var opts = (0, _merge2.default)(options, {
	    body: body,
	    headers: headers
	  });
	
	  return _transactions2.default.calculateInstallmentsAmount(opts, { amount: 1, interest_rate: 100 }).catch(function (error) {
	    return skipAuthentication ? (0, _bluebird.resolve)(opts) : (0, _bluebird.reject)(error);
	  }).catch({ name: 'ApiError' }, function () {
	    return (0, _bluebird.reject)(new Error('You must supply a valid session id'));
	  }).then(function () {
	    return {
	      authentication: { session_id: sessionId },
	      options: opts
	    };
	  });
	}
	
	/**
	 * Returns the supplied parameter with
	 * the `execute` function added to it.
	 *
	 * @param {any} options
	 * @returns {Object} The `options` parameter
	 *                   with `execute` add to it
	 * @private
	 */
	function build(options) {
	  return (0, _merge2.default)(options, { execute: execute.bind(null, options) });
	}
	
	exports.default = {
	  build: build
	};
	module.exports = exports['default'];

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _merge = __webpack_require__(1);
	
	var _merge2 = _interopRequireDefault(_merge);
	
	var _bluebird = __webpack_require__(49);
	
	var _transactions = __webpack_require__(87);
	
	var _transactions2 = _interopRequireDefault(_transactions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Creates an object with
	 * the `account_id` and `jwt`from
	 * the supplied `options` param
	 *
	 * @param {any} options
	 * @returns {Object} an object containing
	 *                   a body property with
	 *                   the desired `jwt`
	 * @private
	 */
	/**
	 * @name sessionId
	 * @memberof strategies
	 * @private
	 */
	function execute(_ref) {
	  var accountId = _ref.account_id,
	      environment = _ref.environment,
	      impersonationKey = _ref.impersonationKey,
	      jwt = _ref.jwt,
	      options = _ref.options,
	      skipAuthentication = _ref.skipAuthentication;
	
	  var headers = environment === 'live' ? { 'X-Live': 1 } : {};
	
	  var body = {
	    account_id: accountId,
	    jwt: jwt
	  };
	
	  if (impersonationKey) {
	    body.impersonation_key = impersonationKey;
	  }
	
	  var opts = (0, _merge2.default)(options, {
	    body: body,
	    headers: headers
	  });
	
	  return _transactions2.default.calculateInstallmentsAmount(opts, { amount: 1, interest_rate: 100 }).catch(function (error) {
	    return skipAuthentication ? (0, _bluebird.resolve)(opts) : (0, _bluebird.reject)(error);
	  }).catch({ name: 'ApiError' }, function () {
	    return (0, _bluebird.reject)(new Error('You must supply a valid jwt token and a valid account_id'));
	  }).then(function () {
	    return {
	      authentication: { account_id: accountId, jwt: jwt },
	      options: opts
	    };
	  });
	}
	
	/**
	 * Returns the supplied parameter with
	 * the `execute` function added to it.
	 *
	 * @param {any} options
	 * @returns {Object} The `options` parameter
	 *                   with `execute` add to it
	 * @private
	 */
	function build(options) {
	  return (0, _merge2.default)(options, { execute: execute.bind(null, options) });
	}
	
	exports.default = {
	  build: build
	};
	module.exports = exports['default'];

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _transactions = __webpack_require__(87);
	
	var _transactions2 = _interopRequireDefault(_transactions);
	
	var _payables = __webpack_require__(109);
	
	var _payables2 = _interopRequireDefault(_payables);
	
	var _search = __webpack_require__(110);
	
	var _search2 = _interopRequireDefault(_search);
	
	var _user = __webpack_require__(111);
	
	var _user2 = _interopRequireDefault(_user);
	
	var _company = __webpack_require__(105);
	
	var _company2 = _interopRequireDefault(_company);
	
	var _companySegments = __webpack_require__(112);
	
	var _companySegments2 = _interopRequireDefault(_companySegments);
	
	var _chargebacks = __webpack_require__(113);
	
	var _chargebacks2 = _interopRequireDefault(_chargebacks);
	
	var _session = __webpack_require__(103);
	
	var _session2 = _interopRequireDefault(_session);
	
	var _invites = __webpack_require__(114);
	
	var _invites2 = _interopRequireDefault(_invites);
	
	var _splitRules = __webpack_require__(115);
	
	var _splitRules2 = _interopRequireDefault(_splitRules);
	
	var _antifraudAnalyses = __webpack_require__(116);
	
	var _antifraudAnalyses2 = _interopRequireDefault(_antifraudAnalyses);
	
	var _recipients = __webpack_require__(126);
	
	var _recipients2 = _interopRequireDefault(_recipients);
	
	var _bulkAnticipations = __webpack_require__(127);
	
	var _bulkAnticipations2 = _interopRequireDefault(_bulkAnticipations);
	
	var _bankAccounts = __webpack_require__(129);
	
	var _bankAccounts2 = _interopRequireDefault(_bankAccounts);
	
	var _plans = __webpack_require__(130);
	
	var _plans2 = _interopRequireDefault(_plans);
	
	var _acquirersConfigurations = __webpack_require__(131);
	
	var _acquirersConfigurations2 = _interopRequireDefault(_acquirersConfigurations);
	
	var _acquirers = __webpack_require__(132);
	
	var _acquirers2 = _interopRequireDefault(_acquirers);
	
	var _subscriptions = __webpack_require__(133);
	
	var _subscriptions2 = _interopRequireDefault(_subscriptions);
	
	var _cards = __webpack_require__(134);
	
	var _cards2 = _interopRequireDefault(_cards);
	
	var _transfers = __webpack_require__(135);
	
	var _transfers2 = _interopRequireDefault(_transfers);
	
	var _balance = __webpack_require__(136);
	
	var _balance2 = _interopRequireDefault(_balance);
	
	var _balanceOperations = __webpack_require__(137);
	
	var _balanceOperations2 = _interopRequireDefault(_balanceOperations);
	
	var _events = __webpack_require__(154);
	
	var _events2 = _interopRequireDefault(_events);
	
	var _gatewayOperations = __webpack_require__(155);
	
	var _gatewayOperations2 = _interopRequireDefault(_gatewayOperations);
	
	var _chargebackOperations = __webpack_require__(156);
	
	var _chargebackOperations2 = _interopRequireDefault(_chargebackOperations);
	
	var _postbacks = __webpack_require__(157);
	
	var _postbacks2 = _interopRequireDefault(_postbacks);
	
	var _security = __webpack_require__(158);
	
	var _security2 = _interopRequireDefault(_security);
	
	var _customers = __webpack_require__(219);
	
	var _customers2 = _interopRequireDefault(_customers);
	
	var _zipcodes = __webpack_require__(220);
	
	var _zipcodes2 = _interopRequireDefault(_zipcodes);
	
	var _paymentLinks = __webpack_require__(221);
	
	var _paymentLinks2 = _interopRequireDefault(_paymentLinks);
	
	var _pix = __webpack_require__(222);
	
	var _pix2 = _interopRequireDefault(_pix);
	
	var _status = __webpack_require__(223);
	
	var _status2 = _interopRequireDefault(_status);
	
	var _onboardingAnswers = __webpack_require__(224);
	
	var _onboardingAnswers2 = _interopRequireDefault(_onboardingAnswers);
	
	var _onboardingQuestions = __webpack_require__(225);
	
	var _onboardingQuestions2 = _interopRequireDefault(_onboardingQuestions);
	
	var _orders = __webpack_require__(226);
	
	var _orders2 = _interopRequireDefault(_orders);
	
	var _versions = __webpack_require__(227);
	
	var _versions2 = _interopRequireDefault(_versions);
	
	var _reprocessedTransactions = __webpack_require__(228);
	
	var _reprocessedTransactions2 = _interopRequireDefault(_reprocessedTransactions);
	
	var _refunds = __webpack_require__(229);
	
	var _refunds2 = _interopRequireDefault(_refunds);
	
	var _feePresets = __webpack_require__(230);
	
	var _feePresets2 = _interopRequireDefault(_feePresets);
	
	var _settlements = __webpack_require__(231);
	
	var _settlements2 = _interopRequireDefault(_settlements);
	
	var _credit = __webpack_require__(232);
	
	var _credit2 = _interopRequireDefault(_credit);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  company: _company2.default,
	  companySegments: _companySegments2.default,
	  chargebacks: _chargebacks2.default,
	  search: _search2.default,
	  session: _session2.default,
	  transactions: _transactions2.default,
	  payables: _payables2.default,
	  pixKeys: _pix2.default,
	  user: _user2.default,
	  invites: _invites2.default,
	  splitRules: _splitRules2.default,
	  antifraudAnalyses: _antifraudAnalyses2.default,
	  recipients: _recipients2.default,
	  bulkAnticipations: _bulkAnticipations2.default,
	  bankAccounts: _bankAccounts2.default,
	  plans: _plans2.default,
	  subscriptions: _subscriptions2.default,
	  cards: _cards2.default,
	  acquirersConfigurations: _acquirersConfigurations2.default,
	  acquirers: _acquirers2.default,
	  transfers: _transfers2.default,
	  balance: _balance2.default,
	  balanceOperations: _balanceOperations2.default,
	  events: _events2.default,
	  gatewayOperations: _gatewayOperations2.default,
	  chargebackOperations: _chargebackOperations2.default,
	  postbacks: _postbacks2.default,
	  security: _security2.default,
	  customers: _customers2.default,
	  zipcodes: _zipcodes2.default,
	  paymentLinks: _paymentLinks2.default,
	  settlements: _settlements2.default,
	  status: _status2.default,
	  onboardingAnswers: _onboardingAnswers2.default,
	  onboardingQuestions: _onboardingQuestions2.default,
	  orders: _orders2.default,
	  versions: _versions2.default,
	  reprocessedTransactions: _reprocessedTransactions2.default,
	  refunds: _refunds2.default,
	  feePresets: _feePresets2.default,
	  credit: _credit2.default
	};
	module.exports = exports['default'];

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _T = __webpack_require__(36);
	
	var _T2 = _interopRequireDefault(_T);
	
	var _has = __webpack_require__(38);
	
	var _has2 = _interopRequireDefault(_has);
	
	var _cond = __webpack_require__(45);
	
	var _cond2 = _interopRequireDefault(_cond);
	
	var _curry = __webpack_require__(13);
	
	var _curry2 = _interopRequireDefault(_curry);
	
	var _routes = __webpack_require__(89);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _request = __webpack_require__(90);
	
	var _request2 = _interopRequireDefault(_request);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var findTransaction = (0, _curry2.default)(function (opts, body) {
	  return _request2.default.get(opts, _routes2.default.payables.transaction(body.transactionId), {});
	}); /**
	     * @name Payables
	     * @description This module exposes functions
	     *              related to payables.
	     *
	     * @module payables
	     **/
	
	var findOne = (0, _curry2.default)(function (opts, body) {
	  return _request2.default.get(opts, _routes2.default.payables.find(body.id), {});
	});
	
	var findAll = (0, _curry2.default)(function (opts, pagination) {
	  return _request2.default.get(opts, _routes2.default.payables.base, pagination);
	});
	/**
	 * `GET /payables`
	 * Makes a request to /payables or to /payables/:id
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {Object} body The payload for the request.
	 * {@link https://pagarme.readme.io/v1/reference#retornando-um-recebível|API Reference for this payload}
	 * @param {Number} [body.id] The payable ID. If not sent a
	 * @param {Number} [body.transactionId] A transaction ID to get all
	 *                                      the payables.
	 * @param {Number} [body.count] Pagination option for transaction list.
	 *                              Number of transaction in a page
	 * @param {Number} [body.page] Pagination option for transaction list.
	 *                             The page index.
	*/
	var find = function find(opts, body) {
	  return (0, _cond2.default)([[(0, _has2.default)('id'), findOne(opts)], [(0, _has2.default)('transactionId'), findTransaction(opts)], [_T2.default, findAll(opts)]])(body);
	};
	
	/**
	 * `GET /payables`
	 * Makes a request to /payables
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {Object} body The payload for the request.
	 * {@link https://docs-beta.pagar.me/v1/reference#retornando-recebíveis}
	*/
	var all = function all(opts, body) {
	  return findAll(opts, body);
	};
	
	/**
	 * `GET /payables/days`
	 * Returns a company's payables  aggregated by day
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	*/
	var days = function days(opts, body) {
	  return _request2.default.get(opts, _routes2.default.payables.days, body);
	};
	
	exports.default = {
	  find: find,
	  all: all,
	  days: days
	};
	module.exports = exports['default'];

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _routes = __webpack_require__(89);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _request = __webpack_require__(90);
	
	var _request2 = _interopRequireDefault(_request);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * `GET /search`
	 * Creates a session from the given payload.
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 * @param {Object} query The ElasticSearch based
	 *                       query object to be sent.
	 * {@link https://pagarme.readme.io/v1/reference#elasticsearch|API Reference for this payload}
	 * @returns {Promise} Resolves to the result of
	 *                    the request or to an error.
	 */
	/**
	 * @name Search
	 * @description This module exposes functions
	 *              related to the `/search` path.
	 *
	 * @module search
	 **/
	
	var execute = function execute(opts, query) {
	  return _request2.default.get(opts, _routes2.default.search, query);
	};
	
	exports.default = execute;
	module.exports = exports['default'];

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _T = __webpack_require__(36);
	
	var _T2 = _interopRequireDefault(_T);
	
	var _has = __webpack_require__(38);
	
	var _has2 = _interopRequireDefault(_has);
	
	var _cond = __webpack_require__(45);
	
	var _cond2 = _interopRequireDefault(_cond);
	
	var _curry = __webpack_require__(13);
	
	var _curry2 = _interopRequireDefault(_curry);
	
	var _routes = __webpack_require__(89);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _request = __webpack_require__(90);
	
	var _request2 = _interopRequireDefault(_request);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var findOne = (0, _curry2.default)(function (opts, body) {
	  return _request2.default.get(opts, _routes2.default.user.details(body.id), {});
	}); /**
	     * @name User
	     * @description This module exposes functions
	     *              related to the `/users` path.
	     *
	     * @module user
	     **/
	
	var findAll = (0, _curry2.default)(function (opts, pagination) {
	  return _request2.default.get(opts, _routes2.default.user.base, pagination || {});
	});
	
	/**
	 * `GET /users`
	 * Makes a request to /users or to /users/:id
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {Object} body The payload for the request.
	 * @param {Number} [body.id] The user's ID. If not sent a
	 *                           users list will be returned instead.
	 * @param {Number} [body.count] Pagination option to get a list of users.
	 *                              Number of users in a page
	 * @param {Number} [body.page] Pagination option for a list of users.
	 *                             The page index.
	*/
	var find = function find(opts, body) {
	  return (0, _cond2.default)([[(0, _has2.default)('id'), findOne(opts)], [_T2.default, findAll(opts)]])(body);
	};
	
	/**
	 * `PUT /users/reset_password`
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 * @param {String} email The email of the account
	 *                       of which the password will
	 *                       be reset.
	 * @returns {Promise} Resolves to the result
	 *                    of the request or an error.
	 */
	var resetPassword = function resetPassword(opts, body) {
	  return _request2.default.put(opts, _routes2.default.user.resetPassword, body);
	};
	
	/**
	 * `PUT /users/redefine_password`
	 * Redefines a user's password based on a reset token
	 *
	 * @example
	 *
	 * client.user.redefinePassword()
	 *
	 * @param {Objec} opts An options params which
	 *                     is usually already bound
	 *                     by `connect` functions.
	 * @param {Object} body An object containing the
	 *                      reset token and email of
	 *                      the account.
	 * @returns {Promise} Resolves to the result
	 *                    of the request or an error.
	 */
	var redefinePassword = function redefinePassword(opts, body) {
	  return _request2.default.put(opts, _routes2.default.user.redefinePassword, body);
	};
	
	/**
	 * `POST /users/`
	 * Creates a user
	 *
	 * @param {Objec} opts An options params which
	 *                     is usually already bound
	 *                     by `connect` functions.
	 * @param {Object} body The payload for the request.
	 */
	var create = function create(opts, body) {
	  return _request2.default.post(opts, _routes2.default.user.base, body);
	};
	
	/**
	 * `GET /users`
	 * Makes a request to /users
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {Number} [body.count] Pagination option to get a list of users.
	 *                              Number of users in a page
	 * @param {Number} [body.page] Pagination option for a list of users.
	 *                             The page index.
	*/
	var all = function all(opts, body) {
	  return findAll(opts, body);
	};
	
	/**
	 * `DELETE /users/:id`
	 * Deletes an user from the given payload.
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {String} [body.id] - The user ID. If not sent an
	 *                           user list will be returned instead
	 *
	 * @returns {Promise} Resolves to the result of
	 *                    the request or to an error.
	 */
	var destroy = function destroy(opts, body) {
	  return _request2.default.delete(opts, _routes2.default.user.details(body.id), {});
	};
	
	/**
	 * `PUT /users/:id`
	 * Updates a user from the given payload.
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {Object} body The payload for the request
	 *
	 * @returns {Promise} A promise that resolves to
	 *                    the newly created user's
	 *                    data or to an error.
	 **/
	var update = function update(opts, body) {
	  return _request2.default.put(opts, _routes2.default.user.details(body.id), body);
	};
	
	/**
	 * `PUT /user/:id/update_password`
	 * Updates a user's password from the given payload.
	 *
	 * @example
	 *  client.user.updatePassword({ id:'123', current_password: 'foo', new_password: 'bar' })
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {Object} body The payload for the request
	 *
	 * @returns {Promise} A promise that resolves to
	 *                    the newly created user's
	 *                    data or to an error.
	 **/
	var updatePassword = function updatePassword(opts, body) {
	  return _request2.default.put(opts, _routes2.default.user.updatePassword(body.id), body);
	};
	
	/**
	 * `GET /user`
	 * Returns the currently authenticated user
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @returns {Promise} A promise that resolves to
	 *                    the newly created user's
	 *                    data or to an error.
	 */
	var current = function current(opts) {
	  return _request2.default.get(opts, _routes2.default.user.singular, {});
	};
	
	exports.default = {
	  all: all,
	  create: create,
	  current: current,
	  destroy: destroy,
	  find: find,
	  redefinePassword: redefinePassword,
	  resetPassword: resetPassword,
	  update: update,
	  updatePassword: updatePassword
	};
	module.exports = exports['default'];

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _routes = __webpack_require__(89);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _request = __webpack_require__(90);
	
	var _request2 = _interopRequireDefault(_request);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * `GET /company_segments`
	 * Makes a request to /company_segments
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	*/
	
	/**
	 * @name CompanySegments
	 * @description This module exposes functions
	 *              related to the `/company_segments` path.
	 *
	 * @module CompanySegments
	 **/
	
	var all = function all(opts) {
	  return _request2.default.get(opts, _routes2.default.companySegments);
	};
	
	exports.default = {
	  all: all
	};
	module.exports = exports['default'];

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _routes = __webpack_require__(89);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _request = __webpack_require__(90);
	
	var _request2 = _interopRequireDefault(_request);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * `GET /chargebacks`
	 * Finds chargebacks
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 * @param {Object} query The query object to be sent.
	 * {@link https://pagarme.readme.io/v1/reference#retornando-chargebacks|API Reference for this payload}
	 * @returns {Promise} Resolves to the result of
	 *                    the request or to an error.
	 */
	/**
	 * @name Chargebacks
	 * @description This module exposes functions
	 *              related to the `/chargebacks` path.
	 *
	 * @module chargebacks
	 **/
	
	var find = function find(opts, query) {
	  return _request2.default.get(opts, _routes2.default.chargebacks, query);
	};
	
	exports.default = {
	  find: find
	};
	module.exports = exports['default'];

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _T = __webpack_require__(36);
	
	var _T2 = _interopRequireDefault(_T);
	
	var _has = __webpack_require__(38);
	
	var _has2 = _interopRequireDefault(_has);
	
	var _cond = __webpack_require__(45);
	
	var _cond2 = _interopRequireDefault(_cond);
	
	var _curry = __webpack_require__(13);
	
	var _curry2 = _interopRequireDefault(_curry);
	
	var _routes = __webpack_require__(89);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _request = __webpack_require__(90);
	
	var _request2 = _interopRequireDefault(_request);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var findOne = (0, _curry2.default)(function (opts, body) {
	  return _request2.default.get(opts, _routes2.default.invites.details(body.id), {});
	}); /**
	     * @name Invites
	     * @description This module exposes functions
	     *              related to the `/invites` path.
	     *
	     * @module invites
	     **/
	
	var findAll = function findAll(opts) {
	  return _request2.default.get(opts, _routes2.default.invites.base, {});
	};
	
	/**
	 * `GET /invites`
	 * Makes a request to /invites or to /invites/:id
	 *
	 * @param {Object} opts - An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {Object} body - The payload for the request.
	 * @param {String} [body.id] - The invite ID. If not sent an
	 *                           invite list will be returned instead
	 */
	var find = function find(opts) {
	  var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  return (0, _cond2.default)([[(0, _has2.default)('id'), findOne(opts)], [_T2.default, function () {
	    return findAll(opts);
	  }]])(body);
	};
	
	/**
	 * `GET /invites`
	 * Makes a request to /invites to get all invites.
	 *
	*/
	var all = function all(opts) {
	  return findAll(opts);
	};
	
	/**
	 * `POST /invites`
	 * Creates an invite from the given payload.
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {Object} body A payload that contains
	 *                      email and permission
	 *                      of the invited person.
	 *
	 * @returns {Promise} Resolves to the result of
	 *                    the request or to an error.
	 */
	var create = function create(opts, body) {
	  return _request2.default.post(opts, _routes2.default.invites.base, body);
	};
	
	/**
	 * `DELETE /invites`
	 * Deletes an invite from the given payload.
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {String} [body.id] - The invite ID. If not sent an
	 *                           invite list will be returned instead
	 *
	 * @returns {Promise} Resolves to the result of
	 *                    the request or to an error.
	 */
	var destroy = function destroy(opts, body) {
	  return _request2.default.delete(opts, _routes2.default.invites.details(body.id), {});
	};
	
	exports.default = {
	  find: find,
	  all: all,
	  create: create,
	  destroy: destroy
	};
	module.exports = exports['default'];

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _has = __webpack_require__(38);
	
	var _has2 = _interopRequireDefault(_has);
	
	var _both = __webpack_require__(39);
	
	var _both2 = _interopRequireDefault(_both);
	
	var _cond = __webpack_require__(45);
	
	var _cond2 = _interopRequireDefault(_cond);
	
	var _curry = __webpack_require__(13);
	
	var _curry2 = _interopRequireDefault(_curry);
	
	var _routes = __webpack_require__(89);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _request = __webpack_require__(90);
	
	var _request2 = _interopRequireDefault(_request);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var findAll = (0, _curry2.default)(function (opts, body) {
	  return _request2.default.get(opts, _routes2.default.splitRules.findAll(body.transactionId), {});
	}); /**
	     * @name Split Rules
	     * @description This module exposes functions
	     *              related to the `/transactions/:transactionId/split_rules` path.
	     *
	     * @module splitRules
	     **/
	
	var findOne = (0, _curry2.default)(function (opts, body) {
	  var transactionId = body.transactionId,
	      id = body.id;
	
	  return _request2.default.get(opts, _routes2.default.splitRules.find(transactionId, id), {});
	});
	
	/**
	 * `GET /transactions/:transactionId/split_rules`
	 * Makes a request to /transactions/:transactionId/split_rules or
	 * to /transactions/:transactionId/split_rules/:id
	 *
	 * @param {Object} opts - An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {Object} body - The payload for the request.
	 * {@link https://pagarme.readme.io/v1/reference#retornando-as-regras-de-divisão-de-uma-transação|API Reference for this payload}
	 * @param {Number} body.transactionId - A specific transaction ID
	 *
	 * @param {Number} [body.id] - The splitRule's ID. If not sent, a splitRules
	 *                                                 list will be returned
	 *                                                 instead.
	 */
	var find = function find(opts, body) {
	  return (0, _cond2.default)([[(0, _both2.default)((0, _has2.default)('transactionId'), (0, _has2.default)('id')), findOne(opts)], [(0, _has2.default)('transactionId'), findAll(opts)]])(body);
	};
	
	exports.default = {
	  find: find
	};
	module.exports = exports['default'];

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _omit = __webpack_require__(117);
	
	var _omit2 = _interopRequireDefault(_omit);
	
	var _has = __webpack_require__(38);
	
	var _has2 = _interopRequireDefault(_has);
	
	var _both = __webpack_require__(39);
	
	var _both2 = _interopRequireDefault(_both);
	
	var _cond = __webpack_require__(45);
	
	var _cond2 = _interopRequireDefault(_cond);
	
	var _curry = __webpack_require__(13);
	
	var _curry2 = _interopRequireDefault(_curry);
	
	var _routes = __webpack_require__(89);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _request = __webpack_require__(90);
	
	var _request2 = _interopRequireDefault(_request);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var findAll = (0, _curry2.default)(function (opts, body) {
	  return _request2.default.get(opts, _routes2.default.antifraudAnalyses.findAll(body.transactionId), {});
	}); /**
	     * @name Antifraud Analyses
	     * @description This module exposes functions
	     *              related to the `/transactions/:transactionId/antifraud_analyses` path.
	     *
	     * @module antifraudAnalyses
	     **/
	
	var findOne = (0, _curry2.default)(function (opts, body) {
	  var transactionId = body.transactionId,
	      id = body.id;
	
	  return _request2.default.get(opts, _routes2.default.antifraudAnalyses.find(transactionId, id), {});
	});
	
	/**
	 * `GET /transactions/:transactionId/antifraud_analyses`
	 * Makes a request to /transactions/:transactionId/antifraud_analyses or
	 * to /transactions/:transactionId/antifraud_analyses/:id
	 *
	 * @param {Object} opts - An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {Object} body - The payload for the request.
	 * {@link https://pagarme.readme.io/v1/reference#retornando-uma-análise-antifraude|API Reference for this payload}
	 * @param {Number} body.transactionId - A specific transaction ID
	 *
	 * @param {Number} [body.id] - The antifraud analyses' ID. If not sent,
	 *                             a antifraud analyses list will be returned instead.
	 */
	var find = function find(opts, body) {
	  return (0, _cond2.default)([[(0, _both2.default)((0, _has2.default)('transactionId'), (0, _has2.default)('id')), findOne(opts)], [(0, _has2.default)('transactionId'), findAll(opts)]])(body);
	};
	
	/**
	 * `POST /transactions/:transactionId/antifraud_analyses`
	 * Makes a request to /transactions/:transactionId/antifraud_analyses
	 *
	 * @param {Object} opts - An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {Object} body - The payload for the request.
	 * {@link https://pagarme.readme.io/v1/reference#criando-uma-análise-antifraude|API Reference for this payload}
	 * @param {Number} body.transactionId - A specific transaction ID
	 *
	 * @returns {Promise} Resolves to the result of
	 *                    the request or to an error.
	 */
	var create = function create(opts, body) {
	  var transactionId = body.transactionId;
	
	  return _request2.default.post(opts, _routes2.default.antifraudAnalyses.create(transactionId), (0, _omit2.default)(['transactionId'], body));
	};
	
	exports.default = {
	  find: find,
	  create: create
	};
	module.exports = exports['default'];

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	var _contains = __webpack_require__(118);
	var _curry2 = __webpack_require__(5);
	
	
	/**
	 * Returns a partial copy of an object omitting the keys specified.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Object
	 * @sig [String] -> {String: *} -> {String: *}
	 * @param {Array} names an array of String property names to omit from the new object
	 * @param {Object} obj The object to copy from
	 * @return {Object} A new object with properties from `names` not on it.
	 * @see R.pick
	 * @example
	 *
	 *      R.omit(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, c: 3}
	 */
	module.exports = _curry2(function omit(names, obj) {
	  var result = {};
	  for (var prop in obj) {
	    if (!_contains(prop, names)) {
	      result[prop] = obj[prop];
	    }
	  }
	  return result;
	});


/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	var _indexOf = __webpack_require__(119);
	
	
	module.exports = function _contains(a, list) {
	  return _indexOf(list, a, 0) >= 0;
	};


/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	var equals = __webpack_require__(120);
	
	
	module.exports = function _indexOf(list, a, idx) {
	  var inf, item;
	  // Array.prototype.indexOf doesn't exist below IE9
	  if (typeof list.indexOf === 'function') {
	    switch (typeof a) {
	      case 'number':
	        if (a === 0) {
	          // manually crawl the list to distinguish between +0 and -0
	          inf = 1 / a;
	          while (idx < list.length) {
	            item = list[idx];
	            if (item === 0 && 1 / item === inf) {
	              return idx;
	            }
	            idx += 1;
	          }
	          return -1;
	        } else if (a !== a) {
	          // NaN
	          while (idx < list.length) {
	            item = list[idx];
	            if (typeof item === 'number' && item !== item) {
	              return idx;
	            }
	            idx += 1;
	          }
	          return -1;
	        }
	        // non-zero numbers can utilise Set
	        return list.indexOf(a, idx);
	
	      // all these types can utilise Set
	      case 'string':
	      case 'boolean':
	      case 'function':
	      case 'undefined':
	        return list.indexOf(a, idx);
	
	      case 'object':
	        if (a === null) {
	          // null can utilise Set
	          return list.indexOf(a, idx);
	        }
	    }
	  }
	  // anything else not covered above, defer to R.equals
	  while (idx < list.length) {
	    if (equals(list[idx], a)) {
	      return idx;
	    }
	    idx += 1;
	  }
	  return -1;
	};


/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	var _curry2 = __webpack_require__(5);
	var _equals = __webpack_require__(121);
	
	
	/**
	 * Returns `true` if its arguments are equivalent, `false` otherwise. Handles
	 * cyclical data structures.
	 *
	 * Dispatches symmetrically to the `equals` methods of both arguments, if
	 * present.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.15.0
	 * @category Relation
	 * @sig a -> b -> Boolean
	 * @param {*} a
	 * @param {*} b
	 * @return {Boolean}
	 * @example
	 *
	 *      R.equals(1, 1); //=> true
	 *      R.equals(1, '1'); //=> false
	 *      R.equals([1, 2, 3], [1, 2, 3]); //=> true
	 *
	 *      var a = {}; a.v = a;
	 *      var b = {}; b.v = b;
	 *      R.equals(a, b); //=> true
	 */
	module.exports = _curry2(function equals(a, b) {
	  return _equals(a, b, [], []);
	});


/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	var _arrayFromIterator = __webpack_require__(122);
	var _functionName = __webpack_require__(123);
	var _has = __webpack_require__(4);
	var identical = __webpack_require__(124);
	var keys = __webpack_require__(29);
	var type = __webpack_require__(125);
	
	
	module.exports = function _equals(a, b, stackA, stackB) {
	  if (identical(a, b)) {
	    return true;
	  }
	
	  if (type(a) !== type(b)) {
	    return false;
	  }
	
	  if (a == null || b == null) {
	    return false;
	  }
	
	  if (typeof a.equals === 'function' || typeof b.equals === 'function') {
	    return typeof a.equals === 'function' && a.equals(b) &&
	           typeof b.equals === 'function' && b.equals(a);
	  }
	
	  switch (type(a)) {
	    case 'Arguments':
	    case 'Array':
	    case 'Object':
	      if (typeof a.constructor === 'function' &&
	          _functionName(a.constructor) === 'Promise') {
	        return a === b;
	      }
	      break;
	    case 'Boolean':
	    case 'Number':
	    case 'String':
	      if (!(typeof a === typeof b && identical(a.valueOf(), b.valueOf()))) {
	        return false;
	      }
	      break;
	    case 'Date':
	      if (!identical(a.valueOf(), b.valueOf())) {
	        return false;
	      }
	      break;
	    case 'Error':
	      return a.name === b.name && a.message === b.message;
	    case 'RegExp':
	      if (!(a.source === b.source &&
	            a.global === b.global &&
	            a.ignoreCase === b.ignoreCase &&
	            a.multiline === b.multiline &&
	            a.sticky === b.sticky &&
	            a.unicode === b.unicode)) {
	        return false;
	      }
	      break;
	    case 'Map':
	    case 'Set':
	      if (!_equals(_arrayFromIterator(a.entries()), _arrayFromIterator(b.entries()), stackA, stackB)) {
	        return false;
	      }
	      break;
	    case 'Int8Array':
	    case 'Uint8Array':
	    case 'Uint8ClampedArray':
	    case 'Int16Array':
	    case 'Uint16Array':
	    case 'Int32Array':
	    case 'Uint32Array':
	    case 'Float32Array':
	    case 'Float64Array':
	      break;
	    case 'ArrayBuffer':
	      break;
	    default:
	      // Values of other types are only equal if identical.
	      return false;
	  }
	
	  var keysA = keys(a);
	  if (keysA.length !== keys(b).length) {
	    return false;
	  }
	
	  var idx = stackA.length - 1;
	  while (idx >= 0) {
	    if (stackA[idx] === a) {
	      return stackB[idx] === b;
	    }
	    idx -= 1;
	  }
	
	  stackA.push(a);
	  stackB.push(b);
	  idx = keysA.length - 1;
	  while (idx >= 0) {
	    var key = keysA[idx];
	    if (!(_has(key, b) && _equals(b[key], a[key], stackA, stackB))) {
	      return false;
	    }
	    idx -= 1;
	  }
	  stackA.pop();
	  stackB.pop();
	  return true;
	};


/***/ },
/* 122 */
/***/ function(module, exports) {

	module.exports = function _arrayFromIterator(iter) {
	  var list = [];
	  var next;
	  while (!(next = iter.next()).done) {
	    list.push(next.value);
	  }
	  return list;
	};


/***/ },
/* 123 */
/***/ function(module, exports) {

	module.exports = function _functionName(f) {
	  // String(x => x) evaluates to "x => x", so the pattern may not match.
	  var match = String(f).match(/^function (\w*)/);
	  return match == null ? '' : match[1];
	};


/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	var _curry2 = __webpack_require__(5);
	
	
	/**
	 * Returns true if its arguments are identical, false otherwise. Values are
	 * identical if they reference the same memory. `NaN` is identical to `NaN`;
	 * `0` and `-0` are not identical.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.15.0
	 * @category Relation
	 * @sig a -> a -> Boolean
	 * @param {*} a
	 * @param {*} b
	 * @return {Boolean}
	 * @example
	 *
	 *      var o = {};
	 *      R.identical(o, o); //=> true
	 *      R.identical(1, 1); //=> true
	 *      R.identical(1, '1'); //=> false
	 *      R.identical([], []); //=> false
	 *      R.identical(0, -0); //=> false
	 *      R.identical(NaN, NaN); //=> true
	 */
	module.exports = _curry2(function identical(a, b) {
	  // SameValue algorithm
	  if (a === b) { // Steps 1-5, 7-10
	    // Steps 6.b-6.e: +0 != -0
	    return a !== 0 || 1 / a === 1 / b;
	  } else {
	    // Step 6.a: NaN == NaN
	    return a !== a && b !== b;
	  }
	});


/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	var _curry1 = __webpack_require__(6);
	
	
	/**
	 * Gives a single-word string description of the (native) type of a value,
	 * returning such answers as 'Object', 'Number', 'Array', or 'Null'. Does not
	 * attempt to distinguish user Object types any further, reporting them all as
	 * 'Object'.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.8.0
	 * @category Type
	 * @sig (* -> {*}) -> String
	 * @param {*} val The value to test
	 * @return {String}
	 * @example
	 *
	 *      R.type({}); //=> "Object"
	 *      R.type(1); //=> "Number"
	 *      R.type(false); //=> "Boolean"
	 *      R.type('s'); //=> "String"
	 *      R.type(null); //=> "Null"
	 *      R.type([]); //=> "Array"
	 *      R.type(/[A-z]/); //=> "RegExp"
	 */
	module.exports = _curry1(function type(val) {
	  return val === null      ? 'Null'      :
	         val === undefined ? 'Undefined' :
	         Object.prototype.toString.call(val).slice(8, -1);
	});


/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _T = __webpack_require__(36);
	
	var _T2 = _interopRequireDefault(_T);
	
	var _has = __webpack_require__(38);
	
	var _has2 = _interopRequireDefault(_has);
	
	var _cond = __webpack_require__(45);
	
	var _cond2 = _interopRequireDefault(_cond);
	
	var _curry = __webpack_require__(13);
	
	var _curry2 = _interopRequireDefault(_curry);
	
	var _routes = __webpack_require__(89);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _request = __webpack_require__(90);
	
	var _request2 = _interopRequireDefault(_request);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var findOne = (0, _curry2.default)(function (opts, body) {
	  return _request2.default.get(opts, _routes2.default.recipients.details(body.id), {});
	}); /**
	     * @name Recipients
	     * @description This module exposes functions
	     *              related to the `/recipients` path.
	     *
	     * @module recipients
	     **/
	
	var findAll = (0, _curry2.default)(function (opts, pagination) {
	  return _request2.default.get(opts, _routes2.default.recipients.base, pagination || {});
	});
	
	/**
	 * `GET /recipients`
	 * Makes a request to /recipients or to /recipients/:id
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {Object} body The payload for the request.
	 * {@link https://pagarme.readme.io/v1/reference#retornando-um-recebedor|API Reference for this payload}
	 * @param {String} [body.id] The recipient ID. If not sent a
	 *                           recipient list will be returned instead.
	 * @param {Number} [body.count] Pagination option for recipient list.
	 *                              Number of recipient in a page
	 * @param {Number} [body.page] Pagination option for recipient list.
	 *                             The page index.
	*/
	var find = function find(opts, body) {
	  return (0, _cond2.default)([[(0, _has2.default)('id'), findOne(opts)], [_T2.default, findAll(opts)]])(body);
	};
	
	/**
	 * `GET /recipients`
	 * Makes a request to /recipients to get all recipients.
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {Number} [body.count] Pagination option for recipient list.
	 *                              Number of recipient in a page
	 * @param {Number} [body.page] Pagination option for recipient list.
	 *                             The page index.
	*/
	var all = function all(opts, body) {
	  return findAll(opts, body);
	};
	
	/**
	 * `POST /recipients`
	 * Creates a recipient from the given payload.
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 * @param {Object} body The payload for the request
	 * {@link https://pagarme.readme.io/v1/reference#criando-um-recebedor|API Reference for this payload}
	 *
	 * @returns {Promise} Resolves to the result of
	 *                    the request or to an error.
	 */
	var create = function create(opts, body) {
	  return _request2.default.post(opts, _routes2.default.recipients.base, body);
	};
	
	/**
	 * `PUT /recipients/:id`
	 * Creates a recipient from the given payload.
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 * @param {Object} body The payload for the request
	 * {@link https://pagarme.readme.io/v1/reference#atualizando-um-recebedor|API Reference for this payload}
	 * @param {String} body.id The recipient Id
	 *
	 * @returns {Promise} Resolves to the result of
	 *                    the request or to an error.
	 */
	var update = function update(opts, body) {
	  return _request2.default.put(opts, _routes2.default.recipients.details(body.id), body);
	};
	
	exports.default = {
	  find: find,
	  all: all,
	  create: create,
	  update: update
	};
	module.exports = exports['default'];

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _T = __webpack_require__(36);
	
	var _T2 = _interopRequireDefault(_T);
	
	var _has = __webpack_require__(38);
	
	var _has2 = _interopRequireDefault(_has);
	
	var _cond = __webpack_require__(45);
	
	var _cond2 = _interopRequireDefault(_cond);
	
	var _dissoc = __webpack_require__(128);
	
	var _dissoc2 = _interopRequireDefault(_dissoc);
	
	var _curry = __webpack_require__(13);
	
	var _curry2 = _interopRequireDefault(_curry);
	
	var _routes = __webpack_require__(89);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _request = __webpack_require__(90);
	
	var _request2 = _interopRequireDefault(_request);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var findOne = (0, _curry2.default)(function (opts, body) {
	  return _request2.default.get(opts, _routes2.default.bulkAnticipations.details(body.recipientId, body.id), {});
	}); /**
	     * @name Bulk Anticipations
	     * @description This module exposes functions
	     *              related to the `/recipients/:recipient_id/bulk_anticipations` path.
	     *
	     * @module bulkAnticipations
	     **/
	
	var findAll = (0, _curry2.default)(function (opts, body) {
	  return _request2.default.get(opts, _routes2.default.bulkAnticipations.base(body.recipientId), (0, _dissoc2.default)('recipientId', body));
	});
	
	/**
	 * `GET /recipients/:recipient_id/bulk_anticipations`
	 * Makes a request to /recipients/:recipient_id/bulk_anticipations
	 * or to /recipients/:recipient_id/bulk_anticipations/:id
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {Object} body The payload for the request.
	 * {@link https://pagarme.readme.io/v1/reference#retornando-todas-as-antecipações|API Reference for this payload}
	 * @param {String} body.recipientId The recipient ID.
	 * @param {String} [body.id] The bulkAnticipation ID. If not sent a
	 *                           bulkAnticipation list will be returned instead.
	 * @param {Number} [body.count] Pagination option for bulkAnticipation list.
	 *                              Number of bulkAnticipation in a page
	 * @param {Number} [body.page] Pagination option for bulkAnticipation list.
	 *                             The page index.
	*/
	var find = function find(opts, body) {
	  return (0, _cond2.default)([[(0, _has2.default)('id'), findOne(opts)], [_T2.default, findAll(opts)]])(body);
	};
	
	var all = function all(opts, body) {
	  return findAll(opts, body);
	};
	
	/**
	 * `POST /recipients/:recipient_id/bulk_anticipations`
	 * Creates a bulkAnticipation from the given payload.
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 * @param {Object} body The payload for the request
	 * {@link https://pagarme.readme.io/v1/reference#criando-uma-antecipação|API Reference for this payload}
	 * @param {String} body.recipientId The recipient ID.
	 *
	 * @returns {Promise} Resolves to the result of
	 *                    the request or to an error.
	 */
	var create = function create(opts, body) {
	  return _request2.default.post(opts, _routes2.default.bulkAnticipations.base(body.recipientId), body);
	};
	
	/**
	 * `PUT /recipients/:recipient_id/bulk_anticipations/:id`
	 * Updates a bulkAnticipation from the given payload.
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 * @param {Object} body The payload for the request
	 * @param {String} body.recipientId The recipient ID.
	 * @param {String} body.id The bulkAnticipation Id
	 *
	 * @returns {Promise} Resolves to the result of
	 *                    the request or to an error.
	 */
	var update = function update(opts, body) {
	  return _request2.default.put(opts, _routes2.default.bulkAnticipations.details(body.recipientId, body.id), body);
	};
	
	/**
	 * `DELETE /recipients/:recipient_id/bulk_anticipations/:id`
	 * Deletes a bulkAnticipation.
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 * @param {Object} body The payload for the request
	 * {@link https://pagarme.readme.io/v1/reference#deletando-uma-antecipação-building|API Reference for this payload}
	 * @param {String} body.recipientId The recipient ID.
	 * @param {String} body.id The bulkAnticipation Id
	 *
	 * @returns {Promise} Resolves to the result of
	 *                    the request or to an error.
	 */
	var destroy = function destroy(opts, body) {
	  return _request2.default.delete(opts, _routes2.default.bulkAnticipations.details(body.recipientId, body.id), body);
	};
	
	/**
	 * `GET /recipients/:recipient_id/bulk_anticipations/limits`
	 * Get bulk anticipations limits for a recipient.
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 * @param {Object} body The payload for the request
	 * {@link https://pagarme.readme.io/v1/reference#obtendo-os-limites-de-antecipação|API Reference for this payload}
	 * @param {String} body.recipientId The recipient ID.
	 *
	 * @returns {Promise} Resolves to the result of
	 *                    the request or to an error.
	 */
	var limits = function limits(opts, body) {
	  return _request2.default.get(opts, _routes2.default.bulkAnticipations.limits(body.recipientId), (0, _dissoc2.default)('recipientId', body));
	};
	
	/**
	 * `GET /recipients/:recipient_id/bulk_anticipations/:id/days`
	 * Get bulk anticipations days.
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 * @param {Object} body The payload for the request
	 * @param {String} body.recipientId The recipient ID.
	 * @param {String} body.id The bulkAnticipation Id
	 *
	 * @returns {Promise} Resolves to the result of
	 *                    the request or to an error.
	 */
	var days = function days(opts, body) {
	  return _request2.default.get(opts, _routes2.default.bulkAnticipations.days(body.recipientId, body.id), body);
	};
	
	/**
	 * `POST /recipients/:recipient_id/bulk_anticipations/:id/confirm`
	 * Confirm a bulk anticipation.
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 * @param {Object} body The payload for the request
	 * {@link https://pagarme.readme.io/v1/reference#confirmando-uma-antecipação-building|API Reference for this payload}
	 * @param {String} body.recipientId The recipient ID.
	 * @param {String} body.id The bulkAnticipation Id
	 *
	 * @returns {Promise} Resolves to the result of
	 *                    the request or to an error.
	 */
	var confirm = function confirm(opts, body) {
	  return _request2.default.post(opts, _routes2.default.bulkAnticipations.confirm(body.recipientId, body.id), body);
	};
	
	/**
	 * `POST /recipients/:recipient_id/bulk_anticipations/:id/cancel`
	 * Cancel a bulk anticipation.
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 * @param {Object} body The payload for the request
	 * @param {String} body.recipientId The recipient ID.
	 * @param {String} body.id The bulkAnticipation Id
	 *
	 * @returns {Promise} Resolves to the result of
	 *                    the request or to an error.
	 */
	var cancel = function cancel(opts, body) {
	  return _request2.default.post(opts, _routes2.default.bulkAnticipations.cancel(body.recipientId, body.id), body);
	};
	
	exports.default = {
	  find: find,
	  all: all,
	  create: create,
	  update: update,
	  destroy: destroy,
	  limits: limits,
	  days: days,
	  confirm: confirm,
	  cancel: cancel
	};
	module.exports = exports['default'];

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	var _curry2 = __webpack_require__(5);
	
	
	/**
	 * Returns a new object that does not contain a `prop` property.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.10.0
	 * @category Object
	 * @sig String -> {k: v} -> {k: v}
	 * @param {String} prop the name of the property to dissociate
	 * @param {Object} obj the object to clone
	 * @return {Object} a new object similar to the original but without the specified property
	 * @see R.assoc
	 * @example
	 *
	 *      R.dissoc('b', {a: 1, b: 2, c: 3}); //=> {a: 1, c: 3}
	 */
	module.exports = _curry2(function dissoc(prop, obj) {
	  var result = {};
	  for (var p in obj) {
	    if (p !== prop) {
	      result[p] = obj[p];
	    }
	  }
	  return result;
	});


/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _T = __webpack_require__(36);
	
	var _T2 = _interopRequireDefault(_T);
	
	var _has = __webpack_require__(38);
	
	var _has2 = _interopRequireDefault(_has);
	
	var _cond = __webpack_require__(45);
	
	var _cond2 = _interopRequireDefault(_cond);
	
	var _curry = __webpack_require__(13);
	
	var _curry2 = _interopRequireDefault(_curry);
	
	var _routes = __webpack_require__(89);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _request = __webpack_require__(90);
	
	var _request2 = _interopRequireDefault(_request);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var findOne = (0, _curry2.default)(function (opts, body) {
	  return _request2.default.get(opts, _routes2.default.bankAccounts.details(body.id), {});
	}); /**
	     * @name BankAccounts
	     * @description This module exposes functions
	     *              related to the `/bank_accounts` path.
	     *
	     * @module bankAccounts
	     **/
	
	var findAll = (0, _curry2.default)(function (opts, pagination) {
	  return _request2.default.get(opts, _routes2.default.bankAccounts.base, pagination || {});
	});
	
	/**
	 * `GET /bank_accounts`
	 * Makes a request to /bank_accounts
	 *
	 * @param {Object} opts - An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {Object} body - The payload for the request.
	 * {@link https://pagarme.readme.io/v1/reference#retornando-várias-contas-bancárias|API Reference for this payload}
	 * @param {Number} [body.count] - Pagination option for a bank account list.
	 *                                Number of bank accounts in a page
	 * @param {Number} [body.page] - Pagination option for bank account list.
	 *                               The page index.
	*/
	var all = function all(opts, body) {
	  return findAll(opts, body);
	};
	
	/**
	 * `GET /bank_accounts`
	 * Makes a request to /bank_accounts or to /bank_accounts/:id
	 *
	 * @param {Object} opts - An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {Object} body - The payload for the request.
	 * {@link https://pagarme.readme.io/v1/reference#retornando-uma-conta-bancária|API Reference for this payload}
	 * @param {Number} [body.id] - The bankAccount ID. If not sent a
	 *                             bankAccounts list will be returned instead.
	 * @param {Number} [body.count] - Pagination option for a bank account list.
	 *                                Number of bank accounts in a page
	 * @param {Number} [body.page] - Pagination option for bank account list.
	 *                               The page index.
	*/
	var find = function find(opts, body) {
	  return (0, _cond2.default)([[(0, _has2.default)('id'), findOne(opts)], [_T2.default, findAll(opts)]])(body);
	};
	
	/**
	 * `POST /bank_accounts`
	 * Creates a bank account from the given payload.
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 * @param {Object} body The payload for the request
	 * {@link https://pagarme.readme.io/v1/reference#criando-uma-conta-bancária|API Reference for this payload}
	 *
	 * @returns {Promise} Resolves to the result of
	 *                    the request or to an error.
	 */
	var create = function create(opts, body) {
	  return _request2.default.post(opts, _routes2.default.bankAccounts.base, body);
	};
	
	exports.default = {
	  all: all,
	  create: create,
	  find: find
	};
	module.exports = exports['default'];

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _T = __webpack_require__(36);
	
	var _T2 = _interopRequireDefault(_T);
	
	var _has = __webpack_require__(38);
	
	var _has2 = _interopRequireDefault(_has);
	
	var _cond = __webpack_require__(45);
	
	var _cond2 = _interopRequireDefault(_cond);
	
	var _curry = __webpack_require__(13);
	
	var _curry2 = _interopRequireDefault(_curry);
	
	var _routes = __webpack_require__(89);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _request = __webpack_require__(90);
	
	var _request2 = _interopRequireDefault(_request);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var findOne = (0, _curry2.default)(function (opts, body) {
	  return _request2.default.get(opts, _routes2.default.plans.details(body.id), {});
	}); /**
	     * @name Plans
	     * @description This module exposes functions
	     *              related to the `/plans` path.
	     *
	     * @module plans
	     **/
	
	var findAll = (0, _curry2.default)(function (opts, pagination) {
	  return _request2.default.get(opts, _routes2.default.plans.base, pagination || {});
	});
	
	/**
	 * `GET /plans`
	 * Makes a request to /plans or to /plans/:id
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {Object} body The payload for the request.
	 * {@link https://pagarme.readme.io/v1/reference#retornando-um-plano|API Reference for this payload}
	 * @param {Number} [body.id] The plan's ID. If not sent a
	 *                           plans list will be returned instead.
	 * @param {Number} [body.count] Pagination option to get a list of plans.
	 *                              Number of plans in a page
	 * @param {Number} [body.page] Pagination option for a list of plans.
	 *                             The page index.
	*/
	var find = function find(opts, body) {
	  return (0, _cond2.default)([[(0, _has2.default)('id'), findOne(opts)], [_T2.default, findAll(opts)]])(body);
	};
	
	/**
	 * `GET /plans`
	 * Makes a request to /plans
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {Object} body The payload for the request.
	 * {@link https://pagarme.readme.io/v1/reference#retornando-planos|API Reference for this payload}
	 * @param {Number} [body.count] Pagination option to get a list of plans.
	 *                              Number of plans in a page
	 * @param {Number} [body.page] Pagination option for a list of plans.
	 *                             The page index.
	*/
	var all = function all(opts, pagination) {
	  return findAll(opts, pagination);
	};
	
	/**
	 * `POST /plans`
	 * Creates a plan from the given payload.
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 * @param {Object} body The payload for the request
	 * {@link https://pagarme.readme.io/v1/reference#criando-planos|API Reference for this payload}
	 *
	 * @returns {Promise} Resolves to the result of
	 *                    the request or to an error.
	 */
	var create = function create(opts, body) {
	  return _request2.default.post(opts, _routes2.default.plans.base, body);
	};
	
	/**
	 * `PUT /plans/:id`
	 * Updates a plans from the given payload.
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {Object} body The payload for the request
	 * {@link https://pagarme.readme.io/v1/reference#atualizando-planos|API Reference for this payload}
	 * @param {Number} body.id The plan's ID
	 * @param {String} [body.name] The plan's name
	 * @param {Number} [body.trial_days] The number of days to test the plan with
	 *                                   no charges
	 * @returns {Promise} A promise that resolves to
	 *                    the newly created plans's
	 *                    data or to an error.
	 */
	var update = function update(opts, body) {
	  return _request2.default.put(opts, _routes2.default.plans.details(body.id), body);
	};
	
	exports.default = {
	  all: all,
	  find: find,
	  findAll: findAll,
	  create: create,
	  update: update
	};
	module.exports = exports['default'];

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _T = __webpack_require__(36);
	
	var _T2 = _interopRequireDefault(_T);
	
	var _has = __webpack_require__(38);
	
	var _has2 = _interopRequireDefault(_has);
	
	var _cond = __webpack_require__(45);
	
	var _cond2 = _interopRequireDefault(_cond);
	
	var _curry = __webpack_require__(13);
	
	var _curry2 = _interopRequireDefault(_curry);
	
	var _routes = __webpack_require__(89);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _request = __webpack_require__(90);
	
	var _request2 = _interopRequireDefault(_request);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var findOne = (0, _curry2.default)(function (opts, body) {
	  return _request2.default.get(opts, _routes2.default.acquirersConfigurations.details(body.id), {});
	}); /**
	     * @name Acquirer's Configurations
	     * @description This module exposes functions
	     *              related to the `/acquirers_configurations` and
	     *              `/acquirers_configuration` paths.
	     *
	     * @module acquirersConfigurations
	     **/
	
	var findAll = (0, _curry2.default)(function (opts, pagination) {
	  return _request2.default.get(opts, _routes2.default.acquirersConfigurations.base, pagination || {});
	});
	
	/**
	 * `GET /acquirers_configurations`
	 * Makes a request to /acquirers_configurations or to /acquirers_configuration/:id
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {Object} body The payload for the request.
	 * @param {Number} [body.id]  The acquirer's configuration ID. If not sent a
	 *                            list of acquirer's configuration will be returned instead.
	 * @param {Number} [body.count] Pagination option to get a list of acquirer's
	 *                              configurations.
	 *                              Number of configurations in a page
	 * @param {Number} [body.page] Pagination option for a list of acquirer's
	 *                             configurations.
	 *                             The page index.
	*/
	var find = function find(opts, body) {
	  return (0, _cond2.default)([[(0, _has2.default)('id'), findOne(opts)], [_T2.default, findAll(opts)]])(body);
	};
	
	/**
	 * `GET /acquirers_configurations`
	 * Makes a request to /acquirers_configurations
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {Object} body The payload for the request.
	 * @param {Number} [body.count] Pagination option to get a list of acquirer's
	 *                              configurations.
	 *                              Number of configurations in a page
	 * @param {Number} [body.page] Pagination option for a list of acquirer's
	 *                             configurations.
	 *                             The page index.
	*/
	var all = function all(opts, pagination) {
	  return findAll(opts, pagination);
	};
	
	/**
	 * `POST /acquirers_configurations`
	 * Creates an acquirer's configuration from the given payload.
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 * @param {Object} body The payload for the request
	 *
	 * @returns {Promise} Resolves to the result of
	 *                    the request or to an error.
	 */
	var create = function create(opts, body) {
	  return _request2.default.post(opts, _routes2.default.acquirersConfigurations.base, body);
	};
	
	/**
	 * `PUT /acquirers_configuration/:id`
	 * Updates an acquirer's configuration from the given payload.
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {Object} body The payload for the request
	 * @param {Number} body.id The acquirer's configuration ID
	 * @returns {Promise} A promise that resolves to
	 *                    the newly created acquirer's configurations
	 *                    data or to an error.
	 */
	var update = function update(opts, body) {
	  return _request2.default.put(opts, _routes2.default.acquirersConfigurations.details(body.id), body);
	};
	
	exports.default = {
	  all: all,
	  find: find,
	  findAll: findAll,
	  create: create,
	  update: update
	};
	module.exports = exports['default'];

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _T = __webpack_require__(36);
	
	var _T2 = _interopRequireDefault(_T);
	
	var _has = __webpack_require__(38);
	
	var _has2 = _interopRequireDefault(_has);
	
	var _cond = __webpack_require__(45);
	
	var _cond2 = _interopRequireDefault(_cond);
	
	var _curry = __webpack_require__(13);
	
	var _curry2 = _interopRequireDefault(_curry);
	
	var _routes = __webpack_require__(89);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _request = __webpack_require__(90);
	
	var _request2 = _interopRequireDefault(_request);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var findOne = (0, _curry2.default)(function (opts, body) {
	  return _request2.default.get(opts, _routes2.default.acquirers.details(body.id), {});
	}); /**
	     * @name Acquirers
	     * @description This module exposes functions
	     *              related to the `/acquirers` and
	     *              `/acquirers` paths.
	     *
	     * @module acquirers
	     **/
	
	var findAll = (0, _curry2.default)(function (opts, pagination) {
	  return _request2.default.get(opts, _routes2.default.acquirers.base, pagination || {});
	});
	
	/**
	 * `GET /acquirers`
	 * Makes a request to /acquirers or to /acquirers/:id
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {Object} body The payload for the request.
	 * @param {Number} [body.id]  The acquirer's ID. If not sent a
	 *                            list of acquirer will be returned instead.
	 * @param {Number} [body.count] Pagination option to get a list of acquirers.
	 *                              Number of acquirers in a page.
	 * @param {Number} [body.page] Pagination option for a list of acquirers.
	 *                             The page index.
	*/
	var find = function find(opts, body) {
	  return (0, _cond2.default)([[(0, _has2.default)('id'), findOne(opts)], [_T2.default, findAll(opts)]])(body);
	};
	
	/**
	 * `GET /acquirers`
	 * Makes a request to /acquirers
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {Object} body The payload for the request.
	 * @param {Number} [body.count] Pagination option to get a list of acquirers
	 *                              Number of acquirers in a page.
	 * @param {Number} [body.page] Pagination option for a list of acquirers.
	 *                             The page index.
	*/
	var all = function all(opts, pagination) {
	  return findAll(opts, pagination);
	};
	
	/**
	 * `POST /acquirers`
	 * Creates an acquirer from the given payload.
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 * @param {Object} body The payload for the request
	 *
	 * @returns {Promise} Resolves to the result of
	 *                    the request or to an error.
	 */
	var create = function create(opts, body) {
	  return _request2.default.post(opts, _routes2.default.acquirers.base, body);
	};
	
	/**
	 * `PUT /acquirers/:id`
	 * Updates an acquirer from the given payload.
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {Object} body The payload for the request
	 * @param {Number} body.id The acquirer's ID
	 * @returns {Promise} A promise that resolves to
	 *                    the newly created acquirer's
	 *                    data or to an error.
	 */
	var update = function update(opts, body) {
	  return _request2.default.put(opts, _routes2.default.acquirers.details(body.id), body);
	};
	
	/**
	 * `PUT /acquirers/:id/anticipation_delay/:delay`
	 * Updates an acquirer anticipation from the given delay.
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {Object} body The payload for the request
	 * @param {Number} body.id The acquirer's ID
	 * @param {Number} body.delay The acquirer's anticipation delay
	 * @returns {Promise} A promise that resolves to
	 *                    the newly created acquirer's
	 *                    data or to an error.
	 */
	var updateAnticipationDelay = function updateAnticipationDelay(opts, body) {
	  return _request2.default.put(opts, _routes2.default.acquirers.anticipation(body.id, body.delay), body);
	};
	
	exports.default = {
	  all: all,
	  find: find,
	  findAll: findAll,
	  create: create,
	  update: update,
	  updateAnticipationDelay: updateAnticipationDelay
	};
	module.exports = exports['default'];

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _T = __webpack_require__(36);
	
	var _T2 = _interopRequireDefault(_T);
	
	var _has = __webpack_require__(38);
	
	var _has2 = _interopRequireDefault(_has);
	
	var _cond = __webpack_require__(45);
	
	var _cond2 = _interopRequireDefault(_cond);
	
	var _curry = __webpack_require__(13);
	
	var _curry2 = _interopRequireDefault(_curry);
	
	var _routes = __webpack_require__(89);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _request = __webpack_require__(90);
	
	var _request2 = _interopRequireDefault(_request);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var findOne = (0, _curry2.default)(function (opts, body) {
	  return _request2.default.get(opts, _routes2.default.subscriptions.details(body.id), {});
	}); /**
	     * @name Subscriptions
	     * @description This module exposes functions
	     *              related to the `/subscriptions` path.
	     *
	     * @module subscriptions
	     **/
	
	var findAll = (0, _curry2.default)(function (opts, pagination) {
	  return _request2.default.get(opts, _routes2.default.subscriptions.base, pagination || {});
	});
	
	/**
	 * `GET /subscriptions`
	 * Makes a request to /subscriptions or to /subscriptions/:id
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {Object} body The payload for the request.
	 * {@link https://pagarme.readme.io/v1/reference#retornando-uma-assinatura|API Reference for this payload}
	 * @param {Number} [body.id] The subscription's ID. If not sent a
	 *                           subscriptions list will be returned instead.
	 * @param {Number} [body.count] Pagination option to get a list of subscriptions.
	 *                              Number of subscriptions in a page
	 * @param {Number} [body.page] Pagination option for a list of subscriptions.
	 *                             The page index.
	*/
	var find = function find(opts, body) {
	  return (0, _cond2.default)([[(0, _has2.default)('id'), findOne(opts)], [_T2.default, findAll(opts)]])(body);
	};
	
	/**
	 * `GET /subscriptions`
	 * Makes a request to /subscriptions to get all subscriptions.
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {Number} [body.count] Pagination option to get a list of subscriptions.
	 *                              Number of subscriptions in a page
	 * @param {Number} [body.page] Pagination option for a list of subscriptions.
	 *                             The page index.
	*/
	var all = function all(opts, body) {
	  return findAll(opts, body);
	};
	
	/**
	 * `POST /subscriptions`
	 * Creates a subscription from the given payload.
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 * @param {Object} body The payload for the request
	 * {@link https://pagarme.readme.io/v1/reference#criando-assinaturas|API Reference for this payload}
	 *
	 * @returns {Promise} Resolves to the result of
	 *                    the request or to an error.
	 */
	var create = function create(opts, body) {
	  return _request2.default.post(opts, _routes2.default.subscriptions.base, body);
	};
	
	/**
	 * `PUT /subscriptions/:id`
	 * Updates a subscription from the given payload.
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {Object} body The payload for the request
	 * {@link https://pagarme.readme.io/v1/reference#atualizando-uma-assinatura|API Reference for this payload}
	 * @param {Number} body.id The subscription's ID
	 * @returns {Promise} A promise that resolves to
	 *                    the newly created subscriptions's
	 *                    data or to an error.
	 */
	var update = function update(opts, body) {
	  return _request2.default.put(opts, _routes2.default.subscriptions.details(body.id), body);
	};
	
	/**
	 * `POST /subscriptions/:id/cancel`
	 * Cancels a subscription
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 * @param {Object} body The payload for the request
	 * {@link https://pagarme.readme.io/v1/reference#cancelando-uma-assinatura|API Reference for this payload}
	 * @param {Number} body.id The subscription's ID
	 *
	 * @returns {Promise} Resolves to the result of
	 *                    the request or to an error.
	 */
	var cancel = function cancel(opts, body) {
	  return _request2.default.post(opts, _routes2.default.subscriptions.cancel(body.id), {});
	};
	
	/**
	 * `POST /subscriptions/:id/transactions`
	 * Creates a transaction for a subscription
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 * @param {Object} body The payload for the request
	 * @param {Number} body.id The subscription's ID
	 *
	 * @returns {Promise} Resolves to the result of
	 *                    the request or to an error.
	 */
	var createTransaction = function createTransaction(opts, body) {
	  return _request2.default.post(opts, _routes2.default.subscriptions.transactions(body.id), body);
	};
	
	/**
	 * `GET /subscriptions/:id/transactions`
	 * Gets transactions for a subscription
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 * @param {Object} body The payload for the request
	 * {@link https://pagarme.readme.io/v1/reference#transações-em-uma-assinatura|API Reference for this payload}
	 * @param {Number} body.id The subscription's ID
	 *
	 * @returns {Promise} Resolves to the result of
	 *                    the request or to an error.
	 */
	var findTransactions = function findTransactions(opts, body) {
	  return _request2.default.get(opts, _routes2.default.subscriptions.transactions(body.id), body);
	};
	
	/**
	 * `POST /subscriptions/:id/settle_charge`
	 * Skips the next x charges for a subscription
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 * @param {Object} body The payload for the request
	 * {@link https://docs.pagar.me/reference#pulando-cobranças|API Reference for this payload}
	 * @param {Number} body.id The subscription's ID
	 *
	 * @returns {Promise} A promise that resolves to
	 *                    the subscription whose id
	 *                    was passed on the request
	 *                    body or to an error.
	 */
	var settleCharge = function settleCharge(opts, body) {
	  return _request2.default.post(opts, _routes2.default.subscriptions.settleCharge(body.id), body);
	};
	
	exports.default = {
	  all: all,
	  find: find,
	  findAll: findAll,
	  create: create,
	  update: update,
	  cancel: cancel,
	  createTransaction: createTransaction,
	  findTransactions: findTransactions,
	  settleCharge: settleCharge
	};
	module.exports = exports['default'];

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _T = __webpack_require__(36);
	
	var _T2 = _interopRequireDefault(_T);
	
	var _has = __webpack_require__(38);
	
	var _has2 = _interopRequireDefault(_has);
	
	var _cond = __webpack_require__(45);
	
	var _cond2 = _interopRequireDefault(_cond);
	
	var _curry = __webpack_require__(13);
	
	var _curry2 = _interopRequireDefault(_curry);
	
	var _routes = __webpack_require__(89);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _request = __webpack_require__(90);
	
	var _request2 = _interopRequireDefault(_request);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var findOne = (0, _curry2.default)(function (opts, body) {
	  return _request2.default.get(opts, _routes2.default.cards.details(body.id), {});
	}); /**
	     * @name Cards
	     * @description This module exposes functions
	     *              related to the `/cards` path.
	     *
	     * @module cards
	     **/
	
	
	var findAll = (0, _curry2.default)(function (opts, pagination) {
	  return _request2.default.get(opts, _routes2.default.cards.base, pagination || {});
	});
	
	/**
	 * `GET /cards`
	 * Makes a request to /cards or to /cards/:id
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {Object} body The payload for the request.
	 * {@link https://pagarme.readme.io/v1/reference#retornando-um-cartão-salvo-1|API Reference for this payload}
	 * @param {Number} [body.id] The cards's ID. If not sent a
	 *                           cards list will be returned instead.
	 * @param {Number} [body.count] Pagination option to get a list of cards.
	 *                              Number of cards in a page
	 * @param {Number} [body.page] Pagination option for a list of cards.
	 *                             The page index.
	*/
	var find = function find(opts, body) {
	  return (0, _cond2.default)([[(0, _has2.default)('id'), findOne(opts)], [_T2.default, findAll(opts)]])(body);
	};
	
	/**
	 * `GET /cards`
	 * Makes a request to /cards
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {Object} body The payload for the request.
	 * {@link https://pagarme.readme.io/v1/reference#retornando-todos-os-cartões|API Reference for this payload}
	 * @param {Number} [body.count] Pagination option to get a list of cards.
	 *                              Number of cards in a page
	 * @param {Number} [body.page] Pagination option for a list of cards.
	 *                             The page index.
	*/
	var all = function all(opts, pagination) {
	  return findAll(opts, pagination);
	};
	
	/**
	 * `POST /cards`
	 * Creates a card from the given payload.
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 * @param {Object} body The payload for the request
	 * {@link https://pagarme.readme.io/v1/reference#criando-um-cartao|API Reference for this payload}
	 *
	 * @returns {Promise} Resolves to the result of
	 *                    the request or to an error.
	 */
	var create = function create(opts, body) {
	  return _request2.default.post(opts, _routes2.default.cards.base, body);
	};
	
	exports.default = {
	  find: find,
	  all: all,
	  create: create
	};
	module.exports = exports['default'];

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _T = __webpack_require__(36);
	
	var _T2 = _interopRequireDefault(_T);
	
	var _has = __webpack_require__(38);
	
	var _has2 = _interopRequireDefault(_has);
	
	var _cond = __webpack_require__(45);
	
	var _cond2 = _interopRequireDefault(_cond);
	
	var _curry = __webpack_require__(13);
	
	var _curry2 = _interopRequireDefault(_curry);
	
	var _routes = __webpack_require__(89);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _request = __webpack_require__(90);
	
	var _request2 = _interopRequireDefault(_request);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var findOne = (0, _curry2.default)(function (opts, body) {
	  return _request2.default.get(opts, _routes2.default.transfers.details(body.id), {});
	}); /**
	     * @name Transfers
	     * @description This module exposes functions
	     *              related to the `/itransfers` path.
	     *
	     * @module transfers
	     **/
	
	
	var findAll = (0, _curry2.default)(function (opts, pagination) {
	  return _request2.default.get(opts, _routes2.default.transfers.base, pagination || {});
	});
	
	/**
	 * `GET /transfers`
	 * Makes a request to /transfers or to /transfers/:id
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {Object} body The payload for the request.
	 * {@link https://pagarme.readme.io/v1/reference#vendo-dados-de-uma-transferência|API Reference for this payload}
	 * @param {Number} [body.id] The transfer's ID. If not sent a
	 *                           transfers list will be returned instead.
	 * @param {Number} [body.count] Pagination option to get a list of transfers.
	 *                              Number of transfers in a page
	 * @param {Number} [body.page] Pagination option for a list of transfers.
	 *                             The page index.
	*/
	var find = function find(opts, body) {
	  return (0, _cond2.default)([[(0, _has2.default)('id'), findOne(opts)], [_T2.default, findAll(opts)]])(body);
	};
	
	/**
	 * `GET /transfers`
	 * Makes a request to /transfers to get all transfers.
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {Object} body The payload for the request.
	 * {@link https://pagarme.readme.io/v1/reference#vendo-dados-de-várias-transferências|API Reference for this payload}
	 * @param {Number} [body.count] Pagination option to get a list of transfers.
	 *                              Number of transfers in a page
	 * @param {Number} [body.page] Pagination option for a list of transfers.
	 *                             The page index.
	*/
	var all = function all(opts, pagination) {
	  return findAll(opts, pagination);
	};
	
	/**
	 * `POST /transfers`
	 * Creates a transfer from the given payload.
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 * @param {Object} body The payload for the request
	 * {@link https://pagarme.readme.io/v1/reference#criando-uma-transferência|API Reference for this payload}
	 *
	 * @returns {Promise} Resolves to the result of
	 *                    the request or to an error.
	 */
	var create = function create(opts, body) {
	  return _request2.default.post(opts, _routes2.default.transfers.base, body);
	};
	
	/**
	 * `POST /transfers/:id/cancel`
	 * Cancels a transfer
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 * @param {Object} body The payload for the request
	 * {@link https://pagarme.readme.io/v1/reference#cancelando-uma-transferência|API Reference for this payload}
	 * @param {Number} body.id The transfer's ID
	 *
	 * @returns {Promise} Resolves to the result of
	 *                    the request or to an error.
	 */
	var cancel = function cancel(opts, body) {
	  return _request2.default.post(opts, _routes2.default.transfers.cancel(body.id), {});
	};
	
	/**
	 * `GET /transfers/days`
	 * Returns company's transfers aggregated by day
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	*/
	var days = function days(opts) {
	  return _request2.default.get(opts, _routes2.default.transfers.days, {});
	};
	
	/**
	 * `GET /transfers/limits`
	 * Returns company's transfers limits
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 * @param {Object} params The params for the request
	 * @param {String} params.recipient_id The recipient id
	 *
	*/
	var limits = function limits(opts, params) {
	  return _request2.default.get(opts, _routes2.default.transfers.limits, params);
	};
	
	exports.default = {
	  find: find,
	  all: all,
	  create: create,
	  cancel: cancel,
	  days: days,
	  limits: limits
	};
	module.exports = exports['default'];

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _routes = __webpack_require__(89);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _request = __webpack_require__(90);
	
	var _request2 = _interopRequireDefault(_request);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * `GET /balance`
	 * Returns company's balance
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	*/
	/**
	 * @name Balance
	 * @description This module exposes functions
	 *              related to the `/balance` path.
	 *
	 * @module balance
	 **/
	
	var primary = function primary(opts) {
	  return _request2.default.get(opts, _routes2.default.balance.base, {});
	};
	
	/**
	 * `GET /recipients/:id/balance`
	 * Returns the balance of a recipient.
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {Object} body The payload for the request
	 * @param {String} body.recipientId The recipient Id
	 *
	 * @returns {Promise} Resolves to the result of
	 *                    the request or to an error.
	 */
	var find = function find(opts, body) {
	  return _request2.default.get(opts, _routes2.default.balance.recipient(body.recipientId), body);
	};
	
	exports.default = {
	  primary: primary,
	  find: find
	};
	module.exports = exports['default'];

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _T = __webpack_require__(36);
	
	var _T2 = _interopRequireDefault(_T);
	
	var _has = __webpack_require__(38);
	
	var _has2 = _interopRequireDefault(_has);
	
	var _both = __webpack_require__(39);
	
	var _both2 = _interopRequireDefault(_both);
	
	var _cond = __webpack_require__(45);
	
	var _cond2 = _interopRequireDefault(_cond);
	
	var _pipe = __webpack_require__(138);
	
	var _pipe2 = _interopRequireDefault(_pipe);
	
	var _prop = __webpack_require__(143);
	
	var _prop2 = _interopRequireDefault(_prop);
	
	var _applySpec = __webpack_require__(144);
	
	var _applySpec2 = _interopRequireDefault(_applySpec);
	
	var _isEmpty = __webpack_require__(148);
	
	var _isEmpty2 = _interopRequireDefault(_isEmpty);
	
	var _complement = __webpack_require__(151);
	
	var _complement2 = _interopRequireDefault(_complement);
	
	var _when = __webpack_require__(153);
	
	var _when2 = _interopRequireDefault(_when);
	
	var _pick = __webpack_require__(88);
	
	var _pick2 = _interopRequireDefault(_pick);
	
	var _dissoc = __webpack_require__(128);
	
	var _dissoc2 = _interopRequireDefault(_dissoc);
	
	var _curry = __webpack_require__(13);
	
	var _curry2 = _interopRequireDefault(_curry);
	
	var _routes = __webpack_require__(89);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _request = __webpack_require__(90);
	
	var _request2 = _interopRequireDefault(_request);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var findOne = (0, _curry2.default)(function (opts, body) {
	  return _request2.default.get(opts, _routes2.default.balanceOperations.details(body.id), {});
	}); /**
	     * @name Balance Operations
	     * @description This module exposes functions
	     *              related to the `/balance/operations` path.
	     *
	     * @module balanceOperations
	     **/
	
	var findAll = (0, _curry2.default)(function (opts, body) {
	  return _request2.default.get(opts, _routes2.default.balanceOperations.base, body || {});
	});
	
	var findRecipients = (0, _curry2.default)(function (opts, body) {
	  return _request2.default.get(opts, _routes2.default.balanceOperations.recipients.findAll(body.recipientId), (0, _dissoc2.default)('recipientId', body));
	});
	
	var findRecipientsWithBalanceId = (0, _curry2.default)(function (opts, body) {
	  return _request2.default.get(opts, _routes2.default.balanceOperations.recipients.find(body.id, body.recipientId), {});
	});
	
	var pickQueryProps = (0, _pick2.default)(['startDate', 'endDate']);
	
	var renameKeys = (0, _when2.default)((0, _complement2.default)(_isEmpty2.default), (0, _applySpec2.default)({
	  end_date: (0, _prop2.default)('endDate'),
	  start_date: (0, _prop2.default)('startDate')
	}));
	
	var buildQuery = (0, _pipe2.default)(pickQueryProps, renameKeys);
	
	var findRecipientsWithFormat = (0, _curry2.default)(function (opts, body) {
	  var recipientId = body.recipientId,
	      format = body.format;
	
	
	  return _request2.default.get(opts, _routes2.default.balanceOperations.recipients.findWithFormat(recipientId, format), buildQuery(body));
	});
	
	/**
	 * `GET /balance/operations`
	 * Makes a request to /balance/operations,
	 * /balance/operations/:id,
	 * /recipients/:recipient_id/balance/operations/ or
	 * /recipients/:recipient_id/balance/operations/:id
	 * and returns company's balanceOperations or returns a specif company's balanceOperation
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {Object} body The payload for the request.
	 * {@link https://pagarme.readme.io/v1/reference#histórico-específico-de-uma-operação|API Reference for this payload}
	 * @param {Number} [body.id] The operations's ID. If not sent a
	 *                           operations list will be returned instead.
	 * @param {Number} [body.recipientId] The recipient's ID.
	 * @param {String} [body.format] The file extension.
	 * @param {Number} [body.count] Pagination option to get a list of operations.
	 *                              Number of operations in a page
	 * @param {Number} [body.page] Pagination option for a list of operations.
	 *                             The page index.
	*/
	var find = function find(opts, body) {
	  return (0, _cond2.default)([[(0, _both2.default)((0, _has2.default)('id'), (0, _has2.default)('recipientId')), findRecipientsWithBalanceId(opts)], [(0, _both2.default)((0, _has2.default)('recipientId'), (0, _has2.default)('format')), findRecipientsWithFormat(opts)], [(0, _has2.default)('recipientId'), findRecipients(opts)], [(0, _has2.default)('id'), findOne(opts)], [_T2.default, findAll(opts)]])(body);
	};
	
	/**
	 * `GET /balance/operations`
	 * Returns company's balanceOperations
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {Object} body The payload for the request.
	 * {@link https://pagarme.readme.io/v1/reference#histórico-das-operações|API Reference for this payload}
	 * @param {Number} [body.count] Pagination option to get a list of operations.
	 *                              Number of operations in a page
	 * @param {Number} [body.page] Pagination option for a list of operations.
	 *                             The page index.
	*/
	var all = function all(opts, pagination) {
	  return findAll(opts, pagination);
	};
	
	/**
	 * `GET /balance/operations/days`
	 * Returns a company's balanceOperations aggregated by day
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	*/
	var days = function days(opts, body) {
	  return _request2.default.get(opts, _routes2.default.balanceOperations.days, body || {});
	};
	
	exports.default = {
	  find: find,
	  all: all,
	  days: days
	};
	module.exports = exports['default'];

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	var _arity = __webpack_require__(15);
	var _pipe = __webpack_require__(139);
	var reduce = __webpack_require__(47);
	var tail = __webpack_require__(140);
	
	
	/**
	 * Performs left-to-right function composition. The leftmost function may have
	 * any arity; the remaining functions must be unary.
	 *
	 * In some libraries this function is named `sequence`.
	 *
	 * **Note:** The result of pipe is not automatically curried.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Function
	 * @sig (((a, b, ..., n) -> o), (o -> p), ..., (x -> y), (y -> z)) -> ((a, b, ..., n) -> z)
	 * @param {...Function} functions
	 * @return {Function}
	 * @see R.compose
	 * @example
	 *
	 *      var f = R.pipe(Math.pow, R.negate, R.inc);
	 *
	 *      f(3, 4); // -(3^4) + 1
	 */
	module.exports = function pipe() {
	  if (arguments.length === 0) {
	    throw new Error('pipe requires at least one argument');
	  }
	  return _arity(arguments[0].length,
	                reduce(_pipe, arguments[0], tail(arguments)));
	};


/***/ },
/* 139 */
/***/ function(module, exports) {

	module.exports = function _pipe(f, g) {
	  return function() {
	    return g.call(this, f.apply(this, arguments));
	  };
	};


/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	var _checkForMethod = __webpack_require__(141);
	var slice = __webpack_require__(142);
	
	
	/**
	 * Returns all but the first element of the given list or string (or object
	 * with a `tail` method).
	 *
	 * Dispatches to the `slice` method of the first argument, if present.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig [a] -> [a]
	 * @sig String -> String
	 * @param {*} list
	 * @return {*}
	 * @see R.head, R.init, R.last
	 * @example
	 *
	 *      R.tail([1, 2, 3]);  //=> [2, 3]
	 *      R.tail([1, 2]);     //=> [2]
	 *      R.tail([1]);        //=> []
	 *      R.tail([]);         //=> []
	 *
	 *      R.tail('abc');  //=> 'bc'
	 *      R.tail('ab');   //=> 'b'
	 *      R.tail('a');    //=> ''
	 *      R.tail('');     //=> ''
	 */
	module.exports = _checkForMethod('tail', slice(1, Infinity));


/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	var _isArray = __webpack_require__(19);
	var _slice = __webpack_require__(11);
	
	
	/**
	 * Similar to hasMethod, this checks whether a function has a [methodname]
	 * function. If it isn't an array it will execute that function otherwise it
	 * will default to the ramda implementation.
	 *
	 * @private
	 * @param {Function} fn ramda implemtation
	 * @param {String} methodname property to check for a custom implementation
	 * @return {Object} Whatever the return value of the method is.
	 */
	module.exports = function _checkForMethod(methodname, fn) {
	  return function() {
	    var length = arguments.length;
	    if (length === 0) {
	      return fn();
	    }
	    var obj = arguments[length - 1];
	    return (_isArray(obj) || typeof obj[methodname] !== 'function') ?
	      fn.apply(this, arguments) :
	      obj[methodname].apply(obj, _slice(arguments, 0, length - 1));
	  };
	};


/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	var _checkForMethod = __webpack_require__(141);
	var _curry3 = __webpack_require__(10);
	
	
	/**
	 * Returns the elements of the given list or string (or object with a `slice`
	 * method) from `fromIndex` (inclusive) to `toIndex` (exclusive).
	 *
	 * Dispatches to the `slice` method of the third argument, if present.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.4
	 * @category List
	 * @sig Number -> Number -> [a] -> [a]
	 * @sig Number -> Number -> String -> String
	 * @param {Number} fromIndex The start index (inclusive).
	 * @param {Number} toIndex The end index (exclusive).
	 * @param {*} list
	 * @return {*}
	 * @example
	 *
	 *      R.slice(1, 3, ['a', 'b', 'c', 'd']);        //=> ['b', 'c']
	 *      R.slice(1, Infinity, ['a', 'b', 'c', 'd']); //=> ['b', 'c', 'd']
	 *      R.slice(0, -1, ['a', 'b', 'c', 'd']);       //=> ['a', 'b', 'c']
	 *      R.slice(-3, -1, ['a', 'b', 'c', 'd']);      //=> ['b', 'c']
	 *      R.slice(0, 3, 'ramda');                     //=> 'ram'
	 */
	module.exports = _curry3(_checkForMethod('slice', function slice(fromIndex, toIndex, list) {
	  return Array.prototype.slice.call(list, fromIndex, toIndex);
	}));


/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	var _curry2 = __webpack_require__(5);
	
	
	/**
	 * Returns a function that when supplied an object returns the indicated
	 * property of that object, if it exists.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Object
	 * @sig s -> {s: a} -> a | Undefined
	 * @param {String} p The property name
	 * @param {Object} obj The object to query
	 * @return {*} The value at `obj.p`.
	 * @see R.path
	 * @example
	 *
	 *      R.prop('x', {x: 100}); //=> 100
	 *      R.prop('x', {}); //=> undefined
	 */
	module.exports = _curry2(function prop(p, obj) { return obj[p]; });


/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	var _curry1 = __webpack_require__(6);
	var apply = __webpack_require__(145);
	var curryN = __webpack_require__(14);
	var map = __webpack_require__(17);
	var max = __webpack_require__(46);
	var pluck = __webpack_require__(146);
	var reduce = __webpack_require__(47);
	var values = __webpack_require__(147);
	
	
	/**
	 * Given a spec object recursively mapping properties to functions, creates a
	 * function producing an object of the same structure, by mapping each property
	 * to the result of calling its associated function with the supplied arguments.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.20.0
	 * @category Function
	 * @sig {k: ((a, b, ..., m) -> v)} -> ((a, b, ..., m) -> {k: v})
	 * @param {Object} spec an object recursively mapping properties to functions for
	 *        producing the values for these properties.
	 * @return {Function} A function that returns an object of the same structure
	 * as `spec', with each property set to the value returned by calling its
	 * associated function with the supplied arguments.
	 * @see R.converge, R.juxt
	 * @example
	 *
	 *      var getMetrics = R.applySpec({
	 *                                      sum: R.add,
	 *                                      nested: { mul: R.multiply }
	 *                                   });
	 *      getMetrics(2, 4); // => { sum: 6, nested: { mul: 8 } }
	 */
	module.exports = _curry1(function applySpec(spec) {
	  spec = map(function(v) { return typeof v == 'function' ? v : applySpec(v) },
	             spec);
	  return curryN(reduce(max, 0, pluck('length', values(spec))),
	                function() {
	                  var args = arguments;
	                  return map(function(f) { return apply(f, args); }, spec);
	                });
	});


/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	var _curry2 = __webpack_require__(5);
	
	
	/**
	 * Applies function `fn` to the argument list `args`. This is useful for
	 * creating a fixed-arity function from a variadic function. `fn` should be a
	 * bound function if context is significant.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.7.0
	 * @category Function
	 * @sig (*... -> a) -> [*] -> a
	 * @param {Function} fn
	 * @param {Array} args
	 * @return {*}
	 * @see R.call, R.unapply
	 * @example
	 *
	 *      var nums = [1, 2, 3, -99, 42, 6, 7];
	 *      R.apply(Math.max, nums); //=> 42
	 */
	module.exports = _curry2(function apply(fn, args) {
	  return fn.apply(this, args);
	});


/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	var _curry2 = __webpack_require__(5);
	var map = __webpack_require__(17);
	var prop = __webpack_require__(143);
	
	
	/**
	 * Returns a new list by plucking the same named property off all objects in
	 * the list supplied.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig k -> [{k: v}] -> [v]
	 * @param {Number|String} key The key name to pluck off of each object.
	 * @param {Array} list The array to consider.
	 * @return {Array} The list of values for the given key.
	 * @see R.props
	 * @example
	 *
	 *      R.pluck('a')([{a: 1}, {a: 2}]); //=> [1, 2]
	 *      R.pluck(0)([[1, 2], [3, 4]]);   //=> [1, 3]
	 */
	module.exports = _curry2(function pluck(p, list) {
	  return map(prop(p), list);
	});


/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	var _curry1 = __webpack_require__(6);
	var keys = __webpack_require__(29);
	
	
	/**
	 * Returns a list of all the enumerable own properties of the supplied object.
	 * Note that the order of the output array is not guaranteed across different
	 * JS platforms.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Object
	 * @sig {k: v} -> [v]
	 * @param {Object} obj The object to extract values from
	 * @return {Array} An array of the values of the object's own properties.
	 * @example
	 *
	 *      R.values({a: 1, b: 2, c: 3}); //=> [1, 2, 3]
	 */
	module.exports = _curry1(function values(obj) {
	  var props = keys(obj);
	  var len = props.length;
	  var vals = [];
	  var idx = 0;
	  while (idx < len) {
	    vals[idx] = obj[props[idx]];
	    idx += 1;
	  }
	  return vals;
	});


/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	var _curry1 = __webpack_require__(6);
	var empty = __webpack_require__(149);
	var equals = __webpack_require__(120);
	
	
	/**
	 * Returns `true` if the given value is its type's empty value; `false`
	 * otherwise.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Logic
	 * @sig a -> Boolean
	 * @param {*} x
	 * @return {Boolean}
	 * @see R.empty
	 * @example
	 *
	 *      R.isEmpty([1, 2, 3]);   //=> false
	 *      R.isEmpty([]);          //=> true
	 *      R.isEmpty('');          //=> true
	 *      R.isEmpty(null);        //=> false
	 *      R.isEmpty({});          //=> true
	 *      R.isEmpty({length: 0}); //=> false
	 */
	module.exports = _curry1(function isEmpty(x) {
	  return x != null && equals(x, empty(x));
	});


/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	var _curry1 = __webpack_require__(6);
	var _isArguments = __webpack_require__(30);
	var _isArray = __webpack_require__(19);
	var _isObject = __webpack_require__(150);
	var _isString = __webpack_require__(26);
	
	
	/**
	 * Returns the empty value of its argument's type. Ramda defines the empty
	 * value of Array (`[]`), Object (`{}`), String (`''`), and Arguments. Other
	 * types are supported if they define `<Type>.empty` and/or
	 * `<Type>.prototype.empty`.
	 *
	 * Dispatches to the `empty` method of the first argument, if present.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.3.0
	 * @category Function
	 * @sig a -> a
	 * @param {*} x
	 * @return {*}
	 * @example
	 *
	 *      R.empty(Just(42));      //=> Nothing()
	 *      R.empty([1, 2, 3]);     //=> []
	 *      R.empty('unicorns');    //=> ''
	 *      R.empty({x: 1, y: 2});  //=> {}
	 */
	module.exports = _curry1(function empty(x) {
	  return (
	    (x != null && typeof x.empty === 'function') ?
	      x.empty() :
	    (x != null && x.constructor != null && typeof x.constructor.empty === 'function') ?
	      x.constructor.empty() :
	    _isArray(x) ?
	      [] :
	    _isString(x) ?
	      '' :
	    _isObject(x) ?
	      {} :
	    _isArguments(x) ?
	      (function() { return arguments; }()) :
	    // else
	      void 0
	  );
	});


/***/ },
/* 150 */
/***/ function(module, exports) {

	module.exports = function _isObject(x) {
	  return Object.prototype.toString.call(x) === '[object Object]';
	};


/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	var lift = __webpack_require__(41);
	var not = __webpack_require__(152);
	
	
	/**
	 * Takes a function `f` and returns a function `g` such that:
	 *
	 *   - applying `g` to zero or more arguments will give __true__ if applying
	 *     the same arguments to `f` gives a logical __false__ value; and
	 *
	 *   - applying `g` to zero or more arguments will give __false__ if applying
	 *     the same arguments to `f` gives a logical __true__ value.
	 *
	 * `R.complement` will work on all other functors as well.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.12.0
	 * @category Logic
	 * @sig (*... -> *) -> (*... -> Boolean)
	 * @param {Function} f
	 * @return {Function}
	 * @see R.not
	 * @example
	 *
	 *      var isEven = n => n % 2 === 0;
	 *      var isOdd = R.complement(isEven);
	 *      isOdd(21); //=> true
	 *      isOdd(42); //=> false
	 */
	module.exports = lift(not);


/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	var _curry1 = __webpack_require__(6);
	
	
	/**
	 * A function that returns the `!` of its argument. It will return `true` when
	 * passed false-y value, and `false` when passed a truth-y one.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Logic
	 * @sig * -> Boolean
	 * @param {*} a any value
	 * @return {Boolean} the logical inverse of passed argument.
	 * @see R.complement
	 * @example
	 *
	 *      R.not(true); //=> false
	 *      R.not(false); //=> true
	 *      R.not(0); //=> true
	 *      R.not(1); //=> false
	 */
	module.exports = _curry1(function not(a) {
	  return !a;
	});


/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	var _curry3 = __webpack_require__(10);
	
	
	/**
	 * Tests the final argument by passing it to the given predicate function. If
	 * the predicate is satisfied, the function will return the result of calling
	 * the `whenTrueFn` function with the same argument. If the predicate is not
	 * satisfied, the argument is returned as is.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.18.0
	 * @category Logic
	 * @sig (a -> Boolean) -> (a -> a) -> a -> a
	 * @param {Function} pred       A predicate function
	 * @param {Function} whenTrueFn A function to invoke when the `condition`
	 *                              evaluates to a truthy value.
	 * @param {*}        x          An object to test with the `pred` function and
	 *                              pass to `whenTrueFn` if necessary.
	 * @return {*} Either `x` or the result of applying `x` to `whenTrueFn`.
	 * @see R.ifElse, R.unless
	 * @example
	 *
	 *      // truncate :: String -> String
	 *      var truncate = R.when(
	 *        R.propSatisfies(R.gt(R.__, 10), 'length'),
	 *        R.pipe(R.take(10), R.append('…'), R.join(''))
	 *      );
	 *      truncate('12345');         //=> '12345'
	 *      truncate('0123456789ABC'); //=> '0123456789…'
	 */
	module.exports = _curry3(function when(pred, whenTrueFn, x) {
	  return pred(x) ? whenTrueFn(x) : x;
	});


/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _T = __webpack_require__(36);
	
	var _T2 = _interopRequireDefault(_T);
	
	var _has = __webpack_require__(38);
	
	var _has2 = _interopRequireDefault(_has);
	
	var _both = __webpack_require__(39);
	
	var _both2 = _interopRequireDefault(_both);
	
	var _cond = __webpack_require__(45);
	
	var _cond2 = _interopRequireDefault(_cond);
	
	var _curry = __webpack_require__(13);
	
	var _curry2 = _interopRequireDefault(_curry);
	
	var _routes = __webpack_require__(89);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _request = __webpack_require__(90);
	
	var _request2 = _interopRequireDefault(_request);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var findAllInTransactions = (0, _curry2.default)(function (opts, body) {
	  return _request2.default.get(opts, _routes2.default.events.transaction(body.transactionId), {});
	}); /**
	     * @name Events
	     * @description This module exposes functions
	     *              related to events.
	     *
	     * @module events
	     **/
	
	var findOneInTransactions = (0, _curry2.default)(function (opts, body) {
	  return _request2.default.get(opts, _routes2.default.events.transactionDetails(body.id, body.transactionId), {});
	});
	
	var findAllInSubscriptions = (0, _curry2.default)(function (opts, body) {
	  return _request2.default.get(opts, _routes2.default.events.subscription(body.subscriptionId), {});
	});
	
	var findOneInSubscriptions = (0, _curry2.default)(function (opts, body) {
	  return _request2.default.get(opts, _routes2.default.events.subscriptionDetails(body.id, body.subscriptionId), {});
	});
	
	/**
	 * `GET /:model/:model_id/events`
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {Object} body The payload for the request.
	 * {@link https://pagarme.readme.io/v1/reference#retornando-todos-os-eventos-de-uma-transação|API Reference for this payload}
	 * @param {Number} [body.id] The event ID. If not sent a
	 * @param {Number} [body.transactionId] A transaction ID to get all
	 *                                      the events.
	 * @param {Number} [body.count] Pagination option for transaction list.
	 *                              Number of transaction in a page
	 * @param {Number} [body.page] Pagination option for transaction list.
	 *                             The page index.
	*/
	var find = function find(opts, body) {
	  return (0, _cond2.default)([[(0, _both2.default)((0, _has2.default)('transactionId'), (0, _has2.default)('id')), findOneInTransactions(opts)], [(0, _has2.default)('transactionId'), findAllInTransactions(opts)], [(0, _both2.default)((0, _has2.default)('subscriptionId'), (0, _has2.default)('id')), findOneInSubscriptions(opts)], [(0, _has2.default)('subscriptionId'), findAllInSubscriptions(opts)], [_T2.default, findAllInTransactions(opts)]])(body);
	};
	
	/**
	 * `GET /events`
	 * Makes a request to /events
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {Object} body The payload for the request.
	*/
	var findCustom = function findCustom(opts, body) {
	  return _request2.default.get(opts, _routes2.default.events.base, body);
	};
	
	exports.default = {
	  find: find,
	  findCustom: findCustom
	};
	module.exports = exports['default'];

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _T = __webpack_require__(36);
	
	var _T2 = _interopRequireDefault(_T);
	
	var _has = __webpack_require__(38);
	
	var _has2 = _interopRequireDefault(_has);
	
	var _both = __webpack_require__(39);
	
	var _both2 = _interopRequireDefault(_both);
	
	var _cond = __webpack_require__(45);
	
	var _cond2 = _interopRequireDefault(_cond);
	
	var _curry = __webpack_require__(13);
	
	var _curry2 = _interopRequireDefault(_curry);
	
	var _routes = __webpack_require__(89);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _request = __webpack_require__(90);
	
	var _request2 = _interopRequireDefault(_request);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var findAllInTransactions = (0, _curry2.default)(function (opts, body) {
	  return _request2.default.get(opts, _routes2.default.gatewayOperations.transaction(body.transactionId), {});
	}); /**
	     * @name Gateway Operations
	     * @description This module exposes functions
	     *              related to events.
	     *
	     * @module gatewayOperations
	     **/
	
	var findOneInTransactions = (0, _curry2.default)(function (opts, body) {
	  return _request2.default.get(opts, _routes2.default.gatewayOperations.transactionDetails(body.id, body.transactionId), {});
	});
	
	var findAllInSubscriptions = (0, _curry2.default)(function (opts, body) {
	  return _request2.default.get(opts, _routes2.default.gatewayOperations.subscription(body.subscriptionId), {});
	});
	
	/**
	 * `GET /:model/:model_id/operations`
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {Object} body The payload for the request.
	 * {@link https://pagarme.readme.io/v1/reference#retornando-todo-histórico-de-uma-transação|API Reference for this payload}
	 * @param {Number} [body.id] The operation ID. If not sent,
	 *                                             all operations of a
	 *                                             transaction will be returned.
	 * @param {Number} [body.transactionId] A transaction ID to get all
	 *                                      the operations.
	 * @param {Number} [body.subscriptionId] A subscription ID
	*/
	var find = function find(opts, body) {
	  return (0, _cond2.default)([[(0, _both2.default)((0, _has2.default)('transactionId'), (0, _has2.default)('id')), findOneInTransactions(opts)], [(0, _has2.default)('transactionId'), findAllInTransactions(opts)], [(0, _has2.default)('subscriptionId'), findAllInSubscriptions(opts)], [_T2.default, findAllInTransactions(opts)]])(body);
	};
	
	/**
	 * `GET /:model/:model_id/operations/:id/refuse_message`
	 * Returns the refuse message for a gateway operation
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {Object} body The payload for the request.
	 * @param {Number} body.id The operation ID.
	 * @param {Number} [body.subscriptionId] A subscription ID
	*/
	var refuseMessage = function refuseMessage(opts, body) {
	  return _request2.default.get(opts, _routes2.default.gatewayOperations.refuseMessage(body.subscriptionId, body.id), {});
	};
	
	exports.default = {
	  find: find,
	  refuseMessage: refuseMessage
	};
	module.exports = exports['default'];

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _curry = __webpack_require__(13);
	
	var _curry2 = _interopRequireDefault(_curry);
	
	var _routes = __webpack_require__(89);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _request = __webpack_require__(90);
	
	var _request2 = _interopRequireDefault(_request);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * `GET /transactions/:transaction_id/chargeback_operations`
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {Object} body The payload for the request.
	 * @param {Number} [body.transactionId] A transaction ID to get all
	 *                                      the chargeback operations.
	*/
	var find = (0, _curry2.default)(function (opts, body) {
	  return _request2.default.get(opts, _routes2.default.chargebackOperations.transaction(body.transactionId), {});
	}); /**
	     * @name Chargeback Operations
	     * @description This module exposes functions
	     *              related to chargeback operations.
	     *
	     * @module chargebackOperations
	     **/
	
	exports.default = {
	  find: find
	};
	module.exports = exports['default'];

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _T = __webpack_require__(36);
	
	var _T2 = _interopRequireDefault(_T);
	
	var _has = __webpack_require__(38);
	
	var _has2 = _interopRequireDefault(_has);
	
	var _both = __webpack_require__(39);
	
	var _both2 = _interopRequireDefault(_both);
	
	var _cond = __webpack_require__(45);
	
	var _cond2 = _interopRequireDefault(_cond);
	
	var _curry = __webpack_require__(13);
	
	var _curry2 = _interopRequireDefault(_curry);
	
	var _routes = __webpack_require__(89);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _request = __webpack_require__(90);
	
	var _request2 = _interopRequireDefault(_request);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var findAllInTransactions = (0, _curry2.default)(function (opts, body) {
	  return _request2.default.get(opts, _routes2.default.postbacks.transaction(body.transactionId), {});
	}); /**
	     * @name Postbacks
	     * @description This module exposes functions
	     *              related to postbacks.
	     *
	     * @module postbacks
	     **/
	
	var findOneInTransactions = (0, _curry2.default)(function (opts, body) {
	  return _request2.default.get(opts, _routes2.default.postbacks.transactionDetails(body.id, body.transactionId), {});
	});
	
	var findAllInSubscriptions = (0, _curry2.default)(function (opts, body) {
	  return _request2.default.get(opts, _routes2.default.postbacks.subscription(body.subscriptionId), {});
	});
	
	/**
	 * `GET /:model/:model_id/postbacks`
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {Object} body The payload for the request.
	 * {@link https://pagarme.readme.io/v1/reference#retornando-um-postback|API Reference for this payload}
	 * @param {Number} [body.id] The operation ID. If not sent a
	 * @param {Number} [body.transactionId] A transaction ID to get all
	 *                                      the operations.
	 * @param {Number} [body.subscriptionId] A subscription ID
	*/
	var find = function find(opts, body) {
	  return (0, _cond2.default)([[(0, _both2.default)((0, _has2.default)('transactionId'), (0, _has2.default)('id')), findOneInTransactions(opts)], [(0, _has2.default)('transactionId'), findAllInTransactions(opts)], [(0, _has2.default)('subscriptionId'), findAllInSubscriptions(opts)], [_T2.default, findAllInTransactions(opts)]])(body);
	};
	
	/**
	 * `POST /:model/:model_id/postbacks/:id/redeliver`
	 * Redeliver a POSTback for a model
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {Object} body The payload for the request.
	 * {@link https://pagarme.readme.io/v1/reference#reenviando-um-postback|API Reference for this payload}
	 * @param {Number} body.id The operation ID.
	 * @param {Number} body.subscriptionId A subscription ID
	*/
	var redeliver = function redeliver(opts, body) {
	  return _request2.default.post(opts, _routes2.default.postbacks.redeliver(body.subscriptionId, body.id), {});
	};
	
	exports.default = {
	  find: find,
	  redeliver: redeliver
	};
	module.exports = exports['default'];

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _replace = __webpack_require__(159);
	
	var _replace2 = _interopRequireDefault(_replace);
	
	var _toString = __webpack_require__(160);
	
	var _toString2 = _interopRequireDefault(_toString);
	
	var _pipe = __webpack_require__(138);
	
	var _pipe2 = _interopRequireDefault(_pipe);
	
	var _nodeRsa = __webpack_require__(169);
	
	var _nodeRsa2 = _interopRequireDefault(_nodeRsa);
	
	var _bluebird = __webpack_require__(49);
	
	var _bluebird2 = _interopRequireDefault(_bluebird);
	
	var _qs = __webpack_require__(94);
	
	var _qs2 = _interopRequireDefault(_qs);
	
	var _postback = __webpack_require__(218);
	
	var _transactions = __webpack_require__(87);
	
	var _transactions2 = _interopRequireDefault(_transactions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var cleanNumber = (0, _pipe2.default)(_toString2.default, (0, _replace2.default)(/[^0-9]/g, '')); /**
	                                                                                                   * @name Security
	                                                                                                   * @description This module exposes functions
	                                                                                                   *              related to security procedures.
	                                                                                                   *
	                                                                                                   * @module security
	                                                                                                   **/
	
	
	var queryString = function queryString(card) {
	  return _qs2.default.stringify({
	    card_number: cleanNumber(card.card_number),
	    card_holder_name: card.card_holder_name,
	    card_expiration_date: cleanNumber(card.card_expiration_date),
	    card_cvv: cleanNumber(card.card_cvv)
	  });
	};
	
	var generateCardHash = function generateCardHash(_ref, cardString) {
	  var publicKey = _ref.public_key,
	      id = _ref.id;
	
	  var key = new _nodeRsa2.default(publicKey, {
	    encryptionScheme: 'pkcs1'
	  });
	  var encrypted = key.encrypt(cardString, 'base64');
	  var cardHash = id + '_' + encrypted;
	  return cardHash;
	};
	
	/**
	 * Encrypt a card object into a card_hash
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {Object} card The card object.
	 * {@link https://pagarme.readme.io/v1/reference#gerando-card_hash-manualmente|API Reference for this payload}
	 *
	 * @param {String} card.card_number The card's number.
	 *                             Example: '4111111111111111'
	 * @param {String} card.card_holder_name The card's holder name.
	 *                             Example: 'Pedro Paulo'
	 * @param {String} card.card_expiration_date The card's expiration date.
	 *                             Example: '1225' or '12/25'
	 * @param {String} card.card_cvv The card's cvv.
	 *                             Example: '543'
	*/
	var encrypt = function encrypt(opts, card) {
	  return _bluebird2.default.props({
	    key: card.key ? card.key : _transactions2.default.cardHashKey(opts),
	    cardString: queryString(card)
	  }).then(function (_ref2) {
	    var key = _ref2.key,
	        cardString = _ref2.cardString;
	    return generateCardHash(key, cardString);
	  });
	};
	
	/**
	 * Generates a hash signed with your api_key.
	 * This is used mainly to validate postbacks,
	 * this functions is the same as pagarme.postback.calculatesignature
	 * but it already knows your api_key.
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {String} string The string to be hashed.
	 *
	*/
	var sign = function sign(opts, string) {
	  return (0, _postback.calculateSignature)(opts.body.api_key, string);
	};
	
	/**
	 * Verifies a hash signed with your api_key.
	 * This is used mainly to validate postbacks,
	 * this functions is the same as pagarme.postback.validateSignature
	 * but it already knows your api_key.
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {String} string The string to be hashed.
	 *
	 * @param {String} expected The expected result.
	 *
	*/
	var verify = function verify(opts, string, expected) {
	  return (0, _postback.verifySignature)(opts.body.api_key, string, expected);
	};
	
	exports.default = {
	  encrypt: encrypt,
	  sign: sign,
	  verify: verify
	};
	module.exports = exports['default'];

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	var _curry3 = __webpack_require__(10);
	
	
	/**
	 * Replace a substring or regex match in a string with a replacement.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.7.0
	 * @category String
	 * @sig RegExp|String -> String -> String -> String
	 * @param {RegExp|String} pattern A regular expression or a substring to match.
	 * @param {String} replacement The string to replace the matches with.
	 * @param {String} str The String to do the search and replacement in.
	 * @return {String} The result.
	 * @example
	 *
	 *      R.replace('foo', 'bar', 'foo foo foo'); //=> 'bar foo foo'
	 *      R.replace(/foo/, 'bar', 'foo foo foo'); //=> 'bar foo foo'
	 *
	 *      // Use the "g" (global) flag to replace all occurrences:
	 *      R.replace(/foo/g, 'bar', 'foo foo foo'); //=> 'bar bar bar'
	 */
	module.exports = _curry3(function replace(regex, replacement, str) {
	  return str.replace(regex, replacement);
	});


/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	var _curry1 = __webpack_require__(6);
	var _toString = __webpack_require__(161);
	
	
	/**
	 * Returns the string representation of the given value. `eval`'ing the output
	 * should result in a value equivalent to the input value. Many of the built-in
	 * `toString` methods do not satisfy this requirement.
	 *
	 * If the given value is an `[object Object]` with a `toString` method other
	 * than `Object.prototype.toString`, this method is invoked with no arguments
	 * to produce the return value. This means user-defined constructor functions
	 * can provide a suitable `toString` method. For example:
	 *
	 *     function Point(x, y) {
	 *       this.x = x;
	 *       this.y = y;
	 *     }
	 *
	 *     Point.prototype.toString = function() {
	 *       return 'new Point(' + this.x + ', ' + this.y + ')';
	 *     };
	 *
	 *     R.toString(new Point(1, 2)); //=> 'new Point(1, 2)'
	 *
	 * @func
	 * @memberOf R
	 * @since v0.14.0
	 * @category String
	 * @sig * -> String
	 * @param {*} val
	 * @return {String}
	 * @example
	 *
	 *      R.toString(42); //=> '42'
	 *      R.toString('abc'); //=> '"abc"'
	 *      R.toString([1, 2, 3]); //=> '[1, 2, 3]'
	 *      R.toString({foo: 1, bar: 2, baz: 3}); //=> '{"bar": 2, "baz": 3, "foo": 1}'
	 *      R.toString(new Date('2001-02-03T04:05:06Z')); //=> 'new Date("2001-02-03T04:05:06.000Z")'
	 */
	module.exports = _curry1(function toString(val) { return _toString(val, []); });


/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	var _contains = __webpack_require__(118);
	var _map = __webpack_require__(21);
	var _quote = __webpack_require__(162);
	var _toISOString = __webpack_require__(163);
	var keys = __webpack_require__(29);
	var reject = __webpack_require__(164);
	
	
	module.exports = function _toString(x, seen) {
	  var recur = function recur(y) {
	    var xs = seen.concat([x]);
	    return _contains(y, xs) ? '<Circular>' : _toString(y, xs);
	  };
	
	  //  mapPairs :: (Object, [String]) -> [String]
	  var mapPairs = function(obj, keys) {
	    return _map(function(k) { return _quote(k) + ': ' + recur(obj[k]); }, keys.slice().sort());
	  };
	
	  switch (Object.prototype.toString.call(x)) {
	    case '[object Arguments]':
	      return '(function() { return arguments; }(' + _map(recur, x).join(', ') + '))';
	    case '[object Array]':
	      return '[' + _map(recur, x).concat(mapPairs(x, reject(function(k) { return /^\d+$/.test(k); }, keys(x)))).join(', ') + ']';
	    case '[object Boolean]':
	      return typeof x === 'object' ? 'new Boolean(' + recur(x.valueOf()) + ')' : x.toString();
	    case '[object Date]':
	      return 'new Date(' + (isNaN(x.valueOf()) ? recur(NaN) : _quote(_toISOString(x))) + ')';
	    case '[object Null]':
	      return 'null';
	    case '[object Number]':
	      return typeof x === 'object' ? 'new Number(' + recur(x.valueOf()) + ')' : 1 / x === -Infinity ? '-0' : x.toString(10);
	    case '[object String]':
	      return typeof x === 'object' ? 'new String(' + recur(x.valueOf()) + ')' : _quote(x);
	    case '[object Undefined]':
	      return 'undefined';
	    default:
	      if (typeof x.toString === 'function') {
	        var repr = x.toString();
	        if (repr !== '[object Object]') {
	          return repr;
	        }
	      }
	      return '{' + mapPairs(x, keys(x)).join(', ') + '}';
	  }
	};


/***/ },
/* 162 */
/***/ function(module, exports) {

	module.exports = function _quote(s) {
	  var escaped = s
	    .replace(/\\/g, '\\\\')
	    .replace(/[\b]/g, '\\b')  // \b matches word boundary; [\b] matches backspace
	    .replace(/\f/g, '\\f')
	    .replace(/\n/g, '\\n')
	    .replace(/\r/g, '\\r')
	    .replace(/\t/g, '\\t')
	    .replace(/\v/g, '\\v')
	    .replace(/\0/g, '\\0');
	
	  return '"' + escaped.replace(/"/g, '\\"') + '"';
	};


/***/ },
/* 163 */
/***/ function(module, exports) {

	/**
	 * Polyfill from <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString>.
	 */
	module.exports = (function() {
	  var pad = function pad(n) { return (n < 10 ? '0' : '') + n; };
	
	  return typeof Date.prototype.toISOString === 'function' ?
	    function _toISOString(d) {
	      return d.toISOString();
	    } :
	    function _toISOString(d) {
	      return (
	        d.getUTCFullYear() + '-' +
	        pad(d.getUTCMonth() + 1) + '-' +
	        pad(d.getUTCDate()) + 'T' +
	        pad(d.getUTCHours()) + ':' +
	        pad(d.getUTCMinutes()) + ':' +
	        pad(d.getUTCSeconds()) + '.' +
	        (d.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) + 'Z'
	      );
	    };
	}());


/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	var _complement = __webpack_require__(165);
	var _curry2 = __webpack_require__(5);
	var filter = __webpack_require__(166);
	
	
	/**
	 * The complement of `filter`.
	 *
	 * Acts as a transducer if a transformer is given in list position.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig Filterable f => (a -> Boolean) -> f a -> f a
	 * @param {Function} pred
	 * @param {Array} filterable
	 * @return {Array}
	 * @see R.filter, R.transduce, R.addIndex
	 * @example
	 *
	 *      var isOdd = (n) => n % 2 === 1;
	 *
	 *      R.reject(isOdd, [1, 2, 3, 4]); //=> [2, 4]
	 *
	 *      R.reject(isOdd, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
	 */
	module.exports = _curry2(function reject(pred, filterable) {
	  return filter(_complement(pred), filterable);
	});


/***/ },
/* 165 */
/***/ function(module, exports) {

	module.exports = function _complement(f) {
	  return function() {
	    return !f.apply(this, arguments);
	  };
	};


/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	var _curry2 = __webpack_require__(5);
	var _dispatchable = __webpack_require__(18);
	var _filter = __webpack_require__(167);
	var _isObject = __webpack_require__(150);
	var _reduce = __webpack_require__(22);
	var _xfilter = __webpack_require__(168);
	var keys = __webpack_require__(29);
	
	
	/**
	 * Takes a predicate and a "filterable", and returns a new filterable of the
	 * same type containing the members of the given filterable which satisfy the
	 * given predicate.
	 *
	 * Dispatches to the `filter` method of the second argument, if present.
	 *
	 * Acts as a transducer if a transformer is given in list position.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig Filterable f => (a -> Boolean) -> f a -> f a
	 * @param {Function} pred
	 * @param {Array} filterable
	 * @return {Array}
	 * @see R.reject, R.transduce, R.addIndex
	 * @example
	 *
	 *      var isEven = n => n % 2 === 0;
	 *
	 *      R.filter(isEven, [1, 2, 3, 4]); //=> [2, 4]
	 *
	 *      R.filter(isEven, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
	 */
	module.exports = _curry2(_dispatchable('filter', _xfilter, function(pred, filterable) {
	  return (
	    _isObject(filterable) ?
	      _reduce(function(acc, key) {
	        if (pred(filterable[key])) {
	          acc[key] = filterable[key];
	        }
	        return acc;
	      }, {}, keys(filterable)) :
	    // else
	      _filter(pred, filterable)
	  );
	}));


/***/ },
/* 167 */
/***/ function(module, exports) {

	module.exports = function _filter(fn, list) {
	  var idx = 0;
	  var len = list.length;
	  var result = [];
	
	  while (idx < len) {
	    if (fn(list[idx])) {
	      result[result.length] = list[idx];
	    }
	    idx += 1;
	  }
	  return result;
	};


/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	var _curry2 = __webpack_require__(5);
	var _xfBase = __webpack_require__(28);
	
	
	module.exports = (function() {
	  function XFilter(f, xf) {
	    this.xf = xf;
	    this.f = f;
	  }
	  XFilter.prototype['@@transducer/init'] = _xfBase.init;
	  XFilter.prototype['@@transducer/result'] = _xfBase.result;
	  XFilter.prototype['@@transducer/step'] = function(result, input) {
	    return this.f(input) ? this.xf['@@transducer/step'](result, input) : result;
	  };
	
	  return _curry2(function _xfilter(f, xf) { return new XFilter(f, xf); });
	}());


/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {/*!
	 * RSA library for Node.js
	 *
	 * Copyright (c) 2014 rzcoder
	 * All Rights Reserved.
	 *
	 * License BSD
	 */
	
	var constants = __webpack_require__(174);
	var rsa = __webpack_require__(175);
	var crypt = __webpack_require__(177);
	var ber = __webpack_require__(204).Ber;
	var _ = __webpack_require__(176)._;
	var utils = __webpack_require__(176);
	var schemes = __webpack_require__(196);
	var formats = __webpack_require__(214);
	
	if (typeof constants.RSA_NO_PADDING == "undefined") {
	    //patch for node v0.10.x, constants do not defined
	    constants.RSA_NO_PADDING = 3;
	}
	
	module.exports = (function () {
	    var SUPPORTED_HASH_ALGORITHMS = {
	        node10: ['md4', 'md5', 'ripemd160', 'sha', 'sha1', 'sha224', 'sha256', 'sha384', 'sha512'],
	        node: ['md4', 'md5', 'ripemd160', 'sha', 'sha1', 'sha224', 'sha256', 'sha384', 'sha512'],
	        iojs: ['md4', 'md5', 'ripemd160', 'sha', 'sha1', 'sha224', 'sha256', 'sha384', 'sha512'],
	        browser: ['md5', 'ripemd160', 'sha1', 'sha256', 'sha512']
	    };
	
	    var DEFAULT_ENCRYPTION_SCHEME = 'pkcs1_oaep';
	    var DEFAULT_SIGNING_SCHEME = 'pkcs1';
	
	    var DEFAULT_EXPORT_FORMAT = 'private';
	    var EXPORT_FORMAT_ALIASES = {
	        'private': 'pkcs1-private-pem',
	        'private-der': 'pkcs1-private-der',
	        'public': 'pkcs8-public-pem',
	        'public-der': 'pkcs8-public-der',
	    };
	
	    /**
	     * @param key {string|buffer|object} Key in PEM format, or data for generate key {b: bits, e: exponent}
	     * @constructor
	     */
	    function NodeRSA(key, format, options) {
	        if (!(this instanceof NodeRSA)) {
	            return new NodeRSA(key, format, options);
	        }
	
	        if (_.isObject(format)) {
	            options = format;
	            format = undefined;
	        }
	
	        this.$options = {
	            signingScheme: DEFAULT_SIGNING_SCHEME,
	            signingSchemeOptions: {
	                hash: 'sha256',
	                saltLength: null
	            },
	            encryptionScheme: DEFAULT_ENCRYPTION_SCHEME,
	            encryptionSchemeOptions: {
	                hash: 'sha1',
	                label: null
	            },
	            environment: utils.detectEnvironment(),
	            rsaUtils: this
	        };
	        this.keyPair = new rsa.Key();
	        this.$cache = {};
	
	        if (Buffer.isBuffer(key) || _.isString(key)) {
	            this.importKey(key, format);
	        } else if (_.isObject(key)) {
	            this.generateKeyPair(key.b, key.e);
	        }
	
	        this.setOptions(options);
	    }
	
	    /**
	     * Set and validate options for key instance
	     * @param options
	     */
	    NodeRSA.prototype.setOptions = function (options) {
	        options = options || {};
	        if (options.environment) {
	            this.$options.environment = options.environment;
	        }
	
	        if (options.signingScheme) {
	            if (_.isString(options.signingScheme)) {
	                var signingScheme = options.signingScheme.toLowerCase().split('-');
	                if (signingScheme.length == 1) {
	                    if (SUPPORTED_HASH_ALGORITHMS.node.indexOf(signingScheme[0]) > -1) {
	                        this.$options.signingSchemeOptions = {
	                            hash: signingScheme[0]
	                        };
	                        this.$options.signingScheme = DEFAULT_SIGNING_SCHEME;
	                    } else {
	                        this.$options.signingScheme = signingScheme[0];
	                        this.$options.signingSchemeOptions = {
	                            hash: null
	                        };
	                    }
	                } else {
	                    this.$options.signingSchemeOptions = {
	                        hash: signingScheme[1]
	                    };
	                    this.$options.signingScheme = signingScheme[0];
	                }
	            } else if (_.isObject(options.signingScheme)) {
	                this.$options.signingScheme = options.signingScheme.scheme || DEFAULT_SIGNING_SCHEME;
	                this.$options.signingSchemeOptions = _.omit(options.signingScheme, 'scheme');
	            }
	
	            if (!schemes.isSignature(this.$options.signingScheme)) {
	                throw Error('Unsupported signing scheme');
	            }
	
	            if (this.$options.signingSchemeOptions.hash &&
	                SUPPORTED_HASH_ALGORITHMS[this.$options.environment].indexOf(this.$options.signingSchemeOptions.hash) === -1) {
	                throw Error('Unsupported hashing algorithm for ' + this.$options.environment + ' environment');
	            }
	        }
	
	        if (options.encryptionScheme) {
	            if (_.isString(options.encryptionScheme)) {
	                this.$options.encryptionScheme = options.encryptionScheme.toLowerCase();
	                this.$options.encryptionSchemeOptions = {};
	            } else if (_.isObject(options.encryptionScheme)) {
	                this.$options.encryptionScheme = options.encryptionScheme.scheme || DEFAULT_ENCRYPTION_SCHEME;
	                this.$options.encryptionSchemeOptions = _.omit(options.encryptionScheme, 'scheme');
	            }
	
	            if (!schemes.isEncryption(this.$options.encryptionScheme)) {
	                throw Error('Unsupported encryption scheme');
	            }
	
	            if (this.$options.encryptionSchemeOptions.hash &&
	                SUPPORTED_HASH_ALGORITHMS[this.$options.environment].indexOf(this.$options.encryptionSchemeOptions.hash) === -1) {
	                throw Error('Unsupported hashing algorithm for ' + this.$options.environment + ' environment');
	            }
	        }
	
	        this.keyPair.setOptions(this.$options);
	    };
	
	    /**
	     * Generate private/public keys pair
	     *
	     * @param bits {int} length key in bits. Default 2048.
	     * @param exp {int} public exponent. Default 65537.
	     * @returns {NodeRSA}
	     */
	    NodeRSA.prototype.generateKeyPair = function (bits, exp) {
	        bits = bits || 2048;
	        exp = exp || 65537;
	
	        if (bits % 8 !== 0) {
	            throw Error('Key size must be a multiple of 8.');
	        }
	
	        this.keyPair.generate(bits, exp.toString(16));
	        this.$cache = {};
	        return this;
	    };
	
	    /**
	     * Importing key
	     * @param keyData {string|buffer|Object}
	     * @param format {string}
	     */
	    NodeRSA.prototype.importKey = function (keyData, format) {
	        if (!keyData) {
	            throw Error("Empty key given");
	        }
	
	        if (format) {
	            format = EXPORT_FORMAT_ALIASES[format] || format;
	        }
	
	        if (!formats.detectAndImport(this.keyPair, keyData, format) && format === undefined) {
	            throw Error("Key format must be specified");
	        }
	
	        this.$cache = {};
	    };
	
	    /**
	     * Exporting key
	     * @param [format] {string}
	     */
	    NodeRSA.prototype.exportKey = function (format) {
	        format = format || DEFAULT_EXPORT_FORMAT;
	        format = EXPORT_FORMAT_ALIASES[format] || format;
	
	        if (!this.$cache[format]) {
	            this.$cache[format] = formats.detectAndExport(this.keyPair, format);
	        }
	
	        return this.$cache[format];
	    };
	
	    /**
	     * Check if key pair contains private key
	     */
	    NodeRSA.prototype.isPrivate = function () {
	        return this.keyPair.isPrivate();
	    };
	
	    /**
	     * Check if key pair contains public key
	     * @param [strict] {boolean} - public key only, return false if have private exponent
	     */
	    NodeRSA.prototype.isPublic = function (strict) {
	        return this.keyPair.isPublic(strict);
	    };
	
	    /**
	     * Check if key pair doesn't contains any data
	     */
	    NodeRSA.prototype.isEmpty = function (strict) {
	        return !(this.keyPair.n || this.keyPair.e || this.keyPair.d);
	    };
	
	    /**
	     * Encrypting data method with public key
	     *
	     * @param buffer {string|number|object|array|Buffer} - data for encrypting. Object and array will convert to JSON string.
	     * @param encoding {string} - optional. Encoding for output result, may be 'buffer', 'binary', 'hex' or 'base64'. Default 'buffer'.
	     * @param source_encoding {string} - optional. Encoding for given string. Default utf8.
	     * @returns {string|Buffer}
	     */
	    NodeRSA.prototype.encrypt = function (buffer, encoding, source_encoding) {
	        return this.$$encryptKey(false, buffer, encoding, source_encoding);
	    };
	
	    /**
	     * Decrypting data method with private key
	     *
	     * @param buffer {Buffer} - buffer for decrypting
	     * @param encoding - encoding for result string, can also take 'json' or 'buffer' for the automatic conversion of this type
	     * @returns {Buffer|object|string}
	     */
	    NodeRSA.prototype.decrypt = function (buffer, encoding) {
	        return this.$$decryptKey(false, buffer, encoding);
	    };
	
	    /**
	     * Encrypting data method with private key
	     *
	     * Parameters same as `encrypt` method
	     */
	    NodeRSA.prototype.encryptPrivate = function (buffer, encoding, source_encoding) {
	        return this.$$encryptKey(true, buffer, encoding, source_encoding);
	    };
	
	    /**
	     * Decrypting data method with public key
	     *
	     * Parameters same as `decrypt` method
	     */
	    NodeRSA.prototype.decryptPublic = function (buffer, encoding) {
	        return this.$$decryptKey(true, buffer, encoding);
	    };
	
	    /**
	     * Encrypting data method with custom key
	     */
	    NodeRSA.prototype.$$encryptKey = function (usePrivate, buffer, encoding, source_encoding) {
	        try {
	            var res = this.keyPair.encrypt(this.$getDataForEncrypt(buffer, source_encoding), usePrivate);
	
	            if (encoding == 'buffer' || !encoding) {
	                return res;
	            } else {
	                return res.toString(encoding);
	            }
	        } catch (e) {
	            throw Error('Error during encryption. Original error: ' + e);
	        }
	    };
	
	    /**
	     * Decrypting data method with custom key
	     */
	    NodeRSA.prototype.$$decryptKey = function (usePublic, buffer, encoding) {
	        try {
	            buffer = _.isString(buffer) ? new Buffer(buffer, 'base64') : buffer;
	            var res = this.keyPair.decrypt(buffer, usePublic);
	
	            if (res === null) {
	                throw Error('Key decrypt method returns null.');
	            }
	
	            return this.$getDecryptedData(res, encoding);
	        } catch (e) {
	            throw Error('Error during decryption (probably incorrect key). Original error: ' + e);
	        }
	    };
	
	    /**
	     *  Signing data
	     *
	     * @param buffer {string|number|object|array|Buffer} - data for signing. Object and array will convert to JSON string.
	     * @param encoding {string} - optional. Encoding for output result, may be 'buffer', 'binary', 'hex' or 'base64'. Default 'buffer'.
	     * @param source_encoding {string} - optional. Encoding for given string. Default utf8.
	     * @returns {string|Buffer}
	     */
	    NodeRSA.prototype.sign = function (buffer, encoding, source_encoding) {
	        if (!this.isPrivate()) {
	            throw Error("This is not private key");
	        }
	
	        var res = this.keyPair.sign(this.$getDataForEncrypt(buffer, source_encoding));
	
	        if (encoding && encoding != 'buffer') {
	            res = res.toString(encoding);
	        }
	
	        return res;
	    };
	
	    /**
	     *  Verifying signed data
	     *
	     * @param buffer - signed data
	     * @param signature
	     * @param source_encoding {string} - optional. Encoding for given string. Default utf8.
	     * @param signature_encoding - optional. Encoding of given signature. May be 'buffer', 'binary', 'hex' or 'base64'. Default 'buffer'.
	     * @returns {*}
	     */
	    NodeRSA.prototype.verify = function (buffer, signature, source_encoding, signature_encoding) {
	        if (!this.isPublic()) {
	            throw Error("This is not public key");
	        }
	        signature_encoding = (!signature_encoding || signature_encoding == 'buffer' ? null : signature_encoding);
	        return this.keyPair.verify(this.$getDataForEncrypt(buffer, source_encoding), signature, signature_encoding);
	    };
	
	    /**
	     * Returns key size in bits
	     * @returns {int}
	     */
	    NodeRSA.prototype.getKeySize = function () {
	        return this.keyPair.keySize;
	    };
	
	    /**
	     * Returns max message length in bytes (for 1 chunk) depending on current encryption scheme
	     * @returns {int}
	     */
	    NodeRSA.prototype.getMaxMessageSize = function () {
	        return this.keyPair.maxMessageLength;
	    };
	
	    /**
	     * Preparing given data for encrypting/signing. Just make new/return Buffer object.
	     *
	     * @param buffer {string|number|object|array|Buffer} - data for encrypting. Object and array will convert to JSON string.
	     * @param encoding {string} - optional. Encoding for given string. Default utf8.
	     * @returns {Buffer}
	     */
	    NodeRSA.prototype.$getDataForEncrypt = function (buffer, encoding) {
	        if (_.isString(buffer) || _.isNumber(buffer)) {
	            return new Buffer('' + buffer, encoding || 'utf8');
	        } else if (Buffer.isBuffer(buffer)) {
	            return buffer;
	        } else if (_.isObject(buffer)) {
	            return new Buffer(JSON.stringify(buffer));
	        } else {
	            throw Error("Unexpected data type");
	        }
	    };
	
	    /**
	     *
	     * @param buffer {Buffer} - decrypted data.
	     * @param encoding - optional. Encoding for result output. May be 'buffer', 'json' or any of Node.js Buffer supported encoding.
	     * @returns {*}
	     */
	    NodeRSA.prototype.$getDecryptedData = function (buffer, encoding) {
	        encoding = encoding || 'buffer';
	
	        if (encoding == 'buffer') {
	            return buffer;
	        } else if (encoding == 'json') {
	            return JSON.parse(buffer.toString());
	        } else {
	            return buffer.toString(encoding);
	        }
	    };
	
	    return NodeRSA;
	})();
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(170).Buffer))

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer, global) {/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	/* eslint-disable no-proto */
	
	'use strict'
	
	var base64 = __webpack_require__(171)
	var ieee754 = __webpack_require__(172)
	var isArray = __webpack_require__(173)
	
	exports.Buffer = Buffer
	exports.SlowBuffer = SlowBuffer
	exports.INSPECT_MAX_BYTES = 50
	
	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Due to various browser bugs, sometimes the Object implementation will be used even
	 * when the browser supports typed arrays.
	 *
	 * Note:
	 *
	 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
	 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *     incorrect length in some situations.
	
	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
	 * get the Object implementation, which is slower but behaves correctly.
	 */
	Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
	  ? global.TYPED_ARRAY_SUPPORT
	  : typedArraySupport()
	
	/*
	 * Export kMaxLength after typed array support is determined.
	 */
	exports.kMaxLength = kMaxLength()
	
	function typedArraySupport () {
	  try {
	    var arr = new Uint8Array(1)
	    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
	    return arr.foo() === 42 && // typed array instances can be augmented
	        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
	        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
	  } catch (e) {
	    return false
	  }
	}
	
	function kMaxLength () {
	  return Buffer.TYPED_ARRAY_SUPPORT
	    ? 0x7fffffff
	    : 0x3fffffff
	}
	
	function createBuffer (that, length) {
	  if (kMaxLength() < length) {
	    throw new RangeError('Invalid typed array length')
	  }
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = new Uint8Array(length)
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    if (that === null) {
	      that = new Buffer(length)
	    }
	    that.length = length
	  }
	
	  return that
	}
	
	/**
	 * The Buffer constructor returns instances of `Uint8Array` that have their
	 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
	 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
	 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
	 * returns a single octet.
	 *
	 * The `Uint8Array` prototype remains unmodified.
	 */
	
	function Buffer (arg, encodingOrOffset, length) {
	  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
	    return new Buffer(arg, encodingOrOffset, length)
	  }
	
	  // Common case.
	  if (typeof arg === 'number') {
	    if (typeof encodingOrOffset === 'string') {
	      throw new Error(
	        'If encoding is specified then the first argument must be a string'
	      )
	    }
	    return allocUnsafe(this, arg)
	  }
	  return from(this, arg, encodingOrOffset, length)
	}
	
	Buffer.poolSize = 8192 // not used by this implementation
	
	// TODO: Legacy, not needed anymore. Remove in next major version.
	Buffer._augment = function (arr) {
	  arr.__proto__ = Buffer.prototype
	  return arr
	}
	
	function from (that, value, encodingOrOffset, length) {
	  if (typeof value === 'number') {
	    throw new TypeError('"value" argument must not be a number')
	  }
	
	  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
	    return fromArrayBuffer(that, value, encodingOrOffset, length)
	  }
	
	  if (typeof value === 'string') {
	    return fromString(that, value, encodingOrOffset)
	  }
	
	  return fromObject(that, value)
	}
	
	/**
	 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
	 * if value is a number.
	 * Buffer.from(str[, encoding])
	 * Buffer.from(array)
	 * Buffer.from(buffer)
	 * Buffer.from(arrayBuffer[, byteOffset[, length]])
	 **/
	Buffer.from = function (value, encodingOrOffset, length) {
	  return from(null, value, encodingOrOffset, length)
	}
	
	if (Buffer.TYPED_ARRAY_SUPPORT) {
	  Buffer.prototype.__proto__ = Uint8Array.prototype
	  Buffer.__proto__ = Uint8Array
	  if (typeof Symbol !== 'undefined' && Symbol.species &&
	      Buffer[Symbol.species] === Buffer) {
	    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
	    Object.defineProperty(Buffer, Symbol.species, {
	      value: null,
	      configurable: true
	    })
	  }
	}
	
	function assertSize (size) {
	  if (typeof size !== 'number') {
	    throw new TypeError('"size" argument must be a number')
	  } else if (size < 0) {
	    throw new RangeError('"size" argument must not be negative')
	  }
	}
	
	function alloc (that, size, fill, encoding) {
	  assertSize(size)
	  if (size <= 0) {
	    return createBuffer(that, size)
	  }
	  if (fill !== undefined) {
	    // Only pay attention to encoding if it's a string. This
	    // prevents accidentally sending in a number that would
	    // be interpretted as a start offset.
	    return typeof encoding === 'string'
	      ? createBuffer(that, size).fill(fill, encoding)
	      : createBuffer(that, size).fill(fill)
	  }
	  return createBuffer(that, size)
	}
	
	/**
	 * Creates a new filled Buffer instance.
	 * alloc(size[, fill[, encoding]])
	 **/
	Buffer.alloc = function (size, fill, encoding) {
	  return alloc(null, size, fill, encoding)
	}
	
	function allocUnsafe (that, size) {
	  assertSize(size)
	  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < size; ++i) {
	      that[i] = 0
	    }
	  }
	  return that
	}
	
	/**
	 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
	 * */
	Buffer.allocUnsafe = function (size) {
	  return allocUnsafe(null, size)
	}
	/**
	 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
	 */
	Buffer.allocUnsafeSlow = function (size) {
	  return allocUnsafe(null, size)
	}
	
	function fromString (that, string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') {
	    encoding = 'utf8'
	  }
	
	  if (!Buffer.isEncoding(encoding)) {
	    throw new TypeError('"encoding" must be a valid string encoding')
	  }
	
	  var length = byteLength(string, encoding) | 0
	  that = createBuffer(that, length)
	
	  var actual = that.write(string, encoding)
	
	  if (actual !== length) {
	    // Writing a hex string, for example, that contains invalid characters will
	    // cause everything after the first invalid character to be ignored. (e.g.
	    // 'abxxcd' will be treated as 'ab')
	    that = that.slice(0, actual)
	  }
	
	  return that
	}
	
	function fromArrayLike (that, array) {
	  var length = array.length < 0 ? 0 : checked(array.length) | 0
	  that = createBuffer(that, length)
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}
	
	function fromArrayBuffer (that, array, byteOffset, length) {
	  array.byteLength // this throws if `array` is not a valid ArrayBuffer
	
	  if (byteOffset < 0 || array.byteLength < byteOffset) {
	    throw new RangeError('\'offset\' is out of bounds')
	  }
	
	  if (array.byteLength < byteOffset + (length || 0)) {
	    throw new RangeError('\'length\' is out of bounds')
	  }
	
	  if (byteOffset === undefined && length === undefined) {
	    array = new Uint8Array(array)
	  } else if (length === undefined) {
	    array = new Uint8Array(array, byteOffset)
	  } else {
	    array = new Uint8Array(array, byteOffset, length)
	  }
	
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = array
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that = fromArrayLike(that, array)
	  }
	  return that
	}
	
	function fromObject (that, obj) {
	  if (Buffer.isBuffer(obj)) {
	    var len = checked(obj.length) | 0
	    that = createBuffer(that, len)
	
	    if (that.length === 0) {
	      return that
	    }
	
	    obj.copy(that, 0, 0, len)
	    return that
	  }
	
	  if (obj) {
	    if ((typeof ArrayBuffer !== 'undefined' &&
	        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
	      if (typeof obj.length !== 'number' || isnan(obj.length)) {
	        return createBuffer(that, 0)
	      }
	      return fromArrayLike(that, obj)
	    }
	
	    if (obj.type === 'Buffer' && isArray(obj.data)) {
	      return fromArrayLike(that, obj.data)
	    }
	  }
	
	  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
	}
	
	function checked (length) {
	  // Note: cannot use `length < kMaxLength()` here because that fails when
	  // length is NaN (which is otherwise coerced to zero.)
	  if (length >= kMaxLength()) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
	                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
	  }
	  return length | 0
	}
	
	function SlowBuffer (length) {
	  if (+length != length) { // eslint-disable-line eqeqeq
	    length = 0
	  }
	  return Buffer.alloc(+length)
	}
	
	Buffer.isBuffer = function isBuffer (b) {
	  return !!(b != null && b._isBuffer)
	}
	
	Buffer.compare = function compare (a, b) {
	  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
	    throw new TypeError('Arguments must be Buffers')
	  }
	
	  if (a === b) return 0
	
	  var x = a.length
	  var y = b.length
	
	  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
	    if (a[i] !== b[i]) {
	      x = a[i]
	      y = b[i]
	      break
	    }
	  }
	
	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}
	
	Buffer.isEncoding = function isEncoding (encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'latin1':
	    case 'binary':
	    case 'base64':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true
	    default:
	      return false
	  }
	}
	
	Buffer.concat = function concat (list, length) {
	  if (!isArray(list)) {
	    throw new TypeError('"list" argument must be an Array of Buffers')
	  }
	
	  if (list.length === 0) {
	    return Buffer.alloc(0)
	  }
	
	  var i
	  if (length === undefined) {
	    length = 0
	    for (i = 0; i < list.length; ++i) {
	      length += list[i].length
	    }
	  }
	
	  var buffer = Buffer.allocUnsafe(length)
	  var pos = 0
	  for (i = 0; i < list.length; ++i) {
	    var buf = list[i]
	    if (!Buffer.isBuffer(buf)) {
	      throw new TypeError('"list" argument must be an Array of Buffers')
	    }
	    buf.copy(buffer, pos)
	    pos += buf.length
	  }
	  return buffer
	}
	
	function byteLength (string, encoding) {
	  if (Buffer.isBuffer(string)) {
	    return string.length
	  }
	  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
	      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
	    return string.byteLength
	  }
	  if (typeof string !== 'string') {
	    string = '' + string
	  }
	
	  var len = string.length
	  if (len === 0) return 0
	
	  // Use a for loop to avoid recursion
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'ascii':
	      case 'latin1':
	      case 'binary':
	        return len
	      case 'utf8':
	      case 'utf-8':
	      case undefined:
	        return utf8ToBytes(string).length
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return len * 2
	      case 'hex':
	        return len >>> 1
	      case 'base64':
	        return base64ToBytes(string).length
	      default:
	        if (loweredCase) return utf8ToBytes(string).length // assume utf8
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	Buffer.byteLength = byteLength
	
	function slowToString (encoding, start, end) {
	  var loweredCase = false
	
	  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
	  // property of a typed array.
	
	  // This behaves neither like String nor Uint8Array in that we set start/end
	  // to their upper/lower bounds if the value passed is out of range.
	  // undefined is handled specially as per ECMA-262 6th Edition,
	  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
	  if (start === undefined || start < 0) {
	    start = 0
	  }
	  // Return early if start > this.length. Done here to prevent potential uint32
	  // coercion fail below.
	  if (start > this.length) {
	    return ''
	  }
	
	  if (end === undefined || end > this.length) {
	    end = this.length
	  }
	
	  if (end <= 0) {
	    return ''
	  }
	
	  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
	  end >>>= 0
	  start >>>= 0
	
	  if (end <= start) {
	    return ''
	  }
	
	  if (!encoding) encoding = 'utf8'
	
	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end)
	
	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end)
	
	      case 'ascii':
	        return asciiSlice(this, start, end)
	
	      case 'latin1':
	      case 'binary':
	        return latin1Slice(this, start, end)
	
	      case 'base64':
	        return base64Slice(this, start, end)
	
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end)
	
	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = (encoding + '').toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	
	// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
	// Buffer instances.
	Buffer.prototype._isBuffer = true
	
	function swap (b, n, m) {
	  var i = b[n]
	  b[n] = b[m]
	  b[m] = i
	}
	
	Buffer.prototype.swap16 = function swap16 () {
	  var len = this.length
	  if (len % 2 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 16-bits')
	  }
	  for (var i = 0; i < len; i += 2) {
	    swap(this, i, i + 1)
	  }
	  return this
	}
	
	Buffer.prototype.swap32 = function swap32 () {
	  var len = this.length
	  if (len % 4 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 32-bits')
	  }
	  for (var i = 0; i < len; i += 4) {
	    swap(this, i, i + 3)
	    swap(this, i + 1, i + 2)
	  }
	  return this
	}
	
	Buffer.prototype.swap64 = function swap64 () {
	  var len = this.length
	  if (len % 8 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 64-bits')
	  }
	  for (var i = 0; i < len; i += 8) {
	    swap(this, i, i + 7)
	    swap(this, i + 1, i + 6)
	    swap(this, i + 2, i + 5)
	    swap(this, i + 3, i + 4)
	  }
	  return this
	}
	
	Buffer.prototype.toString = function toString () {
	  var length = this.length | 0
	  if (length === 0) return ''
	  if (arguments.length === 0) return utf8Slice(this, 0, length)
	  return slowToString.apply(this, arguments)
	}
	
	Buffer.prototype.equals = function equals (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return true
	  return Buffer.compare(this, b) === 0
	}
	
	Buffer.prototype.inspect = function inspect () {
	  var str = ''
	  var max = exports.INSPECT_MAX_BYTES
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
	    if (this.length > max) str += ' ... '
	  }
	  return '<Buffer ' + str + '>'
	}
	
	Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
	  if (!Buffer.isBuffer(target)) {
	    throw new TypeError('Argument must be a Buffer')
	  }
	
	  if (start === undefined) {
	    start = 0
	  }
	  if (end === undefined) {
	    end = target ? target.length : 0
	  }
	  if (thisStart === undefined) {
	    thisStart = 0
	  }
	  if (thisEnd === undefined) {
	    thisEnd = this.length
	  }
	
	  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
	    throw new RangeError('out of range index')
	  }
	
	  if (thisStart >= thisEnd && start >= end) {
	    return 0
	  }
	  if (thisStart >= thisEnd) {
	    return -1
	  }
	  if (start >= end) {
	    return 1
	  }
	
	  start >>>= 0
	  end >>>= 0
	  thisStart >>>= 0
	  thisEnd >>>= 0
	
	  if (this === target) return 0
	
	  var x = thisEnd - thisStart
	  var y = end - start
	  var len = Math.min(x, y)
	
	  var thisCopy = this.slice(thisStart, thisEnd)
	  var targetCopy = target.slice(start, end)
	
	  for (var i = 0; i < len; ++i) {
	    if (thisCopy[i] !== targetCopy[i]) {
	      x = thisCopy[i]
	      y = targetCopy[i]
	      break
	    }
	  }
	
	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}
	
	// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
	// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
	//
	// Arguments:
	// - buffer - a Buffer to search
	// - val - a string, Buffer, or number
	// - byteOffset - an index into `buffer`; will be clamped to an int32
	// - encoding - an optional encoding, relevant is val is a string
	// - dir - true for indexOf, false for lastIndexOf
	function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
	  // Empty buffer means no match
	  if (buffer.length === 0) return -1
	
	  // Normalize byteOffset
	  if (typeof byteOffset === 'string') {
	    encoding = byteOffset
	    byteOffset = 0
	  } else if (byteOffset > 0x7fffffff) {
	    byteOffset = 0x7fffffff
	  } else if (byteOffset < -0x80000000) {
	    byteOffset = -0x80000000
	  }
	  byteOffset = +byteOffset  // Coerce to Number.
	  if (isNaN(byteOffset)) {
	    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
	    byteOffset = dir ? 0 : (buffer.length - 1)
	  }
	
	  // Normalize byteOffset: negative offsets start from the end of the buffer
	  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
	  if (byteOffset >= buffer.length) {
	    if (dir) return -1
	    else byteOffset = buffer.length - 1
	  } else if (byteOffset < 0) {
	    if (dir) byteOffset = 0
	    else return -1
	  }
	
	  // Normalize val
	  if (typeof val === 'string') {
	    val = Buffer.from(val, encoding)
	  }
	
	  // Finally, search either indexOf (if dir is true) or lastIndexOf
	  if (Buffer.isBuffer(val)) {
	    // Special case: looking for empty string/buffer always fails
	    if (val.length === 0) {
	      return -1
	    }
	    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
	  } else if (typeof val === 'number') {
	    val = val & 0xFF // Search for a byte value [0-255]
	    if (Buffer.TYPED_ARRAY_SUPPORT &&
	        typeof Uint8Array.prototype.indexOf === 'function') {
	      if (dir) {
	        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
	      } else {
	        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
	      }
	    }
	    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
	  }
	
	  throw new TypeError('val must be string, number or Buffer')
	}
	
	function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
	  var indexSize = 1
	  var arrLength = arr.length
	  var valLength = val.length
	
	  if (encoding !== undefined) {
	    encoding = String(encoding).toLowerCase()
	    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
	        encoding === 'utf16le' || encoding === 'utf-16le') {
	      if (arr.length < 2 || val.length < 2) {
	        return -1
	      }
	      indexSize = 2
	      arrLength /= 2
	      valLength /= 2
	      byteOffset /= 2
	    }
	  }
	
	  function read (buf, i) {
	    if (indexSize === 1) {
	      return buf[i]
	    } else {
	      return buf.readUInt16BE(i * indexSize)
	    }
	  }
	
	  var i
	  if (dir) {
	    var foundIndex = -1
	    for (i = byteOffset; i < arrLength; i++) {
	      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
	        if (foundIndex === -1) foundIndex = i
	        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
	      } else {
	        if (foundIndex !== -1) i -= i - foundIndex
	        foundIndex = -1
	      }
	    }
	  } else {
	    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
	    for (i = byteOffset; i >= 0; i--) {
	      var found = true
	      for (var j = 0; j < valLength; j++) {
	        if (read(arr, i + j) !== read(val, j)) {
	          found = false
	          break
	        }
	      }
	      if (found) return i
	    }
	  }
	
	  return -1
	}
	
	Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
	  return this.indexOf(val, byteOffset, encoding) !== -1
	}
	
	Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
	}
	
	Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
	}
	
	function hexWrite (buf, string, offset, length) {
	  offset = Number(offset) || 0
	  var remaining = buf.length - offset
	  if (!length) {
	    length = remaining
	  } else {
	    length = Number(length)
	    if (length > remaining) {
	      length = remaining
	    }
	  }
	
	  // must be an even number of digits
	  var strLen = string.length
	  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')
	
	  if (length > strLen / 2) {
	    length = strLen / 2
	  }
	  for (var i = 0; i < length; ++i) {
	    var parsed = parseInt(string.substr(i * 2, 2), 16)
	    if (isNaN(parsed)) return i
	    buf[offset + i] = parsed
	  }
	  return i
	}
	
	function utf8Write (buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
	}
	
	function asciiWrite (buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length)
	}
	
	function latin1Write (buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length)
	}
	
	function base64Write (buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length)
	}
	
	function ucs2Write (buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
	}
	
	Buffer.prototype.write = function write (string, offset, length, encoding) {
	  // Buffer#write(string)
	  if (offset === undefined) {
	    encoding = 'utf8'
	    length = this.length
	    offset = 0
	  // Buffer#write(string, encoding)
	  } else if (length === undefined && typeof offset === 'string') {
	    encoding = offset
	    length = this.length
	    offset = 0
	  // Buffer#write(string, offset[, length][, encoding])
	  } else if (isFinite(offset)) {
	    offset = offset | 0
	    if (isFinite(length)) {
	      length = length | 0
	      if (encoding === undefined) encoding = 'utf8'
	    } else {
	      encoding = length
	      length = undefined
	    }
	  // legacy write(string, encoding, offset, length) - remove in v0.13
	  } else {
	    throw new Error(
	      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
	    )
	  }
	
	  var remaining = this.length - offset
	  if (length === undefined || length > remaining) length = remaining
	
	  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
	    throw new RangeError('Attempt to write outside buffer bounds')
	  }
	
	  if (!encoding) encoding = 'utf8'
	
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'hex':
	        return hexWrite(this, string, offset, length)
	
	      case 'utf8':
	      case 'utf-8':
	        return utf8Write(this, string, offset, length)
	
	      case 'ascii':
	        return asciiWrite(this, string, offset, length)
	
	      case 'latin1':
	      case 'binary':
	        return latin1Write(this, string, offset, length)
	
	      case 'base64':
	        // Warning: maxLength not taken into account in base64Write
	        return base64Write(this, string, offset, length)
	
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return ucs2Write(this, string, offset, length)
	
	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	
	Buffer.prototype.toJSON = function toJSON () {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  }
	}
	
	function base64Slice (buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return base64.fromByteArray(buf)
	  } else {
	    return base64.fromByteArray(buf.slice(start, end))
	  }
	}
	
	function utf8Slice (buf, start, end) {
	  end = Math.min(buf.length, end)
	  var res = []
	
	  var i = start
	  while (i < end) {
	    var firstByte = buf[i]
	    var codePoint = null
	    var bytesPerSequence = (firstByte > 0xEF) ? 4
	      : (firstByte > 0xDF) ? 3
	      : (firstByte > 0xBF) ? 2
	      : 1
	
	    if (i + bytesPerSequence <= end) {
	      var secondByte, thirdByte, fourthByte, tempCodePoint
	
	      switch (bytesPerSequence) {
	        case 1:
	          if (firstByte < 0x80) {
	            codePoint = firstByte
	          }
	          break
	        case 2:
	          secondByte = buf[i + 1]
	          if ((secondByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
	            if (tempCodePoint > 0x7F) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 3:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
	            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 4:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          fourthByte = buf[i + 3]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
	            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
	              codePoint = tempCodePoint
	            }
	          }
	      }
	    }
	
	    if (codePoint === null) {
	      // we did not generate a valid codePoint so insert a
	      // replacement char (U+FFFD) and advance only 1 byte
	      codePoint = 0xFFFD
	      bytesPerSequence = 1
	    } else if (codePoint > 0xFFFF) {
	      // encode to utf16 (surrogate pair dance)
	      codePoint -= 0x10000
	      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
	      codePoint = 0xDC00 | codePoint & 0x3FF
	    }
	
	    res.push(codePoint)
	    i += bytesPerSequence
	  }
	
	  return decodeCodePointsArray(res)
	}
	
	// Based on http://stackoverflow.com/a/22747272/680742, the browser with
	// the lowest limit is Chrome, with 0x10000 args.
	// We go 1 magnitude less, for safety
	var MAX_ARGUMENTS_LENGTH = 0x1000
	
	function decodeCodePointsArray (codePoints) {
	  var len = codePoints.length
	  if (len <= MAX_ARGUMENTS_LENGTH) {
	    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
	  }
	
	  // Decode in chunks to avoid "call stack size exceeded".
	  var res = ''
	  var i = 0
	  while (i < len) {
	    res += String.fromCharCode.apply(
	      String,
	      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
	    )
	  }
	  return res
	}
	
	function asciiSlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)
	
	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i] & 0x7F)
	  }
	  return ret
	}
	
	function latin1Slice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)
	
	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i])
	  }
	  return ret
	}
	
	function hexSlice (buf, start, end) {
	  var len = buf.length
	
	  if (!start || start < 0) start = 0
	  if (!end || end < 0 || end > len) end = len
	
	  var out = ''
	  for (var i = start; i < end; ++i) {
	    out += toHex(buf[i])
	  }
	  return out
	}
	
	function utf16leSlice (buf, start, end) {
	  var bytes = buf.slice(start, end)
	  var res = ''
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
	  }
	  return res
	}
	
	Buffer.prototype.slice = function slice (start, end) {
	  var len = this.length
	  start = ~~start
	  end = end === undefined ? len : ~~end
	
	  if (start < 0) {
	    start += len
	    if (start < 0) start = 0
	  } else if (start > len) {
	    start = len
	  }
	
	  if (end < 0) {
	    end += len
	    if (end < 0) end = 0
	  } else if (end > len) {
	    end = len
	  }
	
	  if (end < start) end = start
	
	  var newBuf
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    newBuf = this.subarray(start, end)
	    newBuf.__proto__ = Buffer.prototype
	  } else {
	    var sliceLen = end - start
	    newBuf = new Buffer(sliceLen, undefined)
	    for (var i = 0; i < sliceLen; ++i) {
	      newBuf[i] = this[i + start]
	    }
	  }
	
	  return newBuf
	}
	
	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset (offset, ext, length) {
	  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
	}
	
	Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)
	
	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	
	  return val
	}
	
	Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length)
	  }
	
	  var val = this[offset + --byteLength]
	  var mul = 1
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul
	  }
	
	  return val
	}
	
	Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  return this[offset]
	}
	
	Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return this[offset] | (this[offset + 1] << 8)
	}
	
	Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return (this[offset] << 8) | this[offset + 1]
	}
	
	Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return ((this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16)) +
	      (this[offset + 3] * 0x1000000)
	}
	
	Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return (this[offset] * 0x1000000) +
	    ((this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    this[offset + 3])
	}
	
	Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)
	
	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	  mul *= 0x80
	
	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)
	
	  return val
	}
	
	Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)
	
	  var i = byteLength
	  var mul = 1
	  var val = this[offset + --i]
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul
	  }
	  mul *= 0x80
	
	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)
	
	  return val
	}
	
	Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  if (!(this[offset] & 0x80)) return (this[offset])
	  return ((0xff - this[offset] + 1) * -1)
	}
	
	Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset] | (this[offset + 1] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}
	
	Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset + 1] | (this[offset] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}
	
	Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return (this[offset]) |
	    (this[offset + 1] << 8) |
	    (this[offset + 2] << 16) |
	    (this[offset + 3] << 24)
	}
	
	Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return (this[offset] << 24) |
	    (this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    (this[offset + 3])
	}
	
	Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, true, 23, 4)
	}
	
	Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, false, 23, 4)
	}
	
	Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, true, 52, 8)
	}
	
	Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, false, 52, 8)
	}
	
	function checkInt (buf, value, offset, ext, max, min) {
	  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
	  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	}
	
	Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }
	
	  var mul = 1
	  var i = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }
	
	  var i = byteLength - 1
	  var mul = 1
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  this[offset] = (value & 0xff)
	  return offset + 1
	}
	
	function objectWriteUInt16 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
	    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
	      (littleEndian ? i : 1 - i) * 8
	  }
	}
	
	Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}
	
	Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}
	
	function objectWriteUInt32 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffffffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
	    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
	  }
	}
	
	Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset + 3] = (value >>> 24)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 1] = (value >>> 8)
	    this[offset] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}
	
	Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}
	
	Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)
	
	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }
	
	  var i = 0
	  var mul = 1
	  var sub = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)
	
	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }
	
	  var i = byteLength - 1
	  var mul = 1
	  var sub = 0
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  if (value < 0) value = 0xff + value + 1
	  this[offset] = (value & 0xff)
	  return offset + 1
	}
	
	Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}
	
	Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}
	
	Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 3] = (value >>> 24)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}
	
	Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (value < 0) value = 0xffffffff + value + 1
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}
	
	function checkIEEE754 (buf, value, offset, ext, max, min) {
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	  if (offset < 0) throw new RangeError('Index out of range')
	}
	
	function writeFloat (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 23, 4)
	  return offset + 4
	}
	
	Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert)
	}
	
	Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert)
	}
	
	function writeDouble (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 52, 8)
	  return offset + 8
	}
	
	Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert)
	}
	
	Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert)
	}
	
	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function copy (target, targetStart, start, end) {
	  if (!start) start = 0
	  if (!end && end !== 0) end = this.length
	  if (targetStart >= target.length) targetStart = target.length
	  if (!targetStart) targetStart = 0
	  if (end > 0 && end < start) end = start
	
	  // Copy 0 bytes; we're done
	  if (end === start) return 0
	  if (target.length === 0 || this.length === 0) return 0
	
	  // Fatal error conditions
	  if (targetStart < 0) {
	    throw new RangeError('targetStart out of bounds')
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
	  if (end < 0) throw new RangeError('sourceEnd out of bounds')
	
	  // Are we oob?
	  if (end > this.length) end = this.length
	  if (target.length - targetStart < end - start) {
	    end = target.length - targetStart + start
	  }
	
	  var len = end - start
	  var i
	
	  if (this === target && start < targetStart && targetStart < end) {
	    // descending copy from end
	    for (i = len - 1; i >= 0; --i) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
	    // ascending copy from start
	    for (i = 0; i < len; ++i) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else {
	    Uint8Array.prototype.set.call(
	      target,
	      this.subarray(start, start + len),
	      targetStart
	    )
	  }
	
	  return len
	}
	
	// Usage:
	//    buffer.fill(number[, offset[, end]])
	//    buffer.fill(buffer[, offset[, end]])
	//    buffer.fill(string[, offset[, end]][, encoding])
	Buffer.prototype.fill = function fill (val, start, end, encoding) {
	  // Handle string cases:
	  if (typeof val === 'string') {
	    if (typeof start === 'string') {
	      encoding = start
	      start = 0
	      end = this.length
	    } else if (typeof end === 'string') {
	      encoding = end
	      end = this.length
	    }
	    if (val.length === 1) {
	      var code = val.charCodeAt(0)
	      if (code < 256) {
	        val = code
	      }
	    }
	    if (encoding !== undefined && typeof encoding !== 'string') {
	      throw new TypeError('encoding must be a string')
	    }
	    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
	      throw new TypeError('Unknown encoding: ' + encoding)
	    }
	  } else if (typeof val === 'number') {
	    val = val & 255
	  }
	
	  // Invalid ranges are not set to a default, so can range check early.
	  if (start < 0 || this.length < start || this.length < end) {
	    throw new RangeError('Out of range index')
	  }
	
	  if (end <= start) {
	    return this
	  }
	
	  start = start >>> 0
	  end = end === undefined ? this.length : end >>> 0
	
	  if (!val) val = 0
	
	  var i
	  if (typeof val === 'number') {
	    for (i = start; i < end; ++i) {
	      this[i] = val
	    }
	  } else {
	    var bytes = Buffer.isBuffer(val)
	      ? val
	      : utf8ToBytes(new Buffer(val, encoding).toString())
	    var len = bytes.length
	    for (i = 0; i < end - start; ++i) {
	      this[i + start] = bytes[i % len]
	    }
	  }
	
	  return this
	}
	
	// HELPER FUNCTIONS
	// ================
	
	var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g
	
	function base64clean (str) {
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
	  // Node converts strings with length < 2 to ''
	  if (str.length < 2) return ''
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '='
	  }
	  return str
	}
	
	function stringtrim (str) {
	  if (str.trim) return str.trim()
	  return str.replace(/^\s+|\s+$/g, '')
	}
	
	function toHex (n) {
	  if (n < 16) return '0' + n.toString(16)
	  return n.toString(16)
	}
	
	function utf8ToBytes (string, units) {
	  units = units || Infinity
	  var codePoint
	  var length = string.length
	  var leadSurrogate = null
	  var bytes = []
	
	  for (var i = 0; i < length; ++i) {
	    codePoint = string.charCodeAt(i)
	
	    // is surrogate component
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      // last char was a lead
	      if (!leadSurrogate) {
	        // no lead yet
	        if (codePoint > 0xDBFF) {
	          // unexpected trail
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        } else if (i + 1 === length) {
	          // unpaired lead
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        }
	
	        // valid lead
	        leadSurrogate = codePoint
	
	        continue
	      }
	
	      // 2 leads in a row
	      if (codePoint < 0xDC00) {
	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	        leadSurrogate = codePoint
	        continue
	      }
	
	      // valid surrogate pair
	      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
	    } else if (leadSurrogate) {
	      // valid bmp char, but last char was a lead
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	    }
	
	    leadSurrogate = null
	
	    // encode utf8
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break
	      bytes.push(codePoint)
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break
	      bytes.push(
	        codePoint >> 0x6 | 0xC0,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break
	      bytes.push(
	        codePoint >> 0xC | 0xE0,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x110000) {
	      if ((units -= 4) < 0) break
	      bytes.push(
	        codePoint >> 0x12 | 0xF0,
	        codePoint >> 0xC & 0x3F | 0x80,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else {
	      throw new Error('Invalid code point')
	    }
	  }
	
	  return bytes
	}
	
	function asciiToBytes (str) {
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF)
	  }
	  return byteArray
	}
	
	function utf16leToBytes (str, units) {
	  var c, hi, lo
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    if ((units -= 2) < 0) break
	
	    c = str.charCodeAt(i)
	    hi = c >> 8
	    lo = c % 256
	    byteArray.push(lo)
	    byteArray.push(hi)
	  }
	
	  return byteArray
	}
	
	function base64ToBytes (str) {
	  return base64.toByteArray(base64clean(str))
	}
	
	function blitBuffer (src, dst, offset, length) {
	  for (var i = 0; i < length; ++i) {
	    if ((i + offset >= dst.length) || (i >= src.length)) break
	    dst[i + offset] = src[i]
	  }
	  return i
	}
	
	function isnan (val) {
	  return val !== val // eslint-disable-line no-self-compare
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(170).Buffer, (function() { return this; }())))

/***/ },
/* 171 */
/***/ function(module, exports) {

	'use strict'
	
	exports.byteLength = byteLength
	exports.toByteArray = toByteArray
	exports.fromByteArray = fromByteArray
	
	var lookup = []
	var revLookup = []
	var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array
	
	var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
	for (var i = 0, len = code.length; i < len; ++i) {
	  lookup[i] = code[i]
	  revLookup[code.charCodeAt(i)] = i
	}
	
	// Support decoding URL-safe base64 strings, as Node.js does.
	// See: https://en.wikipedia.org/wiki/Base64#URL_applications
	revLookup['-'.charCodeAt(0)] = 62
	revLookup['_'.charCodeAt(0)] = 63
	
	function getLens (b64) {
	  var len = b64.length
	
	  if (len % 4 > 0) {
	    throw new Error('Invalid string. Length must be a multiple of 4')
	  }
	
	  // Trim off extra bytes after placeholder bytes are found
	  // See: https://github.com/beatgammit/base64-js/issues/42
	  var validLen = b64.indexOf('=')
	  if (validLen === -1) validLen = len
	
	  var placeHoldersLen = validLen === len
	    ? 0
	    : 4 - (validLen % 4)
	
	  return [validLen, placeHoldersLen]
	}
	
	// base64 is 4/3 + up to two characters of the original data
	function byteLength (b64) {
	  var lens = getLens(b64)
	  var validLen = lens[0]
	  var placeHoldersLen = lens[1]
	  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
	}
	
	function _byteLength (b64, validLen, placeHoldersLen) {
	  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
	}
	
	function toByteArray (b64) {
	  var tmp
	  var lens = getLens(b64)
	  var validLen = lens[0]
	  var placeHoldersLen = lens[1]
	
	  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))
	
	  var curByte = 0
	
	  // if there are placeholders, only get up to the last complete 4 chars
	  var len = placeHoldersLen > 0
	    ? validLen - 4
	    : validLen
	
	  for (var i = 0; i < len; i += 4) {
	    tmp =
	      (revLookup[b64.charCodeAt(i)] << 18) |
	      (revLookup[b64.charCodeAt(i + 1)] << 12) |
	      (revLookup[b64.charCodeAt(i + 2)] << 6) |
	      revLookup[b64.charCodeAt(i + 3)]
	    arr[curByte++] = (tmp >> 16) & 0xFF
	    arr[curByte++] = (tmp >> 8) & 0xFF
	    arr[curByte++] = tmp & 0xFF
	  }
	
	  if (placeHoldersLen === 2) {
	    tmp =
	      (revLookup[b64.charCodeAt(i)] << 2) |
	      (revLookup[b64.charCodeAt(i + 1)] >> 4)
	    arr[curByte++] = tmp & 0xFF
	  }
	
	  if (placeHoldersLen === 1) {
	    tmp =
	      (revLookup[b64.charCodeAt(i)] << 10) |
	      (revLookup[b64.charCodeAt(i + 1)] << 4) |
	      (revLookup[b64.charCodeAt(i + 2)] >> 2)
	    arr[curByte++] = (tmp >> 8) & 0xFF
	    arr[curByte++] = tmp & 0xFF
	  }
	
	  return arr
	}
	
	function tripletToBase64 (num) {
	  return lookup[num >> 18 & 0x3F] +
	    lookup[num >> 12 & 0x3F] +
	    lookup[num >> 6 & 0x3F] +
	    lookup[num & 0x3F]
	}
	
	function encodeChunk (uint8, start, end) {
	  var tmp
	  var output = []
	  for (var i = start; i < end; i += 3) {
	    tmp =
	      ((uint8[i] << 16) & 0xFF0000) +
	      ((uint8[i + 1] << 8) & 0xFF00) +
	      (uint8[i + 2] & 0xFF)
	    output.push(tripletToBase64(tmp))
	  }
	  return output.join('')
	}
	
	function fromByteArray (uint8) {
	  var tmp
	  var len = uint8.length
	  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
	  var parts = []
	  var maxChunkLength = 16383 // must be multiple of 3
	
	  // go through the array every three bytes, we'll deal with trailing stuff later
	  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
	    parts.push(encodeChunk(
	      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
	    ))
	  }
	
	  // pad the end with zeros, but make sure to not forget the extra bytes
	  if (extraBytes === 1) {
	    tmp = uint8[len - 1]
	    parts.push(
	      lookup[tmp >> 2] +
	      lookup[(tmp << 4) & 0x3F] +
	      '=='
	    )
	  } else if (extraBytes === 2) {
	    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
	    parts.push(
	      lookup[tmp >> 10] +
	      lookup[(tmp >> 4) & 0x3F] +
	      lookup[(tmp << 2) & 0x3F] +
	      '='
	    )
	  }
	
	  return parts.join('')
	}


/***/ },
/* 172 */
/***/ function(module, exports) {

	exports.read = function (buffer, offset, isLE, mLen, nBytes) {
	  var e, m
	  var eLen = (nBytes * 8) - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var nBits = -7
	  var i = isLE ? (nBytes - 1) : 0
	  var d = isLE ? -1 : 1
	  var s = buffer[offset + i]
	
	  i += d
	
	  e = s & ((1 << (-nBits)) - 1)
	  s >>= (-nBits)
	  nBits += eLen
	  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}
	
	  m = e & ((1 << (-nBits)) - 1)
	  e >>= (-nBits)
	  nBits += mLen
	  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}
	
	  if (e === 0) {
	    e = 1 - eBias
	  } else if (e === eMax) {
	    return m ? NaN : ((s ? -1 : 1) * Infinity)
	  } else {
	    m = m + Math.pow(2, mLen)
	    e = e - eBias
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
	}
	
	exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c
	  var eLen = (nBytes * 8) - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
	  var i = isLE ? 0 : (nBytes - 1)
	  var d = isLE ? 1 : -1
	  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0
	
	  value = Math.abs(value)
	
	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0
	    e = eMax
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2)
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--
	      c *= 2
	    }
	    if (e + eBias >= 1) {
	      value += rt / c
	    } else {
	      value += rt * Math.pow(2, 1 - eBias)
	    }
	    if (value * c >= 2) {
	      e++
	      c /= 2
	    }
	
	    if (e + eBias >= eMax) {
	      m = 0
	      e = eMax
	    } else if (e + eBias >= 1) {
	      m = ((value * c) - 1) * Math.pow(2, mLen)
	      e = e + eBias
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
	      e = 0
	    }
	  }
	
	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}
	
	  e = (e << mLen) | m
	  eLen += mLen
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}
	
	  buffer[offset + i - d] |= s * 128
	}


/***/ },
/* 173 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};


/***/ },
/* 174 */
/***/ function(module, exports) {

	module.exports = {
		"O_RDONLY": 0,
		"O_WRONLY": 1,
		"O_RDWR": 2,
		"S_IFMT": 61440,
		"S_IFREG": 32768,
		"S_IFDIR": 16384,
		"S_IFCHR": 8192,
		"S_IFBLK": 24576,
		"S_IFIFO": 4096,
		"S_IFLNK": 40960,
		"S_IFSOCK": 49152,
		"O_CREAT": 512,
		"O_EXCL": 2048,
		"O_NOCTTY": 131072,
		"O_TRUNC": 1024,
		"O_APPEND": 8,
		"O_DIRECTORY": 1048576,
		"O_NOFOLLOW": 256,
		"O_SYNC": 128,
		"O_SYMLINK": 2097152,
		"S_IRWXU": 448,
		"S_IRUSR": 256,
		"S_IWUSR": 128,
		"S_IXUSR": 64,
		"S_IRWXG": 56,
		"S_IRGRP": 32,
		"S_IWGRP": 16,
		"S_IXGRP": 8,
		"S_IRWXO": 7,
		"S_IROTH": 4,
		"S_IWOTH": 2,
		"S_IXOTH": 1,
		"E2BIG": 7,
		"EACCES": 13,
		"EADDRINUSE": 48,
		"EADDRNOTAVAIL": 49,
		"EAFNOSUPPORT": 47,
		"EAGAIN": 35,
		"EALREADY": 37,
		"EBADF": 9,
		"EBADMSG": 94,
		"EBUSY": 16,
		"ECANCELED": 89,
		"ECHILD": 10,
		"ECONNABORTED": 53,
		"ECONNREFUSED": 61,
		"ECONNRESET": 54,
		"EDEADLK": 11,
		"EDESTADDRREQ": 39,
		"EDOM": 33,
		"EDQUOT": 69,
		"EEXIST": 17,
		"EFAULT": 14,
		"EFBIG": 27,
		"EHOSTUNREACH": 65,
		"EIDRM": 90,
		"EILSEQ": 92,
		"EINPROGRESS": 36,
		"EINTR": 4,
		"EINVAL": 22,
		"EIO": 5,
		"EISCONN": 56,
		"EISDIR": 21,
		"ELOOP": 62,
		"EMFILE": 24,
		"EMLINK": 31,
		"EMSGSIZE": 40,
		"EMULTIHOP": 95,
		"ENAMETOOLONG": 63,
		"ENETDOWN": 50,
		"ENETRESET": 52,
		"ENETUNREACH": 51,
		"ENFILE": 23,
		"ENOBUFS": 55,
		"ENODATA": 96,
		"ENODEV": 19,
		"ENOENT": 2,
		"ENOEXEC": 8,
		"ENOLCK": 77,
		"ENOLINK": 97,
		"ENOMEM": 12,
		"ENOMSG": 91,
		"ENOPROTOOPT": 42,
		"ENOSPC": 28,
		"ENOSR": 98,
		"ENOSTR": 99,
		"ENOSYS": 78,
		"ENOTCONN": 57,
		"ENOTDIR": 20,
		"ENOTEMPTY": 66,
		"ENOTSOCK": 38,
		"ENOTSUP": 45,
		"ENOTTY": 25,
		"ENXIO": 6,
		"EOPNOTSUPP": 102,
		"EOVERFLOW": 84,
		"EPERM": 1,
		"EPIPE": 32,
		"EPROTO": 100,
		"EPROTONOSUPPORT": 43,
		"EPROTOTYPE": 41,
		"ERANGE": 34,
		"EROFS": 30,
		"ESPIPE": 29,
		"ESRCH": 3,
		"ESTALE": 70,
		"ETIME": 101,
		"ETIMEDOUT": 60,
		"ETXTBSY": 26,
		"EWOULDBLOCK": 35,
		"EXDEV": 18,
		"SIGHUP": 1,
		"SIGINT": 2,
		"SIGQUIT": 3,
		"SIGILL": 4,
		"SIGTRAP": 5,
		"SIGABRT": 6,
		"SIGIOT": 6,
		"SIGBUS": 10,
		"SIGFPE": 8,
		"SIGKILL": 9,
		"SIGUSR1": 30,
		"SIGSEGV": 11,
		"SIGUSR2": 31,
		"SIGPIPE": 13,
		"SIGALRM": 14,
		"SIGTERM": 15,
		"SIGCHLD": 20,
		"SIGCONT": 19,
		"SIGSTOP": 17,
		"SIGTSTP": 18,
		"SIGTTIN": 21,
		"SIGTTOU": 22,
		"SIGURG": 16,
		"SIGXCPU": 24,
		"SIGXFSZ": 25,
		"SIGVTALRM": 26,
		"SIGPROF": 27,
		"SIGWINCH": 28,
		"SIGIO": 23,
		"SIGSYS": 12,
		"SSL_OP_ALL": 2147486719,
		"SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION": 262144,
		"SSL_OP_CIPHER_SERVER_PREFERENCE": 4194304,
		"SSL_OP_CISCO_ANYCONNECT": 32768,
		"SSL_OP_COOKIE_EXCHANGE": 8192,
		"SSL_OP_CRYPTOPRO_TLSEXT_BUG": 2147483648,
		"SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS": 2048,
		"SSL_OP_EPHEMERAL_RSA": 2097152,
		"SSL_OP_LEGACY_SERVER_CONNECT": 4,
		"SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER": 32,
		"SSL_OP_MICROSOFT_SESS_ID_BUG": 1,
		"SSL_OP_MSIE_SSLV2_RSA_PADDING": 64,
		"SSL_OP_NETSCAPE_CA_DN_BUG": 536870912,
		"SSL_OP_NETSCAPE_CHALLENGE_BUG": 2,
		"SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG": 1073741824,
		"SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG": 8,
		"SSL_OP_NO_COMPRESSION": 131072,
		"SSL_OP_NO_QUERY_MTU": 4096,
		"SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION": 65536,
		"SSL_OP_NO_SSLv2": 16777216,
		"SSL_OP_NO_SSLv3": 33554432,
		"SSL_OP_NO_TICKET": 16384,
		"SSL_OP_NO_TLSv1": 67108864,
		"SSL_OP_NO_TLSv1_1": 268435456,
		"SSL_OP_NO_TLSv1_2": 134217728,
		"SSL_OP_PKCS1_CHECK_1": 0,
		"SSL_OP_PKCS1_CHECK_2": 0,
		"SSL_OP_SINGLE_DH_USE": 1048576,
		"SSL_OP_SINGLE_ECDH_USE": 524288,
		"SSL_OP_SSLEAY_080_CLIENT_DH_BUG": 128,
		"SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG": 16,
		"SSL_OP_TLS_BLOCK_PADDING_BUG": 512,
		"SSL_OP_TLS_D5_BUG": 256,
		"SSL_OP_TLS_ROLLBACK_BUG": 8388608,
		"NPN_ENABLED": 1
	};

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {/*
	 * RSA Encryption / Decryption with PKCS1 v2 Padding.
	 * 
	 * Copyright (c) 2003-2005  Tom Wu
	 * All Rights Reserved.
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining
	 * a copy of this software and associated documentation files (the
	 * "Software"), to deal in the Software without restriction, including
	 * without limitation the rights to use, copy, modify, merge, publish,
	 * distribute, sublicense, and/or sell copies of the Software, and to
	 * permit persons to whom the Software is furnished to do so, subject to
	 * the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be
	 * included in all copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS-IS" AND WITHOUT WARRANTY OF ANY KIND, 
	 * EXPRESS, IMPLIED OR OTHERWISE, INCLUDING WITHOUT LIMITATION, ANY 
	 * WARRANTY OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.  
	 *
	 * IN NO EVENT SHALL TOM WU BE LIABLE FOR ANY SPECIAL, INCIDENTAL,
	 * INDIRECT OR CONSEQUENTIAL DAMAGES OF ANY KIND, OR ANY DAMAGES WHATSOEVER
	 * RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER OR NOT ADVISED OF
	 * THE POSSIBILITY OF DAMAGE, AND ON ANY THEORY OF LIABILITY, ARISING OUT
	 * OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
	 *
	 * In addition, the following condition applies:
	 *
	 * All redistributions must retain an intact copy of this copyright notice
	 * and disclaimer.
	 */
	
	/*
	 * Node.js adaptation
	 * long message support implementation
	 * signing/verifying
	 *
	 * 2014 rzcoder
	 */
	
	var _ = __webpack_require__(176)._;
	var crypt = __webpack_require__(177);
	var BigInteger = __webpack_require__(195);
	var utils = __webpack_require__(176);
	var schemes = __webpack_require__(196);
	var encryptEngines = __webpack_require__(200);
	
	exports.BigInteger = BigInteger;
	module.exports.Key = (function () {
	    /**
	     * RSA key constructor
	     *
	     * n - modulus
	     * e - publicExponent
	     * d - privateExponent
	     * p - prime1
	     * q - prime2
	     * dmp1 - exponent1 -- d mod (p1)
	     * dmq1 - exponent2 -- d mod (q-1)
	     * coeff - coefficient -- (inverse of q) mod p
	     */
	    function RSAKey() {
	        this.n = null;
	        this.e = 0;
	        this.d = null;
	        this.p = null;
	        this.q = null;
	        this.dmp1 = null;
	        this.dmq1 = null;
	        this.coeff = null;
	    }
	
	    RSAKey.prototype.setOptions = function (options) {
	        var signingSchemeProvider = schemes[options.signingScheme];
	        var encryptionSchemeProvider = schemes[options.encryptionScheme];
	
	        if (signingSchemeProvider === encryptionSchemeProvider) {
	            this.signingScheme = this.encryptionScheme = encryptionSchemeProvider.makeScheme(this, options);
	        } else {
	            this.encryptionScheme = encryptionSchemeProvider.makeScheme(this, options);
	            this.signingScheme = signingSchemeProvider.makeScheme(this, options);
	        }
	
	        this.encryptEngine = encryptEngines.getEngine(this, options);
	    };
	
	    /**
	     * Generate a new random private key B bits long, using public expt E
	     * @param B
	     * @param E
	     */
	    RSAKey.prototype.generate = function (B, E) {
	        var qs = B >> 1;
	        this.e = parseInt(E, 16);
	        var ee = new BigInteger(E, 16);
	        while (true) {
	            while (true) {
	                this.p = new BigInteger(B - qs, 1);
	                if (this.p.subtract(BigInteger.ONE).gcd(ee).compareTo(BigInteger.ONE) === 0 && this.p.isProbablePrime(10))
	                    break;
	            }
	            while (true) {
	                this.q = new BigInteger(qs, 1);
	                if (this.q.subtract(BigInteger.ONE).gcd(ee).compareTo(BigInteger.ONE) === 0 && this.q.isProbablePrime(10))
	                    break;
	            }
	            if (this.p.compareTo(this.q) <= 0) {
	                var t = this.p;
	                this.p = this.q;
	                this.q = t;
	            }
	            var p1 = this.p.subtract(BigInteger.ONE);
	            var q1 = this.q.subtract(BigInteger.ONE);
	            var phi = p1.multiply(q1);
	            if (phi.gcd(ee).compareTo(BigInteger.ONE) === 0) {
	                this.n = this.p.multiply(this.q);
	                if (this.n.bitLength() < B) {
	                    continue;
	                }
	                this.d = ee.modInverse(phi);
	                this.dmp1 = this.d.mod(p1);
	                this.dmq1 = this.d.mod(q1);
	                this.coeff = this.q.modInverse(this.p);
	                break;
	            }
	        }
	        this.$$recalculateCache();
	    };
	
	    /**
	     * Set the private key fields N, e, d and CRT params from buffers
	     *
	     * @param N
	     * @param E
	     * @param D
	     * @param P
	     * @param Q
	     * @param DP
	     * @param DQ
	     * @param C
	     */
	    RSAKey.prototype.setPrivate = function (N, E, D, P, Q, DP, DQ, C) {
	        if (N && E && D && N.length > 0 && (_.isNumber(E) || E.length > 0) && D.length > 0) {
	            this.n = new BigInteger(N);
	            this.e = _.isNumber(E) ? E : utils.get32IntFromBuffer(E, 0);
	            this.d = new BigInteger(D);
	
	            if (P && Q && DP && DQ && C) {
	                this.p = new BigInteger(P);
	                this.q = new BigInteger(Q);
	                this.dmp1 = new BigInteger(DP);
	                this.dmq1 = new BigInteger(DQ);
	                this.coeff = new BigInteger(C);
	            } else {
	                // TODO: re-calculate any missing CRT params
	            }
	            this.$$recalculateCache();
	        } else {
	            throw Error("Invalid RSA private key");
	        }
	    };
	
	    /**
	     * Set the public key fields N and e from hex strings
	     * @param N
	     * @param E
	     */
	    RSAKey.prototype.setPublic = function (N, E) {
	        if (N && E && N.length > 0 && (_.isNumber(E) || E.length > 0)) {
	            this.n = new BigInteger(N);
	            this.e = _.isNumber(E) ? E : utils.get32IntFromBuffer(E, 0);
	            this.$$recalculateCache();
	        } else {
	            throw Error("Invalid RSA public key");
	        }
	    };
	
	    /**
	     * private
	     * Perform raw private operation on "x": return x^d (mod n)
	     *
	     * @param x
	     * @returns {*}
	     */
	    RSAKey.prototype.$doPrivate = function (x) {
	        if (this.p || this.q) {
	            return x.modPow(this.d, this.n);
	        }
	
	        // TODO: re-calculate any missing CRT params
	        var xp = x.mod(this.p).modPow(this.dmp1, this.p);
	        var xq = x.mod(this.q).modPow(this.dmq1, this.q);
	
	        while (xp.compareTo(xq) < 0) {
	            xp = xp.add(this.p);
	        }
	        return xp.subtract(xq).multiply(this.coeff).mod(this.p).multiply(this.q).add(xq);
	    };
	
	    /**
	     * private
	     * Perform raw public operation on "x": return x^e (mod n)
	     *
	     * @param x
	     * @returns {*}
	     */
	    RSAKey.prototype.$doPublic = function (x) {
	        return x.modPowInt(this.e, this.n);
	    };
	
	    /**
	     * Return the PKCS#1 RSA encryption of buffer
	     * @param buffer {Buffer}
	     * @returns {Buffer}
	     */
	    RSAKey.prototype.encrypt = function (buffer, usePrivate) {
	        var buffers = [];
	        var results = [];
	        var bufferSize = buffer.length;
	        var buffersCount = Math.ceil(bufferSize / this.maxMessageLength) || 1; // total buffers count for encrypt
	        var dividedSize = Math.ceil(bufferSize / buffersCount || 1); // each buffer size
	
	        if (buffersCount == 1) {
	            buffers.push(buffer);
	        } else {
	            for (var bufNum = 0; bufNum < buffersCount; bufNum++) {
	                buffers.push(buffer.slice(bufNum * dividedSize, (bufNum + 1) * dividedSize));
	            }
	        }
	
	        for (var i = 0; i < buffers.length; i++) {
	            results.push(this.encryptEngine.encrypt(buffers[i], usePrivate));
	        }
	
	        return Buffer.concat(results);
	    };
	
	    /**
	     * Return the PKCS#1 RSA decryption of buffer
	     * @param buffer {Buffer}
	     * @returns {Buffer}
	     */
	    RSAKey.prototype.decrypt = function (buffer, usePublic) {
	        if (buffer.length % this.encryptedDataLength > 0) {
	            throw Error('Incorrect data or key');
	        }
	
	        var result = [];
	        var offset = 0;
	        var length = 0;
	        var buffersCount = buffer.length / this.encryptedDataLength;
	
	        for (var i = 0; i < buffersCount; i++) {
	            offset = i * this.encryptedDataLength;
	            length = offset + this.encryptedDataLength;
	            result.push(this.encryptEngine.decrypt(buffer.slice(offset, Math.min(length, buffer.length)), usePublic));
	        }
	
	        return Buffer.concat(result);
	    };
	
	    RSAKey.prototype.sign = function (buffer) {
	        return this.signingScheme.sign.apply(this.signingScheme, arguments);
	    };
	
	    RSAKey.prototype.verify = function (buffer, signature, signature_encoding) {
	        return this.signingScheme.verify.apply(this.signingScheme, arguments);
	    };
	
	    /**
	     * Check if key pair contains private key
	     */
	    RSAKey.prototype.isPrivate = function () {
	        return this.n && this.e && this.d || false;
	    };
	
	    /**
	     * Check if key pair contains public key
	     * @param strict {boolean} - public key only, return false if have private exponent
	     */
	    RSAKey.prototype.isPublic = function (strict) {
	        return this.n && this.e && !(strict && this.d) || false;
	    };
	
	    Object.defineProperty(RSAKey.prototype, 'keySize', {
	        get: function () {
	            return this.cache.keyBitLength;
	        }
	    });
	
	    Object.defineProperty(RSAKey.prototype, 'encryptedDataLength', {
	        get: function () {
	            return this.cache.keyByteLength;
	        }
	    });
	
	    Object.defineProperty(RSAKey.prototype, 'maxMessageLength', {
	        get: function () {
	            return this.encryptionScheme.maxMessageLength();
	        }
	    });
	
	    /**
	     * Caching key data
	     */
	    RSAKey.prototype.$$recalculateCache = function () {
	        this.cache = this.cache || {};
	        // Bit & byte length
	        this.cache.keyBitLength = this.n.bitLength();
	        this.cache.keyByteLength = (this.cache.keyBitLength + 6) >> 3;
	    };
	
	    return RSAKey;
	})();
	
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(170).Buffer))

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/*
	 * Utils functions
	 *
	 */
	
	var crypt = __webpack_require__(177);
	
	/**
	 * Break string str each maxLen symbols
	 * @param str
	 * @param maxLen
	 * @returns {string}
	 */
	module.exports.linebrk = function (str, maxLen) {
	    var res = '';
	    var i = 0;
	    while (i + maxLen < str.length) {
	        res += str.substring(i, i + maxLen) + "\n";
	        i += maxLen;
	    }
	    return res + str.substring(i, str.length);
	};
	
	module.exports.detectEnvironment = function () {
	    if (process && process.title === 'browser' || (typeof(window) !== 'undefined' && window)) {
	        return 'browser';
	    }
	
	    return 'node';
	};
	
	/**
	 * Trying get a 32-bit unsigned integer from the partial buffer
	 * @param buffer
	 * @param offset
	 * @returns {Number}
	 */
	module.exports.get32IntFromBuffer = function (buffer, offset) {
	    offset = offset || 0;
	    var size = 0;
	    if ((size = buffer.length - offset) > 0) {
	        if (size >= 4) {
	            return buffer.readUInt32BE(offset);
	        } else {
	            var res = 0;
	            for (var i = offset + size, d = 0; i > offset; i--, d += 2) {
	                res += buffer[i - 1] * Math.pow(16, d);
	            }
	            return res;
	        }
	    } else {
	        return NaN;
	    }
	};
	
	module.exports._ = {
	    isObject: function (value) {
	        var type = typeof value;
	        return !!value && (type == 'object' || type == 'function');
	    },
	
	    isString: function (value) {
	        return typeof value == 'string' || value instanceof String;
	    },
	
	    isNumber: function (value) {
	        return typeof value == 'number' || !isNaN(parseFloat(value)) && isFinite(value);
	    },
	
	    /**
	     * Returns copy of `obj` without `removeProp` field.
	     * @param obj
	     * @param removeProp
	     * @returns Object
	     */
	    omit: function (obj, removeProp) {
	        var newObj = {};
	        for (var prop in obj) {
	            if (!obj.hasOwnProperty(prop) || prop === removeProp) {
	                continue;
	            }
	            newObj[prop] = obj[prop];
	        }
	
	        return newObj;
	    }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(51)))

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var rng = __webpack_require__(178)
	
	function error () {
	  var m = [].slice.call(arguments).join(' ')
	  throw new Error([
	    m,
	    'we accept pull requests',
	    'http://github.com/dominictarr/crypto-browserify'
	    ].join('\n'))
	}
	
	exports.createHash = __webpack_require__(180)
	
	exports.createHmac = __webpack_require__(192)
	
	exports.randomBytes = function(size, callback) {
	  if (callback && callback.call) {
	    try {
	      callback.call(this, undefined, new Buffer(rng(size)))
	    } catch (err) { callback(err) }
	  } else {
	    return new Buffer(rng(size))
	  }
	}
	
	function each(a, f) {
	  for(var i in a)
	    f(a[i], i)
	}
	
	exports.getHashes = function () {
	  return ['sha1', 'sha256', 'sha512', 'md5', 'rmd160']
	}
	
	var p = __webpack_require__(193)(exports)
	exports.pbkdf2 = p.pbkdf2
	exports.pbkdf2Sync = p.pbkdf2Sync
	
	
	// the least I can do is make error messages for the rest of the node.js/crypto api.
	each(['createCredentials'
	, 'createCipher'
	, 'createCipheriv'
	, 'createDecipher'
	, 'createDecipheriv'
	, 'createSign'
	, 'createVerify'
	, 'createDiffieHellman'
	], function (name) {
	  exports[name] = function () {
	    error('sorry,', name, 'is not implemented yet')
	  }
	})
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(170).Buffer))

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, Buffer) {(function() {
	  var g = ('undefined' === typeof window ? global : window) || {}
	  _crypto = (
	    g.crypto || g.msCrypto || __webpack_require__(179)
	  )
	  module.exports = function(size) {
	    // Modern Browsers
	    if(_crypto.getRandomValues) {
	      var bytes = new Buffer(size); //in browserify, this is an extended Uint8Array
	      /* This will not work in older browsers.
	       * See https://developer.mozilla.org/en-US/docs/Web/API/window.crypto.getRandomValues
	       */
	    
	      _crypto.getRandomValues(bytes);
	      return bytes;
	    }
	    else if (_crypto.randomBytes) {
	      return _crypto.randomBytes(size)
	    }
	    else
	      throw new Error(
	        'secure random number generation not supported by this browser\n'+
	        'use chrome, FireFox or Internet Explorer 11'
	      )
	  }
	}())
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(170).Buffer))

/***/ },
/* 179 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var createHash = __webpack_require__(181)
	
	var md5 = toConstructor(__webpack_require__(189))
	var rmd160 = toConstructor(__webpack_require__(191))
	
	function toConstructor (fn) {
	  return function () {
	    var buffers = []
	    var m= {
	      update: function (data, enc) {
	        if(!Buffer.isBuffer(data)) data = new Buffer(data, enc)
	        buffers.push(data)
	        return this
	      },
	      digest: function (enc) {
	        var buf = Buffer.concat(buffers)
	        var r = fn(buf)
	        buffers = null
	        return enc ? r.toString(enc) : r
	      }
	    }
	    return m
	  }
	}
	
	module.exports = function (alg) {
	  if('md5' === alg) return new md5()
	  if('rmd160' === alg) return new rmd160()
	  return createHash(alg)
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(170).Buffer))

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	var exports = module.exports = function (alg) {
	  var Alg = exports[alg]
	  if(!Alg) throw new Error(alg + ' is not supported (we accept pull requests)')
	  return new Alg()
	}
	
	var Buffer = __webpack_require__(170).Buffer
	var Hash   = __webpack_require__(182)(Buffer)
	
	exports.sha1 = __webpack_require__(183)(Buffer, Hash)
	exports.sha256 = __webpack_require__(187)(Buffer, Hash)
	exports.sha512 = __webpack_require__(188)(Buffer, Hash)


/***/ },
/* 182 */
/***/ function(module, exports) {

	module.exports = function (Buffer) {
	
	  //prototype class for hash functions
	  function Hash (blockSize, finalSize) {
	    this._block = new Buffer(blockSize) //new Uint32Array(blockSize/4)
	    this._finalSize = finalSize
	    this._blockSize = blockSize
	    this._len = 0
	    this._s = 0
	  }
	
	  Hash.prototype.init = function () {
	    this._s = 0
	    this._len = 0
	  }
	
	  Hash.prototype.update = function (data, enc) {
	    if ("string" === typeof data) {
	      enc = enc || "utf8"
	      data = new Buffer(data, enc)
	    }
	
	    var l = this._len += data.length
	    var s = this._s = (this._s || 0)
	    var f = 0
	    var buffer = this._block
	
	    while (s < l) {
	      var t = Math.min(data.length, f + this._blockSize - (s % this._blockSize))
	      var ch = (t - f)
	
	      for (var i = 0; i < ch; i++) {
	        buffer[(s % this._blockSize) + i] = data[i + f]
	      }
	
	      s += ch
	      f += ch
	
	      if ((s % this._blockSize) === 0) {
	        this._update(buffer)
	      }
	    }
	    this._s = s
	
	    return this
	  }
	
	  Hash.prototype.digest = function (enc) {
	    // Suppose the length of the message M, in bits, is l
	    var l = this._len * 8
	
	    // Append the bit 1 to the end of the message
	    this._block[this._len % this._blockSize] = 0x80
	
	    // and then k zero bits, where k is the smallest non-negative solution to the equation (l + 1 + k) === finalSize mod blockSize
	    this._block.fill(0, this._len % this._blockSize + 1)
	
	    if (l % (this._blockSize * 8) >= this._finalSize * 8) {
	      this._update(this._block)
	      this._block.fill(0)
	    }
	
	    // to this append the block which is equal to the number l written in binary
	    // TODO: handle case where l is > Math.pow(2, 29)
	    this._block.writeInt32BE(l, this._blockSize - 4)
	
	    var hash = this._update(this._block) || this._hash()
	
	    return enc ? hash.toString(enc) : hash
	  }
	
	  Hash.prototype._update = function () {
	    throw new Error('_update must be implemented by subclass')
	  }
	
	  return Hash
	}


/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * A JavaScript implementation of the Secure Hash Algorithm, SHA-1, as defined
	 * in FIPS PUB 180-1
	 * Version 2.1a Copyright Paul Johnston 2000 - 2002.
	 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
	 * Distributed under the BSD License
	 * See http://pajhome.org.uk/crypt/md5 for details.
	 */
	
	var inherits = __webpack_require__(184).inherits
	
	module.exports = function (Buffer, Hash) {
	
	  var A = 0|0
	  var B = 4|0
	  var C = 8|0
	  var D = 12|0
	  var E = 16|0
	
	  var W = new (typeof Int32Array === 'undefined' ? Array : Int32Array)(80)
	
	  var POOL = []
	
	  function Sha1 () {
	    if(POOL.length)
	      return POOL.pop().init()
	
	    if(!(this instanceof Sha1)) return new Sha1()
	    this._w = W
	    Hash.call(this, 16*4, 14*4)
	
	    this._h = null
	    this.init()
	  }
	
	  inherits(Sha1, Hash)
	
	  Sha1.prototype.init = function () {
	    this._a = 0x67452301
	    this._b = 0xefcdab89
	    this._c = 0x98badcfe
	    this._d = 0x10325476
	    this._e = 0xc3d2e1f0
	
	    Hash.prototype.init.call(this)
	    return this
	  }
	
	  Sha1.prototype._POOL = POOL
	  Sha1.prototype._update = function (X) {
	
	    var a, b, c, d, e, _a, _b, _c, _d, _e
	
	    a = _a = this._a
	    b = _b = this._b
	    c = _c = this._c
	    d = _d = this._d
	    e = _e = this._e
	
	    var w = this._w
	
	    for(var j = 0; j < 80; j++) {
	      var W = w[j] = j < 16 ? X.readInt32BE(j*4)
	        : rol(w[j - 3] ^ w[j -  8] ^ w[j - 14] ^ w[j - 16], 1)
	
	      var t = add(
	        add(rol(a, 5), sha1_ft(j, b, c, d)),
	        add(add(e, W), sha1_kt(j))
	      )
	
	      e = d
	      d = c
	      c = rol(b, 30)
	      b = a
	      a = t
	    }
	
	    this._a = add(a, _a)
	    this._b = add(b, _b)
	    this._c = add(c, _c)
	    this._d = add(d, _d)
	    this._e = add(e, _e)
	  }
	
	  Sha1.prototype._hash = function () {
	    if(POOL.length < 100) POOL.push(this)
	    var H = new Buffer(20)
	    //console.log(this._a|0, this._b|0, this._c|0, this._d|0, this._e|0)
	    H.writeInt32BE(this._a|0, A)
	    H.writeInt32BE(this._b|0, B)
	    H.writeInt32BE(this._c|0, C)
	    H.writeInt32BE(this._d|0, D)
	    H.writeInt32BE(this._e|0, E)
	    return H
	  }
	
	  /*
	   * Perform the appropriate triplet combination function for the current
	   * iteration
	   */
	  function sha1_ft(t, b, c, d) {
	    if(t < 20) return (b & c) | ((~b) & d);
	    if(t < 40) return b ^ c ^ d;
	    if(t < 60) return (b & c) | (b & d) | (c & d);
	    return b ^ c ^ d;
	  }
	
	  /*
	   * Determine the appropriate additive constant for the current iteration
	   */
	  function sha1_kt(t) {
	    return (t < 20) ?  1518500249 : (t < 40) ?  1859775393 :
	           (t < 60) ? -1894007588 : -899497514;
	  }
	
	  /*
	   * Add integers, wrapping at 2^32. This uses 16-bit operations internally
	   * to work around bugs in some JS interpreters.
	   * //dominictarr: this is 10 years old, so maybe this can be dropped?)
	   *
	   */
	  function add(x, y) {
	    return (x + y ) | 0
	  //lets see how this goes on testling.
	  //  var lsw = (x & 0xFFFF) + (y & 0xFFFF);
	  //  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
	  //  return (msw << 16) | (lsw & 0xFFFF);
	  }
	
	  /*
	   * Bitwise rotate a 32-bit number to the left.
	   */
	  function rol(num, cnt) {
	    return (num << cnt) | (num >>> (32 - cnt));
	  }
	
	  return Sha1
	}


/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	var formatRegExp = /%[sdj%]/g;
	exports.format = function(f) {
	  if (!isString(f)) {
	    var objects = [];
	    for (var i = 0; i < arguments.length; i++) {
	      objects.push(inspect(arguments[i]));
	    }
	    return objects.join(' ');
	  }
	
	  var i = 1;
	  var args = arguments;
	  var len = args.length;
	  var str = String(f).replace(formatRegExp, function(x) {
	    if (x === '%%') return '%';
	    if (i >= len) return x;
	    switch (x) {
	      case '%s': return String(args[i++]);
	      case '%d': return Number(args[i++]);
	      case '%j':
	        try {
	          return JSON.stringify(args[i++]);
	        } catch (_) {
	          return '[Circular]';
	        }
	      default:
	        return x;
	    }
	  });
	  for (var x = args[i]; i < len; x = args[++i]) {
	    if (isNull(x) || !isObject(x)) {
	      str += ' ' + x;
	    } else {
	      str += ' ' + inspect(x);
	    }
	  }
	  return str;
	};
	
	
	// Mark that a method should not be used.
	// Returns a modified function which warns once by default.
	// If --no-deprecation is set, then it is a no-op.
	exports.deprecate = function(fn, msg) {
	  // Allow for deprecating things in the process of starting up.
	  if (isUndefined(global.process)) {
	    return function() {
	      return exports.deprecate(fn, msg).apply(this, arguments);
	    };
	  }
	
	  if (process.noDeprecation === true) {
	    return fn;
	  }
	
	  var warned = false;
	  function deprecated() {
	    if (!warned) {
	      if (process.throwDeprecation) {
	        throw new Error(msg);
	      } else if (process.traceDeprecation) {
	        console.trace(msg);
	      } else {
	        console.error(msg);
	      }
	      warned = true;
	    }
	    return fn.apply(this, arguments);
	  }
	
	  return deprecated;
	};
	
	
	var debugs = {};
	var debugEnviron;
	exports.debuglog = function(set) {
	  if (isUndefined(debugEnviron))
	    debugEnviron = process.env.NODE_DEBUG || '';
	  set = set.toUpperCase();
	  if (!debugs[set]) {
	    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
	      var pid = process.pid;
	      debugs[set] = function() {
	        var msg = exports.format.apply(exports, arguments);
	        console.error('%s %d: %s', set, pid, msg);
	      };
	    } else {
	      debugs[set] = function() {};
	    }
	  }
	  return debugs[set];
	};
	
	
	/**
	 * Echos the value of a value. Trys to print the value out
	 * in the best way possible given the different types.
	 *
	 * @param {Object} obj The object to print out.
	 * @param {Object} opts Optional options object that alters the output.
	 */
	/* legacy: obj, showHidden, depth, colors*/
	function inspect(obj, opts) {
	  // default options
	  var ctx = {
	    seen: [],
	    stylize: stylizeNoColor
	  };
	  // legacy...
	  if (arguments.length >= 3) ctx.depth = arguments[2];
	  if (arguments.length >= 4) ctx.colors = arguments[3];
	  if (isBoolean(opts)) {
	    // legacy...
	    ctx.showHidden = opts;
	  } else if (opts) {
	    // got an "options" object
	    exports._extend(ctx, opts);
	  }
	  // set default options
	  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
	  if (isUndefined(ctx.depth)) ctx.depth = 2;
	  if (isUndefined(ctx.colors)) ctx.colors = false;
	  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
	  if (ctx.colors) ctx.stylize = stylizeWithColor;
	  return formatValue(ctx, obj, ctx.depth);
	}
	exports.inspect = inspect;
	
	
	// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
	inspect.colors = {
	  'bold' : [1, 22],
	  'italic' : [3, 23],
	  'underline' : [4, 24],
	  'inverse' : [7, 27],
	  'white' : [37, 39],
	  'grey' : [90, 39],
	  'black' : [30, 39],
	  'blue' : [34, 39],
	  'cyan' : [36, 39],
	  'green' : [32, 39],
	  'magenta' : [35, 39],
	  'red' : [31, 39],
	  'yellow' : [33, 39]
	};
	
	// Don't use 'blue' not visible on cmd.exe
	inspect.styles = {
	  'special': 'cyan',
	  'number': 'yellow',
	  'boolean': 'yellow',
	  'undefined': 'grey',
	  'null': 'bold',
	  'string': 'green',
	  'date': 'magenta',
	  // "name": intentionally not styling
	  'regexp': 'red'
	};
	
	
	function stylizeWithColor(str, styleType) {
	  var style = inspect.styles[styleType];
	
	  if (style) {
	    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
	           '\u001b[' + inspect.colors[style][1] + 'm';
	  } else {
	    return str;
	  }
	}
	
	
	function stylizeNoColor(str, styleType) {
	  return str;
	}
	
	
	function arrayToHash(array) {
	  var hash = {};
	
	  array.forEach(function(val, idx) {
	    hash[val] = true;
	  });
	
	  return hash;
	}
	
	
	function formatValue(ctx, value, recurseTimes) {
	  // Provide a hook for user-specified inspect functions.
	  // Check that value is an object with an inspect function on it
	  if (ctx.customInspect &&
	      value &&
	      isFunction(value.inspect) &&
	      // Filter out the util module, it's inspect function is special
	      value.inspect !== exports.inspect &&
	      // Also filter out any prototype objects using the circular check.
	      !(value.constructor && value.constructor.prototype === value)) {
	    var ret = value.inspect(recurseTimes, ctx);
	    if (!isString(ret)) {
	      ret = formatValue(ctx, ret, recurseTimes);
	    }
	    return ret;
	  }
	
	  // Primitive types cannot have properties
	  var primitive = formatPrimitive(ctx, value);
	  if (primitive) {
	    return primitive;
	  }
	
	  // Look up the keys of the object.
	  var keys = Object.keys(value);
	  var visibleKeys = arrayToHash(keys);
	
	  if (ctx.showHidden) {
	    keys = Object.getOwnPropertyNames(value);
	  }
	
	  // IE doesn't make error fields non-enumerable
	  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
	  if (isError(value)
	      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
	    return formatError(value);
	  }
	
	  // Some type of object without properties can be shortcutted.
	  if (keys.length === 0) {
	    if (isFunction(value)) {
	      var name = value.name ? ': ' + value.name : '';
	      return ctx.stylize('[Function' + name + ']', 'special');
	    }
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    }
	    if (isDate(value)) {
	      return ctx.stylize(Date.prototype.toString.call(value), 'date');
	    }
	    if (isError(value)) {
	      return formatError(value);
	    }
	  }
	
	  var base = '', array = false, braces = ['{', '}'];
	
	  // Make Array say that they are Array
	  if (isArray(value)) {
	    array = true;
	    braces = ['[', ']'];
	  }
	
	  // Make functions say that they are functions
	  if (isFunction(value)) {
	    var n = value.name ? ': ' + value.name : '';
	    base = ' [Function' + n + ']';
	  }
	
	  // Make RegExps say that they are RegExps
	  if (isRegExp(value)) {
	    base = ' ' + RegExp.prototype.toString.call(value);
	  }
	
	  // Make dates with properties first say the date
	  if (isDate(value)) {
	    base = ' ' + Date.prototype.toUTCString.call(value);
	  }
	
	  // Make error with message first say the error
	  if (isError(value)) {
	    base = ' ' + formatError(value);
	  }
	
	  if (keys.length === 0 && (!array || value.length == 0)) {
	    return braces[0] + base + braces[1];
	  }
	
	  if (recurseTimes < 0) {
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    } else {
	      return ctx.stylize('[Object]', 'special');
	    }
	  }
	
	  ctx.seen.push(value);
	
	  var output;
	  if (array) {
	    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
	  } else {
	    output = keys.map(function(key) {
	      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
	    });
	  }
	
	  ctx.seen.pop();
	
	  return reduceToSingleString(output, base, braces);
	}
	
	
	function formatPrimitive(ctx, value) {
	  if (isUndefined(value))
	    return ctx.stylize('undefined', 'undefined');
	  if (isString(value)) {
	    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
	                                             .replace(/'/g, "\\'")
	                                             .replace(/\\"/g, '"') + '\'';
	    return ctx.stylize(simple, 'string');
	  }
	  if (isNumber(value))
	    return ctx.stylize('' + value, 'number');
	  if (isBoolean(value))
	    return ctx.stylize('' + value, 'boolean');
	  // For some reason typeof null is "object", so special case here.
	  if (isNull(value))
	    return ctx.stylize('null', 'null');
	}
	
	
	function formatError(value) {
	  return '[' + Error.prototype.toString.call(value) + ']';
	}
	
	
	function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
	  var output = [];
	  for (var i = 0, l = value.length; i < l; ++i) {
	    if (hasOwnProperty(value, String(i))) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          String(i), true));
	    } else {
	      output.push('');
	    }
	  }
	  keys.forEach(function(key) {
	    if (!key.match(/^\d+$/)) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          key, true));
	    }
	  });
	  return output;
	}
	
	
	function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
	  var name, str, desc;
	  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
	  if (desc.get) {
	    if (desc.set) {
	      str = ctx.stylize('[Getter/Setter]', 'special');
	    } else {
	      str = ctx.stylize('[Getter]', 'special');
	    }
	  } else {
	    if (desc.set) {
	      str = ctx.stylize('[Setter]', 'special');
	    }
	  }
	  if (!hasOwnProperty(visibleKeys, key)) {
	    name = '[' + key + ']';
	  }
	  if (!str) {
	    if (ctx.seen.indexOf(desc.value) < 0) {
	      if (isNull(recurseTimes)) {
	        str = formatValue(ctx, desc.value, null);
	      } else {
	        str = formatValue(ctx, desc.value, recurseTimes - 1);
	      }
	      if (str.indexOf('\n') > -1) {
	        if (array) {
	          str = str.split('\n').map(function(line) {
	            return '  ' + line;
	          }).join('\n').substr(2);
	        } else {
	          str = '\n' + str.split('\n').map(function(line) {
	            return '   ' + line;
	          }).join('\n');
	        }
	      }
	    } else {
	      str = ctx.stylize('[Circular]', 'special');
	    }
	  }
	  if (isUndefined(name)) {
	    if (array && key.match(/^\d+$/)) {
	      return str;
	    }
	    name = JSON.stringify('' + key);
	    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
	      name = name.substr(1, name.length - 2);
	      name = ctx.stylize(name, 'name');
	    } else {
	      name = name.replace(/'/g, "\\'")
	                 .replace(/\\"/g, '"')
	                 .replace(/(^"|"$)/g, "'");
	      name = ctx.stylize(name, 'string');
	    }
	  }
	
	  return name + ': ' + str;
	}
	
	
	function reduceToSingleString(output, base, braces) {
	  var numLinesEst = 0;
	  var length = output.reduce(function(prev, cur) {
	    numLinesEst++;
	    if (cur.indexOf('\n') >= 0) numLinesEst++;
	    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
	  }, 0);
	
	  if (length > 60) {
	    return braces[0] +
	           (base === '' ? '' : base + '\n ') +
	           ' ' +
	           output.join(',\n  ') +
	           ' ' +
	           braces[1];
	  }
	
	  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
	}
	
	
	// NOTE: These type checking functions intentionally don't use `instanceof`
	// because it is fragile and can be easily faked with `Object.create()`.
	function isArray(ar) {
	  return Array.isArray(ar);
	}
	exports.isArray = isArray;
	
	function isBoolean(arg) {
	  return typeof arg === 'boolean';
	}
	exports.isBoolean = isBoolean;
	
	function isNull(arg) {
	  return arg === null;
	}
	exports.isNull = isNull;
	
	function isNullOrUndefined(arg) {
	  return arg == null;
	}
	exports.isNullOrUndefined = isNullOrUndefined;
	
	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	exports.isNumber = isNumber;
	
	function isString(arg) {
	  return typeof arg === 'string';
	}
	exports.isString = isString;
	
	function isSymbol(arg) {
	  return typeof arg === 'symbol';
	}
	exports.isSymbol = isSymbol;
	
	function isUndefined(arg) {
	  return arg === void 0;
	}
	exports.isUndefined = isUndefined;
	
	function isRegExp(re) {
	  return isObject(re) && objectToString(re) === '[object RegExp]';
	}
	exports.isRegExp = isRegExp;
	
	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	exports.isObject = isObject;
	
	function isDate(d) {
	  return isObject(d) && objectToString(d) === '[object Date]';
	}
	exports.isDate = isDate;
	
	function isError(e) {
	  return isObject(e) &&
	      (objectToString(e) === '[object Error]' || e instanceof Error);
	}
	exports.isError = isError;
	
	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	exports.isFunction = isFunction;
	
	function isPrimitive(arg) {
	  return arg === null ||
	         typeof arg === 'boolean' ||
	         typeof arg === 'number' ||
	         typeof arg === 'string' ||
	         typeof arg === 'symbol' ||  // ES6 symbol
	         typeof arg === 'undefined';
	}
	exports.isPrimitive = isPrimitive;
	
	exports.isBuffer = __webpack_require__(185);
	
	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}
	
	
	function pad(n) {
	  return n < 10 ? '0' + n.toString(10) : n.toString(10);
	}
	
	
	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
	              'Oct', 'Nov', 'Dec'];
	
	// 26 Feb 16:19:34
	function timestamp() {
	  var d = new Date();
	  var time = [pad(d.getHours()),
	              pad(d.getMinutes()),
	              pad(d.getSeconds())].join(':');
	  return [d.getDate(), months[d.getMonth()], time].join(' ');
	}
	
	
	// log is just a thin wrapper to console.log that prepends a timestamp
	exports.log = function() {
	  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
	};
	
	
	/**
	 * Inherit the prototype methods from one constructor into another.
	 *
	 * The Function.prototype.inherits from lang.js rewritten as a standalone
	 * function (not on Function.prototype). NOTE: If this file is to be loaded
	 * during bootstrapping this function needs to be rewritten using some native
	 * functions as prototype setup using normal JavaScript does not work as
	 * expected during bootstrapping (see mirror.js in r114903).
	 *
	 * @param {function} ctor Constructor function which needs to inherit the
	 *     prototype.
	 * @param {function} superCtor Constructor function to inherit prototype from.
	 */
	exports.inherits = __webpack_require__(186);
	
	exports._extend = function(origin, add) {
	  // Don't do anything if add isn't an object
	  if (!add || !isObject(add)) return origin;
	
	  var keys = Object.keys(add);
	  var i = keys.length;
	  while (i--) {
	    origin[keys[i]] = add[keys[i]];
	  }
	  return origin;
	};
	
	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(51)))

/***/ },
/* 185 */
/***/ function(module, exports) {

	module.exports = function isBuffer(arg) {
	  return arg && typeof arg === 'object'
	    && typeof arg.copy === 'function'
	    && typeof arg.fill === 'function'
	    && typeof arg.readUInt8 === 'function';
	}

/***/ },
/* 186 */
/***/ function(module, exports) {

	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    var TempCtor = function () {}
	    TempCtor.prototype = superCtor.prototype
	    ctor.prototype = new TempCtor()
	    ctor.prototype.constructor = ctor
	  }
	}


/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * A JavaScript implementation of the Secure Hash Algorithm, SHA-256, as defined
	 * in FIPS 180-2
	 * Version 2.2-beta Copyright Angel Marin, Paul Johnston 2000 - 2009.
	 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
	 *
	 */
	
	var inherits = __webpack_require__(184).inherits
	
	module.exports = function (Buffer, Hash) {
	
	  var K = [
	      0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5,
	      0x3956C25B, 0x59F111F1, 0x923F82A4, 0xAB1C5ED5,
	      0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3,
	      0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174,
	      0xE49B69C1, 0xEFBE4786, 0x0FC19DC6, 0x240CA1CC,
	      0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA,
	      0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7,
	      0xC6E00BF3, 0xD5A79147, 0x06CA6351, 0x14292967,
	      0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13,
	      0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85,
	      0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3,
	      0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070,
	      0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5,
	      0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3,
	      0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208,
	      0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2
	    ]
	
	  var W = new Array(64)
	
	  function Sha256() {
	    this.init()
	
	    this._w = W //new Array(64)
	
	    Hash.call(this, 16*4, 14*4)
	  }
	
	  inherits(Sha256, Hash)
	
	  Sha256.prototype.init = function () {
	
	    this._a = 0x6a09e667|0
	    this._b = 0xbb67ae85|0
	    this._c = 0x3c6ef372|0
	    this._d = 0xa54ff53a|0
	    this._e = 0x510e527f|0
	    this._f = 0x9b05688c|0
	    this._g = 0x1f83d9ab|0
	    this._h = 0x5be0cd19|0
	
	    this._len = this._s = 0
	
	    return this
	  }
	
	  function S (X, n) {
	    return (X >>> n) | (X << (32 - n));
	  }
	
	  function R (X, n) {
	    return (X >>> n);
	  }
	
	  function Ch (x, y, z) {
	    return ((x & y) ^ ((~x) & z));
	  }
	
	  function Maj (x, y, z) {
	    return ((x & y) ^ (x & z) ^ (y & z));
	  }
	
	  function Sigma0256 (x) {
	    return (S(x, 2) ^ S(x, 13) ^ S(x, 22));
	  }
	
	  function Sigma1256 (x) {
	    return (S(x, 6) ^ S(x, 11) ^ S(x, 25));
	  }
	
	  function Gamma0256 (x) {
	    return (S(x, 7) ^ S(x, 18) ^ R(x, 3));
	  }
	
	  function Gamma1256 (x) {
	    return (S(x, 17) ^ S(x, 19) ^ R(x, 10));
	  }
	
	  Sha256.prototype._update = function(M) {
	
	    var W = this._w
	    var a, b, c, d, e, f, g, h
	    var T1, T2
	
	    a = this._a | 0
	    b = this._b | 0
	    c = this._c | 0
	    d = this._d | 0
	    e = this._e | 0
	    f = this._f | 0
	    g = this._g | 0
	    h = this._h | 0
	
	    for (var j = 0; j < 64; j++) {
	      var w = W[j] = j < 16
	        ? M.readInt32BE(j * 4)
	        : Gamma1256(W[j - 2]) + W[j - 7] + Gamma0256(W[j - 15]) + W[j - 16]
	
	      T1 = h + Sigma1256(e) + Ch(e, f, g) + K[j] + w
	
	      T2 = Sigma0256(a) + Maj(a, b, c);
	      h = g; g = f; f = e; e = d + T1; d = c; c = b; b = a; a = T1 + T2;
	    }
	
	    this._a = (a + this._a) | 0
	    this._b = (b + this._b) | 0
	    this._c = (c + this._c) | 0
	    this._d = (d + this._d) | 0
	    this._e = (e + this._e) | 0
	    this._f = (f + this._f) | 0
	    this._g = (g + this._g) | 0
	    this._h = (h + this._h) | 0
	
	  };
	
	  Sha256.prototype._hash = function () {
	    var H = new Buffer(32)
	
	    H.writeInt32BE(this._a,  0)
	    H.writeInt32BE(this._b,  4)
	    H.writeInt32BE(this._c,  8)
	    H.writeInt32BE(this._d, 12)
	    H.writeInt32BE(this._e, 16)
	    H.writeInt32BE(this._f, 20)
	    H.writeInt32BE(this._g, 24)
	    H.writeInt32BE(this._h, 28)
	
	    return H
	  }
	
	  return Sha256
	
	}


/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	var inherits = __webpack_require__(184).inherits
	
	module.exports = function (Buffer, Hash) {
	  var K = [
	    0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd,
	    0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc,
	    0x3956c25b, 0xf348b538, 0x59f111f1, 0xb605d019,
	    0x923f82a4, 0xaf194f9b, 0xab1c5ed5, 0xda6d8118,
	    0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe,
	    0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2,
	    0x72be5d74, 0xf27b896f, 0x80deb1fe, 0x3b1696b1,
	    0x9bdc06a7, 0x25c71235, 0xc19bf174, 0xcf692694,
	    0xe49b69c1, 0x9ef14ad2, 0xefbe4786, 0x384f25e3,
	    0x0fc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65,
	    0x2de92c6f, 0x592b0275, 0x4a7484aa, 0x6ea6e483,
	    0x5cb0a9dc, 0xbd41fbd4, 0x76f988da, 0x831153b5,
	    0x983e5152, 0xee66dfab, 0xa831c66d, 0x2db43210,
	    0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4,
	    0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725,
	    0x06ca6351, 0xe003826f, 0x14292967, 0x0a0e6e70,
	    0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926,
	    0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df,
	    0x650a7354, 0x8baf63de, 0x766a0abb, 0x3c77b2a8,
	    0x81c2c92e, 0x47edaee6, 0x92722c85, 0x1482353b,
	    0xa2bfe8a1, 0x4cf10364, 0xa81a664b, 0xbc423001,
	    0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x0654be30,
	    0xd192e819, 0xd6ef5218, 0xd6990624, 0x5565a910,
	    0xf40e3585, 0x5771202a, 0x106aa070, 0x32bbd1b8,
	    0x19a4c116, 0xb8d2d0c8, 0x1e376c08, 0x5141ab53,
	    0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8,
	    0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb,
	    0x5b9cca4f, 0x7763e373, 0x682e6ff3, 0xd6b2b8a3,
	    0x748f82ee, 0x5defb2fc, 0x78a5636f, 0x43172f60,
	    0x84c87814, 0xa1f0ab72, 0x8cc70208, 0x1a6439ec,
	    0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9,
	    0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b,
	    0xca273ece, 0xea26619c, 0xd186b8c7, 0x21c0c207,
	    0xeada7dd6, 0xcde0eb1e, 0xf57d4f7f, 0xee6ed178,
	    0x06f067aa, 0x72176fba, 0x0a637dc5, 0xa2c898a6,
	    0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b,
	    0x28db77f5, 0x23047d84, 0x32caab7b, 0x40c72493,
	    0x3c9ebe0a, 0x15c9bebc, 0x431d67c4, 0x9c100d4c,
	    0x4cc5d4be, 0xcb3e42b6, 0x597f299c, 0xfc657e2a,
	    0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817
	  ]
	
	  var W = new Array(160)
	
	  function Sha512() {
	    this.init()
	    this._w = W
	
	    Hash.call(this, 128, 112)
	  }
	
	  inherits(Sha512, Hash)
	
	  Sha512.prototype.init = function () {
	
	    this._a = 0x6a09e667|0
	    this._b = 0xbb67ae85|0
	    this._c = 0x3c6ef372|0
	    this._d = 0xa54ff53a|0
	    this._e = 0x510e527f|0
	    this._f = 0x9b05688c|0
	    this._g = 0x1f83d9ab|0
	    this._h = 0x5be0cd19|0
	
	    this._al = 0xf3bcc908|0
	    this._bl = 0x84caa73b|0
	    this._cl = 0xfe94f82b|0
	    this._dl = 0x5f1d36f1|0
	    this._el = 0xade682d1|0
	    this._fl = 0x2b3e6c1f|0
	    this._gl = 0xfb41bd6b|0
	    this._hl = 0x137e2179|0
	
	    this._len = this._s = 0
	
	    return this
	  }
	
	  function S (X, Xl, n) {
	    return (X >>> n) | (Xl << (32 - n))
	  }
	
	  function Ch (x, y, z) {
	    return ((x & y) ^ ((~x) & z));
	  }
	
	  function Maj (x, y, z) {
	    return ((x & y) ^ (x & z) ^ (y & z));
	  }
	
	  Sha512.prototype._update = function(M) {
	
	    var W = this._w
	    var a, b, c, d, e, f, g, h
	    var al, bl, cl, dl, el, fl, gl, hl
	
	    a = this._a | 0
	    b = this._b | 0
	    c = this._c | 0
	    d = this._d | 0
	    e = this._e | 0
	    f = this._f | 0
	    g = this._g | 0
	    h = this._h | 0
	
	    al = this._al | 0
	    bl = this._bl | 0
	    cl = this._cl | 0
	    dl = this._dl | 0
	    el = this._el | 0
	    fl = this._fl | 0
	    gl = this._gl | 0
	    hl = this._hl | 0
	
	    for (var i = 0; i < 80; i++) {
	      var j = i * 2
	
	      var Wi, Wil
	
	      if (i < 16) {
	        Wi = W[j] = M.readInt32BE(j * 4)
	        Wil = W[j + 1] = M.readInt32BE(j * 4 + 4)
	
	      } else {
	        var x  = W[j - 15*2]
	        var xl = W[j - 15*2 + 1]
	        var gamma0  = S(x, xl, 1) ^ S(x, xl, 8) ^ (x >>> 7)
	        var gamma0l = S(xl, x, 1) ^ S(xl, x, 8) ^ S(xl, x, 7)
	
	        x  = W[j - 2*2]
	        xl = W[j - 2*2 + 1]
	        var gamma1  = S(x, xl, 19) ^ S(xl, x, 29) ^ (x >>> 6)
	        var gamma1l = S(xl, x, 19) ^ S(x, xl, 29) ^ S(xl, x, 6)
	
	        // W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16]
	        var Wi7  = W[j - 7*2]
	        var Wi7l = W[j - 7*2 + 1]
	
	        var Wi16  = W[j - 16*2]
	        var Wi16l = W[j - 16*2 + 1]
	
	        Wil = gamma0l + Wi7l
	        Wi  = gamma0  + Wi7 + ((Wil >>> 0) < (gamma0l >>> 0) ? 1 : 0)
	        Wil = Wil + gamma1l
	        Wi  = Wi  + gamma1  + ((Wil >>> 0) < (gamma1l >>> 0) ? 1 : 0)
	        Wil = Wil + Wi16l
	        Wi  = Wi  + Wi16 + ((Wil >>> 0) < (Wi16l >>> 0) ? 1 : 0)
	
	        W[j] = Wi
	        W[j + 1] = Wil
	      }
	
	      var maj = Maj(a, b, c)
	      var majl = Maj(al, bl, cl)
	
	      var sigma0h = S(a, al, 28) ^ S(al, a, 2) ^ S(al, a, 7)
	      var sigma0l = S(al, a, 28) ^ S(a, al, 2) ^ S(a, al, 7)
	      var sigma1h = S(e, el, 14) ^ S(e, el, 18) ^ S(el, e, 9)
	      var sigma1l = S(el, e, 14) ^ S(el, e, 18) ^ S(e, el, 9)
	
	      // t1 = h + sigma1 + ch + K[i] + W[i]
	      var Ki = K[j]
	      var Kil = K[j + 1]
	
	      var ch = Ch(e, f, g)
	      var chl = Ch(el, fl, gl)
	
	      var t1l = hl + sigma1l
	      var t1 = h + sigma1h + ((t1l >>> 0) < (hl >>> 0) ? 1 : 0)
	      t1l = t1l + chl
	      t1 = t1 + ch + ((t1l >>> 0) < (chl >>> 0) ? 1 : 0)
	      t1l = t1l + Kil
	      t1 = t1 + Ki + ((t1l >>> 0) < (Kil >>> 0) ? 1 : 0)
	      t1l = t1l + Wil
	      t1 = t1 + Wi + ((t1l >>> 0) < (Wil >>> 0) ? 1 : 0)
	
	      // t2 = sigma0 + maj
	      var t2l = sigma0l + majl
	      var t2 = sigma0h + maj + ((t2l >>> 0) < (sigma0l >>> 0) ? 1 : 0)
	
	      h  = g
	      hl = gl
	      g  = f
	      gl = fl
	      f  = e
	      fl = el
	      el = (dl + t1l) | 0
	      e  = (d + t1 + ((el >>> 0) < (dl >>> 0) ? 1 : 0)) | 0
	      d  = c
	      dl = cl
	      c  = b
	      cl = bl
	      b  = a
	      bl = al
	      al = (t1l + t2l) | 0
	      a  = (t1 + t2 + ((al >>> 0) < (t1l >>> 0) ? 1 : 0)) | 0
	    }
	
	    this._al = (this._al + al) | 0
	    this._bl = (this._bl + bl) | 0
	    this._cl = (this._cl + cl) | 0
	    this._dl = (this._dl + dl) | 0
	    this._el = (this._el + el) | 0
	    this._fl = (this._fl + fl) | 0
	    this._gl = (this._gl + gl) | 0
	    this._hl = (this._hl + hl) | 0
	
	    this._a = (this._a + a + ((this._al >>> 0) < (al >>> 0) ? 1 : 0)) | 0
	    this._b = (this._b + b + ((this._bl >>> 0) < (bl >>> 0) ? 1 : 0)) | 0
	    this._c = (this._c + c + ((this._cl >>> 0) < (cl >>> 0) ? 1 : 0)) | 0
	    this._d = (this._d + d + ((this._dl >>> 0) < (dl >>> 0) ? 1 : 0)) | 0
	    this._e = (this._e + e + ((this._el >>> 0) < (el >>> 0) ? 1 : 0)) | 0
	    this._f = (this._f + f + ((this._fl >>> 0) < (fl >>> 0) ? 1 : 0)) | 0
	    this._g = (this._g + g + ((this._gl >>> 0) < (gl >>> 0) ? 1 : 0)) | 0
	    this._h = (this._h + h + ((this._hl >>> 0) < (hl >>> 0) ? 1 : 0)) | 0
	  }
	
	  Sha512.prototype._hash = function () {
	    var H = new Buffer(64)
	
	    function writeInt64BE(h, l, offset) {
	      H.writeInt32BE(h, offset)
	      H.writeInt32BE(l, offset + 4)
	    }
	
	    writeInt64BE(this._a, this._al, 0)
	    writeInt64BE(this._b, this._bl, 8)
	    writeInt64BE(this._c, this._cl, 16)
	    writeInt64BE(this._d, this._dl, 24)
	    writeInt64BE(this._e, this._el, 32)
	    writeInt64BE(this._f, this._fl, 40)
	    writeInt64BE(this._g, this._gl, 48)
	    writeInt64BE(this._h, this._hl, 56)
	
	    return H
	  }
	
	  return Sha512
	
	}


/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
	 * Digest Algorithm, as defined in RFC 1321.
	 * Version 2.1 Copyright (C) Paul Johnston 1999 - 2002.
	 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
	 * Distributed under the BSD License
	 * See http://pajhome.org.uk/crypt/md5 for more info.
	 */
	
	var helpers = __webpack_require__(190);
	
	/*
	 * Calculate the MD5 of an array of little-endian words, and a bit length
	 */
	function core_md5(x, len)
	{
	  /* append padding */
	  x[len >> 5] |= 0x80 << ((len) % 32);
	  x[(((len + 64) >>> 9) << 4) + 14] = len;
	
	  var a =  1732584193;
	  var b = -271733879;
	  var c = -1732584194;
	  var d =  271733878;
	
	  for(var i = 0; i < x.length; i += 16)
	  {
	    var olda = a;
	    var oldb = b;
	    var oldc = c;
	    var oldd = d;
	
	    a = md5_ff(a, b, c, d, x[i+ 0], 7 , -680876936);
	    d = md5_ff(d, a, b, c, x[i+ 1], 12, -389564586);
	    c = md5_ff(c, d, a, b, x[i+ 2], 17,  606105819);
	    b = md5_ff(b, c, d, a, x[i+ 3], 22, -1044525330);
	    a = md5_ff(a, b, c, d, x[i+ 4], 7 , -176418897);
	    d = md5_ff(d, a, b, c, x[i+ 5], 12,  1200080426);
	    c = md5_ff(c, d, a, b, x[i+ 6], 17, -1473231341);
	    b = md5_ff(b, c, d, a, x[i+ 7], 22, -45705983);
	    a = md5_ff(a, b, c, d, x[i+ 8], 7 ,  1770035416);
	    d = md5_ff(d, a, b, c, x[i+ 9], 12, -1958414417);
	    c = md5_ff(c, d, a, b, x[i+10], 17, -42063);
	    b = md5_ff(b, c, d, a, x[i+11], 22, -1990404162);
	    a = md5_ff(a, b, c, d, x[i+12], 7 ,  1804603682);
	    d = md5_ff(d, a, b, c, x[i+13], 12, -40341101);
	    c = md5_ff(c, d, a, b, x[i+14], 17, -1502002290);
	    b = md5_ff(b, c, d, a, x[i+15], 22,  1236535329);
	
	    a = md5_gg(a, b, c, d, x[i+ 1], 5 , -165796510);
	    d = md5_gg(d, a, b, c, x[i+ 6], 9 , -1069501632);
	    c = md5_gg(c, d, a, b, x[i+11], 14,  643717713);
	    b = md5_gg(b, c, d, a, x[i+ 0], 20, -373897302);
	    a = md5_gg(a, b, c, d, x[i+ 5], 5 , -701558691);
	    d = md5_gg(d, a, b, c, x[i+10], 9 ,  38016083);
	    c = md5_gg(c, d, a, b, x[i+15], 14, -660478335);
	    b = md5_gg(b, c, d, a, x[i+ 4], 20, -405537848);
	    a = md5_gg(a, b, c, d, x[i+ 9], 5 ,  568446438);
	    d = md5_gg(d, a, b, c, x[i+14], 9 , -1019803690);
	    c = md5_gg(c, d, a, b, x[i+ 3], 14, -187363961);
	    b = md5_gg(b, c, d, a, x[i+ 8], 20,  1163531501);
	    a = md5_gg(a, b, c, d, x[i+13], 5 , -1444681467);
	    d = md5_gg(d, a, b, c, x[i+ 2], 9 , -51403784);
	    c = md5_gg(c, d, a, b, x[i+ 7], 14,  1735328473);
	    b = md5_gg(b, c, d, a, x[i+12], 20, -1926607734);
	
	    a = md5_hh(a, b, c, d, x[i+ 5], 4 , -378558);
	    d = md5_hh(d, a, b, c, x[i+ 8], 11, -2022574463);
	    c = md5_hh(c, d, a, b, x[i+11], 16,  1839030562);
	    b = md5_hh(b, c, d, a, x[i+14], 23, -35309556);
	    a = md5_hh(a, b, c, d, x[i+ 1], 4 , -1530992060);
	    d = md5_hh(d, a, b, c, x[i+ 4], 11,  1272893353);
	    c = md5_hh(c, d, a, b, x[i+ 7], 16, -155497632);
	    b = md5_hh(b, c, d, a, x[i+10], 23, -1094730640);
	    a = md5_hh(a, b, c, d, x[i+13], 4 ,  681279174);
	    d = md5_hh(d, a, b, c, x[i+ 0], 11, -358537222);
	    c = md5_hh(c, d, a, b, x[i+ 3], 16, -722521979);
	    b = md5_hh(b, c, d, a, x[i+ 6], 23,  76029189);
	    a = md5_hh(a, b, c, d, x[i+ 9], 4 , -640364487);
	    d = md5_hh(d, a, b, c, x[i+12], 11, -421815835);
	    c = md5_hh(c, d, a, b, x[i+15], 16,  530742520);
	    b = md5_hh(b, c, d, a, x[i+ 2], 23, -995338651);
	
	    a = md5_ii(a, b, c, d, x[i+ 0], 6 , -198630844);
	    d = md5_ii(d, a, b, c, x[i+ 7], 10,  1126891415);
	    c = md5_ii(c, d, a, b, x[i+14], 15, -1416354905);
	    b = md5_ii(b, c, d, a, x[i+ 5], 21, -57434055);
	    a = md5_ii(a, b, c, d, x[i+12], 6 ,  1700485571);
	    d = md5_ii(d, a, b, c, x[i+ 3], 10, -1894986606);
	    c = md5_ii(c, d, a, b, x[i+10], 15, -1051523);
	    b = md5_ii(b, c, d, a, x[i+ 1], 21, -2054922799);
	    a = md5_ii(a, b, c, d, x[i+ 8], 6 ,  1873313359);
	    d = md5_ii(d, a, b, c, x[i+15], 10, -30611744);
	    c = md5_ii(c, d, a, b, x[i+ 6], 15, -1560198380);
	    b = md5_ii(b, c, d, a, x[i+13], 21,  1309151649);
	    a = md5_ii(a, b, c, d, x[i+ 4], 6 , -145523070);
	    d = md5_ii(d, a, b, c, x[i+11], 10, -1120210379);
	    c = md5_ii(c, d, a, b, x[i+ 2], 15,  718787259);
	    b = md5_ii(b, c, d, a, x[i+ 9], 21, -343485551);
	
	    a = safe_add(a, olda);
	    b = safe_add(b, oldb);
	    c = safe_add(c, oldc);
	    d = safe_add(d, oldd);
	  }
	  return Array(a, b, c, d);
	
	}
	
	/*
	 * These functions implement the four basic operations the algorithm uses.
	 */
	function md5_cmn(q, a, b, x, s, t)
	{
	  return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s),b);
	}
	function md5_ff(a, b, c, d, x, s, t)
	{
	  return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
	}
	function md5_gg(a, b, c, d, x, s, t)
	{
	  return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
	}
	function md5_hh(a, b, c, d, x, s, t)
	{
	  return md5_cmn(b ^ c ^ d, a, b, x, s, t);
	}
	function md5_ii(a, b, c, d, x, s, t)
	{
	  return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
	}
	
	/*
	 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
	 * to work around bugs in some JS interpreters.
	 */
	function safe_add(x, y)
	{
	  var lsw = (x & 0xFFFF) + (y & 0xFFFF);
	  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
	  return (msw << 16) | (lsw & 0xFFFF);
	}
	
	/*
	 * Bitwise rotate a 32-bit number to the left.
	 */
	function bit_rol(num, cnt)
	{
	  return (num << cnt) | (num >>> (32 - cnt));
	}
	
	module.exports = function md5(buf) {
	  return helpers.hash(buf, core_md5, 16);
	};


/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var intSize = 4;
	var zeroBuffer = new Buffer(intSize); zeroBuffer.fill(0);
	var chrsz = 8;
	
	function toArray(buf, bigEndian) {
	  if ((buf.length % intSize) !== 0) {
	    var len = buf.length + (intSize - (buf.length % intSize));
	    buf = Buffer.concat([buf, zeroBuffer], len);
	  }
	
	  var arr = [];
	  var fn = bigEndian ? buf.readInt32BE : buf.readInt32LE;
	  for (var i = 0; i < buf.length; i += intSize) {
	    arr.push(fn.call(buf, i));
	  }
	  return arr;
	}
	
	function toBuffer(arr, size, bigEndian) {
	  var buf = new Buffer(size);
	  var fn = bigEndian ? buf.writeInt32BE : buf.writeInt32LE;
	  for (var i = 0; i < arr.length; i++) {
	    fn.call(buf, arr[i], i * 4, true);
	  }
	  return buf;
	}
	
	function hash(buf, fn, hashSize, bigEndian) {
	  if (!Buffer.isBuffer(buf)) buf = new Buffer(buf);
	  var arr = fn(toArray(buf, bigEndian), buf.length * chrsz);
	  return toBuffer(arr, hashSize, bigEndian);
	}
	
	module.exports = { hash: hash };
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(170).Buffer))

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {
	module.exports = ripemd160
	
	
	
	/*
	CryptoJS v3.1.2
	code.google.com/p/crypto-js
	(c) 2009-2013 by Jeff Mott. All rights reserved.
	code.google.com/p/crypto-js/wiki/License
	*/
	/** @preserve
	(c) 2012 by Cédric Mesnil. All rights reserved.
	
	Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
	
	    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
	    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
	
	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	*/
	
	// Constants table
	var zl = [
	    0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15,
	    7,  4, 13,  1, 10,  6, 15,  3, 12,  0,  9,  5,  2, 14, 11,  8,
	    3, 10, 14,  4,  9, 15,  8,  1,  2,  7,  0,  6, 13, 11,  5, 12,
	    1,  9, 11, 10,  0,  8, 12,  4, 13,  3,  7, 15, 14,  5,  6,  2,
	    4,  0,  5,  9,  7, 12,  2, 10, 14,  1,  3,  8, 11,  6, 15, 13];
	var zr = [
	    5, 14,  7,  0,  9,  2, 11,  4, 13,  6, 15,  8,  1, 10,  3, 12,
	    6, 11,  3,  7,  0, 13,  5, 10, 14, 15,  8, 12,  4,  9,  1,  2,
	    15,  5,  1,  3,  7, 14,  6,  9, 11,  8, 12,  2, 10,  0,  4, 13,
	    8,  6,  4,  1,  3, 11, 15,  0,  5, 12,  2, 13,  9,  7, 10, 14,
	    12, 15, 10,  4,  1,  5,  8,  7,  6,  2, 13, 14,  0,  3,  9, 11];
	var sl = [
	     11, 14, 15, 12,  5,  8,  7,  9, 11, 13, 14, 15,  6,  7,  9,  8,
	    7, 6,   8, 13, 11,  9,  7, 15,  7, 12, 15,  9, 11,  7, 13, 12,
	    11, 13,  6,  7, 14,  9, 13, 15, 14,  8, 13,  6,  5, 12,  7,  5,
	      11, 12, 14, 15, 14, 15,  9,  8,  9, 14,  5,  6,  8,  6,  5, 12,
	    9, 15,  5, 11,  6,  8, 13, 12,  5, 12, 13, 14, 11,  8,  5,  6 ];
	var sr = [
	    8,  9,  9, 11, 13, 15, 15,  5,  7,  7,  8, 11, 14, 14, 12,  6,
	    9, 13, 15,  7, 12,  8,  9, 11,  7,  7, 12,  7,  6, 15, 13, 11,
	    9,  7, 15, 11,  8,  6,  6, 14, 12, 13,  5, 14, 13, 13,  7,  5,
	    15,  5,  8, 11, 14, 14,  6, 14,  6,  9, 12,  9, 12,  5, 15,  8,
	    8,  5, 12,  9, 12,  5, 14,  6,  8, 13,  6,  5, 15, 13, 11, 11 ];
	
	var hl =  [ 0x00000000, 0x5A827999, 0x6ED9EBA1, 0x8F1BBCDC, 0xA953FD4E];
	var hr =  [ 0x50A28BE6, 0x5C4DD124, 0x6D703EF3, 0x7A6D76E9, 0x00000000];
	
	var bytesToWords = function (bytes) {
	  var words = [];
	  for (var i = 0, b = 0; i < bytes.length; i++, b += 8) {
	    words[b >>> 5] |= bytes[i] << (24 - b % 32);
	  }
	  return words;
	};
	
	var wordsToBytes = function (words) {
	  var bytes = [];
	  for (var b = 0; b < words.length * 32; b += 8) {
	    bytes.push((words[b >>> 5] >>> (24 - b % 32)) & 0xFF);
	  }
	  return bytes;
	};
	
	var processBlock = function (H, M, offset) {
	
	  // Swap endian
	  for (var i = 0; i < 16; i++) {
	    var offset_i = offset + i;
	    var M_offset_i = M[offset_i];
	
	    // Swap
	    M[offset_i] = (
	        (((M_offset_i << 8)  | (M_offset_i >>> 24)) & 0x00ff00ff) |
	        (((M_offset_i << 24) | (M_offset_i >>> 8))  & 0xff00ff00)
	    );
	  }
	
	  // Working variables
	  var al, bl, cl, dl, el;
	  var ar, br, cr, dr, er;
	
	  ar = al = H[0];
	  br = bl = H[1];
	  cr = cl = H[2];
	  dr = dl = H[3];
	  er = el = H[4];
	  // Computation
	  var t;
	  for (var i = 0; i < 80; i += 1) {
	    t = (al +  M[offset+zl[i]])|0;
	    if (i<16){
	        t +=  f1(bl,cl,dl) + hl[0];
	    } else if (i<32) {
	        t +=  f2(bl,cl,dl) + hl[1];
	    } else if (i<48) {
	        t +=  f3(bl,cl,dl) + hl[2];
	    } else if (i<64) {
	        t +=  f4(bl,cl,dl) + hl[3];
	    } else {// if (i<80) {
	        t +=  f5(bl,cl,dl) + hl[4];
	    }
	    t = t|0;
	    t =  rotl(t,sl[i]);
	    t = (t+el)|0;
	    al = el;
	    el = dl;
	    dl = rotl(cl, 10);
	    cl = bl;
	    bl = t;
	
	    t = (ar + M[offset+zr[i]])|0;
	    if (i<16){
	        t +=  f5(br,cr,dr) + hr[0];
	    } else if (i<32) {
	        t +=  f4(br,cr,dr) + hr[1];
	    } else if (i<48) {
	        t +=  f3(br,cr,dr) + hr[2];
	    } else if (i<64) {
	        t +=  f2(br,cr,dr) + hr[3];
	    } else {// if (i<80) {
	        t +=  f1(br,cr,dr) + hr[4];
	    }
	    t = t|0;
	    t =  rotl(t,sr[i]) ;
	    t = (t+er)|0;
	    ar = er;
	    er = dr;
	    dr = rotl(cr, 10);
	    cr = br;
	    br = t;
	  }
	  // Intermediate hash value
	  t    = (H[1] + cl + dr)|0;
	  H[1] = (H[2] + dl + er)|0;
	  H[2] = (H[3] + el + ar)|0;
	  H[3] = (H[4] + al + br)|0;
	  H[4] = (H[0] + bl + cr)|0;
	  H[0] =  t;
	};
	
	function f1(x, y, z) {
	  return ((x) ^ (y) ^ (z));
	}
	
	function f2(x, y, z) {
	  return (((x)&(y)) | ((~x)&(z)));
	}
	
	function f3(x, y, z) {
	  return (((x) | (~(y))) ^ (z));
	}
	
	function f4(x, y, z) {
	  return (((x) & (z)) | ((y)&(~(z))));
	}
	
	function f5(x, y, z) {
	  return ((x) ^ ((y) |(~(z))));
	}
	
	function rotl(x,n) {
	  return (x<<n) | (x>>>(32-n));
	}
	
	function ripemd160(message) {
	  var H = [0x67452301, 0xEFCDAB89, 0x98BADCFE, 0x10325476, 0xC3D2E1F0];
	
	  if (typeof message == 'string')
	    message = new Buffer(message, 'utf8');
	
	  var m = bytesToWords(message);
	
	  var nBitsLeft = message.length * 8;
	  var nBitsTotal = message.length * 8;
	
	  // Add padding
	  m[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	  m[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
	      (((nBitsTotal << 8)  | (nBitsTotal >>> 24)) & 0x00ff00ff) |
	      (((nBitsTotal << 24) | (nBitsTotal >>> 8))  & 0xff00ff00)
	  );
	
	  for (var i=0 ; i<m.length; i += 16) {
	    processBlock(H, m, i);
	  }
	
	  // Swap endian
	  for (var i = 0; i < 5; i++) {
	      // Shortcut
	    var H_i = H[i];
	
	    // Swap
	    H[i] = (((H_i << 8)  | (H_i >>> 24)) & 0x00ff00ff) |
	          (((H_i << 24) | (H_i >>> 8))  & 0xff00ff00);
	  }
	
	  var digestbytes = wordsToBytes(H);
	  return new Buffer(digestbytes);
	}
	
	
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(170).Buffer))

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var createHash = __webpack_require__(180)
	
	var zeroBuffer = new Buffer(128)
	zeroBuffer.fill(0)
	
	module.exports = Hmac
	
	function Hmac (alg, key) {
	  if(!(this instanceof Hmac)) return new Hmac(alg, key)
	  this._opad = opad
	  this._alg = alg
	
	  var blocksize = (alg === 'sha512') ? 128 : 64
	
	  key = this._key = !Buffer.isBuffer(key) ? new Buffer(key) : key
	
	  if(key.length > blocksize) {
	    key = createHash(alg).update(key).digest()
	  } else if(key.length < blocksize) {
	    key = Buffer.concat([key, zeroBuffer], blocksize)
	  }
	
	  var ipad = this._ipad = new Buffer(blocksize)
	  var opad = this._opad = new Buffer(blocksize)
	
	  for(var i = 0; i < blocksize; i++) {
	    ipad[i] = key[i] ^ 0x36
	    opad[i] = key[i] ^ 0x5C
	  }
	
	  this._hash = createHash(alg).update(ipad)
	}
	
	Hmac.prototype.update = function (data, enc) {
	  this._hash.update(data, enc)
	  return this
	}
	
	Hmac.prototype.digest = function (enc) {
	  var h = this._hash.digest()
	  return createHash(this._alg).update(this._opad).update(h).digest(enc)
	}
	
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(170).Buffer))

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	var pbkdf2Export = __webpack_require__(194)
	
	module.exports = function (crypto, exports) {
	  exports = exports || {}
	
	  var exported = pbkdf2Export(crypto)
	
	  exports.pbkdf2 = exported.pbkdf2
	  exports.pbkdf2Sync = exported.pbkdf2Sync
	
	  return exports
	}


/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {module.exports = function(crypto) {
	  function pbkdf2(password, salt, iterations, keylen, digest, callback) {
	    if ('function' === typeof digest) {
	      callback = digest
	      digest = undefined
	    }
	
	    if ('function' !== typeof callback)
	      throw new Error('No callback provided to pbkdf2')
	
	    setTimeout(function() {
	      var result
	
	      try {
	        result = pbkdf2Sync(password, salt, iterations, keylen, digest)
	      } catch (e) {
	        return callback(e)
	      }
	
	      callback(undefined, result)
	    })
	  }
	
	  function pbkdf2Sync(password, salt, iterations, keylen, digest) {
	    if ('number' !== typeof iterations)
	      throw new TypeError('Iterations not a number')
	
	    if (iterations < 0)
	      throw new TypeError('Bad iterations')
	
	    if ('number' !== typeof keylen)
	      throw new TypeError('Key length not a number')
	
	    if (keylen < 0)
	      throw new TypeError('Bad key length')
	
	    digest = digest || 'sha1'
	
	    if (!Buffer.isBuffer(password)) password = new Buffer(password)
	    if (!Buffer.isBuffer(salt)) salt = new Buffer(salt)
	
	    var hLen, l = 1, r, T
	    var DK = new Buffer(keylen)
	    var block1 = new Buffer(salt.length + 4)
	    salt.copy(block1, 0, 0, salt.length)
	
	    for (var i = 1; i <= l; i++) {
	      block1.writeUInt32BE(i, salt.length)
	
	      var U = crypto.createHmac(digest, password).update(block1).digest()
	
	      if (!hLen) {
	        hLen = U.length
	        T = new Buffer(hLen)
	        l = Math.ceil(keylen / hLen)
	        r = keylen - (l - 1) * hLen
	
	        if (keylen > (Math.pow(2, 32) - 1) * hLen)
	          throw new TypeError('keylen exceeds maximum length')
	      }
	
	      U.copy(T, 0, 0, hLen)
	
	      for (var j = 1; j < iterations; j++) {
	        U = crypto.createHmac(digest, password).update(U).digest()
	
	        for (var k = 0; k < hLen; k++) {
	          T[k] ^= U[k]
	        }
	      }
	
	      var destPos = (i - 1) * hLen
	      var len = (i == l ? r : hLen)
	      T.copy(DK, destPos, 0, len)
	    }
	
	    return DK
	  }
	
	  return {
	    pbkdf2: pbkdf2,
	    pbkdf2Sync: pbkdf2Sync
	  }
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(170).Buffer))

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {/*
	 * Basic JavaScript BN library - subset useful for RSA encryption.
	 * 
	 * Copyright (c) 2003-2005  Tom Wu
	 * All Rights Reserved.
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining
	 * a copy of this software and associated documentation files (the
	 * "Software"), to deal in the Software without restriction, including
	 * without limitation the rights to use, copy, modify, merge, publish,
	 * distribute, sublicense, and/or sell copies of the Software, and to
	 * permit persons to whom the Software is furnished to do so, subject to
	 * the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be
	 * included in all copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS-IS" AND WITHOUT WARRANTY OF ANY KIND, 
	 * EXPRESS, IMPLIED OR OTHERWISE, INCLUDING WITHOUT LIMITATION, ANY 
	 * WARRANTY OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.  
	 *
	 * IN NO EVENT SHALL TOM WU BE LIABLE FOR ANY SPECIAL, INCIDENTAL,
	 * INDIRECT OR CONSEQUENTIAL DAMAGES OF ANY KIND, OR ANY DAMAGES WHATSOEVER
	 * RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER OR NOT ADVISED OF
	 * THE POSSIBILITY OF DAMAGE, AND ON ANY THEORY OF LIABILITY, ARISING OUT
	 * OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
	 *
	 * In addition, the following condition applies:
	 *
	 * All redistributions must retain an intact copy of this copyright notice
	 * and disclaimer.
	 */
	
	/*
	 * Added Node.js Buffers support
	 * 2014 rzcoder
	 */
	
	var crypt = __webpack_require__(177);
	var _ = __webpack_require__(176)._;
	
	// Bits per digit
	var dbits;
	
	// JavaScript engine analysis
	var canary = 0xdeadbeefcafe;
	var j_lm = ((canary & 0xffffff) == 0xefcafe);
	
	// (public) Constructor
	function BigInteger(a, b) {
	    if (a != null) {
	        if ("number" == typeof a) {
	            this.fromNumber(a, b);
	        } else if (Buffer.isBuffer(a)) {
	            this.fromBuffer(a);
	        } else if (b == null && "string" != typeof a) {
	            this.fromByteArray(a);
	        } else {
	            this.fromString(a, b);
	        }
	    }
	}
	
	// return new, unset BigInteger
	function nbi() {
	    return new BigInteger(null);
	}
	
	// am: Compute w_j += (x*this_i), propagate carries,
	// c is initial carry, returns final carry.
	// c < 3*dvalue, x < 2*dvalue, this_i < dvalue
	// We need to select the fastest one that works in this environment.
	
	// am1: use a single mult and divide to get the high bits,
	// max digit bits should be 26 because
	// max internal value = 2*dvalue^2-2*dvalue (< 2^53)
	function am1(i, x, w, j, c, n) {
	    while (--n >= 0) {
	        var v = x * this[i++] + w[j] + c;
	        c = Math.floor(v / 0x4000000);
	        w[j++] = v & 0x3ffffff;
	    }
	    return c;
	}
	// am2 avoids a big mult-and-extract completely.
	// Max digit bits should be <= 30 because we do bitwise ops
	// on values up to 2*hdvalue^2-hdvalue-1 (< 2^31)
	function am2(i, x, w, j, c, n) {
	    var xl = x & 0x7fff, xh = x >> 15;
	    while (--n >= 0) {
	        var l = this[i] & 0x7fff;
	        var h = this[i++] >> 15;
	        var m = xh * l + h * xl;
	        l = xl * l + ((m & 0x7fff) << 15) + w[j] + (c & 0x3fffffff);
	        c = (l >>> 30) + (m >>> 15) + xh * h + (c >>> 30);
	        w[j++] = l & 0x3fffffff;
	    }
	    return c;
	}
	// Alternately, set max digit bits to 28 since some
	// browsers slow down when dealing with 32-bit numbers.
	function am3(i, x, w, j, c, n) {
	    var xl = x & 0x3fff, xh = x >> 14;
	    while (--n >= 0) {
	        var l = this[i] & 0x3fff;
	        var h = this[i++] >> 14;
	        var m = xh * l + h * xl;
	        l = xl * l + ((m & 0x3fff) << 14) + w[j] + c;
	        c = (l >> 28) + (m >> 14) + xh * h;
	        w[j++] = l & 0xfffffff;
	    }
	    return c;
	}
	
	// We need to select the fastest one that works in this environment. 
	//if (j_lm && (navigator.appName == "Microsoft Internet Explorer")) {
	//	BigInteger.prototype.am = am2;
	//	dbits = 30;
	//} else if (j_lm && (navigator.appName != "Netscape")) {
	//	BigInteger.prototype.am = am1;
	//	dbits = 26;
	//} else { // Mozilla/Netscape seems to prefer am3
	//	BigInteger.prototype.am = am3;
	//	dbits = 28;
	//}
	
	// For node.js, we pick am3 with max dbits to 28.
	BigInteger.prototype.am = am3;
	dbits = 28;
	
	BigInteger.prototype.DB = dbits;
	BigInteger.prototype.DM = ((1 << dbits) - 1);
	BigInteger.prototype.DV = (1 << dbits);
	
	var BI_FP = 52;
	BigInteger.prototype.FV = Math.pow(2, BI_FP);
	BigInteger.prototype.F1 = BI_FP - dbits;
	BigInteger.prototype.F2 = 2 * dbits - BI_FP;
	
	// Digit conversions
	var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
	var BI_RC = new Array();
	var rr, vv;
	rr = "0".charCodeAt(0);
	for (vv = 0; vv <= 9; ++vv) BI_RC[rr++] = vv;
	rr = "a".charCodeAt(0);
	for (vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
	rr = "A".charCodeAt(0);
	for (vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
	
	function int2char(n) {
	    return BI_RM.charAt(n);
	}
	function intAt(s, i) {
	    var c = BI_RC[s.charCodeAt(i)];
	    return (c == null) ? -1 : c;
	}
	
	// (protected) copy this to r
	function bnpCopyTo(r) {
	    for (var i = this.t - 1; i >= 0; --i) r[i] = this[i];
	    r.t = this.t;
	    r.s = this.s;
	}
	
	// (protected) set from integer value x, -DV <= x < DV
	function bnpFromInt(x) {
	    this.t = 1;
	    this.s = (x < 0) ? -1 : 0;
	    if (x > 0) this[0] = x;
	    else if (x < -1) this[0] = x + DV;
	    else this.t = 0;
	}
	
	// return bigint initialized to value
	function nbv(i) {
	    var r = nbi();
	    r.fromInt(i);
	    return r;
	}
	
	// (protected) set from string and radix
	function bnpFromString(data, radix, unsigned) {
	    var k;
	    switch (radix) {
	        case 2:
	            k = 1;
	            break;
	        case 4:
	            k = 2;
	            break;
	        case 8:
	            k = 3;
	            break;
	        case 16:
	            k = 4;
	            break;
	        case 32:
	            k = 5;
	            break;
	        case 256:
	            k = 8;
	            break;
	        default:
	            this.fromRadix(data, radix);
	            return;
	    }
	
	    this.t = 0;
	    this.s = 0;
	
	    var i = data.length;
	    var mi = false;
	    var sh = 0;
	
	    while (--i >= 0) {
	        var x = (k == 8) ? data[i] & 0xff : intAt(data, i);
	        if (x < 0) {
	            if (data.charAt(i) == "-") mi = true;
	            continue;
	        }
	        mi = false;
	        if (sh === 0)
	            this[this.t++] = x;
	        else if (sh + k > this.DB) {
	            this[this.t - 1] |= (x & ((1 << (this.DB - sh)) - 1)) << sh;
	            this[this.t++] = (x >> (this.DB - sh));
	        }
	        else
	            this[this.t - 1] |= x << sh;
	        sh += k;
	        if (sh >= this.DB) sh -= this.DB;
	    }
	    if ((!unsigned) && k == 8 && (data[0] & 0x80) != 0) {
	        this.s = -1;
	        if (sh > 0) this[this.t - 1] |= ((1 << (this.DB - sh)) - 1) << sh;
	    }
	    this.clamp();
	    if (mi) BigInteger.ZERO.subTo(this, this);
	}
	
	function bnpFromByteArray(a, unsigned) {
	    this.fromString(a, 256, unsigned)
	}
	
	function bnpFromBuffer(a) {
	    this.fromString(a, 256, true)
	}
	
	// (protected) clamp off excess high words
	function bnpClamp() {
	    var c = this.s & this.DM;
	    while (this.t > 0 && this[this.t - 1] == c) --this.t;
	}
	
	// (public) return string representation in given radix
	function bnToString(b) {
	    if (this.s < 0) return "-" + this.negate().toString(b);
	    var k;
	    if (b == 16) k = 4;
	    else if (b == 8) k = 3;
	    else if (b == 2) k = 1;
	    else if (b == 32) k = 5;
	    else if (b == 4) k = 2;
	    else return this.toRadix(b);
	    var km = (1 << k) - 1, d, m = false, r = "", i = this.t;
	    var p = this.DB - (i * this.DB) % k;
	    if (i-- > 0) {
	        if (p < this.DB && (d = this[i] >> p) > 0) {
	            m = true;
	            r = int2char(d);
	        }
	        while (i >= 0) {
	            if (p < k) {
	                d = (this[i] & ((1 << p) - 1)) << (k - p);
	                d |= this[--i] >> (p += this.DB - k);
	            }
	            else {
	                d = (this[i] >> (p -= k)) & km;
	                if (p <= 0) {
	                    p += this.DB;
	                    --i;
	                }
	            }
	            if (d > 0) m = true;
	            if (m) r += int2char(d);
	        }
	    }
	    return m ? r : "0";
	}
	
	// (public) -this
	function bnNegate() {
	    var r = nbi();
	    BigInteger.ZERO.subTo(this, r);
	    return r;
	}
	
	// (public) |this|
	function bnAbs() {
	    return (this.s < 0) ? this.negate() : this;
	}
	
	// (public) return + if this > a, - if this < a, 0 if equal
	function bnCompareTo(a) {
	    var r = this.s - a.s;
	    if (r != 0) return r;
	    var i = this.t;
	    r = i - a.t;
	    if (r != 0) return (this.s < 0) ? -r : r;
	    while (--i >= 0) if ((r = this[i] - a[i]) != 0) return r;
	    return 0;
	}
	
	// returns bit length of the integer x
	function nbits(x) {
	    var r = 1, t;
	    if ((t = x >>> 16) != 0) {
	        x = t;
	        r += 16;
	    }
	    if ((t = x >> 8) != 0) {
	        x = t;
	        r += 8;
	    }
	    if ((t = x >> 4) != 0) {
	        x = t;
	        r += 4;
	    }
	    if ((t = x >> 2) != 0) {
	        x = t;
	        r += 2;
	    }
	    if ((t = x >> 1) != 0) {
	        x = t;
	        r += 1;
	    }
	    return r;
	}
	
	// (public) return the number of bits in "this"
	function bnBitLength() {
	    if (this.t <= 0) return 0;
	    return this.DB * (this.t - 1) + nbits(this[this.t - 1] ^ (this.s & this.DM));
	}
	
	// (protected) r = this << n*DB
	function bnpDLShiftTo(n, r) {
	    var i;
	    for (i = this.t - 1; i >= 0; --i) r[i + n] = this[i];
	    for (i = n - 1; i >= 0; --i) r[i] = 0;
	    r.t = this.t + n;
	    r.s = this.s;
	}
	
	// (protected) r = this >> n*DB
	function bnpDRShiftTo(n, r) {
	    for (var i = n; i < this.t; ++i) r[i - n] = this[i];
	    r.t = Math.max(this.t - n, 0);
	    r.s = this.s;
	}
	
	// (protected) r = this << n
	function bnpLShiftTo(n, r) {
	    var bs = n % this.DB;
	    var cbs = this.DB - bs;
	    var bm = (1 << cbs) - 1;
	    var ds = Math.floor(n / this.DB), c = (this.s << bs) & this.DM, i;
	    for (i = this.t - 1; i >= 0; --i) {
	        r[i + ds + 1] = (this[i] >> cbs) | c;
	        c = (this[i] & bm) << bs;
	    }
	    for (i = ds - 1; i >= 0; --i) r[i] = 0;
	    r[ds] = c;
	    r.t = this.t + ds + 1;
	    r.s = this.s;
	    r.clamp();
	}
	
	// (protected) r = this >> n
	function bnpRShiftTo(n, r) {
	    r.s = this.s;
	    var ds = Math.floor(n / this.DB);
	    if (ds >= this.t) {
	        r.t = 0;
	        return;
	    }
	    var bs = n % this.DB;
	    var cbs = this.DB - bs;
	    var bm = (1 << bs) - 1;
	    r[0] = this[ds] >> bs;
	    for (var i = ds + 1; i < this.t; ++i) {
	        r[i - ds - 1] |= (this[i] & bm) << cbs;
	        r[i - ds] = this[i] >> bs;
	    }
	    if (bs > 0) r[this.t - ds - 1] |= (this.s & bm) << cbs;
	    r.t = this.t - ds;
	    r.clamp();
	}
	
	// (protected) r = this - a
	function bnpSubTo(a, r) {
	    var i = 0, c = 0, m = Math.min(a.t, this.t);
	    while (i < m) {
	        c += this[i] - a[i];
	        r[i++] = c & this.DM;
	        c >>= this.DB;
	    }
	    if (a.t < this.t) {
	        c -= a.s;
	        while (i < this.t) {
	            c += this[i];
	            r[i++] = c & this.DM;
	            c >>= this.DB;
	        }
	        c += this.s;
	    }
	    else {
	        c += this.s;
	        while (i < a.t) {
	            c -= a[i];
	            r[i++] = c & this.DM;
	            c >>= this.DB;
	        }
	        c -= a.s;
	    }
	    r.s = (c < 0) ? -1 : 0;
	    if (c < -1) r[i++] = this.DV + c;
	    else if (c > 0) r[i++] = c;
	    r.t = i;
	    r.clamp();
	}
	
	// (protected) r = this * a, r != this,a (HAC 14.12)
	// "this" should be the larger one if appropriate.
	function bnpMultiplyTo(a, r) {
	    var x = this.abs(), y = a.abs();
	    var i = x.t;
	    r.t = i + y.t;
	    while (--i >= 0) r[i] = 0;
	    for (i = 0; i < y.t; ++i) r[i + x.t] = x.am(0, y[i], r, i, 0, x.t);
	    r.s = 0;
	    r.clamp();
	    if (this.s != a.s) BigInteger.ZERO.subTo(r, r);
	}
	
	// (protected) r = this^2, r != this (HAC 14.16)
	function bnpSquareTo(r) {
	    var x = this.abs();
	    var i = r.t = 2 * x.t;
	    while (--i >= 0) r[i] = 0;
	    for (i = 0; i < x.t - 1; ++i) {
	        var c = x.am(i, x[i], r, 2 * i, 0, 1);
	        if ((r[i + x.t] += x.am(i + 1, 2 * x[i], r, 2 * i + 1, c, x.t - i - 1)) >= x.DV) {
	            r[i + x.t] -= x.DV;
	            r[i + x.t + 1] = 1;
	        }
	    }
	    if (r.t > 0) r[r.t - 1] += x.am(i, x[i], r, 2 * i, 0, 1);
	    r.s = 0;
	    r.clamp();
	}
	
	// (protected) divide this by m, quotient and remainder to q, r (HAC 14.20)
	// r != q, this != m.  q or r may be null.
	function bnpDivRemTo(m, q, r) {
	    var pm = m.abs();
	    if (pm.t <= 0) return;
	    var pt = this.abs();
	    if (pt.t < pm.t) {
	        if (q != null) q.fromInt(0);
	        if (r != null) this.copyTo(r);
	        return;
	    }
	    if (r == null) r = nbi();
	    var y = nbi(), ts = this.s, ms = m.s;
	    var nsh = this.DB - nbits(pm[pm.t - 1]);	// normalize modulus
	    if (nsh > 0) {
	        pm.lShiftTo(nsh, y);
	        pt.lShiftTo(nsh, r);
	    }
	    else {
	        pm.copyTo(y);
	        pt.copyTo(r);
	    }
	    var ys = y.t;
	    var y0 = y[ys - 1];
	    if (y0 === 0) return;
	    var yt = y0 * (1 << this.F1) + ((ys > 1) ? y[ys - 2] >> this.F2 : 0);
	    var d1 = this.FV / yt, d2 = (1 << this.F1) / yt, e = 1 << this.F2;
	    var i = r.t, j = i - ys, t = (q == null) ? nbi() : q;
	    y.dlShiftTo(j, t);
	    if (r.compareTo(t) >= 0) {
	        r[r.t++] = 1;
	        r.subTo(t, r);
	    }
	    BigInteger.ONE.dlShiftTo(ys, t);
	    t.subTo(y, y);	// "negative" y so we can replace sub with am later
	    while (y.t < ys) y[y.t++] = 0;
	    while (--j >= 0) {
	        // Estimate quotient digit
	        var qd = (r[--i] == y0) ? this.DM : Math.floor(r[i] * d1 + (r[i - 1] + e) * d2);
	        if ((r[i] += y.am(0, qd, r, j, 0, ys)) < qd) {	// Try it out
	            y.dlShiftTo(j, t);
	            r.subTo(t, r);
	            while (r[i] < --qd) r.subTo(t, r);
	        }
	    }
	    if (q != null) {
	        r.drShiftTo(ys, q);
	        if (ts != ms) BigInteger.ZERO.subTo(q, q);
	    }
	    r.t = ys;
	    r.clamp();
	    if (nsh > 0) r.rShiftTo(nsh, r);	// Denormalize remainder
	    if (ts < 0) BigInteger.ZERO.subTo(r, r);
	}
	
	// (public) this mod a
	function bnMod(a) {
	    var r = nbi();
	    this.abs().divRemTo(a, null, r);
	    if (this.s < 0 && r.compareTo(BigInteger.ZERO) > 0) a.subTo(r, r);
	    return r;
	}
	
	// Modular reduction using "classic" algorithm
	function Classic(m) {
	    this.m = m;
	}
	function cConvert(x) {
	    if (x.s < 0 || x.compareTo(this.m) >= 0) return x.mod(this.m);
	    else return x;
	}
	function cRevert(x) {
	    return x;
	}
	function cReduce(x) {
	    x.divRemTo(this.m, null, x);
	}
	function cMulTo(x, y, r) {
	    x.multiplyTo(y, r);
	    this.reduce(r);
	}
	function cSqrTo(x, r) {
	    x.squareTo(r);
	    this.reduce(r);
	}
	
	Classic.prototype.convert = cConvert;
	Classic.prototype.revert = cRevert;
	Classic.prototype.reduce = cReduce;
	Classic.prototype.mulTo = cMulTo;
	Classic.prototype.sqrTo = cSqrTo;
	
	// (protected) return "-1/this % 2^DB"; useful for Mont. reduction
	// justification:
	//         xy == 1 (mod m)
	//         xy =  1+km
	//   xy(2-xy) = (1+km)(1-km)
	// x[y(2-xy)] = 1-k^2m^2
	// x[y(2-xy)] == 1 (mod m^2)
	// if y is 1/x mod m, then y(2-xy) is 1/x mod m^2
	// should reduce x and y(2-xy) by m^2 at each step to keep size bounded.
	// JS multiply "overflows" differently from C/C++, so care is needed here.
	function bnpInvDigit() {
	    if (this.t < 1) return 0;
	    var x = this[0];
	    if ((x & 1) === 0) return 0;
	    var y = x & 3;		// y == 1/x mod 2^2
	    y = (y * (2 - (x & 0xf) * y)) & 0xf;	// y == 1/x mod 2^4
	    y = (y * (2 - (x & 0xff) * y)) & 0xff;	// y == 1/x mod 2^8
	    y = (y * (2 - (((x & 0xffff) * y) & 0xffff))) & 0xffff;	// y == 1/x mod 2^16
	    // last step - calculate inverse mod DV directly;
	    // assumes 16 < DB <= 32 and assumes ability to handle 48-bit ints
	    y = (y * (2 - x * y % this.DV)) % this.DV;		// y == 1/x mod 2^dbits
	    // we really want the negative inverse, and -DV < y < DV
	    return (y > 0) ? this.DV - y : -y;
	}
	
	// Montgomery reduction
	function Montgomery(m) {
	    this.m = m;
	    this.mp = m.invDigit();
	    this.mpl = this.mp & 0x7fff;
	    this.mph = this.mp >> 15;
	    this.um = (1 << (m.DB - 15)) - 1;
	    this.mt2 = 2 * m.t;
	}
	
	// xR mod m
	function montConvert(x) {
	    var r = nbi();
	    x.abs().dlShiftTo(this.m.t, r);
	    r.divRemTo(this.m, null, r);
	    if (x.s < 0 && r.compareTo(BigInteger.ZERO) > 0) this.m.subTo(r, r);
	    return r;
	}
	
	// x/R mod m
	function montRevert(x) {
	    var r = nbi();
	    x.copyTo(r);
	    this.reduce(r);
	    return r;
	}
	
	// x = x/R mod m (HAC 14.32)
	function montReduce(x) {
	    while (x.t <= this.mt2)	// pad x so am has enough room later
	        x[x.t++] = 0;
	    for (var i = 0; i < this.m.t; ++i) {
	        // faster way of calculating u0 = x[i]*mp mod DV
	        var j = x[i] & 0x7fff;
	        var u0 = (j * this.mpl + (((j * this.mph + (x[i] >> 15) * this.mpl) & this.um) << 15)) & x.DM;
	        // use am to combine the multiply-shift-add into one call
	        j = i + this.m.t;
	        x[j] += this.m.am(0, u0, x, i, 0, this.m.t);
	        // propagate carry
	        while (x[j] >= x.DV) {
	            x[j] -= x.DV;
	            x[++j]++;
	        }
	    }
	    x.clamp();
	    x.drShiftTo(this.m.t, x);
	    if (x.compareTo(this.m) >= 0) x.subTo(this.m, x);
	}
	
	// r = "x^2/R mod m"; x != r
	function montSqrTo(x, r) {
	    x.squareTo(r);
	    this.reduce(r);
	}
	
	// r = "xy/R mod m"; x,y != r
	function montMulTo(x, y, r) {
	    x.multiplyTo(y, r);
	    this.reduce(r);
	}
	
	Montgomery.prototype.convert = montConvert;
	Montgomery.prototype.revert = montRevert;
	Montgomery.prototype.reduce = montReduce;
	Montgomery.prototype.mulTo = montMulTo;
	Montgomery.prototype.sqrTo = montSqrTo;
	
	// (protected) true iff this is even
	function bnpIsEven() {
	    return ((this.t > 0) ? (this[0] & 1) : this.s) === 0;
	}
	
	// (protected) this^e, e < 2^32, doing sqr and mul with "r" (HAC 14.79)
	function bnpExp(e, z) {
	    if (e > 0xffffffff || e < 1) return BigInteger.ONE;
	    var r = nbi(), r2 = nbi(), g = z.convert(this), i = nbits(e) - 1;
	    g.copyTo(r);
	    while (--i >= 0) {
	        z.sqrTo(r, r2);
	        if ((e & (1 << i)) > 0) z.mulTo(r2, g, r);
	        else {
	            var t = r;
	            r = r2;
	            r2 = t;
	        }
	    }
	    return z.revert(r);
	}
	
	// (public) this^e % m, 0 <= e < 2^32
	function bnModPowInt(e, m) {
	    var z;
	    if (e < 256 || m.isEven()) z = new Classic(m); else z = new Montgomery(m);
	    return this.exp(e, z);
	}
	
	// Copyright (c) 2005-2009  Tom Wu
	// All Rights Reserved.
	// See "LICENSE" for details.
	
	// Extended JavaScript BN functions, required for RSA private ops.
	
	// Version 1.1: new BigInteger("0", 10) returns "proper" zero
	// Version 1.2: square() API, isProbablePrime fix
	
	//(public)
	function bnClone() {
	    var r = nbi();
	    this.copyTo(r);
	    return r;
	}
	
	//(public) return value as integer
	function bnIntValue() {
	    if (this.s < 0) {
	        if (this.t == 1) return this[0] - this.DV;
	        else if (this.t === 0) return -1;
	    }
	    else if (this.t == 1) return this[0];
	    else if (this.t === 0) return 0;
	// assumes 16 < DB < 32
	    return ((this[1] & ((1 << (32 - this.DB)) - 1)) << this.DB) | this[0];
	}
	
	//(public) return value as byte
	function bnByteValue() {
	    return (this.t == 0) ? this.s : (this[0] << 24) >> 24;
	}
	
	//(public) return value as short (assumes DB>=16)
	function bnShortValue() {
	    return (this.t == 0) ? this.s : (this[0] << 16) >> 16;
	}
	
	//(protected) return x s.t. r^x < DV
	function bnpChunkSize(r) {
	    return Math.floor(Math.LN2 * this.DB / Math.log(r));
	}
	
	//(public) 0 if this === 0, 1 if this > 0
	function bnSigNum() {
	    if (this.s < 0) return -1;
	    else if (this.t <= 0 || (this.t == 1 && this[0] <= 0)) return 0;
	    else return 1;
	}
	
	//(protected) convert to radix string
	function bnpToRadix(b) {
	    if (b == null) b = 10;
	    if (this.signum() === 0 || b < 2 || b > 36) return "0";
	    var cs = this.chunkSize(b);
	    var a = Math.pow(b, cs);
	    var d = nbv(a), y = nbi(), z = nbi(), r = "";
	    this.divRemTo(d, y, z);
	    while (y.signum() > 0) {
	        r = (a + z.intValue()).toString(b).substr(1) + r;
	        y.divRemTo(d, y, z);
	    }
	    return z.intValue().toString(b) + r;
	}
	
	//(protected) convert from radix string
	function bnpFromRadix(s, b) {
	    this.fromInt(0);
	    if (b == null) b = 10;
	    var cs = this.chunkSize(b);
	    var d = Math.pow(b, cs), mi = false, j = 0, w = 0;
	    for (var i = 0; i < s.length; ++i) {
	        var x = intAt(s, i);
	        if (x < 0) {
	            if (s.charAt(i) == "-" && this.signum() === 0) mi = true;
	            continue;
	        }
	        w = b * w + x;
	        if (++j >= cs) {
	            this.dMultiply(d);
	            this.dAddOffset(w, 0);
	            j = 0;
	            w = 0;
	        }
	    }
	    if (j > 0) {
	        this.dMultiply(Math.pow(b, j));
	        this.dAddOffset(w, 0);
	    }
	    if (mi) BigInteger.ZERO.subTo(this, this);
	}
	
	//(protected) alternate constructor
	function bnpFromNumber(a, b) {
	    if ("number" == typeof b) {
	        // new BigInteger(int,int,RNG)
	        if (a < 2) this.fromInt(1);
	        else {
	            this.fromNumber(a);
	            if (!this.testBit(a - 1))	// force MSB set
	                this.bitwiseTo(BigInteger.ONE.shiftLeft(a - 1), op_or, this);
	            if (this.isEven()) this.dAddOffset(1, 0); // force odd
	            while (!this.isProbablePrime(b)) {
	                this.dAddOffset(2, 0);
	                if (this.bitLength() > a) this.subTo(BigInteger.ONE.shiftLeft(a - 1), this);
	            }
	        }
	    } else {
	        // new BigInteger(int,RNG)
	        var x = crypt.randomBytes((a >> 3) + 1)
	        var t = a & 7;
	
	        if (t > 0)
	            x[0] &= ((1 << t) - 1);
	        else
	            x[0] = 0;
	
	        this.fromByteArray(x);
	    }
	}
	
	//(public) convert to bigendian byte array
	function bnToByteArray() {
	    var i = this.t, r = new Array();
	    r[0] = this.s;
	    var p = this.DB - (i * this.DB) % 8, d, k = 0;
	    if (i-- > 0) {
	        if (p < this.DB && (d = this[i] >> p) != (this.s & this.DM) >> p)
	            r[k++] = d | (this.s << (this.DB - p));
	        while (i >= 0) {
	            if (p < 8) {
	                d = (this[i] & ((1 << p) - 1)) << (8 - p);
	                d |= this[--i] >> (p += this.DB - 8);
	            }
	            else {
	                d = (this[i] >> (p -= 8)) & 0xff;
	                if (p <= 0) {
	                    p += this.DB;
	                    --i;
	                }
	            }
	            if ((d & 0x80) != 0) d |= -256;
	            if (k === 0 && (this.s & 0x80) != (d & 0x80)) ++k;
	            if (k > 0 || d != this.s) r[k++] = d;
	        }
	    }
	    return r;
	}
	
	/**
	 * return Buffer object
	 * @param trim {boolean} slice buffer if first element == 0
	 * @returns {Buffer}
	 */
	function bnToBuffer(trimOrSize) {
	    var res = new Buffer(this.toByteArray());
	    if (trimOrSize === true && res[0] === 0) {
	        res = res.slice(1);
	    } else if (_.isNumber(trimOrSize)) {
	        if (res.length > trimOrSize) {
	            for (var i = 0; i < res.length - trimOrSize; i++) {
	                if (res[i] !== 0) {
	                    return null;
	                }
	            }
	            return res.slice(res.length - trimOrSize);
	        } else if (res.length < trimOrSize) {
	            var padded = new Buffer(trimOrSize);
	            padded.fill(0, 0, trimOrSize - res.length);
	            res.copy(padded, trimOrSize - res.length);
	            return padded;
	        }
	    }
	    return res;
	}
	
	function bnEquals(a) {
	    return (this.compareTo(a) == 0);
	}
	function bnMin(a) {
	    return (this.compareTo(a) < 0) ? this : a;
	}
	function bnMax(a) {
	    return (this.compareTo(a) > 0) ? this : a;
	}
	
	//(protected) r = this op a (bitwise)
	function bnpBitwiseTo(a, op, r) {
	    var i, f, m = Math.min(a.t, this.t);
	    for (i = 0; i < m; ++i) r[i] = op(this[i], a[i]);
	    if (a.t < this.t) {
	        f = a.s & this.DM;
	        for (i = m; i < this.t; ++i) r[i] = op(this[i], f);
	        r.t = this.t;
	    }
	    else {
	        f = this.s & this.DM;
	        for (i = m; i < a.t; ++i) r[i] = op(f, a[i]);
	        r.t = a.t;
	    }
	    r.s = op(this.s, a.s);
	    r.clamp();
	}
	
	//(public) this & a
	function op_and(x, y) {
	    return x & y;
	}
	function bnAnd(a) {
	    var r = nbi();
	    this.bitwiseTo(a, op_and, r);
	    return r;
	}
	
	//(public) this | a
	function op_or(x, y) {
	    return x | y;
	}
	function bnOr(a) {
	    var r = nbi();
	    this.bitwiseTo(a, op_or, r);
	    return r;
	}
	
	//(public) this ^ a
	function op_xor(x, y) {
	    return x ^ y;
	}
	function bnXor(a) {
	    var r = nbi();
	    this.bitwiseTo(a, op_xor, r);
	    return r;
	}
	
	//(public) this & ~a
	function op_andnot(x, y) {
	    return x & ~y;
	}
	function bnAndNot(a) {
	    var r = nbi();
	    this.bitwiseTo(a, op_andnot, r);
	    return r;
	}
	
	//(public) ~this
	function bnNot() {
	    var r = nbi();
	    for (var i = 0; i < this.t; ++i) r[i] = this.DM & ~this[i];
	    r.t = this.t;
	    r.s = ~this.s;
	    return r;
	}
	
	//(public) this << n
	function bnShiftLeft(n) {
	    var r = nbi();
	    if (n < 0) this.rShiftTo(-n, r); else this.lShiftTo(n, r);
	    return r;
	}
	
	//(public) this >> n
	function bnShiftRight(n) {
	    var r = nbi();
	    if (n < 0) this.lShiftTo(-n, r); else this.rShiftTo(n, r);
	    return r;
	}
	
	//return index of lowest 1-bit in x, x < 2^31
	function lbit(x) {
	    if (x === 0) return -1;
	    var r = 0;
	    if ((x & 0xffff) === 0) {
	        x >>= 16;
	        r += 16;
	    }
	    if ((x & 0xff) === 0) {
	        x >>= 8;
	        r += 8;
	    }
	    if ((x & 0xf) === 0) {
	        x >>= 4;
	        r += 4;
	    }
	    if ((x & 3) === 0) {
	        x >>= 2;
	        r += 2;
	    }
	    if ((x & 1) === 0) ++r;
	    return r;
	}
	
	//(public) returns index of lowest 1-bit (or -1 if none)
	function bnGetLowestSetBit() {
	    for (var i = 0; i < this.t; ++i)
	        if (this[i] != 0) return i * this.DB + lbit(this[i]);
	    if (this.s < 0) return this.t * this.DB;
	    return -1;
	}
	
	//return number of 1 bits in x
	function cbit(x) {
	    var r = 0;
	    while (x != 0) {
	        x &= x - 1;
	        ++r;
	    }
	    return r;
	}
	
	//(public) return number of set bits
	function bnBitCount() {
	    var r = 0, x = this.s & this.DM;
	    for (var i = 0; i < this.t; ++i) r += cbit(this[i] ^ x);
	    return r;
	}
	
	//(public) true iff nth bit is set
	function bnTestBit(n) {
	    var j = Math.floor(n / this.DB);
	    if (j >= this.t) return (this.s != 0);
	    return ((this[j] & (1 << (n % this.DB))) != 0);
	}
	
	//(protected) this op (1<<n)
	function bnpChangeBit(n, op) {
	    var r = BigInteger.ONE.shiftLeft(n);
	    this.bitwiseTo(r, op, r);
	    return r;
	}
	
	//(public) this | (1<<n)
	function bnSetBit(n) {
	    return this.changeBit(n, op_or);
	}
	
	//(public) this & ~(1<<n)
	function bnClearBit(n) {
	    return this.changeBit(n, op_andnot);
	}
	
	//(public) this ^ (1<<n)
	function bnFlipBit(n) {
	    return this.changeBit(n, op_xor);
	}
	
	//(protected) r = this + a
	function bnpAddTo(a, r) {
	    var i = 0, c = 0, m = Math.min(a.t, this.t);
	    while (i < m) {
	        c += this[i] + a[i];
	        r[i++] = c & this.DM;
	        c >>= this.DB;
	    }
	    if (a.t < this.t) {
	        c += a.s;
	        while (i < this.t) {
	            c += this[i];
	            r[i++] = c & this.DM;
	            c >>= this.DB;
	        }
	        c += this.s;
	    }
	    else {
	        c += this.s;
	        while (i < a.t) {
	            c += a[i];
	            r[i++] = c & this.DM;
	            c >>= this.DB;
	        }
	        c += a.s;
	    }
	    r.s = (c < 0) ? -1 : 0;
	    if (c > 0) r[i++] = c;
	    else if (c < -1) r[i++] = this.DV + c;
	    r.t = i;
	    r.clamp();
	}
	
	//(public) this + a
	function bnAdd(a) {
	    var r = nbi();
	    this.addTo(a, r);
	    return r;
	}
	
	//(public) this - a
	function bnSubtract(a) {
	    var r = nbi();
	    this.subTo(a, r);
	    return r;
	}
	
	//(public) this * a
	function bnMultiply(a) {
	    var r = nbi();
	    this.multiplyTo(a, r);
	    return r;
	}
	
	// (public) this^2
	function bnSquare() {
	    var r = nbi();
	    this.squareTo(r);
	    return r;
	}
	
	//(public) this / a
	function bnDivide(a) {
	    var r = nbi();
	    this.divRemTo(a, r, null);
	    return r;
	}
	
	//(public) this % a
	function bnRemainder(a) {
	    var r = nbi();
	    this.divRemTo(a, null, r);
	    return r;
	}
	
	//(public) [this/a,this%a]
	function bnDivideAndRemainder(a) {
	    var q = nbi(), r = nbi();
	    this.divRemTo(a, q, r);
	    return new Array(q, r);
	}
	
	//(protected) this *= n, this >= 0, 1 < n < DV
	function bnpDMultiply(n) {
	    this[this.t] = this.am(0, n - 1, this, 0, 0, this.t);
	    ++this.t;
	    this.clamp();
	}
	
	//(protected) this += n << w words, this >= 0
	function bnpDAddOffset(n, w) {
	    if (n === 0) return;
	    while (this.t <= w) this[this.t++] = 0;
	    this[w] += n;
	    while (this[w] >= this.DV) {
	        this[w] -= this.DV;
	        if (++w >= this.t) this[this.t++] = 0;
	        ++this[w];
	    }
	}
	
	//A "null" reducer
	function NullExp() {
	}
	function nNop(x) {
	    return x;
	}
	function nMulTo(x, y, r) {
	    x.multiplyTo(y, r);
	}
	function nSqrTo(x, r) {
	    x.squareTo(r);
	}
	
	NullExp.prototype.convert = nNop;
	NullExp.prototype.revert = nNop;
	NullExp.prototype.mulTo = nMulTo;
	NullExp.prototype.sqrTo = nSqrTo;
	
	//(public) this^e
	function bnPow(e) {
	    return this.exp(e, new NullExp());
	}
	
	//(protected) r = lower n words of "this * a", a.t <= n
	//"this" should be the larger one if appropriate.
	function bnpMultiplyLowerTo(a, n, r) {
	    var i = Math.min(this.t + a.t, n);
	    r.s = 0; // assumes a,this >= 0
	    r.t = i;
	    while (i > 0) r[--i] = 0;
	    var j;
	    for (j = r.t - this.t; i < j; ++i) r[i + this.t] = this.am(0, a[i], r, i, 0, this.t);
	    for (j = Math.min(a.t, n); i < j; ++i) this.am(0, a[i], r, i, 0, n - i);
	    r.clamp();
	}
	
	//(protected) r = "this * a" without lower n words, n > 0
	//"this" should be the larger one if appropriate.
	function bnpMultiplyUpperTo(a, n, r) {
	    --n;
	    var i = r.t = this.t + a.t - n;
	    r.s = 0; // assumes a,this >= 0
	    while (--i >= 0) r[i] = 0;
	    for (i = Math.max(n - this.t, 0); i < a.t; ++i)
	        r[this.t + i - n] = this.am(n - i, a[i], r, 0, 0, this.t + i - n);
	    r.clamp();
	    r.drShiftTo(1, r);
	}
	
	//Barrett modular reduction
	function Barrett(m) {
	// setup Barrett
	    this.r2 = nbi();
	    this.q3 = nbi();
	    BigInteger.ONE.dlShiftTo(2 * m.t, this.r2);
	    this.mu = this.r2.divide(m);
	    this.m = m;
	}
	
	function barrettConvert(x) {
	    if (x.s < 0 || x.t > 2 * this.m.t) return x.mod(this.m);
	    else if (x.compareTo(this.m) < 0) return x;
	    else {
	        var r = nbi();
	        x.copyTo(r);
	        this.reduce(r);
	        return r;
	    }
	}
	
	function barrettRevert(x) {
	    return x;
	}
	
	//x = x mod m (HAC 14.42)
	function barrettReduce(x) {
	    x.drShiftTo(this.m.t - 1, this.r2);
	    if (x.t > this.m.t + 1) {
	        x.t = this.m.t + 1;
	        x.clamp();
	    }
	    this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3);
	    this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2);
	    while (x.compareTo(this.r2) < 0) x.dAddOffset(1, this.m.t + 1);
	    x.subTo(this.r2, x);
	    while (x.compareTo(this.m) >= 0) x.subTo(this.m, x);
	}
	
	//r = x^2 mod m; x != r
	function barrettSqrTo(x, r) {
	    x.squareTo(r);
	    this.reduce(r);
	}
	
	//r = x*y mod m; x,y != r
	function barrettMulTo(x, y, r) {
	    x.multiplyTo(y, r);
	    this.reduce(r);
	}
	
	Barrett.prototype.convert = barrettConvert;
	Barrett.prototype.revert = barrettRevert;
	Barrett.prototype.reduce = barrettReduce;
	Barrett.prototype.mulTo = barrettMulTo;
	Barrett.prototype.sqrTo = barrettSqrTo;
	
	//(public) this^e % m (HAC 14.85)
	function bnModPow(e, m) {
	    var i = e.bitLength(), k, r = nbv(1), z;
	    if (i <= 0) return r;
	    else if (i < 18) k = 1;
	    else if (i < 48) k = 3;
	    else if (i < 144) k = 4;
	    else if (i < 768) k = 5;
	    else k = 6;
	    if (i < 8)
	        z = new Classic(m);
	    else if (m.isEven())
	        z = new Barrett(m);
	    else
	        z = new Montgomery(m);
	
	// precomputation
	    var g = new Array(), n = 3, k1 = k - 1, km = (1 << k) - 1;
	    g[1] = z.convert(this);
	    if (k > 1) {
	        var g2 = nbi();
	        z.sqrTo(g[1], g2);
	        while (n <= km) {
	            g[n] = nbi();
	            z.mulTo(g2, g[n - 2], g[n]);
	            n += 2;
	        }
	    }
	
	    var j = e.t - 1, w, is1 = true, r2 = nbi(), t;
	    i = nbits(e[j]) - 1;
	    while (j >= 0) {
	        if (i >= k1) w = (e[j] >> (i - k1)) & km;
	        else {
	            w = (e[j] & ((1 << (i + 1)) - 1)) << (k1 - i);
	            if (j > 0) w |= e[j - 1] >> (this.DB + i - k1);
	        }
	
	        n = k;
	        while ((w & 1) === 0) {
	            w >>= 1;
	            --n;
	        }
	        if ((i -= n) < 0) {
	            i += this.DB;
	            --j;
	        }
	        if (is1) {	// ret == 1, don't bother squaring or multiplying it
	            g[w].copyTo(r);
	            is1 = false;
	        }
	        else {
	            while (n > 1) {
	                z.sqrTo(r, r2);
	                z.sqrTo(r2, r);
	                n -= 2;
	            }
	            if (n > 0) z.sqrTo(r, r2); else {
	                t = r;
	                r = r2;
	                r2 = t;
	            }
	            z.mulTo(r2, g[w], r);
	        }
	
	        while (j >= 0 && (e[j] & (1 << i)) === 0) {
	            z.sqrTo(r, r2);
	            t = r;
	            r = r2;
	            r2 = t;
	            if (--i < 0) {
	                i = this.DB - 1;
	                --j;
	            }
	        }
	    }
	    return z.revert(r);
	}
	
	//(public) gcd(this,a) (HAC 14.54)
	function bnGCD(a) {
	    var x = (this.s < 0) ? this.negate() : this.clone();
	    var y = (a.s < 0) ? a.negate() : a.clone();
	    if (x.compareTo(y) < 0) {
	        var t = x;
	        x = y;
	        y = t;
	    }
	    var i = x.getLowestSetBit(), g = y.getLowestSetBit();
	    if (g < 0) return x;
	    if (i < g) g = i;
	    if (g > 0) {
	        x.rShiftTo(g, x);
	        y.rShiftTo(g, y);
	    }
	    while (x.signum() > 0) {
	        if ((i = x.getLowestSetBit()) > 0) x.rShiftTo(i, x);
	        if ((i = y.getLowestSetBit()) > 0) y.rShiftTo(i, y);
	        if (x.compareTo(y) >= 0) {
	            x.subTo(y, x);
	            x.rShiftTo(1, x);
	        }
	        else {
	            y.subTo(x, y);
	            y.rShiftTo(1, y);
	        }
	    }
	    if (g > 0) y.lShiftTo(g, y);
	    return y;
	}
	
	//(protected) this % n, n < 2^26
	function bnpModInt(n) {
	    if (n <= 0) return 0;
	    var d = this.DV % n, r = (this.s < 0) ? n - 1 : 0;
	    if (this.t > 0)
	        if (d === 0) r = this[0] % n;
	        else for (var i = this.t - 1; i >= 0; --i) r = (d * r + this[i]) % n;
	    return r;
	}
	
	//(public) 1/this % m (HAC 14.61)
	function bnModInverse(m) {
	    var ac = m.isEven();
	    if ((this.isEven() && ac) || m.signum() === 0) return BigInteger.ZERO;
	    var u = m.clone(), v = this.clone();
	    var a = nbv(1), b = nbv(0), c = nbv(0), d = nbv(1);
	    while (u.signum() != 0) {
	        while (u.isEven()) {
	            u.rShiftTo(1, u);
	            if (ac) {
	                if (!a.isEven() || !b.isEven()) {
	                    a.addTo(this, a);
	                    b.subTo(m, b);
	                }
	                a.rShiftTo(1, a);
	            }
	            else if (!b.isEven()) b.subTo(m, b);
	            b.rShiftTo(1, b);
	        }
	        while (v.isEven()) {
	            v.rShiftTo(1, v);
	            if (ac) {
	                if (!c.isEven() || !d.isEven()) {
	                    c.addTo(this, c);
	                    d.subTo(m, d);
	                }
	                c.rShiftTo(1, c);
	            }
	            else if (!d.isEven()) d.subTo(m, d);
	            d.rShiftTo(1, d);
	        }
	        if (u.compareTo(v) >= 0) {
	            u.subTo(v, u);
	            if (ac) a.subTo(c, a);
	            b.subTo(d, b);
	        }
	        else {
	            v.subTo(u, v);
	            if (ac) c.subTo(a, c);
	            d.subTo(b, d);
	        }
	    }
	    if (v.compareTo(BigInteger.ONE) != 0) return BigInteger.ZERO;
	    if (d.compareTo(m) >= 0) return d.subtract(m);
	    if (d.signum() < 0) d.addTo(m, d); else return d;
	    if (d.signum() < 0) return d.add(m); else return d;
	}
	
	var lowprimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997];
	var lplim = (1 << 26) / lowprimes[lowprimes.length - 1];
	
	//(public) test primality with certainty >= 1-.5^t
	function bnIsProbablePrime(t) {
	    var i, x = this.abs();
	    if (x.t == 1 && x[0] <= lowprimes[lowprimes.length - 1]) {
	        for (i = 0; i < lowprimes.length; ++i)
	            if (x[0] == lowprimes[i]) return true;
	        return false;
	    }
	    if (x.isEven()) return false;
	    i = 1;
	    while (i < lowprimes.length) {
	        var m = lowprimes[i], j = i + 1;
	        while (j < lowprimes.length && m < lplim) m *= lowprimes[j++];
	        m = x.modInt(m);
	        while (i < j) if (m % lowprimes[i++] === 0) return false;
	    }
	    return x.millerRabin(t);
	}
	
	//(protected) true if probably prime (HAC 4.24, Miller-Rabin)
	function bnpMillerRabin(t) {
	    var n1 = this.subtract(BigInteger.ONE);
	    var k = n1.getLowestSetBit();
	    if (k <= 0) return false;
	    var r = n1.shiftRight(k);
	    t = (t + 1) >> 1;
	    if (t > lowprimes.length) t = lowprimes.length;
	    var a = nbi();
	    for (var i = 0; i < t; ++i) {
	        //Pick bases at random, instead of starting at 2
	        a.fromInt(lowprimes[Math.floor(Math.random() * lowprimes.length)]);
	        var y = a.modPow(r, this);
	        if (y.compareTo(BigInteger.ONE) != 0 && y.compareTo(n1) != 0) {
	            var j = 1;
	            while (j++ < k && y.compareTo(n1) != 0) {
	                y = y.modPowInt(2, this);
	                if (y.compareTo(BigInteger.ONE) === 0) return false;
	            }
	            if (y.compareTo(n1) != 0) return false;
	        }
	    }
	    return true;
	}
	
	// protected
	BigInteger.prototype.copyTo = bnpCopyTo;
	BigInteger.prototype.fromInt = bnpFromInt;
	BigInteger.prototype.fromString = bnpFromString;
	BigInteger.prototype.fromByteArray = bnpFromByteArray;
	BigInteger.prototype.fromBuffer = bnpFromBuffer;
	BigInteger.prototype.clamp = bnpClamp;
	BigInteger.prototype.dlShiftTo = bnpDLShiftTo;
	BigInteger.prototype.drShiftTo = bnpDRShiftTo;
	BigInteger.prototype.lShiftTo = bnpLShiftTo;
	BigInteger.prototype.rShiftTo = bnpRShiftTo;
	BigInteger.prototype.subTo = bnpSubTo;
	BigInteger.prototype.multiplyTo = bnpMultiplyTo;
	BigInteger.prototype.squareTo = bnpSquareTo;
	BigInteger.prototype.divRemTo = bnpDivRemTo;
	BigInteger.prototype.invDigit = bnpInvDigit;
	BigInteger.prototype.isEven = bnpIsEven;
	BigInteger.prototype.exp = bnpExp;
	
	BigInteger.prototype.chunkSize = bnpChunkSize;
	BigInteger.prototype.toRadix = bnpToRadix;
	BigInteger.prototype.fromRadix = bnpFromRadix;
	BigInteger.prototype.fromNumber = bnpFromNumber;
	BigInteger.prototype.bitwiseTo = bnpBitwiseTo;
	BigInteger.prototype.changeBit = bnpChangeBit;
	BigInteger.prototype.addTo = bnpAddTo;
	BigInteger.prototype.dMultiply = bnpDMultiply;
	BigInteger.prototype.dAddOffset = bnpDAddOffset;
	BigInteger.prototype.multiplyLowerTo = bnpMultiplyLowerTo;
	BigInteger.prototype.multiplyUpperTo = bnpMultiplyUpperTo;
	BigInteger.prototype.modInt = bnpModInt;
	BigInteger.prototype.millerRabin = bnpMillerRabin;
	
	
	// public
	BigInteger.prototype.toString = bnToString;
	BigInteger.prototype.negate = bnNegate;
	BigInteger.prototype.abs = bnAbs;
	BigInteger.prototype.compareTo = bnCompareTo;
	BigInteger.prototype.bitLength = bnBitLength;
	BigInteger.prototype.mod = bnMod;
	BigInteger.prototype.modPowInt = bnModPowInt;
	
	BigInteger.prototype.clone = bnClone;
	BigInteger.prototype.intValue = bnIntValue;
	BigInteger.prototype.byteValue = bnByteValue;
	BigInteger.prototype.shortValue = bnShortValue;
	BigInteger.prototype.signum = bnSigNum;
	BigInteger.prototype.toByteArray = bnToByteArray;
	BigInteger.prototype.toBuffer = bnToBuffer;
	BigInteger.prototype.equals = bnEquals;
	BigInteger.prototype.min = bnMin;
	BigInteger.prototype.max = bnMax;
	BigInteger.prototype.and = bnAnd;
	BigInteger.prototype.or = bnOr;
	BigInteger.prototype.xor = bnXor;
	BigInteger.prototype.andNot = bnAndNot;
	BigInteger.prototype.not = bnNot;
	BigInteger.prototype.shiftLeft = bnShiftLeft;
	BigInteger.prototype.shiftRight = bnShiftRight;
	BigInteger.prototype.getLowestSetBit = bnGetLowestSetBit;
	BigInteger.prototype.bitCount = bnBitCount;
	BigInteger.prototype.testBit = bnTestBit;
	BigInteger.prototype.setBit = bnSetBit;
	BigInteger.prototype.clearBit = bnClearBit;
	BigInteger.prototype.flipBit = bnFlipBit;
	BigInteger.prototype.add = bnAdd;
	BigInteger.prototype.subtract = bnSubtract;
	BigInteger.prototype.multiply = bnMultiply;
	BigInteger.prototype.divide = bnDivide;
	BigInteger.prototype.remainder = bnRemainder;
	BigInteger.prototype.divideAndRemainder = bnDivideAndRemainder;
	BigInteger.prototype.modPow = bnModPow;
	BigInteger.prototype.modInverse = bnModInverse;
	BigInteger.prototype.pow = bnPow;
	BigInteger.prototype.gcd = bnGCD;
	BigInteger.prototype.isProbablePrime = bnIsProbablePrime;
	BigInteger.int2char = int2char;
	
	// "constants"
	BigInteger.ZERO = nbv(0);
	BigInteger.ONE = nbv(1);
	
	// JSBN-specific extension
	BigInteger.prototype.square = bnSquare;
	
	//BigInteger interfaces not implemented in jsbn:
	
	//BigInteger(int signum, byte[] magnitude)
	//double doubleValue()
	//float floatValue()
	//int hashCode()
	//long longValue()
	//static BigInteger valueOf(long val)
	
	module.exports = BigInteger;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(170).Buffer))

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    pkcs1: __webpack_require__(197),
	    pkcs1_oaep: __webpack_require__(198),
	    pss: __webpack_require__(199),
	
	    /**
	     * Check if scheme has padding methods
	     * @param scheme {string}
	     * @returns {Boolean}
	     */
	    isEncryption: function (scheme) {
	        return module.exports[scheme] && module.exports[scheme].isEncryption;
	    },
	
	    /**
	     * Check if scheme has sign/verify methods
	     * @param scheme {string}
	     * @returns {Boolean}
	     */
	    isSignature: function (scheme) {
	        return module.exports[scheme] && module.exports[scheme].isSignature;
	    }
	};

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {/**
	 * PKCS1 padding and signature scheme
	 */
	
	var BigInteger = __webpack_require__(195);
	var crypt = __webpack_require__(177);
	var constants = __webpack_require__(174);
	var SIGN_INFO_HEAD = {
	    md2: new Buffer('3020300c06082a864886f70d020205000410', 'hex'),
	    md5: new Buffer('3020300c06082a864886f70d020505000410', 'hex'),
	    sha1: new Buffer('3021300906052b0e03021a05000414', 'hex'),
	    sha224: new Buffer('302d300d06096086480165030402040500041c', 'hex'),
	    sha256: new Buffer('3031300d060960864801650304020105000420', 'hex'),
	    sha384: new Buffer('3041300d060960864801650304020205000430', 'hex'),
	    sha512: new Buffer('3051300d060960864801650304020305000440', 'hex'),
	    ripemd160: new Buffer('3021300906052b2403020105000414', 'hex'),
	    rmd160: new Buffer('3021300906052b2403020105000414', 'hex')
	};
	
	var SIGN_ALG_TO_HASH_ALIASES = {
	    'ripemd160': 'rmd160'
	};
	
	var DEFAULT_HASH_FUNCTION = 'sha256';
	
	module.exports = {
	    isEncryption: true,
	    isSignature: true
	};
	
	module.exports.makeScheme = function (key, options) {
	    function Scheme(key, options) {
	        this.key = key;
	        this.options = options;
	    }
	
	    Scheme.prototype.maxMessageLength = function () {
	        if (this.options.encryptionSchemeOptions && this.options.encryptionSchemeOptions.padding == constants.RSA_NO_PADDING) {
	            return this.key.encryptedDataLength;
	        }
	        return this.key.encryptedDataLength - 11;
	    };
	
	    /**
	     * Pad input Buffer to encryptedDataLength bytes, and return new Buffer
	     * alg: PKCS#1
	     * @param buffer
	     * @returns {Buffer}
	     */
	    Scheme.prototype.encPad = function (buffer, options) {
	        options = options || {};
	        var filled;
	        if (buffer.length > this.key.maxMessageLength) {
	            throw new Error("Message too long for RSA (n=" + this.key.encryptedDataLength + ", l=" + buffer.length + ")");
	        }
	        if (this.options.encryptionSchemeOptions && this.options.encryptionSchemeOptions.padding == constants.RSA_NO_PADDING) {
	            //RSA_NO_PADDING treated like JAVA left pad with zero character
	            return this.pkcs0pad(buffer);
	        }
	
	        /* Type 1: zeros padding for private key encrypt */
	        if (options.type === 1) {
	            filled = new Buffer(this.key.encryptedDataLength - buffer.length - 1);
	            filled.fill(0xff, 0, filled.length - 1);
	            filled[0] = 1;
	            filled[filled.length - 1] = 0;
	
	            return Buffer.concat([filled, buffer]);
	        } else {
	            /* random padding for public key encrypt */
	            filled = new Buffer(this.key.encryptedDataLength - buffer.length);
	            filled[0] = 0;
	            filled[1] = 2;
	            var rand = crypt.randomBytes(filled.length - 3);
	            for (var i = 0; i < rand.length; i++) {
	                var r = rand[i];
	                while (r === 0) { // non-zero only
	                    r = crypt.randomBytes(1)[0];
	                }
	                filled[i + 2] = r;
	            }
	            filled[filled.length - 1] = 0;
	            return Buffer.concat([filled, buffer]);
	        }
	    };
	
	    /**
	     * Unpad input Buffer and, if valid, return the Buffer object
	     * alg: PKCS#1 (type 2, random)
	     * @param buffer
	     * @returns {Buffer}
	     */
	    Scheme.prototype.encUnPad = function (buffer, options) {
	        options = options || {};
	        var i = 0;
	
	        if (this.options.encryptionSchemeOptions && this.options.encryptionSchemeOptions.padding == constants.RSA_NO_PADDING) {
	            //RSA_NO_PADDING treated like JAVA left pad with zero character
	            return this.pkcs0unpad(buffer);
	        }
	
	        if (buffer.length < 4) {
	            return null;
	        }
	
	        /* Type 1: zeros padding for private key decrypt */
	        if (options.type === 1) {
	            if (buffer[0] !== 0 && buffer[1] !== 1) {
	                return null;
	            }
	            i = 3;
	            while (buffer[i] !== 0) {
	                if (buffer[i] != 0xFF || ++i >= buffer.length) {
	                    return null;
	                }
	            }
	        } else {
	            /* random padding for public key decrypt */
	            if (buffer[0] !== 0 && buffer[1] !== 2) {
	                return null;
	            }
	            i = 3;
	            while (buffer[i] !== 0) {
	                if (++i >= buffer.length) {
	                    return null;
	                }
	            }
	        }
	        return buffer.slice(i + 1, buffer.length);
	    };
	
	    Scheme.prototype.sign = function (buffer) {
	        var hashAlgorithm = this.options.signingSchemeOptions.hash || DEFAULT_HASH_FUNCTION;
	        if (this.options.environment === 'browser') {
	            hashAlgorithm = SIGN_ALG_TO_HASH_ALIASES[hashAlgorithm] || hashAlgorithm;
	
	            var hasher = crypt.createHash(hashAlgorithm);
	            hasher.update(buffer);
	            var hash = this.pkcs1pad(hasher.digest(), hashAlgorithm);
	            var res = this.key.$doPrivate(new BigInteger(hash)).toBuffer(this.key.encryptedDataLength);
	
	            return res;
	        } else {
	            var signer = crypt.createSign('RSA-' + hashAlgorithm.toUpperCase());
	            signer.update(buffer);
	            return signer.sign(this.options.rsaUtils.exportKey('private'));
	        }
	    };
	
	    Scheme.prototype.verify = function (buffer, signature, signature_encoding) {
	        if (this.options.encryptionSchemeOptions && this.options.encryptionSchemeOptions.padding == constants.RSA_NO_PADDING) {
	            //RSA_NO_PADDING has no verify data
	            return false;
	        }
	        var hashAlgorithm = this.options.signingSchemeOptions.hash || DEFAULT_HASH_FUNCTION;
	        if (this.options.environment === 'browser') {
	            hashAlgorithm = SIGN_ALG_TO_HASH_ALIASES[hashAlgorithm] || hashAlgorithm;
	
	            if (signature_encoding) {
	                signature = new Buffer(signature, signature_encoding);
	            }
	
	            var hasher = crypt.createHash(hashAlgorithm);
	            hasher.update(buffer);
	            var hash = this.pkcs1pad(hasher.digest(), hashAlgorithm);
	            var m = this.key.$doPublic(new BigInteger(signature));
	
	            return m.toBuffer().toString('hex') == hash.toString('hex');
	        } else {
	            var verifier = crypt.createVerify('RSA-' + hashAlgorithm.toUpperCase());
	            verifier.update(buffer);
	            return verifier.verify(this.options.rsaUtils.exportKey('public'), signature, signature_encoding);
	        }
	    };
	
	    /**
	     * PKCS#1 zero pad input buffer to max data length
	     * @param hashBuf
	     * @param hashAlgorithm
	     * @returns {*}
	     */
	    Scheme.prototype.pkcs0pad = function (buffer) {
	        var filled = new Buffer(this.key.maxMessageLength - buffer.length);
	        filled.fill(0);
	        return Buffer.concat([filled, buffer]);
	
	        return filled;
	    };
	
	    Scheme.prototype.pkcs0unpad = function (buffer) {
	        var unPad;
	        if (typeof buffer.lastIndexOf == "function") { //patch for old node version
	            unPad = buffer.slice(buffer.lastIndexOf('\0') + 1, buffer.length);
	        } else {
	            unPad = buffer.slice(String.prototype.lastIndexOf.call(buffer, '\0') + 1, buffer.length);
	        }
	
	        return unPad;
	    };
	
	    /**
	     * PKCS#1 pad input buffer to max data length
	     * @param hashBuf
	     * @param hashAlgorithm
	     * @returns {*}
	     */
	    Scheme.prototype.pkcs1pad = function (hashBuf, hashAlgorithm) {
	        var digest = SIGN_INFO_HEAD[hashAlgorithm];
	        if (!digest) {
	            throw Error('Unsupported hash algorithm');
	        }
	
	        var data = Buffer.concat([digest, hashBuf]);
	
	        if (data.length + 10 > this.key.encryptedDataLength) {
	            throw Error('Key is too short for signing algorithm (' + hashAlgorithm + ')');
	        }
	
	        var filled = new Buffer(this.key.encryptedDataLength - data.length - 1);
	        filled.fill(0xff, 0, filled.length - 1);
	        filled[0] = 1;
	        filled[filled.length - 1] = 0;
	
	        var res = Buffer.concat([filled, data]);
	
	        return res;
	    };
	
	    return new Scheme(key, options);
	};
	
	
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(170).Buffer))

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {/**
	 * PKCS_OAEP signature scheme
	 */
	
	var BigInteger = __webpack_require__(195);
	var crypt = __webpack_require__(177);
	
	module.exports = {
	    isEncryption: true,
	    isSignature: false
	};
	
	module.exports.digestLength = {
	    md4: 16,
	    md5: 16,
	    ripemd160: 20,
	    rmd160: 20,
	    sha: 20,
	    sha1: 20,
	    sha224: 28,
	    sha256: 32,
	    sha384: 48,
	    sha512: 64
	};
	
	var DEFAULT_HASH_FUNCTION = 'sha1';
	
	/*
	 * OAEP Mask Generation Function 1
	 * Generates a buffer full of pseudorandom bytes given seed and maskLength.
	 * Giving the same seed, maskLength, and hashFunction will result in the same exact byte values in the buffer.
	 *
	 * https://tools.ietf.org/html/rfc3447#appendix-B.2.1
	 *
	 * Parameters:
	 * seed			[Buffer]	The pseudo random seed for this function
	 * maskLength	[int]		The length of the output
	 * hashFunction	[String]	The hashing function to use. Will accept any valid crypto hash. Default "sha1"
	 *		Supports "sha1" and "sha256".
	 *		To add another algorythm the algorythem must be accepted by crypto.createHash, and then the length of the output of the hash function (the digest) must be added to the digestLength object below.
	 *		Most RSA implementations will be expecting sha1
	 */
	module.exports.eme_oaep_mgf1 = function (seed, maskLength, hashFunction) {
	    hashFunction = hashFunction || DEFAULT_HASH_FUNCTION;
	    var hLen = module.exports.digestLength[hashFunction];
	    var count = Math.ceil(maskLength / hLen);
	    var T = new Buffer(hLen * count);
	    var c = new Buffer(4);
	    for (var i = 0; i < count; ++i) {
	        var hash = crypt.createHash(hashFunction);
	        hash.update(seed);
	        c.writeUInt32BE(i, 0);
	        hash.update(c);
	        hash.digest().copy(T, i * hLen);
	    }
	    return T.slice(0, maskLength);
	};
	
	module.exports.makeScheme = function (key, options) {
	    function Scheme(key, options) {
	        this.key = key;
	        this.options = options;
	    }
	
	    Scheme.prototype.maxMessageLength = function () {
	        return this.key.encryptedDataLength - 2 * module.exports.digestLength[this.options.encryptionSchemeOptions.hash || DEFAULT_HASH_FUNCTION] - 2;
	    };
	
	    /**
	     * Pad input
	     * alg: PKCS1_OAEP
	     *
	     * https://tools.ietf.org/html/rfc3447#section-7.1.1
	     */
	    Scheme.prototype.encPad = function (buffer) {
	        var hash = this.options.encryptionSchemeOptions.hash || DEFAULT_HASH_FUNCTION;
	        var mgf = this.options.encryptionSchemeOptions.mgf || module.exports.eme_oaep_mgf1;
	        var label = this.options.encryptionSchemeOptions.label || new Buffer(0);
	        var emLen = this.key.encryptedDataLength;
	
	        var hLen = module.exports.digestLength[hash];
	
	        // Make sure we can put message into an encoded message of emLen bytes
	        if (buffer.length > emLen - 2 * hLen - 2) {
	            throw new Error("Message is too long to encode into an encoded message with a length of " + emLen + " bytes, increase" +
	            "emLen to fix this error (minimum value for given parameters and options: " + (emLen - 2 * hLen - 2) + ")");
	        }
	
	        var lHash = crypt.createHash(hash);
	        lHash.update(label);
	        lHash = lHash.digest();
	
	        var PS = new Buffer(emLen - buffer.length - 2 * hLen - 1); // Padding "String"
	        PS.fill(0); // Fill the buffer with octets of 0
	        PS[PS.length - 1] = 1;
	
	        var DB = Buffer.concat([lHash, PS, buffer]);
	        var seed = crypt.randomBytes(hLen);
	
	        // mask = dbMask
	        var mask = mgf(seed, DB.length, hash);
	        // XOR DB and dbMask together.
	        for (var i = 0; i < DB.length; i++) {
	            DB[i] ^= mask[i];
	        }
	        // DB = maskedDB
	
	        // mask = seedMask
	        mask = mgf(DB, hLen, hash);
	        // XOR seed and seedMask together.
	        for (i = 0; i < seed.length; i++) {
	            seed[i] ^= mask[i];
	        }
	        // seed = maskedSeed
	
	        var em = new Buffer(1 + seed.length + DB.length);
	        em[0] = 0;
	        seed.copy(em, 1);
	        DB.copy(em, 1 + seed.length);
	
	        return em;
	    };
	
	    /**
	     * Unpad input
	     * alg: PKCS1_OAEP
	     *
	     * Note: This method works within the buffer given and modifies the values. It also returns a slice of the EM as the return Message.
	     * If the implementation requires that the EM parameter be unmodified then the implementation should pass in a clone of the EM buffer.
	     *
	     * https://tools.ietf.org/html/rfc3447#section-7.1.2
	     */
	    Scheme.prototype.encUnPad = function (buffer) {
	        var hash = this.options.encryptionSchemeOptions.hash || DEFAULT_HASH_FUNCTION;
	        var mgf = this.options.encryptionSchemeOptions.mgf || module.exports.eme_oaep_mgf1;
	        var label = this.options.encryptionSchemeOptions.label || new Buffer(0);
	
	        var hLen = module.exports.digestLength[hash];
	
	        // Check to see if buffer is a properly encoded OAEP message
	        if (buffer.length < 2 * hLen + 2) {
	            throw new Error("Error decoding message, the supplied message is not long enough to be a valid OAEP encoded message");
	        }
	
	        var seed = buffer.slice(1, hLen + 1);	// seed = maskedSeed
	        var DB = buffer.slice(1 + hLen);		// DB = maskedDB
	
	        var mask = mgf(DB, hLen, hash); // seedMask
	        // XOR maskedSeed and seedMask together to get the original seed.
	        for (var i = 0; i < seed.length; i++) {
	            seed[i] ^= mask[i];
	        }
	
	        mask = mgf(seed, DB.length, hash); // dbMask
	        // XOR DB and dbMask together to get the original data block.
	        for (i = 0; i < DB.length; i++) {
	            DB[i] ^= mask[i];
	        }
	
	        var lHash = crypt.createHash(hash);
	        lHash.update(label);
	        lHash = lHash.digest();
	
	        var lHashEM = DB.slice(0, hLen);
	        if (lHashEM.toString("hex") != lHash.toString("hex")) {
	            throw new Error("Error decoding message, the lHash calculated from the label provided and the lHash in the encrypted data do not match.");
	        }
	
	        // Filter out padding
	        i = hLen;
	        while (DB[i++] === 0 && i < DB.length);
	        if (DB[i - 1] != 1) {
	            throw new Error("Error decoding message, there is no padding message separator byte");
	        }
	
	        return DB.slice(i); // Message
	    };
	
	    return new Scheme(key, options);
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(170).Buffer))

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {/**
	 * PSS signature scheme
	 */
	
	var BigInteger = __webpack_require__(195);
	var crypt = __webpack_require__(177);
	
	module.exports = {
	    isEncryption: false,
	    isSignature: true
	};
	
	var DEFAULT_HASH_FUNCTION = 'sha1';
	var DEFAULT_SALT_LENGTH = 20;
	
	module.exports.makeScheme = function (key, options) {
	    var OAEP = __webpack_require__(196).pkcs1_oaep;
	
	    /**
	     * @param key
	     * @param options
	     * options    [Object]    An object that contains the following keys that specify certain options for encoding.
	     *  └>signingSchemeOptions
	     *     ├>hash    [String]    Hash function to use when encoding and generating masks. Must be a string accepted by node's crypto.createHash function. (default = "sha1")
	     *     ├>mgf    [function]    The mask generation function to use when encoding. (default = mgf1SHA1)
	     *     └>sLen    [uint]        The length of the salt to generate. (default = 20)
	     * @constructor
	     */
	    function Scheme(key, options) {
	        this.key = key;
	        this.options = options;
	    }
	
	    Scheme.prototype.sign = function (buffer) {
	        var mHash = crypt.createHash(this.options.signingSchemeOptions.hash || DEFAULT_HASH_FUNCTION);
	        mHash.update(buffer);
	
	        var encoded = this.emsa_pss_encode(mHash.digest(), this.key.keySize - 1);
	        return this.key.$doPrivate(new BigInteger(encoded)).toBuffer(this.key.encryptedDataLength);
	    };
	
	    Scheme.prototype.verify = function (buffer, signature, signature_encoding) {
	        if (signature_encoding) {
	            signature = new Buffer(signature, signature_encoding);
	        }
	        signature = new BigInteger(signature);
	
	        var emLen = Math.ceil((this.key.keySize - 1) / 8);
	        var m = this.key.$doPublic(signature).toBuffer(emLen);
	
	        var mHash = crypt.createHash(this.options.signingSchemeOptions.hash || DEFAULT_HASH_FUNCTION);
	        mHash.update(buffer);
	
	        return this.emsa_pss_verify(mHash.digest(), m, this.key.keySize - 1);
	    };
	
	    /*
	     * https://tools.ietf.org/html/rfc3447#section-9.1.1
	     *
	     * mHash	[Buffer]	Hashed message to encode
	     * emBits	[uint]		Maximum length of output in bits. Must be at least 8hLen + 8sLen + 9 (hLen = Hash digest length in bytes | sLen = length of salt in bytes)
	     * @returns {Buffer} The encoded message
	     */
	    Scheme.prototype.emsa_pss_encode = function (mHash, emBits) {
	        var hash = this.options.signingSchemeOptions.hash || DEFAULT_HASH_FUNCTION;
	        var mgf = this.options.signingSchemeOptions.mgf || OAEP.eme_oaep_mgf1;
	        var sLen = this.options.signingSchemeOptions.saltLength || DEFAULT_SALT_LENGTH;
	
	        var hLen = OAEP.digestLength[hash];
	        var emLen = Math.ceil(emBits / 8);
	
	        if (emLen < hLen + sLen + 2) {
	            throw new Error("Output length passed to emBits(" + emBits + ") is too small for the options " +
	                "specified(" + hash + ", " + sLen + "). To fix this issue increase the value of emBits. (minimum size: " +
	                (8 * hLen + 8 * sLen + 9) + ")"
	            );
	        }
	
	        var salt = crypt.randomBytes(sLen);
	
	        var Mapostrophe = new Buffer(8 + hLen + sLen);
	        Mapostrophe.fill(0, 0, 8);
	        mHash.copy(Mapostrophe, 8);
	        salt.copy(Mapostrophe, 8 + mHash.length);
	
	        var H = crypt.createHash(hash);
	        H.update(Mapostrophe);
	        H = H.digest();
	
	        var PS = new Buffer(emLen - salt.length - hLen - 2);
	        PS.fill(0);
	
	        var DB = new Buffer(PS.length + 1 + salt.length);
	        PS.copy(DB);
	        DB[PS.length] = 0x01;
	        salt.copy(DB, PS.length + 1);
	
	        var dbMask = mgf(H, DB.length, hash);
	
	        // XOR DB and dbMask together
	        var maskedDB = new Buffer(DB.length);
	        for (var i = 0; i < dbMask.length; i++) {
	            maskedDB[i] = DB[i] ^ dbMask[i];
	        }
	
	        var bits = 8 * emLen - emBits;
	        var mask = 255 ^ (255 >> 8 - bits << 8 - bits);
	        maskedDB[0] = maskedDB[0] & mask;
	
	        var EM = new Buffer(maskedDB.length + H.length + 1);
	        maskedDB.copy(EM, 0);
	        H.copy(EM, maskedDB.length);
	        EM[EM.length - 1] = 0xbc;
	
	        return EM;
	    };
	
	    /*
	     * https://tools.ietf.org/html/rfc3447#section-9.1.2
	     *
	     * mHash	[Buffer]	Hashed message
	     * EM		[Buffer]	Signature
	     * emBits	[uint]		Length of EM in bits. Must be at least 8hLen + 8sLen + 9 to be a valid signature. (hLen = Hash digest length in bytes | sLen = length of salt in bytes)
	     * @returns {Boolean} True if signature(EM) matches message(M)
	     */
	    Scheme.prototype.emsa_pss_verify = function (mHash, EM, emBits) {
	        var hash = this.options.signingSchemeOptions.hash || DEFAULT_HASH_FUNCTION;
	        var mgf = this.options.signingSchemeOptions.mgf || OAEP.eme_oaep_mgf1;
	        var sLen = this.options.signingSchemeOptions.saltLength || DEFAULT_SALT_LENGTH;
	
	        var hLen = OAEP.digestLength[hash];
	        var emLen = Math.ceil(emBits / 8);
	
	        if (emLen < hLen + sLen + 2 || EM[EM.length - 1] != 0xbc) {
	            return false;
	        }
	
	        var DB = new Buffer(emLen - hLen - 1);
	        EM.copy(DB, 0, 0, emLen - hLen - 1);
	
	        var mask = 0;
	        for (var i = 0, bits = 8 * emLen - emBits; i < bits; i++) {
	            mask |= 1 << (7 - i);
	        }
	
	        if ((DB[0] & mask) !== 0) {
	            return false;
	        }
	
	        var H = EM.slice(emLen - hLen - 1, emLen - 1);
	        var dbMask = mgf(H, DB.length, hash);
	
	        // Unmask DB
	        for (i = 0; i < DB.length; i++) {
	            DB[i] ^= dbMask[i];
	        }
	
	        bits = 8 * emLen - emBits;
	        mask = 255 ^ (255 >> 8 - bits << 8 - bits);
	        DB[0] = DB[0] & mask;
	
	        // Filter out padding
	        for (i = 0; DB[i] === 0 && i < DB.length; i++);
	        if (DB[i] != 1) {
	            return false;
	        }
	
	        var salt = DB.slice(DB.length - sLen);
	
	        var Mapostrophe = new Buffer(8 + hLen + sLen);
	        Mapostrophe.fill(0, 0, 8);
	        mHash.copy(Mapostrophe, 8);
	        salt.copy(Mapostrophe, 8 + mHash.length);
	
	        var Hapostrophe = crypt.createHash(hash);
	        Hapostrophe.update(Mapostrophe);
	        Hapostrophe = Hapostrophe.digest();
	
	        return H.toString("hex") === Hapostrophe.toString("hex");
	    };
	
	    return new Scheme(key, options);
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(170).Buffer))

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	var crypt = __webpack_require__(177);
	
	module.exports = {
	    getEngine: function (keyPair, options) {
	        var engine = __webpack_require__(201);
	        if (options.environment === 'node') {
	            if (typeof crypt.publicEncrypt === 'function' && typeof crypt.privateDecrypt === 'function') {
	                if (typeof crypt.privateEncrypt === 'function' && typeof crypt.publicDecrypt === 'function') {
	                    engine = __webpack_require__(202);
	                } else {
	                    engine = __webpack_require__(203);
	                }
	            }
	        }
	        return engine(keyPair, options);
	    }
	};

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	var BigInteger = __webpack_require__(195);
	var schemes = __webpack_require__(196);
	
	module.exports = function (keyPair, options) {
	    var pkcs1Scheme = schemes.pkcs1.makeScheme(keyPair, options);
	
	    return {
	        encrypt: function (buffer, usePrivate) {
	            var m, c;
	            if (usePrivate) {
	                /* Type 1: zeros padding for private key encrypt */
	                m = new BigInteger(pkcs1Scheme.encPad(buffer, {type: 1}));
	                c = keyPair.$doPrivate(m);
	            } else {
	                m = new BigInteger(keyPair.encryptionScheme.encPad(buffer));
	                c = keyPair.$doPublic(m);
	            }
	            return c.toBuffer(keyPair.encryptedDataLength);
	        },
	
	        decrypt: function (buffer, usePublic) {
	            var m, c = new BigInteger(buffer);
	
	            if (usePublic) {
	                m = keyPair.$doPublic(c);
	                /* Type 1: zeros padding for private key decrypt */
	                return pkcs1Scheme.encUnPad(m.toBuffer(keyPair.encryptedDataLength), {type: 1});
	            } else {
	                m = keyPair.$doPrivate(c);
	                return keyPair.encryptionScheme.encUnPad(m.toBuffer(keyPair.encryptedDataLength));
	            }
	        }
	    };
	};

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	var crypto = __webpack_require__(177);
	var constants = __webpack_require__(174);
	var schemes = __webpack_require__(196);
	
	module.exports = function (keyPair, options) {
	    var pkcs1Scheme = schemes.pkcs1.makeScheme(keyPair, options);
	
	    return {
	        encrypt: function (buffer, usePrivate) {
	            if (usePrivate) {
	                var padding = constants.RSA_PKCS1_PADDING;
	                if (options.encryptionSchemeOptions && options.encryptionSchemeOptions.padding) {
	                    padding = options.encryptionSchemeOptions.padding;
	                }
	                return crypto.privateEncrypt({
	                    key: options.rsaUtils.exportKey('private'),
	                    padding: padding
	                }, buffer);
	            } else {
	                var padding = constants.RSA_PKCS1_OAEP_PADDING;
	                if (options.encryptionScheme === 'pkcs1') {
	                    padding = constants.RSA_PKCS1_PADDING;
	                }
	                if (options.encryptionSchemeOptions && options.encryptionSchemeOptions.padding) {
	                    padding = options.encryptionSchemeOptions.padding;
	                }
	
	                var data = buffer;
	                if (padding === constants.RSA_NO_PADDING) {
	                    data = pkcs1Scheme.pkcs0pad(buffer);
	                }
	
	                return crypto.publicEncrypt({
	                    key: options.rsaUtils.exportKey('public'),
	                    padding: padding
	                }, data);
	            }
	        },
	
	        decrypt: function (buffer, usePublic) {
	            if (usePublic) {
	                var padding = constants.RSA_PKCS1_PADDING;
	                if (options.encryptionSchemeOptions && options.encryptionSchemeOptions.padding) {
	                    padding = options.encryptionSchemeOptions.padding;
	                }
	                return crypto.publicDecrypt({
	                    key: options.rsaUtils.exportKey('public'),
	                    padding: padding
	                }, buffer);
	            } else {
	                var padding = constants.RSA_PKCS1_OAEP_PADDING;
	                if (options.encryptionScheme === 'pkcs1') {
	                    padding = constants.RSA_PKCS1_PADDING;
	                }
	                if (options.encryptionSchemeOptions && options.encryptionSchemeOptions.padding) {
	                    padding = options.encryptionSchemeOptions.padding;
	                }
	                var res = crypto.privateDecrypt({
	                    key: options.rsaUtils.exportKey('private'),
	                    padding: padding
	                }, buffer);
	
	                if (padding === constants.RSA_NO_PADDING) {
	                    return pkcs1Scheme.pkcs0unpad(res);
	                }
	                return res;
	            }
	        }
	    };
	};

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	var crypto = __webpack_require__(177);
	var constants = __webpack_require__(174);
	var schemes = __webpack_require__(196);
	
	module.exports = function (keyPair, options) {
	    var jsEngine = __webpack_require__(201)(keyPair, options);
	    var pkcs1Scheme = schemes.pkcs1.makeScheme(keyPair, options);
	
	    return {
	        encrypt: function (buffer, usePrivate) {
	            if (usePrivate) {
	                return jsEngine.encrypt(buffer, usePrivate);
	            }
	            var padding = constants.RSA_PKCS1_OAEP_PADDING;
	            if (options.encryptionScheme === 'pkcs1') {
	                padding = constants.RSA_PKCS1_PADDING;
	            }
	            if (options.encryptionSchemeOptions && options.encryptionSchemeOptions.padding) {
	                padding = options.encryptionSchemeOptions.padding;
	            }
	
	            var data = buffer;
	            if (padding === constants.RSA_NO_PADDING) {
	                data = pkcs1Scheme.pkcs0pad(buffer);
	            }
	
	            return crypto.publicEncrypt({
	                key: options.rsaUtils.exportKey('public'),
	                padding: padding
	            }, data);
	        },
	
	        decrypt: function (buffer, usePublic) {
	            if (usePublic) {
	                return jsEngine.decrypt(buffer, usePublic);
	            }
	            var padding = constants.RSA_PKCS1_OAEP_PADDING;
	            if (options.encryptionScheme === 'pkcs1') {
	                padding = constants.RSA_PKCS1_PADDING;
	            }
	            if (options.encryptionSchemeOptions && options.encryptionSchemeOptions.padding) {
	                padding = options.encryptionSchemeOptions.padding;
	            }
	
	            var res = crypto.privateDecrypt({
	                key: options.rsaUtils.exportKey('private'),
	                padding: padding
	            }, buffer);
	
	            if (padding === constants.RSA_NO_PADDING) {
	                return pkcs1Scheme.pkcs0unpad(res);
	            }
	            return res;
	        }
	    };
	};

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright 2011 Mark Cavage <mcavage@gmail.com> All rights reserved.
	
	// If you have no idea what ASN.1 or BER is, see this:
	// ftp://ftp.rsa.com/pub/pkcs/ascii/layman.asc
	
	var Ber = __webpack_require__(205);
	
	
	
	///--- Exported API
	
	module.exports = {
	
	  Ber: Ber,
	
	  BerReader: Ber.Reader,
	
	  BerWriter: Ber.Writer
	
	};


/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright 2011 Mark Cavage <mcavage@gmail.com> All rights reserved.
	
	var errors = __webpack_require__(206);
	var types = __webpack_require__(207);
	
	var Reader = __webpack_require__(208);
	var Writer = __webpack_require__(213);
	
	
	///--- Exports
	
	module.exports = {
	
	  Reader: Reader,
	
	  Writer: Writer
	
	};
	
	for (var t in types) {
	  if (types.hasOwnProperty(t))
	    module.exports[t] = types[t];
	}
	for (var e in errors) {
	  if (errors.hasOwnProperty(e))
	    module.exports[e] = errors[e];
	}


/***/ },
/* 206 */
/***/ function(module, exports) {

	// Copyright 2011 Mark Cavage <mcavage@gmail.com> All rights reserved.
	
	
	module.exports = {
	
	  newInvalidAsn1Error: function(msg) {
	    var e = new Error();
	    e.name = 'InvalidAsn1Error';
	    e.message = msg || '';
	    return e;
	  }
	
	};


/***/ },
/* 207 */
/***/ function(module, exports) {

	// Copyright 2011 Mark Cavage <mcavage@gmail.com> All rights reserved.
	
	
	module.exports = {
	  EOC: 0,
	  Boolean: 1,
	  Integer: 2,
	  BitString: 3,
	  OctetString: 4,
	  Null: 5,
	  OID: 6,
	  ObjectDescriptor: 7,
	  External: 8,
	  Real: 9, // float
	  Enumeration: 10,
	  PDV: 11,
	  Utf8String: 12,
	  RelativeOID: 13,
	  Sequence: 16,
	  Set: 17,
	  NumericString: 18,
	  PrintableString: 19,
	  T61String: 20,
	  VideotexString: 21,
	  IA5String: 22,
	  UTCTime: 23,
	  GeneralizedTime: 24,
	  GraphicString: 25,
	  VisibleString: 26,
	  GeneralString: 28,
	  UniversalString: 29,
	  CharacterString: 30,
	  BMPString: 31,
	  Constructor: 32,
	  Context: 128
	};


/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {// Copyright 2011 Mark Cavage <mcavage@gmail.com> All rights reserved.
	
	var assert = __webpack_require__(209);
	
	var ASN1 = __webpack_require__(207);
	var errors = __webpack_require__(206);
	
	
	///--- Globals
	
	var newInvalidAsn1Error = errors.newInvalidAsn1Error;
	
	
	
	///--- API
	
	function Reader(data) {
	  if (!data || !Buffer.isBuffer(data))
	    throw new TypeError('data must be a node Buffer');
	
	  this._buf = data;
	  this._size = data.length;
	
	  // These hold the "current" state
	  this._len = 0;
	  this._offset = 0;
	}
	
	Object.defineProperty(Reader.prototype, 'length', {
	  enumerable: true,
	  get: function () { return (this._len); }
	});
	
	Object.defineProperty(Reader.prototype, 'offset', {
	  enumerable: true,
	  get: function () { return (this._offset); }
	});
	
	Object.defineProperty(Reader.prototype, 'remain', {
	  get: function () { return (this._size - this._offset); }
	});
	
	Object.defineProperty(Reader.prototype, 'buffer', {
	  get: function () { return (this._buf.slice(this._offset)); }
	});
	
	
	/**
	 * Reads a single byte and advances offset; you can pass in `true` to make this
	 * a "peek" operation (i.e., get the byte, but don't advance the offset).
	 *
	 * @param {Boolean} peek true means don't move offset.
	 * @return {Number} the next byte, null if not enough data.
	 */
	Reader.prototype.readByte = function(peek) {
	  if (this._size - this._offset < 1)
	    return null;
	
	  var b = this._buf[this._offset] & 0xff;
	
	  if (!peek)
	    this._offset += 1;
	
	  return b;
	};
	
	
	Reader.prototype.peek = function() {
	  return this.readByte(true);
	};
	
	
	/**
	 * Reads a (potentially) variable length off the BER buffer.  This call is
	 * not really meant to be called directly, as callers have to manipulate
	 * the internal buffer afterwards.
	 *
	 * As a result of this call, you can call `Reader.length`, until the
	 * next thing called that does a readLength.
	 *
	 * @return {Number} the amount of offset to advance the buffer.
	 * @throws {InvalidAsn1Error} on bad ASN.1
	 */
	Reader.prototype.readLength = function(offset) {
	  if (offset === undefined)
	    offset = this._offset;
	
	  if (offset >= this._size)
	    return null;
	
	  var lenB = this._buf[offset++] & 0xff;
	  if (lenB === null)
	    return null;
	
	  if ((lenB & 0x80) == 0x80) {
	    lenB &= 0x7f;
	
	    if (lenB == 0)
	      throw newInvalidAsn1Error('Indefinite length not supported');
	
	    if (lenB > 4)
	      throw newInvalidAsn1Error('encoding too long');
	
	    if (this._size - offset < lenB)
	      return null;
	
	    this._len = 0;
	    for (var i = 0; i < lenB; i++)
	      this._len = (this._len << 8) + (this._buf[offset++] & 0xff);
	
	  } else {
	    // Wasn't a variable length
	    this._len = lenB;
	  }
	
	  return offset;
	};
	
	
	/**
	 * Parses the next sequence in this BER buffer.
	 *
	 * To get the length of the sequence, call `Reader.length`.
	 *
	 * @return {Number} the sequence's tag.
	 */
	Reader.prototype.readSequence = function(tag) {
	  var seq = this.peek();
	  if (seq === null)
	    return null;
	  if (tag !== undefined && tag !== seq)
	    throw newInvalidAsn1Error('Expected 0x' + tag.toString(16) +
	                              ': got 0x' + seq.toString(16));
	
	  var o = this.readLength(this._offset + 1); // stored in `length`
	  if (o === null)
	    return null;
	
	  this._offset = o;
	  return seq;
	};
	
	
	Reader.prototype.readInt = function() {
	  return this._readTag(ASN1.Integer);
	};
	
	
	Reader.prototype.readBoolean = function() {
	  return (this._readTag(ASN1.Boolean) === 0 ? false : true);
	};
	
	
	Reader.prototype.readEnumeration = function() {
	  return this._readTag(ASN1.Enumeration);
	};
	
	
	Reader.prototype.readString = function(tag, retbuf) {
	  if (!tag)
	    tag = ASN1.OctetString;
	
	  var b = this.peek();
	  if (b === null)
	    return null;
	
	  if (b !== tag)
	    throw newInvalidAsn1Error('Expected 0x' + tag.toString(16) +
	                              ': got 0x' + b.toString(16));
	
	  var o = this.readLength(this._offset + 1); // stored in `length`
	
	  if (o === null)
	    return null;
	
	  if (this.length > this._size - o)
	    return null;
	
	  this._offset = o;
	
	  if (this.length === 0)
	    return retbuf ? new Buffer(0) : '';
	
	  var str = this._buf.slice(this._offset, this._offset + this.length);
	  this._offset += this.length;
	
	  return retbuf ? str : str.toString('utf8');
	};
	
	Reader.prototype.readOID = function(tag) {
	  if (!tag)
	    tag = ASN1.OID;
	
	  var b = this.readString(tag, true);
	  if (b === null)
	    return null;
	
	  var values = [];
	  var value = 0;
	
	  for (var i = 0; i < b.length; i++) {
	    var byte = b[i] & 0xff;
	
	    value <<= 7;
	    value += byte & 0x7f;
	    if ((byte & 0x80) == 0) {
	      values.push(value);
	      value = 0;
	    }
	  }
	
	  value = values.shift();
	  values.unshift(value % 40);
	  values.unshift((value / 40) >> 0);
	
	  return values.join('.');
	};
	
	
	Reader.prototype._readTag = function(tag) {
	  assert.ok(tag !== undefined);
	
	  var b = this.peek();
	
	  if (b === null)
	    return null;
	
	  if (b !== tag)
	    throw newInvalidAsn1Error('Expected 0x' + tag.toString(16) +
	                              ': got 0x' + b.toString(16));
	
	  var o = this.readLength(this._offset + 1); // stored in `length`
	  if (o === null)
	    return null;
	
	  if (this.length > 4)
	    throw newInvalidAsn1Error('Integer too long: ' + this.length);
	
	  if (this.length > this._size - o)
	    return null;
	  this._offset = o;
	
	  var fb = this._buf[this._offset];
	  var value = 0;
	
	  for (var i = 0; i < this.length; i++) {
	    value <<= 8;
	    value |= (this._buf[this._offset++] & 0xff);
	  }
	
	  if ((fb & 0x80) == 0x80 && i !== 4)
	    value -= (1 << (i * 8));
	
	  return value >> 0;
	};
	
	
	
	///--- Exported API
	
	module.exports = Reader;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(170).Buffer))

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	// compare and isBuffer taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
	// original notice:
	
	/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	function compare(a, b) {
	  if (a === b) {
	    return 0;
	  }
	
	  var x = a.length;
	  var y = b.length;
	
	  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
	    if (a[i] !== b[i]) {
	      x = a[i];
	      y = b[i];
	      break;
	    }
	  }
	
	  if (x < y) {
	    return -1;
	  }
	  if (y < x) {
	    return 1;
	  }
	  return 0;
	}
	function isBuffer(b) {
	  if (global.Buffer && typeof global.Buffer.isBuffer === 'function') {
	    return global.Buffer.isBuffer(b);
	  }
	  return !!(b != null && b._isBuffer);
	}
	
	// based on node assert, original notice:
	
	// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
	//
	// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
	//
	// Originally from narwhal.js (http://narwhaljs.org)
	// Copyright (c) 2009 Thomas Robinson <280north.com>
	//
	// Permission is hereby granted, free of charge, to any person obtaining a copy
	// of this software and associated documentation files (the 'Software'), to
	// deal in the Software without restriction, including without limitation the
	// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
	// sell copies of the Software, and to permit persons to whom the Software is
	// furnished to do so, subject to the following conditions:
	//
	// The above copyright notice and this permission notice shall be included in
	// all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
	// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
	// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	var util = __webpack_require__(210);
	var hasOwn = Object.prototype.hasOwnProperty;
	var pSlice = Array.prototype.slice;
	var functionsHaveNames = (function () {
	  return function foo() {}.name === 'foo';
	}());
	function pToString (obj) {
	  return Object.prototype.toString.call(obj);
	}
	function isView(arrbuf) {
	  if (isBuffer(arrbuf)) {
	    return false;
	  }
	  if (typeof global.ArrayBuffer !== 'function') {
	    return false;
	  }
	  if (typeof ArrayBuffer.isView === 'function') {
	    return ArrayBuffer.isView(arrbuf);
	  }
	  if (!arrbuf) {
	    return false;
	  }
	  if (arrbuf instanceof DataView) {
	    return true;
	  }
	  if (arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer) {
	    return true;
	  }
	  return false;
	}
	// 1. The assert module provides functions that throw
	// AssertionError's when particular conditions are not met. The
	// assert module must conform to the following interface.
	
	var assert = module.exports = ok;
	
	// 2. The AssertionError is defined in assert.
	// new assert.AssertionError({ message: message,
	//                             actual: actual,
	//                             expected: expected })
	
	var regex = /\s*function\s+([^\(\s]*)\s*/;
	// based on https://github.com/ljharb/function.prototype.name/blob/adeeeec8bfcc6068b187d7d9fb3d5bb1d3a30899/implementation.js
	function getName(func) {
	  if (!util.isFunction(func)) {
	    return;
	  }
	  if (functionsHaveNames) {
	    return func.name;
	  }
	  var str = func.toString();
	  var match = str.match(regex);
	  return match && match[1];
	}
	assert.AssertionError = function AssertionError(options) {
	  this.name = 'AssertionError';
	  this.actual = options.actual;
	  this.expected = options.expected;
	  this.operator = options.operator;
	  if (options.message) {
	    this.message = options.message;
	    this.generatedMessage = false;
	  } else {
	    this.message = getMessage(this);
	    this.generatedMessage = true;
	  }
	  var stackStartFunction = options.stackStartFunction || fail;
	  if (Error.captureStackTrace) {
	    Error.captureStackTrace(this, stackStartFunction);
	  } else {
	    // non v8 browsers so we can have a stacktrace
	    var err = new Error();
	    if (err.stack) {
	      var out = err.stack;
	
	      // try to strip useless frames
	      var fn_name = getName(stackStartFunction);
	      var idx = out.indexOf('\n' + fn_name);
	      if (idx >= 0) {
	        // once we have located the function frame
	        // we need to strip out everything before it (and its line)
	        var next_line = out.indexOf('\n', idx + 1);
	        out = out.substring(next_line + 1);
	      }
	
	      this.stack = out;
	    }
	  }
	};
	
	// assert.AssertionError instanceof Error
	util.inherits(assert.AssertionError, Error);
	
	function truncate(s, n) {
	  if (typeof s === 'string') {
	    return s.length < n ? s : s.slice(0, n);
	  } else {
	    return s;
	  }
	}
	function inspect(something) {
	  if (functionsHaveNames || !util.isFunction(something)) {
	    return util.inspect(something);
	  }
	  var rawname = getName(something);
	  var name = rawname ? ': ' + rawname : '';
	  return '[Function' +  name + ']';
	}
	function getMessage(self) {
	  return truncate(inspect(self.actual), 128) + ' ' +
	         self.operator + ' ' +
	         truncate(inspect(self.expected), 128);
	}
	
	// At present only the three keys mentioned above are used and
	// understood by the spec. Implementations or sub modules can pass
	// other keys to the AssertionError's constructor - they will be
	// ignored.
	
	// 3. All of the following functions must throw an AssertionError
	// when a corresponding condition is not met, with a message that
	// may be undefined if not provided.  All assertion methods provide
	// both the actual and expected values to the assertion error for
	// display purposes.
	
	function fail(actual, expected, message, operator, stackStartFunction) {
	  throw new assert.AssertionError({
	    message: message,
	    actual: actual,
	    expected: expected,
	    operator: operator,
	    stackStartFunction: stackStartFunction
	  });
	}
	
	// EXTENSION! allows for well behaved errors defined elsewhere.
	assert.fail = fail;
	
	// 4. Pure assertion tests whether a value is truthy, as determined
	// by !!guard.
	// assert.ok(guard, message_opt);
	// This statement is equivalent to assert.equal(true, !!guard,
	// message_opt);. To test strictly for the value true, use
	// assert.strictEqual(true, guard, message_opt);.
	
	function ok(value, message) {
	  if (!value) fail(value, true, message, '==', assert.ok);
	}
	assert.ok = ok;
	
	// 5. The equality assertion tests shallow, coercive equality with
	// ==.
	// assert.equal(actual, expected, message_opt);
	
	assert.equal = function equal(actual, expected, message) {
	  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
	};
	
	// 6. The non-equality assertion tests for whether two objects are not equal
	// with != assert.notEqual(actual, expected, message_opt);
	
	assert.notEqual = function notEqual(actual, expected, message) {
	  if (actual == expected) {
	    fail(actual, expected, message, '!=', assert.notEqual);
	  }
	};
	
	// 7. The equivalence assertion tests a deep equality relation.
	// assert.deepEqual(actual, expected, message_opt);
	
	assert.deepEqual = function deepEqual(actual, expected, message) {
	  if (!_deepEqual(actual, expected, false)) {
	    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
	  }
	};
	
	assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
	  if (!_deepEqual(actual, expected, true)) {
	    fail(actual, expected, message, 'deepStrictEqual', assert.deepStrictEqual);
	  }
	};
	
	function _deepEqual(actual, expected, strict, memos) {
	  // 7.1. All identical values are equivalent, as determined by ===.
	  if (actual === expected) {
	    return true;
	  } else if (isBuffer(actual) && isBuffer(expected)) {
	    return compare(actual, expected) === 0;
	
	  // 7.2. If the expected value is a Date object, the actual value is
	  // equivalent if it is also a Date object that refers to the same time.
	  } else if (util.isDate(actual) && util.isDate(expected)) {
	    return actual.getTime() === expected.getTime();
	
	  // 7.3 If the expected value is a RegExp object, the actual value is
	  // equivalent if it is also a RegExp object with the same source and
	  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
	  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
	    return actual.source === expected.source &&
	           actual.global === expected.global &&
	           actual.multiline === expected.multiline &&
	           actual.lastIndex === expected.lastIndex &&
	           actual.ignoreCase === expected.ignoreCase;
	
	  // 7.4. Other pairs that do not both pass typeof value == 'object',
	  // equivalence is determined by ==.
	  } else if ((actual === null || typeof actual !== 'object') &&
	             (expected === null || typeof expected !== 'object')) {
	    return strict ? actual === expected : actual == expected;
	
	  // If both values are instances of typed arrays, wrap their underlying
	  // ArrayBuffers in a Buffer each to increase performance
	  // This optimization requires the arrays to have the same type as checked by
	  // Object.prototype.toString (aka pToString). Never perform binary
	  // comparisons for Float*Arrays, though, since e.g. +0 === -0 but their
	  // bit patterns are not identical.
	  } else if (isView(actual) && isView(expected) &&
	             pToString(actual) === pToString(expected) &&
	             !(actual instanceof Float32Array ||
	               actual instanceof Float64Array)) {
	    return compare(new Uint8Array(actual.buffer),
	                   new Uint8Array(expected.buffer)) === 0;
	
	  // 7.5 For all other Object pairs, including Array objects, equivalence is
	  // determined by having the same number of owned properties (as verified
	  // with Object.prototype.hasOwnProperty.call), the same set of keys
	  // (although not necessarily the same order), equivalent values for every
	  // corresponding key, and an identical 'prototype' property. Note: this
	  // accounts for both named and indexed properties on Arrays.
	  } else if (isBuffer(actual) !== isBuffer(expected)) {
	    return false;
	  } else {
	    memos = memos || {actual: [], expected: []};
	
	    var actualIndex = memos.actual.indexOf(actual);
	    if (actualIndex !== -1) {
	      if (actualIndex === memos.expected.indexOf(expected)) {
	        return true;
	      }
	    }
	
	    memos.actual.push(actual);
	    memos.expected.push(expected);
	
	    return objEquiv(actual, expected, strict, memos);
	  }
	}
	
	function isArguments(object) {
	  return Object.prototype.toString.call(object) == '[object Arguments]';
	}
	
	function objEquiv(a, b, strict, actualVisitedObjects) {
	  if (a === null || a === undefined || b === null || b === undefined)
	    return false;
	  // if one is a primitive, the other must be same
	  if (util.isPrimitive(a) || util.isPrimitive(b))
	    return a === b;
	  if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
	    return false;
	  var aIsArgs = isArguments(a);
	  var bIsArgs = isArguments(b);
	  if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs))
	    return false;
	  if (aIsArgs) {
	    a = pSlice.call(a);
	    b = pSlice.call(b);
	    return _deepEqual(a, b, strict);
	  }
	  var ka = objectKeys(a);
	  var kb = objectKeys(b);
	  var key, i;
	  // having the same number of owned properties (keys incorporates
	  // hasOwnProperty)
	  if (ka.length !== kb.length)
	    return false;
	  //the same set of keys (although not necessarily the same order),
	  ka.sort();
	  kb.sort();
	  //~~~cheap key test
	  for (i = ka.length - 1; i >= 0; i--) {
	    if (ka[i] !== kb[i])
	      return false;
	  }
	  //equivalent values for every corresponding key, and
	  //~~~possibly expensive deep test
	  for (i = ka.length - 1; i >= 0; i--) {
	    key = ka[i];
	    if (!_deepEqual(a[key], b[key], strict, actualVisitedObjects))
	      return false;
	  }
	  return true;
	}
	
	// 8. The non-equivalence assertion tests for any deep inequality.
	// assert.notDeepEqual(actual, expected, message_opt);
	
	assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
	  if (_deepEqual(actual, expected, false)) {
	    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
	  }
	};
	
	assert.notDeepStrictEqual = notDeepStrictEqual;
	function notDeepStrictEqual(actual, expected, message) {
	  if (_deepEqual(actual, expected, true)) {
	    fail(actual, expected, message, 'notDeepStrictEqual', notDeepStrictEqual);
	  }
	}
	
	
	// 9. The strict equality assertion tests strict equality, as determined by ===.
	// assert.strictEqual(actual, expected, message_opt);
	
	assert.strictEqual = function strictEqual(actual, expected, message) {
	  if (actual !== expected) {
	    fail(actual, expected, message, '===', assert.strictEqual);
	  }
	};
	
	// 10. The strict non-equality assertion tests for strict inequality, as
	// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);
	
	assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
	  if (actual === expected) {
	    fail(actual, expected, message, '!==', assert.notStrictEqual);
	  }
	};
	
	function expectedException(actual, expected) {
	  if (!actual || !expected) {
	    return false;
	  }
	
	  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
	    return expected.test(actual);
	  }
	
	  try {
	    if (actual instanceof expected) {
	      return true;
	    }
	  } catch (e) {
	    // Ignore.  The instanceof check doesn't work for arrow functions.
	  }
	
	  if (Error.isPrototypeOf(expected)) {
	    return false;
	  }
	
	  return expected.call({}, actual) === true;
	}
	
	function _tryBlock(block) {
	  var error;
	  try {
	    block();
	  } catch (e) {
	    error = e;
	  }
	  return error;
	}
	
	function _throws(shouldThrow, block, expected, message) {
	  var actual;
	
	  if (typeof block !== 'function') {
	    throw new TypeError('"block" argument must be a function');
	  }
	
	  if (typeof expected === 'string') {
	    message = expected;
	    expected = null;
	  }
	
	  actual = _tryBlock(block);
	
	  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
	            (message ? ' ' + message : '.');
	
	  if (shouldThrow && !actual) {
	    fail(actual, expected, 'Missing expected exception' + message);
	  }
	
	  var userProvidedMessage = typeof message === 'string';
	  var isUnwantedException = !shouldThrow && util.isError(actual);
	  var isUnexpectedException = !shouldThrow && actual && !expected;
	
	  if ((isUnwantedException &&
	      userProvidedMessage &&
	      expectedException(actual, expected)) ||
	      isUnexpectedException) {
	    fail(actual, expected, 'Got unwanted exception' + message);
	  }
	
	  if ((shouldThrow && actual && expected &&
	      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
	    throw actual;
	  }
	}
	
	// 11. Expected to throw an error:
	// assert.throws(block, Error_opt, message_opt);
	
	assert.throws = function(block, /*optional*/error, /*optional*/message) {
	  _throws(true, block, error, message);
	};
	
	// EXTENSION! This is annoying to write outside this module.
	assert.doesNotThrow = function(block, /*optional*/error, /*optional*/message) {
	  _throws(false, block, error, message);
	};
	
	assert.ifError = function(err) { if (err) throw err; };
	
	var objectKeys = Object.keys || function (obj) {
	  var keys = [];
	  for (var key in obj) {
	    if (hasOwn.call(obj, key)) keys.push(key);
	  }
	  return keys;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	var formatRegExp = /%[sdj%]/g;
	exports.format = function(f) {
	  if (!isString(f)) {
	    var objects = [];
	    for (var i = 0; i < arguments.length; i++) {
	      objects.push(inspect(arguments[i]));
	    }
	    return objects.join(' ');
	  }
	
	  var i = 1;
	  var args = arguments;
	  var len = args.length;
	  var str = String(f).replace(formatRegExp, function(x) {
	    if (x === '%%') return '%';
	    if (i >= len) return x;
	    switch (x) {
	      case '%s': return String(args[i++]);
	      case '%d': return Number(args[i++]);
	      case '%j':
	        try {
	          return JSON.stringify(args[i++]);
	        } catch (_) {
	          return '[Circular]';
	        }
	      default:
	        return x;
	    }
	  });
	  for (var x = args[i]; i < len; x = args[++i]) {
	    if (isNull(x) || !isObject(x)) {
	      str += ' ' + x;
	    } else {
	      str += ' ' + inspect(x);
	    }
	  }
	  return str;
	};
	
	
	// Mark that a method should not be used.
	// Returns a modified function which warns once by default.
	// If --no-deprecation is set, then it is a no-op.
	exports.deprecate = function(fn, msg) {
	  // Allow for deprecating things in the process of starting up.
	  if (isUndefined(global.process)) {
	    return function() {
	      return exports.deprecate(fn, msg).apply(this, arguments);
	    };
	  }
	
	  if (process.noDeprecation === true) {
	    return fn;
	  }
	
	  var warned = false;
	  function deprecated() {
	    if (!warned) {
	      if (process.throwDeprecation) {
	        throw new Error(msg);
	      } else if (process.traceDeprecation) {
	        console.trace(msg);
	      } else {
	        console.error(msg);
	      }
	      warned = true;
	    }
	    return fn.apply(this, arguments);
	  }
	
	  return deprecated;
	};
	
	
	var debugs = {};
	var debugEnviron;
	exports.debuglog = function(set) {
	  if (isUndefined(debugEnviron))
	    debugEnviron = process.env.NODE_DEBUG || '';
	  set = set.toUpperCase();
	  if (!debugs[set]) {
	    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
	      var pid = process.pid;
	      debugs[set] = function() {
	        var msg = exports.format.apply(exports, arguments);
	        console.error('%s %d: %s', set, pid, msg);
	      };
	    } else {
	      debugs[set] = function() {};
	    }
	  }
	  return debugs[set];
	};
	
	
	/**
	 * Echos the value of a value. Trys to print the value out
	 * in the best way possible given the different types.
	 *
	 * @param {Object} obj The object to print out.
	 * @param {Object} opts Optional options object that alters the output.
	 */
	/* legacy: obj, showHidden, depth, colors*/
	function inspect(obj, opts) {
	  // default options
	  var ctx = {
	    seen: [],
	    stylize: stylizeNoColor
	  };
	  // legacy...
	  if (arguments.length >= 3) ctx.depth = arguments[2];
	  if (arguments.length >= 4) ctx.colors = arguments[3];
	  if (isBoolean(opts)) {
	    // legacy...
	    ctx.showHidden = opts;
	  } else if (opts) {
	    // got an "options" object
	    exports._extend(ctx, opts);
	  }
	  // set default options
	  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
	  if (isUndefined(ctx.depth)) ctx.depth = 2;
	  if (isUndefined(ctx.colors)) ctx.colors = false;
	  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
	  if (ctx.colors) ctx.stylize = stylizeWithColor;
	  return formatValue(ctx, obj, ctx.depth);
	}
	exports.inspect = inspect;
	
	
	// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
	inspect.colors = {
	  'bold' : [1, 22],
	  'italic' : [3, 23],
	  'underline' : [4, 24],
	  'inverse' : [7, 27],
	  'white' : [37, 39],
	  'grey' : [90, 39],
	  'black' : [30, 39],
	  'blue' : [34, 39],
	  'cyan' : [36, 39],
	  'green' : [32, 39],
	  'magenta' : [35, 39],
	  'red' : [31, 39],
	  'yellow' : [33, 39]
	};
	
	// Don't use 'blue' not visible on cmd.exe
	inspect.styles = {
	  'special': 'cyan',
	  'number': 'yellow',
	  'boolean': 'yellow',
	  'undefined': 'grey',
	  'null': 'bold',
	  'string': 'green',
	  'date': 'magenta',
	  // "name": intentionally not styling
	  'regexp': 'red'
	};
	
	
	function stylizeWithColor(str, styleType) {
	  var style = inspect.styles[styleType];
	
	  if (style) {
	    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
	           '\u001b[' + inspect.colors[style][1] + 'm';
	  } else {
	    return str;
	  }
	}
	
	
	function stylizeNoColor(str, styleType) {
	  return str;
	}
	
	
	function arrayToHash(array) {
	  var hash = {};
	
	  array.forEach(function(val, idx) {
	    hash[val] = true;
	  });
	
	  return hash;
	}
	
	
	function formatValue(ctx, value, recurseTimes) {
	  // Provide a hook for user-specified inspect functions.
	  // Check that value is an object with an inspect function on it
	  if (ctx.customInspect &&
	      value &&
	      isFunction(value.inspect) &&
	      // Filter out the util module, it's inspect function is special
	      value.inspect !== exports.inspect &&
	      // Also filter out any prototype objects using the circular check.
	      !(value.constructor && value.constructor.prototype === value)) {
	    var ret = value.inspect(recurseTimes, ctx);
	    if (!isString(ret)) {
	      ret = formatValue(ctx, ret, recurseTimes);
	    }
	    return ret;
	  }
	
	  // Primitive types cannot have properties
	  var primitive = formatPrimitive(ctx, value);
	  if (primitive) {
	    return primitive;
	  }
	
	  // Look up the keys of the object.
	  var keys = Object.keys(value);
	  var visibleKeys = arrayToHash(keys);
	
	  if (ctx.showHidden) {
	    keys = Object.getOwnPropertyNames(value);
	  }
	
	  // IE doesn't make error fields non-enumerable
	  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
	  if (isError(value)
	      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
	    return formatError(value);
	  }
	
	  // Some type of object without properties can be shortcutted.
	  if (keys.length === 0) {
	    if (isFunction(value)) {
	      var name = value.name ? ': ' + value.name : '';
	      return ctx.stylize('[Function' + name + ']', 'special');
	    }
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    }
	    if (isDate(value)) {
	      return ctx.stylize(Date.prototype.toString.call(value), 'date');
	    }
	    if (isError(value)) {
	      return formatError(value);
	    }
	  }
	
	  var base = '', array = false, braces = ['{', '}'];
	
	  // Make Array say that they are Array
	  if (isArray(value)) {
	    array = true;
	    braces = ['[', ']'];
	  }
	
	  // Make functions say that they are functions
	  if (isFunction(value)) {
	    var n = value.name ? ': ' + value.name : '';
	    base = ' [Function' + n + ']';
	  }
	
	  // Make RegExps say that they are RegExps
	  if (isRegExp(value)) {
	    base = ' ' + RegExp.prototype.toString.call(value);
	  }
	
	  // Make dates with properties first say the date
	  if (isDate(value)) {
	    base = ' ' + Date.prototype.toUTCString.call(value);
	  }
	
	  // Make error with message first say the error
	  if (isError(value)) {
	    base = ' ' + formatError(value);
	  }
	
	  if (keys.length === 0 && (!array || value.length == 0)) {
	    return braces[0] + base + braces[1];
	  }
	
	  if (recurseTimes < 0) {
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    } else {
	      return ctx.stylize('[Object]', 'special');
	    }
	  }
	
	  ctx.seen.push(value);
	
	  var output;
	  if (array) {
	    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
	  } else {
	    output = keys.map(function(key) {
	      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
	    });
	  }
	
	  ctx.seen.pop();
	
	  return reduceToSingleString(output, base, braces);
	}
	
	
	function formatPrimitive(ctx, value) {
	  if (isUndefined(value))
	    return ctx.stylize('undefined', 'undefined');
	  if (isString(value)) {
	    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
	                                             .replace(/'/g, "\\'")
	                                             .replace(/\\"/g, '"') + '\'';
	    return ctx.stylize(simple, 'string');
	  }
	  if (isNumber(value))
	    return ctx.stylize('' + value, 'number');
	  if (isBoolean(value))
	    return ctx.stylize('' + value, 'boolean');
	  // For some reason typeof null is "object", so special case here.
	  if (isNull(value))
	    return ctx.stylize('null', 'null');
	}
	
	
	function formatError(value) {
	  return '[' + Error.prototype.toString.call(value) + ']';
	}
	
	
	function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
	  var output = [];
	  for (var i = 0, l = value.length; i < l; ++i) {
	    if (hasOwnProperty(value, String(i))) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          String(i), true));
	    } else {
	      output.push('');
	    }
	  }
	  keys.forEach(function(key) {
	    if (!key.match(/^\d+$/)) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          key, true));
	    }
	  });
	  return output;
	}
	
	
	function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
	  var name, str, desc;
	  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
	  if (desc.get) {
	    if (desc.set) {
	      str = ctx.stylize('[Getter/Setter]', 'special');
	    } else {
	      str = ctx.stylize('[Getter]', 'special');
	    }
	  } else {
	    if (desc.set) {
	      str = ctx.stylize('[Setter]', 'special');
	    }
	  }
	  if (!hasOwnProperty(visibleKeys, key)) {
	    name = '[' + key + ']';
	  }
	  if (!str) {
	    if (ctx.seen.indexOf(desc.value) < 0) {
	      if (isNull(recurseTimes)) {
	        str = formatValue(ctx, desc.value, null);
	      } else {
	        str = formatValue(ctx, desc.value, recurseTimes - 1);
	      }
	      if (str.indexOf('\n') > -1) {
	        if (array) {
	          str = str.split('\n').map(function(line) {
	            return '  ' + line;
	          }).join('\n').substr(2);
	        } else {
	          str = '\n' + str.split('\n').map(function(line) {
	            return '   ' + line;
	          }).join('\n');
	        }
	      }
	    } else {
	      str = ctx.stylize('[Circular]', 'special');
	    }
	  }
	  if (isUndefined(name)) {
	    if (array && key.match(/^\d+$/)) {
	      return str;
	    }
	    name = JSON.stringify('' + key);
	    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
	      name = name.substr(1, name.length - 2);
	      name = ctx.stylize(name, 'name');
	    } else {
	      name = name.replace(/'/g, "\\'")
	                 .replace(/\\"/g, '"')
	                 .replace(/(^"|"$)/g, "'");
	      name = ctx.stylize(name, 'string');
	    }
	  }
	
	  return name + ': ' + str;
	}
	
	
	function reduceToSingleString(output, base, braces) {
	  var numLinesEst = 0;
	  var length = output.reduce(function(prev, cur) {
	    numLinesEst++;
	    if (cur.indexOf('\n') >= 0) numLinesEst++;
	    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
	  }, 0);
	
	  if (length > 60) {
	    return braces[0] +
	           (base === '' ? '' : base + '\n ') +
	           ' ' +
	           output.join(',\n  ') +
	           ' ' +
	           braces[1];
	  }
	
	  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
	}
	
	
	// NOTE: These type checking functions intentionally don't use `instanceof`
	// because it is fragile and can be easily faked with `Object.create()`.
	function isArray(ar) {
	  return Array.isArray(ar);
	}
	exports.isArray = isArray;
	
	function isBoolean(arg) {
	  return typeof arg === 'boolean';
	}
	exports.isBoolean = isBoolean;
	
	function isNull(arg) {
	  return arg === null;
	}
	exports.isNull = isNull;
	
	function isNullOrUndefined(arg) {
	  return arg == null;
	}
	exports.isNullOrUndefined = isNullOrUndefined;
	
	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	exports.isNumber = isNumber;
	
	function isString(arg) {
	  return typeof arg === 'string';
	}
	exports.isString = isString;
	
	function isSymbol(arg) {
	  return typeof arg === 'symbol';
	}
	exports.isSymbol = isSymbol;
	
	function isUndefined(arg) {
	  return arg === void 0;
	}
	exports.isUndefined = isUndefined;
	
	function isRegExp(re) {
	  return isObject(re) && objectToString(re) === '[object RegExp]';
	}
	exports.isRegExp = isRegExp;
	
	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	exports.isObject = isObject;
	
	function isDate(d) {
	  return isObject(d) && objectToString(d) === '[object Date]';
	}
	exports.isDate = isDate;
	
	function isError(e) {
	  return isObject(e) &&
	      (objectToString(e) === '[object Error]' || e instanceof Error);
	}
	exports.isError = isError;
	
	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	exports.isFunction = isFunction;
	
	function isPrimitive(arg) {
	  return arg === null ||
	         typeof arg === 'boolean' ||
	         typeof arg === 'number' ||
	         typeof arg === 'string' ||
	         typeof arg === 'symbol' ||  // ES6 symbol
	         typeof arg === 'undefined';
	}
	exports.isPrimitive = isPrimitive;
	
	exports.isBuffer = __webpack_require__(211);
	
	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}
	
	
	function pad(n) {
	  return n < 10 ? '0' + n.toString(10) : n.toString(10);
	}
	
	
	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
	              'Oct', 'Nov', 'Dec'];
	
	// 26 Feb 16:19:34
	function timestamp() {
	  var d = new Date();
	  var time = [pad(d.getHours()),
	              pad(d.getMinutes()),
	              pad(d.getSeconds())].join(':');
	  return [d.getDate(), months[d.getMonth()], time].join(' ');
	}
	
	
	// log is just a thin wrapper to console.log that prepends a timestamp
	exports.log = function() {
	  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
	};
	
	
	/**
	 * Inherit the prototype methods from one constructor into another.
	 *
	 * The Function.prototype.inherits from lang.js rewritten as a standalone
	 * function (not on Function.prototype). NOTE: If this file is to be loaded
	 * during bootstrapping this function needs to be rewritten using some native
	 * functions as prototype setup using normal JavaScript does not work as
	 * expected during bootstrapping (see mirror.js in r114903).
	 *
	 * @param {function} ctor Constructor function which needs to inherit the
	 *     prototype.
	 * @param {function} superCtor Constructor function to inherit prototype from.
	 */
	exports.inherits = __webpack_require__(212);
	
	exports._extend = function(origin, add) {
	  // Don't do anything if add isn't an object
	  if (!add || !isObject(add)) return origin;
	
	  var keys = Object.keys(add);
	  var i = keys.length;
	  while (i--) {
	    origin[keys[i]] = add[keys[i]];
	  }
	  return origin;
	};
	
	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(51)))

/***/ },
/* 211 */
/***/ function(module, exports) {

	module.exports = function isBuffer(arg) {
	  return arg && typeof arg === 'object'
	    && typeof arg.copy === 'function'
	    && typeof arg.fill === 'function'
	    && typeof arg.readUInt8 === 'function';
	}

/***/ },
/* 212 */
/***/ function(module, exports) {

	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    var TempCtor = function () {}
	    TempCtor.prototype = superCtor.prototype
	    ctor.prototype = new TempCtor()
	    ctor.prototype.constructor = ctor
	  }
	}


/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {// Copyright 2011 Mark Cavage <mcavage@gmail.com> All rights reserved.
	
	var assert = __webpack_require__(209);
	var ASN1 = __webpack_require__(207);
	var errors = __webpack_require__(206);
	
	
	///--- Globals
	
	var newInvalidAsn1Error = errors.newInvalidAsn1Error;
	
	var DEFAULT_OPTS = {
	  size: 1024,
	  growthFactor: 8
	};
	
	
	///--- Helpers
	
	function merge(from, to) {
	  assert.ok(from);
	  assert.equal(typeof(from), 'object');
	  assert.ok(to);
	  assert.equal(typeof(to), 'object');
	
	  var keys = Object.getOwnPropertyNames(from);
	  keys.forEach(function(key) {
	    if (to[key])
	      return;
	
	    var value = Object.getOwnPropertyDescriptor(from, key);
	    Object.defineProperty(to, key, value);
	  });
	
	  return to;
	}
	
	
	
	///--- API
	
	function Writer(options) {
	  options = merge(DEFAULT_OPTS, options || {});
	
	  this._buf = new Buffer(options.size || 1024);
	  this._size = this._buf.length;
	  this._offset = 0;
	  this._options = options;
	
	  // A list of offsets in the buffer where we need to insert
	  // sequence tag/len pairs.
	  this._seq = [];
	}
	
	Object.defineProperty(Writer.prototype, 'buffer', {
	  get: function () {
	    if (this._seq.length)
	      throw new InvalidAsn1Error(this._seq.length + ' unended sequence(s)');
	
	    return (this._buf.slice(0, this._offset));
	  }
	});
	
	Writer.prototype.writeByte = function(b) {
	  if (typeof(b) !== 'number')
	    throw new TypeError('argument must be a Number');
	
	  this._ensure(1);
	  this._buf[this._offset++] = b;
	};
	
	
	Writer.prototype.writeInt = function(i, tag) {
	  if (typeof(i) !== 'number')
	    throw new TypeError('argument must be a Number');
	  if (typeof(tag) !== 'number')
	    tag = ASN1.Integer;
	
	  var sz = 4;
	
	  while ((((i & 0xff800000) === 0) || ((i & 0xff800000) === 0xff800000 >> 0)) &&
	         (sz > 1)) {
	    sz--;
	    i <<= 8;
	  }
	
	  if (sz > 4)
	    throw new InvalidAsn1Error('BER ints cannot be > 0xffffffff');
	
	  this._ensure(2 + sz);
	  this._buf[this._offset++] = tag;
	  this._buf[this._offset++] = sz;
	
	  while (sz-- > 0) {
	    this._buf[this._offset++] = ((i & 0xff000000) >>> 24);
	    i <<= 8;
	  }
	
	};
	
	
	Writer.prototype.writeNull = function() {
	  this.writeByte(ASN1.Null);
	  this.writeByte(0x00);
	};
	
	
	Writer.prototype.writeEnumeration = function(i, tag) {
	  if (typeof(i) !== 'number')
	    throw new TypeError('argument must be a Number');
	  if (typeof(tag) !== 'number')
	    tag = ASN1.Enumeration;
	
	  return this.writeInt(i, tag);
	};
	
	
	Writer.prototype.writeBoolean = function(b, tag) {
	  if (typeof(b) !== 'boolean')
	    throw new TypeError('argument must be a Boolean');
	  if (typeof(tag) !== 'number')
	    tag = ASN1.Boolean;
	
	  this._ensure(3);
	  this._buf[this._offset++] = tag;
	  this._buf[this._offset++] = 0x01;
	  this._buf[this._offset++] = b ? 0xff : 0x00;
	};
	
	
	Writer.prototype.writeString = function(s, tag) {
	  if (typeof(s) !== 'string')
	    throw new TypeError('argument must be a string (was: ' + typeof(s) + ')');
	  if (typeof(tag) !== 'number')
	    tag = ASN1.OctetString;
	
	  var len = Buffer.byteLength(s);
	  this.writeByte(tag);
	  this.writeLength(len);
	  if (len) {
	    this._ensure(len);
	    this._buf.write(s, this._offset);
	    this._offset += len;
	  }
	};
	
	
	Writer.prototype.writeBuffer = function(buf, tag) {
	  if (typeof(tag) !== 'number')
	    throw new TypeError('tag must be a number');
	  if (!Buffer.isBuffer(buf))
	    throw new TypeError('argument must be a buffer');
	
	  this.writeByte(tag);
	  this.writeLength(buf.length);
	  this._ensure(buf.length);
	  buf.copy(this._buf, this._offset, 0, buf.length);
	  this._offset += buf.length;
	};
	
	
	Writer.prototype.writeStringArray = function(strings) {
	  if ((!strings instanceof Array))
	    throw new TypeError('argument must be an Array[String]');
	
	  var self = this;
	  strings.forEach(function(s) {
	    self.writeString(s);
	  });
	};
	
	// This is really to solve DER cases, but whatever for now
	Writer.prototype.writeOID = function(s, tag) {
	  if (typeof(s) !== 'string')
	    throw new TypeError('argument must be a string');
	  if (typeof(tag) !== 'number')
	    tag = ASN1.OID;
	
	  if (!/^([0-9]+\.){3,}[0-9]+$/.test(s))
	    throw new Error('argument is not a valid OID string');
	
	  function encodeOctet(bytes, octet) {
	    if (octet < 128) {
	        bytes.push(octet);
	    } else if (octet < 16384) {
	        bytes.push((octet >>> 7) | 0x80);
	        bytes.push(octet & 0x7F);
	    } else if (octet < 2097152) {
	      bytes.push((octet >>> 14) | 0x80);
	      bytes.push(((octet >>> 7) | 0x80) & 0xFF);
	      bytes.push(octet & 0x7F);
	    } else if (octet < 268435456) {
	      bytes.push((octet >>> 21) | 0x80);
	      bytes.push(((octet >>> 14) | 0x80) & 0xFF);
	      bytes.push(((octet >>> 7) | 0x80) & 0xFF);
	      bytes.push(octet & 0x7F);
	    } else {
	      bytes.push(((octet >>> 28) | 0x80) & 0xFF);
	      bytes.push(((octet >>> 21) | 0x80) & 0xFF);
	      bytes.push(((octet >>> 14) | 0x80) & 0xFF);
	      bytes.push(((octet >>> 7) | 0x80) & 0xFF);
	      bytes.push(octet & 0x7F);
	    }
	  }
	
	  var tmp = s.split('.');
	  var bytes = [];
	  bytes.push(parseInt(tmp[0], 10) * 40 + parseInt(tmp[1], 10));
	  tmp.slice(2).forEach(function(b) {
	    encodeOctet(bytes, parseInt(b, 10));
	  });
	
	  var self = this;
	  this._ensure(2 + bytes.length);
	  this.writeByte(tag);
	  this.writeLength(bytes.length);
	  bytes.forEach(function(b) {
	    self.writeByte(b);
	  });
	};
	
	
	Writer.prototype.writeLength = function(len) {
	  if (typeof(len) !== 'number')
	    throw new TypeError('argument must be a Number');
	
	  this._ensure(4);
	
	  if (len <= 0x7f) {
	    this._buf[this._offset++] = len;
	  } else if (len <= 0xff) {
	    this._buf[this._offset++] = 0x81;
	    this._buf[this._offset++] = len;
	  } else if (len <= 0xffff) {
	    this._buf[this._offset++] = 0x82;
	    this._buf[this._offset++] = len >> 8;
	    this._buf[this._offset++] = len;
	  } else if (len <= 0xffffff) {
	    this._buf[this._offset++] = 0x83;
	    this._buf[this._offset++] = len >> 16;
	    this._buf[this._offset++] = len >> 8;
	    this._buf[this._offset++] = len;
	  } else {
	    throw new InvalidAsn1ERror('Length too long (> 4 bytes)');
	  }
	};
	
	Writer.prototype.startSequence = function(tag) {
	  if (typeof(tag) !== 'number')
	    tag = ASN1.Sequence | ASN1.Constructor;
	
	  this.writeByte(tag);
	  this._seq.push(this._offset);
	  this._ensure(3);
	  this._offset += 3;
	};
	
	
	Writer.prototype.endSequence = function() {
	  var seq = this._seq.pop();
	  var start = seq + 3;
	  var len = this._offset - start;
	
	  if (len <= 0x7f) {
	    this._shift(start, len, -2);
	    this._buf[seq] = len;
	  } else if (len <= 0xff) {
	    this._shift(start, len, -1);
	    this._buf[seq] = 0x81;
	    this._buf[seq + 1] = len;
	  } else if (len <= 0xffff) {
	    this._buf[seq] = 0x82;
	    this._buf[seq + 1] = len >> 8;
	    this._buf[seq + 2] = len;
	  } else if (len <= 0xffffff) {
	    this._shift(start, len, 1);
	    this._buf[seq] = 0x83;
	    this._buf[seq + 1] = len >> 16;
	    this._buf[seq + 2] = len >> 8;
	    this._buf[seq + 3] = len;
	  } else {
	    throw new InvalidAsn1Error('Sequence too long');
	  }
	};
	
	
	Writer.prototype._shift = function(start, len, shift) {
	  assert.ok(start !== undefined);
	  assert.ok(len !== undefined);
	  assert.ok(shift);
	
	  this._buf.copy(this._buf, start + shift, start, start + len);
	  this._offset += shift;
	};
	
	Writer.prototype._ensure = function(len) {
	  assert.ok(len);
	
	  if (this._size - this._offset < len) {
	    var sz = this._size * this._options.growthFactor;
	    if (sz - this._offset < len)
	      sz += len;
	
	    var buf = new Buffer(sz);
	
	    this._buf.copy(buf, 0, 0, this._offset);
	    this._buf = buf;
	    this._size = sz;
	  }
	};
	
	
	
	///--- Exported API
	
	module.exports = Writer;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(170).Buffer))

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(176)._;
	
	function formatParse(format) {
	    format = format.split('-');
	    var keyType = 'private';
	    var keyOpt = {type: 'default'};
	
	    for (var i = 1; i < format.length; i++) {
	        if (format[i]) {
	            switch (format[i]) {
	                case 'public':
	                    keyType = format[i];
	                    break;
	                case 'private':
	                    keyType = format[i];
	                    break;
	                case 'pem':
	                    keyOpt.type = format[i];
	                    break;
	                case 'der':
	                    keyOpt.type = format[i];
	                    break;
	            }
	        }
	    }
	
	    return {scheme: format[0], keyType: keyType, keyOpt: keyOpt};
	}
	
	module.exports = {
	    pkcs1: __webpack_require__(215),
	    pkcs8: __webpack_require__(216),
	    components: __webpack_require__(217),
	
	    isPrivateExport: function (format) {
	        return module.exports[format] && typeof module.exports[format].privateExport === 'function';
	    },
	
	    isPrivateImport: function (format) {
	        return module.exports[format] && typeof module.exports[format].privateImport === 'function';
	    },
	
	    isPublicExport: function (format) {
	        return module.exports[format] && typeof module.exports[format].publicExport === 'function';
	    },
	
	    isPublicImport: function (format) {
	        return module.exports[format] && typeof module.exports[format].publicImport === 'function';
	    },
	
	    detectAndImport: function (key, data, format) {
	        if (format === undefined) {
	            for (var scheme in module.exports) {
	                if (typeof module.exports[scheme].autoImport === 'function' && module.exports[scheme].autoImport(key, data)) {
	                    return true;
	                }
	            }
	        } else if (format) {
	            var fmt = formatParse(format);
	
	            if (module.exports[fmt.scheme]) {
	                if (fmt.keyType === 'private') {
	                    module.exports[fmt.scheme].privateImport(key, data, fmt.keyOpt);
	                } else {
	                    module.exports[fmt.scheme].publicImport(key, data, fmt.keyOpt);
	                }
	            } else {
	                throw Error('Unsupported key format');
	            }
	        }
	
	        return false;
	    },
	
	    detectAndExport: function (key, format) {
	        if (format) {
	            var fmt = formatParse(format);
	
	            if (module.exports[fmt.scheme]) {
	                if (fmt.keyType === 'private') {
	                    if (!key.isPrivate()) {
	                        throw Error("This is not private key");
	                    }
	                    return module.exports[fmt.scheme].privateExport(key, fmt.keyOpt);
	                } else {
	                    if (!key.isPublic()) {
	                        throw Error("This is not public key");
	                    }
	                    return module.exports[fmt.scheme].publicExport(key, fmt.keyOpt);
	                }
	            } else {
	                throw Error('Unsupported key format');
	            }
	        }
	    }
	};

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var ber = __webpack_require__(204).Ber;
	var _ = __webpack_require__(176)._;
	var utils = __webpack_require__(176);
	
	module.exports = {
	    privateExport: function (key, options) {
	        options = options || {};
	
	        var n = key.n.toBuffer();
	        var d = key.d.toBuffer();
	        var p = key.p.toBuffer();
	        var q = key.q.toBuffer();
	        var dmp1 = key.dmp1.toBuffer();
	        var dmq1 = key.dmq1.toBuffer();
	        var coeff = key.coeff.toBuffer();
	
	        var length = n.length + d.length + p.length + q.length + dmp1.length + dmq1.length + coeff.length + 512; // magic
	        var writer = new ber.Writer({size: length});
	
	        writer.startSequence();
	        writer.writeInt(0);
	        writer.writeBuffer(n, 2);
	        writer.writeInt(key.e);
	        writer.writeBuffer(d, 2);
	        writer.writeBuffer(p, 2);
	        writer.writeBuffer(q, 2);
	        writer.writeBuffer(dmp1, 2);
	        writer.writeBuffer(dmq1, 2);
	        writer.writeBuffer(coeff, 2);
	        writer.endSequence();
	
	        if (options.type === 'der') {
	            return writer.buffer;
	        } else {
	            return '-----BEGIN RSA PRIVATE KEY-----\n' + utils.linebrk(writer.buffer.toString('base64'), 64) + '\n-----END RSA PRIVATE KEY-----';
	        }
	    },
	
	    privateImport: function (key, data, options) {
	        options = options || {};
	        var buffer;
	
	        if (options.type !== 'der') {
	            if (Buffer.isBuffer(data)) {
	                data = data.toString('utf8');
	            }
	
	            if (_.isString(data)) {
	                var pem = data.replace('-----BEGIN RSA PRIVATE KEY-----', '')
	                    .replace('-----END RSA PRIVATE KEY-----', '')
	                    .replace(/\s+|\n\r|\n|\r$/gm, '');
	                buffer = new Buffer(pem, 'base64');
	            } else {
	                throw Error('Unsupported key format');
	            }
	        } else if (Buffer.isBuffer(data)) {
	            buffer = data;
	        } else {
	            throw Error('Unsupported key format');
	        }
	
	        var reader = new ber.Reader(buffer);
	        reader.readSequence();
	        reader.readString(2, true); // just zero
	        key.setPrivate(
	            reader.readString(2, true),  // modulus
	            reader.readString(2, true),  // publicExponent
	            reader.readString(2, true),  // privateExponent
	            reader.readString(2, true),  // prime1
	            reader.readString(2, true),  // prime2
	            reader.readString(2, true),  // exponent1 -- d mod (p1)
	            reader.readString(2, true),  // exponent2 -- d mod (q-1)
	            reader.readString(2, true)   // coefficient -- (inverse of q) mod p
	        );
	    },
	
	    publicExport: function (key, options) {
	        options = options || {};
	
	        var n = key.n.toBuffer();
	        var length = n.length + 512; // magic
	
	        var bodyWriter = new ber.Writer({size: length});
	        bodyWriter.startSequence();
	        bodyWriter.writeBuffer(n, 2);
	        bodyWriter.writeInt(key.e);
	        bodyWriter.endSequence();
	
	        if (options.type === 'der') {
	            return bodyWriter.buffer;
	        } else {
	            return '-----BEGIN RSA PUBLIC KEY-----\n' + utils.linebrk(bodyWriter.buffer.toString('base64'), 64) + '\n-----END RSA PUBLIC KEY-----';
	        }
	    },
	
	    publicImport: function (key, data, options) {
	        options = options || {};
	        var buffer;
	
	        if (options.type !== 'der') {
	            if (Buffer.isBuffer(data)) {
	                data = data.toString('utf8');
	            }
	
	            if (_.isString(data)) {
	                var pem = data.replace('-----BEGIN RSA PUBLIC KEY-----', '')
	                    .replace('-----END RSA PUBLIC KEY-----', '')
	                    .replace(/\s+|\n\r|\n|\r$/gm, '');
	                buffer = new Buffer(pem, 'base64');
	            }
	        } else if (Buffer.isBuffer(data)) {
	            buffer = data;
	        } else {
	            throw Error('Unsupported key format');
	        }
	
	        var body = new ber.Reader(buffer);
	        body.readSequence();
	        key.setPublic(
	            body.readString(0x02, true), // modulus
	            body.readString(0x02, true)  // publicExponent
	        );
	    },
	
	    /**
	     * Trying autodetect and import key
	     * @param key
	     * @param data
	     */
	    autoImport: function (key, data) {
	        if (/^\s*-----BEGIN RSA PRIVATE KEY-----\s*(?=(([A-Za-z0-9+/=]+\s*)+))\1-----END RSA PRIVATE KEY-----\s*$/g.test(data)) {
	            module.exports.privateImport(key, data);
	            return true;
	        }
	
	        if (/^\s*-----BEGIN RSA PUBLIC KEY-----\s*(?=(([A-Za-z0-9+/=]+\s*)+))\1-----END RSA PUBLIC KEY-----\s*$/g.test(data)) {
	            module.exports.publicImport(key, data);
	            return true;
	        }
	
	        return false;
	    }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(170).Buffer))

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var ber = __webpack_require__(204).Ber;
	var _ = __webpack_require__(176)._;
	var PUBLIC_RSA_OID = '1.2.840.113549.1.1.1';
	var utils = __webpack_require__(176);
	
	module.exports = {
	    privateExport: function (key, options) {
	        options = options || {};
	
	        var n = key.n.toBuffer();
	        var d = key.d.toBuffer();
	        var p = key.p.toBuffer();
	        var q = key.q.toBuffer();
	        var dmp1 = key.dmp1.toBuffer();
	        var dmq1 = key.dmq1.toBuffer();
	        var coeff = key.coeff.toBuffer();
	
	        var length = n.length + d.length + p.length + q.length + dmp1.length + dmq1.length + coeff.length + 512; // magic
	        var bodyWriter = new ber.Writer({size: length});
	
	        bodyWriter.startSequence();
	        bodyWriter.writeInt(0);
	        bodyWriter.writeBuffer(n, 2);
	        bodyWriter.writeInt(key.e);
	        bodyWriter.writeBuffer(d, 2);
	        bodyWriter.writeBuffer(p, 2);
	        bodyWriter.writeBuffer(q, 2);
	        bodyWriter.writeBuffer(dmp1, 2);
	        bodyWriter.writeBuffer(dmq1, 2);
	        bodyWriter.writeBuffer(coeff, 2);
	        bodyWriter.endSequence();
	
	        var writer = new ber.Writer({size: length});
	        writer.startSequence();
	        writer.writeInt(0);
	        writer.startSequence();
	        writer.writeOID(PUBLIC_RSA_OID);
	        writer.writeNull();
	        writer.endSequence();
	        writer.writeBuffer(bodyWriter.buffer, 4);
	        writer.endSequence();
	
	        if (options.type === 'der') {
	            return writer.buffer;
	        } else {
	            return '-----BEGIN PRIVATE KEY-----\n' + utils.linebrk(writer.buffer.toString('base64'), 64) + '\n-----END PRIVATE KEY-----';
	        }
	    },
	
	    privateImport: function (key, data, options) {
	        options = options || {};
	        var buffer;
	
	        if (options.type !== 'der') {
	            if (Buffer.isBuffer(data)) {
	                data = data.toString('utf8');
	            }
	
	            if (_.isString(data)) {
	                var pem = data.replace('-----BEGIN PRIVATE KEY-----', '')
	                    .replace('-----END PRIVATE KEY-----', '')
	                    .replace(/\s+|\n\r|\n|\r$/gm, '');
	                buffer = new Buffer(pem, 'base64');
	            } else {
	                throw Error('Unsupported key format');
	            }
	        } else if (Buffer.isBuffer(data)) {
	            buffer = data;
	        } else {
	            throw Error('Unsupported key format');
	        }
	
	        var reader = new ber.Reader(buffer);
	        reader.readSequence();
	        reader.readInt(0);
	        var header = new ber.Reader(reader.readString(0x30, true));
	
	        if (header.readOID(0x06, true) !== PUBLIC_RSA_OID) {
	            throw Error('Invalid Public key format');
	        }
	
	        var body = new ber.Reader(reader.readString(0x04, true));
	        body.readSequence();
	        body.readString(2, true); // just zero
	        key.setPrivate(
	            body.readString(2, true),  // modulus
	            body.readString(2, true),  // publicExponent
	            body.readString(2, true),  // privateExponent
	            body.readString(2, true),  // prime1
	            body.readString(2, true),  // prime2
	            body.readString(2, true),  // exponent1 -- d mod (p1)
	            body.readString(2, true),  // exponent2 -- d mod (q-1)
	            body.readString(2, true)   // coefficient -- (inverse of q) mod p
	        );
	    },
	
	    publicExport: function (key, options) {
	        options = options || {};
	
	        var n = key.n.toBuffer();
	        var length = n.length + 512; // magic
	
	        var bodyWriter = new ber.Writer({size: length});
	        bodyWriter.writeByte(0);
	        bodyWriter.startSequence();
	        bodyWriter.writeBuffer(n, 2);
	        bodyWriter.writeInt(key.e);
	        bodyWriter.endSequence();
	
	        var writer = new ber.Writer({size: length});
	        writer.startSequence();
	        writer.startSequence();
	        writer.writeOID(PUBLIC_RSA_OID);
	        writer.writeNull();
	        writer.endSequence();
	        writer.writeBuffer(bodyWriter.buffer, 3);
	        writer.endSequence();
	
	        if (options.type === 'der') {
	            return writer.buffer;
	        } else {
	            return '-----BEGIN PUBLIC KEY-----\n' + utils.linebrk(writer.buffer.toString('base64'), 64) + '\n-----END PUBLIC KEY-----';
	        }
	    },
	
	    publicImport: function (key, data, options) {
	        options = options || {};
	        var buffer;
	
	        if (options.type !== 'der') {
	            if (Buffer.isBuffer(data)) {
	                data = data.toString('utf8');
	            }
	
	            if (_.isString(data)) {
	                var pem = data.replace('-----BEGIN PUBLIC KEY-----', '')
	                    .replace('-----END PUBLIC KEY-----', '')
	                    .replace(/\s+|\n\r|\n|\r$/gm, '');
	                buffer = new Buffer(pem, 'base64');
	            }
	        } else if (Buffer.isBuffer(data)) {
	            buffer = data;
	        } else {
	            throw Error('Unsupported key format');
	        }
	
	        var reader = new ber.Reader(buffer);
	        reader.readSequence();
	        var header = new ber.Reader(reader.readString(0x30, true));
	
	        if (header.readOID(0x06, true) !== PUBLIC_RSA_OID) {
	            throw Error('Invalid Public key format');
	        }
	
	        var body = new ber.Reader(reader.readString(0x03, true));
	        body.readByte();
	        body.readSequence();
	        key.setPublic(
	            body.readString(0x02, true), // modulus
	            body.readString(0x02, true)  // publicExponent
	        );
	    },
	
	    /**
	     * Trying autodetect and import key
	     * @param key
	     * @param data
	     */
	    autoImport: function (key, data) {
	        if (/^\s*-----BEGIN PRIVATE KEY-----\s*(?=(([A-Za-z0-9+/=]+\s*)+))\1-----END PRIVATE KEY-----\s*$/g.test(data)) {
	            module.exports.privateImport(key, data);
	            return true;
	        }
	
	        if (/^\s*-----BEGIN PUBLIC KEY-----\s*(?=(([A-Za-z0-9+/=]+\s*)+))\1-----END PUBLIC KEY-----\s*$/g.test(data)) {
	            module.exports.publicImport(key, data);
	            return true;
	        }
	
	        return false;
	    }
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(170).Buffer))

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(176)._;
	var utils = __webpack_require__(176);
	
	module.exports = {
	    privateExport: function (key, options) {
	        return {
	            n: key.n.toBuffer(),
	            e: key.e,
	            d: key.d.toBuffer(),
	            p: key.p.toBuffer(),
	            q: key.q.toBuffer(),
	            dmp1: key.dmp1.toBuffer(),
	            dmq1: key.dmq1.toBuffer(),
	            coeff: key.coeff.toBuffer()
	        };
	    },
	
	    privateImport: function (key, data, options) {
	        if (data.n && data.e && data.d && data.p && data.q && data.dmp1 && data.dmq1 && data.coeff) {
	            key.setPrivate(
	                data.n,
	                data.e,
	                data.d,
	                data.p,
	                data.q,
	                data.dmp1,
	                data.dmq1,
	                data.coeff
	            );
	        } else {
	            throw Error("Invalid key data");
	        }
	    },
	
	    publicExport: function (key, options) {
	        return {
	            n: key.n.toBuffer(),
	            e: key.e
	        };
	    },
	
	    publicImport: function (key, data, options) {
	        if (data.n && data.e) {
	            key.setPublic(
	                data.n,
	                data.e
	            );
	        } else {
	            throw Error("Invalid key data");
	        }
	    },
	
	    /**
	     * Trying autodetect and import key
	     * @param key
	     * @param data
	     */
	    autoImport: function (key, data) {
	        if (data.n && data.e) {
	            if (data.d && data.p && data.q && data.dmp1 && data.dmq1 && data.coeff) {
	                module.exports.privateImport(key, data);
	                return true;
	            } else {
	                module.exports.publicImport(key, data);
	                return true;
	            }
	        }
	
	        return false;
	    }
	};


/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _equals = __webpack_require__(120);
	
	var _equals2 = _interopRequireDefault(_equals);
	
	var _crypto = __webpack_require__(177);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Generates a hash signed with a key.
	 *
	 * @param {String} key the keys used to sign the hash.
	 *
	 * @param {String} string The string to be hashed.
	 *
	*/
	/**
	 * @name Postback
	 * @description This module exposes functions
	 *              related to postback validations.
	 *              This can also be found in client.security if
	 *              you already used pagarme.connect to pre apply
	 *              your api_key.
	 *
	 * @module postback
	 **/
	function calculateSignature(key, postbackBody) {
	  return (0, _crypto.createHmac)('sha1', key).update(postbackBody).digest('hex');
	}
	
	/**
	 * Verifies a hash signed with a key.
	 *
	 * @param {String} key the keys used to sign the hash.
	 *
	 * @param {String} string The string to be hashed.
	 *
	 * @param {String} expected The expected result.
	 *
	*/
	function verifySignature(key, postbackBody, headerSignature) {
	  var signature = calculateSignature(key, postbackBody);
	  return (0, _equals2.default)(signature, headerSignature);
	}
	
	exports.default = {
	  calculateSignature: calculateSignature,
	  verifySignature: verifySignature
	};
	module.exports = exports['default'];

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _T = __webpack_require__(36);
	
	var _T2 = _interopRequireDefault(_T);
	
	var _has = __webpack_require__(38);
	
	var _has2 = _interopRequireDefault(_has);
	
	var _cond = __webpack_require__(45);
	
	var _cond2 = _interopRequireDefault(_cond);
	
	var _curry = __webpack_require__(13);
	
	var _curry2 = _interopRequireDefault(_curry);
	
	var _routes = __webpack_require__(89);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _request = __webpack_require__(90);
	
	var _request2 = _interopRequireDefault(_request);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var findOne = (0, _curry2.default)(function (opts, body) {
	  return _request2.default.get(opts, _routes2.default.customers.details(body.id), {});
	}); /**
	     * @name Customers
	     * @description This module exposes functions
	     *              related to the `/customers` path.
	     *
	     * @module customers
	     **/
	
	var findAll = (0, _curry2.default)(function (opts, pagination) {
	  return _request2.default.get(opts, _routes2.default.customers.base, pagination || {});
	});
	
	/**
	 * `GET /customers`
	 * Makes a request to /customers or to /customers/:id
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {Object} body The payload for the request
	 * {@link https://pagarme.readme.io/v1/reference#retornando-dados-do-cliente|API Reference for this payload}
	 * @param {Number} [body.id] The customer ID. If not sent, a
	 *                           customer list will be returned instead.
	 * @param {Number} [body.count] Pagination option for customer list.
	 *                              Number of customers in a page
	 * @param {Number} [body.page] Pagination option for customer list.
	 *                             The page index.
	 */
	var find = function find(opts, body) {
	  return (0, _cond2.default)([[(0, _has2.default)('id'), findOne(opts)], [_T2.default, findAll(opts)]])(body);
	};
	
	/**
	 * `GET /customers`
	 * Returns company's customers
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {Object} body The payload for the request.
	 * {@link https://pagarme.readme.io/v1/reference#retornando-clientes|API Reference for this payload}
	 * @param {Number} [body.count] Pagination option to get a list of customers.
	 *                              Number of customers in a page
	 * @param {Number} [body.page] Pagination option for a list of customers.
	 *                             The page index.
	*/
	var all = function all(opts, body) {
	  return findAll(opts, body);
	};
	
	/**
	 * `POST /customers`
	 * Creates a customer from the given payload
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 * @param {Object} body The payload for the request
	 * {@link https://pagarme.readme.io/v1/reference#criando-um-cliente|API Reference for this payload}
	 *
	 * @returns {Promise} Resolves to the result of
	 *                    the request or to an error.
	 */
	var create = function create(opts, body) {
	  return _request2.default.post(opts, _routes2.default.customers.base, body);
	};
	
	exports.default = {
	  find: find,
	  all: all,
	  create: create
	};
	module.exports = exports['default'];

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _curry = __webpack_require__(13);
	
	var _curry2 = _interopRequireDefault(_curry);
	
	var _routes = __webpack_require__(89);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _request = __webpack_require__(90);
	
	var _request2 = _interopRequireDefault(_request);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * `GET /zipcodes`
	 * Makes a request to /zipcodes/:zipcode
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {Object} body The payload for the request.
	 * {@link https://docs.pagar.me/v2017-07-17/reference#consulta-de-cep|API Reference for this payload}
	 * @param {String} [body.zipcode] The zipcode you want more information about.
	 *                                If not sent an API error will be returned instead.
	*/
	
	var find = (0, _curry2.default)(function (opts, body) {
	  return _request2.default.get(opts, _routes2.default.zipcodes.details(body.zipcode), {});
	}); /**
	     * @name Zipcodes
	     * @description This module exposes functions
	     *              related to the `/zipcodes` path.
	     *
	     * @module zipcodes
	     **/
	
	exports.default = {
	  find: find
	};
	module.exports = exports['default'];

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _T = __webpack_require__(36);
	
	var _T2 = _interopRequireDefault(_T);
	
	var _has = __webpack_require__(38);
	
	var _has2 = _interopRequireDefault(_has);
	
	var _cond = __webpack_require__(45);
	
	var _cond2 = _interopRequireDefault(_cond);
	
	var _curry = __webpack_require__(13);
	
	var _curry2 = _interopRequireDefault(_curry);
	
	var _routes = __webpack_require__(89);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _request = __webpack_require__(90);
	
	var _request2 = _interopRequireDefault(_request);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var findOne = (0, _curry2.default)(function (opts, body) {
	  return _request2.default.get(opts, _routes2.default.paymentLinks.details(body.id), {});
	}); /**
	     * @name PaymentLinks
	     * @description This module exposes functions
	     *              related to the `/payment_links` path.
	     *
	     * @module paymentLinks
	     **/
	
	var findAll = (0, _curry2.default)(function (opts, pagination) {
	  return _request2.default.get(opts, _routes2.default.paymentLinks.base, pagination || {});
	});
	
	/**
	 * `GET /payment_links`
	 * Makes a request to /payment_links or to /payment_links/:id
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {Object} body The payload for the request.
	 * {@link https://docs.pagar.me/v2017-08-28/reference#retornando-links-de-pagamento|API Reference for this payload}
	 * @param {Number} [body.id] The paymentLink ID. If not sent a
	 *                           paymentLink list will be returned instead.
	 * @param {Number} [body.count] Pagination option for paymentLink list.
	 *                              Number of paymentLink in a page
	 * @param {Number} [body.page] Pagination option for paymentLink list.
	 *                             The page index.
	*/
	var find = function find(opts, body) {
	  return (0, _cond2.default)([[(0, _has2.default)('id'), findOne(opts)], [_T2.default, findAll(opts)]])(body);
	};
	
	/**
	 * `GET /payment_links`
	 * Makes a request to /payment_links to get all paymentLinks.
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {Number} [body.count] Pagination option for paymentLink list.
	 *                              Number of paymentLink in a page
	 * @param {Number} [body.page] Pagination option for paymentLink list.
	 *                             The page index.
	*/
	var all = function all(opts, body) {
	  return findAll(opts, body);
	};
	
	/**
	 * `POST /payment_links`
	 * Creates a paymentLink from the given payload.
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {Object} body The payload for the request.
	 * {@link https://docs.pagar.me/v2017-08-28/reference#criando-um-link-de-pagamento-1|API Reference for this payload}
	 *
	 * @returns {Promise} Resolves to the result of
	 *                    the request or to an error.
	 */
	var create = function create(opts, body) {
	  return _request2.default.post(opts, _routes2.default.paymentLinks.base, body);
	};
	
	/**
	 * `POST /payment_links/:id/cancel`
	 * Cancels a paymentLink from the given id.
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {Number} body.id The paymentLink ID.
	 *
	 * @returns {Promise} Resolves to the result of
	 *                    the request or to an error.
	 */
	var cancel = function cancel(opts, body) {
	  return _request2.default.post(opts, _routes2.default.paymentLinks.cancel(body.id), body);
	};
	
	exports.default = {
	  find: find,
	  all: all,
	  create: create,
	  cancel: cancel
	};
	module.exports = exports['default'];

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _routes = __webpack_require__(89);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _request = __webpack_require__(90);
	
	var _request2 = _interopRequireDefault(_request);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * `POST /pix/key`
	 * Creates a pix from the given payload.
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 * @param {Object} body The payload for the request
	 *
	 * @returns {Promise} Resolves to the result of
	 *                    the request or to an error.
	 */
	/**
	 * @name PixKeys
	 * @description This module exposes functions
	 *              related to the `/pix` path.
	 *
	 * @module pixKeys
	 **/
	var create = function create(opts, body) {
	  return _request2.default.post(opts, _routes2.default.pix.keys, body || {});
	};
	
	/**
	* `GET /pix/keys`
	* Makes a request to /pix/keys
	*
	* @param {Object} opts - An options params which
	*                      is usually already bound
	*                      by `connect` functions.
	*
	*/
	var all = function all(opts) {
	  return _request2.default.get(opts, _routes2.default.pix.keys);
	};
	
	exports.default = {
	  create: create,
	  all: all
	};
	module.exports = exports['default'];

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _routes = __webpack_require__(89);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _request = __webpack_require__(90);
	
	var _request2 = _interopRequireDefault(_request);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * `POST /status`
	 * Returns the service status and environment.
	 *
	 * @returns {Promise} Resolves to the result of
	 *                    the request or to an error.
	 */
	/**
	 * @name Status
	 * @description This module exposes functions
	 *              related to the `/status` route.
	 *
	 * @module status
	 **/
	
	var status = function status(opts) {
	  return _request2.default.get(opts, _routes2.default.status);
	};
	
	exports.default = status;
	module.exports = exports['default'];

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _routes = __webpack_require__(89);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _request = __webpack_require__(90);
	
	var _request2 = _interopRequireDefault(_request);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * `POST /onboarding_answers`
	 * Creates a onboarding answer from the given payload.
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {Object} body The payload for the request.
	 *
	 * @returns {Promise} Resolves to the result of
	 *                    the request or to an error.
	 */
	
	/**
	 * @name OnboardingAnswers
	 * @description This module exposes functions
	 *              related to the '/onboarding_answers' path.
	 *
	 * @module onboardingAnswers
	 **/
	
	var create = function create(opts, body) {
	  return _request2.default.post(opts, _routes2.default.onboardingAnswers.base, body);
	};
	
	/**
	 * `GET /onboarding_answers`
	 * Makes a request to /onboarding_answers to get all answers
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @returns {Promise} Resolves to the result of
	 *                    the request or to an error.
	 */
	var all = function all(opts, body) {
	  return _request2.default.get(opts, _routes2.default.onboardingAnswers.base, body);
	};
	
	/**
	 * `DELETE /onboarding_answers/:id`
	 * Deletes an onboarding answer
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {String} [body.id] - The onboarding answer ID.
	 *
	 * @returns {Promise} Resolves to the result of
	 *                    the request or to an error.
	 */
	var destroy = function destroy(opts, body) {
	  return _request2.default.delete(opts, _routes2.default.onboardingAnswers.base, body);
	};
	
	exports.default = {
	  all: all,
	  create: create,
	  destroy: destroy
	};
	module.exports = exports['default'];

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _routes = __webpack_require__(89);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _request = __webpack_require__(90);
	
	var _request2 = _interopRequireDefault(_request);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * `GET /onboarding_questions/:id`
	 * Return the onboarding question requested.
	 *
	 * @param {Object} opts   An options params which
	 *                        is usually already bound
	 *                        by `connect` functions.
	 *
	 * @param {Object} body The payload for the request
	 * @param {String} body.id The question Id
	 *
	 * @returns {Promise} Resolves to the result of
	 *                    the request or to an error.
	 */
	/**
	 * @name OnboardingQuestions
	 * @description This module exposes functions
	 *              related to the '/onboarding_questions' path.
	 *
	 * @module onboardingQuestions
	 **/
	
	var find = function find(opts, body) {
	  return _request2.default.get(opts, _routes2.default.onboardingQuestions.details(body.id), body);
	};
	
	exports.default = {
	  find: find
	};
	module.exports = exports['default'];

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _curry = __webpack_require__(13);
	
	var _curry2 = _interopRequireDefault(_curry);
	
	var _routes = __webpack_require__(89);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _request = __webpack_require__(90);
	
	var _request2 = _interopRequireDefault(_request);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var findAll = (0, _curry2.default)(function (opts, body) {
	  return _request2.default.get(opts, _routes2.default.orders.base, body || {});
	});
	
	/**
	 * `GET /orders`
	 * Makes a request to /orders to get all orders.
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {Number} [body.id] The orders ID. If not sent a
	 *                           orders list will be returned instead.
	 * @param {Number} [body.count] Pagination option for orders list.
	 *                              Number of orders in a page
	 * @param {Number} [body.page] Pagination option for orders list.
	 *                             The page index.
	 * @param {Number} [body.status] The paymentLinks Status. If not sent a
	 *                           orders list will be returned instead.
	 * @param {Number} [body.payment_link_id] The paymentLinks ID. If not sent a
	 *                           orders list will be returned instead.
	*/
	/**
	 * @name Orders
	 * @description This module exposes functions
	 *              related to the `/orders` path.
	 *
	 * @module orders
	 **/
	
	var all = function all(opts, body) {
	  return findAll(opts, body);
	};
	
	exports.default = {
	  all: all
	};
	module.exports = exports['default'];

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _routes = __webpack_require__(89);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _request = __webpack_require__(90);
	
	var _request2 = _interopRequireDefault(_request);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * `GET /versions`
	 * Returns the available versions from API.
	 *
	 * @return {Promise} Resolves to the available versions
	 *                   from API.
	 */
	/**
	 * @name Versions
	 * @description This module exposes a function
	 *              related to the `/versions` route.
	 * @module versions
	 */
	
	var versions = function versions(opts) {
	  return _request2.default.get(opts, _routes2.default.versions);
	};
	
	exports.default = versions;
	module.exports = exports['default'];

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _routes = __webpack_require__(89);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _request = __webpack_require__(90);
	
	var _request2 = _interopRequireDefault(_request);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * `GET /reprocessed_transactions`
	 * Find reprocessed transactions
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {Object} query The query object to be sent.
	 * @param {Integer} query.transaction_id Transaction ID.
	 * @param {Integer} query.original_transaction_id Original transaction ID.
	 * @param {String} query.starting_at Starting at date (eg. 2019-09-06).
	 * @param {String} query.ending_at Ending at date (eg. 2036-09-06).
	 *
	 * @returns {Promise} Resolves to the result of
	 *                    the request or to an error.
	 */
	/**
	 * @name Reprocessed Transactions
	 * @description This module exposes functions
	 *              related to the `/reprocessed_transactions` path.
	 *
	 * @module reprocessedTransactions
	 **/
	
	var find = function find(opts, query) {
	  return _request2.default.get(opts, _routes2.default.reprocessedTransactions, query);
	};
	
	exports.default = {
	  find: find
	};
	module.exports = exports['default'];

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _curry = __webpack_require__(13);
	
	var _curry2 = _interopRequireDefault(_curry);
	
	var _routes = __webpack_require__(89);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _request = __webpack_require__(90);
	
	var _request2 = _interopRequireDefault(_request);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * `GET /refunds`
	 * Makes a request to /refunds
	 *
	 * @param {Object} opts - An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {Object} body - The payload for the request.
	 * @param {String} [body.transaction_id] - The refunded transaction ID
	 * @param {String} [body.local_transaction_id] - The refunded transaction external ID
	 * @param {String} [body.metadata] - Metadata used for the refund
	 * @param {String} [body.date_created] - Refund creation date
	 * @param {String} [body.date_updated] - Refund update date
	 */
	var find = (0, _curry2.default)(function (opts, body) {
	  return _request2.default.get(opts, _routes2.default.refunds.base, body);
	});
	
	/**
	 * `POST /refunds/:id/cancel`
	 * Makes a request to /refunds/:id/cancel
	 *
	 * @param {Object} opts - An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 *
	 * @param {Object} body - The payload for the request.
	 * @param {String} [body.id] - The ID of the refund to be canceled
	 */
	/**
	 * @name Refunds
	 * @description This module exposes functions
	 *              related to the `/refunds` path.
	 *
	 * @module refunds
	 **/
	
	var cancel = (0, _curry2.default)(function (opts, body) {
	  return _request2.default.post(opts, _routes2.default.refunds.cancel(body.id));
	});
	
	exports.default = {
	  cancel: cancel,
	  find: find
	};
	module.exports = exports['default'];

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _routes = __webpack_require__(89);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _request = __webpack_require__(90);
	
	var _request2 = _interopRequireDefault(_request);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * `GET /fee_presets/:id`
	 * Returns the requested fee preset.
	 *
	 * @param {Object} opts   An options params which
	 *                        is usually already bound
	 *                        by `connect` functions.
	 *
	 * @param {Object} body The payload for the request
	 * @param {String} body.id The fee preset ID
	 *
	 * @returns {Promise} Resolves to the result of
	 *                    the request or to an error.
	 */
	/**
	 * @name FeePresets
	 * @description This module exposes functions
	 *              related to the '/fee_presets' path.
	 *
	 * @module feePresets
	 **/
	
	var find = function find(opts, body) {
	  return _request2.default.get(opts, _routes2.default.feePresets.details(body.id), body);
	};
	
	exports.default = {
	  find: find
	};
	module.exports = exports['default'];

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _routes = __webpack_require__(89);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _request = __webpack_require__(90);
	
	var _request2 = _interopRequireDefault(_request);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * `GET /recipients/:id/settlements`
	 * Get settlements for a specfic recipient.
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 * @param {String} [body.recipientId] - The ID of the recipient
	 *
	  *
	 * @param {Object} body https://docs.pagar.me/reference?showHidden=7e035#retornando-pagamentos.
	 *
	 * @returns {Promise} Resolves to the result of
	 *                    the request or to an error.
	 */
	/**
	 * @name settlements
	 * @description This module exposes functions
	 *              related to the `/recipient/:id/settlements` path.
	 *
	 * @module settlements
	 **/
	var all = function all(opts, body) {
	  return _request2.default.get(opts, _routes2.default.settlements.all(body.recipientId), body);
	};
	
	/**
	 * `GET /recipients/:id/settlements/contracts`
	 * Get settlements for a specfic recipient.
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 * @param {String} [body.recipientId] - The ID of the recipient
	 *
	  *
	 * @param {Object} body https://docs.pagar.me/reference?showHidden=7e035#retornando-pagamentos.
	 *
	 * @returns {Promise} Resolves to the result of
	 *                    the request or to an error.
	 */
	var contractsAll = function contractsAll(opts, body) {
	  return _request2.default.get(opts, _routes2.default.settlements.contracts.all(body.recipientId), body);
	};
	
	exports.default = {
	  all: all,
	  contracts: {
	    all: contractsAll
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _T = __webpack_require__(36);
	
	var _T2 = _interopRequireDefault(_T);
	
	var _has = __webpack_require__(38);
	
	var _has2 = _interopRequireDefault(_has);
	
	var _cond = __webpack_require__(45);
	
	var _cond2 = _interopRequireDefault(_cond);
	
	var _curry = __webpack_require__(13);
	
	var _curry2 = _interopRequireDefault(_curry);
	
	var _routes = __webpack_require__(89);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _request = __webpack_require__(90);
	
	var _request2 = _interopRequireDefault(_request);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * `GET /credit/credit_lines`
	 *
	 * Returns all credit lines.
	 *
	 * @param {Object} opts   An options params which
	 *                        is usually already bound
	 *                        by `connect` functions.
	 *
	 * @returns {Promise} Resolves to the result of
	 *                    the request or to an error.
	 */
	var findAllCreditLines = function findAllCreditLines(opts) {
	  return _request2.default.get(opts, _routes2.default.credit.creditLines.all);
	};
	
	/**
	 * `GET /credit/credit_lines/:creditLineId/proposals/:proposalId`
	 *
	 * Returns requested proposal.
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 * @param {String} body.creditLineId The credit line's ID
	 * @param {String} body.proposalId The proposal's ID
	 * @returns {Promise} Resolves to the result of
	 *                    the request or to an error.
	 */
	/**
	 * @name Credit
	 * @description This module exposes functions
	 *              related to the '/credit' path.
	 *
	 * @module credit
	 **/
	
	var findOneProposal = function findOneProposal(opts, body) {
	  return _request2.default.get(opts, _routes2.default.credit.proposals.details(body.creditLineId, body.proposalId));
	};
	
	/**
	 * `POST /credit/credit_lines/:creditLineId/proposals`
	 *
	 * Creates a proposals based on credit line.
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 * @param {String} body.creditLineId The credit line's ID
	 * @param {String} body.amount The proposal amount
	 * @returns {Promise} Resolves to the result of
	 *                    the request or to an error.
	 */
	var createProposal = function createProposal(opts, body) {
	  return _request2.default.post(opts, _routes2.default.credit.proposals.create(body.creditLineId), body);
	};
	
	/**
	 * `POST /credit/credit_lines/:creditLineId/proposals/:proposalId/accept`
	 *
	 * Accepts a proposal
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 * @param {String} body.creditLineId The credit line's ID
	 * @param {String} body.proposalId The proposal's ID
	 * @returns {Promise} Resolves to the result of
	 *                    the request or to an error.
	 */
	var acceptProposal = function acceptProposal(opts, body) {
	  return _request2.default.post(opts, _routes2.default.credit.proposals.accept(body.creditLineId, body.proposalId), body);
	};
	
	/**
	 * `GET /credit/credit_lines/:creditLineId/proposals/:proposalId/settlement_forecast`
	 *
	 * Returns the settlement forecast from the given proposal
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 * @param {String} body.creditLineId The credit line's ID
	 * @param {String} body.proposalId The proposal's ID
	 * @returns {Promise} Resolves to the result of
	 *                    the request or to an error.
	 */
	var settlementForecast = function settlementForecast(opts, body) {
	  return _request2.default.get(opts, _routes2.default.credit.proposals.settlementForecast(body.creditLineId, body.proposalId), body);
	};
	
	/**
	 * `GET /credit/loans`
	 *
	 * Returns all loans
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 * @returns {Promise} Resolves to the result of
	 *                    the request or to an error.
	 */
	var findAllLoans = (0, _curry2.default)(function (opts) {
	  return _request2.default.get(opts, _routes2.default.credit.loans.all);
	});
	
	/**
	 * `GET /credit/loans/:loanId`
	 *
	 * Returns the requested loan
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 * @param {String} body.loanId The loan's ID
	 * @returns {Promise} Resolves to the result of
	 *                    the request or to an error.
	 */
	var findOneLoan = (0, _curry2.default)(function (opts, body) {
	  return _request2.default.get(opts, _routes2.default.credit.loans.details(body.loanId), body);
	});
	
	/**
	 * `GET /credit/loans` OR `GET /credit/loans/:loanId`
	 *
	 * Returns the requested loan if the loan's ID is passed; otherwise returns all loans.
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 * @param {String} [body.loanId] The optional loan's ID
	 * @returns {Promise} Resolves to the result of
	 *                    the request or to an error.
	 */
	var findLoans = function findLoans(opts, body) {
	  return (0, _cond2.default)([[(0, _has2.default)('loanId'), findOneLoan(opts)], [_T2.default, findAllLoans(opts)]])(body);
	};
	
	/**
	 * `GET /credit/loans/:loanId/statements/daily`
	 *
	 * Returns the daily statements of the given loan
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 * @param {String} body.loanId The optional loan's ID
	 *
	 * @param {Number} [body.count] Pagination option to get a list of plans.
	 *                              Number of plans in a page
	 * @param {Number} [body.page] Pagination option for a list of plans.
	 *                             The page index.
	 *
	 * @returns {Promise} Resolves to the result of
	 *                    the request or to an error.
	 */
	var dailyStatement = function dailyStatement(opts, body) {
	  return _request2.default.get(opts, _routes2.default.credit.statements.daily(body.loanId), body);
	};
	
	/**
	 * `GET /credit/loans/:loanId/statements/monthly`
	 *
	 * Returns the monthly statements of the given loan
	 *
	 * @param {Object} opts An options params which
	 *                      is usually already bound
	 *                      by `connect` functions.
	 * @param {String} body.loanId The optional loan's ID
	 *
	 * @param {Number} [body.count] Pagination option to get a list of plans.
	 *                              Number of plans in a page
	 * @param {Number} [body.page] Pagination option for a list of plans.
	 *                             The page index.
	 *
	 * @returns {Promise} Resolves to the result of
	 *                    the request or to an error.
	 */
	var monthlyStatement = function monthlyStatement(opts, body) {
	  return _request2.default.get(opts, _routes2.default.credit.statements.monthly(body.loanId), body);
	};
	
	exports.default = {
	  creditLines: {
	    all: findAllCreditLines
	  },
	  proposals: {
	    findOne: findOneProposal,
	    create: createProposal,
	    accept: acceptProposal,
	    settlementForecast: settlementForecast
	  },
	  loans: {
	    all: findAllLoans,
	    find: findLoans
	  },
	  statements: {
	    findMonthly: monthlyStatement,
	    findDaily: dailyStatement
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mapObjIndexed = __webpack_require__(234);
	
	var _mapObjIndexed2 = _interopRequireDefault(_mapObjIndexed);
	
	var _map = __webpack_require__(17);
	
	var _map2 = _interopRequireDefault(_map);
	
	var _ifElse = __webpack_require__(32);
	
	var _ifElse2 = _interopRequireDefault(_ifElse);
	
	var _ = __webpack_require__(235);
	
	var _2 = _interopRequireDefault(_);
	
	var _prop = __webpack_require__(143);
	
	var _prop2 = _interopRequireDefault(_prop);
	
	var _pick = __webpack_require__(88);
	
	var _pick2 = _interopRequireDefault(_pick);
	
	var _keys = __webpack_require__(29);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _pipe = __webpack_require__(138);
	
	var _pipe2 = _interopRequireDefault(_pipe);
	
	var _validate = __webpack_require__(236);
	
	var _validate2 = _interopRequireDefault(_validate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name Validations
	 * @description This module handles needed validations
	 * @module validations
	 **/
	
	var pickExistentValidations = (0, _pipe2.default)(_keys2.default, _pick2.default);
	
	var validation = (0, _prop2.default)(_2.default, _validate2.default);
	
	var mapIfArray = function mapIfArray(func) {
	  return (0, _ifElse2.default)(Array.isArray, (0, _map2.default)(func), func);
	};
	
	var validateInput = function validateInput(value, name) {
	  return mapIfArray(validation(name))(value);
	};
	
	var applyValidations = (0, _mapObjIndexed2.default)(validateInput);
	
	/**
	 * This method validates the properties supplied in the object.
	 *
	 * @param {Object} [body] An object that contains all properties to
	 *                        be validated.
	 * @param {(String|String[]|Number|Number[])} [body.cnpj] A CNPF, or an array
	 *                                                        of CNPFs, to be
	 *                                                        validated.
	 * @param {(String|String[]|Number|Number[])} [body.cpf] A CPF, or an array of
	 *                                                       CPFs, to be
	 *                                                       validated.
	 * @param {(String|String[]|Number|Number[])} [body.ddd] A DDD, or an array of
	 *                                                       DDDs, to be validated.
	 * @param {(String|String[]|Number|Number[])} [body.zipcode] A zipcode, or an
	 *                                                           array of zipcodes,
	 *                                                           to be validated.
	 * @param {(String|String[]|Number|Number[])} [body.phone] A phone number, or
	 *                                                         an array of phones,
	 *                                                         to be validated.
	 *
	 *
	 * @param {Object|Object[]} [body.card] A card, or an array of cards, to be
	 *                                      validated.
	 * @param {String} [body.card.card_holder_name] The card's holder name.
	 * @param {(String|Number)} [body.card.card_number] The card's number.
	 * @param {(String|Number)} [body.card.card_cvv] The card's CVV.
	 * @param {(String|Number)} [body.card.card_expiration_date] The card's
	 *                                                           expiratation date.
	 *
	 * @returns {Object} An object that returns each of the supplied properties
	 *                   with true or false, indicating if the supplied value is valid
	 *                   or invalid.
	 **/
	var validate = (0, _pipe2.default)(pickExistentValidations(_validate2.default), applyValidations);
	
	exports.default = validate;
	module.exports = exports['default'];

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	var _curry2 = __webpack_require__(5);
	var _reduce = __webpack_require__(22);
	var keys = __webpack_require__(29);
	
	
	/**
	 * An Object-specific version of `map`. The function is applied to three
	 * arguments: *(value, key, obj)*. If only the value is significant, use
	 * `map` instead.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.9.0
	 * @category Object
	 * @sig ((*, String, Object) -> *) -> Object -> Object
	 * @param {Function} fn
	 * @param {Object} obj
	 * @return {Object}
	 * @see R.map
	 * @example
	 *
	 *      var values = { x: 1, y: 2, z: 3 };
	 *      var prependKeyAndDouble = (num, key, obj) => key + (num * 2);
	 *
	 *      R.mapObjIndexed(prependKeyAndDouble, values); //=> { x: 'x2', y: 'y4', z: 'z6' }
	 */
	module.exports = _curry2(function mapObjIndexed(fn, obj) {
	  return _reduce(function(acc, key) {
	    acc[key] = fn(obj[key], key, obj);
	    return acc;
	  }, {}, keys(obj));
	});


/***/ },
/* 235 */
/***/ function(module, exports) {

	/**
	 * A special placeholder value used to specify "gaps" within curried functions,
	 * allowing partial application of any combination of arguments, regardless of
	 * their positions.
	 *
	 * If `g` is a curried ternary function and `_` is `R.__`, the following are
	 * equivalent:
	 *
	 *   - `g(1, 2, 3)`
	 *   - `g(_, 2, 3)(1)`
	 *   - `g(_, _, 3)(1)(2)`
	 *   - `g(_, _, 3)(1, 2)`
	 *   - `g(_, 2, _)(1, 3)`
	 *   - `g(_, 2)(1)(3)`
	 *   - `g(_, 2)(1, 3)`
	 *   - `g(_, 2)(_, 3)(1)`
	 *
	 * @constant
	 * @memberOf R
	 * @since v0.6.0
	 * @category Function
	 * @example
	 *
	 *      var greet = R.replace('{name}', R.__, 'Hello, {name}!');
	 *      greet('Alice'); //=> 'Hello, Alice!'
	 */
	module.exports = {'@@functional/placeholder': true};


/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _anyPass = __webpack_require__(237);
	
	var _anyPass2 = _interopRequireDefault(_anyPass);
	
	var _cnpjAndCpf = __webpack_require__(238);
	
	var _email = __webpack_require__(254);
	
	var _email2 = _interopRequireDefault(_email);
	
	var _card = __webpack_require__(258);
	
	var _card2 = _interopRequireDefault(_card);
	
	var _numberSize = __webpack_require__(286);
	
	var _numberSize2 = _interopRequireDefault(_numberSize);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ddd = (0, _numberSize2.default)(2);
	var phone = (0, _anyPass2.default)([(0, _numberSize2.default)(8), (0, _numberSize2.default)(9)]);
	var zipcode = (0, _numberSize2.default)(8);
	
	exports.default = {
	  card: _card2.default,
	  cnpj: _cnpjAndCpf.cnpj,
	  cpf: _cnpjAndCpf.cpf,
	  ddd: ddd,
	  email: _email2.default,
	  phone: phone,
	  zipcode: zipcode
	};
	module.exports = exports['default'];

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	var _curry1 = __webpack_require__(6);
	var curryN = __webpack_require__(14);
	var max = __webpack_require__(46);
	var pluck = __webpack_require__(146);
	var reduce = __webpack_require__(47);
	
	
	/**
	 * Takes a list of predicates and returns a predicate that returns true for a
	 * given list of arguments if at least one of the provided predicates is
	 * satisfied by those arguments.
	 *
	 * The function returned is a curried function whose arity matches that of the
	 * highest-arity predicate.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.9.0
	 * @category Logic
	 * @sig [(*... -> Boolean)] -> (*... -> Boolean)
	 * @param {Array} preds
	 * @return {Function}
	 * @see R.allPass
	 * @example
	 *
	 *      var gte = R.anyPass([R.gt, R.equals]);
	 *
	 *      gte(3, 2); //=> true
	 *      gte(2, 2); //=> true
	 *      gte(2, 3); //=> false
	 */
	module.exports = _curry1(function anyPass(preds) {
	  return curryN(reduce(max, 0, pluck('length', preds)), function() {
	    var idx = 0;
	    var len = preds.length;
	    while (idx < len) {
	      if (preds[idx].apply(this, arguments)) {
	        return true;
	      }
	      idx += 1;
	    }
	    return false;
	  });
	});


/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.cpf = exports.cnpj = undefined;
	
	var _both = __webpack_require__(39);
	
	var _both2 = _interopRequireDefault(_both);
	
	var _toString = __webpack_require__(160);
	
	var _toString2 = _interopRequireDefault(_toString);
	
	var _allPass = __webpack_require__(239);
	
	var _allPass2 = _interopRequireDefault(_allPass);
	
	var _ap = __webpack_require__(43);
	
	var _ap2 = _interopRequireDefault(_ap);
	
	var _apply = __webpack_require__(145);
	
	var _apply2 = _interopRequireDefault(_apply);
	
	var _nth = __webpack_require__(240);
	
	var _nth2 = _interopRequireDefault(_nth);
	
	var _subtract = __webpack_require__(241);
	
	var _subtract2 = _interopRequireDefault(_subtract);
	
	var _equals = __webpack_require__(120);
	
	var _equals2 = _interopRequireDefault(_equals);
	
	var _when = __webpack_require__(153);
	
	var _when2 = _interopRequireDefault(_when);
	
	var _modulo = __webpack_require__(242);
	
	var _modulo2 = _interopRequireDefault(_modulo);
	
	var _ = __webpack_require__(235);
	
	var _2 = _interopRequireDefault(_);
	
	var _multiply = __webpack_require__(243);
	
	var _multiply2 = _interopRequireDefault(_multiply);
	
	var _split = __webpack_require__(244);
	
	var _split2 = _interopRequireDefault(_split);
	
	var _length = __webpack_require__(91);
	
	var _length2 = _interopRequireDefault(_length);
	
	var _take = __webpack_require__(246);
	
	var _take2 = _interopRequireDefault(_take);
	
	var _sum = __webpack_require__(249);
	
	var _sum2 = _interopRequireDefault(_sum);
	
	var _pipe = __webpack_require__(138);
	
	var _pipe2 = _interopRequireDefault(_pipe);
	
	var _isEmpty = __webpack_require__(148);
	
	var _isEmpty2 = _interopRequireDefault(_isEmpty);
	
	var _either = __webpack_require__(251);
	
	var _either2 = _interopRequireDefault(_either);
	
	var _complement = __webpack_require__(151);
	
	var _complement2 = _interopRequireDefault(_complement);
	
	var _replace = __webpack_require__(159);
	
	var _replace2 = _interopRequireDefault(_replace);
	
	var _map = __webpack_require__(17);
	
	var _map2 = _interopRequireDefault(_map);
	
	var _addIndex = __webpack_require__(253);
	
	var _addIndex2 = _interopRequireDefault(_addIndex);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// CNPJ = String of length 14
	// CPF = String of length 11
	// ID = CNPJ or CPF
	// RAW_ID = ID before special characters cleanup
	// DIGIT = Number from 0 to 9
	
	var repeatedNumberRegex = /^(.)\1+$/;
	
	var mapIndexed = (0, _addIndex2.default)(_map2.default);
	
	var weightMasks = {
	  // for cpf
	  9: [10, 9, 8, 7, 6, 5, 4, 3, 2],
	  10: [11, 10, 9, 8, 7, 6, 5, 4, 3, 2],
	  // for cnpj
	  12: [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2],
	  13: [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
	
	  // String -> String
	};var clean = (0, _replace2.default)(/[^\d]+/g, '');
	
	// [String] -> ID -> Boolean
	var hasOnlyOneNumber = function hasOnlyOneNumber(subject) {
	  return repeatedNumberRegex.test(subject);
	};
	
	// ID -> Boolean
	var hasValidForm = (0, _complement2.default)((0, _either2.default)(_isEmpty2.default, hasOnlyOneNumber));
	
	// [Number] -> ID -> DIGIT
	var generateDigitWithMask = function generateDigitWithMask(mask) {
	  return (0, _pipe2.default)((0, _take2.default)((0, _length2.default)(mask)), (0, _split2.default)(''), mapIndexed(function (el, i) {
	    return el * mask[i];
	  }), _sum2.default, (0, _multiply2.default)(_2.default, 10), (0, _modulo2.default)(_2.default, 11), (0, _when2.default)((0, _equals2.default)(_2.default, 10), (0, _subtract2.default)(10, _2.default)));
	};
	
	// Number -> ID -> DIGIT
	var digit = function digit(index) {
	  return (0, _pipe2.default)((0, _nth2.default)(index), Number);
	};
	
	// Number -> ID -> Boolean
	var validateDigit = function validateDigit(index) {
	  return function (subject) {
	    return (0, _apply2.default)(_equals2.default, (0, _ap2.default)([digit(index), generateDigitWithMask(weightMasks[index], index)], [subject]));
	  };
	};
	
	// [Number] -> ID -> [Number] -> ID -> Boolean
	var validateDigits = (0, _pipe2.default)((0, _ap2.default)([validateDigit]), _allPass2.default);
	
	// [Number] -> ID -> Boolean
	var validateId = function validateId(indexes) {
	  return (0, _pipe2.default)(_toString2.default, clean, (0, _both2.default)(hasValidForm, validateDigits(indexes)));
	};
	
	// ID -> Boolean
	var cnpj = exports.cnpj = validateId([12, 13]);
	
	// ID -> Boolean
	var cpf = exports.cpf = validateId([9, 10]);

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	var _curry1 = __webpack_require__(6);
	var curryN = __webpack_require__(14);
	var max = __webpack_require__(46);
	var pluck = __webpack_require__(146);
	var reduce = __webpack_require__(47);
	
	
	/**
	 * Takes a list of predicates and returns a predicate that returns true for a
	 * given list of arguments if every one of the provided predicates is satisfied
	 * by those arguments.
	 *
	 * The function returned is a curried function whose arity matches that of the
	 * highest-arity predicate.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.9.0
	 * @category Logic
	 * @sig [(*... -> Boolean)] -> (*... -> Boolean)
	 * @param {Array} preds
	 * @return {Function}
	 * @see R.anyPass
	 * @example
	 *
	 *      var isQueen = R.propEq('rank', 'Q');
	 *      var isSpade = R.propEq('suit', '♠︎');
	 *      var isQueenOfSpades = R.allPass([isQueen, isSpade]);
	 *
	 *      isQueenOfSpades({rank: 'Q', suit: '♣︎'}); //=> false
	 *      isQueenOfSpades({rank: 'Q', suit: '♠︎'}); //=> true
	 */
	module.exports = _curry1(function allPass(preds) {
	  return curryN(reduce(max, 0, pluck('length', preds)), function() {
	    var idx = 0;
	    var len = preds.length;
	    while (idx < len) {
	      if (!preds[idx].apply(this, arguments)) {
	        return false;
	      }
	      idx += 1;
	    }
	    return true;
	  });
	});


/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	var _curry2 = __webpack_require__(5);
	var _isString = __webpack_require__(26);
	
	
	/**
	 * Returns the nth element of the given list or string. If n is negative the
	 * element at index length + n is returned.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig Number -> [a] -> a | Undefined
	 * @sig Number -> String -> String
	 * @param {Number} offset
	 * @param {*} list
	 * @return {*}
	 * @example
	 *
	 *      var list = ['foo', 'bar', 'baz', 'quux'];
	 *      R.nth(1, list); //=> 'bar'
	 *      R.nth(-1, list); //=> 'quux'
	 *      R.nth(-99, list); //=> undefined
	 *
	 *      R.nth(2, 'abc'); //=> 'c'
	 *      R.nth(3, 'abc'); //=> ''
	 */
	module.exports = _curry2(function nth(offset, list) {
	  var idx = offset < 0 ? list.length + offset : offset;
	  return _isString(list) ? list.charAt(idx) : list[idx];
	});


/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	var _curry2 = __webpack_require__(5);
	
	
	/**
	 * Subtracts its second argument from its first argument.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Math
	 * @sig Number -> Number -> Number
	 * @param {Number} a The first value.
	 * @param {Number} b The second value.
	 * @return {Number} The result of `a - b`.
	 * @see R.add
	 * @example
	 *
	 *      R.subtract(10, 8); //=> 2
	 *
	 *      var minus5 = R.subtract(R.__, 5);
	 *      minus5(17); //=> 12
	 *
	 *      var complementaryAngle = R.subtract(90);
	 *      complementaryAngle(30); //=> 60
	 *      complementaryAngle(72); //=> 18
	 */
	module.exports = _curry2(function subtract(a, b) {
	  return Number(a) - Number(b);
	});


/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	var _curry2 = __webpack_require__(5);
	
	
	/**
	 * Divides the first parameter by the second and returns the remainder. Note
	 * that this function preserves the JavaScript-style behavior for modulo. For
	 * mathematical modulo see `mathMod`.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.1
	 * @category Math
	 * @sig Number -> Number -> Number
	 * @param {Number} a The value to the divide.
	 * @param {Number} b The pseudo-modulus
	 * @return {Number} The result of `b % a`.
	 * @see R.mathMod
	 * @example
	 *
	 *      R.modulo(17, 3); //=> 2
	 *      // JS behavior:
	 *      R.modulo(-17, 3); //=> -2
	 *      R.modulo(17, -3); //=> 2
	 *
	 *      var isOdd = R.modulo(R.__, 2);
	 *      isOdd(42); //=> 0
	 *      isOdd(21); //=> 1
	 */
	module.exports = _curry2(function modulo(a, b) { return a % b; });


/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	var _curry2 = __webpack_require__(5);
	
	
	/**
	 * Multiplies two numbers. Equivalent to `a * b` but curried.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Math
	 * @sig Number -> Number -> Number
	 * @param {Number} a The first value.
	 * @param {Number} b The second value.
	 * @return {Number} The result of `a * b`.
	 * @see R.divide
	 * @example
	 *
	 *      var double = R.multiply(2);
	 *      var triple = R.multiply(3);
	 *      double(3);       //=>  6
	 *      triple(4);       //=> 12
	 *      R.multiply(2, 5);  //=> 10
	 */
	module.exports = _curry2(function multiply(a, b) { return a * b; });


/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	var invoker = __webpack_require__(245);
	
	
	/**
	 * Splits a string into an array of strings based on the given
	 * separator.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category String
	 * @sig (String | RegExp) -> String -> [String]
	 * @param {String|RegExp} sep The pattern.
	 * @param {String} str The string to separate into an array.
	 * @return {Array} The array of strings from `str` separated by `str`.
	 * @see R.join
	 * @example
	 *
	 *      var pathComponents = R.split('/');
	 *      R.tail(pathComponents('/usr/local/bin/node')); //=> ['usr', 'local', 'bin', 'node']
	 *
	 *      R.split('.', 'a.b.c.xyz.d'); //=> ['a', 'b', 'c', 'xyz', 'd']
	 */
	module.exports = invoker(1, 'split');


/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	var _curry2 = __webpack_require__(5);
	var _isFunction = __webpack_require__(40);
	var _slice = __webpack_require__(11);
	var curryN = __webpack_require__(14);
	var toString = __webpack_require__(160);
	
	
	/**
	 * Turns a named method with a specified arity into a function that can be
	 * called directly supplied with arguments and a target object.
	 *
	 * The returned function is curried and accepts `arity + 1` parameters where
	 * the final parameter is the target object.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Function
	 * @sig Number -> String -> (a -> b -> ... -> n -> Object -> *)
	 * @param {Number} arity Number of arguments the returned function should take
	 *        before the target object.
	 * @param {String} method Name of the method to call.
	 * @return {Function} A new curried function.
	 * @example
	 *
	 *      var sliceFrom = R.invoker(1, 'slice');
	 *      sliceFrom(6, 'abcdefghijklm'); //=> 'ghijklm'
	 *      var sliceFrom6 = R.invoker(2, 'slice')(6);
	 *      sliceFrom6(8, 'abcdefghijklm'); //=> 'gh'
	 */
	module.exports = _curry2(function invoker(arity, method) {
	  return curryN(arity + 1, function() {
	    var target = arguments[arity];
	    if (target != null && _isFunction(target[method])) {
	      return target[method].apply(target, _slice(arguments, 0, arity));
	    }
	    throw new TypeError(toString(target) + ' does not have a method named "' + method + '"');
	  });
	});


/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	var _curry2 = __webpack_require__(5);
	var _dispatchable = __webpack_require__(18);
	var _xtake = __webpack_require__(247);
	var slice = __webpack_require__(142);
	
	
	/**
	 * Returns the first `n` elements of the given list, string, or
	 * transducer/transformer (or object with a `take` method).
	 *
	 * Dispatches to the `take` method of the second argument, if present.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig Number -> [a] -> [a]
	 * @sig Number -> String -> String
	 * @param {Number} n
	 * @param {*} list
	 * @return {*}
	 * @see R.drop
	 * @example
	 *
	 *      R.take(1, ['foo', 'bar', 'baz']); //=> ['foo']
	 *      R.take(2, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
	 *      R.take(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
	 *      R.take(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
	 *      R.take(3, 'ramda');               //=> 'ram'
	 *
	 *      var personnel = [
	 *        'Dave Brubeck',
	 *        'Paul Desmond',
	 *        'Eugene Wright',
	 *        'Joe Morello',
	 *        'Gerry Mulligan',
	 *        'Bob Bates',
	 *        'Joe Dodge',
	 *        'Ron Crotty'
	 *      ];
	 *
	 *      var takeFive = R.take(5);
	 *      takeFive(personnel);
	 *      //=> ['Dave Brubeck', 'Paul Desmond', 'Eugene Wright', 'Joe Morello', 'Gerry Mulligan']
	 */
	module.exports = _curry2(_dispatchable('take', _xtake, function take(n, xs) {
	  return slice(0, n < 0 ? Infinity : n, xs);
	}));


/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	var _curry2 = __webpack_require__(5);
	var _reduced = __webpack_require__(248);
	var _xfBase = __webpack_require__(28);
	
	module.exports = (function() {
	  function XTake(n, xf) {
	    this.xf = xf;
	    this.n = n;
	    this.i = 0;
	  }
	  XTake.prototype['@@transducer/init'] = _xfBase.init;
	  XTake.prototype['@@transducer/result'] = _xfBase.result;
	  XTake.prototype['@@transducer/step'] = function(result, input) {
	    this.i += 1;
	    var ret = this.n === 0 ? result : this.xf['@@transducer/step'](result, input);
	    return this.i >= this.n ? _reduced(ret) : ret;
	  };
	
	  return _curry2(function _xtake(n, xf) { return new XTake(n, xf); });
	}());


/***/ },
/* 248 */
/***/ function(module, exports) {

	module.exports = function _reduced(x) {
	  return x && x['@@transducer/reduced'] ? x :
	    {
	      '@@transducer/value': x,
	      '@@transducer/reduced': true
	    };
	};


/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	var add = __webpack_require__(250);
	var reduce = __webpack_require__(47);
	
	
	/**
	 * Adds together all the elements of a list.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Math
	 * @sig [Number] -> Number
	 * @param {Array} list An array of numbers
	 * @return {Number} The sum of all the numbers in the list.
	 * @see R.reduce
	 * @example
	 *
	 *      R.sum([2,4,6,8,100,1]); //=> 121
	 */
	module.exports = reduce(add, 0);


/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	var _curry2 = __webpack_require__(5);
	
	
	/**
	 * Adds two values.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Math
	 * @sig Number -> Number -> Number
	 * @param {Number} a
	 * @param {Number} b
	 * @return {Number}
	 * @see R.subtract
	 * @example
	 *
	 *      R.add(2, 3);       //=>  5
	 *      R.add(7)(10);      //=> 17
	 */
	module.exports = _curry2(function add(a, b) {
	  return Number(a) + Number(b);
	});


/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	var _curry2 = __webpack_require__(5);
	var _isFunction = __webpack_require__(40);
	var lift = __webpack_require__(41);
	var or = __webpack_require__(252);
	
	
	/**
	 * A function wrapping calls to the two functions in an `||` operation,
	 * returning the result of the first function if it is truth-y and the result
	 * of the second function otherwise. Note that this is short-circuited,
	 * meaning that the second function will not be invoked if the first returns a
	 * truth-y value.
	 *
	 * In addition to functions, `R.either` also accepts any fantasy-land compatible
	 * applicative functor.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.12.0
	 * @category Logic
	 * @sig (*... -> Boolean) -> (*... -> Boolean) -> (*... -> Boolean)
	 * @param {Function} f a predicate
	 * @param {Function} g another predicate
	 * @return {Function} a function that applies its arguments to `f` and `g` and `||`s their outputs together.
	 * @see R.or
	 * @example
	 *
	 *      var gt10 = x => x > 10;
	 *      var even = x => x % 2 === 0;
	 *      var f = R.either(gt10, even);
	 *      f(101); //=> true
	 *      f(8); //=> true
	 */
	module.exports = _curry2(function either(f, g) {
	  return _isFunction(f) ?
	    function _either() {
	      return f.apply(this, arguments) || g.apply(this, arguments);
	    } :
	    lift(or)(f, g);
	});


/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	var _curry2 = __webpack_require__(5);
	
	
	/**
	 * Returns `true` if one or both of its arguments are `true`. Returns `false`
	 * if both arguments are `false`.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Logic
	 * @sig * -> * -> *
	 * @param {Boolean} a A boolean value
	 * @param {Boolean} b A boolean value
	 * @return {Boolean} `true` if one or both arguments are `true`, `false` otherwise
	 * @see R.either
	 * @example
	 *
	 *      R.or(true, true); //=> true
	 *      R.or(true, false); //=> true
	 *      R.or(false, true); //=> true
	 *      R.or(false, false); //=> false
	 */
	module.exports = _curry2(function or(a, b) {
	  return a || b;
	});


/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	var _concat = __webpack_require__(44);
	var _curry1 = __webpack_require__(6);
	var _slice = __webpack_require__(11);
	var curryN = __webpack_require__(14);
	
	
	/**
	 * Creates a new list iteration function from an existing one by adding two new
	 * parameters to its callback function: the current index, and the entire list.
	 *
	 * This would turn, for instance, Ramda's simple `map` function into one that
	 * more closely resembles `Array.prototype.map`. Note that this will only work
	 * for functions in which the iteration callback function is the first
	 * parameter, and where the list is the last parameter. (This latter might be
	 * unimportant if the list parameter is not used.)
	 *
	 * @func
	 * @memberOf R
	 * @since v0.15.0
	 * @category Function
	 * @category List
	 * @sig ((a ... -> b) ... -> [a] -> *) -> (a ..., Int, [a] -> b) ... -> [a] -> *)
	 * @param {Function} fn A list iteration function that does not pass index or list to its callback
	 * @return {Function} An altered list iteration function that passes (item, index, list) to its callback
	 * @example
	 *
	 *      var mapIndexed = R.addIndex(R.map);
	 *      mapIndexed((val, idx) => idx + '-' + val, ['f', 'o', 'o', 'b', 'a', 'r']);
	 *      //=> ['0-f', '1-o', '2-o', '3-b', '4-a', '5-r']
	 */
	module.exports = _curry1(function addIndex(fn) {
	  return curryN(fn.length, function() {
	    var idx = 0;
	    var origFn = arguments[0];
	    var list = arguments[arguments.length - 1];
	    var args = _slice(arguments);
	    args[0] = function() {
	      var result = origFn.apply(this, _concat(arguments, [idx, list]));
	      idx += 1;
	      return result;
	    };
	    return fn.apply(this, args);
	  });
	});


/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _test = __webpack_require__(255);
	
	var _test2 = _interopRequireDefault(_test);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// eslint-disable-next-line no-useless-escape
	var validate = (0, _test2.default)(/^([a-zA-Z0-9_\.\-\+])+@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/);
	
	exports.default = validate;
	module.exports = exports['default'];

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	var _cloneRegExp = __webpack_require__(256);
	var _curry2 = __webpack_require__(5);
	var _isRegExp = __webpack_require__(257);
	var toString = __webpack_require__(160);
	
	
	/**
	 * Determines whether a given string matches a given regular expression.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.12.0
	 * @category String
	 * @sig RegExp -> String -> Boolean
	 * @param {RegExp} pattern
	 * @param {String} str
	 * @return {Boolean}
	 * @see R.match
	 * @example
	 *
	 *      R.test(/^x/, 'xyz'); //=> true
	 *      R.test(/^y/, 'xyz'); //=> false
	 */
	module.exports = _curry2(function test(pattern, str) {
	  if (!_isRegExp(pattern)) {
	    throw new TypeError('‘test’ requires a value of type RegExp as its first argument; received ' + toString(pattern));
	  }
	  return _cloneRegExp(pattern).test(str);
	});


/***/ },
/* 256 */
/***/ function(module, exports) {

	module.exports = function _cloneRegExp(pattern) {
	  return new RegExp(pattern.source, (pattern.global     ? 'g' : '') +
	                                    (pattern.ignoreCase ? 'i' : '') +
	                                    (pattern.multiline  ? 'm' : '') +
	                                    (pattern.sticky     ? 'y' : '') +
	                                    (pattern.unicode    ? 'u' : ''));
	};


/***/ },
/* 257 */
/***/ function(module, exports) {

	module.exports = function _isRegExp(x) {
	  return Object.prototype.toString.call(x) === '[object RegExp]';
	};


/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ap = __webpack_require__(43);
	
	var _ap2 = _interopRequireDefault(_ap);
	
	var _omit = __webpack_require__(117);
	
	var _omit2 = _interopRequireDefault(_omit);
	
	var _apply = __webpack_require__(145);
	
	var _apply2 = _interopRequireDefault(_apply);
	
	var _applySpec = __webpack_require__(144);
	
	var _applySpec2 = _interopRequireDefault(_applySpec);
	
	var _prop = __webpack_require__(143);
	
	var _prop2 = _interopRequireDefault(_prop);
	
	var _ = __webpack_require__(235);
	
	var _2 = _interopRequireDefault(_);
	
	var _has = __webpack_require__(38);
	
	var _has2 = _interopRequireDefault(_has);
	
	var _not = __webpack_require__(152);
	
	var _not2 = _interopRequireDefault(_not);
	
	var _pipe = __webpack_require__(138);
	
	var _pipe2 = _interopRequireDefault(_pipe);
	
	var _brand = __webpack_require__(259);
	
	var _brand2 = _interopRequireDefault(_brand);
	
	var _cvv = __webpack_require__(267);
	
	var _cvv2 = _interopRequireDefault(_cvv);
	
	var _cardNumber = __webpack_require__(271);
	
	var _cardNumber2 = _interopRequireDefault(_cardNumber);
	
	var _date = __webpack_require__(278);
	
	var _date2 = _interopRequireDefault(_date);
	
	var _holder = __webpack_require__(285);
	
	var _holder2 = _interopRequireDefault(_holder);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var validProps = ['card_holder_name', 'card_number', 'card_expiration_date', 'card_cvv'];
	
	var missingProps = function missingProps(card) {
	  var missing = (0, _pipe2.default)((0, _has2.default)(_2.default, card), _not2.default);
	  return validProps.filter(missing);
	};
	
	var hasCardNumber = (0, _has2.default)('card_number');
	
	var validDate = (0, _pipe2.default)((0, _prop2.default)('card_expiration_date'), _date2.default);
	
	var validHolder = (0, _pipe2.default)((0, _prop2.default)('card_holder_name'), _holder2.default);
	
	var validCardNumber = (0, _pipe2.default)((0, _prop2.default)('card_number'), _cardNumber2.default);
	
	var validCvv = function validCvv(brandName) {
	  return (0, _pipe2.default)((0, _prop2.default)('card_cvv'), (0, _cvv2.default)(brandName));
	};
	
	var getBrand = (0, _pipe2.default)((0, _prop2.default)('card_number'), _brand2.default);
	
	var validateAll = function validateAll(card) {
	  return (0, _applySpec2.default)({
	    brand: getBrand,
	    card_holder_name: validHolder,
	    card_number: validCardNumber,
	    card_expiration_date: validDate,
	    card_cvv: validCvv(getBrand(card))
	  })(card);
	};
	
	var validateExistentProps = function validateExistentProps(card) {
	  return (0, _apply2.default)(_omit2.default, (0, _ap2.default)([missingProps, validateAll], [card]));
	};
	
	var validate = function validate(card) {
	  if (hasCardNumber(card)) {
	    return validateExistentProps(card);
	  }
	  throw new Error('Missing card number');
	};
	
	exports.default = validate;
	module.exports = exports['default'];

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _always = __webpack_require__(37);
	
	var _always2 = _interopRequireDefault(_always);
	
	var _isEmpty = __webpack_require__(148);
	
	var _isEmpty2 = _interopRequireDefault(_isEmpty);
	
	var _ifElse = __webpack_require__(32);
	
	var _ifElse2 = _interopRequireDefault(_ifElse);
	
	var _toString = __webpack_require__(160);
	
	var _toString2 = _interopRequireDefault(_toString);
	
	var _defaultTo = __webpack_require__(260);
	
	var _defaultTo2 = _interopRequireDefault(_defaultTo);
	
	var _equals = __webpack_require__(120);
	
	var _equals2 = _interopRequireDefault(_equals);
	
	var _last = __webpack_require__(261);
	
	var _last2 = _interopRequireDefault(_last);
	
	var _find = __webpack_require__(262);
	
	var _find2 = _interopRequireDefault(_find);
	
	var _head = __webpack_require__(264);
	
	var _head2 = _interopRequireDefault(_head);
	
	var _toPairs = __webpack_require__(265);
	
	var _toPairs2 = _interopRequireDefault(_toPairs);
	
	var _pipe = __webpack_require__(138);
	
	var _pipe2 = _interopRequireDefault(_pipe);
	
	var _replace = __webpack_require__(159);
	
	var _replace2 = _interopRequireDefault(_replace);
	
	var _ = __webpack_require__(235);
	
	var _2 = _interopRequireDefault(_);
	
	var _map = __webpack_require__(17);
	
	var _map2 = _interopRequireDefault(_map);
	
	var _bins = __webpack_require__(266);
	
	var _bins2 = _interopRequireDefault(_bins);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mapBins = (0, _map2.default)(_2.default, _bins2.default);
	
	var clean = (0, _replace2.default)(/[^0-9]/g, '');
	
	var cardNumberMatchBins = function cardNumberMatchBins(cardNumber, brandBins) {
	  return brandBins.reduce(function (acc, start) {
	    if (cardNumber.startsWith(start)) {
	      return true;
	    }
	    return acc;
	  }, false);
	};
	
	var makeCardMatcher = function makeCardMatcher(cardNumber) {
	  return function (brandBins) {
	    return cardNumberMatchBins(cardNumber, brandBins);
	  };
	};
	
	var brand = (0, _pipe2.default)(makeCardMatcher, mapBins, _toPairs2.default, (0, _find2.default)((0, _pipe2.default)(_last2.default, (0, _equals2.default)(true))), (0, _defaultTo2.default)(['unknown']), _head2.default);
	
	exports.default = (0, _pipe2.default)(_toString2.default, clean, (0, _ifElse2.default)(_isEmpty2.default, (0, _always2.default)('unknown'), brand));
	module.exports = exports['default'];

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	var _curry2 = __webpack_require__(5);
	
	
	/**
	 * Returns the second argument if it is not `null`, `undefined` or `NaN`
	 * otherwise the first argument is returned.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.10.0
	 * @category Logic
	 * @sig a -> b -> a | b
	 * @param {a} val The default value.
	 * @param {b} val The value to return if it is not null or undefined
	 * @return {*} The the second value or the default value
	 * @example
	 *
	 *      var defaultTo42 = R.defaultTo(42);
	 *
	 *      defaultTo42(null);  //=> 42
	 *      defaultTo42(undefined);  //=> 42
	 *      defaultTo42('Ramda');  //=> 'Ramda'
	 *      defaultTo42(parseInt('string')); //=> 42
	 */
	module.exports = _curry2(function defaultTo(d, v) {
	  return v == null || v !== v ? d : v;
	});


/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	var nth = __webpack_require__(240);
	
	
	/**
	 * Returns the last element of the given list or string.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.4
	 * @category List
	 * @sig [a] -> a | Undefined
	 * @sig String -> String
	 * @param {*} list
	 * @return {*}
	 * @see R.init, R.head, R.tail
	 * @example
	 *
	 *      R.last(['fi', 'fo', 'fum']); //=> 'fum'
	 *      R.last([]); //=> undefined
	 *
	 *      R.last('abc'); //=> 'c'
	 *      R.last(''); //=> ''
	 */
	module.exports = nth(-1);


/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	var _curry2 = __webpack_require__(5);
	var _dispatchable = __webpack_require__(18);
	var _xfind = __webpack_require__(263);
	
	
	/**
	 * Returns the first element of the list which matches the predicate, or
	 * `undefined` if no element matches.
	 *
	 * Dispatches to the `find` method of the second argument, if present.
	 *
	 * Acts as a transducer if a transformer is given in list position.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig (a -> Boolean) -> [a] -> a | undefined
	 * @param {Function} fn The predicate function used to determine if the element is the
	 *        desired one.
	 * @param {Array} list The array to consider.
	 * @return {Object} The element found, or `undefined`.
	 * @see R.transduce
	 * @example
	 *
	 *      var xs = [{a: 1}, {a: 2}, {a: 3}];
	 *      R.find(R.propEq('a', 2))(xs); //=> {a: 2}
	 *      R.find(R.propEq('a', 4))(xs); //=> undefined
	 */
	module.exports = _curry2(_dispatchable('find', _xfind, function find(fn, list) {
	  var idx = 0;
	  var len = list.length;
	  while (idx < len) {
	    if (fn(list[idx])) {
	      return list[idx];
	    }
	    idx += 1;
	  }
	}));


/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	var _curry2 = __webpack_require__(5);
	var _reduced = __webpack_require__(248);
	var _xfBase = __webpack_require__(28);
	
	
	module.exports = (function() {
	  function XFind(f, xf) {
	    this.xf = xf;
	    this.f = f;
	    this.found = false;
	  }
	  XFind.prototype['@@transducer/init'] = _xfBase.init;
	  XFind.prototype['@@transducer/result'] = function(result) {
	    if (!this.found) {
	      result = this.xf['@@transducer/step'](result, void 0);
	    }
	    return this.xf['@@transducer/result'](result);
	  };
	  XFind.prototype['@@transducer/step'] = function(result, input) {
	    if (this.f(input)) {
	      this.found = true;
	      result = _reduced(this.xf['@@transducer/step'](result, input));
	    }
	    return result;
	  };
	
	  return _curry2(function _xfind(f, xf) { return new XFind(f, xf); });
	}());


/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	var nth = __webpack_require__(240);
	
	
	/**
	 * Returns the first element of the given list or string. In some libraries
	 * this function is named `first`.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig [a] -> a | Undefined
	 * @sig String -> String
	 * @param {Array|String} list
	 * @return {*}
	 * @see R.tail, R.init, R.last
	 * @example
	 *
	 *      R.head(['fi', 'fo', 'fum']); //=> 'fi'
	 *      R.head([]); //=> undefined
	 *
	 *      R.head('abc'); //=> 'a'
	 *      R.head(''); //=> ''
	 */
	module.exports = nth(0);


/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	var _curry1 = __webpack_require__(6);
	var _has = __webpack_require__(4);
	
	
	/**
	 * Converts an object into an array of key, value arrays. Only the object's
	 * own properties are used.
	 * Note that the order of the output array is not guaranteed to be consistent
	 * across different JS platforms.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.4.0
	 * @category Object
	 * @sig {String: *} -> [[String,*]]
	 * @param {Object} obj The object to extract from
	 * @return {Array} An array of key, value arrays from the object's own properties.
	 * @see R.fromPairs
	 * @example
	 *
	 *      R.toPairs({a: 1, b: 2, c: 3}); //=> [['a', 1], ['b', 2], ['c', 3]]
	 */
	module.exports = _curry1(function toPairs(obj) {
	  var pairs = [];
	  for (var prop in obj) {
	    if (_has(prop, obj)) {
	      pairs[pairs.length] = [prop, obj[prop]];
	    }
	  }
	  return pairs;
	});


/***/ },
/* 266 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var masterBegin = 222100;
	var masterEnd = 272099;
	var masterRangeLength = masterEnd - masterBegin + 1;
	var masterRange = new Array(masterRangeLength).map(function (item, index) {
	  return String(masterBegin + index);
	}); //eslint-disable-line
	
	exports.default = {
	  elo: ['401178', '401179', '431274', '438935', '451416', '457393', '457631', '457632', '498405', '498410', '498411', '498412', '498418', '498419', '498420', '498421', '498422', '498427', '498428', '498429', '498432', '498433', '498472', '498473', '498487', '498493', '498494', '498497', '498498', '504175', '506699', '506700', '506701', '506702', '506703', '506704', '506705', '506706', '506707', '506708', '506709', '506710', '506711', '506712', '506713', '506714', '506715', '506716', '506717', '506718', '506719', '506720', '506721', '506722', '506723', '506724', '506725', '506726', '506727', '506728', '506729', '506730', '506731', '506732', '506733', '506734', '506735', '506736', '506737', '506738', '506739', '506740', '506741', '506742', '506743', '506744', '506745', '506746', '506747', '506748', '506749', '506750', '506751', '506752', '506753', '506754', '506755', '506756', '506757', '506758', '506759', '506760', '506761', '506762', '506763', '506764', '506765', '506766', '506767', '506768', '506769', '506770', '506771', '506772', '506773', '506774', '506775', '506776', '506777', '506778', '509000', '509001', '509002', '509003', '509004', '509005', '509006', '509007', '509008', '509009', '509010', '509011', '509012', '509013', '509014', '509015', '509016', '509017', '509018', '509019', '509020', '509021', '509022', '509023', '509024', '509025', '509026', '509027', '509028', '509029', '509030', '509031', '509032', '509033', '509034', '509035', '509036', '509037', '509038', '509039', '509040', '509041', '509042', '509043', '509044', '509045', '509046', '509047', '509048', '509049', '509050', '509051', '509052', '509053', '509054', '509055', '509056', '509057', '509058', '509059', '509060', '509061', '509062', '509063', '509064', '509065', '509066', '509067', '509068', '509069', '509070', '509071', '509072', '509073', '509074', '509075', '509076', '509077', '509078', '509079', '509080', '509081', '509082', '509083', '509084', '509085', '509086', '509087', '509088', '509089', '509090', '509091', '509092', '509093', '509094', '509095', '509096', '509097', '509098', '509099', '509100', '509101', '509102', '509103', '509104', '509105', '509106', '509107', '509108', '509109', '509110', '509111', '509112', '509113', '509114', '509115', '509116', '509117', '509118', '509119', '509120', '509121', '509122', '509123', '509124', '509125', '509126', '509127', '509128', '509129', '509130', '509131', '509132', '509133', '509134', '509135', '509136', '509137', '509138', '509139', '509140', '509141', '509142', '509143', '509144', '509145', '509146', '509147', '509148', '509149', '509150', '509151', '509152', '509153', '509154', '509155', '509156', '509157', '509158', '509159', '509160', '509161', '509162', '509163', '509164', '509165', '509166', '509167', '509168', '509169', '509170', '509171', '509172', '509173', '509174', '509175', '509176', '509177', '509178', '509179', '509180', '509181', '509182', '509183', '509184', '509185', '509186', '509187', '509188', '509189', '509190', '509191', '509192', '509193', '509194', '509195', '509196', '509197', '509198', '509199', '509200', '509201', '509202', '509203', '509204', '509205', '509206', '509207', '509208', '509209', '509210', '509211', '509212', '509213', '509214', '509215', '509216', '509217', '509218', '509219', '509220', '509221', '509222', '509223', '509224', '509225', '509226', '509227', '509228', '509229', '509230', '509231', '509232', '509233', '509234', '509235', '509236', '509237', '509238', '509239', '509240', '509241', '509242', '509243', '509244', '509245', '509246', '509247', '509248', '509249', '509250', '509251', '509252', '509253', '509254', '509255', '509256', '509257', '509258', '509259', '509260', '509261', '509262', '509263', '509264', '509265', '509266', '509267', '509268', '509269', '509270', '509271', '509272', '509273', '509274', '509275', '509276', '509277', '509278', '509279', '509280', '509281', '509282', '509283', '509284', '509285', '509286', '509287', '509288', '509289', '509290', '509291', '509292', '509293', '509294', '509295', '509296', '509297', '509298', '509299', '509300', '509301', '509302', '509303', '509304', '509305', '509306', '509307', '509308', '509309', '509310', '509311', '509312', '509313', '509314', '509315', '509316', '509317', '509318', '509319', '509320', '509321', '509322', '509323', '509324', '509325', '509326', '509327', '509328', '509329', '509330', '509331', '509332', '509333', '509334', '509335', '509336', '509337', '509338', '509339', '509340', '509341', '509342', '509343', '509344', '509345', '509346', '509347', '509348', '509349', '509350', '509351', '509352', '509353', '509354', '509355', '509356', '509357', '509358', '509359', '509360', '509361', '509362', '509363', '509364', '509365', '509366', '509367', '509368', '509369', '509370', '509371', '509372', '509373', '509374', '509375', '509376', '509377', '509378', '509379', '509380', '509381', '509382', '509383', '509384', '509385', '509386', '509387', '509388', '509389', '509390', '509391', '509392', '509393', '509394', '509395', '509396', '509397', '509398', '509399', '509400', '509401', '509402', '509403', '509404', '509405', '509406', '509407', '509408', '509409', '509410', '509411', '509412', '509413', '509414', '509415', '509416', '509417', '509418', '509419', '509420', '509421', '509422', '509423', '509424', '509425', '509426', '509427', '509428', '509429', '509430', '509431', '509432', '509433', '509434', '509435', '509436', '509437', '509438', '509439', '509440', '509441', '509442', '509443', '509444', '509445', '509446', '509447', '509448', '509449', '509450', '509451', '509452', '509453', '509454', '509455', '509456', '509457', '509458', '509459', '509460', '509461', '509462', '509463', '509464', '509465', '509466', '509467', '509468', '509469', '509470', '509471', '509472', '509473', '509474', '509475', '509476', '509477', '509478', '509479', '509480', '509481', '509482', '509483', '509484', '509485', '509486', '509487', '509488', '509489', '509490', '509491', '509492', '509493', '509494', '509495', '509496', '509497', '509498', '509499', '509500', '509501', '509502', '509503', '509504', '509505', '509506', '509507', '509508', '509509', '509510', '509511', '509512', '509513', '509514', '509515', '509516', '509517', '509518', '509519', '509520', '509521', '509522', '509523', '509524', '509525', '509526', '509527', '509528', '509529', '509530', '509531', '509532', '509533', '509534', '509535', '509536', '509537', '509538', '509539', '509540', '509541', '509542', '509543', '509544', '509545', '509546', '509547', '509548', '509549', '509550', '509551', '509552', '509553', '509554', '509555', '509556', '509557', '509558', '509559', '509560', '509561', '509562', '509563', '509564', '509565', '509566', '509567', '509568', '509569', '509570', '509571', '509572', '509573', '509574', '509575', '509576', '509577', '509578', '509579', '509580', '509581', '509582', '509583', '509584', '509585', '509586', '509587', '509588', '509589', '509590', '509591', '509592', '509593', '509594', '509595', '509596', '509597', '509598', '509599', '509600', '509601', '509602', '509603', '509604', '509605', '509606', '509607', '509608', '509609', '509610', '509611', '509612', '509613', '509614', '509615', '509616', '509617', '509618', '509619', '509620', '509621', '509622', '509623', '509624', '509625', '509626', '509627', '509628', '509629', '509630', '509631', '509632', '509633', '509634', '509635', '509636', '509637', '509638', '509639', '509640', '509641', '509642', '509643', '509644', '509645', '509646', '509647', '509648', '509649', '509650', '509651', '509652', '509653', '509654', '509655', '509656', '509657', '509658', '509659', '509660', '509661', '509662', '509663', '509664', '509665', '509666', '509667', '509668', '509669', '509670', '509671', '509672', '509673', '509674', '509675', '509676', '509677', '509678', '509679', '509680', '509681', '509682', '509683', '509684', '509685', '509686', '509687', '509688', '509689', '509690', '509691', '509692', '509693', '509694', '509695', '509696', '509697', '509698', '509699', '509700', '509701', '509702', '509703', '509704', '509705', '509706', '509707', '509708', '509709', '509710', '509711', '509712', '509713', '509714', '509715', '509716', '509717', '509718', '509719', '509720', '509721', '509722', '509723', '509724', '509725', '509726', '509727', '509728', '509729', '509730', '509731', '509732', '509733', '509734', '509735', '509736', '509737', '509738', '509739', '509740', '509741', '509742', '509743', '509744', '509745', '509746', '509747', '509748', '509749', '509750', '509751', '509752', '509753', '509754', '509755', '509756', '509757', '509758', '509759', '509760', '509761', '509762', '509763', '509764', '509765', '509766', '509767', '509768', '509769', '509770', '509771', '509772', '509773', '509774', '509775', '509776', '509777', '509778', '509779', '509780', '509781', '509782', '509783', '509784', '509785', '509786', '509787', '509788', '509789', '509790', '509791', '509792', '509793', '509794', '509795', '509796', '509797', '509798', '509799', '509800', '509801', '509802', '509803', '509804', '509805', '509806', '509807', '509808', '509809', '509810', '509811', '509812', '509813', '509814', '509815', '509816', '509817', '509818', '509819', '509820', '509821', '509822', '509823', '509824', '509825', '509826', '509827', '509828', '509829', '509830', '509831', '509832', '509833', '509834', '509835', '509836', '509837', '509838', '509839', '509840', '509841', '509842', '509843', '509844', '509845', '509846', '509847', '509848', '509849', '509850', '509851', '509852', '509853', '509854', '509855', '509856', '509857', '509858', '509859', '509860', '509861', '509862', '509863', '509864', '509865', '509866', '509867', '509868', '509869', '509870', '509871', '509872', '509873', '509874', '509875', '509876', '509877', '509878', '509879', '509880', '509881', '509882', '509883', '509884', '509885', '509886', '509887', '509888', '509889', '509890', '509891', '509892', '509893', '509894', '509895', '509896', '509897', '509898', '509899', '509900', '509901', '509902', '509903', '509904', '509905', '509906', '509907', '509908', '509909', '509910', '509911', '509912', '509913', '509914', '509915', '509916', '509917', '509918', '509919', '509920', '509921', '509922', '509923', '509924', '509925', '509926', '509927', '509928', '509929', '509930', '509931', '509932', '509933', '509934', '509935', '509936', '509937', '509938', '509939', '509940', '509941', '509942', '509943', '509944', '509945', '509946', '509947', '509948', '509949', '509950', '509951', '509952', '509953', '509954', '509955', '509956', '509957', '509958', '509959', '509960', '509961', '509962', '509963', '509964', '509965', '509966', '509967', '509968', '509969', '509970', '509971', '509972', '509973', '509974', '509975', '509976', '509977', '509978', '509979', '509980', '509981', '509982', '509983', '509984', '509985', '509986', '509987', '509988', '509989', '509990', '509991', '509992', '509993', '509994', '509995', '509996', '509997', '509998', '509999', '627780', '636297', '636368', '650031', '650032', '650033', '650035', '650036', '650037', '650038', '650039', '650040', '650041', '650042', '650043', '650044', '650045', '650046', '650047', '650048', '650049', '650050', '650051', '650405', '650406', '650407', '650408', '650409', '650410', '650411', '650412', '650413', '650414', '650415', '650416', '650417', '650418', '650419', '650420', '650421', '650422', '650423', '650424', '650425', '650426', '650427', '650428', '650429', '650430', '650431', '650432', '650433', '650434', '650435', '650436', '650437', '650438', '650439', '650485', '650486', '650487', '650488', '650489', '650490', '650491', '650492', '650493', '650494', '650495', '650496', '650497', '650498', '650499', '650500', '650501', '650502', '650503', '650504', '650505', '650506', '650507', '650508', '650509', '650510', '650511', '650512', '650513', '650514', '650515', '650516', '650517', '650518', '650519', '650520', '650521', '650522', '650523', '650524', '650525', '650526', '650527', '650528', '650529', '650530', '650531', '650532', '650533', '650534', '650535', '650536', '650537', '650538', '650541', '650542', '650543', '650544', '650545', '650546', '650547', '650548', '650549', '650550', '650551', '650552', '650553', '650554', '650555', '650556', '650557', '650558', '650559', '650560', '650561', '650562', '650563', '650564', '650565', '650566', '650567', '650568', '650569', '650570', '650571', '650572', '650573', '650574', '650575', '650576', '650577', '650578', '650579', '650580', '650581', '650582', '650583', '650584', '650585', '650586', '650587', '650588', '650589', '650590', '650591', '650592', '650593', '650594', '650595', '650596', '650597', '650598', '650700', '650701', '650702', '650703', '650704', '650705', '650706', '650707', '650708', '650709', '650710', '650711', '650712', '650713', '650714', '650715', '650716', '650717', '650718', '650720', '650721', '650722', '650723', '650724', '650725', '650726', '650727', '650901', '650902', '650903', '650904', '650905', '650906', '650907', '650908', '650909', '650910', '650911', '650912', '650913', '650914', '650915', '650916', '650917', '650918', '650919', '650920', '651652', '651653', '651654', '651655', '651656', '651657', '651658', '651659', '651660', '651661', '651662', '651663', '651664', '651665', '651666', '651667', '651668', '651669', '651670', '651671', '651672', '651673', '651674', '651675', '651676', '651677', '651678', '651679', '655000', '655001', '655002', '655003', '655004', '655005', '655006', '655007', '655008', '655009', '655010', '655011', '655012', '655013', '655014', '655015', '655016', '655017', '655018', '655019', '655021', '655022', '655023', '655024', '655025', '655026', '655027', '655028', '655029', '655030', '655031', '655032', '655033', '655034', '655035', '655036', '655037', '655038', '655039', '655040', '655041', '655042', '655043', '655044', '655045', '655046', '655047', '655048', '655049', '655050', '655051', '655052', '655053', '655054', '655055', '655056', '655057', '655058'],
	  discover: ['6011', '622', '64', '65'],
	  hipercard: ['384100', '384140', '384160', '60'],
	  diners: ['301', '305', '36', '38'],
	  amex: ['34', '37'],
	  aura: ['50'],
	  jcb: ['35'],
	  visa: ['4'],
	  mastercard: ['5'].concat(masterRange)
	};
	module.exports = exports['default'];

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _toString = __webpack_require__(160);
	
	var _toString2 = _interopRequireDefault(_toString);
	
	var _pipe = __webpack_require__(138);
	
	var _pipe2 = _interopRequireDefault(_pipe);
	
	var _equals = __webpack_require__(120);
	
	var _equals2 = _interopRequireDefault(_equals);
	
	var _ifElse = __webpack_require__(32);
	
	var _ifElse2 = _interopRequireDefault(_ifElse);
	
	var _propEq = __webpack_require__(268);
	
	var _propEq2 = _interopRequireDefault(_propEq);
	
	var _always = __webpack_require__(37);
	
	var _always2 = _interopRequireDefault(_always);
	
	var _compose = __webpack_require__(269);
	
	var _compose2 = _interopRequireDefault(_compose);
	
	var _replace = __webpack_require__(159);
	
	var _replace2 = _interopRequireDefault(_replace);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var clean = (0, _replace2.default)(/[^0-9]/g, '');
	
	var lengthIs = (0, _compose2.default)(_always2.default, (0, _propEq2.default)('length'));
	
	var validateFrom = (0, _ifElse2.default)((0, _equals2.default)('amex'), lengthIs(4), lengthIs(3));
	
	var validate = function validate(brand) {
	  return (0, _pipe2.default)(_toString2.default, clean, validateFrom(brand));
	};
	
	exports.default = validate;
	module.exports = exports['default'];

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	var _curry3 = __webpack_require__(10);
	var equals = __webpack_require__(120);
	
	
	/**
	 * Returns `true` if the specified object property is equal, in `R.equals`
	 * terms, to the given value; `false` otherwise.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Relation
	 * @sig String -> a -> Object -> Boolean
	 * @param {String} name
	 * @param {*} val
	 * @param {*} obj
	 * @return {Boolean}
	 * @see R.equals, R.propSatisfies
	 * @example
	 *
	 *      var abby = {name: 'Abby', age: 7, hair: 'blond'};
	 *      var fred = {name: 'Fred', age: 12, hair: 'brown'};
	 *      var rusty = {name: 'Rusty', age: 10, hair: 'brown'};
	 *      var alois = {name: 'Alois', age: 15, disposition: 'surly'};
	 *      var kids = [abby, fred, rusty, alois];
	 *      var hasBrownHair = R.propEq('hair', 'brown');
	 *      R.filter(hasBrownHair, kids); //=> [fred, rusty]
	 */
	module.exports = _curry3(function propEq(name, val, obj) {
	  return equals(val, obj[name]);
	});


/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	var pipe = __webpack_require__(138);
	var reverse = __webpack_require__(270);
	
	
	/**
	 * Performs right-to-left function composition. The rightmost function may have
	 * any arity; the remaining functions must be unary.
	 *
	 * **Note:** The result of compose is not automatically curried.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Function
	 * @sig ((y -> z), (x -> y), ..., (o -> p), ((a, b, ..., n) -> o)) -> ((a, b, ..., n) -> z)
	 * @param {...Function} functions
	 * @return {Function}
	 * @see R.pipe
	 * @example
	 *
	 *      var f = R.compose(R.inc, R.negate, Math.pow);
	 *
	 *      f(3, 4); // -(3^4) + 1
	 */
	module.exports = function compose() {
	  if (arguments.length === 0) {
	    throw new Error('compose requires at least one argument');
	  }
	  return pipe.apply(this, reverse(arguments));
	};


/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	var _curry1 = __webpack_require__(6);
	var _isString = __webpack_require__(26);
	var _slice = __webpack_require__(11);
	
	
	/**
	 * Returns a new list or string with the elements or characters in reverse
	 * order.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig [a] -> [a]
	 * @sig String -> String
	 * @param {Array|String} list
	 * @return {Array|String}
	 * @example
	 *
	 *      R.reverse([1, 2, 3]);  //=> [3, 2, 1]
	 *      R.reverse([1, 2]);     //=> [2, 1]
	 *      R.reverse([1]);        //=> [1]
	 *      R.reverse([]);         //=> []
	 *
	 *      R.reverse('abc');      //=> 'cba'
	 *      R.reverse('ab');       //=> 'ba'
	 *      R.reverse('a');        //=> 'a'
	 *      R.reverse('');         //=> ''
	 */
	module.exports = _curry1(function reverse(list) {
	  return _isString(list) ? list.split('').reverse().join('') :
	                           _slice(list).reverse();
	});


/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _toString = __webpack_require__(160);
	
	var _toString2 = _interopRequireDefault(_toString);
	
	var _pipe = __webpack_require__(138);
	
	var _pipe2 = _interopRequireDefault(_pipe);
	
	var _split = __webpack_require__(244);
	
	var _split2 = _interopRequireDefault(_split);
	
	var _sum = __webpack_require__(249);
	
	var _sum2 = _interopRequireDefault(_sum);
	
	var _last = __webpack_require__(261);
	
	var _last2 = _interopRequireDefault(_last);
	
	var _init = __webpack_require__(272);
	
	var _init2 = _interopRequireDefault(_init);
	
	var _juxt3 = __webpack_require__(273);
	
	var _juxt4 = _interopRequireDefault(_juxt3);
	
	var _ = __webpack_require__(235);
	
	var _2 = _interopRequireDefault(_);
	
	var _modulo = __webpack_require__(242);
	
	var _modulo2 = _interopRequireDefault(_modulo);
	
	var _eqBy = __webpack_require__(276);
	
	var _eqBy2 = _interopRequireDefault(_eqBy);
	
	var _replace = __webpack_require__(159);
	
	var _replace2 = _interopRequireDefault(_replace);
	
	var _reduceRight = __webpack_require__(277);
	
	var _reduceRight2 = _interopRequireDefault(_reduceRight);
	
	var _addIndex = __webpack_require__(253);
	
	var _addIndex2 = _interopRequireDefault(_addIndex);
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var reduceRightIndexed = (0, _addIndex2.default)(_reduceRight2.default);
	var clean = (0, _replace2.default)(/[^0-9]/g, '');
	
	var mask = [0, 1, 2, 3, 4, -4, -3, -2, -1, 0];
	
	var sameParity = (0, _eqBy2.default)((0, _modulo2.default)(_2.default, 2));
	var finalSumReducer = function finalSumReducer(acc, digit, index, digits) {
	  return acc + (sameParity(digits.length - 1, index) ? mask[digits[index]] : 0);
	};
	
	var validate = function validate(cardNumber) {
	  var _juxt = (0, _juxt4.default)([_init2.default, _last2.default])(cardNumber),
	      _juxt2 = _slicedToArray(_juxt, 2),
	      withoutLastDigit = _juxt2[0],
	      lastDigit = _juxt2[1];
	
	  var finalSum = reduceRightIndexed(finalSumReducer, (0, _sum2.default)(withoutLastDigit), (0, _split2.default)('', withoutLastDigit));
	  var rest = 10 - finalSum % 10;
	  return (rest === 10 ? 0 : rest) === parseInt(lastDigit, 10);
	};
	
	exports.default = (0, _pipe2.default)(_toString2.default, clean, validate);
	module.exports = exports['default'];

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	var slice = __webpack_require__(142);
	
	
	/**
	 * Returns all but the last element of the given list or string.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.9.0
	 * @category List
	 * @sig [a] -> [a]
	 * @sig String -> String
	 * @param {*} list
	 * @return {*}
	 * @see R.last, R.head, R.tail
	 * @example
	 *
	 *      R.init([1, 2, 3]);  //=> [1, 2]
	 *      R.init([1, 2]);     //=> [1]
	 *      R.init([1]);        //=> []
	 *      R.init([]);         //=> []
	 *
	 *      R.init('abc');  //=> 'ab'
	 *      R.init('ab');   //=> 'a'
	 *      R.init('a');    //=> ''
	 *      R.init('');     //=> ''
	 */
	module.exports = slice(0, -1);


/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	var _arrayOf = __webpack_require__(274);
	var _curry1 = __webpack_require__(6);
	var converge = __webpack_require__(275);
	
	
	/**
	 * juxt applies a list of functions to a list of values.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.19.0
	 * @category Function
	 * @sig [(a, b, ..., m) -> n] -> ((a, b, ..., m) -> [n])
	 * @param {Array} fns An array of functions
	 * @return {Function} A function that returns a list of values after applying each of the original `fns` to its parameters.
	 * @see R.applySpec
	 * @example
	 *
	 *      var getRange = R.juxt([Math.min, Math.max]);
	 *      getRange(3, 4, 9, -3); //=> [-3, 9]
	 */
	module.exports = _curry1(function juxt(fns) {
	  return converge(_arrayOf, fns);
	});


/***/ },
/* 274 */
/***/ function(module, exports) {

	module.exports = function _arrayOf() {
	  return Array.prototype.slice.call(arguments);
	};


/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	var _curry2 = __webpack_require__(5);
	var _map = __webpack_require__(21);
	var curryN = __webpack_require__(14);
	var max = __webpack_require__(46);
	var pluck = __webpack_require__(146);
	var reduce = __webpack_require__(47);
	
	
	/**
	 * Accepts a converging function and a list of branching functions and returns
	 * a new function. When invoked, this new function is applied to some
	 * arguments, each branching function is applied to those same arguments. The
	 * results of each branching function are passed as arguments to the converging
	 * function to produce the return value.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.4.2
	 * @category Function
	 * @sig (x1 -> x2 -> ... -> z) -> [(a -> b -> ... -> x1), (a -> b -> ... -> x2), ...] -> (a -> b -> ... -> z)
	 * @param {Function} after A function. `after` will be invoked with the return values of
	 *        `fn1` and `fn2` as its arguments.
	 * @param {Array} functions A list of functions.
	 * @return {Function} A new function.
	 * @example
	 *
	 *      var add = (a, b) => a + b;
	 *      var multiply = (a, b) => a * b;
	 *      var subtract = (a, b) => a - b;
	 *
	 *      //≅ multiply( add(1, 2), subtract(1, 2) );
	 *      R.converge(multiply, [add, subtract])(1, 2); //=> -3
	 *
	 *      var add3 = (a, b, c) => a + b + c;
	 *      R.converge(add3, [multiply, add, subtract])(1, 2); //=> 4
	 */
	module.exports = _curry2(function converge(after, fns) {
	  return curryN(reduce(max, 0, pluck('length', fns)), function() {
	    var args = arguments;
	    var context = this;
	    return after.apply(context, _map(function(fn) {
	      return fn.apply(context, args);
	    }, fns));
	  });
	});


/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	var _curry3 = __webpack_require__(10);
	var equals = __webpack_require__(120);
	
	
	/**
	 * Takes a function and two values in its domain and returns `true` if the
	 * values map to the same value in the codomain; `false` otherwise.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.18.0
	 * @category Relation
	 * @sig (a -> b) -> a -> a -> Boolean
	 * @param {Function} f
	 * @param {*} x
	 * @param {*} y
	 * @return {Boolean}
	 * @example
	 *
	 *      R.eqBy(Math.abs, 5, -5); //=> true
	 */
	module.exports = _curry3(function eqBy(f, x, y) {
	  return equals(f(x), f(y));
	});


/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	var _curry3 = __webpack_require__(10);
	
	
	/**
	 * Returns a single item by iterating through the list, successively calling
	 * the iterator function and passing it an accumulator value and the current
	 * value from the array, and then passing the result to the next call.
	 *
	 * Similar to `reduce`, except moves through the input list from the right to
	 * the left.
	 *
	 * The iterator function receives two values: *(acc, value)*
	 *
	 * Note: `R.reduceRight` does not skip deleted or unassigned indices (sparse
	 * arrays), unlike the native `Array.prototype.reduce` method. For more details
	 * on this behavior, see:
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight#Description
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig (a,b -> a) -> a -> [b] -> a
	 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
	 *        current element from the array.
	 * @param {*} acc The accumulator value.
	 * @param {Array} list The list to iterate over.
	 * @return {*} The final, accumulated value.
	 * @see R.addIndex
	 * @example
	 *
	 *      var pairs = [ ['a', 1], ['b', 2], ['c', 3] ];
	 *      var flattenPairs = (acc, pair) => acc.concat(pair);
	 *
	 *      R.reduceRight(flattenPairs, [], pairs); //=> [ 'c', 3, 'b', 2, 'a', 1 ]
	 */
	module.exports = _curry3(function reduceRight(fn, acc, list) {
	  var idx = list.length - 1;
	  while (idx >= 0) {
	    acc = fn(acc, list[idx]);
	    idx -= 1;
	  }
	  return acc;
	});


/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _toString = __webpack_require__(160);
	
	var _toString2 = _interopRequireDefault(_toString);
	
	var _ifElse = __webpack_require__(32);
	
	var _ifElse2 = _interopRequireDefault(_ifElse);
	
	var _length = __webpack_require__(91);
	
	var _length2 = _interopRequireDefault(_length);
	
	var _pipe = __webpack_require__(138);
	
	var _pipe2 = _interopRequireDefault(_pipe);
	
	var _T = __webpack_require__(36);
	
	var _T2 = _interopRequireDefault(_T);
	
	var _F = __webpack_require__(279);
	
	var _F2 = _interopRequireDefault(_F);
	
	var _cond = __webpack_require__(45);
	
	var _cond2 = _interopRequireDefault(_cond);
	
	var _merge = __webpack_require__(1);
	
	var _merge2 = _interopRequireDefault(_merge);
	
	var _zipObj = __webpack_require__(280);
	
	var _zipObj2 = _interopRequireDefault(_zipObj);
	
	var _splitEvery = __webpack_require__(281);
	
	var _splitEvery2 = _interopRequireDefault(_splitEvery);
	
	var _gt = __webpack_require__(282);
	
	var _gt2 = _interopRequireDefault(_gt);
	
	var _lte = __webpack_require__(283);
	
	var _lte2 = _interopRequireDefault(_lte);
	
	var _and = __webpack_require__(34);
	
	var _and2 = _interopRequireDefault(_and);
	
	var _both = __webpack_require__(39);
	
	var _both2 = _interopRequireDefault(_both);
	
	var _equals = __webpack_require__(120);
	
	var _equals2 = _interopRequireDefault(_equals);
	
	var _prop = __webpack_require__(143);
	
	var _prop2 = _interopRequireDefault(_prop);
	
	var _lt = __webpack_require__(284);
	
	var _lt2 = _interopRequireDefault(_lt);
	
	var _add = __webpack_require__(250);
	
	var _add2 = _interopRequireDefault(_add);
	
	var _modulo = __webpack_require__(242);
	
	var _modulo2 = _interopRequireDefault(_modulo);
	
	var _replace = __webpack_require__(159);
	
	var _replace2 = _interopRequireDefault(_replace);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var clean = (0, _replace2.default)(/[^0-9]/g, '');
	
	var getCurrentDate = function getCurrentDate() {
	  var date = new Date();
	
	  return {
	    currentYear: (0, _modulo2.default)(date.getFullYear(), 1000),
	    currentMonth: (0, _add2.default)(date.getMonth(), 1)
	  };
	};
	
	var cardDateLessThanCurrentDate = function cardDateLessThanCurrentDate(props, dates) {
	  return (0, _lt2.default)((0, _prop2.default)(props[0], dates), (0, _prop2.default)(props[1], dates));
	};
	
	var isInvalidYear = function isInvalidYear(dates) {
	  return cardDateLessThanCurrentDate(['year', 'currentYear'], dates);
	};
	
	var monthLessThanCurrentMonth = function monthLessThanCurrentMonth(dates) {
	  return cardDateLessThanCurrentDate(['month', 'currentMonth'], dates);
	};
	
	var yearEqualsCurrentYear = function yearEqualsCurrentYear(dates) {
	  return (0, _equals2.default)((0, _prop2.default)('year', dates), (0, _prop2.default)('currentYear', dates));
	};
	
	var isExpiredDate = (0, _both2.default)(yearEqualsCurrentYear, monthLessThanCurrentMonth);
	
	var isValidMonth = function isValidMonth(dates) {
	  var month = (0, _prop2.default)('month', dates);
	
	  return (0, _and2.default)((0, _lte2.default)(month, 12), (0, _gt2.default)(month, 0));
	};
	
	var validateDate = function validateDate(date) {
	  var dateArray = (0, _splitEvery2.default)(2, date).map(Number);
	  var dateObj = (0, _zipObj2.default)(['month', 'year'], dateArray);
	
	  var dates = (0, _merge2.default)(dateObj, getCurrentDate());
	
	  return (0, _cond2.default)([[isExpiredDate, _F2.default], [isInvalidYear, _F2.default], [_T2.default, isValidMonth]])(dates);
	};
	
	var validate = function validate(date) {
	  var lengthIsFour = (0, _pipe2.default)(_length2.default, (0, _equals2.default)(4));
	
	  return (0, _ifElse2.default)(lengthIsFour, validateDate, _F2.default)(date);
	};
	
	exports.default = (0, _pipe2.default)(_toString2.default, clean, validate);
	module.exports = exports['default'];

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	var always = __webpack_require__(37);
	
	
	/**
	 * A function that always returns `false`. Any passed in parameters are ignored.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.9.0
	 * @category Function
	 * @sig * -> Boolean
	 * @param {*}
	 * @return {Boolean}
	 * @see R.always, R.T
	 * @example
	 *
	 *      R.F(); //=> false
	 */
	module.exports = always(false);


/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	var _curry2 = __webpack_require__(5);
	
	
	/**
	 * Creates a new object out of a list of keys and a list of values.
	 * Key/value pairing is truncated to the length of the shorter of the two lists.
	 * Note: `zipObj` is equivalent to `pipe(zipWith(pair), fromPairs)`.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.3.0
	 * @category List
	 * @sig [String] -> [*] -> {String: *}
	 * @param {Array} keys The array that will be properties on the output object.
	 * @param {Array} values The list of values on the output object.
	 * @return {Object} The object made by pairing up same-indexed elements of `keys` and `values`.
	 * @example
	 *
	 *      R.zipObj(['a', 'b', 'c'], [1, 2, 3]); //=> {a: 1, b: 2, c: 3}
	 */
	module.exports = _curry2(function zipObj(keys, values) {
	  var idx = 0;
	  var len = Math.min(keys.length, values.length);
	  var out = {};
	  while (idx < len) {
	    out[keys[idx]] = values[idx];
	    idx += 1;
	  }
	  return out;
	});


/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	var _curry2 = __webpack_require__(5);
	var slice = __webpack_require__(142);
	
	
	/**
	 * Splits a collection into slices of the specified length.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.16.0
	 * @category List
	 * @sig Number -> [a] -> [[a]]
	 * @sig Number -> String -> [String]
	 * @param {Number} n
	 * @param {Array} list
	 * @return {Array}
	 * @example
	 *
	 *      R.splitEvery(3, [1, 2, 3, 4, 5, 6, 7]); //=> [[1, 2, 3], [4, 5, 6], [7]]
	 *      R.splitEvery(3, 'foobarbaz'); //=> ['foo', 'bar', 'baz']
	 */
	module.exports = _curry2(function splitEvery(n, list) {
	  if (n <= 0) {
	    throw new Error('First argument to splitEvery must be a positive integer');
	  }
	  var result = [];
	  var idx = 0;
	  while (idx < list.length) {
	    result.push(slice(idx, idx += n, list));
	  }
	  return result;
	});


/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	var _curry2 = __webpack_require__(5);
	
	
	/**
	 * Returns `true` if the first argument is greater than the second; `false`
	 * otherwise.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Relation
	 * @sig Ord a => a -> a -> Boolean
	 * @param {*} a
	 * @param {*} b
	 * @return {Boolean}
	 * @see R.lt
	 * @example
	 *
	 *      R.gt(2, 1); //=> true
	 *      R.gt(2, 2); //=> false
	 *      R.gt(2, 3); //=> false
	 *      R.gt('a', 'z'); //=> false
	 *      R.gt('z', 'a'); //=> true
	 */
	module.exports = _curry2(function gt(a, b) { return a > b; });


/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	var _curry2 = __webpack_require__(5);
	
	
	/**
	 * Returns `true` if the first argument is less than or equal to the second;
	 * `false` otherwise.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Relation
	 * @sig Ord a => a -> a -> Boolean
	 * @param {Number} a
	 * @param {Number} b
	 * @return {Boolean}
	 * @see R.gte
	 * @example
	 *
	 *      R.lte(2, 1); //=> false
	 *      R.lte(2, 2); //=> true
	 *      R.lte(2, 3); //=> true
	 *      R.lte('a', 'z'); //=> true
	 *      R.lte('z', 'a'); //=> false
	 */
	module.exports = _curry2(function lte(a, b) { return a <= b; });


/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	var _curry2 = __webpack_require__(5);
	
	
	/**
	 * Returns `true` if the first argument is less than the second; `false`
	 * otherwise.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Relation
	 * @sig Ord a => a -> a -> Boolean
	 * @param {*} a
	 * @param {*} b
	 * @return {Boolean}
	 * @see R.gt
	 * @example
	 *
	 *      R.lt(2, 1); //=> false
	 *      R.lt(2, 2); //=> false
	 *      R.lt(2, 3); //=> true
	 *      R.lt('a', 'z'); //=> true
	 *      R.lt('z', 'a'); //=> false
	 */
	module.exports = _curry2(function lt(a, b) { return a < b; });


/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _test = __webpack_require__(255);
	
	var _test2 = _interopRequireDefault(_test);
	
	var _replace = __webpack_require__(159);
	
	var _replace2 = _interopRequireDefault(_replace);
	
	var _toString = __webpack_require__(160);
	
	var _toString2 = _interopRequireDefault(_toString);
	
	var _pipe = __webpack_require__(138);
	
	var _pipe2 = _interopRequireDefault(_pipe);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _pipe2.default)(_toString2.default, (0, _replace2.default)(/"/g, "'"), (0, _test2.default)(/^[a-zA-Z_' ]*$/));
	module.exports = exports["default"];

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _equals = __webpack_require__(120);
	
	var _equals2 = _interopRequireDefault(_equals);
	
	var _length = __webpack_require__(91);
	
	var _length2 = _interopRequireDefault(_length);
	
	var _toString = __webpack_require__(160);
	
	var _toString2 = _interopRequireDefault(_toString);
	
	var _pipe = __webpack_require__(138);
	
	var _pipe2 = _interopRequireDefault(_pipe);
	
	var _replace = __webpack_require__(159);
	
	var _replace2 = _interopRequireDefault(_replace);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var clean = (0, _replace2.default)(/[^0-9]+/g, '');
	
	exports.default = function (size) {
	  return (0, _pipe2.default)(_toString2.default, clean, _length2.default, (0, _equals2.default)(size));
	};
	
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=pagarme.js.map