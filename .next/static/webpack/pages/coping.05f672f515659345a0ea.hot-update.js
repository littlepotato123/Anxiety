self["webpackHotUpdate_N_E"]("pages/coping",{

/***/ "./node_modules/next/dist/shared/lib/amp-context.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/amp-context.js ***!
  \**********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.AmpStateContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var AmpStateContext = _react["default"].createContext({});

exports.AmpStateContext = AmpStateContext;

if (true) {
  AmpStateContext.displayName = 'AmpStateContext';
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/shared/lib/amp.js":
/*!**************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/amp.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _s = $RefreshSig$();

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.isInAmpMode = isInAmpMode;
exports.useAmp = useAmp;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _ampContext = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/shared/lib/amp-context.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function isInAmpMode() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$ampFirst = _ref.ampFirst,
      ampFirst = _ref$ampFirst === void 0 ? false : _ref$ampFirst,
      _ref$hybrid = _ref.hybrid,
      hybrid = _ref$hybrid === void 0 ? false : _ref$hybrid,
      _ref$hasQuery = _ref.hasQuery,
      hasQuery = _ref$hasQuery === void 0 ? false : _ref$hasQuery;

  return ampFirst || hybrid && hasQuery;
}

function useAmp() {
  _s();

  // Don't assign the context value to a variable to save bytes
  return isInAmpMode(_react["default"].useContext(_ampContext.AmpStateContext));
}

_s(useAmp, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/shared/lib/head-manager-context.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/head-manager-context.js ***!
  \*******************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.HeadManagerContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var HeadManagerContext = _react["default"].createContext({});

exports.HeadManagerContext = HeadManagerContext;

if (true) {
  HeadManagerContext.displayName = 'HeadManagerContext';
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/shared/lib/head.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/head.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _defineProperty = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty.js");

var _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.defaultHead = defaultHead;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _sideEffect = _interopRequireDefault(__webpack_require__(/*! ./side-effect */ "./node_modules/next/dist/shared/lib/side-effect.js"));

var _ampContext = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/shared/lib/amp-context.js");

var _headManagerContext = __webpack_require__(/*! ./head-manager-context */ "./node_modules/next/dist/shared/lib/head-manager-context.js");

var _amp = __webpack_require__(/*! ./amp */ "./node_modules/next/dist/shared/lib/amp.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

function defaultHead() {
  var inAmpMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var head = [/*#__PURE__*/_react["default"].createElement("meta", {
    charSet: "utf-8"
  })];

  if (!inAmpMode) {
    head.push( /*#__PURE__*/_react["default"].createElement("meta", {
      name: "viewport",
      content: "width=device-width"
    }));
  }

  return head;
}

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === 'string' || typeof child === 'number') {
    return list;
  } // Adds support for React.Fragment


  if (child.type === _react["default"].Fragment) {
    return list.concat(_react["default"].Children.toArray(child.props.children).reduce(function (fragmentList, fragmentChild) {
      if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

var METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp'];
/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>
 Also adds support for deduplicated `key` properties
*/

function unique() {
  var keys = new Set();
  var tags = new Set();
  var metaTypes = new Set();
  var metaCategories = {};
  return function (h) {
    var isUnique = true;
    var hasKey = false;

    if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
      hasKey = true;
      var key = h.key.slice(h.key.indexOf('$') + 1);

      if (keys.has(key)) {
        isUnique = false;
      } else {
        keys.add(key);
      }
    } // eslint-disable-next-line default-case


    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) {
          isUnique = false;
        } else {
          tags.add(h.type);
        }

        break;

      case 'meta':
        for (var i = 0, len = METATYPES.length; i < len; i++) {
          var metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) {
              isUnique = false;
            } else {
              metaTypes.add(metatype);
            }
          } else {
            var category = h.props[metatype];
            var categories = metaCategories[metatype] || new Set();

            if ((metatype !== 'name' || !hasKey) && categories.has(category)) {
              isUnique = false;
            } else {
              categories.add(category);
              metaCategories[metatype] = categories;
            }
          }
        }

        break;
    }

    return isUnique;
  };
}
/**
 *
 * @param headElements List of multiple <Head> instances
 */


function reduceComponents(headElements, props) {
  return headElements.reduce(function (list, headElement) {
    var headElementChildren = _react["default"].Children.toArray(headElement.props.children);

    return list.concat(headElementChildren);
  }, []).reduce(onlyReactElement, []).reverse().concat(defaultHead(props.inAmpMode)).filter(unique()).reverse().map(function (c, i) {
    var key = c.key || i;

    if (false) { var newProps; }

    return /*#__PURE__*/_react["default"].cloneElement(c, {
      key: key
    });
  });
}
/**
 * This component injects elements to `<head>` of your page.
 * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
 */


function Head(_ref) {
  _s();

  var children = _ref.children;
  var ampState = (0, _react).useContext(_ampContext.AmpStateContext);
  var headManager = (0, _react).useContext(_headManagerContext.HeadManagerContext);
  return /*#__PURE__*/_react["default"].createElement(_sideEffect["default"], {
    reduceComponentsToState: reduceComponents,
    headManager: headManager,
    inAmpMode: (0, _amp).isInAmpMode(ampState)
  }, children);
}

_s(Head, "sCUayZmr5V93tUjujy03KdMBCec=");

_c = Head;
var _default = Head;
exports.default = _default;

var _c;

$RefreshReg$(_c, "Head");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/shared/lib/side-effect.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/side-effect.js ***!
  \**********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _toConsumableArray = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/toConsumableArray.js");

var _classCallCheck = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js");

var _assertThisInitialized = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized */ "./node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized.js");

var _inherits = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/inherits */ "./node_modules/next/node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var isServer = false;

var _class = /*#__PURE__*/function (_react$Component) {
  _inherits(_class, _react$Component);

  var _super = _createSuper(_class);

  function _class(props) {
    var _this;

    _classCallCheck(this, _class);

    _this = _super.call(this, props);

    _this.emitChange = function () {
      if (_this._hasHeadManager) {
        _this.props.headManager.updateHead(_this.props.reduceComponentsToState(_toConsumableArray(_this.props.headManager.mountedInstances), _this.props));
      }
    };

    _this._hasHeadManager = _this.props.headManager && _this.props.headManager.mountedInstances;

    if (isServer && _this._hasHeadManager) {
      _this.props.headManager.mountedInstances.add(_assertThisInitialized(_this));

      _this.emitChange();
    }

    return _this;
  }

  _createClass(_class, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this._hasHeadManager) {
        this.props.headManager.mountedInstances.add(this);
      }

      this.emitChange();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.emitChange();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this._hasHeadManager) {
        this.props.headManager.mountedInstances["delete"](this);
      }

      this.emitChange();
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return _class;
}(_react.Component);

exports.default = _class;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./pages/coping.js":
/*!*************************!*\
  !*** ./pages/coping.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ "./node_modules/swr/dist/index.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\sopan\\OneDrive\\Documents\\Personal Projects\\anxiety\\pages\\coping.js",
    _this = undefined,
    _s = $RefreshSig$();






var fetcher = function fetcher(url) {
  return fetch(url).then(function (res) {
    return res.json();
  });
};

var i = 0;
var cope_methods = [{
  title: "Breathing",
  description: "Square Breathing, Deep Breaths, Counting Breaths to 10 or 20. This can be obvious, yet most people take advantage of such a simple technique. During panic attacks and even casual moments of anxiety or stress, this technique can be useful."
}, {
  title: "Share your Anxiety",
  description: "Don't avoid your anxious thoughts, which can make them worse. Talk them over with a friend or family member, who can help you put them in perspective."
}, {
  title: "Don't Criticize Feelings",
  description: "Instead, say, \"This is a normal, healthy, response by my body to these circumstances, which are complicated, stressful, or difficult. It's OK to feel this way.\""
}, {
  title: "Use a Mantra",
  description: "A mantra can shift your mind away from anxious thoughts that play over and over in your head, Kissen says. An example: \"These thoughts are uncomfortable, but not dangerous,\" and \"This, too, will pass.\""
}, {
  title: "Redirect Nervous Energy",
  description: "Anxiety can be like a motor revving, says licensed professional counselor Lisa Henderson. \"Take control of that energy and put it somewhere else,\" says Henderson, co-founder and chief executive officer of Synchronous Health in Nashville. \"If you're sitting there worried for example, get up and walk or pace,\" she says. \"Take a few minutes to clean something. Go outside for 5 minutes. Shorts bursts of activity can release that anxious energy.\""
}, {
  title: "Reality Check",
  description: "On scale of 1 to 100, how likely is it that the thing that I'm anxious about will happen? Do I have good reasons to think something will go wrong? Is there a chance I'm overly worried"
}];

var Coping = function Coping() {
  _s();

  var _useSWR = (0,swr__WEBPACK_IMPORTED_MODULE_2__.default)("/api/coping", fetcher),
      data = _useSWR.data,
      error = _useSWR.error;

  if (error) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      children: "Error Occured"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, _this);
  } // Refresh Button


  if (data) {
    if (data.x) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("title", {
            children: "Anxiety"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("meta", {
            name: "viewport",
            content: "initial-scale=1.0, width=device-width"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: "Yo",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
            children: cope_methods[data.x - 1].title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
            children: cope_methods[data.x - 1].description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h3", {
          children: "This page generates a random coping method, since different people react and have different affects with different methods. The best way is to try different methods, even if not diagnosed with anxiety, during stressful times."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h3", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
            onClick: function onClick() {
              return window.location.reload(false);
            },
            style: {
              margin: 10
            },
            children: "Generate New Strategy"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("ul", {
          children: cope_methods.map(function (method, i) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("li", {
              className: "list",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
                children: method.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
                children: method.description
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 33
              }, _this)]
            }, i, true, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 29
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h3", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
            href: "https://www.webmd.com/mental-health/features/ways-to-reduce-anxiety",
            children: "Sources"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/",
            children: "Back Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, _this);
    }
  } else {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }, _this);
  }
};

_s(Coping, "r2QYs02BSrn+Eu/1uMGZi8N+HnQ=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_2__.default];
});

_c = Coping;
/* harmony default export */ __webpack_exports__["default"] = (Coping);

var _c;

$RefreshReg$(_c, "Coping");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/shared/lib/head */ "./node_modules/next/dist/shared/lib/head.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \*********************************************************************************/
/***/ (function(module) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \**********************************************************************************/
/***/ (function(module) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \************************************************************************************/
/***/ (function(module) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/next/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29waW5nLjA1ZjY3MmY1MTU2NTkzNDVhMGVhLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUNiQSw4Q0FBNkM7QUFDekNHLEVBQUFBLEtBQUssRUFBRTtBQURrQyxDQUE3QztBQUdBRCx1QkFBQSxHQUEwQixLQUFLLENBQS9COztBQUNBLElBQUlHLE1BQU0sR0FBR0Msc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsNENBQUQsQ0FBUixDQUFuQzs7QUFDQSxTQUFTRCxzQkFBVCxDQUFnQ0UsR0FBaEMsRUFBcUM7QUFDakMsU0FBT0EsR0FBRyxJQUFJQSxHQUFHLENBQUNDLFVBQVgsR0FBd0JELEdBQXhCLEdBQThCO0FBQ2pDLGVBQVNBO0FBRHdCLEdBQXJDO0FBR0g7O0FBQ0QsSUFBTUosZUFBZSxHQUFHQyxNQUFNLFdBQU4sQ0FBZUssYUFBZixDQUE2QixFQUE3QixDQUF4Qjs7QUFFQVIsdUJBQUEsR0FBMEJFLGVBQTFCOztBQUNBLElBQUksTUFBdUM7QUFDdkNBLEVBQUFBLGVBQWUsQ0FBQ08sV0FBaEIsR0FBOEIsaUJBQTlCO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJZOzs7O0FBQ2JYLDhDQUE2QztBQUN6Q0csRUFBQUEsS0FBSyxFQUFFO0FBRGtDLENBQTdDO0FBR0FELG1CQUFBLEdBQXNCVSxXQUF0QjtBQUNBVixjQUFBLEdBQWlCVyxNQUFqQjs7QUFDQSxJQUFJUixNQUFNLEdBQUdDLHNCQUFzQixDQUFDQyxtQkFBTyxDQUFDLDRDQUFELENBQVIsQ0FBbkM7O0FBQ0EsSUFBSU8sV0FBVyxHQUFHUCxtQkFBTyxDQUFDLHlFQUFELENBQXpCOztBQUNBLFNBQVNELHNCQUFULENBQWdDRSxHQUFoQyxFQUFxQztBQUNqQyxTQUFPQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsVUFBWCxHQUF3QkQsR0FB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bUJBQU8sQ0FBQywwR0FBdUI7O0FBRXREO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUF5QixtQkFBbUIseUJBQXlCOzs7Ozs7Ozs7O0FDUHJFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBeUIsbUJBQW1CLHlCQUF5Qjs7Ozs7Ozs7OztBQ2hCckU7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXlCLG1CQUFtQix5QkFBeUI7Ozs7Ozs7Ozs7QUNMckU7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXlCLG1CQUFtQix5QkFBeUI7Ozs7Ozs7Ozs7QUNMckUsd0JBQXdCLG1CQUFPLENBQUMsNEdBQXdCOztBQUV4RCxzQkFBc0IsbUJBQU8sQ0FBQyx3R0FBc0I7O0FBRXBELGlDQUFpQyxtQkFBTyxDQUFDLDhIQUFpQzs7QUFFMUUsd0JBQXdCLG1CQUFPLENBQUMsNEdBQXdCOztBQUV4RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBeUIsbUJBQW1CLHlCQUF5QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NoYXJlZC9saWIvYW1wLWNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2hhcmVkL2xpYi9hbXAuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2hhcmVkL2xpYi9oZWFkLW1hbmFnZXItY29udGV4dC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zaGFyZWQvbGliL2hlYWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2hhcmVkL2xpYi9zaWRlLWVmZmVjdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29waW5nLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9oZWFkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5BbXBTdGF0ZUNvbnRleHQgPSB2b2lkIDA7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuY29uc3QgQW1wU3RhdGVDb250ZXh0ID0gX3JlYWN0LmRlZmF1bHQuY3JlYXRlQ29udGV4dCh7XG59KTtcbmV4cG9ydHMuQW1wU3RhdGVDb250ZXh0ID0gQW1wU3RhdGVDb250ZXh0O1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBBbXBTdGF0ZUNvbnRleHQuZGlzcGxheU5hbWUgPSAnQW1wU3RhdGVDb250ZXh0Jztcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YW1wLWNvbnRleHQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmlzSW5BbXBNb2RlID0gaXNJbkFtcE1vZGU7XG5leHBvcnRzLnVzZUFtcCA9IHVzZUFtcDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX2FtcENvbnRleHQgPSByZXF1aXJlKFwiLi9hbXAtY29udGV4dFwiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGlzSW5BbXBNb2RlKHsgYW1wRmlyc3QgPWZhbHNlICwgaHlicmlkID1mYWxzZSAsIGhhc1F1ZXJ5ID1mYWxzZSAsICB9ID0ge1xufSkge1xuICAgIHJldHVybiBhbXBGaXJzdCB8fCBoeWJyaWQgJiYgaGFzUXVlcnk7XG59XG5mdW5jdGlvbiB1c2VBbXAoKSB7XG4gICAgLy8gRG9uJ3QgYXNzaWduIHRoZSBjb250ZXh0IHZhbHVlIHRvIGEgdmFyaWFibGUgdG8gc2F2ZSBieXRlc1xuICAgIHJldHVybiBpc0luQW1wTW9kZShfcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9hbXBDb250ZXh0LkFtcFN0YXRlQ29udGV4dCkpO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hbXAuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLkhlYWRNYW5hZ2VyQ29udGV4dCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5jb25zdCBIZWFkTWFuYWdlckNvbnRleHQgPSBfcmVhY3QuZGVmYXVsdC5jcmVhdGVDb250ZXh0KHtcbn0pO1xuZXhwb3J0cy5IZWFkTWFuYWdlckNvbnRleHQgPSBIZWFkTWFuYWdlckNvbnRleHQ7XG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIEhlYWRNYW5hZ2VyQ29udGV4dC5kaXNwbGF5TmFtZSA9ICdIZWFkTWFuYWdlckNvbnRleHQnO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1oZWFkLW1hbmFnZXItY29udGV4dC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdEhlYWQgPSBkZWZhdWx0SGVhZDtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9zaWRlRWZmZWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9zaWRlLWVmZmVjdFwiKSk7XG52YXIgX2FtcENvbnRleHQgPSByZXF1aXJlKFwiLi9hbXAtY29udGV4dFwiKTtcbnZhciBfaGVhZE1hbmFnZXJDb250ZXh0ID0gcmVxdWlyZShcIi4vaGVhZC1tYW5hZ2VyLWNvbnRleHRcIik7XG52YXIgX2FtcCA9IHJlcXVpcmUoXCIuL2FtcFwiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICAgIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgbmV3T2JqID0ge1xuICAgICAgICB9O1xuICAgICAgICBpZiAob2JqICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvcih2YXIga2V5IGluIG9iail7XG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlc2MgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDoge1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG5ld09iai5kZWZhdWx0ID0gb2JqO1xuICAgICAgICByZXR1cm4gbmV3T2JqO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGRlZmF1bHRIZWFkKGluQW1wTW9kZSA9IGZhbHNlKSB7XG4gICAgY29uc3QgaGVhZCA9IFtcbiAgICAgICAgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICBjaGFyU2V0OiBcInV0Zi04XCJcbiAgICAgICAgfSlcbiAgICBdO1xuICAgIGlmICghaW5BbXBNb2RlKSB7XG4gICAgICAgIGhlYWQucHVzaCgvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgIG5hbWU6IFwidmlld3BvcnRcIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwid2lkdGg9ZGV2aWNlLXdpZHRoXCJcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICByZXR1cm4gaGVhZDtcbn1cbmZ1bmN0aW9uIG9ubHlSZWFjdEVsZW1lbnQobGlzdCwgY2hpbGQpIHtcbiAgICAvLyBSZWFjdCBjaGlsZHJlbiBjYW4gYmUgXCJzdHJpbmdcIiBvciBcIm51bWJlclwiIGluIHRoaXMgY2FzZSB3ZSBpZ25vcmUgdGhlbSBmb3IgYmFja3dhcmRzIGNvbXBhdFxuICAgIGlmICh0eXBlb2YgY2hpbGQgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBjaGlsZCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgfVxuICAgIC8vIEFkZHMgc3VwcG9ydCBmb3IgUmVhY3QuRnJhZ21lbnRcbiAgICBpZiAoY2hpbGQudHlwZSA9PT0gX3JlYWN0LmRlZmF1bHQuRnJhZ21lbnQpIHtcbiAgICAgICAgcmV0dXJuIGxpc3QuY29uY2F0KF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGQucHJvcHMuY2hpbGRyZW4pLnJlZHVjZSgoZnJhZ21lbnRMaXN0LCBmcmFnbWVudENoaWxkKT0+e1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBmcmFnbWVudENoaWxkID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgZnJhZ21lbnRDaGlsZCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnJhZ21lbnRMaXN0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZyYWdtZW50TGlzdC5jb25jYXQoZnJhZ21lbnRDaGlsZCk7XG4gICAgICAgIH0sIFtdKSk7XG4gICAgfVxuICAgIHJldHVybiBsaXN0LmNvbmNhdChjaGlsZCk7XG59XG5jb25zdCBNRVRBVFlQRVMgPSBbXG4gICAgJ25hbWUnLFxuICAgICdodHRwRXF1aXYnLFxuICAgICdjaGFyU2V0JyxcbiAgICAnaXRlbVByb3AnXG5dO1xuLypcbiByZXR1cm5zIGEgZnVuY3Rpb24gZm9yIGZpbHRlcmluZyBoZWFkIGNoaWxkIGVsZW1lbnRzXG4gd2hpY2ggc2hvdWxkbid0IGJlIGR1cGxpY2F0ZWQsIGxpa2UgPHRpdGxlLz5cbiBBbHNvIGFkZHMgc3VwcG9ydCBmb3IgZGVkdXBsaWNhdGVkIGBrZXlgIHByb3BlcnRpZXNcbiovIGZ1bmN0aW9uIHVuaXF1ZSgpIHtcbiAgICBjb25zdCBrZXlzID0gbmV3IFNldCgpO1xuICAgIGNvbnN0IHRhZ3MgPSBuZXcgU2V0KCk7XG4gICAgY29uc3QgbWV0YVR5cGVzID0gbmV3IFNldCgpO1xuICAgIGNvbnN0IG1ldGFDYXRlZ29yaWVzID0ge1xuICAgIH07XG4gICAgcmV0dXJuIChoKT0+e1xuICAgICAgICBsZXQgaXNVbmlxdWUgPSB0cnVlO1xuICAgICAgICBsZXQgaGFzS2V5ID0gZmFsc2U7XG4gICAgICAgIGlmIChoLmtleSAmJiB0eXBlb2YgaC5rZXkgIT09ICdudW1iZXInICYmIGgua2V5LmluZGV4T2YoJyQnKSA+IDApIHtcbiAgICAgICAgICAgIGhhc0tleSA9IHRydWU7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBoLmtleS5zbGljZShoLmtleS5pbmRleE9mKCckJykgKyAxKTtcbiAgICAgICAgICAgIGlmIChrZXlzLmhhcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgaXNVbmlxdWUgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAga2V5cy5hZGQoa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVmYXVsdC1jYXNlXG4gICAgICAgIHN3aXRjaChoLnR5cGUpe1xuICAgICAgICAgICAgY2FzZSAndGl0bGUnOlxuICAgICAgICAgICAgY2FzZSAnYmFzZSc6XG4gICAgICAgICAgICAgICAgaWYgKHRhZ3MuaGFzKGgudHlwZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNVbmlxdWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0YWdzLmFkZChoLnR5cGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ21ldGEnOlxuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDAsIGxlbiA9IE1FVEFUWVBFUy5sZW5ndGg7IGkgPCBsZW47IGkrKyl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1ldGF0eXBlID0gTUVUQVRZUEVTW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWgucHJvcHMuaGFzT3duUHJvcGVydHkobWV0YXR5cGUpKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1ldGF0eXBlID09PSAnY2hhclNldCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtZXRhVHlwZXMuaGFzKG1ldGF0eXBlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVW5pcXVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGFUeXBlcy5hZGQobWV0YXR5cGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSBoLnByb3BzW21ldGF0eXBlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBtZXRhQ2F0ZWdvcmllc1ttZXRhdHlwZV0gfHwgbmV3IFNldCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChtZXRhdHlwZSAhPT0gJ25hbWUnIHx8ICFoYXNLZXkpICYmIGNhdGVnb3JpZXMuaGFzKGNhdGVnb3J5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVW5pcXVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXMuYWRkKGNhdGVnb3J5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRhQ2F0ZWdvcmllc1ttZXRhdHlwZV0gPSBjYXRlZ29yaWVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc1VuaXF1ZTtcbiAgICB9O1xufVxuLyoqXG4gKlxuICogQHBhcmFtIGhlYWRFbGVtZW50cyBMaXN0IG9mIG11bHRpcGxlIDxIZWFkPiBpbnN0YW5jZXNcbiAqLyBmdW5jdGlvbiByZWR1Y2VDb21wb25lbnRzKGhlYWRFbGVtZW50cywgcHJvcHMpIHtcbiAgICByZXR1cm4gaGVhZEVsZW1lbnRzLnJlZHVjZSgobGlzdCwgaGVhZEVsZW1lbnQpPT57XG4gICAgICAgIGNvbnN0IGhlYWRFbGVtZW50Q2hpbGRyZW4gPSBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi50b0FycmF5KGhlYWRFbGVtZW50LnByb3BzLmNoaWxkcmVuKTtcbiAgICAgICAgcmV0dXJuIGxpc3QuY29uY2F0KGhlYWRFbGVtZW50Q2hpbGRyZW4pO1xuICAgIH0sIFtdKS5yZWR1Y2Uob25seVJlYWN0RWxlbWVudCwgW10pLnJldmVyc2UoKS5jb25jYXQoZGVmYXVsdEhlYWQocHJvcHMuaW5BbXBNb2RlKSkuZmlsdGVyKHVuaXF1ZSgpKS5yZXZlcnNlKCkubWFwKChjLCBpKT0+e1xuICAgICAgICBjb25zdCBrZXkgPSBjLmtleSB8fCBpO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdkZXZlbG9wbWVudCcgJiYgcHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0ZPTlRTICYmICFwcm9wcy5pbkFtcE1vZGUpIHtcbiAgICAgICAgICAgIGlmIChjLnR5cGUgPT09ICdsaW5rJyAmJiBjLnByb3BzWydocmVmJ10gJiYgLy8gVE9ETyhwcmF0ZWVrYmhAKTogUmVwbGFjZSB0aGlzIHdpdGggY29uc3QgZnJvbSBgY29uc3RhbnRzYCB3aGVuIHRoZSB0cmVlIHNoYWtpbmcgd29ya3MuXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzJyxcbiAgICAgICAgICAgICAgICAnaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvJ1xuICAgICAgICAgICAgXS5zb21lKCh1cmwpPT5jLnByb3BzWydocmVmJ10uc3RhcnRzV2l0aCh1cmwpXG4gICAgICAgICAgICApKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3UHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgICAgIC4uLmMucHJvcHMgfHwge1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBuZXdQcm9wc1snZGF0YS1ocmVmJ10gPSBuZXdQcm9wc1snaHJlZiddO1xuICAgICAgICAgICAgICAgIG5ld1Byb3BzWydocmVmJ10gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgLy8gQWRkIHRoaXMgYXR0cmlidXRlIHRvIG1ha2UgaXQgZWFzeSB0byBpZGVudGlmeSBvcHRpbWl6ZWQgdGFnc1xuICAgICAgICAgICAgICAgIG5ld1Byb3BzWydkYXRhLW9wdGltaXplZC1mb250cyddID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoYywgbmV3UHJvcHMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoYywge1xuICAgICAgICAgICAga2V5XG4gICAgICAgIH0pKTtcbiAgICB9KTtcbn1cbi8qKlxuICogVGhpcyBjb21wb25lbnQgaW5qZWN0cyBlbGVtZW50cyB0byBgPGhlYWQ+YCBvZiB5b3VyIHBhZ2UuXG4gKiBUbyBhdm9pZCBkdXBsaWNhdGVkIGB0YWdzYCBpbiBgPGhlYWQ+YCB5b3UgY2FuIHVzZSB0aGUgYGtleWAgcHJvcGVydHksIHdoaWNoIHdpbGwgbWFrZSBzdXJlIGV2ZXJ5IHRhZyBpcyBvbmx5IHJlbmRlcmVkIG9uY2UuXG4gKi8gZnVuY3Rpb24gSGVhZCh7IGNoaWxkcmVuICB9KSB7XG4gICAgY29uc3QgYW1wU3RhdGUgPSAoMCwgX3JlYWN0KS51c2VDb250ZXh0KF9hbXBDb250ZXh0LkFtcFN0YXRlQ29udGV4dCk7XG4gICAgY29uc3QgaGVhZE1hbmFnZXIgPSAoMCwgX3JlYWN0KS51c2VDb250ZXh0KF9oZWFkTWFuYWdlckNvbnRleHQuSGVhZE1hbmFnZXJDb250ZXh0KTtcbiAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9zaWRlRWZmZWN0LmRlZmF1bHQsIHtcbiAgICAgICAgcmVkdWNlQ29tcG9uZW50c1RvU3RhdGU6IHJlZHVjZUNvbXBvbmVudHMsXG4gICAgICAgIGhlYWRNYW5hZ2VyOiBoZWFkTWFuYWdlcixcbiAgICAgICAgaW5BbXBNb2RlOiAoMCwgX2FtcCkuaXNJbkFtcE1vZGUoYW1wU3RhdGUpXG4gICAgfSwgY2hpbGRyZW4pKTtcbn1cbnZhciBfZGVmYXVsdCA9IEhlYWQ7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aGVhZC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5jb25zdCBpc1NlcnZlciA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnO1xuY2xhc3MgX2NsYXNzIGV4dGVuZHMgX3JlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuZW1pdENoYW5nZSA9ICgpPT57XG4gICAgICAgICAgICBpZiAodGhpcy5faGFzSGVhZE1hbmFnZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhlYWRNYW5hZ2VyLnVwZGF0ZUhlYWQodGhpcy5wcm9wcy5yZWR1Y2VDb21wb25lbnRzVG9TdGF0ZShbXG4gICAgICAgICAgICAgICAgICAgIC4uLnRoaXMucHJvcHMuaGVhZE1hbmFnZXIubW91bnRlZEluc3RhbmNlc1xuICAgICAgICAgICAgICAgIF0sIHRoaXMucHJvcHMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5faGFzSGVhZE1hbmFnZXIgPSB0aGlzLnByb3BzLmhlYWRNYW5hZ2VyICYmIHRoaXMucHJvcHMuaGVhZE1hbmFnZXIubW91bnRlZEluc3RhbmNlcztcbiAgICAgICAgaWYgKGlzU2VydmVyICYmIHRoaXMuX2hhc0hlYWRNYW5hZ2VyKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmhlYWRNYW5hZ2VyLm1vdW50ZWRJbnN0YW5jZXMuYWRkKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5lbWl0Q2hhbmdlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGlmICh0aGlzLl9oYXNIZWFkTWFuYWdlcikge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5oZWFkTWFuYWdlci5tb3VudGVkSW5zdGFuY2VzLmFkZCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVtaXRDaGFuZ2UoKTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgICB0aGlzLmVtaXRDaGFuZ2UoKTtcbiAgICB9XG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIGlmICh0aGlzLl9oYXNIZWFkTWFuYWdlcikge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5oZWFkTWFuYWdlci5tb3VudGVkSW5zdGFuY2VzLmRlbGV0ZSh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVtaXRDaGFuZ2UoKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBfY2xhc3M7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNpZGUtZWZmZWN0LmpzLm1hcCIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XHJcblxyXG5jb25zdCBmZXRjaGVyID0gKHVybCkgPT4gZmV0Y2godXJsKS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG5cclxuY29uc3QgaSA9IDA7XHJcblxyXG5jb25zdCBjb3BlX21ldGhvZHMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiQnJlYXRoaW5nXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiU3F1YXJlIEJyZWF0aGluZywgRGVlcCBCcmVhdGhzLCBDb3VudGluZyBCcmVhdGhzIHRvIDEwIG9yIDIwLiBUaGlzIGNhbiBiZSBvYnZpb3VzLCB5ZXQgbW9zdCBwZW9wbGUgdGFrZSBhZHZhbnRhZ2Ugb2Ygc3VjaCBhIHNpbXBsZSB0ZWNobmlxdWUuIER1cmluZyBwYW5pYyBhdHRhY2tzIGFuZCBldmVuIGNhc3VhbCBtb21lbnRzIG9mIGFueGlldHkgb3Igc3RyZXNzLCB0aGlzIHRlY2huaXF1ZSBjYW4gYmUgdXNlZnVsLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIlNoYXJlIHlvdXIgQW54aWV0eVwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkRvbid0IGF2b2lkIHlvdXIgYW54aW91cyB0aG91Z2h0cywgd2hpY2ggY2FuIG1ha2UgdGhlbSB3b3JzZS4gVGFsayB0aGVtIG92ZXIgd2l0aCBhIGZyaWVuZCBvciBmYW1pbHkgbWVtYmVyLCB3aG8gY2FuIGhlbHAgeW91IHB1dCB0aGVtIGluIHBlcnNwZWN0aXZlLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIkRvbid0IENyaXRpY2l6ZSBGZWVsaW5nc1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkluc3RlYWQsIHNheSwgXFxcIlRoaXMgaXMgYSBub3JtYWwsIGhlYWx0aHksIHJlc3BvbnNlIGJ5IG15IGJvZHkgdG8gdGhlc2UgY2lyY3Vtc3RhbmNlcywgd2hpY2ggYXJlIGNvbXBsaWNhdGVkLCBzdHJlc3NmdWwsIG9yIGRpZmZpY3VsdC4gSXQncyBPSyB0byBmZWVsIHRoaXMgd2F5LlxcXCJcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJVc2UgYSBNYW50cmFcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJBIG1hbnRyYSBjYW4gc2hpZnQgeW91ciBtaW5kIGF3YXkgZnJvbSBhbnhpb3VzIHRob3VnaHRzIHRoYXQgcGxheSBvdmVyIGFuZCBvdmVyIGluIHlvdXIgaGVhZCwgS2lzc2VuIHNheXMuIEFuIGV4YW1wbGU6IFxcXCJUaGVzZSB0aG91Z2h0cyBhcmUgdW5jb21mb3J0YWJsZSwgYnV0IG5vdCBkYW5nZXJvdXMsXFxcIiBhbmQgXFxcIlRoaXMsIHRvbywgd2lsbCBwYXNzLlxcXCJcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJSZWRpcmVjdCBOZXJ2b3VzIEVuZXJneVwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkFueGlldHkgY2FuIGJlIGxpa2UgYSBtb3RvciByZXZ2aW5nLCBzYXlzIGxpY2Vuc2VkIHByb2Zlc3Npb25hbCBjb3Vuc2Vsb3IgTGlzYSBIZW5kZXJzb24uIFxcXCJUYWtlIGNvbnRyb2wgb2YgdGhhdCBlbmVyZ3kgYW5kIHB1dCBpdCBzb21ld2hlcmUgZWxzZSxcXFwiIHNheXMgSGVuZGVyc29uLCBjby1mb3VuZGVyIGFuZCBjaGllZiBleGVjdXRpdmUgb2ZmaWNlciBvZiBTeW5jaHJvbm91cyBIZWFsdGggaW4gTmFzaHZpbGxlLiBcXFwiSWYgeW91J3JlIHNpdHRpbmcgdGhlcmUgd29ycmllZCBmb3IgZXhhbXBsZSwgZ2V0IHVwIGFuZCB3YWxrIG9yIHBhY2UsXFxcIiBzaGUgc2F5cy4gXFxcIlRha2UgYSBmZXcgbWludXRlcyB0byBjbGVhbiBzb21ldGhpbmcuIEdvIG91dHNpZGUgZm9yIDUgbWludXRlcy4gU2hvcnRzIGJ1cnN0cyBvZiBhY3Rpdml0eSBjYW4gcmVsZWFzZSB0aGF0IGFueGlvdXMgZW5lcmd5LlxcXCJcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJSZWFsaXR5IENoZWNrXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGBPbiBzY2FsZSBvZiAxIHRvIDEwMCwgaG93IGxpa2VseSBpcyBpdCB0aGF0IHRoZSB0aGluZyB0aGF0IEknbSBhbnhpb3VzIGFib3V0IHdpbGwgaGFwcGVuPyBEbyBJIGhhdmUgZ29vZCByZWFzb25zIHRvIHRoaW5rIHNvbWV0aGluZyB3aWxsIGdvIHdyb25nPyBJcyB0aGVyZSBhIGNoYW5jZSBJJ20gb3Zlcmx5IHdvcnJpZWRgXHJcbiAgICB9XHJcbl1cclxuXHJcbmNvbnN0IENvcGluZyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihgL2FwaS9jb3BpbmdgLCBmZXRjaGVyKVxyXG5cclxuICAgIGlmKGVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5FcnJvciBPY2N1cmVkPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlZnJlc2ggQnV0dG9uXHJcblxyXG4gICAgaWYoZGF0YSkge1xyXG4gICAgICAgIGlmKGRhdGEueCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRpdGxlPkFueGlldHk8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiWW9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2NvcGVfbWV0aG9kc1tkYXRhLnggLSAxXS50aXRsZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntjb3BlX21ldGhvZHNbZGF0YS54IC0gMV0uZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBwYWdlIGdlbmVyYXRlcyBhIHJhbmRvbSBjb3BpbmcgbWV0aG9kLCBzaW5jZSBkaWZmZXJlbnQgcGVvcGxlIHJlYWN0IGFuZCBoYXZlIGRpZmZlcmVudCBhZmZlY3RzIHdpdGggZGlmZmVyZW50IG1ldGhvZHMuIFRoZSBiZXN0IHdheSBpcyB0byB0cnkgZGlmZmVyZW50IG1ldGhvZHMsIGV2ZW4gaWYgbm90IGRpYWdub3NlZCB3aXRoIGFueGlldHksIGR1cmluZyBzdHJlc3NmdWwgdGltZXMuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoZmFsc2UpfSBzdHlsZT17eyBtYXJnaW46IDEwIH19PkdlbmVyYXRlIE5ldyBTdHJhdGVneTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvcGVfbWV0aG9kcy5tYXAoKG1ldGhvZCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aX0gY2xhc3NOYW1lPVwibGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnttZXRob2QudGl0bGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnttZXRob2QuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy53ZWJtZC5jb20vbWVudGFsLWhlYWx0aC9mZWF0dXJlcy93YXlzLXRvLXJlZHVjZS1hbnhpZXR5XCI+U291cmNlczwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5CYWNrIEhvbWU8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgTG9hZGluZy4uLlxyXG4gICAgICAgICAgICA8L2Rpdj4gICAgIFxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29waW5nOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3NoYXJlZC9saWIvaGVhZCcpXG4iLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIik7XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRob3V0SG9sZXM7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBpdGVyW1N5bWJvbC5pdGVyYXRvcl0gIT0gbnVsbCB8fCBpdGVyW1wiQEBpdGVyYXRvclwiXSAhPSBudWxsKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlU3ByZWFkO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBhcnJheVdpdGhvdXRIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aG91dEhvbGVzLmpzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5LmpzXCIpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiKTtcblxudmFyIG5vbkl0ZXJhYmxlU3ByZWFkID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVTcHJlYWQuanNcIik7XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90b0NvbnN1bWFibGVBcnJheTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJBbXBTdGF0ZUNvbnRleHQiLCJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIm9iaiIsIl9fZXNNb2R1bGUiLCJjcmVhdGVDb250ZXh0IiwiZGlzcGxheU5hbWUiLCJpc0luQW1wTW9kZSIsInVzZUFtcCIsIl9hbXBDb250ZXh0IiwiYW1wRmlyc3QiLCJoeWJyaWQiLCJoYXNRdWVyeSIsInVzZUNvbnRleHQiLCJIZWFkTWFuYWdlckNvbnRleHQiLCJkZWZhdWx0SGVhZCIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwiX3NpZGVFZmZlY3QiLCJfaGVhZE1hbmFnZXJDb250ZXh0IiwiX2FtcCIsIm5ld09iaiIsImtleSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImRlc2MiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJnZXQiLCJzZXQiLCJpbkFtcE1vZGUiLCJoZWFkIiwiY3JlYXRlRWxlbWVudCIsImNoYXJTZXQiLCJwdXNoIiwibmFtZSIsImNvbnRlbnQiLCJvbmx5UmVhY3RFbGVtZW50IiwibGlzdCIsImNoaWxkIiwidHlwZSIsIkZyYWdtZW50IiwiY29uY2F0IiwiQ2hpbGRyZW4iLCJ0b0FycmF5IiwicHJvcHMiLCJjaGlsZHJlbiIsInJlZHVjZSIsImZyYWdtZW50TGlzdCIsImZyYWdtZW50Q2hpbGQiLCJNRVRBVFlQRVMiLCJ1bmlxdWUiLCJrZXlzIiwiU2V0IiwidGFncyIsIm1ldGFUeXBlcyIsIm1ldGFDYXRlZ29yaWVzIiwiaCIsImlzVW5pcXVlIiwiaGFzS2V5IiwiaW5kZXhPZiIsInNsaWNlIiwiaGFzIiwiYWRkIiwiaSIsImxlbiIsImxlbmd0aCIsIm1ldGF0eXBlIiwiY2F0ZWdvcnkiLCJjYXRlZ29yaWVzIiwicmVkdWNlQ29tcG9uZW50cyIsImhlYWRFbGVtZW50cyIsImhlYWRFbGVtZW50IiwiaGVhZEVsZW1lbnRDaGlsZHJlbiIsInJldmVyc2UiLCJmaWx0ZXIiLCJtYXAiLCJjIiwicHJvY2VzcyIsImVudiIsIl9fTkVYVF9PUFRJTUlaRV9GT05UUyIsInNvbWUiLCJ1cmwiLCJzdGFydHNXaXRoIiwibmV3UHJvcHMiLCJ1bmRlZmluZWQiLCJjbG9uZUVsZW1lbnQiLCJIZWFkIiwiYW1wU3RhdGUiLCJoZWFkTWFuYWdlciIsInJlZHVjZUNvbXBvbmVudHNUb1N0YXRlIiwiX2RlZmF1bHQiLCJpc1NlcnZlciIsIl9jbGFzcyIsImVtaXRDaGFuZ2UiLCJfaGFzSGVhZE1hbmFnZXIiLCJ1cGRhdGVIZWFkIiwibW91bnRlZEluc3RhbmNlcyIsIkNvbXBvbmVudCIsIkxpbmsiLCJ1c2VTV1IiLCJmZXRjaGVyIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImNvcGVfbWV0aG9kcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJDb3BpbmciLCJkYXRhIiwiZXJyb3IiLCJ4Iiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJtYXJnaW4iLCJtZXRob2QiXSwic291cmNlUm9vdCI6IiJ9